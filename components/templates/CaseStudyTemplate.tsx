import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, CheckCircle2, AlertTriangle, ArrowRightCircle } from "lucide-react"
import { SectionLabel } from "@/components/ui/section-label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { ImagePlaceholder } from "@/components/ui/image-placeholder"
import { Project, getRelatedProjects, getAdjacentProjects } from "@/lib/projects-data"

interface CaseStudyTemplateProps {
  caseStudy: Project
}

export function CaseStudyTemplate({ caseStudy }: CaseStudyTemplateProps) {
  const relatedProjects = getRelatedProjects(caseStudy.slug)
  const { prev, next } = getAdjacentProjects(caseStudy.slug)

  return (
    <article className="bg-background min-h-screen">
      {/* =========================================================================
          01, 02, 03: CATEGORY, TITLE, ONE-LINE DESCRIPTION & BACK LINK
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
            {/* 01. Category & Status Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <SectionLabel index="PROJECT" variant="default">
                {caseStudy.category}
              </SectionLabel>

              {caseStudy.badgeLabel && (
                <span className="px-2.5 py-0.5 rounded-sm bg-accent/60 border border-border text-[10px] font-mono text-foreground font-semibold uppercase tracking-wider">
                  {caseStudy.badgeLabel}
                </span>
              )}

              {caseStudy.status && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-sm bg-amber-500/10 border border-amber-500/30 text-[10px] font-mono font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wider">
                  <AlertTriangle className="w-3 h-3" />
                  <span>{caseStudy.status}</span>
                </span>
              )}
            </div>

            {/* 02. Project Title & Logo */}
            <div className="flex items-center gap-3.5 sm:gap-4 pt-1">
              {caseStudy.logo?.src && (
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-md overflow-hidden border border-border bg-card/60 flex items-center justify-center shrink-0">
                  <Image
                    src={caseStudy.logo.src}
                    alt={`${caseStudy.name} logo`}
                    fill
                    unoptimized={caseStudy.logo.src.endsWith(".gif")}
                    className={caseStudy.logo.contain ? "object-contain p-2" : "object-cover"}
                    sizes="64px"
                  />
                </div>
              )}
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] sm:leading-[1.06]">
                {caseStudy.name}
              </h1>
            </div>

            {/* 03. One-Line Description */}
            <p className="font-sans text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed pt-1 max-w-3xl">
              {caseStudy.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          04. HERO IMAGE (Clearly defined image container / placeholder)
          ========================================================================= */}
      <section className="py-6 sm:py-8 md:py-12 bg-card/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="rounded-lg border border-border bg-card p-2 sm:p-2.5 shadow-2xs">
            <div className="relative aspect-video w-full overflow-hidden rounded-md border border-border/80 bg-slate-50 dark:bg-card/60 flex items-center justify-center">
              {caseStudy.heroImage?.src ? (
                <Image
                  src={caseStudy.heroImage.src}
                  alt={caseStudy.heroImage.alt}
                  fill
                  priority
                  unoptimized={caseStudy.heroImage.src.endsWith(".gif")}
                  className={
                    caseStudy.heroImage.contain
                      ? "object-contain p-8 sm:p-14"
                      : "object-cover"
                  }
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />
              ) : (
                <ImagePlaceholder
                  aspectRatio="16/9"
                  label={`${caseStudy.name} — Primary System Interface`}
                  dimensions="Primary Visual Asset Slot"
                  variant="light"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          12. PROJECT STATUS DISCLOSURE (Rendered prominently if statusNote exists)
          ========================================================================= */}
      {caseStudy.statusNote && (
        <section className="py-6 sm:py-8 border-b border-border bg-amber-500/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="p-4 sm:p-6 rounded-lg border border-amber-500/30 bg-card/60 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="p-2 rounded-md bg-amber-500/15 text-amber-700 dark:text-amber-400 shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h2 className="font-heading font-semibold text-sm text-foreground">
                  Project Status: {caseStudy.status}
                </h2>
                <p className="font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {caseStudy.statusNote}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          05. OVERVIEW
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
          06, 07, 08: PROBLEM, APPROACH & SOLUTION
          ========================================================================= */}
      <section className="py-12 sm:py-16 md:py-24 border-b border-border bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-10 sm:space-y-16">
          {/* 06. The Problem */}
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

          {/* 07. The Approach */}
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

          {/* 08. The Solution */}
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
          CONCEPTUAL WORKFLOW (Visual Pipeline for AI Systems)
          ========================================================================= */}
      {caseStudy.workflow && caseStudy.workflow.length > 0 && (
        <section className="py-12 sm:py-16 md:py-20 border-b border-border bg-card/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-6 sm:space-y-8">
            <div className="space-y-1.5 sm:space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold block">
                SYSTEM PIPELINE
              </span>
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                Conceptual Workflow Topology
              </h2>
            </div>

            {/* Desktop Horizontal Workflow / Mobile Step Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 relative">
              {caseStudy.workflow.map((step, idx) => (
                <div
                  key={step.step}
                  className="p-4 rounded-lg border border-border bg-card flex flex-col justify-between space-y-3 relative group hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-primary">
                      {step.step}
                    </span>
                    {idx < (caseStudy.workflow?.length || 0) - 1 && (
                      <ArrowRightCircle className="w-3.5 h-3.5 text-muted-foreground/60 hidden lg:block" />
                    )}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-heading font-semibold text-xs sm:text-sm text-foreground">
                      {step.title}
                    </h3>
                    {step.description && (
                      <p className="font-sans text-[11px] text-muted-foreground leading-normal">
                        {step.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          09. KEY CAPABILITIES & 10. TECHNOLOGY
          ========================================================================= */}
      <section className="py-12 sm:py-16 md:py-24 border-b border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-10 sm:space-y-16">
          {/* 09. Key Capabilities */}
          <div className="space-y-4 sm:space-y-6">
            <div className="space-y-1.5 sm:space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold block">
                05 / CAPABILITIES
              </span>
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                Core System Capabilities
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {caseStudy.capabilities.map((cap) => (
                <div
                  key={cap}
                  className="p-4 sm:p-5 rounded-md border border-border bg-card/40 flex items-start gap-3 hover:border-primary/40 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="font-sans text-xs sm:text-sm text-foreground leading-relaxed">
                    {cap}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 10. Technology Stack */}
          <div className="space-y-4 sm:space-y-6 border-t border-border/80 pt-10 sm:pt-16">
            <div className="space-y-1.5 sm:space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold block">
                06 / STACK
              </span>
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                Technologies & Tools
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {caseStudy.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-sm bg-card border border-border text-[11px] sm:text-xs font-mono text-foreground tracking-wide hover:border-primary/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          11. IMAGE GALLERY (Defined Visual Asset Slots)
          ========================================================================= */}
      {caseStudy.galleryImages && caseStudy.galleryImages.length > 0 && (
        <section className="py-12 sm:py-16 md:py-24 border-b border-border bg-card/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-6 sm:space-y-8">
            <div className="space-y-1.5 sm:space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold block">
                07 / SYSTEM INTERFACES
              </span>
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                Architecture & Interface Gallery
              </h2>
            </div>

            <div className={`grid gap-4 sm:gap-6 ${
              caseStudy.galleryImages.length === 4
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                : caseStudy.galleryImages.length === 2
                ? "grid-cols-1 sm:grid-cols-2"
                : "grid-cols-1 md:grid-cols-3"
            }`}>
              {caseStudy.galleryImages.map((img) => (
                <div
                  key={img.label}
                  className="group overflow-hidden rounded-md border border-border bg-card flex flex-col transition-all hover:border-primary/40 shadow-2xs"
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-muted/20">
                    {img.src ? (
                      <Image
                        src={img.src}
                        alt={img.label}
                        fill
                        unoptimized={img.src.endsWith(".gif")}
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : (
                      <ImagePlaceholder
                        aspectRatio={img.aspectRatio || "16/9"}
                        label={img.label}
                        dimensions="Visual Asset Slot"
                        variant="light"
                      />
                    )}
                  </div>
                  <div className="p-3 border-t border-border/70 bg-card">
                    <p className="font-mono text-[11px] leading-tight text-muted-foreground uppercase tracking-wider">
                      {img.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          13. RELATED PROJECTS
          ========================================================================= */}
      {relatedProjects.length > 0 && (
        <section className="py-12 sm:py-16 md:py-20 border-b border-border bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-6 sm:space-y-8">
            <div className="space-y-1.5 sm:space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold block">
                08 / EXPLORE MORE
              </span>
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                Related Technology Projects
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {relatedProjects.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/work/${rel.slug}`}
                  className="group p-5 sm:p-6 rounded-lg border border-border bg-card hover:border-primary/40 transition-colors flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <span className="px-2 py-0.5 rounded-sm bg-accent/60 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {rel.category}
                    </span>
                    <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {rel.name}
                    </h3>
                    <p className="font-sans text-xs text-muted-foreground line-clamp-2">
                      {rel.shortDescription}
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary pt-2">
                    <span>View project</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          14. PREVIOUS / NEXT PROJECT NAVIGATION
          ========================================================================= */}
      <section className="py-8 sm:py-12 border-b border-border bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Previous Project */}
            <Link
              href={`/work/${prev.slug}`}
              className="group p-5 sm:p-6 rounded-lg border border-border bg-card hover:border-primary/40 transition-colors flex items-center justify-between"
            >
              <div className="space-y-1">
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground flex items-center gap-1">
                  <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
                  <span>Previous Project</span>
                </span>
                <h4 className="font-heading text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {prev.name}
                </h4>
              </div>
            </Link>

            {/* Next Project */}
            <Link
              href={`/work/${next.slug}`}
              className="group p-5 sm:p-6 rounded-lg border border-border bg-card hover:border-primary/40 transition-colors flex items-center justify-between text-right"
            >
              <div className="space-y-1 ml-auto">
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground flex items-center justify-end gap-1">
                  <span>Next Project</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </span>
                <h4 className="font-heading text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {next.name}
                </h4>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          15. CONTACT CTA (Standardized Exact Required Copy)
          ========================================================================= */}
      <section className="py-14 sm:py-20 md:py-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center space-y-6 sm:space-y-8">
          <div className="inline-flex justify-center">
            <SectionLabel variant="navy" index="CONTACT">
              GET IN TOUCH
            </SectionLabel>
          </div>

          <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Have a technology problem?
            </h2>
            <p className="font-sans text-sm sm:text-base md:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              Tell us what you&rsquo;re trying to solve.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 rounded-md bg-primary text-white text-sm font-medium hover:bg-royal-blue-hover transition-colors shadow-2xs gap-2"
            >
              <span>Start a project &rarr;</span>
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
    </article>
  )
}
