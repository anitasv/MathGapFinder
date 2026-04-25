#!/usr/bin/env python3
"""Parse References.md into references.json.

Course keys use the same "Level, Subject" structure as theorems.json
(e.g. "Undergraduate, Linear Algebra").
"""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "docs" / "References.md"
DST = ROOT / "data" / "references.json"

LINK_RE = re.compile(r"\[([^\]]+)\]\(([^)]+)\)")


def clean_subject(name: str, level: str) -> list[str]:
    """Return list of subject names for a section header.

    Strips parenthetical qualifiers and splits on ' / '.
    """
    # strip parenthetical e.g. "(Undergraduate)", "(Elementary)", "(Graduate, ...)"
    name = re.sub(r"\s*\([^)]*\)\s*", "", name).strip()
    parts = [p.strip() for p in name.split("/")]
    return [p for p in parts if p]


def parse_textbook(line: str) -> str:
    return line.lstrip("-* ").strip().rstrip(".")


def parse_course(line: str) -> dict:
    line = line.lstrip("-* ").strip()
    m = LINK_RE.search(line)
    if m:
        title = m.group(1).strip()
        url = m.group(2).strip()
        # trailing comment after link, e.g. "(also fine as...)"
        tail = line[m.end():].strip()
        entry = {"title": title, "url": url}
        if tail:
            entry["note"] = tail.lstrip(" -").strip()
        return entry
    return {"title": line.rstrip("."), "url": None}


def main() -> None:
    text = SRC.read_text(encoding="utf-8")
    lines = text.splitlines()

    refs: dict[str, dict] = {}
    level = None
    subjects: list[str] = []
    bucket = None  # "textbooks" | "courses" | None

    def ensure_entries(subjects):
        out = []
        for s in subjects:
            key = f"{level}, {s}"
            if key not in refs:
                refs[key] = {"textbooks": [], "courses": []}
            out.append(refs[key])
        return out

    current_entries: list[dict] = []

    for raw in lines:
        line = raw.rstrip()
        if line.startswith("## "):
            header = line[3:].strip()
            if header.lower() == "general resources":
                level = None
                current_entries = []
                continue
            level = header
            current_entries = []
            bucket = None
        elif line.startswith("### "):
            if level is None:
                current_entries = []
                continue
            subjects = clean_subject(line[4:].strip(), level)
            current_entries = ensure_entries(subjects)
            bucket = None
        elif re.match(r"\s*-\s*\*\*Textbooks?\*\*", line):
            bucket = "textbooks"
        elif re.match(r"\s*-\s*\*\*Courses?\*\*", line):
            bucket = "courses"
        elif re.match(r"\s*-\s+", line) and current_entries and bucket:
            stripped = line.strip()
            if bucket == "textbooks":
                val = parse_textbook(stripped)
                for e in current_entries:
                    if val not in e["textbooks"]:
                        e["textbooks"].append(val)
            else:
                val = parse_course(stripped)
                for e in current_entries:
                    if val not in e["courses"]:
                        e["courses"].append(val)

    DST.write_text(json.dumps(refs, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"Wrote {DST} with {len(refs)} courses.")


if __name__ == "__main__":
    main()
