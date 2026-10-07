import Link from "next/link"
import { FolderGit2, Repeat, Users, Handshake, ArrowRight } from "lucide-react"
import { SectionLabel } from "@/components/ui/section-label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { IconBox } from "@/components/ui/icon-box"

const engagementModels = [
  {
    model: "PROJECT",
    title: "Project-Based",
    tagline: "Defined Scope & Delivery",
    description: "For organizations with a defined technology requirement.",
    process: "Design → Build → Deploy",
    icon: FolderGit2,
  },
  {
    model: "RETAINER",
    title: "Ongoing Retainer",
    tagline: "Continuous Operations",
    description: "For organizations that need an ongoing technology partner.",
    process: "Support → Maintenance → Improvements",
    icon: Repeat,
  },
  {
    model: "DEDICATED TEAM",
    title: "Dedicated Team",
    tagline: "Capacity & Augmentation",
    description: "For organizations that need additional technical capacity.",
    process: "Engineering → AI → Data → Technology",
    icon: Users,
  },
  {
    model: "PARTNERSHIP",
    title: "Strategic Partnership",
    tagline: "Long-Term Transformation",
    description: "For organizations developing a new technology product or undertaking a larger transformation.",
    process: "Strategy → Product → Technology → Scale",
    icon: Handshake,
  },
]

export function WorkWithUs() {
  return (
    <section id="engagement" className="scroll-mt-16 py-14 sm:py-20 md:py-28 bg-card/40 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-12 sm:space-y-16">
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

        {/* 4 Commercial Models Grid (Responsive: 1 col mobile, 2 col tablet, 4 col desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {engagementModels.map((item) => {
            const Icon = item.icon
            return (
              <Card
                key={item.model}
                variant="default"
                className="flex flex-col justify-between p-5 sm:p-7 bg-background hover:border-primary/40 transition-all shadow-2xs"
              >
                <div className="space-y-5 sm:space-y-6">
                  {/* Top Bar: Icon & Model Badge */}
                  <div className="flex items-center justify-between">
                    <IconBox variant="navy" size="md">
                      <Icon className="w-5 h-5 text-white" strokeWidth={1.75} />
                    </IconBox>
                    <span className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-primary">
                      {item.model}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <CardHeader className="p-0 space-y-1.5 sm:space-y-2">
                    <div>
                      <CardTitle className="text-lg sm:text-xl font-heading text-foreground">
                        {item.title}
                      </CardTitle>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70 block mt-0.5">
                        {item.tagline}
                      </span>
                    </div>
                    <CardDescription className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-1">
                      {item.description}
                    </CardDescription>
                  </CardHeader>

                  {/* Process Pathway */}
                  <CardContent className="p-0">
                    <div className="p-2.5 sm:p-3 rounded-md bg-accent/40 border border-border/80">
                      <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-muted-foreground/70 block mb-1">
                        Workflow Focus
                      </span>
                      <p className="font-mono text-[11px] sm:text-xs font-medium text-foreground leading-snug">
                        {item.process}
                      </p>
                    </div>
                  </CardContent>
                </div>

                {/* Direct CTA */}
                <CardFooter className="p-0 pt-5 sm:pt-6 mt-4 sm:mt-6 border-t border-border/60">
                  <Link
                    href="/contact"
                    className="text-xs font-semibold text-primary inline-flex items-center gap-1.5 hover:underline min-h-[36px]"
                  >
                    <span>Discuss your project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
