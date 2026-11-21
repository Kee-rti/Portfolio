# Kirti — Engineering Portfolio & Personal Studio

A minimal, editorial, and tactile engineering portfolio designed from scratch with React, TypeScript, and Tailwind CSS. Built to showcase applied AI systems, agentic tool orchestration, grounded RAG pipelines, and edge machine learning models.

---

## ✨ Features & Architecture

- **Editorial Studio Aesthetic**: Built with Fraunces headings, Inter body text, and JetBrains Mono for telemetry, with a warm ivory/porcelain palette, muted rose, and deep plum accents.
- **Coordinated Themes**: Fully responsive light and dark themes with persistent `localStorage` support.
- **In-Depth Case Studies**: Each flagship project (`MeetMate`, `ResumeProcessor`, `Prod`, `SafetyApp`) includes problem definitions, ASCII architecture diagrams, engineering decisions & trade-offs, and verified validation metrics.
- **In-Browser Interactive ML Lab**: A client-side demonstration evaluating the actual edge decision model from **Prod** with live slider inputs and sub-millisecond inference.
- **Zero Backend / 100% Static**: Builds into a pure `dist/` directory ready for 1-click deployment on Vercel or Cloudflare Pages with zero server cost and sub-200ms global TTFB.

---

## 🛠️ Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
The application will launch at `http://localhost:3000`.

### 3. Production Build
```bash
npm run build
```
Generates optimized static HTML, CSS, and JS files into the `dist/` folder.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📝 Updating Content & Maintainability

All content is modularized under `src/data/` for rapid updates in minutes:

- **Personal Information & Links**: Update `src/data/site.ts` (bio, social links, headline, status pill).
- **Adding / Modifying a Project**:
  1. Add or edit a project file in `src/data/projects/` (e.g., `meetmate.ts`).
  2. Export it from `src/data/projects/index.ts`. The UI cards, badges, and modal drawers update automatically without redesigning components.
- **Work Experience**: Update `src/data/experience.ts`.
- **Skills Matrix**: Update `src/data/skills.ts`.
- **Replacing Your Résumé**: Replace `public/resume.pdf` with your latest PDF export.

---

## 🚀 Deployment to Vercel

1. Push this repository to GitHub (e.g. `github.com/kee-rti/portfolio`).
2. Log into [Vercel](https://vercel.com) and click **"New Project"**.
3. Import your repository.
4. Verify the default settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. Your portfolio will be live globally on Vercel's edge network.
