import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  index?: string
  variant?: "default" | "navy" | "subtle"
}

export function SectionLabel({
  index,
  children,
  className,
  variant = "default",
  ...props
}: SectionLabelProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-2.5 py-1 rounded-sm text-[11px] font-mono font-medium tracking-[0.08em] uppercase select-none",
        variant === "default" &&
          "bg-accent/50 text-accent-foreground border border-border/80",
        variant === "navy" &&
          "bg-navy text-white/90 border border-navy-border",
        variant === "subtle" &&
          "bg-card text-muted-foreground border border-border",
        className
      )}
      {...props}
    >
      {index && (
        <span className="opacity-70 font-semibold">{index}</span>
      )}
      {index && <span className="opacity-40">/</span>}
      <span>{children}</span>
    </div>
  )
}
