import * as React from "react"
import { cn } from "@/lib/utils"

export interface ImagePlaceholderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  aspectRatio?: "16/9" | "4/3" | "1/1" | "21/9" | "auto"
  label?: string
  dimensions?: string
  variant?: "light" | "navy" | "graphite"
}

export function ImagePlaceholder({
  aspectRatio = "16/9",
  label = "Image Container Placeholder",
  dimensions,
  variant = "light",
  className,
  ...props
}: ImagePlaceholderProps) {
  const aspectClass = {
    "16/9": "aspect-video",
    "4/3": "aspect-4/3",
    "1/1": "aspect-square",
    "21/9": "aspect-[21/9]",
    auto: "h-full min-h-[220px]",
  }[aspectRatio]

  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "group relative flex flex-col items-center justify-center rounded-md border overflow-hidden select-none transition-all duration-300 animate-fade-in",
        aspectClass,
        variant === "light" &&
          "bg-card/70 border-border text-muted-foreground hover:border-border/90 hover:bg-card/90",
        variant === "navy" &&
          "bg-navy text-white/70 border-navy-border hover:border-primary/40",
        variant === "graphite" &&
          "bg-[#11161d] text-white/70 border-[#222c3c] hover:border-primary/30",
        className
      )}
      {...props}
    >
      {/* Architectural subtle background grid with gentle hover depth */}
      <div className="absolute inset-0 bg-tech-grid opacity-40 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none" />

      {/* Technical corner brackets / crosshairs with engineered hover alignment */}
      <div className="absolute top-2.5 left-2.5 text-[10px] font-mono opacity-30 group-hover:opacity-60 transition-opacity duration-200 leading-none">
        ┌
      </div>
      <div className="absolute top-2.5 right-2.5 text-[10px] font-mono opacity-30 group-hover:opacity-60 transition-opacity duration-200 leading-none">
        ┐
      </div>
      <div className="absolute bottom-2.5 left-2.5 text-[10px] font-mono opacity-30 group-hover:opacity-60 transition-opacity duration-200 leading-none">
        └
      </div>
      <div className="absolute bottom-2.5 right-2.5 text-[10px] font-mono opacity-30 group-hover:opacity-60 transition-opacity duration-200 leading-none">
        ┘
      </div>

      {/* Center information badge */}
      <div className="relative z-10 flex flex-col items-center gap-1.5 px-4 text-center">
        <div className="w-8 h-8 rounded-sm border border-current opacity-30 group-hover:opacity-50 transition-opacity duration-200 flex items-center justify-center">
          <svg
            className="w-4 h-4 opacity-70"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </div>
        <p className="font-mono text-xs font-medium tracking-wide uppercase">
          {label}
        </p>
        {dimensions && (
          <span className="font-mono text-[10px] opacity-60">
            {dimensions}
          </span>
        )}
      </div>
    </div>
  )
}
