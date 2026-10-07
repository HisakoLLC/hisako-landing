import * as React from "react"
import { cn } from "@/lib/utils"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "navy" | "interactive"
}

export function Card({
  className,
  variant = "default",
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-md border p-6 transition-all duration-200 ease-out",
        variant === "default" &&
          "bg-card border-border text-card-foreground shadow-2xs hover:border-border/80",
        variant === "outline" &&
          "bg-background border-border text-foreground hover:border-border/80",
        variant === "navy" &&
          "bg-navy border-navy-border text-white shadow-xs hover:border-navy-border/80",
        variant === "interactive" &&
          "bg-card border-border hover:border-primary/50 hover:bg-card/90 text-card-foreground cursor-pointer shadow-2xs hover:shadow-xs",
        className
      )}
      {...props}
    />
  )
}

export function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-col space-y-1.5 pb-4", className)}
      {...props}
    />
  )
}

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "div"
}

export function CardTitle({
  className,
  as: Component = "h3",
  ...props
}: CardTitleProps) {
  return (
    <Component
      className={cn(
        "text-lg font-semibold tracking-tight text-foreground font-heading",
        className
      )}
      {...props}
    />
  )
}

export function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm text-muted-foreground leading-relaxed", className)}
      {...props}
    />
  )
}

export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("pt-0", className)} {...props} />
}

export function CardFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex items-center pt-4 border-t border-border/60", className)}
      {...props}
    />
  )
}
