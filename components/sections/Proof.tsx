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
        <div style={{ color: "#F5F5F0" }}>PIPELINES</div>
        <div style={{ color: "#F5F5F0" }}>WE&apos;VE</div>
        <div style={{ color: "#3A3A3A" }}>SHIPPED.</div>
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
          <div className="hs-overline">[ BUILT IN PRODUCTION ]</div>
          <p className="hs-proof-body">
            Every pipeline we sell, we&apos;ve built a version of ourselves. We don&apos;t propose automations from a slide deck — we prototype fast, show you working flows, and deploy into your real stack.
          </p>
          <p className="hs-proof-highlight">
            That&apos;s the difference between an automation agency that quotes and one that ships.
          </p>
        </m.div>
        
        <m.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="hs-proof-right"
        >
          <div className="hs-cap-point">
            <div className="hs-cap-tag">LEAD GENERATION</div>
            <h3 className="hs-cap-title">Outreach Pipelines Running in Production</h3>
            <div className="hs-cap-body">Automated prospect research, qualification scoring, and personalised outreach sequences — live across multiple client stacks.</div>
          </div>
          <div className="hs-cap-point">
            <div className="hs-cap-tag">OPS AUTOMATION</div>
            <h3 className="hs-cap-title">Internal Workflows Across CRM, Email & Admin</h3>
            <div className="hs-cap-body">Data sync, reporting automation, task assignment, and document processing pipelines built and maintained in n8n and Make.</div>
          </div>
          <div className="hs-cap-point">
            <div className="hs-cap-tag">CUSTOM AI PIPELINES</div>
            <h3 className="hs-cap-title">LLM-Powered Logic in Real Business Workflows</h3>
            <div className="hs-cap-body">Claude, GPT-4o, and open-source models embedded inside operational pipelines — not as chatbots, but as decision-making layers.</div>
          </div>
        </m.div>
      </div>
      
      <div className="hs-provider-strip">
        <span className="hs-provider-label">WE BUILD WITH</span>
        <div className="hs-badges">
          <div className="hs-badge">N8N</div>
          <div className="hs-badge">MAKE</div>
          <div className="hs-badge">CLAUDE</div>
          <div className="hs-badge">GPT-4O</div>
          <div className="hs-badge">PYTHON</div>
        </div>
      </div>

    </section>
  );
}
