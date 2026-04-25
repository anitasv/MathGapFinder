#!/usr/bin/env python3
"""Release script: builds a cache-friendly dist/ folder.

- Creates dist/ folder.
- Copies theorems.json and references.json into dist/ with names of the form
  theorems_<hash>.json and references_<hash>.json, where <hash> is a short
  URL-safe hash of the file's contents.
- Copies mathprof.html into dist/index.html, updating its references to the
  JSON files so they point at the hashed filenames.
"""

from __future__ import annotations

import base64
import hashlib
import shutil
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DIST = ROOT / "dist"
DATA_DIR = ROOT / "data"
SRC_DIR = ROOT / "src"

# (source path relative key, path the html references)
JSON_FILES = ["theorems.json", "references.json"]
HTML_FILE = "mathprof.html"
HASH_LEN = 12  # characters of base64url-encoded sha256


def short_hash(data: bytes, length: int = HASH_LEN) -> str:
    digest = hashlib.sha256(data).digest()
    b64 = base64.urlsafe_b64encode(digest).decode("ascii").rstrip("=")
    return b64[:length]


def main() -> int:
    if DIST.exists():
        shutil.rmtree(DIST)
    DIST.mkdir(parents=True)

    name_map: dict[str, str] = {}
    for fname in JSON_FILES:
        src = DATA_DIR / fname
        if not src.exists():
            print(f"error: missing {src}", file=sys.stderr)
            return 1
        data = src.read_bytes()
        h = short_hash(data)
        stem, ext = src.stem, src.suffix  # e.g. "theorems", ".json"
        new_name = f"{stem}_{h}{ext}"
        (DIST / new_name).write_bytes(data)
        # html references json as "../data/<fname>"
        name_map[f"../data/{fname}"] = new_name
        print(f"  data/{fname} -> {new_name}")

    html = (SRC_DIR / HTML_FILE).read_text(encoding="utf-8")
    for original, new_name in name_map.items():
        html = html.replace(original, new_name)
    (DIST / "index.html").write_text(html, encoding="utf-8")
    print(f"  {HTML_FILE} -> index.html")

    print(f"\nDist ready at {DIST}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
