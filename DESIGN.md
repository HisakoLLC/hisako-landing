# DESIGN.md — Hisako Technologies Design System

## Identity

**Company:** Hisako Technologies Limited
**Tagline:** Building the systems that power modern businesses
**Visual DNA:** Swiss International Style · Editorial Monochrome · Precision Engineering

---

## Core Design Principles

1. **Monochrome First** — Black and white are the primary palette. Color is never decorative; it is structural.
2. **Grid Discipline** — Everything lives on a strict grid. Tension comes from scale contrast, not from breaking rules.
3. **Motion with Purpose** — Animations reveal hierarchy. Nothing moves for decoration alone.
4. **Editorial Density** — Large type next to small type. Breathing room is earned, not given freely.
5. **Swiss Precision** — Clean, rational, neutral. The grid is the aesthetic.

---

## Color Palette

```css
--color-black: #0A0A0A;
--color-white: #F5F5F0;
--color-mid: #1A1A1A;
--color-surface: #111111;
--color-border: #2A2A2A;
--color-muted: #666666;
--color-accent: #F5F5F0; /* White is the accent on dark */
```

Background: `#0A0A0A` (near-black, not pure)
Text: `#F5F5F0` (warm white, not harsh)
Borders: `1px solid #2A2A2A`
Hover states: opacity shifts, not color changes

---

## Typography

### Font Stack
- **Display / Hero:** `"Editorial New"` or `"Playfair Display"` — for large editorial headlines
- **UI / Body:** `"Neue Haas Grotesk"` or `"DM Sans"` — clean, Swiss grotesque
- **Mono / Label:** `"IBM Plex Mono"` — for labels, tags, technical callouts

### Scale (rem)
```
xs:    0.625rem  (10px) — tags, labels
sm:    0.75rem   (12px) — captions, metadata
base:  1rem      (16px) — body text
lg:    1.25rem   (20px) — lead text
xl:    1.5rem    (24px) — subheadings
2xl:   2rem      (32px) — section headings
3xl:   3rem      (48px) — large headings
4xl:   4.5rem    (72px) — hero sub-text
5xl:   7.5rem    (120px) — hero display
fluid: clamp(3rem, 10vw, 9rem) — truly fluid hero text
```

### Typography Rules
- Line height for display: 0.9–1.0 (tight, editorial)
- Line height for body: 1.6–1.7 (readable)
- Letter spacing for uppercase labels: `0.15em`
- Never center-align body text
- Headlines are left-aligned or right-aligned, never centered (except hero)

---

## Logo

The Hisako mark is an **asymmetric asterisk** — 3 crossed bars, slightly irregular. It is always:
- Monochrome: white on black, or black on white
- Never colored
- Never distorted
- Used as both logo and decorative motif at large scale

Logo file: `/public/logo.png` (the uploaded mark)

---

## Spacing System

Base unit: `8px`
```
4px   — micro (dividers, tight gaps)
8px   — xs
16px  — sm
24px  — md
32px  — lg
48px  — xl
64px  — 2xl
96px  — 3xl
128px — 4xl
```

Section padding: `py-24 md:py-32` (192px–256px vertical breathing room)
Max content width: `1280px`
Content grid: `12 columns`, `24px gutter`

---

## Animation Principles

### Easing
```js
const ease = {
  smooth: [0.25, 0.1, 0.25, 1],
  snappy: [0.23, 1, 0.32, 1],
  reveal: [0.16, 1, 0.3, 1],
}
```

### Timing
- Fast micro: `150ms`
- Standard transition: `300ms`
- Reveal animation: `600ms–800ms`
- Stagger delay between items: `80ms–120ms`
- Page entry: `1000ms` total with staggered reveals

### Motion Patterns
1. **Fade Up** — elements enter from `y: 24px` opacity 0 → natural
2. **Line Draw** — horizontal rules animate width from 0 → 100%
3. **Number Count** — counters animate up on scroll into view
4. **Mark Rotation** — the asterisk logo slowly rotates on hover (360°, 4s)
5. **Text Scramble** — nav items or headings briefly scramble on hover
6. **Slide Reveal** — text revealed by a black overlay sliding away (clip-path)

---

## Component Patterns

### Nav
- Fixed top, `height: 64px`
- Logo left, links right
- No background on scroll start → `backdrop-blur + border-bottom` after 80px scroll
- Links: uppercase, `0.1em` tracking, `12px`

### Buttons
```
Primary: white bg, black text, no border radius, 48px height, px-8
Ghost: transparent bg, white border 1px, white text
Hover: invert colors (primary → ghost transition)
No rounded corners — sharp edges only
```

### Cards
- `border: 1px solid var(--color-border)`
- No border radius (or max `2px`)
- Background: `var(--color-surface)`
- Hover: border brightens to `#444444`, subtle `translateY(-2px)`

### Section Labels
```
[  01  SERVICES  ]
```
Uppercase mono, with bracket decoration, `10px`, muted color

### Dividers
- `1px solid var(--color-border)`
- Sometimes animated width on scroll

---

## Image Treatment

**All images from Lummi.ai** should be:
- High-contrast or dark-toned to match the dark palette
- Used at full-bleed or with dark overlay (`rgba(0,0,0,0.5)`)
- Never floating — always contained in grid cells or full-width blocks
- Can be desaturated in CSS: `filter: grayscale(20%) contrast(1.1)`

### Image Overlay Pattern
```css
.image-container::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 40%, #0A0A0A 100%);
}
```

---

## Page Structure

```
<Nav />               fixed, 64px
<Hero />              100vh, full-screen
<Services />          ~100vh
<Products />          ~100vh  
<About />             ~80vh
<Contact />           ~60vh
<Footer />            ~200px
```

---

## Tech Stack

```
Framework:     Next.js 15 (App Router)
Styling:       Tailwind CSS v3
Animation:     Framer Motion v11
UI Primitives: shadcn/ui (minimal usage)
Fonts:         Google Fonts (Playfair Display + DM Sans + IBM Plex Mono)
Icons:         Lucide React
Images:        Lummi.ai (sourced manually, placed in /public/images/)
Hosting:       Vercel
```

---

## File Structure

```
/app
  layout.tsx          — fonts, metadata, global providers
  page.tsx            — assembles all sections
  globals.css         — CSS variables, base styles

/components
  /layout
    Nav.tsx
    Footer.tsx
  /sections
    Hero.tsx
    Services.tsx
    Products.tsx
    About.tsx
    Contact.tsx
  /ui
    Button.tsx
    SectionLabel.tsx
    AnimatedText.tsx
    HisakoMark.tsx    — SVG recreation of the logo mark

/public
  /images             — Lummi.ai images placed here
  logo.png
```

---

## Voice & Copy Tone

- **Terse.** Never use 3 words where 1 works.
- **Confident without bravado.** State facts, not promises.
- **No buzzwords.** No "synergy", "disruptive", "next-gen" — say exactly what you do.
- **Technical credibility.** Speak like engineers, not marketers.

Example headlines:
- ✅ "We build the systems your business runs on."
- ✅ "Software that scales. Products that last."
- ❌ "Empowering businesses through innovative solutions."

---

## Do Not

- No purple. No gradients (except subtle black-to-black depth gradients).
- No rounded corners on cards or buttons.
- No emojis in UI.
- No stock-looking sans-serif + blue CTA combos.
- No centered body text.
- No hero with a device mockup floating over a gradient.