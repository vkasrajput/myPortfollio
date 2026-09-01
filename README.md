# Vikas Singh - Backend / Node.js Developer Portfolio

A modern, high-performance, developer-oriented personal portfolio website for **Vikas Singh** (Backend Developer • 4+ Years Experience), built with **React**, **Vite**, and vanilla **CSS tokens**.

Featuring an interactive Node.js live system architecture visualizer, searchable skills matrix, code snippet showcases, accessible project modals with HTML/CSS architecture flow diagrams, dark/light theme switching, and zero-cost static deployment configurations for **Netlify** and **Vercel**.

---

## ⚡ Tech Stack

- **Framework**: React 18 / 19 + Vite
- **Styling**: Modern Vanilla CSS with CSS custom properties (Design Tokens), Glassmorphism, Dark/Light theme system
- **Icons**: `lucide-react`
- **Typography**: Inter (UI / Headings) & Fira Code (Monospace & Code)
- **Zero-Cost Deployment**: Netlify (`netlify.toml`, `_redirects`) & Vercel (`vercel.json`)

---

## 🚀 Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```
The optimized static output will be generated inside the `dist/` directory.

### 4. Preview Production Build Locally
```bash
npm run preview
```

---

## 🛠️ How to Customize Your Portfolio

All website content, projects, experience, skills, and links are decoupled from the UI inside **`src/data/portfolioData.js`**.

### 1. Update Personal & Contact Details
Open [`src/data/portfolioData.js`](src/data/portfolioData.js) and update:
- `email`: Your preferred contact email address
- `linkedIn`: Your LinkedIn profile URL
- `github`: Your GitHub profile URL (already set to `https://github.com/vkasrajput`)
- `location`: Your current location / availability

### 2. Replace the Resume PDF
- Replace the placeholder file at [`public/Vikas-Singh-Resume.pdf`](public/Vikas-Singh-Resume.pdf) with your actual resume PDF.
- The "Download Resume" and "View Resume" buttons across the site are already connected directly to `/Vikas-Singh-Resume.pdf`.

### 3. Add or Modify Projects
In [`src/data/portfolioData.js`](src/data/portfolioData.js), each project in the `projects` array contains:
- `title` & `category`
- `shortDescription` & `problemSolved`
- `architecture` (Pure HTML/CSS flowchart)
- `keyContributions`
- `technologies`
- `githubUrl` & `liveUrl`

---

## 🌐 100% Free Deployment Guide

This portfolio is a static SPA requiring **no paid backend, no AWS EC2, and no database** to deploy.

### Option 1: Deploy to Vercel (Recommended)

1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit for Vikas Singh portfolio"
   git remote add origin https://github.com/vkasrajput/myPortfolio.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **"Add New Project"** and select your repository.
4. Framework Preset will automatically detect **Vite**.
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **"Deploy"**. Your site is live on your free `.vercel.app` domain with free SSL!

*(The included [`vercel.json`](vercel.json) handles client-side routing automatically).*

---

### Option 2: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com) and sign in with GitHub.
2. Click **"Add new site"** -> **"Import an existing project"**.
3. Select your GitHub repository.
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Click **"Deploy site"**.

*(The included [`netlify.toml`](netlify.toml) and [`public/_redirects`](public/_redirects) ensure 200 SPA route rewrites).*

---

## 📁 Project Structure

```
myPortfolio/
├── public/
│   ├── favicon.svg             # Custom SVG developer favicon
│   ├── Vikas-Singh-Resume.pdf  # Resume PDF placeholder
│   └── _redirects              # Netlify client-side routing
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky navbar with active scroll & mobile drawer
│   │   ├── Footer.jsx          # Footer with status indicator & back to top
│   │   ├── SystemVisualizer.jsx# Interactive Node.js live telemetry visualizer
│   │   ├── ArchitectureDiagram.jsx # Pure HTML/CSS flow diagram component
│   │   ├── ProjectModal.jsx    # Accessible modal for deep project inspection
│   │   ├── CodeSnippet.jsx     # Tabbed engineering principles code viewer
│   │   └── ThemeToggle.jsx     # Dark/Light theme toggle
│   ├── sections/
│   │   ├── HeroSection.jsx     # Hero headline, tech pills, CTAs
│   │   ├── QuickStats.jsx      # Verified 4+ years, Node.js, Walmart Canada stats
│   │   ├── AboutSection.jsx    # Bio & What I Focus On cards
│   │   ├── SkillsSection.jsx   # Categorized skills cards with live search
│   │   ├── ArchitectureSection.jsx # "How I Build Backend Systems" & reliability pillars
│   │   ├── EngineeringSection.jsx  # Real-world code patterns in practice
│   │   ├── ExperienceSection.jsx   # Verified professional timeline
│   │   ├── ProjectsSection.jsx # MaidMe, LOOP, CI/CD Pipeline, AI Chatbot
│   │   ├── GitHubSection.jsx   # Public GitHub repositories
│   │   ├── ResumeSection.jsx   # Prominent resume download CTA
│   │   └── ContactSection.jsx  # Channels, copy actions & mailto form
│   ├── data/
│   │   └── portfolioData.js    # Single source of truth for all content
│   ├── hooks/
│   │   └── useTheme.js         # Theme manager with localStorage persistence
│   ├── styles/
│   │   ├── index.css           # Global tokens, resets, typography, and theme vars
│   │   └── components.css      # Section-specific styles, glassmorphism, responsive grid
│   ├── App.jsx                 # Main layout coordinator
│   └── main.jsx                # React root entry
├── vercel.json                 # Vercel configuration
├── netlify.toml                # Netlify configuration
├── .env.example                # Environment configuration template
├── .gitignore                  # Git ignore rules
└── package.json
```

---

## 🛡️ License

MIT License © 2026 Vikas Singh.
