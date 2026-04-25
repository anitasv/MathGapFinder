let theorems = [];
let references = {};
const expandedCourses = {};
let currentIndex = 0;
let totalScore = 0;
// Scoring constants - change here to adjust point values for each option.
const SCORE_A = 10;
const SCORE_B = 9;
const SCORE_C = 4;
const SCORE_D = 0;
const MAX_SCORE = SCORE_A;
// A level is treated as "mastered" (skipped in blindspot suggestions)
// when its score exceeds this fraction of its max.
const BLINDSPOT_THRESHOLD = SCORE_B / MAX_SCORE;
// answers[i] = points awarded for question i, or undefined if unanswered/skipped
let answers = [];

// Per-course tally: { [course]: { score, max, count, answered } }
const courseScores = {};
// Tracks which level rows are expanded in the score breakdown.
const expandedLevels = {};

function toggleLevel(level) {
    expandedLevels[level] = !expandedLevels[level];
    renderCourseScores(false);
}


// Answer <-> 3-bit code mapping.
// 0 = unanswered, 1=A(10), 2=B(7), 3=C(2), 4=D(0)
const POINTS_TO_CODE = { [SCORE_A]: 1, [SCORE_B]: 2, [SCORE_C]: 3, [SCORE_D]: 4 };
const CODE_TO_POINTS = { 1: SCORE_A, 2: SCORE_B, 3: SCORE_C, 4: SCORE_D };


function b64urlEncode(bytes) {
    let s = '';
    for (let i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]);
    return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
function b64urlDecode(str) {
    str = str.replace(/-/g, '+').replace(/_/g, '/');
    while (str.length % 4) str += '=';
    const bin = atob(str);
    const out = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
}

function encodeState() {
    const n = theorems.length;
    if (!n) return '';
    const totalBits = n * 3;
    const bytes = new Uint8Array(Math.ceil(totalBits / 8));
    for (let i = 0; i < n; i++) {
        const code = POINTS_TO_CODE[answers[i]] || 0;
        // Write 3 bits MSB-first starting at bit i*3.
        for (let b = 0; b < 3; b++) {
            const bit = (code >> (2 - b)) & 1;
            if (bit) {
                const pos = i * 3 + b;
                bytes[pos >> 3] |= (1 << (7 - (pos & 7)));
            }
        }
    }
    // Trim trailing zero bytes for shorter URL.
    let end = bytes.length;
    while (end > 0 && bytes[end - 1] === 0) end--;
    if (end === 0) return '';
    return b64urlEncode(bytes.slice(0, end));
}

function decodeState(str, n) {
    const out = new Array(n);
    if (!str) return out;
    let bytes;
    try { bytes = b64urlDecode(str); } catch (e) { return out; }
    for (let i = 0; i < n; i++) {
        let code = 0;
        for (let b = 0; b < 3; b++) {
            const pos = i * 3 + b;
            const byteIdx = pos >> 3;
            if (byteIdx >= bytes.length) break;
            const bit = (bytes[byteIdx] >> (7 - (pos & 7))) & 1;
            code = (code << 1) | bit;
        }
        if (CODE_TO_POINTS.hasOwnProperty(code)) out[i] = CODE_TO_POINTS[code];
    }
    return out;
}

function updateHash() {
    const s = encodeState();
    const qPart = currentIndex >= theorems.length ? 'results' : (currentIndex + 1);
    const newHash = '#q=' + qPart + (s ? '&s=' + s : '');
    if (location.hash !== newHash) {
        history.replaceState(null, '', newHash);
    }
}

function readHash() {
    const h = location.hash || '';
    const mq = /[#&]q=(\d+|results)/.exec(h);
    const ms = /[#&]s=([A-Za-z0-9_-]+)/.exec(h);
    let index = 0;
    if (mq) {
        if (mq[1] === 'results') {
            index = theorems.length;
        } else {
            const n = parseInt(mq[1], 10) - 1;
            if (n >= 0 && n <= theorems.length) index = n;
        }
    }
    return { index, state: ms ? ms[1] : '' };
}

function applyDecodedAnswers(decoded) {
    for (let i = 0; i < decoded.length; i++) {
        const points = decoded[i];
        if (points === undefined) continue;
        const t = theorems[i];
        const c = (t && t.course) || 'Uncategorized';
        answers[i] = points;
        if (courseScores[c]) {
            courseScores[c].score += points;
            courseScores[c].answered += 1;
        }
        totalScore += points;
    }
}


function goTo(index) {
    if (index < 0 || index > theorems.length) return;
    currentIndex = index;
    updateHash();
    renderTheorem();
}

function goPrev() {
    if (currentIndex > 0) goTo(currentIndex - 1);
}

function goNext() {
    if (currentIndex < theorems.length) goTo(currentIndex + 1);
}

function restartQuiz() {
    if (!confirm('Restart quiz? All answers will be cleared.')) return;
    answers = [];
    totalScore = 0;
    Object.keys(courseScores).forEach(c => {
        courseScores[c].score = 0;
        courseScores[c].answered = 0;
    });
    document.getElementById('score-board').innerText =
        'Total Score: 0 / ' + (theorems.length * MAX_SCORE);
    renderCourseScores(false);
    goTo(0);

}


// The source (Theorems.MD / theorems.json) uses pandoc-style math
// delimiters: every (...) wraps inline math and every [...] wraps
// display math. Convert them to MathJax delimiters \( \) and \[ \].
// We scan top-level balanced groups so nested parens like
// "(c\in(a,b))" are kept intact inside a single \( ... \) wrapper.
function convertMathDelimiters(s) {
    if (!s) return s;
    let out = '';
    let i = 0;
    while (i < s.length) {
        const ch = s[i];
        if (ch === '(' || ch === '[') {
            const open = ch;
            const close = ch === '(' ? ')' : ']';
            // Find matching close, tracking nesting of the same kind.
            let depth = 1;
            let j = i + 1;
            while (j < s.length && depth > 0) {
                if (s[j] === open) depth++;
                else if (s[j] === close) depth--;
                if (depth === 0) break;
                j++;
            }
            if (depth === 0) {
                const inner = s.slice(i + 1, j);
                // Only treat as math if the contents have a LaTeX
                // control sequence, a digit, or a math operator.
                // Plain prose like "(in probability or almost surely)"
                // should remain literal parentheses.
                // Math iff contents contain a LaTeX control
                // sequence (e.g. \frac, \mu, \in) or a digit.
                // Otherwise it's plain prose like "(f)", "[a,b]",
                // "(in probability or almost surely)".
                // Math if contents contain a LaTeX control sequence
                // (e.g. \frac, \mu, \in), a digit, curly braces, OR
                // every alphabetic "word" is a single letter
                // (e.g. "a,b", "f", "x y").
                const hasControlOrNumOrBraces = /\\[a-zA-Z]+|\d|[{}]/.test(inner);
                const words = inner.match(/[A-Za-z]+/g) || [];
                const allSingleLetters = words.length > 0 &&
                    words.every(w => w.length === 1);
                const isMath = hasControlOrNumOrBraces || allSingleLetters;
                if (isMath) {
                    out += (open === '(' ? '\\(' : '\\[') + inner +
                           (open === '(' ? '\\)' : '\\]');
                } else {
                    out += open + inner + close;
                }
                i = j + 1;
                continue;
            }
        }
        out += ch;
        i++;
    }
    return out;
}


async function loadTheorems() {
    try {
        const response = await fetch(window.THEOREMS_URL);
        theorems = await response.json();
        renderTheorem();
    } catch (err) {
        document.getElementById('quiz-content').innerText = 'Error loading theorems: ' + err.message;
    }
}

async function loadReferences() {
    try {
        const response = await fetch(window.REFERENCES_URL);
        references = await response.json();
    } catch (err) {
        console.warn('Could not load ' + window.REFERENCES_URL + ':', err);
        references = {};
    }
}

// Convert markdown-ish *italic* to <em>, escape HTML.
function escapeHTML(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function renderRefText(s) {
    return escapeHTML(s).replace(/\*([^*]+)\*/g, '<em>$1</em>');
}

function findReferenceKey(course) {
    if (!course) return null;
    if (references[course]) return course;
    // Try matching ignoring whitespace/case.
    const norm = (x) => x.toLowerCase().replace(/\s+/g, ' ').trim();
    const target = norm(course);
    return Object.keys(references).find(k => norm(k) === target) || null;
}

function renderReferenceHTML(course) {
    const key = findReferenceKey(course);
    if (!key) {
        return `<div class="ref-detail"><em>No study references available for &ldquo;${escapeHTML(course)}&rdquo;.</em></div>`;
    }
    const ref = references[key];
    let html = `<div class="ref-detail"><h4>How to study: ${escapeHTML(key)}</h4>`;
    if (ref.textbooks && ref.textbooks.length) {
        html += `<strong>Textbooks</strong><ul>`;
        ref.textbooks.forEach(b => { html += `<li>${renderRefText(b)}</li>`; });
        html += `</ul>`;
    }
    if (ref.courses && ref.courses.length) {
        html += `<strong>Courses</strong><ul>`;
        ref.courses.forEach(c => {
            const note = c.note ? ' ' + escapeHTML(c.note) : '';
            html += `<li><a href="${escapeHTML(c.url)}" target="_blank" rel="noopener">${escapeHTML(c.title)}</a>${note}</li>`;
        });
        html += `</ul>`;
    }
    html += `</div>`;
    return html;
}

function toggleCourseRef(course) {
    expandedCourses[course] = !expandedCourses[course];
    renderCourseScores(false);
}

function toggleInlineRef(course) {
    const el = document.getElementById('inline-refs');
    if (!el) return;
    if (el.dataset.course === course && el.innerHTML) {
        el.innerHTML = '';
        el.dataset.course = '';
    } else {
        el.innerHTML = renderReferenceHTML(course);
        el.dataset.course = course;
    }
}

function initCourseScores() {
    theorems.forEach(t => {
        const c = t.course || 'Uncategorized';
        if (!courseScores[c]) courseScores[c] = { score: 0, max: 0, count: 0, answered: 0 };
        courseScores[c].max += MAX_SCORE;

        courseScores[c].count += 1;
    });
}

function renderCourseScores(final = false) {
    const el = document.getElementById('course-scores');
    // Group by level (first part before comma).
    const levels = {};
    Object.keys(courseScores).forEach(course => {
        const level = course.split(',')[0].trim();
        if (!levels[level]) levels[level] = [];
        levels[level].push(course);
    });
    const levelOrder = ['High School', 'Undergraduate', 'Graduate'];
    const sortedLevels = Object.keys(levels).sort((a, b) => {
        const ia = levelOrder.indexOf(a), ib = levelOrder.indexOf(b);
        return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
    });

    // Compute per-level totals once so we can both render the bars
    // and identify the earliest "blindspot" level (first level whose
    // score is below 100%).
    const levelTotals = {};
    sortedLevels.forEach(level => {
        let lScore = 0, lMax = 0;
        levels[level].forEach(c => {
            lScore += courseScores[c].score;
            lMax += courseScores[c].max;
        });
        levelTotals[level] = { score: lScore, max: lMax };
    });

    let html = `<h3>Score by Course Level</h3>`;
    sortedLevels.forEach(level => {

        let lScore = 0, lMax = 0, lAns = 0, lCount = 0;
        levels[level].forEach(c => {
            lScore += courseScores[c].score;
            lMax += courseScores[c].max;
            lAns += courseScores[c].answered;
            lCount += courseScores[c].count;
        });
        const pct = lMax ? (lScore / lMax) * 100 : 0;
        const open = !!expandedLevels[level];
        const safeLevel = level.replace(/'/g, "\\'");
        html += `
        <div class="level-row" onclick="toggleLevel('${safeLevel}')">
            <div class="level-header">
                <span class="level-caret${open ? ' open' : ''}">▶</span>
                <span class="level-name">${level}</span>
                <div class="level-bar"><div class="level-bar-fill" style="width:${pct.toFixed(1)}%"></div></div>
                <span class="level-stats">${lScore} / ${lMax} (${pct.toFixed(1)}%)</span>
            </div>
            <div class="level-detail${open ? ' open' : ''}" onclick="event.stopPropagation()">`;
        // Sort courses best-to-worst by percentage of max.
        const sortedCourses = levels[level].slice().sort((a, b) => {
            const pa = courseScores[a].max ? courseScores[a].score / courseScores[a].max : 0;
            const pb = courseScores[b].max ? courseScores[b].score / courseScores[b].max : 0;
            return pb - pa;
        });
        sortedCourses.forEach(c => {
            const cs = courseScores[c];
            const subject = c.includes(',') ? c.substring(c.indexOf(',') + 1).trim() : c;
            const cpct = cs.max ? (cs.score / cs.max) * 100 : 0;
            const safeC = c.replace(/'/g, "\\'");
            const hasRef = !!findReferenceKey(c);
            html += `
                <div class="course-row">
                    <span class="course-name${hasRef ? ' clickable' : ''}"${hasRef ? ` onclick="toggleCourseRef('${safeC}')" title="Click for study references"` : ''}>${subject}</span>
                    <div class="course-bar"><div class="course-bar-fill" style="width:${cpct.toFixed(1)}%"></div></div>
                    <span class="course-stats">${cs.score}/${cs.max} (${cpct.toFixed(0)}%) · ${cs.answered}/${cs.count}</span>
                </div>`;
            if (expandedCourses[c]) {
                html += renderReferenceHTML(c);
            }
        });
        html += `</div></div>`;
    });

    // Blindspots: pick earliest level whose score is below the
    // BLINDSPOT_THRESHOLD fraction of its max, and surface the 3
    // courses with the largest headroom (max - score).
    const blindLevel = sortedLevels.find(l => {
        const t = levelTotals[l];
        return t.max > 0 && t.score < t.max * BLINDSPOT_THRESHOLD;
    });

    if (blindLevel) {
        const blindCourses = levels[blindLevel].slice()
            .map(c => ({ c, headroom: courseScores[c].max - courseScores[c].score }))
            .filter(x => x.headroom > 0)
            .sort((a, b) => b.headroom - a.headroom)
            .slice(0, 3);
        if (blindCourses.length) {
            html += `<h3>Blindspots <span style="font-weight:normal;font-size:0.8em;color:#777;">(${blindLevel})</span></h3>`;
            html += `<div style="margin-left:28px;">`;
            blindCourses.forEach(({ c, headroom }) => {
                const cs = courseScores[c];
                const subject = c.includes(',') ? c.substring(c.indexOf(',') + 1).trim() : c;
                const cpct = cs.max ? (cs.score / cs.max) * 100 : 0;
                const safeC = c.replace(/'/g, "\\'");
                const hasRef = !!findReferenceKey(c);
                html += `
                    <div class="course-row">
                        <span class="course-name${hasRef ? ' clickable' : ''}"${hasRef ? ` onclick="toggleCourseRef('${safeC}')" title="Click for study references"` : ''}>${subject}</span>
                        <div class="course-bar"><div class="course-bar-fill" style="width:${cpct.toFixed(1)}%; background:#e74c3c;"></div></div>
                        <span class="course-stats">${cs.score}/${cs.max} (${cpct.toFixed(0)}%) · headroom ${headroom}</span>
                    </div>`;
                if (expandedCourses[c]) {
                    html += renderReferenceHTML(c);
                }
            });
            html += `</div>`;
        }
    }

    el.innerHTML = html;

}


function renderTheorem() {
    const container = document.getElementById('quiz-content');
    const quizBox = document.getElementById('quiz-container');
    if (currentIndex >= theorems.length) {
        container.innerHTML = '';
        if (quizBox) quizBox.style.display = 'none';
        renderCourseScores(true);
        return;
    }
    if (quizBox) quizBox.style.display = '';

    const t = theorems[currentIndex];
    const prev = answers[currentIndex];
    const sel = (p) => prev === p ? ' selected' : '';
    container.innerHTML = `
        <div class="title">${t.id}. ${t.title}</div>
        <div id="inline-refs"></div>
        <div class="statement"><strong>Statement:</strong> ${convertMathDelimiters(t.statement)}</div>
        ${t.proof_structure ? `<details class="proof-hint"><summary>💡 Show proof hint</summary><div class="hint-body">${convertMathDelimiters(t.proof_structure)}</div></details>` : ''}
        <div class="options">
            <button class="opt${sel(SCORE_A)}" onclick="handleAnswer(${SCORE_A})">A) Yes, I know theorem and proof. (${SCORE_A} points)</button>
            <button class="opt${sel(SCORE_B)}" onclick="handleAnswer(${SCORE_B})">B) No, but I can prove it looking at statement. (${SCORE_B} points)</button>
            <button class="opt${sel(SCORE_C)}" onclick="handleAnswer(${SCORE_C})">C) Yes, I understand the theorem and how to apply it but not prove it. (${SCORE_C} points)</button>
            <button class="opt${sel(SCORE_D)}" onclick="handleAnswer(${SCORE_D})">D) No, I don't understand. (${SCORE_D} points)</button>

        </div>
        <div class="nav">
            <button onclick="goPrev()" ${currentIndex === 0 ? 'disabled' : ''}>← Back</button>
            <button onclick="goNext()" ${currentIndex >= theorems.length - 1 ? 'disabled' : ''}>Forward →</button>
        </div>
    `;

    if (window.MathJax && window.MathJax.typesetPromise) {
        window.MathJax.typesetPromise([container]).catch((e) => console.error(e));
    }
}

function handleAnswer(points) {
    const t = theorems[currentIndex];
    const c = (t && t.course) || 'Uncategorized';
    const prev = answers[currentIndex];
    if (prev !== undefined) {
        // Changing an existing answer: adjust totals by the delta.
        if (courseScores[c]) {
            courseScores[c].score += (points - prev);
        }
        totalScore += (points - prev);
    } else {
        if (courseScores[c]) {
            courseScores[c].score += points;
            courseScores[c].answered += 1;
        }
        totalScore += points;
    }
    answers[currentIndex] = points;
    document.getElementById('score-board').innerText =
        'Total Score: ' + totalScore + ' / ' + (theorems.length * MAX_SCORE);
    renderCourseScores(false);

    if (currentIndex < theorems.length - 1) {
        goTo(currentIndex + 1);
    } else {
        goTo(currentIndex + 1); // shows complete screen
    }
}

document.addEventListener('keydown', (e) => {
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
    if (e.key === 'ArrowLeft') { e.preventDefault(); goPrev(); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); goNext(); }
});

window.addEventListener('hashchange', () => {
    const { index } = readHash();
    if (index !== currentIndex) {
        currentIndex = index;
        renderTheorem();
    }
});

async function start() {
    await Promise.all([loadTheorems(), loadReferences()]);
    initCourseScores();
    const { index, state } = readHash();
    if (state) {
        const decoded = decodeState(state, theorems.length);
        applyDecodedAnswers(decoded);
    }
    currentIndex = index;
    document.getElementById('score-board').innerText =
        'Total Score: ' + totalScore + ' / ' + (theorems.length * MAX_SCORE);
    updateHash();

    renderTheorem();
    renderCourseScores(false);
}

start();
