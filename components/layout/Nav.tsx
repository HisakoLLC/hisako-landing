"use client";

import { useState, useEffect } from "react";
import { m, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <m.nav
        initial={{ backgroundColor: "rgba(10, 10, 10, 0)", borderBottomColor: "rgba(42, 42, 42, 0)" }}
        animate={{
          backgroundColor: scrolled ? "rgba(10, 10, 10, 0.85)" : "rgba(10, 10, 10, 0)",
          borderBottomColor: scrolled ? "rgba(42, 42, 42, 1)" : "rgba(42, 42, 42, 0)",
          backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
        }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
        className="fixed top-0 left-0 w-full h-[64px] z-[100] flex items-center justify-between px-6 border-b border-transparent"
      >
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Hisako Logo" width={28} height={28} priority className="h-[28px] w-auto" />
            <span className="font-mono text-[11px] tracking-[0.2em] text-[#ffffff]">HISAKO</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center">
          <div className="flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-mono text-[11px] uppercase tracking-widest text-[#888888] hover:text-[#eb3f25] transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link
            href="#contact"
            className="ml-6 min-w-[100px] h-[32px] inline-flex items-center justify-center bg-[#eb3f25] text-[#ffffff] font-sans font-medium text-[10px] uppercase tracking-[0.15em] hover:bg-transparent hover:text-[#eb3f25] border border-[#eb3f25] transition-colors duration-200"
          >
            Let&apos;s Talk
          </Link>
        </div>

        <button
          className="md:hidden text-[#ffffff]"
          onClick={() => setMobileMenuOpen(true)}
          aria-expanded={mobileMenuOpen}
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </button>
      </m.nav>

      {/* Mobile Menu */}
      <m.div
        initial={{ y: "-100%" }}
        animate={{ y: mobileMenuOpen ? "0%" : "-100%" }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed inset-0 z-[200] bg-[#000000] flex flex-col px-6 py-8"
      >
        <div className="flex justify-between items-center h-[64px] -mt-8 -mx-6 px-6 border-b border-[#161616]">
          <Link href="/" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
            <Image src="/logo.png" alt="Hisako Logo" width={28} height={28} priority className="h-[28px] w-auto" />
            <span className="font-mono text-[11px] tracking-[0.2em] text-[#ffffff]">HISAKO</span>
          </Link>
          <button
            className="text-[#ffffff]"
            onClick={() => setMobileMenuOpen(false)}
            aria-expanded={mobileMenuOpen}
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="flex flex-col gap-6 mt-12">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="uppercase font-display text-2xl text-[#ffffff] tracking-wider"
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-8">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center h-[48px] px-8 border border-[#ffffff] text-[#ffffff] text-[12px] uppercase tracking-widest hover:bg-[#ffffff] hover:text-[#000000] transition-colors duration-200"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      </m.div>
    </>
  );
}
