#!/usr/bin/env python3
"""Sort Theorems.MD in-place by course tier (High School < Undergrad < Graduate)
then by difficulty (ascending), and renumber."""

import re
import sys

COURSE_ORDER = [
    (re.compile(r'high\s*school', re.I), 0),
    (re.compile(r'undergrad', re.I), 1),
    (re.compile(r'graduate', re.I), 2),
]


def course_rank(course_line: str) -> int:
    for pat, rank in COURSE_ORDER:
        if pat.search(course_line):
            return rank
    return 99  # unknown goes last


def difficulty_value(diff_line: str) -> float:
    m = re.search(r'[-+]?\d*\.?\d+', diff_line)
    return float(m.group(0)) if m else float('inf')


def sort_file(path: str) -> None:
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Split into blocks separated by lines containing only '---'
    blocks = re.split(r'\n---\s*\n', content)
    blocks = [b.strip('\n') for b in blocks if b.strip()]

    parsed = []
    for block in blocks:
        course_m = re.search(r'\*\*Course:\*\*\s*(.+)', block)
        diff_m = re.search(r'\*\*Difficulty:\*\*\s*(.+)', block)
        course = course_m.group(1) if course_m else ''
        diff = diff_m.group(1) if diff_m else ''
        parsed.append({
            'block': block,
            'course_rank': course_rank(course),
            'difficulty': difficulty_value(diff),
        })

    parsed.sort(key=lambda x: (x['course_rank'], x['difficulty']))

    # Renumber: replace leading "N. **Title**" with new index
    new_blocks = []
    for i, item in enumerate(parsed, start=1):
        block = item['block']
        block = re.sub(r'^\s*\d+\.\s+\*\*', f'{i}. **', block, count=1)
        new_blocks.append(block)

    output = '\n\n---\n\n'.join(new_blocks) + '\n'

    with open(path, 'w', encoding='utf-8') as f:
        f.write(output)


if __name__ == '__main__':
    sort_file(sys.argv[1] if len(sys.argv) > 1 else 'Theorems.MD')
