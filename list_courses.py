#!/usr/bin/env python3
"""Read theorems.json, extract unique courses, write Courses.MD."""
import json
from collections import defaultdict

with open("theorems.json", "r", encoding="utf-8") as f:
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
         f"Unique courses found in `theorems.json`: **{len(unique_courses)}**", ""]

for level in sorted(groups):
    lines.append(f"## {level}")
    lines.append("")
    for subject in sorted(groups[level]):
        lines.append(f"- {subject}")
    lines.append("")

with open("Courses.MD", "w", encoding="utf-8") as f:
    f.write("\n".join(lines))

print(f"Wrote Courses.MD with {len(unique_courses)} unique courses.")
