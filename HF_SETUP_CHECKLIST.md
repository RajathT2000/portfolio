# Hugging Face Spaces Setup Checklist

## ✅ Completed Steps:
- [x] Created `app.py` with Gradio integration
- [x] Created `requirements.txt` with Gradio dependency
- [x] Updated `README.md` with Hugging Face frontmatter
- [x] Created GitHub Actions workflow (`.github/workflows/hf-space-sync.yml`)
- [x] Added `HF_TOKEN` to GitHub Secrets

## 🔲 Remaining Steps:

### 1. Create Hugging Face Space
- Go to: https://huggingface.co/spaces
- Click "Create new Space"
- **Space name**: `portfolio` (or update workflow if different)
- **SDK**: Select "Gradio"
- **Visibility**: Public or Private (your choice)
- Click "Create Space"

### 2. Verify Your Hugging Face Username
- Check your Hugging Face profile URL
- Your username is in: `https://huggingface.co/YOUR_USERNAME`
- **Current workflow uses**: `rajatht/portfolio`
- If your username is different, update the workflow file

### 3. Update Workflow (if needed)
If your Hugging Face username is NOT `rajatht`, update these lines in `.github/workflows/hf-space-sync.yml`:
- Line 35: `git clone https://huggingface.co/spaces/YOUR_USERNAME/portfolio hf-space`
- Line 46: `git push https://user:$HF_TOKEN@huggingface.co/spaces/YOUR_USERNAME/portfolio HEAD:main`

### 4. Test the Workflow
- Make a small change to any file (or just add a comment)
- Commit and push to GitHub
- Go to your GitHub repo → Actions tab
- Watch the workflow run
- Check your Hugging Face Space - it should update automatically!

## 🎯 Quick Test:
After creating the Space, you can test by:
```bash
# Make a small change
echo "# Test" >> test.txt
git add test.txt
git commit -m "Test Hugging Face sync"
git push origin main
```

Then check:
- GitHub Actions: https://github.com/RajathT2000/portfolio/actions
- Your Hugging Face Space: https://huggingface.co/spaces/YOUR_USERNAME/portfolio

## 📝 Notes:
- The workflow syncs on every push to `main` branch
- It excludes `.git` and `.github` folders from sync
- The Space will rebuild automatically when files are pushed
- Your portfolio will be live at: `https://huggingface.co/spaces/YOUR_USERNAME/portfolio`
