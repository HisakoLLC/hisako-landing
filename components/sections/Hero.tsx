import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative pt-8 sm:pt-12 md:pt-20 pb-14 sm:pb-16 md:pb-24 border-b border-border overflow-hidden bg-background">
      {/* Subtle architectural technical grid backdrop */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Core Positioning */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm bg-accent/60 border border-border text-[10px] sm:text-[11px] font-mono font-semibold tracking-[0.12em] sm:tracking-[0.14em] uppercase text-primary select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              <span>TECHNOLOGY COMPANY</span>
            </div>

            {/* Exact Headline (Fluid Typography) */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-foreground leading-[1.1] sm:leading-[1.08]">
              Technology that moves businesses forward.
            </h1>

            {/* Exact Supporting Text */}
            <p className="font-sans text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              We design, build and deploy software, AI and technology solutions for organizations. From business automation and custom software to technology infrastructure and systems integration, we help solve real operational problems with technology.
            </p>

            {/* Call to Actions (Touch-Friendly Responsive Buttons) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded-md bg-navy text-white text-sm font-medium hover:bg-navy-muted border border-navy-border transition-colors shadow-2xs text-center"
              >
                Start a project &rarr;
              </Link>

              <Link
                href="#capabilities"
                className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded-md border border-border bg-background text-foreground text-sm font-medium hover:bg-card hover:border-border/80 transition-colors text-center"
              >
                Explore capabilities &rarr;
              </Link>
            </div>

            {/* Architectural Trust Points (Recomposed for Mobile & Desktop) */}
            <div className="pt-6 sm:pt-8 border-t border-border/80 grid grid-cols-3 gap-3 sm:gap-6">
              <div className="space-y-1">
                <div className="font-heading text-base sm:text-xl font-bold text-foreground leading-tight">
                  Custom Systems
                </div>
                <div className="font-mono text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider leading-tight">
                  Tailored Engineering
                </div>
              </div>
              <div className="space-y-1">
                <div className="font-heading text-base sm:text-xl font-bold text-foreground leading-tight">
                  AI & Workflows
                </div>
                <div className="font-mono text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider leading-tight">
                  Practical Automation
                </div>
              </div>
              <div className="space-y-1">
                <div className="font-heading text-base sm:text-xl font-bold text-foreground leading-tight">
                  Infrastructure
                </div>
                <div className="font-mono text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider leading-tight">
                  Resilient & Modern
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sophisticated Architectural Visual Area */}
          <div className="lg:col-span-5 pt-4 lg:pt-0">
            <div className="relative rounded-lg border border-border bg-card/60 p-2 sm:p-2.5 shadow-2xs group">
              <div className="relative overflow-hidden rounded-md border border-border/80 aspect-[4/3] sm:aspect-[4/3] lg:aspect-[4/5] bg-navy-deep">
                <Image
                  src="/images/hero-skyscrapers.png"
                  alt="Modern skyscrapers with reflections representing Hisako corporate technology and systems infrastructure"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-102"
                />
                {/* Subtle technical gradient overlay to keep it cohesive with deep navy brand */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent pointer-events-none" />

                {/* Blueprint technical badge */}
                <div className="absolute bottom-3 left-3 z-10 px-2.5 py-1 rounded-sm bg-navy/85 backdrop-blur-xs border border-white/10 text-[10px] font-mono text-white/90 shadow-xs">
                  SYS // INFRASTRUCTURE &bull; NAIROBI
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
