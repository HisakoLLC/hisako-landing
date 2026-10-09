import Link from "next/link"
import { FolderGit2, Repeat, Users, Handshake, ArrowRight } from "lucide-react"
import { SectionLabel } from "@/components/ui/section-label"

const engagementModels = [
  {
    model: "PROJECT",
    title: "Project-Based",
    tagline: "Defined Scope & Delivery",
    description:
      "For organizations with a defined technology requirement, specific deliverables, and structured milestones.",
    process: ["Design", "Build", "Deploy"],
    icon: FolderGit2,
  },
  {
    model: "RETAINER",
    title: "Ongoing Retainer",
    tagline: "Continuous Operations",
    description:
      "For organizations that need an ongoing technology partner for continuous system improvements, optimization, and reliability.",
    process: ["Support", "Maintenance", "Improvements"],
    icon: Repeat,
  },
  {
    model: "DEDICATED TEAM",
    title: "Dedicated Team",
    tagline: "Capacity & Augmentation",
    description:
      "For organizations that need additional technical bandwidth, specialized engineering talent, or dedicated sprint teams.",
    process: ["Engineering", "AI & Data", "Systems"],
    icon: Users,
  },
  {
    model: "PARTNERSHIP",
    title: "Strategic Partnership",
    tagline: "Long-Term Transformation",
    description:
      "For organizations developing a new technology platform, entering regulated markets, or undertaking holistic modernization.",
    process: ["Strategy", "Product", "Tech", "Scale"],
    icon: Handshake,
  },
]

export function WorkWithUs() {
  return (
    <section id="engagement" className="scroll-mt-16 py-14 sm:py-20 md:py-28 bg-card/20 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-10 sm:space-y-14">
        {/* Header */}
        <div className="max-w-3xl space-y-3 sm:space-y-4">
          <SectionLabel index="05" variant="subtle">
            WORK WITH HISAKO
          </SectionLabel>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-[44px] font-bold tracking-tight text-foreground leading-tight">
            Technology support at every stage.
          </h2>
          <p className="font-sans text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
            Flexible commercial models tailored to how your organization operates — from scoped builds to embedded teams and long-term modernization retainers.
          </p>
        </div>

        {/* Commercial Engagement Ledger — Architectural Row Layout (Non-Card) */}
        <div className="border-y border-border divide-y divide-border/80">
          {engagementModels.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={item.model}
                className="group py-7 sm:py-9 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start lg:items-center hover:bg-card/40 transition-colors px-2 sm:px-4 -mx-2 sm:-mx-4 rounded-md"
              >
                {/* Col 1: Model Index, Icon & Title (lg:col-span-4) */}
                <div className="lg:col-span-4 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-md bg-accent/60 text-primary flex items-center justify-center shrink-0 border border-border/60 transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <div className="space-y-0.5">
                    <span className="font-mono text-[11px] font-semibold text-primary uppercase tracking-wider block">
                      0{idx + 1} // {item.model}
                    </span>
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <span className="font-mono text-[11px] text-muted-foreground block">
                      {item.tagline}
                    </span>
                  </div>
                </div>

                {/* Col 2: Context Description (lg:col-span-4) */}
                <div className="lg:col-span-4">
                  <p className="font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Col 3: Workflow Pipeline Steps (lg:col-span-2) */}
                <div className="lg:col-span-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground/70 block mb-1.5">
                    Workflow Path
                  </span>
                  <div className="inline-flex items-center gap-1.5 flex-wrap font-mono text-[11px] text-foreground">
                    {item.process.map((step, sIdx) => (
                      <span key={step} className="inline-flex items-center gap-1.5">
                        <span className="px-2 py-0.5 rounded bg-card border border-border/80 text-foreground font-medium">
                          {step}
                        </span>
                        {sIdx < item.process.length - 1 && (
                          <span className="text-primary font-bold text-xs">&rarr;</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Col 4: Action CTA (lg:col-span-2) */}
                <div className="lg:col-span-2 lg:text-right pt-2 lg:pt-0">
                  <Link
                    href={`/contact?model=${encodeURIComponent(item.title)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:text-royal-blue-hover transition-colors py-1.5 min-h-[36px]"
                  >
                    <span>Discuss model</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
