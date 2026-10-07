"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { label: "Capabilities", href: "/capabilities" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]

  // Track scroll position for subtle header state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-200 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-2xs"
          : "bg-background/90 backdrop-blur-xs border-b border-border/60"
      }`}
    >
      <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
        {/* Left: Hisako Logo with subtle scale feedback on hover */}
        <Link
          href="/"
          className="flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm py-1.5 group"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/icon.jpg"
            alt="Hisako"
            width={28}
            height={28}
            className="w-7 h-7 rounded-sm object-contain shrink-0 group-hover:opacity-90 transition-opacity"
            priority
          />
          <span className="font-heading font-bold text-lg text-foreground tracking-tight group-hover:text-primary transition-colors">
            Hisako
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-1 sm:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm px-3 py-1.5 rounded-sm transition-all relative ${
                    isActive
                      ? "text-foreground font-semibold bg-accent/40"
                      : "text-muted-foreground hover:text-foreground hover:bg-card/60"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Primary CTA */}
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center px-4 py-2 rounded-md bg-navy text-white text-sm font-medium hover:bg-navy-muted active:translate-y-px border border-navy-border transition-all shadow-2xs focus-visible:ring-2 focus-visible:ring-ring"
          >
            <span>Start a project</span>
            <span className="ml-1 inline-block transition-transform duration-150 group-hover:translate-x-0.5">
              &rarr;
            </span>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden flex items-center justify-center w-11 h-11 -mr-2 text-foreground hover:text-primary transition-colors cursor-pointer rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-16 bottom-0 bg-background/98 backdrop-blur-lg border-b border-border z-40 overflow-y-auto px-6 py-6 flex flex-col justify-between animate-in fade-in-50 duration-150">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between min-h-[48px] py-3 text-base transition-colors border-b border-border/40 ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="text-muted-foreground/60 text-xs font-mono">&rarr;</span>
                </Link>
              )
            })}
          </nav>

          <div className="pt-8 pb-6 space-y-4">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center w-full min-h-[48px] px-4 py-3 rounded-md bg-navy text-white text-base font-medium hover:bg-navy-muted active:translate-y-px border border-navy-border transition-all"
            >
              Start a project &rarr;
            </Link>

            <div className="text-center font-mono text-xs text-muted-foreground pt-2">
              Nairobi, Kenya
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
