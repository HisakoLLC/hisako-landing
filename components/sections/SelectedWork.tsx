import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { SectionLabel } from "@/components/ui/section-label"
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"

const projects = [
  {
    index: "01",
    title: "AI Agency Operations Platform",
    category: "Operations & AI Software",
    description:
      "An AI-powered operating system for modern agencies, combining CRM, projects, proposals, invoicing, onboarding, reporting and automation.",
    href: "/work/ai-agency-operations-platform",
    image: {
      src: "/images/Abstract Color Harmony.png",
      alt: "AI Agency Operations Platform brand identity - Abstract Color Harmony",
      contain: false,
    },
  },
  {
    index: "02",
    title: "Passr",
    category: "Compliance & Product Information",
    description:
      "Compliance infrastructure for physical products entering regulated markets, including product information and digital product passport technology.",
    href: "/work/passr",
    image: {
      src: "/images/Passr original Logo.jpg",
      alt: "Passr digital product passport visual - Passr logo",
      contain: true,
    },
  },
  {
    index: "03",
    title: "VendoFlow",
    category: "Retail Operations & Commerce",
    description:
      "Digital operations software for fashion businesses, covering inventory, sales and business management.",
    href: "/work/vendoflow",
    image: {
      src: "/images/vendoflow.png",
      alt: "VendoFlow retail commerce operations software visual",
      contain: true,
    },
  },
]

export function SelectedWork() {
  return (
    <section id="work" className="scroll-mt-16 py-14 sm:py-20 md:py-28 bg-card/40 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-border/80 pb-6 sm:pb-8">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <SectionLabel index="03" variant="subtle">
              SELECTED WORK
            </SectionLabel>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-[44px] font-bold tracking-tight text-foreground leading-tight">
              Technology we&rsquo;ve built.
            </h2>
            <p className="font-sans text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              Selected products, platforms and systems developed by Hisako.
            </p>
          </div>

          <div className="shrink-0 pt-2 sm:pt-0">
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline font-sans min-h-[40px]"
            >
              <span>View all work</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 3 Project Cards (1 col mobile, 2 col tablet, 3 col desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              variant="default"
              className="flex flex-col justify-between p-5 sm:p-6 bg-background hover:border-primary/40 transition-colors shadow-2xs"
            >
              <div className="space-y-4 sm:space-y-5">
                {/* Project Visual Image */}
                <div className="relative aspect-video w-full overflow-hidden rounded-md border border-border bg-slate-50 dark:bg-card/50 flex items-center justify-center">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    className={
                      project.image.contain
                        ? "object-contain p-6 sm:p-8"
                        : "object-cover"
                    }
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Category & Index */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-sm bg-accent/50 text-accent-foreground font-mono text-[10px] uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground/60">
                    PRJ.{project.index}
                  </span>
                </div>

                {/* Title & Description */}
                <CardHeader className="p-0 space-y-1.5 sm:space-y-2">
                  <CardTitle className="text-lg sm:text-xl font-heading text-foreground">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
              </div>

              {/* Link CTA */}
              <CardFooter className="p-0 pt-5 sm:pt-6 mt-4 sm:mt-6 border-t border-border/60">
                <Link
                  href={project.href}
                  className="text-xs font-semibold text-primary inline-flex items-center gap-1 hover:underline min-h-[36px]"
                >
                  View case study &rarr;
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
