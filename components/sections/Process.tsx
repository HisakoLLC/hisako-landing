"use client";

import { m } from "framer-motion";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "MAP",
      desc: "We spend time inside your actual operations. We document every manual step, every tool, every handoff. We find exactly where automation creates the most leverage — and where it doesn't."
    },
    {
      num: "02",
      title: "DESIGN",
      desc: "We design the full pipeline before writing a single node. Every trigger, action, condition, and integration mapped out. You approve the blueprint before we build. No surprises, no scope creep."
    },
    {
      num: "03",
      title: "BUILD",
      desc: "We build in n8n, Make, or custom code — whatever fits your stack. Fast iteration. You see a working pipeline within days, not weeks. We test every edge case before handoff."
    },
    {
      num: "04",
      title: "RUN",
      desc: "We deploy, monitor, and maintain. Pipelines break when data changes — we stay on to catch it. Monthly reporting on what ran, what was saved, and what we're optimising next."
    }
  ];

  return (
    <section id="process" className="hs-section hs-section-dark" aria-label="How We Work">
      
      <div className="hs-mono-label" style={{ marginBottom: "20px" }}>
        [ 02&nbsp;&nbsp;HOW WE WORK ]
      </div>
      
      <m.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ fontFamily: "var(--font-bebas-neue), sans-serif", fontSize: "46px", lineHeight: 0.9, color: "#F5F5F0" }}
      >
        MAP.<br/>
        DESIGN.<br/>
        BUILD.<br/>
        RUN.
        <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "11px", color: "#444", verticalAlign: "middle", marginLeft: "12px" }}>
          [ 2–4 weeks to live ]
        </span>
      </m.h2>
      
      <p style={{ fontSize: "14px", color: "#555", marginTop: "16px", maxWidth: "380px", fontFamily: "var(--font-dm-sans), sans-serif" }}>
        Four phases. One outcome: your operations run without you.
      </p>
      
      <div className="hs-process-steps" style={{ marginTop: "48px" }}>
        {steps.map((step, i) => (
          <div key={step.num} className="hs-step">
            <m.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="hs-step-num">{step.num}</div>
              <h3 className="hs-step-name">{step.title}</h3>
              <div className="hs-step-desc">{step.desc}</div>
            </m.div>
            <div className="hs-step-bar-bg">
              <m.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
                className="hs-step-bar-fill" 
              />
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
