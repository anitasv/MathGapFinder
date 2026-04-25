import os
import re

def split_theorems():
    with open('Theorems.MD', 'r', encoding='utf-8') as f:
        content = f.read()

    # Split by theorem number format "X. **"
    # Using regex to find all matches of the start of a theorem
    # Pattern looks for "Number. **Title**" at the start of a line or after a newline
    segments = re.split(r'\n(?=\d+\.\s+\*\*)', content)
    
    # Clean the first segment if needed (it might contain some header if it existed)
    # Based on the file content, the first line is "1. **Euclidean Algorithm**"
    
    # Store theorems as a list of strings
    theorems = []
    for segment in segments:
        if segment.strip():
            theorems.append(segment.strip())

    # Create directories/files
    # Groups of 10
    for i in range(0, len(theorems), 10):
        group = theorems[i:i+10]
        start_num = i + 1
        end_num = min(i + 10, len(theorems))
        
        filename = f'Theorems_{start_num}.md'
        
        with open(filename, 'w', encoding='utf-8') as f:
            for idx, theorem in enumerate(group):
                f.write(theorem)
                if idx < len(group) - 1:
                    f.write('\n\n---\n\n')
        
        print(f'Created {filename} with theorems {start_num}-{end_num}')

if __name__ == '__main__':
    split_theorems()
