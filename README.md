# Hisako Technologies

A high-end, monochrome landing page and portfolio site for **Hisako Technologies Limited**, a hybrid software agency and tech holding company based in Nairobi, Kenya.

## Architecture & Tech Stack

This project is built for maximum performance, maintainability, and aesthetic precision using modern web standards.

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (Custom inline theme)
- **Motion:** Framer Motion (Optimized via `LazyMotion` & `domAnimation`)
- **Icons:** Lucide React
- **Typography:** `next/font/google` (Playfair Display, DM Sans, IBM Plex Mono)

## Core Features

- **Strict Monochrome Design System:** Adheres perfectly to the internal `DESIGN.md` guidelines, enforcing a sharp, zero border-radius UI with a heavily restricted color palette (`#0A0A0A`, `#F5F5F0`, `#888888`, `#2A2A2A`).
- **Typographic Precision:** Utilizes fluid typography (`clamp`) scaling seamlessly from mobile to ultrawide desktop monitors.
- **Hardware-Accelerated Animation:** Complex scroll reveals, marquee strips, and staggered grid entries utilizing `whileInView` observers.
- **Performance Optimized:** Uses `next/image` for all graphical assets, structural lazy-loading for heavy motion libraries, and `display: "swap"` for fonts to eliminate render-blocking constraints.
- **Accessibility & Respectful UI:** Built-in `:focus-visible` states, full ARIA coverage on mobile navigation, color contrast validation, and dynamic support for operating-system level `useReducedMotion` preferences.

## Project Structure

```bash
├── app/
│   ├── globals.css        # Tailwind v4 theme, inline variables, and global CSS
│   ├── layout.tsx         # Root layout, Next.js fonts, and lazy motion provider
│   └── page.tsx           # Main assembly of all sections
├── components/
│   ├── layout/
│   │   ├── Nav.tsx        # Fixed top navigation with mobile menu
│   │   └── Footer.tsx     # Minimalist brand footer
│   ├── providers/
│   │   └── LazyMotionProvider.tsx
│   └── sections/
│       ├── Hero.tsx       # Typographic entry, rotating asterisk, infinite ticker
│       ├── Services.tsx   # Service grid and full-bleed image placeholder
│       ├── Products.tsx   # Marquee strip, VendoFlow flagship block, stealth cards
│       ├── About.tsx      # Split column layout with pull-quote and vision strip
│       └── Contact.tsx    # Raw styled dark-mode contact form
├── public/
│   └── logo.png           # Hisako Asterisk
├── DESIGN.md              # Source of truth for aesthetic and component rules
└── IMAGES.md              # Image placement documentation and Lummi.ai search queries
```

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Design Reference
Before contributing or altering the layout, please review the internal [DESIGN.md](./DESIGN.md) document to understand the strict spacing, typography, and motion rules governing this codebase.
