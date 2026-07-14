# Swastixa Digital - High-Performance Creative Portfolio 🚀

Swastixa is a premium digital agency portfolio built with **React**, **Vite**, and **Tailwind CSS**. It is designed to showcase high-density media content (Production, Social Media Management, Digital Marketing, and Web Development) with a focus on liquid-smooth performance and visual excellence.

---

## 🛠️ Performance Engineering

### 🎥 Adaptive Video Optimization
To handle dozens of high-definition videos without sacrificing load speed, we implemented a custom **Dual-Observer Video System**:
- **Layer 1 (Pre-fetch)**: An `IntersectionObserver` with an **800px rootMargin** starts fetching metadata and initial buffer chunks before the user even reaches the content.
- **Layer 2 (Viewport Management)**: A strict threshold observer controls playback. Videos only `play()` when visible and `pause()` the millisecond they leave the viewport, preserving CPU/GPU cycles and battery life.
- **Virtualization**: Leveraging `@tanstack/react-virtual`, the DOM only ever contains a limited number of active video containers, ensuring stability even with vast content lists.

### ⚡ Technical Optimizations
- **Route Splitting**: Implements `React.lazy` and `Suspense` for modular bundle delivery.
- **Natural Scrolling**: Custom window-based virtualization allows for browser-native smooth scrolling across mixed content sections.
- **Zero-Preload Strategy**: Global `preload="none"` prevents initial page load bottlenecks by deferring media downloads until necessary.

---

## ✨ Design & Animation Philosophy

- **Premium Aesthetics**: Deep neutral-900 palettes with glassmorphism and high-impact "tracking-tighter" typography.
- **Immersive Motion**: Dynamic tilt effects via `react-parallax-tilt`, GSAP for complex timelines, and Framer Motion for interactive states.
- **Responsive Fluidity**: A mobile-first design system that ensures a premium experience from ultra-wide desktops to hand-held devices.

---

## 🚀 Technology Stack

| Category | Tools |
| :--- | :--- |
| **Frontend** | React 19, Vite, React Router 7 |
| **Animation** | Framer Motion, GSAP, AOS, Parallax Tilt |
| **Optimization** | TanStack Virtual, Intersection Observer API |
| **Styling** | Tailwind CSS v4, Modern CSS Glassmorphism |

## 📂 Installation & Setup

<!-- 1. **Clone the Repo:**
   ```bash
   git clone https://github.com/rohitverma2179/swastixa_live.git
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Development Mode:**
   ```bash
   npm run dev
   ```

4. **Production Build:**
   ```bash
   npm run build -->
   ```

---

Built for Impact by [Swastixa Digital](https://swastixa.com)
