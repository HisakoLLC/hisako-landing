"use client";

import { m } from "framer-motion";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Discover",
      desc: "We audit your operations and map where AI creates real leverage. Honest analysis of what's worth building."
    },
    {
      num: "02",
      title: "Architect",
      desc: "We design the system before writing a line of code. Models, data flows, integrations. The blueprint that prevents expensive rebuilds."
    },
    {
      num: "03",
      title: "Build",
      desc: "We build, test, and iterate fast. Working AI systems delivered in weeks, not quarters. You see progress from day one."
    },
    {
      num: "04",
      title: "Deploy & Evolve",
      desc: "We ship to production. Then we stay. AI systems compound with use — we monitor, retrain, and evolve as your business grows."
    }
  ];

  return (
    <section id="process" className="hs-section hs-section-dark">
      
      <div className="hs-mono-label" style={{ marginBottom: "20px" }}>
        [ 02&nbsp;&nbsp;HOW WE WORK ]
      </div>
      
      <m.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ fontFamily: "var(--font-bebas-neue), sans-serif", fontSize: "46px", lineHeight: 0.9, color: "#F5F5F0" }}
      >
        FROM BRIEF<br/>
        TO DEPLOYED. 
        <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "11px", color: "#444", verticalAlign: "middle", marginLeft: "12px" }}>
          [ end-to-end ]
        </span>
      </m.div>
      
      <p style={{ fontSize: "14px", color: "#555", marginTop: "16px", maxWidth: "380px", fontFamily: "var(--font-dm-sans), sans-serif" }}>
        Four phases. No surprises. Working AI systems in weeks.
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
              <div className="hs-step-name">{step.title}</div>
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
