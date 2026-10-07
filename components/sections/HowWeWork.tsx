import { SectionLabel } from "@/components/ui/section-label"
import { Reveal } from "@/components/ui/reveal"

const stages = [
  {
    number: "01",
    title: "DISCOVER",
    description: "We understand your organization, processes and the problem that needs solving.",
  },
  {
    number: "02",
    title: "DESIGN",
    description: "We define the right architecture, workflows and technical approach.",
  },
  {
    number: "03",
    title: "BUILD",
    description: "We develop and integrate the solution using modern engineering practices.",
  },
  {
    number: "04",
    title: "DEPLOY",
    description: "We launch, test and help your team adopt the technology.",
  },
  {
    number: "05",
    title: "IMPROVE",
    description: "We provide ongoing support, maintenance and improvements as your organization evolves.",
  },
]

export function HowWeWork() {
  return (
    <section className="py-14 sm:py-20 md:py-28 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-12 sm:space-y-16">
        {/* Header */}
        <Reveal>
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <SectionLabel index="02" variant="subtle">
              HOW WE WORK
            </SectionLabel>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-[44px] font-bold tracking-tight text-foreground leading-tight">
              A structured approach. Real results.
            </h2>
            <p className="font-sans text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              We start with the problem, design the right solution, build it properly and remain involved after deployment.
            </p>
          </div>
        </Reveal>

        {/* Process Flow: Clean Horizontal on Desktop, Authentic Vertical Timeline on Mobile */}
        <div>
          {/* DESKTOP LAYOUT (lg:) */}
          <div className="hidden lg:block relative">
            {/* Subtle engineered horizontal process line */}
            <div className="absolute top-5 left-10 right-10 h-px bg-border/60 overflow-hidden z-0">
              <div className="h-full w-full bg-gradient-to-r from-navy via-primary to-border origin-left animate-line-h" />
            </div>

            <div className="grid grid-cols-5 gap-6 relative z-10">
              {stages.map((stage, idx) => (
                <Reveal key={stage.number} delayMs={idx * 80}>
                  <div className="flex flex-col space-y-4 group">
                    {/* Step node indicator with subtle hover feedback */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-sm bg-navy text-white flex items-center justify-center font-mono font-bold text-xs border border-navy-border shadow-2xs shrink-0 z-10 group-hover:border-primary transition-colors">
                        {stage.number}
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-1">
                      <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary block group-hover:text-primary transition-colors">
                        {stage.title}
                      </span>
                      <p className="text-sm font-sans text-muted-foreground leading-relaxed">
                        {stage.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* MOBILE & TABLET LAYOUT (< lg): Authentic Vertical Process Timeline */}
          <div className="lg:hidden relative pl-4 sm:pl-6 space-y-8">
            {/* Subtle engineered vertical connecting line */}
            <div className="absolute left-[33px] sm:left-[41px] top-4 bottom-8 w-px bg-border/60 overflow-hidden z-0">
              <div className="w-full h-full bg-gradient-to-b from-navy via-primary to-border origin-top animate-line-v" />
            </div>

            {stages.map((stage, idx) => (
              <Reveal key={stage.number} delayMs={idx * 50}>
                <div className="relative flex items-start gap-4 sm:gap-6 z-10 group">
                  {/* Step node indicator */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-sm bg-navy text-white flex items-center justify-center font-mono font-bold text-xs border border-navy-border shadow-2xs shrink-0 group-hover:border-primary transition-colors">
                    {stage.number}
                  </div>

                  {/* Step description */}
                  <div className="p-4 sm:p-5 rounded-md border border-border bg-card/50 hover:bg-card/80 hover:border-border/80 transition-all flex-grow space-y-1.5 shadow-2xs">
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary block">
                      {stage.title}
                    </span>
                    <p className="text-xs sm:text-sm font-sans text-muted-foreground leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
