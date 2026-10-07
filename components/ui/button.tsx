import * as React from "react"
import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center font-medium whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:translate-y-px rounded-md text-sm cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-[#1787d1] border border-primary/20 shadow-xs",
        navy:
          "bg-navy text-white hover:bg-navy-muted border border-navy-border shadow-xs",
        outline:
          "border border-border bg-background text-foreground hover:bg-card hover:border-border/80",
        secondary:
          "bg-card text-foreground border border-border hover:bg-muted hover:text-foreground",
        ghost:
          "text-foreground hover:bg-card hover:text-foreground",
        link:
          "text-primary underline-offset-4 hover:underline p-0 h-auto font-normal",
      },
      size: {
        default: "h-10 px-4 py-2 gap-2 text-sm",
        sm: "h-8 px-3 py-1.5 gap-1.5 text-xs font-medium rounded-sm",
        lg: "h-11 px-6 py-2.5 gap-2.5 text-sm font-semibold rounded-md",
        icon: "h-10 w-10 p-0 justify-center",
        "icon-sm": "h-8 w-8 p-0 justify-center rounded-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends ButtonPrimitive.Props,
    VariantProps<typeof buttonVariants> {}

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
