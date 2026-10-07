import { Metadata } from "next"
import { SectionLabel } from "@/components/ui/section-label"
import { WorkPortfolio } from "@/components/work/WorkPortfolio"
import { projects } from "@/lib/projects-data"

export const metadata: Metadata = {
  title: "Our Work — Technology We've Built | Hisako",
  description:
    "From AI systems and business software to digital platforms and developer tools, our work spans a wide range of real-world technology problems.",
  alternates: {
    canonical: "https://hisako.eu/work",
  },
  openGraph: {
    title: "Our Work — Technology We've Built | Hisako",
    description:
      "From AI systems and business software to digital platforms and developer tools, our work spans a wide range of real-world technology problems.",
    url: "https://hisako.eu/work",
    siteName: "Hisako",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work — Technology We've Built | Hisako",
    description:
      "From AI systems and business software to digital platforms and developer tools, our work spans a wide range of real-world technology problems.",
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
            Technology we&rsquo;ve built.
          </h1>

          <p className="font-sans text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            From AI systems and business software to digital platforms and developer tools, our work spans a wide range of real-world technology problems.
          </p>
        </div>
      </section>

      {/* =========================================================================
          PORTFOLIO SECTION — Interactive Category Filters & Cards Grid
          ========================================================================= */}
      <section className="py-12 sm:py-16 md:py-24 bg-card/20 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <WorkPortfolio projects={projects} />
        </div>
      </section>
    </div>
  )
}
