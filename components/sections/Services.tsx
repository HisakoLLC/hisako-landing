"use client";

import { m } from "framer-motion";

export default function Services() {
  const services = [
    {
      num: "01",
      title: "Custom AI Agents",
      desc: "Autonomous systems that do real work. We build AI agents that handle complex, repeatable tasks — research, outreach, operations, data processing — without human intervention."
    },
    {
      num: "02",
      title: "AI Workflow Automation",
      desc: "We map your most expensive manual processes and replace them with intelligent, automated pipelines. Less overhead. Faster execution. Compounding operational returns."
    },
    {
      num: "03",
      title: "LLM Integration",
      desc: "Claude, GPT-4o, Gemini, open-source — we integrate large language models into your existing software stack. Your product gets AI capabilities without a ground-up rebuild."
    },
    {
      num: "04",
      title: "AI Strategy Consulting",
      desc: "Before you build, you need a plan. We identify where AI creates real leverage in your business, architect the right approach, and help you avoid the expensive mistakes."
    }
  ];

  return (
    <section id="services" className="hs-section" aria-label="AI Services">
      
      <div className="hs-section-hdr">
        <div className="hs-section-hdr-left">
          <div className="hs-mono-label">[ 01&nbsp;&nbsp;WHAT WE BUILD ]</div>
        </div>
        <m.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hs-hdr-rule" 
        />
        <div className="hs-section-hdr-right">
          <m.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="hs-section-headline"
          >
            AI SYSTEMS.<br/>BUILT FOR SCALE.
          </m.h2>
        </div>
      </div>

      <div className="hs-card-grid">
        {services.map((service, i) => (
          <m.div 
            key={service.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="hs-card"
          >
            <div className="hs-card-num">{service.num}</div>
            <h3 className="hs-card-name">{service.title}</h3>
            <p className="hs-card-desc">{service.desc}</p>
            <div className="hs-card-arrow">→</div>
          </m.div>
        ))}
      </div>

      <m.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ borderTop: '1px solid #1E1E1E', marginTop: '56px', paddingTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}
      >
        <p style={{ fontSize: '17px', fontStyle: 'italic', color: '#555', maxWidth: '560px', lineHeight: '1.6', fontFamily: "var(--font-dm-sans), sans-serif" }}>
          &quot;We don&apos;t add AI as a feature. We build systems where AI is the foundation.&quot;
        </p>
        <button 
          className="hs-btn-ghost" 
          style={{ whiteSpace: 'nowrap' }}
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          Start a Project →
        </button>
      </m.div>

    </section>
  );
}
