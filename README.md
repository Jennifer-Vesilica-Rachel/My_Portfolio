# My Portfolio

A personal portfolio web application engineered to showcase my **skills, verified software projects, professional experience, academic background, and credentials** in Information Science and Engineering.

The portfolio provides a clean, responsive, editorial interface for exploring my technical competencies, interactive system sandboxes, healthcare informatics internship work, and direct communication channels.

## Features

* **About & Biography:** Introduction, core competencies, and career trajectory.
* **Consolidated Technical Projects:** High-signal project cards with verified benchmarks, key highlights, and direct repository/demo access.
* **Interactive System Sandboxes:** In-browser wayfinding floor route simulator and real-time TF-IDF / Cosine Similarity computational search playground.
* **Professional Experience:** Detailed chronicle of technical tenures at Aravind Eye Hospital and Upturne Software & Services, with comparative diagnostics matrix.
* **Credentials & Academic Folio:** Verified institutional certificates, academic coursework, and downloadable credential documents.
* **Interactive Resume Folio:** Real-time 2-page print-accurate document replica with copy and PDF print capabilities.
* **Direct Contact Portal:** Validated contact form integrated with EmailJS for genuine dispatch and resilient mailto fallback.
* **Responsive Editorial Design:** Verified 100% responsiveness across 320px, 375px, 430px, tablet, laptop, and widescreen desktop viewports.

## Repository Structure

```text
My_Portfolio/
├── public/
│   └── images/
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── hooks/
│   ├── utils/
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

## Getting Started

### Prerequisites

* Node.js (v18.0 or higher recommended)
* npm or bun
* Git

### Installation & Local Development

```bash
git clone https://github.com/Jennifer-Vesilica-Rachel/My_Portfolio.git
cd My_Portfolio
npm install
npm run dev
```

The application will start on `http://localhost:3000`.

### Production Build

```bash
npm run build
npm run preview
```

## Technologies Used

* **Frontend Framework:** React 19 (`react`, `react-dom`)
* **Type System:** TypeScript
* **Build Tool & Dev Server:** Vite
* **Styling & Design System:** Tailwind CSS v4 (`@tailwindcss/vite`, `tailwindcss`) with accessible high-contrast color tokens and fluid typography
* **Animation & Motion:** GSAP (GreenSock Animation Platform) & `@gsap/react`
* **Icons:** Lucide React (`lucide-react`)
* **Email Service:** EmailJS (`@emailjs/browser`)
* **QR Generation:** QRCode (`qrcode`)
* **Deployment Platform:** Vercel

## Project Evidence & Verification

| Project | Purpose | Technologies | GitHub | Live Demo |
| :--- | :--- | :--- | :--- | :--- |
| **Smart Indoor Navigation System** | Mobile-first QR-anchored indoor hospital wayfinding web application deployed for Aravind Eye Hospital to guide elderly and outpatients across 4 core clinical wings, eliminating app installation overhead and relieving front-desk congestion. | React.js, Tailwind CSS, QR Code Localization, Netlify, Mobile-First UI/UX | [GitHub Repository](https://github.com/Jennifer-Vesilica-Rachel/Smart-Indoor-Navigation-System) | [Live Demo](https://aravind-map-raesha0506.netlify.app) |
| **IR Search Engine v2** | Computational Information Retrieval engine indexing document corpora into an Inverted Index data structure, executing queries with a reproducible average latency of 38 ms across 100 benchmark queries using Vector Space Model (VSM) Cosine Similarity and real-time calculation matrices. | Python, Flask, Inverted Index, TF-IDF, Vector Space Model (VSM), Cosine Similarity, HTML5, Tailwind CSS, Vercel | [GitHub Repository](https://github.com/Jennifer-Vesilica-Rachel/search-engine) | [Live Demo](https://search-engine-self-sigma.vercel.app) |

## Deployment

The portfolio is deployed and hosted using **Vercel**.

### Live Portfolio
**https://myportfolio-five-alpha-63.vercel.app/**

## Connect With Me

* **GitHub:** https://github.com/Jennifer-Vesilica-Rachel
* **LinkedIn:** https://www.linkedin.com/in/jennifer-vesilica-rachel-s-211821305/
* **Portfolio:** https://myportfolio-five-alpha-63.vercel.app/
* **Email:** jennifersagaidasse@gmail.com

## License

This project is a personal portfolio created to showcase my skills, projects, and professional experience.

© 2026 Jennifer Vesilica Rachael. All rights reserved.
