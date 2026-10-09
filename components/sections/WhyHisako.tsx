import { Briefcase, Wrench, Sparkles, TrendingUp } from "lucide-react"
import { SectionLabel } from "@/components/ui/section-label"

const principles = [
  {
    index: "01",
    tag: "BUSINESS-FIRST",
    title: "Business-First",
    description: "We focus on the operational problem before choosing the technology.",
    icon: Briefcase,
  },
  {
    index: "02",
    tag: "ENGINEERING-LED",
    title: "Engineering-Led",
    description: "We build reliable systems using modern engineering practices.",
    icon: Wrench,
  },
  {
    index: "03",
    tag: "AI-NATIVE",
    title: "AI-Native",
    description: "We use artificial intelligence where it creates genuine operational value.",
    icon: Sparkles,
  },
  {
    index: "04",
    tag: "BUILT TO EVOLVE",
    title: "Built to Evolve",
    description: "We build technology that can adapt as organizations grow and requirements change.",
    icon: TrendingUp,
  },
]

export function WhyHisako() {
  return (
    <section className="py-14 sm:py-20 md:py-28 bg-background border-b border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-3 sm:space-y-4">
          <SectionLabel index="02" variant="subtle">
            WHY HISAKO
          </SectionLabel>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-[44px] font-bold tracking-tight text-foreground leading-tight">
            Technology should solve problems, not create more of them.
          </h2>
          <p className="font-sans text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
            We take a practical approach to technology. We understand the business problem first, then determine the technology required to solve it.
          </p>
        </div>

        {/* 4 Core Principles — Architectural Non-Card Column Layout */}
        <div className="border-t border-border/80 pt-8 sm:pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {principles.map((p) => {
              const Icon = p.icon
              return (
                <div
                  key={p.tag}
                  className="flex flex-col space-y-3.5 group"
                >
                  {/* Technical Header Line */}
                  <div className="flex items-center justify-between pb-3 border-b border-border/60">
                    <span className="font-mono text-xs font-semibold tracking-wider text-primary">
                      {p.index} // {p.tag}
                    </span>
                    <Icon className="w-4 h-4 text-muted-foreground/60 group-hover:text-primary transition-colors" strokeWidth={1.75} />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Prominent Architectural Statement (Responsive typography & padding) */}
        <div className="relative rounded-lg border border-navy-border bg-navy text-white p-6 sm:p-10 md:p-12 shadow-sm overflow-hidden">
          {/* Subtle architectural tech grid backdrop */}
          <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Statement Content */}
            <div className="lg:col-span-7 space-y-2 sm:space-y-3">
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-primary font-semibold block">
                Pragmatic Engineering
              </span>
              <blockquote className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
                &ldquo;Sometimes the right answer is not to build anything at all.&rdquo;
              </blockquote>
              <p className="font-sans text-xs sm:text-sm md:text-base text-white/70 leading-relaxed pt-1">
                We recommend off-the-shelf tools, workflow adjustments, or system reconfigurations when custom engineering isn&rsquo;t strictly justified. Our reputation is built on delivering what works, not selling unnecessary software.
              </p>
            </div>

            {/* Right: Looping Background Video */}
            <div className="lg:col-span-5 relative w-full aspect-video rounded-md overflow-hidden border border-white/15 bg-navy/60 shadow-2xs">
              <video
                src="/videos/background-6.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
