import re
import json

def parse_theorems(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Split by the separator "---"
    blocks = re.split(r'\n---\n', content)
    theorems = []

    for block in blocks:
        if not block.strip():
            continue
        
        # Extract ID and Title
        match = re.search(r'(\d+)\.\s+\*\*(.*?)\*\*', block)
        if not match:
            continue
            
        id_val = int(match.group(1))
        title = match.group(2)
        
        # Extract Statement
        stmt_match = re.search(r'\*\*Statement:\*\*(.*?)(?=\n\n|\n\*\*|\n--|$)', block, re.DOTALL)
        statement = stmt_match.group(1).strip() if stmt_match else ""
        
        # Extract Proof
        proof_match = re.findall(r'\*\*(?:Rough proof structure|Proof hint).*?:\*\*(.*?)(?=\n\n|\n\*\*|\n---|(\n---|$))', block, re.DOTALL)
        proof = "\n".join([p[0].strip() for p in proof_match]) if proof_match else ""
        
        # Clean LaTeX-style brackets
        for text in [statement, proof]:
            text = text.replace('[\n', '').replace('\n]', '').replace('((', '').replace('))', '')
            
        theorems.append({
            "id": id_val,
            "title": title,
            "statement": statement,
            "proof_structure": proof
        })
    
    return theorems

if __name__ == "__main__":
    results = parse_theorems('./Theorems.MD')
    # Filter duplicates just in case, or keep them as is based on requirement
    # Based on input, 8 is duplicated.
    unique_theorems = []
    seen_ids = set()
    for t in results:
        if t['id'] not in seen_ids:
            unique_theorems.append(t)
            seen_ids.add(t['id'])
            
    with open('theorems.json', 'w', encoding='utf-8') as f:
        json.dump(unique_theorems, f, indent=2)
