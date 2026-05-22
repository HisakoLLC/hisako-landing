# DESIGN_V2.md — Hisako AI Agency Design System Update
# Extends DESIGN.md. Where these conflict, V2 wins.

## Brand Identity Update

**New positioning:** AI Agency — we build custom AI systems, agents, and workflows for global startups and scale-ups.
**Brand name on site:** "Hisako" (drop Technologies Limited from landing UI, keep in legal footer only)
**Tagline:** "We build the AI your business runs on."

---

## Visual Direction Update: Intelligence Motion Layer

Same dark monochrome base. Add a subtle "intelligence" motion layer:

### New Animation Patterns (add to existing)

**Particle/Node Network (Hero background)**
- Very subtle SVG or canvas: sparse floating nodes connected by thin lines
- Nodes: 4–6px circles, opacity 0.08, color #F5F5F0
- Lines: 1px, opacity 0.04, only draw when nodes are within 180px of each other
- Slow drift: each node moves 0.3–0.5px per frame in a random direction, bounces off edges
- This suggests neural networks / intelligence without being loud or cliché
- MUST be subtle — if you notice it immediately, it's too strong

**Text Typewriter Effect (Hero sub-headline)**
- The AI positioning sub-headline types itself in on load
- Use a typewriter animation: characters appear one by one, 40ms per character
- A blinking cursor (|) appears at the end, blinks 3 times, then disappears
- Font: JetBrains Mono (this specific element only — reinforces the "terminal/technical" feel)

**Scanning Line (Section transitions)**
- On scroll into a new section, a thin horizontal line (1px, opacity 0.15) sweeps top→bottom
- Duration: 600ms, ease-out
- Happens once per section, triggered by IntersectionObserver

**Signal Pulse (Service cards hover)**
- On hover, a subtle "pulse" ring expands from the card's top-left corner number (01, 02, etc.)
- Ring: circle, starts at 0px radius, expands to 40px, opacity 0.3→0
- Duration: 600ms, ease-out
- One pulse on hover-enter

### Updated Ticker Content
Old: "SOFTWARE AGENCY · PRODUCT STUDIO · VENDOFLOW · NAIROBI · GLOBAL"
New: "AI AGENTS · WORKFLOW AUTOMATION · LLM INTEGRATION · AI STRATEGY · CUSTOM AI SYSTEMS · GLOBAL · "

---

## Page Structure (New)

```
<Nav />
<Hero />           — "Engineer Your World" + AI sub-headline + node network bg
<Services />       — 4 AI services (new content, same grid layout)
<Process />        — NEW: How We Work (3-4 steps)
<Proof />          — NEW: Replaces Products (credibility without case studies)
<About />          — Condensed: who Hisako is, the dual builder identity
<Contact />        — Same
<Footer />         — Same, updated copy
```

---

## Copy Updates

### Nav
- Links: "Services", "Process", "Work", "About", "Contact"
- CTA: "Start a Project"

### Hero
- Overline: [ HISAKO — AI AGENCY ]
- Headline: ENGINEER YOUR WORLD
- Sub-headline (typewriter, JetBrains Mono): "We design and deploy custom AI systems for businesses that want to operate at a different level."
- Stats row: "4" services | "Global" reach | "AI-native" approach
  Actually use: left stat "AI Agents" label + "Built to work." | right stat "End-to-end" label + "Strategy to deployment."
- CTAs: "Start a Project →" | "See How We Work"
- Ticker: updated to AI services list

### Services Section
Label: [ 01  WHAT WE BUILD ]
Headline: "AI Systems. Built for Scale."

4 services:

1. Custom AI Agents
   "Autonomous systems that do real work. We design and deploy AI agents that handle complex, repeatable tasks — research, outreach, operations, data — without human intervention."

2. AI Workflow Automation
   "We map your most expensive manual processes and replace them with intelligent, automated pipelines. Less overhead. Faster execution. Compounding returns."

3. LLM Integration
   "GPT-4o, Claude, Gemini, open-source — we integrate large language models into your existing software stack, giving your product AI capabilities without rebuilding from scratch."

4. AI Strategy Consulting
   "Before you build, you need a plan. We help you identify where AI creates real leverage in your business, choose the right architecture, and avoid the expensive mistakes."

Bottom panel quote: "We don't add AI as a feature. We build systems where AI is the foundation."

### Process Section (NEW)
Label: [ 02  HOW WE WORK ]
Headline: "From Brief to Deployed."

4 steps:
1. DISCOVER — "We audit your operations and identify where AI creates real leverage. No fluff, just honest analysis."
2. ARCHITECT — "We design the system: models, data flows, integrations, infrastructure. The blueprint before a line of code."
3. BUILD — "We build, test, and iterate fast. Working systems in weeks, not quarters."
4. DEPLOY & EVOLVE — "We ship. Then we stay. AI systems improve with use — we monitor, retrain, and evolve them with your business."

### Proof Section (NEW — replaces Products)
Label: [ 03  PROOF OF WORK ]
Headline: "We Build. We Ship. We Own It."

Framing: No case studies yet — use a credibility framing instead:
- Left: statement about Hisako being builders who dogfood their own work
  "We don't just consult — we build and operate our own AI-powered products. VendoFlow, our retail operating system, is built on the same AI architecture we deploy for clients."
- Right: 3 capability proof points (not case studies, just demonstrated capability):
  Point 1: "AI Agent Systems" — "Conversational intake agents, triage systems, and autonomous workflow agents built and shipped."
  Point 2: "LLM-Powered Products" — "Multi-tenant SaaS platforms with embedded AI features across analytics, automation, and intelligence layers."
  Point 3: "End-to-End Delivery" — "From zero to deployed. We own the full stack: architecture, engineering, design, and AI layer."
- Model logos strip: Claude · GPT-4o · Gemini · Open Source — shown as text badges in JetBrains Mono, not actual logos (avoids trademark issues)

### About Section (Condensed)
Label: [ 04  ABOUT ]
Headline: "We are builders."
Body: Keep condensed — 2 short paragraphs max. Reference the dual identity (agency + studio) in one line only.

### Contact
Headline: "Let's build something serious."
Keep as-is.

---

## What Does NOT Change
- Color palette (#0A0A0A, #F5F5F0, #2A2A2A borders)
- Font stack (Bebas Neue / DM Sans / JetBrains Mono)
- Nav structure and behavior
- Footer structure
- Swiss grid discipline (80px horizontal margins)
- Card style (no radius, 1px borders)
- Button style (no radius, invert on hover)
- Scroll-to-top asterisk button