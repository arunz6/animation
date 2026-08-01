# Animation 🎬

A collection of front-end animation experiments built with **React**, **GSAP**, **Framer Motion**, and **Three.js / React Three Fiber**. This repo is a learning playground for exploring scroll-based animations, 3D scenes, and motion design in the browser.

## 📁 Projects

| Folder | Description | Key Libraries |
|---|---|---|
| [`day1`](./day1) | Basic motion/animation warm-up — simple `motion.div` transform animation and GSAP stagger effects. | Framer Motion (`motion`), GSAP, `@gsap/react` |
| [`threejs`](./threejs) | A scroll-driven 3D landing page: a rotating GLB model reacts to scroll position, with a navbar, hero section, and project section animated via GSAP + ScrollTrigger. | Three.js, `@react-three/fiber`, `@react-three/drei`, GSAP + ScrollTrigger, `leva` |

Each project is an independent Vite + React app with its own `package.json`.

---

## 🚀 Getting Started

Both projects follow the same setup pattern. Pick a project folder and run:

```bash
# 1. Clone the repo
git clone https://github.com/arunz6/animation.git
cd animation

# 2. Move into a project folder
cd day1        # or: cd threejs

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

Then open the local URL Vite prints in your terminal (usually `http://localhost:5173`).

### Other scripts

```bash
npm run build     # Production build
npm run preview   # Preview the production build locally
npm run lint      # Lint the project (ESLint for day1, Oxlint for threejs)
```

---

## 🧩 Project Details

### `day1`

A minimal starting point for animation experiments:
- `App.jsx` — a Framer Motion `motion.div` that animates position (`x`, `y`) on mount.
- `feature/homepage/Home.jsx` — a GSAP `useGSAP` hook that fades and staggers children into view.
- `feature/component/Sad.jsx` — a simple list component used to demo the stagger effect.

**Stack:** React 19, Vite, Tailwind CSS v4, GSAP, Framer Motion (`motion`)

### `threejs`

A scroll-based 3D portfolio-style landing page:
- **Navbar** — a floating pill navbar with active-link highlighting and smooth scroll-to-section.
- **Home** — renders a fixed full-screen `<Canvas>` (React Three Fiber) behind the content, which fades out as the user scrolls past the hero.
- **Exper (3D Experience)** — loads a `.glb` 3D model (`/shape.glb`), auto-rotates it every frame, and animates its position along the Z-axis as the user scrolls, using GSAP `ScrollTrigger` (`scrub: true`). Also animates a `--blur-bg` CSS variable to blur the background behind the next section.
- **Projects** — a section with a background SVG logo that fades/scales in via a GSAP timeline triggered by scroll position.

**Stack:** React 19, Vite, Tailwind CSS v4, Three.js, `@react-three/fiber`, `@react-three/drei`, GSAP + ScrollTrigger, `leva`, `react-icons`

> **Note:** Make sure the `shape.glb` model referenced in `Exper.jsx` exists under the `public/` folder before running the project.

---

## 🛠️ Tech Stack Overview

- **React 19** + **Vite** — app scaffolding and dev server
- **Tailwind CSS v4** — utility-first styling
- **GSAP** (`gsap`, `@gsap/react`, `ScrollTrigger`) — timeline & scroll-based animation
- **Framer Motion** (`motion`) — declarative React animation
- **Three.js** + **React Three Fiber** + **drei** — 3D scenes in React
- **ESLint / Oxlint** — linting

---

## 📌 Roadmap / Ideas

- [ ] Add more animation demos to `day1`
- [ ] Add a shared/reusable animation components folder
- [ ] Deploy a live demo (Vercel/Netlify) and link it here

---

## 📄 License

No license specified yet — add one (e.g. MIT) if you plan to share this publicly.
