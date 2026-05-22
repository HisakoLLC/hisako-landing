"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`hs-nav ${scrolled ? "scrolled" : ""}`}>
      <div className="hs-nav-left">
        <svg className="hs-logo" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="12" y1="2" x2="12" y2="22" stroke="#F5F5F0" strokeWidth="2.2"/>
          <line x1="2" y1="7" x2="22" y2="17" stroke="#F5F5F0" strokeWidth="2.2"/>
          <line x1="2" y1="17" x2="22" y2="7" stroke="#F5F5F0" strokeWidth="2.2"/>
        </svg>
        <span className="hs-brand">HISAKO</span>
        <div className="hs-divider"></div>
        <span className="hs-sub">AI AGENCY</span>
      </div>
      <div className="hs-nav-links">
        <a href="#services" className="hs-nav-link">Services</a>
        <a href="#process" className="hs-nav-link">Process</a>
        <a href="#work" className="hs-nav-link">Work</a>
        <a href="#about" className="hs-nav-link">About</a>
        <a href="#contact" className="hs-nav-link">Contact</a>
        <button className="hs-cta-btn" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
          Start a Project
        </button>
      </div>
    </nav>
  );
}
