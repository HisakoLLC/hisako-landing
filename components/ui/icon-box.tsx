import * as React from "react"
import { cn } from "@/lib/utils"

export interface IconBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "primary" | "navy" | "subtle" | "outline"
  size?: "sm" | "md" | "lg"
}

export function IconBox({
  variant = "subtle",
  size = "md",
  className,
  children,
  ...props
}: IconBoxProps) {
  const sizeClasses = {
    sm: "w-8 h-8 [&_svg]:w-4 [&_svg]:h-4 text-xs",
    md: "w-10 h-10 [&_svg]:w-5 [&_svg]:h-5 text-sm",
    lg: "w-12 h-12 [&_svg]:w-6 [&_svg]:h-6 text-base",
  }[size]

  return (
    <div
      className={cn(
        "shrink-0 rounded-md flex items-center justify-center transition-colors",
        sizeClasses,
        variant === "subtle" &&
          "bg-card border border-border text-foreground",
        variant === "primary" &&
          "bg-accent text-primary border border-primary/20",
        variant === "navy" &&
          "bg-navy text-white border border-navy-border",
        variant === "outline" &&
          "bg-transparent border border-border text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
