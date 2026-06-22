DESIGN SYSTEM — hisako.eu

Philosophy: Clean, restrained, confident. Closer to Linear or Vercel than a 
corporate brochure. No gradients except the scoped icon-container treatment. 
No dark mode. No decorative elements that don't serve a purpose.

One-line test: "Would this look at home next to Vercel's homepage?" If yes, proceed.

Colors:
- Page background: zinc-50 (#FAFAFA)
- Card/panel background: white (#FFFFFF)
- Primary text: zinc-900 (#18181B)
- Secondary/muted text: zinc-500 (#71717A)
- Borders: zinc-200 (#E4E4E7)
- Brand accent (the ONLY accent): #00311F
- Accent hover: #00311F/90 or #002918 (solid)

Typography:
- Font: Inter only
- H1: Bold 700, text-[40px] leading-[1.05] — marketing headlines
- H2: Semibold 600, text-2xl to text-3xl — section titles
- H3: Semibold 600, text-lg — card/item titles
- Body: Regular 400, text-sm to text-base
- Eyebrow labels: Semibold 600, text-[11px], uppercase, tracking-[0.1em] — ONLY context for all-caps
- Buttons: Medium 500, sentence case, NOT all-caps

Radius: 0.625rem globally (10px). Large cards/modals: ~14px.

Cards: bg-white rounded-xl border border-zinc-200 p-5 — no shadows.

Icon containers:
<div className="w-9 h-9 rounded-lg bg-gradient-to-b from-[#00311F]/15 to-[#00311F]/5 
border border-[#00311F]/20 flex items-center justify-center">
  <Icon className="w-4 h-4 text-[#00311F]" strokeWidth={1.75} />
</div>

Primary button: bg-[#00311F] hover:bg-[#002918] text-white text-sm font-medium 
px-4 py-2 rounded-lg transition-colors

Logo: White asterisk (*) mark on black square, paired with wordmark "Hisako" in 
Inter Bold. On light backgrounds, invert to black square or use mark alone.

Do NOT:
- Use all-caps for headlines or body
- Use any color except #00311F as an accent
- Add drop shadows to cards
- Add gradients except the icon-container treatment
- Use any font except Inter
- Fabricate stats or traction numbers — omit sections if real numbers don't exist
