# Sharath H — Personal Portfolio Website

A high-performance, accessible, and responsive personal portfolio website built with **Next.js (App Router)**, **Tailwind CSS**, and **Lucide React**. Engineered for **Sharath H**, a B.Tech CSE student (Dr. ACS College of Engineering, CGPA 8.0) targeting campus placements and full-stack software engineering roles.

---

## 🚀 Live Demo & Deployment

This project is configured for zero-config one-click deployment on **Vercel** or **Netlify**.

### Deploy to Vercel (Recommended)
1. Push this repository to your GitHub account (`https://github.com/sharath14pixel/portfolio`).
2. Log in to [vercel.com](https://vercel.com) with GitHub.
3. Click **Add New Project** and select this repository.
4. Next.js will be detected automatically. Click **Deploy**.
5. Your portfolio is live with automatic SSL and global CDN!

### Deploy to Netlify
1. Push this repository to GitHub.
2. Log in to [netlify.com](https://netlify.com) and click **Add new site > Import an existing project**.
3. Select your repository. Build settings are automatically detected via `netlify.toml`:
   - **Build Command**: `npm run build`
   - **Publish directory**: `.next`
4. Click **Deploy site**.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server Components & SEO Metadata)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) (Custom dark theme, emerald accents, WCAG AA compliance)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Inter (System sans-serif stack)
- **Accessibility**: 
  - Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
  - Skip-to-content keyboard anchor
  - 44x44px minimum tap target sizes
  - 100% descriptive image `alt` attributes
  - Fully responsive from 360px (mobile) to 4K desktop

---

## 📂 Project Structure

```text
├── app/
│   ├── data/
│   │   └── portfolioData.js     # Single source of truth for resume & portfolio details
│   ├── globals.css              # Custom Tailwind directives & ambient dark scrollbars
│   ├── layout.jsx               # Root layout, Open Graph meta tags, favicon & skip link
│   └── page.jsx                 # Main composite landing page
├── components/
│   ├── Navbar.jsx               # Semantic header & sticky nav + mobile drawer
│   ├── Hero.jsx                 # Hero section, pulsing availability pill & portrait
│   ├── About.jsx                # Story, philosophy & highlighted education card (CGPA 8.0)
│   ├── Skills.jsx               # Categorized skill cards (Languages, Web, Frameworks, DBs, Tools)
│   ├── Experience.jsx           # JAIVA Creative Labs internship timeline
│   ├── Projects.jsx             # DPI Engine, UPI Offline Mesh, VectorDB showcase
│   ├── Certifications.jsx       # Verified credential cards (Infosys, EY/MSFT, Anthropic)
│   ├── Achievements.jsx         # 6 hackathons, ideathons, and debugging contest podiums
│   ├── Contact.jsx              # Direct copy-to-clipboard email & interactive contact form
│   └── Footer.jsx               # Semantic footer, copyright & back-to-top button
├── public/
│   ├── favicon.svg              # Developer monogram favicon
│   ├── Sharath_H_Resume.pdf     # Downloadable PDF resume asset
│   └── images/
│       └── sharath-portrait.jpg # Sharath's high-resolution portrait photograph
├── next.config.mjs
├── tailwind.config.js
├── vercel.json
└── package.json
```

---

## 💻 Local Development

### Prerequisites
- Node.js 18.17+ or 20+
- npm 9+

### Run Locally
```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build & Test
```bash
# Build production bundle
npm run build

# Preview production build locally
npm run start
```

---

## 🎨 Personal Details & Assets

- **Updating your Resume**: Drop your latest PDF into `public/Sharath_H_Resume.pdf`.
- **Updating your Photo**: Replace `public/images/sharath-portrait.jpg`.
- **Updating Content**: All text, skills, and links can be updated cleanly in `app/data/portfolioData.js`.
