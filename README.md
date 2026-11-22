# Kirti — Engineering Portfolio & Personal Studio

A minimal, editorial engineering portfolio built with React, TypeScript, and Tailwind CSS. Designed to showcase projects in agent workflows, document retrieval, and client-side machine learning.

---

## ✨ Features & Architecture

- **Soft Tech Studio Aesthetic**: Built with Fraunces headings, Inter body text, and JetBrains Mono for telemetry, with a warm ivory/porcelain palette, muted rose, and deep plum accents.
- **Coordinated Themes**: Fully responsive light and dark themes with persistent `localStorage` preference support.
- **In-Depth Case Studies**: Each featured project (`MeetMate`, `ResumeProcessor`, `Prod`, `SafetyApp`) includes problem statements, ASCII architecture diagrams, engineering decisions & trade-offs, and documented constraints.
- **In-Browser Interactive ML Lab**: A client-side demonstration executing the compiled XGBoost decision tree logic from **Prod** directly in the browser with live simulated inputs.
- **Zero Backend / 100% Static**: Builds into a pure `dist/` directory ready for deployment on static hosting platforms (Vercel, Cloudflare Pages, or GitHub Pages) without backend dependencies.

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

All content is decoupled from components and stored under `src/data/`:

- **Personal Information & Links**: Update `src/data/site.ts` (bio, social links, headline, status pill, navigation).
- **Curiosity & Focus Areas**: Update `src/data/exploring.ts` (editorial focus areas and ongoing inquiry notes).
- **Adding / Modifying a Project**:
  1. Add or edit a project file in `src/data/projects/` (e.g., `meetmate.ts`).
  2. Export it from `src/data/projects/index.ts`. The UI cards, badges, and case study modals update automatically without modifying component code.
- **Work Experience**: Update `src/data/experience.ts`.
- **Skills Matrix**: Update `src/data/skills.ts`.
- **Replacing Your Résumé**: Replace `public/resume.pdf` with your latest PDF file.
- **Profile Photo**: Replace `public/kirti.jpg` with an updated portrait.

---

