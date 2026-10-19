# MINT MELT — Premium Pistachio Gelato Website

> An award-winning, cinematic product-reveal and scroll-driven storytelling landing page built for **MINT MELT**, artisanal pistachio gelato crafted with volcanic Sicilian Bronte pistachios.

---

## ✨ Features & Architecture

- **Cinematic Video Hero Reveal**: Integrates the custom Google Flow video (`mint-melt-hero.mp4`) with smooth radial vignette edge blending into the brand background `#A8C686`, failure fallback, and staggered editorial typography.
- **Continuous Scroll Storytelling (GSAP + ScrollTrigger)**:
  - **Section 01 — The Hero Reveal**: 100svh immersive intro with staggered typography and interactive audio.
  - **Section 02 — Meet Your Scoop**: Pinned GSAP ScrollTrigger viewport with scrubbed cup translation, scale, rotation, and editorial narrative reveals.
  - **Section 03 — The Art of Pistachio**: High-resolution Bronte pistachio showcase with mask reveal, parallax floating accents, and interactive ingredient profiles.
  - **Section 04 — The Creamy Close-Up**: Fluid cream wave SVG layers, large foreground product presentation, and mask-revealed typography.
  - **Section 05 — The Final Scoop**: Tasting pack flight selector, subtle floating animation, cold-freight guarantees, and direct bag ordering.
- **Lenis Smooth Scroll**: Studio Freight Lenis smooth wheel & touch scrolling synchronized directly with GSAP ScrollTrigger ticker.
- **Web Audio ASMR Micro-Sounds**: Zero-dependency synthetic Web Audio API for organic wooden scoop clicks and crystalline chimes with mute toggle.
- **Interactive Cold-Freight Bag Drawer**: Real-time cart calculation, quantity adjusters, and cold shipment guarantee details.
- **Sensory Tasting Masterclass Modal**: Deep dive into temperature curves (-12°C), micro-air density (18% overrun), and pairing rituals.

---

## 🎨 Brand Identity & Palette

| Token | Hex | Role |
| :--- | :--- | :--- |
| **Pistachio Green** | `#A8C686` | Primary hero and product-reveal background |
| **Mint Green** | `#DDF3E5` | Primary light sections (The Art of Pistachio) |
| **Cream** | `#FFF7E8` | Product accents, typography backgrounds, transitions |
| **Deep Forest Green** | `#183B2C` | Headlines, navigation, buttons, branding |
| **Warm Beige** | `#E6DCC6` | Supporting sections |

### Typography
- **Headlines**: *Cormorant Garamond* (Google Fonts editorial serif)
- **Body & Navigation**: *Plus Jakarta Sans* (Clean, modern geometric sans)

---

## 🚀 Running Locally

1. **Install Dependencies** (already installed):
   ```bash
   npm install
   ```

2. **Start Dev Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

4. **Preview Production Build**:
   ```bash
   npm run preview
   ```

---

## 📁 Project Structure

```
mint-melt/
├── public/
│   └── assets/
│       ├── mint-melt-hero.mp4                        # Google Flow cinematic reveal video
│       ├── mint-melt-cup.png                         # Master traveling 3D gelato cup
│       ├── Pistachio Gelato Feast in Ceramic Bowl.png# Transparent top-view ceramic bowl
│       ├── pistachio-cluster.png                     # Botanical pistachio cluster accent
│       └── pistachio-cluster-2.png                   # Botanical roasted pistachio accent
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                 # Luxury glassmorphic navigation
│   │   ├── HeroSection.jsx            # Section 1: Cinematic Video Hero
│   │   ├── ProductStorySection.jsx    # Section 2: Pinned scrubbed product journey
│   │   ├── IngredientSection.jsx      # Section 3: The Art of Pistachio (Sticky Rotating Bowl)
│   │   ├── CreamyExperienceSection.jsx# Section 4: Cream wave close-up
│   │   ├── FinalCTASection.jsx        # Section 5: The Final Scoop & Flight selector
│   │   ├── TravelingCup.jsx           # Master persistent traveling 3D cup across sections
│   │   ├── Footer.jsx                 # Editorial luxury footer with creator credits
│   │   ├── OrderDrawer.jsx            # Interactive cold-freight cart drawer
│   │   └── TastingProfileModal.jsx    # Sensory radar & pairing rituals modal
│   ├── utils/
│   │   └── sound.js                   # Web Audio ASMR scoop / chime synthesizer
│   ├── App.jsx                        # Master coordinator with Lenis & GSAP
│   ├── index.css                      # Tailwind v4 theme, tokens & utilities
│   └── main.jsx                       # React 19 entrypoint
├── index.html                         # Typography imports, SEO metadata
├── vite.config.js                     # Vite + Tailwind v4 configuration
└── package.json
```

---

## 👨‍💻 Creator & Lead

- **Designed & Developed by**: **Sidhanathan**
- **Role**: Creative Frontend Engineer & Digital Art Director
- **GitHub**: [github.com/Sidspidy](https://github.com/Sidspidy)
- **LinkedIn**: [linkedin.com/in/sidhanathan-k-sid](https://www.linkedin.com/in/sidhanathan-k-sid)
- **Email**: [sidhart1010@gmail.com](mailto:sidhart1010@gmail.com)

