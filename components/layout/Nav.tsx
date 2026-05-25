"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PopupModal } from "react-calendly";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const calendlyUrl = "https://calendly.com/hello-hisako/30min"; // TODO: replace with actual Calendly URL

  return (
    <>
      <nav className={`hs-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="hs-nav-left">
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <svg className="hs-logo" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="12" y1="2" x2="12" y2="22" stroke="#0A0A0A" strokeWidth="2.2"/>
              <line x1="2" y1="7" x2="22" y2="17" stroke="#0A0A0A" strokeWidth="2.2"/>
              <line x1="2" y1="17" x2="22" y2="7" stroke="#0A0A0A" strokeWidth="2.2"/>
            </svg>
            <span className="hs-brand">HISAKO</span>
            <div className="hs-divider"></div>
            <span className="hs-sub">AI AGENCY</span>
          </Link>
        </div>
        <div className="hs-nav-links">
          <Link href="/#services" className="hs-nav-link">What We Automate</Link>
          <Link href="/#process" className="hs-nav-link">How We Work</Link>
          <Link href="/#work" className="hs-nav-link">Our Work</Link>
          <Link href="/#about" className="hs-nav-link">About</Link>
          <Link href="/#contact" className="hs-nav-link">Contact</Link>
          <a 
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hs-cta-btn"
            style={{ textDecoration: 'none' }}
            onClick={(e) => {
              e.preventDefault();
              setIsCalendlyOpen(true);
            }}
          >
            Book a Call
          </a>
        </div>
      </nav>

      {mounted && typeof document !== "undefined" && (
        <PopupModal
          url={calendlyUrl}
          onModalClose={() => setIsCalendlyOpen(false)}
          open={isCalendlyOpen}
          rootElement={document.body}
        />
      )}
    </>
  );
}
