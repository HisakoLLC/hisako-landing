"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function openCalendly() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (typeof window !== "undefined" && (window as any).Calendly) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ;(window as any).Calendly.initPopupWidget({
        url: "https://calendly.com/hello-hisako/30min",
      });
    }
  }

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
          <button
            onClick={openCalendly}
            style={{
              background: '#E8400C',
              color: '#FFFFFF',
              border: 'none',
              height: '36px',
              padding: '0 20px',
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontWeight: 500,
              fontSize: '11px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              marginLeft: '32px',
            }}
          >
            Book a Call
          </button>
        </div>
      </nav>
    </>
  );
}
