import gradio as gr
import os

def get_portfolio_html():
    """Read HTML, CSS, and JS files and combine them into a single HTML string"""
    try:
        # Read HTML file
        with open('index.html', 'r', encoding='utf-8') as f:
            html_content = f.read()
        
        # Read CSS file
        try:
            with open('styles.css', 'r', encoding='utf-8') as f:
                css_content = f.read()
            # Replace CSS link with inline style (handle both formats)
            html_content = html_content.replace(
                '<link rel="stylesheet" href="styles.css">',
                f'<style>{css_content}</style>'
            )
            html_content = html_content.replace(
                '<link rel="stylesheet" href="styles.css"/>',
                f'<style>{css_content}</style>'
            )
        except Exception as e:
            print(f"Warning: Could not load CSS: {e}")
        
        # Read JS file
        try:
            with open('script.js', 'r', encoding='utf-8') as f:
                js_content = f.read()
            # Replace JS script tag with inline script
            html_content = html_content.replace(
                '<script src="script.js"></script>',
                f'<script>{js_content}</script>'
            )
        except Exception as e:
            print(f"Warning: Could not load JS: {e}")
        
        return html_content
    except Exception as e:
        return f"<html><body><h1>Error loading portfolio</h1><p>{str(e)}</p></body></html>"

# Create Gradio interface
with gr.Blocks(
    title="Rajath - AI & Software Engineer Portfolio",
    theme=gr.themes.Soft(),
    css="""
    .gradio-container {
        max-width: 100% !important;
        padding: 0 !important;
    }
    """
) as demo:
    gr.HTML(value=get_portfolio_html(), elem_id="portfolio-container")

if __name__ == "__main__":
    demo.launch(server_name="0.0.0.0", server_port=7860, share=False)
