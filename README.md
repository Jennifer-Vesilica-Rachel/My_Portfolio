# My Portfolio — Jennifer Vesilica Rachel

A personal portfolio web application engineered to showcase my **skills, verified software engineering projects, professional experience, academic background, and credentials** in Information Science and Engineering.

The portfolio provides an editorial, responsive interface for exploring technical competencies, interactive system sandboxes, healthcare informatics internship tenures, and direct communication channels.

---

## 🚀 Live Production Deployment

* **Production URL:** [https://myportfolio-five-alpha-63.vercel.app/](https://myportfolio-five-alpha-63.vercel.app/)
* **Hosted & Continuous Deployment:** **Vercel**

---

## 🛠️ Technologies & Stack

This application is built with a modern React SPA stack on top of Vite and TypeScript:

* **React (React 19):** Declarative component architecture using modern hooks (`useState`, `useEffect`, `useRef`, custom animation hooks).
* **TypeScript:** End-to-end type safety across components, models, data registries, and event handlers.
* **Vite:** High-performance next-generation frontend build tooling and local development server.
* **Tailwind CSS (v4):** Modern utility-first CSS framework with design system color tokens, accessible contrast, fluid typographic scale, and zero runtime overhead.
* **GSAP (GreenSock Animation Platform) & @gsap/react:** Smooth entrance orchestrations, card lift micro-interactions, scroll progress indication, and hero stage physics.
* **Motion (`motion`):** Lightweight UI transitions, spring-physics dialogs, and smooth state transitions.
* **Lucide (`lucide-react`):** Clean, accessible icon system for UI controls, navigation, and interactive buttons.
* **EmailJS (`@emailjs/browser`):** Client-side transactional contact form integration with real error handling and resilient direct mail client fallback.
* **PDF-Lib (`pdf-lib`):** Deterministic programmatic generation of 2-page print-accurate official vector resume PDF document.
* **QRCode (`qrcode`):** In-browser SVG/Canvas QR generation for physical hospital orientation points.

---

## 📂 Project Structure

```text
My_Portfolio/
├── public/
│   ├── images/
│   │   ├── aravind-qr-code.png
│   │   ├── aravind-qr-code.svg
│   │   └── jennifer-portrait.jpg
│   ├── Jennifer_Vesilica_Rachel_Resume.pdf
│   └── favicon.svg
├── scripts/
│   └── generate-resume-pdf.ts
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── AboutView.tsx
│   │   ├── CertificationsView.tsx
│   │   ├── ContactView.tsx
│   │   ├── ExperienceView.tsx
│   │   ├── FlagshipProjectsSection.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectsView.tsx
│   │   ├── ResumeModal.tsx
│   │   └── UpturneCertificateDocument.tsx
│   ├── data/
│   │   └── portfolioData.ts
│   ├── hooks/
│   │   └── useSectionAnimations.ts
│   ├── utils/
│   │   └── seo.ts
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── types.ts
├── .env.example
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 💻 Getting Started & Local Development

### Prerequisites

* **Node.js:** v18.0 or higher
* **npm:** v9.0 or higher (or `pnpm` / `bun`)
* **Git**

### Installation

Clone the repository and install all dependencies:

```bash
git clone https://github.com/Jennifer-Vesilica-Rachel/My_Portfolio.git
cd My_Portfolio
npm install
```

### Local Development Server

Run the development server locally:

```bash
npm run dev
```

The application will start on `http://localhost:3000`.

### Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

### Code Quality & Type Checking

Validate TypeScript types without emitting files:

```bash
npm run lint
```

---

## 🌐 Vercel Deployment

The application is deployed on **Vercel** with automated continuous integration:

1. **Framework Preset:** Vite
2. **Build Command:** `npm run build`
3. **Output Directory:** `dist`
4. **Environment Variables:**
   * `VITE_EMAILJS_SERVICE_ID`: Optional EmailJS service identifier
   * `VITE_EMAILJS_TEMPLATE_ID`: Optional EmailJS template identifier
   * `VITE_EMAILJS_PUBLIC_KEY`: Optional EmailJS public key

---

## 📁 Project Evidence & Verification

| Project | Purpose | Technologies | GitHub | Live Demo |
| :--- | :--- | :--- | :--- | :--- |
| **Smart Indoor Navigation System** | Mobile-first QR-guided indoor hospital wayfinding web application deployed for Aravind Eye Hospital to guide elderly and outpatients across 4 core clinical wings, eliminating app store install overhead and relieving reception congestion. | React.js, Tailwind CSS, QR Code Localization, Netlify, Mobile-First UI/UX | [GitHub Repository](https://github.com/Jennifer-Vesilica-Rachel/Smart-Indoor-Navigation-System) | [Live Demo](https://aravind-map-raesha0506.netlify.app) |
| **IR Search Engine v2** | Computational Information Retrieval engine indexing document corpora into an Inverted Index data structure, executing deterministic relevance queries using Vector Space Model (VSM) Cosine Similarity and real-time calculation inspection matrices. | Python, Flask, Jinja2 / HTML5 Templates, CSS3, Inverted Index, TF-IDF, Vector Space Model (VSM), Cosine Similarity, Vercel | [GitHub Repository](https://github.com/Jennifer-Vesilica-Rachel/search-engine) | [Live Demo](https://search-engine-self-sigma.vercel.app) |
| **Interactive Editorial Portfolio** | Modern editorial portfolio web application showcasing verified software engineering projects, live in-browser wayfinding & search sandboxes, downloadable vector resume PDF, and responsive design. | React 19, TypeScript, Vite, Tailwind CSS, GSAP, Motion, Lucide, EmailJS, Vercel | [GitHub Repository](https://github.com/Jennifer-Vesilica-Rachel/My_Portfolio) | [Live Demo](https://myportfolio-five-alpha-63.vercel.app) |

---

## 📱 Responsive Design Verification

Verified 100% fluid layout and touch accessibility across standard screen breakpoints:
* **Mobile (320px, 375px, 390px, 430px):** Single-column layout, minimum 44px touch targets, mobile navigation drawer, and overflow prevention.
* **Tablet (768px):** Two-column card grids, flexible metrics, accessible touch interaction.
* **Laptop & Desktop (1024px, 1440px):** Asymmetric editorial layout, ambient warm glow backgrounds, dual-page resume display, and interactive simulator workbenches.

---

## 📬 Contact & Connect

* **Portfolio:** [https://myportfolio-five-alpha-63.vercel.app/](https://myportfolio-five-alpha-63.vercel.app/)
* **GitHub:** [https://github.com/Jennifer-Vesilica-Rachel](https://github.com/Jennifer-Vesilica-Rachel)
* **LinkedIn:** [https://www.linkedin.com/in/jennifer-vesilica-rachel-s-211821305/](https://www.linkedin.com/in/jennifer-vesilica-rachel-s-211821305/)
* **Email:** [jennifersagaidasse@gmail.com](mailto:jennifersagaidasse@gmail.com)

---

© 2026 Jennifer Vesilica Rachel. All rights reserved.
