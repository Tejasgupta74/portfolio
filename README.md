# Tejas Gupta — Developer Portfolio

Production-ready, single-page, immersive developer portfolio with a **Control Room** metaphor built using React, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Live Demo & Repository
- **Live URL**: [https://tejasgupta.dev](https://tejasgupta.dev)
- **GitHub**: [https://github.com/Tejasgupta74](https://github.com/Tejasgupta74)

---

## 🛠️ Tech Stack
- **Framework**: React 18
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3 (Dark Theme `#0F1115`, Terminal Green Accent `#00E5A0`)
- **Animation**: Framer Motion
- **Intersection Observer**: `react-intersection-observer`
- **Typography**: Space Grotesk (display), JetBrains Mono (tech/code), Inter (body)

---

## 📂 Project Structure

```
d:\portfolio
├── public/
│   ├── favicon.svg              # Terminal SVG favicon
│   ├── resume.pdf               # Downloadable resume
│   └── images/
│       ├── tejas.jpg            # Original 1000x1100 portrait
│       └── og-image.jpg         # 1200x630 crop for Open Graph & Twitter Cards
├── src/
│   ├── components/
│   │   ├── ConsoleWall.jsx      # Swipeable horizontal control room consoles
│   │   ├── Contact.jsx          # Contact form with mailto trigger & honeypot
│   │   ├── Footer.jsx           # Local time (IST Intl API), nav, status, back-to-top
│   │   ├── Hero.jsx             # Two-column hero with 3D parallax tilt & badge
│   │   ├── Loader.jsx           # Boot sequence with percentage counter
│   │   ├── Navbar.jsx           # Fixed blurred nav with mobile drawer
│   │   ├── Projects.jsx         # Featured enterprise & GenAI project cards
│   │   └── Timeline.jsx         # Vertical story timeline with 96px circular portrait
│   ├── data/
│   │   └── content.js           # Central content file for easy editing
│   ├── hooks/
│   │   └── useReducedMotion.js  # Accessibility reduced motion hook
│   ├── App.jsx                  # Main single-page application entry
│   ├── index.css                # Tailwind directives, theme & scrollbar styles
│   └── main.jsx                 # React root render
├── index.html                   # SEO tags, OG cards, JSON-LD Person schema
├── package.json                 # Dependency definitions & build scripts
├── postcss.config.js            # PostCSS configuration for Tailwind
├── tailwind.config.js           # Custom colors, fonts, and theme extensions
└── vite.config.js               # Vite config with manual chunking for Framer Motion
```

---

## 💻 Local Setup & Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Tejasgupta74/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build locally**:
   ```bash
   npm run preview
   ```

---

## 🌐 Deployment Instructions

### Deploy to Vercel
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your `portfolio` repository.
4. Vercel automatically detects Vite:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**.

### Deploy to Netlify
1. Push your repository to GitHub.
2. Sign in to [Netlify](https://netlify.com) and choose **"Add new site" > "Import an existing project"**.
3. Connect your GitHub repository.
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **"Deploy site"**.

---

## ⚙️ Customizing Portfolio Content
All text, project details, skill chips, and timeline items are located in:
```
src/data/content.js
```
You can edit bio details, social links, project descriptions, or stats directly in that file without modifying any React components.
