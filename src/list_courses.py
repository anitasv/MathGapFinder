#!/usr/bin/env python3
"""Read data/theorems.json, extract unique courses, write docs/Courses.MD."""
import json
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
THEOREMS_JSON = ROOT / "data" / "theorems.json"
COURSES_MD = ROOT / "docs" / "Courses.MD"

with open(THEOREMS_JSON, "r", encoding="utf-8") as f:
    theorems = json.load(f)

# Group courses by level (e.g. "High School", "Undergraduate", ...)
groups = defaultdict(set)
unique_courses = set()
for t in theorems:
    course = (t.get("course") or "").strip()
    if not course:
        continue
    unique_courses.add(course)
    if "," in course:
        level, subject = (p.strip() for p in course.split(",", 1))
    else:
        level, subject = "Other", course
    groups[level].add(subject)

lines = ["# Courses", "",
         f"Unique courses found in `data/theorems.json`: **{len(unique_courses)}**", ""]

for level in sorted(groups):
    lines.append(f"## {level}")
    lines.append("")
    for subject in sorted(groups[level]):
        lines.append(f"- {subject}")
    lines.append("")

with open(COURSES_MD, "w", encoding="utf-8") as f:
    f.write("\n".join(lines))

print(f"Wrote {COURSES_MD} with {len(unique_courses)} unique courses.")
