let theorems = [];
let references = {};
const expandedCourses = {};
let currentIndex = 0;
let totalScore = 0;
// Scoring constants - change here to adjust point values for each option.
// Scoring uses a Fibonacci-style non-linear scale so that the gaps
// between levels reflect the actual effort/skill jump between them:
//   D=0  -> can't do anything
//   C=1  -> recognize / can apply but cannot prove (minutes of exposure)
//   B=5  -> can prove the theorem given its statement (hours-days)
//   A=8  -> fully internalized: knows statement and proof unaided (weeks)
// The big jump from C(1) to B(5) captures that learning a proof is a
// substantially larger skill increment than merely being able to apply
// a theorem -- e.g. recalling vs proving Tychonoff's theorem.
const SCORE_A = 8;
const SCORE_B = 5;
const SCORE_C = 1;
const SCORE_D = 0;
const MAX_SCORE = SCORE_A;
// A level is treated as "mastered" (skipped in blindspot suggestions)
// when its score exceeds this fraction of its max.
const BLINDSPOT_THRESHOLD = SCORE_B / MAX_SCORE;
// answers[i] = points awarded for question i, or undefined if unanswered/skipped
let answers = [];
// When true, the user is viewing a shared results page (#p=share).
// They see read-only results plus a "Try it yourself" CTA instead of
// the normal share/restart controls, and answers are not persisted
// back into the URL hash.
let shareView = false;
// Optional display name attached to a shared results link via #...&n=...
let shareName = '';



// Per-course tally: { [course]: { score, max, count, answered } }
const courseScores = {};
// Tracks which level rows are expanded in the score breakdown.
const expandedLevels = {};

function toggleLevel(level) {
    expandedLevels[level] = !expandedLevels[level];
    renderCourseScores(false);
}


// Answer <-> 3-bit code mapping.
// 0 = unanswered, 1=A(8), 2=B(5), 3=C(1), 4=D(0)
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
    let newHash;
    if (shareView) {
        // Preserve p=share + n=name so refreshes / back nav keep the
        // shared read-only view, but still surface q= as the user
        // navigates between questions.
        newHash = '#p=share&q=' + qPart + (s ? '&s=' + s : '');
        const nm = (shareName || '').trim();
        if (nm) newHash += '&n=' + encodeURIComponent(nm);
    } else {
        newHash = '#q=' + qPart + (s ? '&s=' + s : '');
    }
    if (location.hash !== newHash) {
        history.replaceState(null, '', newHash);
    }
}

function readHash() {
    const h = location.hash || '';
    const mq = /[#&]q=(\d+|results)/.exec(h);
    const ms = /[#&]s=([A-Za-z0-9_-]+)/.exec(h);
    const mp = /[#&]p=([A-Za-z0-9_-]+)/.exec(h);
    const mn = /[#&]n=([^&]+)/.exec(h);
    let index = 0;
    if (mq) {
        if (mq[1] === 'results') {
            index = theorems.length;
        } else {
            const n = parseInt(mq[1], 10) - 1;
            if (n >= 0 && n <= theorems.length) index = n;
        }
    }
    const page = mp ? mp[1] : '';
    if (page === 'share') index = theorems.length;
    let name = '';
    if (mn) {
        try { name = decodeURIComponent(mn[1].replace(/\+/g, ' ')); } catch (e) {}
    }
    return { index, state: ms ? ms[1] : '', page, name };
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


// Theorem source uses GitHub-flavored math delimiters: $...$ for
// inline and $$...$$ for display. MathJax is configured in
// mathprof.html to recognize both, so we render statements/proof
// hints verbatim with no preprocessing.


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

    if (final) {
        html += renderShareHTML();
    }

    el.innerHTML = html;

    if (final) {
        updateShareLinks();
    }
}

function buildShareSummary() {
    // Build a short text summary of total score + per-level breakdown.
    const lines = [];
    const totalMax = theorems.length * MAX_SCORE;
    const pct = totalMax ? Math.round((totalScore / totalMax) * 100) : 0;
    const who = (shareName || '').trim();
    if (who) {
        lines.push(`${who} scored ${totalScore}/${totalMax} (${pct}%) on Math Gap Finder!`);
    } else {
        lines.push(`I scored ${totalScore}/${totalMax} (${pct}%) on Math Gap Finder!`);
    }
    // Per-level summary.
    const levels = {};
    Object.keys(courseScores).forEach(course => {
        const level = course.split(',')[0].trim();
        if (!levels[level]) levels[level] = { score: 0, max: 0 };
        levels[level].score += courseScores[course].score;
        levels[level].max += courseScores[course].max;
    });
    const levelOrder = ['High School', 'Undergraduate', 'Graduate'];
    const sortedLevels = Object.keys(levels).sort((a, b) => {
        const ia = levelOrder.indexOf(a), ib = levelOrder.indexOf(b);
        return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
    });
    sortedLevels.forEach(l => {
        const t = levels[l];
        const lpct = t.max ? Math.round((t.score / t.max) * 100) : 0;
        lines.push(`• ${l}: ${t.score}/${t.max} (${lpct}%)`);
    });
    return lines.join('\n');
}

function getShareURL() {
    // Build a "share" page URL that displays the same results to the
    // recipient but offers a "Try it yourself" CTA instead of letting
    // them keep modifying these answers.
    const s = encodeState();
    let hash = '#p=share' + (s ? '&s=' + s : '');
    const nm = (shareName || '').trim();
    if (nm) hash += '&n=' + encodeURIComponent(nm);
    return location.origin + location.pathname + hash;
}

function getOwnURL() {
    // Bare URL to the quiz home, used by the "Try it yourself" button
    // on shared pages to start a fresh attempt.
    return location.origin + location.pathname;
}

function renderShareHTML() {
    if (shareView) {
        // On a shared page we don't render the big share box — there's
        // a small "Try it yourself" button shown elsewhere.
        return '';
    }
    const nameVal = escapeHTML(shareName || '');
    return `
        <div id="share-box">
            <h3>📣 Share your results</h3>
            <div>Show your friends where your math blind spots are — challenge them to beat your score!</div>
            <div class="share-name-row">
                <label for="share-name-input">Your name (optional):</label>
                <input id="share-name-input" type="text" maxlength="40" value="${nameVal}" placeholder="e.g. Abc" oninput="onShareNameInput(this.value)" />
            </div>
            <div class="share-buttons">
                <button onclick="shareNative()">Share…</button>
                <a id="share-twitter" href="#" target="_blank" rel="noopener">𝕏 / Twitter</a>
                <a id="share-facebook" href="#" target="_blank" rel="noopener">Facebook</a>
                <a id="share-linkedin" href="#" target="_blank" rel="noopener">LinkedIn</a>
                <a id="share-reddit" href="#" target="_blank" rel="noopener">Reddit</a>
                <a id="share-whatsapp" href="#" target="_blank" rel="noopener">WhatsApp</a>
                <a id="share-telegram" href="#" target="_blank" rel="noopener">Telegram</a>
                <a id="share-email" href="#">Email</a>
                <button onclick="copyShareLink()">📋 Copy link</button>
                <span id="share-status"></span>
            </div>
        </div>
    `;
}

function onShareNameInput(v) {
    shareName = (v || '').slice(0, 40);
    updateShareLinks();
}

function tryItYourself(e) {
    if (e) e.preventDefault();
    // Wipe the shared state and start from question 1.
    shareView = false;
    shareName = '';
    answers = [];
    totalScore = 0;
    Object.keys(courseScores).forEach(c => {
        courseScores[c].score = 0;
        courseScores[c].answered = 0;
    });
    document.getElementById('score-board').innerText =
        'Total Score: 0 / ' + (theorems.length * MAX_SCORE);
    document.body.classList.remove('share-view');
    history.replaceState(null, '', '#q=1');
    goTo(0);
}

function updateShareLinks() {
    if (shareView) return;
    const url = getShareURL();
    const summary = buildShareSummary();
    const eu = encodeURIComponent(url);
    const et = encodeURIComponent(summary);
    const etu = encodeURIComponent(summary + '\n\n');
    const map = {
        'share-twitter': `https://twitter.com/intent/tweet?text=${etu}&url=${eu}`,
        'share-facebook': `https://www.facebook.com/sharer/sharer.php?u=${eu}&quote=${et}`,
        'share-linkedin': `https://www.linkedin.com/sharing/share-offsite/?url=${eu}`,
        'share-reddit': `https://www.reddit.com/submit?url=${eu}&title=${et}`,
        'share-whatsapp': `https://api.whatsapp.com/send?text=${etu}${eu}`,
        'share-telegram': `https://t.me/share/url?url=${eu}&text=${et}`,
        'share-email': `mailto:?subject=${encodeURIComponent('My Math Gap Finder results')}&body=${etu}${eu}`,
    };
    Object.keys(map).forEach(id => {
        const el = document.getElementById(id);
        if (el) el.href = map[id];
    });
}

function copyShareLink() {
    const text = buildShareSummary() + '\n\n' + getShareURL();
    const status = document.getElementById('share-status');
    const done = (msg) => {
        if (status) {
            status.innerText = msg;
            setTimeout(() => { if (status) status.innerText = ''; }, 2500);
        }
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => done('Copied!'),
            () => done('Copy failed'));
    } else {
        try {
            const ta = document.createElement('textarea');
            ta.value = text;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
            done('Copied!');
        } catch (e) { done('Copy failed'); }
    }
}

function shareNative() {
    const data = {
        title: 'Math Gap Finder',
        text: buildShareSummary(),
        url: getShareURL(),
    };
    if (navigator.share) {
        navigator.share(data).catch(() => {});
    } else {
        copyShareLink();
    }
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
    const optionLabels = {
        [SCORE_A]: `A) Yes, I know theorem and proof. (${SCORE_A} points)`,
        [SCORE_B]: `B) No, but I can prove it looking at statement. (${SCORE_B} points)`,
        [SCORE_C]: `C) Yes, I understand the theorem and how to apply it but not prove it. (${SCORE_C} points)`,
        [SCORE_D]: `D) No, I don't understand. (${SCORE_D} points)`,
    };
    let optionsHTML;
    if (shareView) {
        // Read-only: show only the answer the sharer chose (or
        // "(unanswered)" if they skipped this question).
        if (prev !== undefined && optionLabels.hasOwnProperty(prev)) {
            optionsHTML = `<button class="opt selected" disabled>${optionLabels[prev]}</button>`;
        } else {
            optionsHTML = `<button class="opt" disabled style="font-style:italic;color:#888;">(unanswered)</button>`;
        }
    } else {
        optionsHTML = `
            <button class="opt${sel(SCORE_A)}" onclick="handleAnswer(${SCORE_A})">${optionLabels[SCORE_A]}</button>
            <button class="opt${sel(SCORE_B)}" onclick="handleAnswer(${SCORE_B})">${optionLabels[SCORE_B]}</button>
            <button class="opt${sel(SCORE_C)}" onclick="handleAnswer(${SCORE_C})">${optionLabels[SCORE_C]}</button>
            <button class="opt${sel(SCORE_D)}" onclick="handleAnswer(${SCORE_D})">${optionLabels[SCORE_D]}</button>
        `;
    }
    container.innerHTML = `
        <div class="title">${t.id}. ${t.title}</div>
        <div id="inline-refs"></div>
        <div class="statement"><strong>Statement:</strong> ${t.statement}</div>
        ${t.proof_structure ? `<details class="proof-hint"><summary>💡 Show proof hint</summary><div class="hint-body">${t.proof_structure}</div></details>` : ''}
        <div class="options">
            ${optionsHTML}
        </div>
        <div class="nav">
            <button onclick="goPrev()" title="Previous (←)" ${currentIndex === 0 ? 'disabled' : ''}>← Back</button>
            <span class="nav-hint" style="font-size:0.8em; color:#888; align-self:center;">Tip: Arrow keys ←↕→ </span>
            <button onclick="goNext()" title="Next (→)" ${currentIndex >= theorems.length - 1 ? 'disabled' : ''}>Forward →</button>
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
    else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        if (shareView) return;
        const opts = Array.from(document.querySelectorAll('.options .opt:not([disabled])'));
        if (!opts.length) return;
        e.preventDefault();
        let idx = opts.indexOf(document.activeElement);
        if (idx === -1) {
            // Default to currently selected option, else first.
            idx = opts.findIndex(o => o.classList.contains('selected'));
            if (idx === -1) idx = e.key === 'ArrowDown' ? -1 : opts.length;
        }
        const delta = e.key === 'ArrowDown' ? 1 : -1;
        const next = (idx + delta + opts.length) % opts.length;
        opts[next].focus();
    } else if (e.key === 'Enter') {
        if (shareView) return;
        const ae = document.activeElement;
        if (ae && ae.classList && ae.classList.contains('opt') && !ae.disabled) {
            e.preventDefault();
            ae.click();
        }
    }
});


window.addEventListener('hashchange', () => {
    const { index, page, name } = readHash();
    const wasShare = shareView;
    shareView = (page === 'share');
    shareName = name || '';
    if (wasShare !== shareView || shareView) {
        applyShareViewChrome();
    }
    if (index !== currentIndex || wasShare !== shareView) {
        currentIndex = index;
        renderTheorem();
        if (currentIndex >= theorems.length) {
            renderCourseScores(true);
        }
    }
});

async function start() {
    await Promise.all([loadTheorems(), loadReferences()]);
    initCourseScores();
    const { index, state, page, name } = readHash();
    if (state) {
        const decoded = decodeState(state, theorems.length);
        applyDecodedAnswers(decoded);
    }
    shareView = (page === 'share');
    shareName = name || '';
    applyShareViewChrome();
    currentIndex = index;
    document.getElementById('score-board').innerText =
        'Total Score: ' + totalScore + ' / ' + (theorems.length * MAX_SCORE);
    updateHash();

    renderTheorem();
    renderCourseScores(currentIndex >= theorems.length);
}

function applyShareViewChrome() {
    // Shows / hides the share-only header bits (custom title, small
    // "Try it yourself" button) and toggles the .share-view body class
    // so the score board / Restart row are hidden.
    const titleEl = document.querySelector('.header h1');
    const taglineEl = document.querySelector('.tagline');
    const tryBtnId = 'try-yourself-btn';
    let tryBtn = document.getElementById(tryBtnId);
    if (shareView) {
        document.body.classList.add('share-view');
        if (titleEl) {
            const who = (shareName || '').trim();
            titleEl.innerText = who ? `${who}'s Math Gap results!` : 'Shared Math Gap results';
        }
        if (taglineEl) {
            taglineEl.innerText = '';
            taglineEl.style.display = 'none';
        }
        if (!tryBtn) {
            tryBtn = document.createElement('a');
            tryBtn.id = tryBtnId;
            tryBtn.href = getOwnURL();
            tryBtn.className = 'try-yourself-btn';
            tryBtn.innerText = '🚀 Try it yourself';
            tryBtn.onclick = tryItYourself;
            const tagline = document.querySelector('.tagline');
            if (tagline && tagline.parentNode) {
                tagline.parentNode.insertBefore(tryBtn, tagline.nextSibling);
            } else {
                document.body.insertBefore(tryBtn, document.body.firstChild);
            }
        }
    } else {
        document.body.classList.remove('share-view');
        if (titleEl) titleEl.innerText = 'Math Gap Finder';
        if (taglineEl) {
            taglineEl.innerText = 'Discover your blind spots and chart your path through mathematics.';
            taglineEl.style.display = '';
        }
        if (tryBtn && tryBtn.parentNode) tryBtn.parentNode.removeChild(tryBtn);
    }
}

start();

