# Math Gap Finder

> Discover your blind spots and chart your path through mathematics.

Math Gap Finder is a single-page quiz that walks you through important
theorems from **High School** all the way through **Graduate Level**
mathematics. For each theorem you say whether you know it, vaguely
remember it, or have never seen it, and the app builds a per-course /
per-level breakdown showing where your gaps are. Each course in your
results links to recommended textbooks and free online courses (MIT
OCW, Khan Academy, Stanford, Harvard, Princeton, etc.) so you have a
concrete next step.

The whole app is a single static HTML file (`mathprof.html`) that
loads two JSON data files (`theorems.json`, `references.json`) — no
server or build toolchain required.

## Project layout

| File | Purpose |
| --- | --- |
| `mathprof.html` | The entire app: HTML + CSS + JavaScript. Uses MathJax for math rendering. |
| `Theorems.MD` | Human-editable list of theorems (title, statement, course, difficulty, proof hint). Source of truth. |
| `theorems.json` | Generated from `Theorems.MD` by `parse_theorems.py`. Loaded by the app. |
| `Courses.MD` | Generated list of courses derived from the `Course:` field of every theorem. |
| `References.md` | Human-editable: textbooks and online courses, grouped by Level → Subject. |
| `references.json` | Generated from `References.md` by `parse_references.py`. Loaded by the app. |
| `release.py` | Builds `dist/` for deployment to a static host. |
| `parse_theorems.py` / `list_courses.py` / `parse_references.py` | Conversion scripts (see below). |
| `sort_theorems.py`, `split_theorems.py`, `UpdateTheorems.MD` | Utility scripts and notes for bulk editing the theorem list. |

## Building

You only need Python 3 — there is no npm / bundler step.

```sh
python release.py
```

This produces a `dist/` folder containing:

- `index.html` — a copy of `mathprof.html` with the JSON references
  rewritten to hashed filenames.
- `theorems_<hash>.json`
- `references_<hash>.json`

The `<hash>` is a short base64url-encoded SHA-256 of the file contents,
so any change to the data produces new filenames. This means you can
serve `dist/` from any static host (GitHub Pages, S3, Cloudflare Pages,
Netlify, plain `nginx`, …) with **far-future cache headers** on the
JSON files and never worry about stale caches: when the data changes,
the URL changes.

The contents of `dist/` are exactly what you upload to your static
server — nothing else is needed at runtime.

## Running locally

For development you can serve the repo root directly (no need to run
`release.py` first — `mathprof.html` references `theorems.json` and
`references.json` by their unhashed names):

```sh
python -m http.server 8080
# then open http://localhost:8080/mathprof.html
```

You should also `python release.py` and serve `dist/` to confirm the
release build works before sending a PR.

## Contributing math content

The list of theorems, the course mapping, and the references are all
**AI generated** as a starting point, so expect mistakes — wrong
statements, wrong course assignments, awkward difficulty ratings,
duplicate or missing theorems, broken references, etc. Fixes are very
welcome. The workflow is:

1. **Edit `Theorems.MD`.** Each theorem is a numbered block separated
   by `---`, with the fields:

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

2. **Regenerate `theorems.json`:**

   ```sh
   python parse_theorems.py
   ```

3. **Regenerate `Courses.MD`:**

   ```sh
   python list_courses.py
   ```

4. **If `git diff Courses.MD` shows a new course**, add a matching
   `### Subject` section under the right `## Level` heading in
   `References.md`, with at least one textbook and one online course.
   Use the same `Level, Subject` naming used in the theorem's
   `Course:` field, otherwise the app won't be able to match
   references to the course.

5. **Regenerate `references.json`:**

   ```sh
   python parse_references.py
   ```

6. **Test locally** with `python -m http.server 8080`, and also do a
   release build (`python release.py`) and test `dist/index.html`.

7. Open a pull request including the regenerated `theorems.json`,
   `Courses.MD`, and (if changed) `references.json`.

## Contributing to the code

All JavaScript and CSS lives inline in `mathprof.html` — there is no
build step or framework, just vanilla JS and MathJax 3.

There are some known bugs around math rendering (mostly because some
theorems in `Theorems.MD` use unescaped parentheses/brackets that
MathJax does not pick up as math delimiters). **Math rendering issues
are no longer eligible as new issues — I'm already aware of them.** If
you want to help, fixing the offending entries in `Theorems.MD` is the
most useful contribution.

For everything else, please send a pull request, or open an issue on
[GitHub](https://github.com/anitasv/MathGapFinder).
