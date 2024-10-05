import os

# Function to read files and concatenate content into markdown
def collect_scripts(directory, output_file, exceptions=None):
    if exceptions is None:
        exceptions = []

    with open(output_file, 'w') as markdown_file:
        for root, _, files in os.walk(directory):
            for file in files:
                if file.endswith(('.js', '.html', '.css', '.py')):
                    file_path = os.path.join(root, file)
                    # Skip if the file is in the exceptions list
                    if file_path in exceptions or file in exceptions:
                        continue
                    
                    # Write file path to markdown file
                    markdown_file.write(f'## {file_path}\n\n')
                    
                    # Write file content to markdown file
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        markdown_file.write(f'```{get_language(file)}\n')
                        markdown_file.write(content)
                        markdown_file.write('\n```\n')

# Function to determine the language for code blocks
def get_language(filename):
    if filename.endswith('.js'):
        return 'javascript'
    elif filename.endswith('.html'):
        return 'html'
    elif filename.endswith('.css'):
        return 'css'
    elif filename.endswith('.py'):
        return 'python'
    else:
        return ''

# Set directory to the folder where the script is located
current_directory = os.path.dirname(os.path.abspath(__file__))

# Collect scripts and write to markdown
output_file = 'all_scripts.md'
exceptions = ["collect_scripts.py", "apis.js"]  # Manually edit this list to add any exceptions
collect_scripts(current_directory, output_file, exceptions=exceptions)