"use client";

import { m } from "framer-motion";

export default function Proof() {
  return (
    <section id="work" className="hs-section" aria-label="Proof of Work">
      
      <div className="hs-mono-label" style={{ marginBottom: "20px" }}>
        [ 03&nbsp;&nbsp;PROOF OF WORK ]
      </div>
      
      <m.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ fontFamily: "var(--font-bebas-neue), sans-serif", fontSize: "46px", lineHeight: 0.9 }}
      >
        <div style={{ color: "#F5F5F0" }}>WE BUILD.</div>
        <div style={{ color: "#F5F5F0" }}>WE SHIP.</div>
        <div style={{ color: "#3A3A3A" }}>WE OWN IT.</div>
      </m.h2>
      
      <m.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ width: "100%", height: "1px", background: "#1E1E1E", marginTop: "32px", transformOrigin: "left" }}
      />
      
      <div className="hs-proof-block">
        <m.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="hs-proof-left"
        >
          <div className="hs-overline">[ BUILT BY BUILDERS ]</div>
          <p className="hs-proof-body">
            We don&apos;t just consult on AI — we build and operate our own AI-powered products. VendoFlow, our retail operating system, is built on the same architecture we deploy for clients. When we recommend an approach, it&apos;s because we&apos;ve shipped it ourselves.
          </p>
          <p className="hs-proof-highlight">
            That&apos;s the difference between an agency that talks about AI and one that lives in it.
          </p>
        </m.div>
        
        <m.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="hs-proof-right"
        >
          <div className="hs-cap-point">
            <div className="hs-cap-tag">AI Agent Systems</div>
            <h3 className="hs-cap-title">Conversational & Autonomous Agents</h3>
            <div className="hs-cap-body">Intake agents, triage systems, and autonomous workflow agents — built, tested, and shipped.</div>
          </div>
          <div className="hs-cap-point">
            <div className="hs-cap-tag">LLM-Powered Products</div>
            <h3 className="hs-cap-title">Multi-Tenant SaaS with AI Layers</h3>
            <div className="hs-cap-body">Embedded AI across analytics, automation, and intelligence in production SaaS platforms.</div>
          </div>
          <div className="hs-cap-point">
            <div className="hs-cap-tag">End-to-End Delivery</div>
            <h3 className="hs-cap-title">Architecture to Production</h3>
            <div className="hs-cap-body">We own the full stack: system design, engineering, AI integration, and deployment.</div>
          </div>
        </m.div>
      </div>
      
      <div className="hs-provider-strip">
        <span className="hs-provider-label">BUILT WITH</span>
        <div className="hs-badges">
          <div className="hs-badge">CLAUDE</div>
          <div className="hs-badge">GPT-4O</div>
          <div className="hs-badge">GEMINI</div>
          <div className="hs-badge">OPEN SOURCE</div>
        </div>
      </div>

    </section>
  );
}
