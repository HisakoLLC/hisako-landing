import {
  Landmark,
  Globe2,
  Coins,
  Store,
  GraduationCap,
  HeartPulse,
  Truck,
  Factory,
  Briefcase,
  Terminal,
} from "lucide-react"
import { SectionLabel } from "@/components/ui/section-label"

const industries = [
  { name: "Government & Public Sector", icon: Landmark },
  { name: "NGOs & Development", icon: Globe2 },
  { name: "Financial Services", icon: Coins },
  { name: "Retail & Commerce", icon: Store },
  { name: "Education", icon: GraduationCap },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Logistics", icon: Truck },
  { name: "Manufacturing", icon: Factory },
  { name: "Professional Services", icon: Briefcase },
  { name: "Technology Companies", icon: Terminal },
]

export function Industries() {
  return (
    <section className="py-14 sm:py-20 md:py-28 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-3 sm:space-y-4">
          <SectionLabel index="04" variant="subtle">
            INDUSTRIES
          </SectionLabel>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-[44px] font-bold tracking-tight text-foreground leading-tight">
            Technology for organizations across sectors.
          </h2>
          <p className="font-sans text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
            We work across industries where technology can improve operations, customer experiences and decision-making.
          </p>
        </div>

        {/* Responsive Grid: 2 col mobile, 3 col small tablet, 4 col tablet, 5 col desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {industries.map((ind) => {
            const Icon = ind.icon
            return (
              <div
                key={ind.name}
                className="p-4 sm:p-5 rounded-md border border-border bg-card/50 hover:bg-card hover:border-primary/40 transition-colors flex flex-col justify-between space-y-3 sm:space-y-4 min-h-[110px] sm:min-h-[130px]"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-sm bg-accent/60 text-primary flex items-center justify-center border border-border/60 shrink-0">
                  <Icon className="w-4 h-4" strokeWidth={1.75} />
                </div>
                <span className="font-heading font-semibold text-xs sm:text-sm text-foreground leading-snug">
                  {ind.name}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
