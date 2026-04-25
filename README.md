# Math Gap Finder

> Discover your blind spots and chart your path through mathematics.

🌐 **Try it live:** [mathgapfinder.com](https://mathgapfinder.com/)

Math Gap Finder is a single-page quiz that walks you through important
theorems from **High School** all the way through **Graduate Level**
mathematics. For each theorem you say whether you know it, vaguely
remember it, or have never seen it, and the app builds a per-course /
per-level breakdown showing where your gaps are. Each course in your
results links to recommended textbooks and free online courses (MIT
OCW, Khan Academy, Stanford, Harvard, Princeton, etc.) so you have a
concrete next step.

The app is a static HTML file (`src/mathprof.html`) plus a JavaScript
file (`src/mathprof.js`) that loads two JSON data files
(`data/theorems.json`, `data/references.json`).

## Project layout

```
.
├── src/                  # source code
│   ├── mathprof.html     # app shell (HTML + CSS, MathJax)
│   ├── mathprof.js       # app logic (vanilla JS)
│   ├── parse_theorems.py
│   ├── parse_references.py
│   ├── list_courses.py
│   ├── sort_theorems.py
│   ├── split_theorems.py
│   └── release.py
├── data/                 # generated JSON (loaded by the app)
│   ├── theorems.json
│   └── references.json
├── docs/                 # human-editable markdown sources
│   ├── Theorems.MD       # source of truth for theorem list
│   ├── References.md     # textbooks + online courses by Level → Subject
│   └── Courses.MD        # generated list of courses
└── README.md
```

| File | Purpose |
| --- | --- |
| `src/mathprof.html` | App shell: HTML + CSS. Uses MathJax for math rendering. |
| `src/mathprof.js` | App logic: vanilla JavaScript loaded by `mathprof.html`. |
| `docs/Theorems.MD` | Human-editable list of theorems (title, statement, course, difficulty, proof hint). Source of truth. |
| `data/theorems.json` | Generated from `docs/Theorems.MD` by `src/parse_theorems.py`. Loaded by the app. |
| `docs/Courses.MD` | Generated list of courses derived from the `Course:` field of every theorem. |
| `docs/References.md` | Human-editable: textbooks and online courses, grouped by Level → Subject. |
| `data/references.json` | Generated from `docs/References.md` by `src/parse_references.py`. Loaded by the app. |
| `src/release.py` | Builds `dist/` for deployment to a static host. |
| `src/sort_theorems.py`, `src/split_theorems.py` | Utility scripts for bulk editing the theorem list. |

## Building

You only need Python 3 — there is no npm / bundler step.

```sh
python src/release.py
```

This produces a `dist/` folder containing:

- `index.html` — a copy of `src/mathprof.html` with the JS and JSON
  references rewritten to hashed filenames.
- `mathprof_<hash>.js`
- `theorems_<hash>.json`
- `references_<hash>.json`

The `<hash>` is a short base64url-encoded SHA-256 of the file contents,
so any change to a file produces a new filename. This means you can
serve `dist/` from any static host (GitHub Pages, S3, Cloudflare Pages,
Netlify, plain `nginx`, …) with **far-future cache headers** on the JS
and JSON files and never worry about stale caches: when the contents
change, the URL changes.

The JSON URLs are injected into the page via a tiny inline `<script>`
block in `mathprof.html` that sets `window.THEOREMS_URL` and
`window.REFERENCES_URL`; `mathprof.js` reads from those globals. So
editing `data/*.json` only changes the hashed JSON filenames and
`index.html`; `mathprof_<hash>.js` keeps the same hash and stays cached.

The contents of `dist/` are exactly what you upload to your static
server — nothing else is needed at runtime.

## Running locally

For development you can serve the repo root directly (no need to run
`release.py` first — `src/mathprof.html` references
`../data/theorems.json` and `../data/references.json`):

```sh
python -m http.server 8080
# then open http://localhost:8080/src/mathprof.html
```

You should also `python src/release.py` and serve `dist/` to confirm
the release build works before sending a PR.

## Contributing math content

The list of theorems, the course mapping, and the references are all
**AI generated** as a starting point, so expect mistakes — wrong
statements, wrong course assignments, awkward difficulty ratings,
duplicate or missing theorems, broken references, etc. Fixes are very
welcome. The workflow is:

1. **Edit `docs/Theorems.MD`.** Each theorem is a numbered block
   separated by `---`, with the fields:

   ```
   N. **Title**

   **Statement:** ...

   **Course:** Level, Subject     (e.g. "Undergraduate, Linear Algebra")

   **Difficulty:** 2.5            (a number, roughly 1–10)

   **Proof hint:** ...
   ```

   Math is written in LaTeX. (Note: many existing entries use plain
   parentheses `(...)` / `[...]` instead of `\(...\)` / `\[...\]`,
   which is the source of most of the rendering bugs — see below.)

2. **Regenerate `data/theorems.json`:**

   ```sh
   python src/parse_theorems.py
   ```

3. **Regenerate `docs/Courses.MD`:**

   ```sh
   python src/list_courses.py
   ```

4. **If `git diff docs/Courses.MD` shows a new course**, add a matching
   `### Subject` section under the right `## Level` heading in
   `docs/References.md`, with at least one textbook and one online
   course. Use the same `Level, Subject` naming used in the theorem's
   `Course:` field, otherwise the app won't be able to match
   references to the course.

5. **Regenerate `data/references.json`:**

   ```sh
   python src/parse_references.py
   ```

6. **Test locally** with `python -m http.server 8080`, and also do a
   release build (`python src/release.py`) and test `dist/index.html`.

7. Open a pull request including the regenerated `data/theorems.json`,
   `docs/Courses.MD`, and (if changed) `data/references.json`.

## Contributing to the code

CSS lives inline in `src/mathprof.html`; all JavaScript lives in
`src/mathprof.js`. There is no build step or framework, just vanilla
JS and MathJax 3.

There are some known bugs around math rendering, fix in javascript or 
Theorems.MD not raise tickets.

For everything else, please send a pull request, or open an issue on
[GitHub](https://github.com/anitasv/MathGapFinder/issues).
