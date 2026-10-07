import Link from "next/link"
import { Code2, Cpu, RefreshCw, Cloud } from "lucide-react"
import { SectionLabel } from "@/components/ui/section-label"
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { IconBox } from "@/components/ui/icon-box"

const capabilityCards = [
  {
    index: "01",
    title: "Software Solutions",
    description:
      "Custom software, web platforms, mobile applications and business systems tailored to how your organization works.",
    icon: Code2,
    href: "/capabilities",
    video: "/videos/capability-1.mp4",
  },
  {
    index: "02",
    title: "AI & Automation",
    description:
      "AI agents, workflow automation, document processing and intelligent systems that reduce repetitive work.",
    icon: Cpu,
    href: "/capabilities",
    video: "/videos/capability-2.mp4",
  },
  {
    index: "03",
    title: "Digital Transformation",
    description:
      "Modernize outdated processes, digitize operations and introduce technology where it creates measurable value.",
    icon: RefreshCw,
    href: "/capabilities",
    video: "/videos/capability-3.mp4",
  },
  {
    index: "04",
    title: "Technology Infrastructure",
    description:
      "Cloud, servers, databases, integrations and technical infrastructure built for reliability and growth.",
    icon: Cloud,
    href: "/capabilities",
    video: "/videos/capability-4.mp4",
  },
]

export function Capabilities() {
  return (
    <section id="capabilities" className="scroll-mt-16 py-14 sm:py-20 md:py-28 bg-card/40 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 sm:space-y-4">
          <SectionLabel index="01" variant="subtle">
            WHAT WE DO
          </SectionLabel>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-[44px] font-bold tracking-tight text-foreground leading-tight">
            Technology built around your business.
          </h2>
          <p className="font-sans text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
            We combine software engineering, AI, automation and infrastructure to help organizations build, modernize and operate better.
          </p>
        </div>

        {/* 4 Equal Capability Cards (Responsive Grid: 1 col mobile, 2 col tablet, 4 col desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {capabilityCards.map((card) => {
            const Icon = card.icon
            return (
              <Card
                key={card.title}
                variant="default"
                className="group flex flex-col justify-between p-4 sm:p-5 hover:border-primary/40 hover:shadow-2xs transition-all overflow-hidden"
              >
                <div className="space-y-4 sm:space-y-5">
                  {/* Top: Looping Background Video */}
                  <div className="relative aspect-video w-full overflow-hidden rounded-md border border-border/80 bg-navy/20">
                    <video
                      src={card.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Icon & System Index */}
                  <div className="flex items-center justify-between">
                    <IconBox variant="navy" size="md">
                      <Icon className="w-5 h-5 text-white" strokeWidth={1.75} />
                    </IconBox>
                    <span className="font-mono text-xs text-muted-foreground/70">
                      SYS.{card.index}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <CardHeader className="p-0 space-y-2">
                    <CardTitle className="text-lg sm:text-xl font-heading text-foreground">
                      {card.title}
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {card.description}
                    </CardDescription>
                  </CardHeader>
                </div>

                {/* Bottom CTA */}
                <CardFooter className="relative z-10 p-0 pt-4 sm:pt-5 mt-4 sm:mt-5 border-t border-border/60">
                  <Link
                    href={card.href}
                    className="text-xs font-semibold text-primary inline-flex items-center gap-1.5 py-1 hover:underline min-h-[36px]"
                  >
                    <span>Learn more</span>
                    <span>&rarr;</span>
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
