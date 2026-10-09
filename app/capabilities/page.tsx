import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Code2, Cpu, RefreshCw, Cloud, ArrowRight, CheckCircle2, AlertCircle, Clock } from "lucide-react"
import { SectionLabel } from "@/components/ui/section-label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { IconBox } from "@/components/ui/icon-box"
import { ImagePlaceholder } from "@/components/ui/image-placeholder"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Capabilities — Technology for the Problems That Matter",
  description:
    "From software development and AI automation to digital transformation and infrastructure, Hisako helps organizations design, implement and operate technology.",
  alternates: {
    canonical: "https://hisako.eu/capabilities",
  },
  openGraph: {
    title: "Capabilities — Technology for the Problems That Matter | Hisako",
    description:
      "From software development and AI automation to digital transformation and infrastructure, Hisako helps organizations design, implement and operate technology.",
    url: "https://hisako.eu/capabilities",
    siteName: "Hisako",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Capabilities — Technology for the Problems That Matter | Hisako",
    description:
      "From software development and AI automation to digital transformation and infrastructure, Hisako helps organizations design, implement and operate technology.",
  },
}

interface CapabilitySection {
  index: string
  title: string
  explanation: string
  icon: typeof Code2
  services: string[]
  typicalProblems: string[]
  engagementType: string
  ctaText: string
  serviceParam: string
}

const capabilitySections: CapabilitySection[] = [
  {
    index: "01",
    title: "Software Solutions",
    explanation:
      "We design, build and maintain custom software tailored to how your organization works. From bespoke business applications and web platforms to mobile tools and customer portals, we engineer software that replaces operational bottlenecks with dependable systems.",
    icon: Code2,
    services: [
      "Business applications",
      "Web platforms",
      "Mobile applications",
      "Internal systems",
      "Customer portals",
      "APIs and integrations",
    ],
    typicalProblems: [
      "Off-the-shelf software doesn't fit existing organizational workflows",
      "Critical business data trapped in disconnected spreadsheets",
      "Legacy internal tools that are slow, insecure, or difficult to maintain",
      "Need for secure portals for clients, vendors, or partner organizations",
    ],
    engagementType: "Scoped project build or dedicated engineering team",
    ctaText: "Discuss software solutions →",
    serviceParam: "Software Development",
  },
  {
    index: "02",
    title: "AI & Automation",
    explanation:
      "We deploy artificial intelligence and intelligent automation where they eliminate repetitive manual work, streamline administrative processes, and accelerate decision-making without unnecessary technical complexity.",
    icon: Cpu,
    services: [
      "AI agents",
      "Workflow automation",
      "Document processing",
      "AI assistants",
      "Data extraction",
      "Intelligent reporting",
    ],
    typicalProblems: [
      "High volume of repetitive data entry, file sorting, and manual approvals",
      "Unstructured documents and invoices requiring manual review and data entry",
      "Fragmented communication requiring staff to manually reconcile records",
      "Delayed executive reporting due to manual data aggregation across tools",
    ],
    engagementType: "Automation build sprint or ongoing technology retainer",
    ctaText: "Discuss AI & automation →",
    serviceParam: "AI & Automation",
  },
  {
    index: "03",
    title: "Digital Transformation",
    explanation:
      "We help organizations modernize outdated technology, digitize analog operations, and introduce new digital products with clear strategies and zero operational disruption.",
    icon: RefreshCw,
    services: [
      "Process digitization",
      "Technology assessments",
      "System modernization",
      "Digital transformation strategy",
      "Product development",
    ],
    typicalProblems: [
      "Paper-based or manual processes creating operational bottlenecks",
      "Aging legacy software that slows down organizational growth",
      "Uncertainty around which technology to invest in and how to phase rollouts",
      "Organizations developing a new digital product requiring experienced execution",
    ],
    engagementType: "Technology assessment, strategic partnership, or phased modernization build",
    ctaText: "Discuss digital transformation →",
    serviceParam: "Digital Transformation",
  },
  {
    index: "04",
    title: "Technology Infrastructure",
    explanation:
      "We design and operate resilient cloud systems, server architectures, databases, and monitoring foundations built for high availability, institutional compliance, and long-term organizational scale.",
    icon: Cloud,
    services: [
      "Cloud deployment",
      "Server infrastructure",
      "Databases",
      "Backups",
      "Monitoring",
      "System integration",
    ],
    typicalProblems: [
      "Unreliable hosting environments and frequent unplanned downtime",
      "Databases that become sluggish under increasing record volume",
      "Absence of automated backups, disaster recovery, or failover protocols",
      "Lack of centralized system monitoring, error alerting, and security audits",
    ],
    engagementType: "Infrastructure setup, cloud migration, or managed SLA retainer",
    ctaText: "Discuss infrastructure →",
    serviceParam: "Technology Infrastructure",
  },
]

export default function CapabilitiesPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* =========================================================================
          HERO SECTION — Exact Copy & Positioning From Prompt #12
          ========================================================================= */}
      <section className="relative pt-8 sm:pt-12 md:pt-20 pb-12 sm:pb-16 md:pb-24 border-b border-border overflow-hidden bg-background">
        <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-6 sm:space-y-8">
          <div className="max-w-3xl space-y-4 sm:space-y-5">
            <SectionLabel index="01" variant="default">
              CAPABILITIES
            </SectionLabel>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-foreground leading-[1.1] sm:leading-[1.08]">
              Technology for the problems that matter.
            </h1>

            <p className="font-sans text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              From software development and AI automation to digital transformation and infrastructure, Hisako helps organizations design, implement and operate technology.
            </p>
          </div>

          {/* Architectural Blueprint Visual Area */}
          <div className="rounded-lg border border-border bg-card/60 p-2 sm:p-2.5 shadow-2xs overflow-hidden">
            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-md bg-black">
              <Image
                src="/images/letters animation.gif"
                alt="Hisako Engineering & Capabilities motion visualization"
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FOUR LARGE CAPABILITY SECTIONS
          ========================================================================= */}
      <div className="divide-y divide-border">
        {capabilitySections.map((cap) => {
          const Icon = cap.icon
          return (
            <section
              key={cap.title}
              id={cap.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
              className="py-14 sm:py-20 md:py-24 bg-background scroll-mt-16"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-10 sm:space-y-12">
                {/* Section Header */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
                  <div className="lg:col-span-4 space-y-3">
                    <div className="flex items-center gap-3">
                      <IconBox variant="navy" size="md">
                        <Icon className="w-5 h-5 text-white" strokeWidth={1.75} />
                      </IconBox>
                      <span className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">
                        CAPABILITY {cap.index}
                      </span>
                    </div>
                    <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight pt-1">
                      {cap.title}
                    </h2>
                  </div>

                  <div className="lg:col-span-8">
                    <p className="font-sans text-base sm:text-lg text-muted-foreground leading-relaxed">
                      {cap.explanation}
                    </p>
                  </div>
                </div>

                {/* Detailed Breakdown Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 pt-2">
                  {/* Services Included */}
                  <div className="md:col-span-6 lg:col-span-5">
                    <Card variant="default" className="h-full p-6 sm:p-7 bg-card/50 space-y-4">
                      <div className="space-y-1 border-b border-border/80 pb-3">
                        <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-primary font-semibold block">
                          Core Services
                        </span>
                        <h3 className="font-heading text-lg font-bold text-foreground">
                          Services Included
                        </h3>
                      </div>
                      <ul className="space-y-2.5 text-sm font-sans text-muted-foreground pt-1">
                        {cap.services.map((service) => (
                          <li key={service} className="flex items-center gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            <span className="text-foreground/90 font-medium">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </div>

                  {/* Typical Problems We Solve & Engagement Model */}
                  <div className="md:col-span-6 lg:col-span-7 space-y-6">
                    {/* Problems Card */}
                    <Card variant="default" className="p-6 sm:p-7 bg-card/50 space-y-4">
                      <div className="space-y-1 border-b border-border/80 pb-3">
                        <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-primary font-semibold block">
                          Operational Focus
                        </span>
                        <h3 className="font-heading text-lg font-bold text-foreground">
                          Typical Problems We Solve
                        </h3>
                      </div>
                      <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground pt-1">
                        {cap.typicalProblems.map((prob) => (
                          <li key={prob} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60 shrink-0 mt-2" />
                            <span className="leading-relaxed">{prob}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>

                    {/* Engagement Model & Direct CTA */}
                    <div className="p-6 sm:p-7 rounded-md border border-border bg-card/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="space-y-1 max-w-md">
                        <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-muted-foreground block">
                          Engagement Type
                        </span>
                        <p className="font-sans text-sm font-medium text-foreground">
                          {cap.engagementType}
                        </p>
                      </div>

                      <Link href="/contact" className="shrink-0 w-full sm:w-auto">
                        <Button variant="navy" size="default" className="w-full sm:w-auto min-h-[44px] gap-2">
                          <span>{cap.ctaText}</span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
        })}
      </div>

      {/* =========================================================================
          BOTTOM CTA SECTION
          ========================================================================= */}
      <section className="py-14 sm:py-20 md:py-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center space-y-6 sm:space-y-8">
          <div className="inline-flex justify-center">
            <SectionLabel variant="navy" index="ENGAGEMENT">
              START A PROJECT
            </SectionLabel>
          </div>

          <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Have a technology requirement to discuss?
            </h2>
            <p className="font-sans text-sm sm:text-base md:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              Tell us what you&rsquo;re trying to solve. We review your requirements and propose the most direct engineering path forward.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-2">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="default" size="lg" className="w-full sm:w-auto min-h-[44px] gap-2">
                <span>Start the conversation</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <a
              href="mailto:hello@hisako.eu"
              className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 rounded-md border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-colors"
            >
              hello@hisako.eu
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
