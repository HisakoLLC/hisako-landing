import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react"
import { SectionLabel } from "@/components/ui/section-label"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ImagePlaceholder } from "@/components/ui/image-placeholder"
import { Button } from "@/components/ui/button"
import { CaseStudy, getCaseStudyBySlug } from "@/lib/case-studies-data"

interface CaseStudyTemplateProps {
  caseStudy: CaseStudy
}

export function CaseStudyTemplate({ caseStudy }: CaseStudyTemplateProps) {
  const nextProject = getCaseStudyBySlug(caseStudy.nextProjectSlug)

  return (
    <article className="bg-background min-h-screen">
      {/* =========================================================================
          1, 2, 3: CATEGORY, PROJECT NAME, ONE-LINE DESCRIPTION & BACK LINK
          ========================================================================= */}
      <section className="relative pt-8 sm:pt-12 md:pt-16 pb-8 sm:pb-12 border-b border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-4 sm:space-y-6">
          {/* Back to Work Link */}
          <div>
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors min-h-[36px] py-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all work</span>
            </Link>
          </div>

          <div className="space-y-3 sm:space-y-4 max-w-4xl">
            {/* 1. Project Category & Type */}
            <div className="flex flex-wrap items-center gap-2">
              <SectionLabel index="CASE STUDY" variant="default">
                {caseStudy.category}
              </SectionLabel>
              <span className="px-2.5 py-0.5 rounded-sm bg-accent/40 border border-border text-[10px] font-mono text-muted-foreground uppercase">
                {caseStudy.projectType}
              </span>
            </div>

            {/* 2. Project Name */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] sm:leading-[1.06]">
              {caseStudy.name}
            </h1>

            {/* 3. One-Line Description */}
            <p className="font-sans text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed pt-1">
              {caseStudy.oneLiner}
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. HERO IMAGE (Dedicated Architectural Visual Container)
          ========================================================================= */}
      <section className="py-6 sm:py-8 md:py-12 bg-card/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="rounded-lg border border-border bg-card p-2 sm:p-2.5 shadow-xs">
            <ImagePlaceholder
              aspectRatio="16/9"
              label={`${caseStudy.name} Primary Architecture Visual`}
              dimensions="Hero Case Study Visual (Image to be provided)"
              variant="light"
              className="rounded-md"
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. OVERVIEW
          ========================================================================= */}
      <section className="py-12 sm:py-16 md:py-20 border-b border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10">
            <div className="lg:col-span-4 space-y-1.5 sm:space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold block">
                01 / CONTEXT
              </span>
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                Overview
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="font-sans text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                {caseStudy.overview}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6, 7, 8: PROBLEM, APPROACH & SOLUTION (Editorial Narrative)
          ========================================================================= */}
      <section className="py-12 sm:py-16 md:py-24 border-b border-border bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-10 sm:space-y-16">
          {/* 6. The Problem */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 border-b border-border/80 pb-10 sm:pb-16">
            <div className="lg:col-span-4 space-y-1.5 sm:space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold block">
                02 / CHALLENGE
              </span>
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                The Operational Problem
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="font-sans text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                {caseStudy.problem}
              </p>
            </div>
          </div>

          {/* 7. The Approach */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 border-b border-border/80 pb-10 sm:pb-16">
            <div className="lg:col-span-4 space-y-1.5 sm:space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold block">
                03 / ARCHITECTURE
              </span>
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                Engineering Approach
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="font-sans text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                {caseStudy.approach}
              </p>
            </div>
          </div>

          {/* 8. The Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10">
            <div className="lg:col-span-4 space-y-1.5 sm:space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold block">
                04 / DEPLOYMENT
              </span>
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                The Solution Delivered
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="font-sans text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. TECHNOLOGY & 10. KEY CAPABILITIES
          ========================================================================= */}
      <section className="py-12 sm:py-16 md:py-24 border-b border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-10 sm:space-y-16">
          {/* 9. Technology Stack */}
          <div className="space-y-4 sm:space-y-6">
            <div className="space-y-1.5 sm:space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold block">
                05 / STACK
              </span>
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                Technologies & Architecture
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {caseStudy.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-sm bg-card border border-border text-[11px] sm:text-xs font-mono text-foreground tracking-wide"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 10. Key Capabilities */}
          <div className="space-y-4 sm:space-y-6 border-t border-border/80 pt-10 sm:pt-16">
            <div className="space-y-1.5 sm:space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold block">
                06 / SPECIFICATIONS
              </span>
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                Key Capabilities
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {caseStudy.keyCapabilities.map((cap) => (
                <div
                  key={cap}
                  className="p-4 sm:p-5 rounded-md border border-border bg-card/40 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="font-sans text-xs sm:text-sm text-foreground leading-relaxed">
                    {cap}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          11. RESULTS, ONLY WHEN VERIFIED
          ========================================================================= */}
      {caseStudy.verifiedResults && caseStudy.verifiedResults.length > 0 && (
        <section className="py-12 sm:py-16 md:py-20 border-b border-border bg-card/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-6 sm:space-y-8">
            <div className="space-y-1.5 sm:space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold block">
                07 / VERIFIED OUTCOMES
              </span>
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                Verified Results & Milestones
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {caseStudy.verifiedResults.map((res) => (
                <Card key={res.label} variant="default" className="p-5 sm:p-7">
                  <CardHeader className="p-0 pb-2">
                    <CardTitle className="text-lg sm:text-xl font-heading text-foreground">
                      {res.label}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {res.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          12. GALLERY
          ========================================================================= */}
      {caseStudy.galleryImages && caseStudy.galleryImages.length > 0 && (
        <section className="py-12 sm:py-16 md:py-24 border-b border-border bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-6 sm:space-y-8">
            <div className="space-y-1.5 sm:space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold block">
                08 / SYSTEM INTERFACES
              </span>
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                Architecture & Interface Gallery
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {caseStudy.galleryImages.map((img) => (
                <div key={img.label} className="overflow-hidden rounded-md border border-border">
                  <ImagePlaceholder
                    aspectRatio={img.aspectRatio || "16/9"}
                    label={img.label}
                    dimensions="Visual Asset Container"
                    variant="light"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          13. NEXT PROJECT
          ========================================================================= */}
      {nextProject && (
        <section className="py-8 sm:py-12 border-b border-border bg-card/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <Link
              href={`/work/${nextProject.slug}`}
              className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 sm:p-8 rounded-lg border border-border bg-card hover:border-primary/40 transition-colors"
            >
              <div className="space-y-1">
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  Next Case Study &rarr;
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {nextProject.name}
                </h3>
                <p className="font-sans text-xs text-muted-foreground">
                  {nextProject.category}
                </p>
              </div>

              <div className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-primary min-h-[36px]">
                <span>Explore Project</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* =========================================================================
          14. CONTACT CTA
          ========================================================================= */}
      <section className="py-14 sm:py-20 md:py-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center space-y-6 sm:space-y-8">
          <div className="inline-flex justify-center">
            <SectionLabel variant="navy" index="ENGAGE">
              DISCUSS YOUR SYSTEM
            </SectionLabel>
          </div>

          <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Ready to engineer a solution for your organization?
            </h2>
            <p className="font-sans text-sm sm:text-base md:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              Our engineering team evaluates requirements, designs custom software architectures, and deploys scalable automated systems.
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
              href="mailto:contact@hisako.eu"
              className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 rounded-md border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-colors"
            >
              contact@hisako.eu
            </a>
          </div>
        </div>
      </section>
    </article>
  )
}
