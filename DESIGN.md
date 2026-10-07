# HISAKO DESIGN SYSTEM & BRAND FOUNDATION

## 1. Brand Positioning & Identity
- **Company**: Hisako — Technology Company (not a SaaS-only company, not an AI agency).
- **Core Positioning**: *"Technology that moves businesses forward."*
- **Supporting Message**: *"We help organizations build, automate, integrate and modernize their technology."*
- **Audience**: Businesses, institutions, NGOs, and enterprise organizations.
- **Tone & Mood**: Serious, established, architectural, engineering-led, systems-oriented. High institutional trust.

### Brand Distinction (Strict Rule)
- **Zero overlap with Passr**:
  - NO orange accents
  - NO mountain or outdoor imagery
  - NO black/cream aesthetic
  - NO product-startup styling or VC portfolio hype
  - Strictly maintain Hisako’s independent corporate technology identity.

---

## 2. Color Palette & Tokens

| Token | Hex / Value | Purpose |
|---|---|---|
| `--navy` | `#0A1128` | Primary corporate accent, headers, high-trust containers |
| `--navy-deep` | `#060B1A` | Deep contrast surfaces |
| `--navy-border` | `#1E2F5C` | Borders within navy surfaces |
| `--primary` (`--royal-blue`) | `#1E9DF1` | Interactive elements, focal points, primary CTA |
| `--background` | `#FFFFFF` | Core canvas background |
| `--card` (`--cool-gray`) | `#F7F8F8` | Component panels, card surfaces, quiet contrast |
| `--foreground` (`--graphite`) | `#0F1419` | High-contrast body & heading text |
| `--muted-foreground` | `#536471` | Secondary descriptions, technical annotations |
| `--border` | `#E1EAEF` | Crisp, architectural 1px line separators |
| `--accent` | `#E3ECF6` | Subtle pill badges, tag backgrounds |
| `--radius` | `0.625rem` (10px) | Restrained rounded corners (no excessive bubbles) |

---

## 3. Typography Hierarchy

- **Headings & Display**: `Satoshi` (`--font-heading`)
  - H1: `text-3xl sm:text-4xl md:text-5xl lg:text-6xl`, tracking `tight`, leading `[1.08]`
  - H2: `text-2xl sm:text-3xl md:text-4xl`, tracking `tight`, leading `tight`
  - H3: `text-lg sm:text-xl font-semibold`
  - Applied automatically via `@layer base` for `h1`-`h6`.
- **Body & Paragraphs**: `Satoshi` / `Inter` (`--font-sans`)
  - Body Large: `text-base sm:text-lg`, leading `relaxed`
  - Body Normal: `text-sm sm:text-base`, leading `relaxed`
  - Body Small: `text-xs sm:text-sm`, leading `relaxed`
- **Technical Annotations & Labels**: `Menlo` / Monospace (`--font-mono`)
  - Eyebrows, coordinate indicators (e.g. `SYS.01`), timestamps, metric labels: `text-[10px] sm:text-[11px]`, tracking `wider`, uppercase.

---

## 4. Reusable UI Components

### 4.1 Buttons (`components/ui/button.tsx`)
Restrained rounded corners (`rounded-md`), crisp 1px borders, clear hover transitions:
- `navy`: `bg-navy text-white hover:bg-navy-muted border border-navy-border active:translate-y-px`
- `default`: `bg-primary text-white hover:bg-royal-blue-hover border border-primary/20 active:translate-y-px`
- `outline`: `border border-border bg-background hover:bg-card text-foreground active:translate-y-px`
- Arrow Micro-Translation: hover state shifts trailing arrow `&rarr;` by `0.5px`–`1px` to indicate actionable direction.

### 4.2 Cards (`components/ui/card.tsx`)
Architectural panels with subtle borders:
- `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`
- Subtle engineered hover transitions: `duration-200 ease-out hover:border-primary/50`.

### 4.3 Image Placeholders (`components/ui/image-placeholder.tsx`)
- Architectural framing with blueprint corner brackets (`┌ ┐ └ ┘`).
- Gentle opacity fade-in entrance with subtle hover alignment.

---

## 5. Restrained Interaction & Accessibility System

### Interaction Principles
- **Subtle & Engineered**: Zero bouncing, spinning, giant cinematic zooms, or glowing AI auras.
- **Scroll Reveals**: Handled via `Reveal` component (`translate-y-2.5` to `translate-y-0` with `500ms ease-out`).
- **Process Line Animation**: Subtle horizontal line draw on desktop (`animate-line-h`) and vertical line draw on mobile (`animate-line-v`).
- **Navigation State**:
  - Scroll elevation: Adds subtle backdrop blur and boundary shadow when scrolled past 10px.
  - Active route highlighting: Automatically marks current route with active pill badge.
- **Accessibility & Focus**:
  - High-visibility focus ring: `focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none`.
  - Full `prefers-reduced-motion` compliance: All animations collapse to 0.01ms duration and instant reveals when user has reduced motion enabled.
