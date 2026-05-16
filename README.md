# Mohanarao Gorle — Portfolio

A premium Apple-inspired developer portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17 or later
- npm or yarn

### 1. Install dependencies
```bash
npm install
```

### 2. Run dev server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

---

## ✏️ Personalize

### Update your links
In `src/lib/data.ts`, replace the placeholder URLs:
```ts
links: {
  linkedin: "https://linkedin.com/in/YOUR_USERNAME",
  github:   "https://github.com/YOUR_USERNAME",
  leetcode: "https://leetcode.com/YOUR_USERNAME",
},
```

### Add your resume PDF
Place your resume at `/public/resume.pdf` so the "Download CV" button works.

### Update project GitHub/demo links
In `src/lib/data.ts` → `projects` array, set each project's `github` and `demo` URLs.

### Contact form backend (optional)
The contact form currently simulates submission. To make it functional:
1. Create a Next.js API route at `src/app/api/contact/route.ts`
2. Use [Resend](https://resend.com), [EmailJS](https://www.emailjs.com/), or [Formspree](https://formspree.io/)
3. Call the API from `ContactSection.tsx` `handleSubmit`

---

## 🌐 Deploy to Vercel

### Option A — Vercel CLI
```bash
npm i -g vercel
vercel
# Follow the prompts
```

### Option B — GitHub + Vercel Dashboard
1. Push this repo to GitHub
2. Visit [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repo
4. Click **Deploy** — zero config needed

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata
│   ├── page.tsx            # Main page (assembles all sections)
│   └── globals.css         # CSS variables, Tailwind, global styles
├── components/
│   ├── Navbar.tsx          # Sticky transparent nav + mobile menu
│   ├── Footer.tsx          # Footer with social links
│   ├── LoadingScreen.tsx   # Animated loading screen
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── EducationSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       ├── FadeIn.tsx          # Scroll-triggered fade/slide animation wrapper
│       └── ScrollProgress.tsx  # Top progress bar
├── hooks/
│   ├── useTheme.ts         # Dark/light mode toggle with localStorage
│   └── useScrollProgress.ts
└── lib/
    ├── data.ts             # ✅ All your personal data lives here
    └── utils.ts            # cn() helper
```

---

## 🎨 Design System

| Token | Light | Dark |
|-------|-------|------|
| `--bg` | `#ffffff` | `#000000` |
| `--text` | `#1d1d1f` | `#f5f5f7` |
| `--surface` | `#f5f5f7` | `#111111` |
| `--accent` | `#0071e3` | `#2997ff` |

Edit `src/app/globals.css` to customize the palette.

---

## 📦 Tech Stack

- **Next.js 14** — App Router, SSG
- **TypeScript** — Full type safety
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Smooth animations
- **Lucide React** — Clean icons

---

Built with ❤️ by Mohanarao Gorle
