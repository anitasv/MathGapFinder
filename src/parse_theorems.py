import re
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

FIELD_RE = re.compile(r'\*\*(Statement|Course|Difficulty|Rough proof structure[^*:]*|Proof hint[^*:]*|Proof[^*:]*)\:\*\*', re.IGNORECASE)

def parse_theorems(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    blocks = re.split(r'\n---\n', content)
    theorems = []

    for block in blocks:
        if not block.strip():
            continue

        match = re.search(r'(\d+)\.\s+\*\*(.*?)\*\*', block)
        if not match:
            continue

        id_val = int(match.group(1))
        title = match.group(2)

        # Find all field markers and split content between them
        markers = [(m.start(), m.end(), m.group(1).lower()) for m in FIELD_RE.finditer(block)]
        fields = {}
        for i, (start, end, name) in enumerate(markers):
            next_start = markers[i + 1][0] if i + 1 < len(markers) else len(block)
            value = block[end:next_start].strip()
            # strip trailing --- if any
            value = re.sub(r'\n---\s*$', '', value).strip()
            fields[name] = value

        statement = fields.get('statement', '')
        course = fields.get('course', '')
        difficulty_str = fields.get('difficulty', '')

        proof = ''
        for k, v in fields.items():
            if k.startswith('rough proof') or k.startswith('proof hint') or k.startswith('proof'):
                if k not in ('statement', 'course', 'difficulty'):
                    proof = (proof + '\n' + v).strip() if proof else v

        try:
            difficulty = float(difficulty_str)
        except ValueError:
            difficulty = difficulty_str

        theorems.append({
            "id": id_val,
            "title": title,
            "statement": statement,
            "course": course,
            "difficulty": difficulty,
            "proof_structure": proof
        })

    return theorems

if __name__ == "__main__":
    results = parse_theorems(str(ROOT / 'docs' / 'Theorems.MD'))
    unique_theorems = []
    seen_ids = set()
    for t in results:
        if t['id'] not in seen_ids:
            unique_theorems.append(t)
            seen_ids.add(t['id'])

    with open(ROOT / 'data' / 'theorems.json', 'w', encoding='utf-8') as f:
        json.dump(unique_theorems, f, indent=2)
