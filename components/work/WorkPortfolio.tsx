"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, AlertTriangle } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { ImagePlaceholder } from "@/components/ui/image-placeholder"
import { Project, CATEGORY_FILTERS, CategoryFilter } from "@/lib/projects-data"

interface WorkPortfolioProps {
  projects: Project[]
}

export function WorkPortfolio({ projects }: WorkPortfolioProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All")

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects
    }
    return projects.filter((p) => p.filterCategories.includes(activeCategory))
  }, [projects, activeCategory])

  return (
    <div className="space-y-8 sm:space-y-12">
      {/* Category Filter Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/80 pb-6">
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORY_FILTERS.map((cat) => {
            const isActive = activeCategory === cat
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-md text-xs font-mono uppercase tracking-wider transition-all min-h-[36px] cursor-pointer ${
                  isActive
                    ? "bg-primary text-white shadow-2xs font-semibold"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>

        <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">
          {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}
        </span>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((project, index) => (
          <Card
            key={project.slug}
            variant="default"
            className="group flex flex-col justify-between p-5 sm:p-7 bg-background hover:border-primary/50 transition-all shadow-2xs overflow-hidden"
          >
            <div className="space-y-5 sm:space-y-6">
              {/* Project Image Slot */}
              <div className="relative aspect-video w-full overflow-hidden rounded-md border border-border bg-slate-50 dark:bg-card/60 flex items-center justify-center">
                {(project.logo?.src || project.heroImage?.src) ? (
                  (() => {
                    const img = project.logo?.src ? project.logo : project.heroImage!
                    return (
                      <Image
                        src={img.src!}
                        alt={img.alt}
                        fill
                        unoptimized={img.src?.endsWith(".gif")}
                        className={
                          img.contain
                            ? "object-contain p-6 sm:p-8"
                            : "object-cover group-hover:scale-105 transition-transform duration-500"
                        }
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    )
                  })()
                ) : (
                  <ImagePlaceholder
                    aspectRatio="16/9"
                    label={project.name}
                    dimensions="Visual Asset Slot"
                    variant="light"
                  />
                )}
              </div>

              {/* Meta: Category & Badges */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="px-2.5 py-0.5 rounded-sm bg-accent/60 text-accent-foreground font-mono text-[10px] font-medium uppercase tracking-wider">
                  {project.category}
                </span>

                <div className="flex items-center gap-1.5">
                  {project.badgeLabel && (
                    <span className="px-2 py-0.5 rounded-sm bg-card border border-border text-[9px] font-mono text-muted-foreground uppercase font-semibold">
                      {project.badgeLabel}
                    </span>
                  )}
                  {project.status && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-sm bg-amber-500/10 border border-amber-500/30 text-[9px] font-mono font-semibold text-amber-700 dark:text-amber-400 uppercase">
                      <AlertTriangle className="w-2.5 h-2.5" />
                      <span>{project.status}</span>
                    </span>
                  )}
                  <span className="font-mono text-xs text-muted-foreground/50 ml-1">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>
                </div>
              </div>

              {/* Title & Short Description */}
              <CardHeader className="p-0 space-y-1.5 sm:space-y-2">
                <CardTitle as="h2" className="text-lg sm:text-xl font-heading text-foreground group-hover:text-primary transition-colors">
                  {project.name}
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {project.shortDescription}
                </CardDescription>
              </CardHeader>
            </div>

            {/* Bottom CTA */}
            <CardFooter className="p-0 pt-5 mt-5 border-t border-border/60">
              <Link
                href={`/work/${project.slug}`}
                className="text-xs font-semibold text-primary inline-flex items-center gap-1.5 py-1 hover:underline min-h-[36px]"
              >
                <span>View project</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
