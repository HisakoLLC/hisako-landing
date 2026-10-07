import { Briefcase, Wrench, Sparkles, TrendingUp } from "lucide-react"
import { SectionLabel } from "@/components/ui/section-label"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { IconBox } from "@/components/ui/icon-box"

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

        {/* 4 Core Principles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {principles.map((p) => {
            const Icon = p.icon
            return (
              <Card
                key={p.tag}
                variant="default"
                className="flex flex-col justify-between p-5 sm:p-7 bg-card/40 hover:bg-card hover:border-primary/40 transition-all shadow-2xs"
              >
                <div className="space-y-4 sm:space-y-5">
                  <div className="flex items-center justify-between">
                    <IconBox variant="navy" size="md">
                      <Icon className="w-5 h-5 text-white" strokeWidth={1.75} />
                    </IconBox>
                    <span className="font-mono text-xs text-muted-foreground/70">
                      P.{p.index}
                    </span>
                  </div>

                  <CardHeader className="p-0 space-y-1.5 sm:space-y-2">
                    <div>
                      <span className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-primary block mb-1">
                        {p.tag}
                      </span>
                      <CardTitle className="text-lg sm:text-xl font-heading text-foreground">
                        {p.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-1">
                      {p.description}
                    </CardDescription>
                  </CardHeader>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Prominent Architectural Statement (Responsive typography & padding) */}
        <div className="relative rounded-lg border border-navy-border bg-navy text-white p-6 sm:p-10 md:p-12 shadow-sm overflow-hidden">
          {/* Subtle architectural tech grid backdrop */}
          <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-2 sm:space-y-3">
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
        </div>
      </div>
    </section>
  )
}
