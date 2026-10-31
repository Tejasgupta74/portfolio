# Tejas Gupta — Developer Portfolio

[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-00E5A0?style=for-the-badge)](LICENSE)

An immersive, production-ready developer portfolio for **Tejas Gupta**, Computer Science undergraduate at Chitkara University (CGPA 8.39) specializing in enterprise full-stack web platforms and GenAI applications. 

Engineered with high-fidelity editorial aesthetics, 60fps GPU-accelerated motion, Verlet physics, and interactive 3D elements modeled after [therishithakor.com](https://therishithakor.com).

---

## 🌐 Live Links & Contact

* **GitHub Repository**: [github.com/Tejasgupta74/portfolio](https://github.com/Tejasgupta74/portfolio)
* **LinkedIn**: [linkedin.com/in/tejas-gupta-b865a23ba](https://linkedin.com/in/tejas-gupta-b865a23ba)
* **Email**: [tejasgupta079@gmail.com](mailto:tejasgupta079@gmail.com)
* **Live College ERP Platform**: [college-erp-frontend-lira.onrender.com](https://college-erp-frontend-lira.onrender.com)
* **Live PlantScan AI System**: [plantscan-o7ji.onrender.com](https://plantscan-o7ji.onrender.com)

---

## ✨ Key Features & Architecture

### 1. Full-Screen 3D Boot Loader
* **Stacked 3D Pills**: Six alternating colored pills (`Tejas Gupta`, `Full-Stack Web`, `AI Integrations`, `Backend & Security`, `Cloud & DevOps`, `Enterprise Platforms`) slide into place with 3D drop-shadows.
* **Top & Bottom HUD**: Real-time tabular counter smoothly interpolating from `000` to `100%`, progress line, and automatic curtain reveal into the hero stage.

### 2. Verlet Physics Pull Cord
* Canvas-based rope simulation using Verlet integration with 20 constrained segments and realistic gravity/inertia.
* Pulling or dragging the cord triggers a tactile click to toggle Light, Dark, and Neon Glow modes with smooth spring-back dynamics.

### 3. Hero & Desk Flip Calendar
* **3D Desk Calendar (`cal`)**: Physical spiral binder rings with stacked pages and flipping 3D leaves cycling through roles:
  * *Full-Stack Developer*
  * *GenAI Engineer*
  * *Backend Architect*
  * *Cloud & DevOps*
  * *Enterprise Builder*
* **Liquid Ripple Shader**: Hovering over the hero portrait triggers a dynamic canvas ripple reveal that smoothly uncovers the color portrait with an emerald green glow aura.

### 4. 3D Holographic Ability Card (`TG-2027-CSE`)
* **3D Parallax & Depth**: The cutout portrait floats above the background window at different transform speeds, creating authentic depth.
* **Holographic Foil & Specular Sheen**: Iridescent color-dodge foil and metallic gilt highlights track mouse movement and touch drag.
* **Click/Tap to Flip 180°**: Smoothly flips to the reverse face (`back.webp`) to reveal core competency radar metrics, credentials, and tech stack badges.

### 5. Architectural Virtual Wall of Doors
* *"My work, one door per skill. Magic happens behind the doors. Swipe along the wall."*
* **5 Architectural 3D Doors**:
  1. **Full-Stack Web**: React, Node/Express, MongoDB, REST APIs, granular RBAC.
  2. **AI Integrations**: Grok AI API, Google Gemini API, automated PDFKit reporting.
  3. **Backend & Security**: Token-versioned session invalidation, atomic `$inc` & `$cond` transactions.
  4. **Cloud & DevOps**: Docker multi-stage builds, AWS EC2/S3, GCP, GitHub Actions CI/CD, Render.
  5. **Core Languages & DSA**: Python, JavaScript, Java, C/C++, SQL, 102+ LeetCode problems, ServiceNow CSA & CAD.
* **Door Hover & Walkthrough**: Hovering cracks the door open 36° with ambient room lighting spill. Clicking the door zooms the camera through the doorway into the discipline's case study room with zero page reload or external redirection.

### 6. Timeline: *"Let's go back in time."*
* **Dynamic Year Odometer**: 4-digit roller counter dynamically updates from 2027 down to 2023 as you scroll through chapters `/ 05` to `/ 01`.
* Chronological record of university education, ServiceNow certifications, competitive algorithmic programming, and production systems.

### 7. Direct Resume PDF Download
* Integrated official PDF (`127,050 bytes`) linked across the Hero, Navigation bar, and Footer with HTML5 `download` attributes for instant one-click downloads.

---

## 🛠️ Tech Stack & Dependencies

| Category | Technology |
|---|---|
| **Frontend Framework** | React 18, Vite 5 |
| **Styling** | Tailwind CSS 3, Custom CSS Variables & Shaders |
| **Typography** | `Onest` (Google Fonts & WOFF2), `JetBrains Mono` |
| **Motion & Physics** | Framer Motion, HTML5 Canvas Verlet Integration |
| **Deployment** | Vercel (CI/CD connected to GitHub) |

---

## 📂 Project Structure

```text
portfolio/
├── public/
│   ├── card/                       # Holographic Ability Card textures
│   │   ├── win_bg.webp             # Window background
│   │   ├── plate.webp              # Decorative border & foil plate
│   │   ├── back.webp               # Ability Card reverse side
│   │   ├── body.webp               # Foil mask
│   │   └── sheen.webp              # Specular highlight mask
│   ├── fonts/                      # Onest Latin font assets
│   ├── images/
│   │   ├── tejas.jpg               # Portrait with green aura glow
│   │   ├── tejas-cutout.png        # Transparent portrait cutout
│   │   └── og-image.jpg            # 1200x630 Open Graph preview image
│   ├── favicon.svg                 # SVG terminal icon
│   └── resume.pdf                  # Official Tejas Gupta Resume PDF
├── src/
│   ├── components/                 # React component library
│   │   ├── ConsoleWall.jsx         # Virtual Wall & Door components
│   │   ├── Contact.jsx             # Contact section & form
│   │   ├── Footer.jsx              # Footer, local IST time & floating top button
│   │   ├── Hero.jsx                # Hero, Desk Calendar & Ability Card
│   │   ├── Loader.jsx              # 3D Stacking Pills Loader
│   │   ├── Navbar.jsx              # Frosted glass floating navbar
│   │   ├── Projects.jsx            # Featured Case Studies
│   │   ├── PullCord.jsx            # Verlet physics rope canvas
│   │   └── Timeline.jsx            # Rolling odometer timeline
│   ├── data/
│   │   └── content.js              # Centralized data store
│   ├── App.jsx                     # Single-page application root
│   ├── index.css                   # Global styles, variables & glassmorphism
│   └── main.jsx                    # React entry point
├── index.html                      # Main document with inline styles, shaders & canvas
├── package.json                    # Project configuration & scripts
├── tailwind.config.js              # Tailwind custom theme configuration
└── vite.config.js                  # Vite build & chunking configuration
```

---

## 💻 Local Setup & Development

### 1. Clone the repository
```bash
git clone https://github.com/Tejasgupta74/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for production
```bash
npm run build
```
The optimized output will be generated in `dist/`.

### 5. Preview production build
```bash
npm run preview
```

---

## 🚀 Vercel Deployment

1. Go to [vercel.com/new](https://vercel.com/new).
2. Connect your GitHub account and import **`Tejasgupta74/portfolio`**.
3. Configure settings:
   * **Framework Preset**: `Vite`
   * **Build Command**: `npm run build`
   * **Output Directory**: `dist`
   * **Install Command**: `npm install`
4. Click **Deploy**.

Every commit pushed to the `main` branch will automatically trigger a new deployment.

---

## 📄 License
This project is open source and available under the [MIT License](LICENSE).
