"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { m, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = ["hero", "services", "process", "work", "about", "contact"];
      let currentSection = "";
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 h-[64px] z-[100] transition-all duration-300 ease-in-out ${
          scrolled ? "bg-[rgba(10,10,10,0.92)] backdrop-blur-[16px] border-b border-[#1E1E1E]" : "bg-transparent border-b-transparent"
        }`}
      >
        <div className="container h-full flex items-center justify-between">
          
          {/* LEFT */}
          <div className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" height="22" alt="Hisako" className="h-[22px] w-auto" />
            <span style={{ fontFamily: "var(--font-jetbrains-mono)" }} className="text-[11px] text-[#F5F5F0] tracking-[0.2em] ml-[10px]">
              HISAKO
            </span>
            <div className="w-[1px] h-[14px] bg-[#2A2A2A] mx-[12px]"></div>
            <span style={{ fontFamily: "var(--font-jetbrains-mono)" }} className="text-[9px] text-[#555] tracking-[0.15em]">
              AI AGENCY
            </span>
          </div>

          {/* RIGHT (Desktop) */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center gap-[40px]">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[12px] uppercase tracking-[0.08em] transition-colors duration-150 ${
                    activeSection === link.href.substring(1) ? "text-[#F5F5F0]" : "text-[#666] hover:text-[#F5F5F0]"
                  }`}
                  style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 400 }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <Link
              href="#contact"
              className="ml-[32px] h-[36px] px-[20px] bg-[#E8400C] text-[#F5F5F0] text-[11px] uppercase tracking-[0.1em] flex items-center justify-center hover:bg-[#C73509] transition-colors duration-150"
              style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 500 }}
            >
              Start a Project
            </Link>
          </div>

          {/* MOBILE HAMBURGER */}
          <button 
            className="md:hidden flex flex-col gap-[5px] justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-[24px] h-[1px] bg-[#F5F5F0]"></div>
            <div className="w-[24px] h-[1px] bg-[#F5F5F0]"></div>
            <div className="w-[24px] h-[1px] bg-[#F5F5F0]"></div>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] bg-[#0A0A0A] flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[32px] text-[#F5F5F0]"
                  style={{ fontFamily: "var(--font-bebas-neue)" }}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-8 text-[32px] text-[#E8400C]"
                style={{ fontFamily: "var(--font-bebas-neue)" }}
              >
                START A PROJECT
              </Link>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
