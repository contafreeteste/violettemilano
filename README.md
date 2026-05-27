# Violette Milano — Luxury Skincare

Premium institutional website for **Violette Milano**, a luxury skincare brand inspired by timeless elegance.

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **TailwindCSS 4**
- **Framer Motion** — scroll-reveal animations, parallax, stagger effects
- **Lucide React** — minimal icon set

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata, fonts, SEO
│   ├── page.tsx            # Homepage with all sections
│   └── globals.css         # Global styles and Tailwind theme
├── components/
│   ├── Header.tsx          # Fixed navbar with mobile menu
│   ├── Footer.tsx          # Footer with navigation and social links
│   └── sections/
│       ├── Hero.tsx        # Fullscreen hero with parallax
│       ├── About.tsx       # Brand story editorial layout
│       ├── Manifesto.tsx   # Oversized typography manifesto
│       ├── Philosophy.tsx  # Values grid with stagger animations
│       ├── Vision.tsx      # Timeline with cinematic background
│       └── Contact.tsx     # Contact form and social links
public/
├── robots.txt
└── sitemap.xml
```

## Design System

| Token          | Value     |
| -------------- | --------- |
| Background     | `#FAFAFA` |
| Foreground     | `#1A1A1A` |
| Accent (Gold)  | `#C9A962` |
| Serif Font     | Playfair Display |
| Sans Font      | Inter     |

## Deploy to Vercel

1. Push to GitHub
2. Import the repository on [vercel.com](https://vercel.com)
3. Vercel auto-detects Next.js — no configuration needed
4. Set your custom domain in Project Settings → Domains

## Images

The site currently uses Unsplash placeholder images. Replace them with official brand imagery by updating the `backgroundImage` URLs in the section components.

## License

All rights reserved — Violette Milano.
