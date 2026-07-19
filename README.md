# Suraj Karande - Portfolio Website 🚀

A premium, highly interactive, and responsive portfolio website highlighting full-stack capabilities, backend systems engineering, and modern frontend designs. Built with **React.js**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

---

## 🎨 New Features & Visual Enhancements

### 1. Swapped Hero Layout with Native Aspect Ratio Photo
- **Left Column**: High-resolution profile photo (`Suraj-Photo.jpeg`) rendered in its natural/native aspect ratio, nested inside a floating glassmorphic card with an interactive, colorful neon glow border that intensifies on hover.
- **Right Column**: Typed welcome introduction message with typewriter role animation (`Java Full Stack Developer`, `Spring Boot Developer`, `Backend Engineer`).

### 2. Premium Loader (#24 - Bouncing Dots Wave)
- Highly polished **Bouncing Dots Wave** loading animation at start.
- Programmed to exit after exactly **1.0 second** with smooth framer-motion slide/fade transitions.
- Utilizes a sequence of three custom-colored dots (Blue, Emerald, Indigo) with pulsing glowing drop shadows.

### 3. Live GitHub Integration & Analytics Dashboard
No manual data! All stats and highlights update dynamically in real time:
- **Profile Summary Header**: Real-time avatar, bio, handle, and followers/following counts fetched directly from the GitHub API.
- **Dynamic Stats Grid**: Interactive cards displaying Public Repos, Total Stars, and Followers/Following, powered by animated counters.
- **Activity Graph**: Live visualization of commits, pull requests, and activity timelines from GitHub.
- **Ecosystem Tech Stack**: Dynamically compiled from repository topics to highlight technologies currently in use.
- **Live Profile Stats**: Embeds real-time commits, pull requests, issues logged, and contributions (incorporates private repositories and total all-time commits with cache optimization).
- **Contribution Streak**: Automatically visualizes total contributions, current active streaks, and longest streaks.

---

## 🛠️ Tech Stack
- **Frontend Core**: React 18, React Router, Framer Motion, React Icons
- **State Management**: Zustand
- **Animations & Effects**: Tailwind CSS, React Type Animation, Canvas Confetti
- **Build Tool**: Vite
- **Integrations**: GitHub REST APIs, GitHub Readme Stats, Streak Stats

---

## 📦 Running Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/SurajKarande01/Suraj_Karande-Portfolio.git
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Access the site in your browser at `http://localhost:5173`.

---

## 🌐 Deployment
This repository is configured for automatic deployment on Vercel. Every commit pushed to the `main` branch automatically triggers a production build and release cycle.
