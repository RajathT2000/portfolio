---
title: Rajath's Portfolio
emoji: 💼
colorFrom: blue
colorTo: purple
sdk: gradio
sdk_version: 4.0.0
app_file: app.py
pinned: false
---

# Rajath's Portfolio

A modern, responsive portfolio website for Rajath Thaliyadath - AI & Software Engineer.

## Features

- Beautiful glassmorphic design
- Dark/Light theme toggle
- Responsive layout
- 3D tilt effects
- AI-powered project showcases
- Chrome Extension projects showcase

## Tech Stack

- HTML5
- CSS3 (with glassmorphism design)
- JavaScript (vanilla)
- Python + Gradio (for Hugging Face Spaces)
- Node.js + Express (for Render deployment)

## Projects Showcased

- Resume AI Agent - AI-powered assistant
- YouTube Professor - Extract knowledge from YouTube videos
- Hotel Booking System - Django & Pure Python versions
- Reading Assistant Extension - Chrome Extension for word count and reading time
- Smart Dark Mode Inverter - Chrome Extension for intelligent dark mode

## Local Development

### Using Node.js (for Render deployment)
```bash
npm install
npm start
```
Visit `http://localhost:3000`

### Using Python (for Hugging Face Spaces)
```bash
pip install -r requirements.txt
python app.py
```
Visit `http://localhost:7860`

## Deployment

### Hugging Face Spaces

1. Push code to GitHub
2. Go to [Hugging Face Spaces](https://huggingface.co/spaces)
3. Click "Create new Space"
4. Select "Gradio" as SDK
5. Connect your GitHub repository
6. Set the repository path
7. The Space will automatically build and deploy

The `app.py` file uses Gradio to serve the portfolio with all CSS and JS inlined.

### Render

1. Push code to GitHub
2. Connect repository to Render
3. Set build command: `npm install`
4. Set start command: `npm start`

## Author

Rajath Thaliyadath
- AI & Software Engineer
- Masters of IT in AI, Macquarie University
