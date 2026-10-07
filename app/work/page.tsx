import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionLabel } from "@/components/ui/section-label"
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { ImagePlaceholder } from "@/components/ui/image-placeholder"
import { Button } from "@/components/ui/button"
import { caseStudies } from "@/lib/case-studies-data"

export const metadata: Metadata = {
  title: "Our Work — Software, AI Systems & Digital Products",
  description:
    "A selection of software platforms, AI systems and digital products developed by Hisako across enterprise operations, retail, and compliance.",
  alternates: {
    canonical: "https://hisako.eu/work",
  },
  openGraph: {
    title: "Our Work — Software, AI Systems & Digital Products | Hisako",
    description:
      "A selection of software platforms, AI systems and digital products developed by Hisako across enterprise operations, retail, and compliance.",
    url: "https://hisako.eu/work",
    siteName: "Hisako",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work — Software, AI Systems & Digital Products | Hisako",
    description:
      "A selection of software platforms, AI systems and digital products developed by Hisako across enterprise operations, retail, and compliance.",
  },
}

export default function WorkPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* =========================================================================
          HERO SECTION — Exact Copy & Positioning
          ========================================================================= */}
      <section className="relative pt-8 sm:pt-12 md:pt-20 pb-12 sm:pb-16 md:pb-24 border-b border-border overflow-hidden bg-background">
        <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-4 sm:space-y-6">
          <SectionLabel index="01" variant="default">
            OUR WORK
          </SectionLabel>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-foreground leading-[1.1] sm:leading-[1.08] max-w-3xl">
            Real technology. Real systems.
          </h1>

          <p className="font-sans text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            A selection of software platforms, AI systems and digital products developed by Hisako.
          </p>
        </div>
      </section>

      {/* =========================================================================
          CASE STUDIES GRID — Scalable Architectural Layout
          ========================================================================= */}
      <section className="py-14 sm:py-20 md:py-28 bg-card/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-8 sm:space-y-12">
          {/* Project List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {caseStudies.map((project, index) => (
              <Card
                key={project.slug}
                variant="default"
                className="flex flex-col justify-between p-5 sm:p-7 bg-background hover:border-primary/40 transition-colors shadow-2xs"
              >
                <div className="space-y-5 sm:space-y-6">
                  {/* Image Container Placeholder */}
                  <div className="overflow-hidden rounded-md border border-border">
                    <ImagePlaceholder
                      aspectRatio="16/9"
                      label={`${project.name} Visual`}
                      dimensions="Project Visual Container"
                      variant="light"
                    />
                  </div>

                  {/* Category & Index Meta */}
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-sm bg-accent/60 text-accent-foreground font-mono text-[10px] font-medium uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground/60">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <CardHeader className="p-0 space-y-1.5 sm:space-y-2">
                    <CardTitle as="h2" className="text-lg sm:text-xl font-heading text-foreground">
                      {project.name}
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {project.oneLiner}
                    </CardDescription>
                  </CardHeader>

                  {/* Architectural Technologies */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-sm bg-card border border-border text-[10px] font-mono text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Case Study Link */}
                <CardFooter className="p-0 pt-5 sm:pt-6 mt-4 sm:mt-6 border-t border-border/60">
                  <Link
                    href={`/work/${project.slug}`}
                    className="text-xs font-semibold text-primary inline-flex items-center gap-1.5 hover:underline min-h-[36px]"
                  >
                    <span>View case study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          BOTTOM CTA — Technical Engagements
          ========================================================================= */}
      <section className="py-14 sm:py-20 md:py-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center space-y-6 sm:space-y-8">
          <div className="inline-flex justify-center">
            <SectionLabel variant="navy" index="02">
              NEW INITIATIVES
            </SectionLabel>
          </div>

          <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Have a technology project in mind?
            </h2>
            <p className="font-sans text-sm sm:text-base md:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              We help organizations design, engineer, and deploy robust software systems and intelligent workflows.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-2">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="default" size="lg" className="w-full sm:w-auto min-h-[44px] gap-2">
                <span>Start a project</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <a
              href="mailto:contact@hisako.eu"
              className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 rounded-md border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-colors"
            >
              contact@hisako.eu
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
