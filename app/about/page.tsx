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
} from "lucide-react"
import { SectionLabel } from "@/components/ui/section-label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { ImagePlaceholder } from "@/components/ui/image-placeholder"
import { IconBox } from "@/components/ui/icon-box"
import { Button } from "@/components/ui/button"

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

const beliefs = [
  {
    title: "Problem Before Technology",
    description:
      "We never begin with an architectural bias. We diagnose the business bottleneck first, then engineer the simplest, most durable solution.",
  },
  {
    title: "Engineering Over Hype",
    description:
      "We value test coverage, reliable deployments, clear documentation, and maintainability over ephemeral tech trends.",
  },
  {
    title: "Pragmatic AI Integration",
    description:
      "We deploy artificial intelligence strictly where it reduces operational friction and creates measurable organizational value.",
  },
  {
    title: "Built for Evolution",
    description:
      "We design modular, decoupled systems that organizations can adapt, scale, and maintain as requirements evolve over years.",
  },
]

const whatWeBuild = [
  {
    title: "Custom Enterprise Software",
    description:
      "High-performance web platforms, mobile applications, and internal operational systems built to mirror your exact workflow requirements.",
    icon: Code2,
  },
  {
    title: "Intelligent Automation & AI",
    description:
      "Autonomous workflow pipelines, structured data extraction, and intelligent agents that eliminate manual administrative drag.",
    icon: Cpu,
  },
  {
    title: "Systems Integration",
    description:
      "Resilient connective tissue between disparate ERPs, CRMs, legacy databases, and third-party APIs for synchronized data flow.",
    icon: Layers,
  },
  {
    title: "Cloud & Digital Infrastructure",
    description:
      "Modern server architectures, automated deployment pipelines, and high-availability cloud configurations with continuous observability.",
    icon: Cloud,
  },
]

const capabilitiesGrid = [
  {
    category: "Software Engineering",
    items: [
      "Full-Stack Web & Cloud Platforms",
      "Native & Cross-Platform Mobile",
      "REST & GraphQL Microservices",
      "Relational & Distributed Databases",
    ],
  },
  {
    category: "AI & Automation",
    items: [
      "Custom Workflow Automation",
      "Autonomous Task Agents",
      "Document & Receipt Processing",
      "Enterprise LLM Integration",
    ],
  },
  {
    category: "Systems Integration",
    items: [
      "Legacy Core Modernization",
      "ERP / CRM Data Connectors",
      "Event-Driven Streaming Queues",
      "API Middleware & Gateways",
    ],
  },
  {
    category: "Infrastructure & Security",
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
    <div className="bg-background min-h-screen">
      {/* =========================================================================
          HERO SECTION — Exact Copy & Positioning
          ========================================================================= */}
      <section className="relative pt-8 sm:pt-12 md:pt-20 pb-12 sm:pb-16 md:pb-24 border-b border-border overflow-hidden bg-background">
        <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-8 sm:space-y-12">
          <div className="max-w-3xl space-y-4 sm:space-y-6">
            {/* Eyebrow */}
            <SectionLabel index="01" variant="default">
              ABOUT HISAKO
            </SectionLabel>

            {/* Headline */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-foreground leading-[1.1] sm:leading-[1.08]">
              Technology, built with purpose.
            </h1>

            {/* Three Opening Paragraphs */}
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg font-sans text-muted-foreground leading-relaxed">
              <p>
                Hisako is a technology company focused on building practical software, AI and digital infrastructure for organizations.
              </p>
              <p>
                We combine software engineering, artificial intelligence, automation and systems thinking to solve complex operational problems.
              </p>
              <p className="text-foreground font-medium">
                Founded in Kenya, Hisako works with organizations looking to build, modernize and scale their technology.
              </p>
            </div>
          </div>

          {/* Dedicated Architectural Visual Area */}
          <div className="relative rounded-lg border border-border bg-card/60 p-2 sm:p-2.5 shadow-2xs group">
            <div className="relative overflow-hidden rounded-md border border-border/80 aspect-[16/9] sm:aspect-[21/9] bg-navy-deep">
              <Image
                src="/images/about-urban-tech.png"
                alt="Urban technology infrastructure representing Hisako engineering operations"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 z-10 px-2.5 py-1 rounded-sm bg-navy/85 backdrop-blur-xs border border-white/10 text-[10px] font-mono text-white/90 shadow-xs">
                HISAKO // ENGINEERING &bull; NAIROBI
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          1. WHO WE ARE
          ========================================================================= */}
      <section className="py-14 sm:py-20 md:py-24 border-b border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-8 sm:space-y-12">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <SectionLabel index="02" variant="subtle">
              WHO WE ARE
            </SectionLabel>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
              An engineering-led technology company.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 pt-4">
            <div className="space-y-4 border-t border-border pt-6 sm:pt-8">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-primary">01 / ROLE</span>
                <Building className="w-4 h-4 text-muted-foreground" />
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground">Institutional Partner</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We work directly with leadership, technical teams, and operations directors across mid-market businesses, NGOs, public entities, and growing organizations.
              </p>
            </div>

            <div className="space-y-4 border-t border-border pt-6 sm:pt-8">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-primary">02 / FOCUS</span>
                <Target className="w-4 h-4 text-muted-foreground" />
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground">Outcome-Driven</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We measure our work by the real operational friction it removes, the hours it automates, and the reliability of the systems we deploy into production.
              </p>
            </div>

            <div className="space-y-4 border-t border-border pt-6 sm:pt-8">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-primary">03 / DELIVERY</span>
                <Wrench className="w-4 h-4 text-muted-foreground" />
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground">Hands-On Engineering</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We are not high-level slide deck consultants. Our architects write production code, configure cloud infrastructure, and take personal responsibility for system uptime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. WHAT WE BELIEVE
          ========================================================================= */}
      <section className="py-14 sm:py-20 md:py-24 border-b border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-8 sm:space-y-12">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <SectionLabel index="03" variant="subtle">
              WHAT WE BELIEVE
            </SectionLabel>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
              Principles that govern how we build.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 pt-2">
            {beliefs.map((belief, idx) => (
              <div
                key={belief.title}
                className="border-t border-border pt-5 space-y-2"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[11px] text-primary font-semibold">0{idx + 1}</span>
                  <h3 className="font-heading text-base sm:text-lg font-bold text-foreground">
                    {belief.title}
                  </h3>
                </div>
                <p className="font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed pl-6">
                  {belief.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. WHAT WE BUILD
          ========================================================================= */}
      <section className="py-14 sm:py-20 md:py-24 border-b border-border bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-8 sm:space-y-12">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <SectionLabel index="04" variant="subtle">
              WHAT WE BUILD
            </SectionLabel>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
              Software and systems engineered for durability.
            </h2>
            <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed">
              We engineer technology across the full lifecycle — from greenfield application development to complex integrations and automated workflow systems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pt-4">
            {whatWeBuild.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="border-t border-border pt-6 sm:pt-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-primary">0{idx + 1}</span>
                    <Icon className="w-4 h-4 text-muted-foreground" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. HOW WE WORK
          ========================================================================= */}
      <section className="py-14 sm:py-20 md:py-24 border-b border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-8 sm:space-y-12">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <SectionLabel index="05" variant="subtle">
              HOW WE WORK
            </SectionLabel>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
              A transparent, engineering-led execution cycle.
            </h2>
            <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed">
              Every engagement follows a structured delivery rhythm designed to minimize risk, clarify timelines, and ensure alignment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pt-4">
            <div className="border-t border-border pt-6 sm:pt-8 space-y-3">
              <span className="font-mono text-xs font-bold text-primary">STAGE 01</span>
              <h3 className="font-heading text-base sm:text-lg font-bold text-foreground">Discovery & Audit</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                We review existing workflows, codebases, and bottlenecks to define precise operational objectives.
              </p>
            </div>

            <div className="border-t border-border pt-6 sm:pt-8 space-y-3">
              <span className="font-mono text-xs font-bold text-primary">STAGE 02</span>
              <h3 className="font-heading text-base sm:text-lg font-bold text-foreground">System Architecture</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                We produce detailed system diagrams, data schemas, API contracts, and technology roadmaps.
              </p>
            </div>

            <div className="border-t border-border pt-6 sm:pt-8 space-y-3">
              <span className="font-mono text-xs font-bold text-primary">STAGE 03</span>
              <h3 className="font-heading text-base sm:text-lg font-bold text-foreground">Iterative Build</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Development happens in test-driven sprints with continuous stakeholder demos and staging access.
              </p>
            </div>

            <div className="border-t border-border pt-6 sm:pt-8 space-y-3">
              <span className="font-mono text-xs font-bold text-primary">STAGE 04</span>
              <h3 className="font-heading text-base sm:text-lg font-bold text-foreground">Deployment & Support</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Production rollout with automated monitoring, team onboarding, and ongoing SLA-backed maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. OUR CAPABILITIES
          ========================================================================= */}
      <section className="py-14 sm:py-20 md:py-24 border-b border-border bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-8 sm:space-y-12">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <SectionLabel index="06" variant="subtle">
              OUR CAPABILITIES
            </SectionLabel>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
              Technical breadth across the stack.
            </h2>
            <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed">
              We combine enterprise engineering foundations with cutting-edge automation capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pt-4">
            {capabilitiesGrid.map((group, idx) => (
              <div key={group.category} className="border-t border-border pt-6 sm:pt-8 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-primary">0{idx + 1}</span>
                </div>
                <h3 className="text-sm sm:text-base text-foreground font-mono uppercase tracking-wide font-bold">
                  {group.category}
                </h3>
                <ul className="space-y-2 sm:space-y-2.5 text-xs font-mono text-muted-foreground">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. CONTACT CTA
          ========================================================================= */}
      <section className="py-14 sm:py-20 md:py-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center space-y-6 sm:space-y-8">
          <div className="inline-flex justify-center">
            <SectionLabel variant="navy" index="07">
              LET&rsquo;S BUILD
            </SectionLabel>
          </div>

          <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Ready to move your organization forward?
            </h2>
            <p className="font-sans text-sm sm:text-base md:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              Connect with our engineering leadership to discuss upcoming software builds, system modernization, or technical retainers.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 rounded-md bg-primary text-white text-sm font-medium hover:bg-royal-blue-hover transition-colors shadow-2xs gap-2"
            >
              <span>Start a project</span>
              <ArrowRight className="w-4 h-4" />
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
