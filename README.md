# 🚀 Priyanshu Kumar — Premium Developer Portfolio

A production-ready, cinematic personal portfolio built for **Priyanshu Kumar** (B.Tech CSE Class of 2028, ABES Engineering College, Founder of MentorNearby). Engineered with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

Designed to wow engineering recruiters, internship directors, and technical collaborators with high visual craftsmanship, verified project data, working live demos, and zero fluff.

---

## 🌟 Key Features

- **Cinematic Craftsmanship**: Near-black background (`#090a0f`), refined charcoal cards (`#11141e`), warm amber highlights (`#f59e0b`), subtle grid textures, and delicate borders inspired by Linear and Vercel.
- **Fact-Checked & Audited**: 100% verified source code, active deployment URLs (MentorNearby, CampusPrep), and honest status labels. Unverified claims (e.g. unlinked coding platform metrics or offline demos) are omitted or transparently disclaimed.
- **Smooth Interaction & Motion**: Framer Motion staggered entrance animations, active section navigation pills, hover states, and complete support for `prefers-reduced-motion`.
- **Dark & Light Mode**: Smooth theme transitions persisted in `localStorage` with fail-safe error handling and anti-flash inline hydration scripts.
- **Accessible & Mobile-First**: Tested across desktop (1440px), tablet (768px), and mobile (390px) with responsive typography, touch targets, and an accessible mobile drawer.
- **Technical SEO**: Dynamic sitemap (`/sitemap.xml`), robots (`/robots.txt`), OpenGraph social cards, and semantic HTML5 hierarchy.
- **Embedded Resume & Assets**: Bundled with a verified, compliant PDF resume (`/Priyanshu_Kumar_Resume.pdf`) and authentic avatar fallback.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript (Strict Mode) |
| **Styling** | Tailwind CSS 3.4 (Custom Design Tokens) |
| **Animation** | Framer Motion 11 |
| **Icons** | Lucide React |
| **Typography** | Inter (`next/font/google`) |
| **Deployment** | Vercel (Zero-Config Edge / Static) |

---

## 📂 Project Architecture

```
my_portfolio/
├── public/
│   ├── profile.jpg                      # Authentic profile image from GitHub
│   ├── Priyanshu_Kumar_Resume.pdf       # Validated single-page resume PDF
│   ├── favicon.svg                      # PK monogram vector favicon
│   ├── favicon.ico                      # Standard favicon fallback
│   └── projects/                        # Verified project screenshots & assets
├── src/
│   ├── app/
│   │   ├── layout.tsx                   # Root layout, Inter font, SEO & OpenGraph
│   │   ├── page.tsx                     # Main page assembling all sections
│   │   ├── globals.css                  # Design tokens, variables & reduced motion
│   │   ├── robots.ts                    # Dynamic robots.txt
│   │   └── sitemap.ts                   # Dynamic sitemap.xml
│   ├── components/
│   │   ├── Navbar.tsx                   # Sticky nav with PK monogram & mobile drawer
│   │   ├── ThemeToggle.tsx              # Dark/light theme toggle
│   │   ├── ThemeProvider.tsx            # Theme context with localStorage persistence
│   │   ├── Hero.tsx                     # Staggered hero with verified CTAs
│   │   ├── About.tsx                    # Background, education, and verified stats
│   │   ├── Projects.tsx                 # Project grid with category filter pills
│   │   ├── ProjectCard.tsx              # Card with tech chips & live demo buttons
│   │   ├── Skills.tsx                   # Grouped technical capability cards
│   │   ├── Experience.tsx               # Vertical career & internship timeline
│   │   ├── Education.tsx                # Degree & secondary education cards
│   │   ├── Certifications.tsx           # Programs, simulations & activities
│   │   ├── Contact.tsx                  # Email, LinkedIn, GitHub action triggers
│   │   ├── Footer.tsx                   # Dynamic year, attribution, and audit modal
│   │   └── AuditModal.tsx               # Fact-checking transparency modal
│   └── data/
│       ├── profile.ts                   # Centralized profile & bio information
│       ├── projects.ts                  # Verified project details & live links
│       ├── skills.ts                    # Categorized technical competencies
│       ├── experience.ts                # Timeline entries & responsibilities
│       ├── education.ts                 # Academic records & grades
│       ├── certifications.ts            # Certifications & virtual simulations
│       ├── activities.ts                # Campus ambassador & club leadership
│       └── audit.ts                     # Independent audit report data
├── tailwind.config.ts                   # Custom color palette and shadow tokens
├── tsconfig.json                        # Strict TypeScript compiler options
└── package.json
```

---

## ⚡ Quick Start & Local Development

### 1. Prerequisites
- **Node.js**: v18.17.0 or newer (Node v20+ recommended)
- **npm**: v9.0.0 or newer

### 2. Installation
Clone the repository and install all dependencies:
```bash
npm install
```

### 3. Run Development Server
Start the local Next.js development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the site with hot-module replacement.

### 4. Build for Production
To test the production build locally:
```bash
npm run build
npm run start
```

---

## 🚀 Deployment to Vercel

This portfolio is configured for zero-config deployment on **Vercel**:

### Option 1 — Push to GitHub and Deploy via Vercel Dashboard
1. Initialize git and commit your files:
   ```bash
   git init
   git add .
   git commit -m "feat: complete Priyanshu Kumar personal portfolio"
   ```
2. Create a new repository on your GitHub account (`priyanshukumar09546-cpu`):
   ```bash
   git remote add origin https://github.com/priyanshukumar09546-cpu/priyanshu-portfolio.git
   git branch -M main
   git push -u origin main
   ```
3. Visit [vercel.com](https://vercel.com) and log in with GitHub.
4. Click **"Add New..."** → **"Project"**.
5. Select `priyanshu-portfolio` from your GitHub repositories.
6. Under **Build and Output Settings**, Vercel will automatically detect `Next.js`.
7. Click **"Deploy"**. Your portfolio will be live in under 60 seconds with SSL and global CDN caching.

---

## 🛡️ Fact-Checking & Profile Audit Summary

| Category | Finding / Status | Action Taken |
|---|---|---|
| **Identity** | Confirmed ownership of `github.com/priyanshukumar09546-cpu`. Real avatar extracted from GitHub CDN. | Added to `/public/profile.jpg` with PK monogram fallback. |
| **Education** | ABES Engineering College, Ghaziabad (AKTU), Class of 2028. | Documented accurately across Hero, About, and Education. |
| **MentorNearby** | Live deployment tested at `https://www.mentornearby.com` (HTTP 200 OK). Repo verified. | Prominently featured with working Live Demo & GitHub source links. |
| **CampusPrep** | Live deployment tested at `https://professorvirus.site` (HTTP 200 OK). Repo verified. | Featured with working Live Demo & GitHub source links. |
| **ScamShield AI** | Repo verified. Demo at `scamshield-ai-official.vercel.app` returned 404 (offline). | Live button hidden per prompt rules; verified source repository featured. |
| **CropDetect AI** | Repo verified. 95.5% accuracy benchmark verified. Streamlit demo timed out. | Live button hidden; benchmark metrics and architecture highlighted. |
| **DSA Statistics** | Problem counts unverified on public profiles. | Omitted to uphold strict truthfulness policy. |

---

## 📬 Contact

- **Email**: [priyanshukumar09546@gmail.com](mailto:priyanshukumar09546@gmail.com)
- **LinkedIn**: [linkedin.com/in/priyanshu-kumar-9a2732255](https://www.linkedin.com/in/priyanshu-kumar-9a2732255/)
- **GitHub**: [github.com/priyanshukumar09546-cpu](https://github.com/priyanshukumar09546-cpu)

Designed and built by Priyanshu Kumar.
