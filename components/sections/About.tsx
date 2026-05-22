"use client";

import { m } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="hs-section hs-section-dark">
      <div className="hs-about-grid">
        
        <m.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="hs-ghost-text">HISAKO</div>
          <div className="hs-ghost-sub">[ AI AGENCY · NAIROBI, KENYA ]</div>
        </m.div>
        
        <m.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="hs-mono-label">[ 04&nbsp;&nbsp;ABOUT ]</div>
          <div className="hs-about-headline">We are builders.</div>
          <p className="hs-about-body">
            Hisako is an AI agency and tech studio based in Nairobi, operating globally. We build custom AI systems for client businesses while simultaneously developing and owning our own AI-powered software products.
          </p>
          <p className="hs-about-body" style={{ marginTop: "14px" }}>
            The agency sharpens our execution. The products prove our architecture. Both make us better at what we do.
          </p>
          
          <div style={{ marginTop: "32px" }}>
            <div className="hs-principle">
              <div className="hs-principle-label">Precision</div>
              <div className="hs-principle-body">We design before we build. Architecture decisions made early save months later.</div>
            </div>
            <div className="hs-principle">
              <div className="hs-principle-label">Velocity</div>
              <div className="hs-principle-body">Working systems in weeks, not quarters. We move fast without breaking foundations.</div>
            </div>
            <div className="hs-principle">
              <div className="hs-principle-label">Ownership</div>
              <div className="hs-principle-body">We treat client systems like our own. Because we know what it means to own what you ship.</div>
            </div>
          </div>
        </m.div>

      </div>
    </section>
  );
}
