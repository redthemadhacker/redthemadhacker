# Red The Mad Hacker // Developer Portfolio & Systems Dossier

> **Live Production:** [https://www.redthemadhacker.engineer](https://www.redthemadhacker.engineer)  
> `root@madhackerpc:~# code // coffee // create // EST. 2026`

---

## Overview

**Red The Mad Hacker** is an interactive, dark-mode terminal and systems portfolio engineered to showcase production software systems, independent venture architectures, client platforms, and hands-on cybersecurity laboratories.

Built with a focused crimson command-line aesthetic, the platform features dynamic build logging, interactive project dossiers, 3D flip card technical inspections, real-time audio cues, and an integrated system console terminal.

---

## Technical Stack

- **Framework:** [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Tooling:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Audio Effects:** Custom Web Audio API synthesizer modules
- **Production Server:** `serve` (Static single-page application delivery)
- **Hosting & Infrastructure:** [Heroku](https://www.heroku.com/)
- **DNS & SSL:** Exact Hosting (CNAME pointing to Heroku DNS target with Automated Certificate Management / Let's Encrypt)
- **Development Environment:** Linux (Ubuntu 24.10), VS Code, Git

---

## Key Modules & Architecture

The application implements a multi-view client layout with persistent audio, keyboard navigation, and interactive telemetry:

* **`BuildsSection.tsx`:** Primary architectural build log featuring category filtering (Flagship, Web Apps, Cybersecurity, Tools) and 3D flip cards toggling between visual overviews and technical execution specs.
* **`ProjectDossierModal.tsx`:** Full-screen deep-dive architectural dossiers detailing engineering decisions, live endpoints, repository links, and deployment metrics.
* **`TerminalModal.tsx`:** Interactive command-line interface emulating a Linux shell environment with custom system commands (`help`, `builds`, `certs`, `whoami`, `clear`).
* **`PageNavBar.tsx`:** Persistent terminal-style navigation dock with system status indicators and routing controls.
* **`audio.ts`:** Zero-dependency procedural sound engine leveraging the Web Audio API for interactive click, hover, flip, and success feedback.

---

## Local Development

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/)

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://git.heroku.com/redthemadhacker.git](https://git.heroku.com/redthemadhacker.git)
   cd redthemadhacker