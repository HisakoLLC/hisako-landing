"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="hs-footer">
      <div className="hs-footer-grid">
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <line x1="12" y1="2" x2="12" y2="22" stroke="#F5F5F0" strokeWidth="2.2"/>
              <line x1="2" y1="7" x2="22" y2="17" stroke="#F5F5F0" strokeWidth="2.2"/>
              <line x1="2" y1="17" x2="22" y2="7" stroke="#F5F5F0" strokeWidth="2.2"/>
            </svg>
            <span className="hs-footer-brand">HISAKO</span>
          </div>
          <div className="hs-footer-tagline">AI Agency — Nairobi, Kenya</div>
        </div>
        
        <nav className="hs-footer-links" aria-label="Footer navigation">
          <Link href="/#services" className="hs-footer-link" style={{ textDecoration: 'none' }}>Services</Link>
          <Link href="/#process" className="hs-footer-link" style={{ textDecoration: 'none' }}>Process</Link>
          <Link href="/#work" className="hs-footer-link" style={{ textDecoration: 'none' }}>Work</Link>
          <Link href="/#about" className="hs-footer-link" style={{ textDecoration: 'none' }}>About</Link>
          <Link href="/#contact" className="hs-footer-link" style={{ textDecoration: 'none' }}>Contact</Link>
          <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Link href="/terms" className="hs-footer-link" style={{ textDecoration: 'none' }}>Terms of Service</Link>
            <Link href="/privacy" className="hs-footer-link" style={{ textDecoration: 'none' }}>Privacy Policy</Link>
          </div>
        </nav>
        
        <div className="hs-footer-copy">
          © 2026 Hisako Technologies Limited.<br/>Nairobi, Kenya.
        </div>
      </div>
      <div className="hs-footer-strip">AI AGENTS · WORKFLOW AUTOMATION · LLM INTEGRATION · HISAKO ·</div>
    </footer>
  );
}
