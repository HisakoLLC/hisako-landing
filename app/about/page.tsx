import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  Code2,
  Cpu,
  Layers,
  Cloud,
  CheckCircle2,
  ArrowRight,
  Building,
  Target,
  Wrench,
  Sparkles,
  Workflow,
  ShieldCheck,
  Terminal,
} from "lucide-react"
import { SectionLabel } from "@/components/ui/section-label"

export const metadata: Metadata = {
  title: "About — Technology, Built With Purpose",
  description:
    "Hisako is a technology company focused on building practical software, AI, automation, digital transformation, and digital infrastructure for organizations.",
  alternates: {
    canonical: "https://hisako.eu/about",
  },
  openGraph: {
    title: "About Hisako — Technology, Built With Purpose",
    description:
      "Hisako is a technology company focused on building practical software, AI, automation, digital transformation, and digital infrastructure for organizations.",
    url: "https://hisako.eu/about",
    siteName: "Hisako",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Hisako — Technology, Built With Purpose",
    description:
      "Hisako is a technology company focused on building practical software, AI, automation, digital transformation, and digital infrastructure for organizations.",
  },
}

const pillars = [
  {
    num: "01",
    tag: "INSTITUTIONAL PARTNER",
    title: "Direct Leadership & Engineering Alignment",
    description:
      "We work directly with founders, executive directors, and technical leads across mid-market enterprises, NGOs, and high-growth companies — bridging the gap between high-level business strategy and low-level code execution.",
    icon: Building,
  },
  {
    num: "02",
    tag: "OUTCOME-DRIVEN",
    title: "Measured by Real Operational Impact",
    description:
      "We measure our success not by lines of code written, but by the manual friction eliminated, administrative hours automated, and the enduring resilience of the systems we deliver into production.",
    icon: Target,
  },
  {
    num: "03",
    tag: "PRODUCTION CRAFTSMANSHIP",
    title: "Architects Who Ship Production Code",
    description:
      "We avoid theoretical slide-deck consulting. Our senior engineers design database schemas, configure cloud infrastructure, write resilient automated pipelines, and stand behind uptime commitments.",
    icon: Wrench,
  },
]

const beliefs = [
  {
    num: "01",
    title: "Problem Before Technology",
    description:
      "We never begin with an architectural bias or chase trending buzzwords. We diagnose the organizational bottleneck first, then engineer the simplest, most durable technical solution.",
  },
  {
    num: "02",
    title: "Engineering Over Hype",
    description:
      "We value test coverage, reliable deployments, clear documentation, strict access controls, and long-term maintainability over ephemeral technology trends.",
  },
  {
    num: "03",
    title: "Pragmatic AI Integration",
    description:
      "We deploy artificial intelligence strictly where it reduces operational latency, automates unstructured data pipelines, and creates measurable enterprise value.",
  },
  {
    num: "04",
    title: "Built for Evolution",
    description:
      "We architect modular, decoupled software architectures that organizations can adapt, scale, and maintain independently as requirements evolve over years.",
  },
]

const buildDomains = [
  {
    num: "01",
    title: "Custom Enterprise Software",
    subtitle: "Web Platforms & Mission-Critical Portals",
    description:
      "High-performance web platforms, mobile tools, and internal operational systems built to mirror your exact workflow requirements.",
    icon: Code2,
    badge: "Core Engineering",
  },
  {
    num: "02",
    title: "Intelligent Automation & AI",
    subtitle: "Autonomous Agents & Structured Extraction",
    description:
      "Autonomous workflow pipelines, intelligent document parsers, and custom conversational agents that eliminate manual administrative drag.",
    icon: Cpu,
    badge: "AI Systems",
  },
  {
    num: "03",
    title: "Systems Integration",
    subtitle: "Enterprise Connectors & Event Queues",
    description:
      "Resilient connective tissue between disparate ERPs, CRMs, legacy databases, and third-party APIs for synchronized real-time data flow.",
    icon: Layers,
    badge: "Interoperability",
  },
  {
    num: "04",
    title: "Cloud & Digital Infrastructure",
    subtitle: "High-Availability DevOps & Security",
    description:
      "Modern server architectures, automated CI/CD pipelines, containerized clusters, and continuous telemetry monitoring.",
    icon: Cloud,
    badge: "Infrastructure",
  },
]

const workflowStages = [
  {
    step: "01",
    title: "Discovery & Audit",
    phase: "Architecture Inception",
    description:
      "Comprehensive review of existing workflows, codebases, data bottlenecks, and stakeholder goals to define precise operational benchmarks.",
  },
  {
    step: "02",
    title: "System Architecture",
    phase: "Technical Blueprint",
    description:
      "Production-ready system topologies, database schemas, security models, API contracts, and sprint milestone roadmaps.",
  },
  {
    step: "03",
    title: "Iterative Build",
    phase: "Rapid Sprint Delivery",
    description:
      "Test-driven sprint cycles with weekly stakeholder demonstrations, continuous integration staging access, and rapid feedback loops.",
  },
  {
    step: "04",
    title: "Deployment & Support",
    phase: "Production Handover",
    description:
      "Zero-downtime release rollout, automated telemetry alerting, team operational training, and SLA-backed maintenance retainers.",
  },
]

const capabilityGroups = [
  {
    category: "Software Engineering",
    icon: Terminal,
    items: [
      "Full-Stack Web & Cloud Platforms",
      "Native & Cross-Platform Mobile",
      "REST & GraphQL Microservices",
      "Relational & Distributed Databases",
    ],
  },
  {
    category: "AI & Automation",
    icon: Sparkles,
    items: [
      "Custom Workflow Automation",
      "Autonomous Task Agents",
      "Document & Receipt Processing",
      "Enterprise LLM Integration",
    ],
  },
  {
    category: "Systems Integration",
    icon: Workflow,
    items: [
      "Legacy Core Modernization",
      "ERP / CRM Data Connectors",
      "Event-Driven Streaming Queues",
      "API Middleware & Gateways",
    ],
  },
  {
    category: "Infrastructure & Security",
    icon: ShieldCheck,
    items: [
      "Multi-Cloud (AWS / GCP / Azure)",
      "CI/CD Pipeline Automation",
      "Audit Logging & Access Governance",
      "System Monitoring & SLA Support",
    ],
  },
]

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen selection:bg-primary/20">
      {/* =========================================================================
          HERO SECTION — Editorial Typography & Nairobi Anchor
          ========================================================================= */}
      <section className="relative pt-12 sm:pt-16 md:pt-24 pb-14 sm:pb-20 md:pb-28 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-10 sm:space-y-14">
          <div className="max-w-4xl space-y-5 sm:space-y-7">
            <SectionLabel index="01" variant="default">
              ABOUT HISAKO
            </SectionLabel>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold tracking-tight text-foreground leading-[1.08]">
              Technology, built with purpose.
            </h1>

            <div className="space-y-4 text-base sm:text-lg md:text-xl font-sans text-muted-foreground leading-relaxed max-w-3xl">
              <p>
                Hisako is a technology company focused on building practical software, AI, and digital infrastructure for organizations.
              </p>
              <p>
                We combine software engineering, artificial intelligence, automation, and systems thinking to solve complex operational problems.
              </p>
              <p className="text-foreground font-semibold flex items-center gap-2 pt-1 text-base sm:text-lg">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Founded in Kenya, Hisako works with organizations looking to build, modernize, and scale their technology.
              </p>
            </div>
          </div>

          {/* Nairobi Engineering Operations Banner */}
          <div className="relative overflow-hidden rounded-2xl aspect-[16/9] sm:aspect-[21/9] bg-navy-deep shadow-lg">
            <Image
              src="/images/about-urban-tech.png"
              alt="Urban technology infrastructure representing Hisako engineering operations in Nairobi"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover object-center transition-transform duration-700 ease-out hover:scale-102"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/30 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10 flex items-center gap-3">
              <span className="px-3 py-1.5 rounded-full bg-background/90 dark:bg-card/90 backdrop-blur-md text-[11px] font-mono tracking-wider text-foreground font-semibold shadow-xs">
                HISAKO // ENGINEERING &bull; NAIROBI
              </span>
              <span className="hidden sm:inline-block px-3 py-1.5 rounded-full bg-primary/20 backdrop-blur-md text-[11px] font-mono tracking-wider text-white font-medium">
                EST. 2026
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          1. WHO WE ARE — Fluid Narrative Flow (Cardless Editorial Format)
          ========================================================================= */}
      <section className="py-16 sm:py-24 md:py-28 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-12 sm:space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-24">
              <SectionLabel index="02" variant="subtle">
                WHO WE ARE
              </SectionLabel>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.12]">
                An engineering-led technology company.
              </h2>
              <p className="font-sans text-base sm:text-lg text-muted-foreground leading-relaxed pt-2">
                We replace bureaucratic project management layers with direct engineering craftsmanship. Our leadership team consists of active system architects who prioritize durability and measurable organizational velocity.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-10 sm:space-y-12">
              {pillars.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="group relative pl-6 sm:pl-8 border-l-2 border-primary/25 hover:border-primary transition-colors space-y-2.5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-primary tracking-widest">
                        {item.tag}
                      </span>
                      <span className="text-muted-foreground/40 font-mono text-xs">&bull;</span>
                      <span className="font-mono text-xs text-muted-foreground">{item.num}</span>
                    </div>

                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>

                    <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. WHAT WE BELIEVE — Typographic Minimalist Statements
          ========================================================================= */}
      <section className="py-16 sm:py-24 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-14 sm:space-y-20">
          <div className="max-w-3xl space-y-4">
            <SectionLabel index="03" variant="subtle">
              WHAT WE BELIEVE
            </SectionLabel>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.12]">
              Principles that govern how we build.
            </h2>
            <p className="font-sans text-base sm:text-lg text-muted-foreground leading-relaxed">
              Software decisions made early compound over years. These non-negotiable principles guide our architecture, technology choices, and client relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 sm:gap-y-16">
            {beliefs.map((b) => (
              <div key={b.title} className="group space-y-3">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-3xl sm:text-4xl font-light text-primary/40 group-hover:text-primary transition-colors shrink-0">
                    {b.num}
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {b.title}
                  </h3>
                </div>
                <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed pl-12 sm:pl-14">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. WHAT WE BUILD — Open Architectural Grid
          ========================================================================= */}
      <section className="py-16 sm:py-24 md:py-28 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-14 sm:space-y-16">
          <div className="max-w-3xl space-y-4">
            <SectionLabel index="04" variant="subtle">
              WHAT WE BUILD
            </SectionLabel>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.12]">
              Software and systems engineered for durability.
            </h2>
            <p className="font-sans text-base sm:text-lg text-muted-foreground leading-relaxed">
              From greenfield enterprise web applications to autonomous document pipelines and cloud deployments, we build solutions across four core domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {buildDomains.map((domain) => {
              const Icon = domain.icon
              return (
                <div
                  key={domain.title}
                  className="group relative p-6 sm:p-8 rounded-2xl bg-background/80 hover:bg-background transition-all hover:shadow-md space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary font-mono text-[11px] font-semibold tracking-wider uppercase">
                      {domain.badge}
                    </span>
                    <span className="font-mono text-xs font-semibold text-muted-foreground/50">
                      {domain.num}
                    </span>
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {domain.title}
                    </h3>
                    <p className="font-mono text-xs text-primary font-medium">
                      {domain.subtitle}
                    </p>
                  </div>

                  <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {domain.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. HOW WE WORK — Sequential Execution Pipeline
          ========================================================================= */}
      <section className="py-16 sm:py-24 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-14 sm:space-y-20">
          <div className="max-w-3xl space-y-4">
            <SectionLabel index="05" variant="subtle">
              HOW WE WORK
            </SectionLabel>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.12]">
              A transparent, engineering-led execution cycle.
            </h2>
            <p className="font-sans text-base sm:text-lg text-muted-foreground leading-relaxed">
              Every engagement follows a structured delivery rhythm designed to eliminate ambiguity, demonstrate working progress weekly, and protect system reliability.
            </p>
          </div>

          {/* Stepper Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 relative">
            {workflowStages.map((stage, idx) => (
              <div key={stage.title} className="group space-y-4 relative">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center font-mono text-xs font-bold group-hover:bg-primary group-hover:text-white transition-colors">
                    {stage.step}
                  </div>
                  <span className="font-mono text-[11px] text-muted-foreground tracking-wider uppercase">
                    {stage.phase}
                  </span>
                </div>

                <div className="space-y-2 pl-1">
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {stage.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. TECHNICAL CAPABILITIES — Clean Categorized Clusters
          ========================================================================= */}
      <section className="py-16 sm:py-24 md:py-28 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-14 sm:space-y-16">
          <div className="max-w-3xl space-y-4">
            <SectionLabel index="06" variant="subtle">
              OUR CAPABILITIES
            </SectionLabel>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.12]">
              Technical breadth across the stack.
            </h2>
            <p className="font-sans text-base sm:text-lg text-muted-foreground leading-relaxed">
              We combine enterprise engineering foundations with modern automation paradigms to support complex organizational workloads.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {capabilityGroups.map((group) => {
              const Icon = group.icon
              return (
                <div key={group.category} className="space-y-5">
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4 text-primary" strokeWidth={2} />
                    <h3 className="font-mono text-xs sm:text-sm uppercase tracking-wider font-bold text-foreground">
                      {group.category}
                    </h3>
                  </div>

                  <ul className="space-y-3 font-mono text-xs text-muted-foreground">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 group">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span className="leading-relaxed group-hover:text-foreground transition-colors">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. CONTACT CTA — High-Impact Navy Finale
          ========================================================================= */}
      <section className="py-20 sm:py-28 md:py-32 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center space-y-8">
          <div className="inline-flex justify-center">
            <SectionLabel variant="navy" index="07">
              LET&rsquo;S BUILD
            </SectionLabel>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Ready to move your organization forward?
            </h2>
            <p className="font-sans text-base sm:text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
              Connect with our engineering leadership to discuss upcoming software builds, system modernization, or technical retainers.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center min-h-[48px] px-7 py-3 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-royal-blue-hover transition-colors shadow-md gap-2"
            >
              <span>Start a project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="mailto:hello@hisako.eu"
              className="inline-flex items-center justify-center min-h-[48px] px-7 py-3 rounded-xl border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-colors"
            >
              hello@hisako.eu
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
