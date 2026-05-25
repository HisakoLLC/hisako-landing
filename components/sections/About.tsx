"use client";

import { m } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="hs-section hs-section-dark" aria-label="About Hisako">
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
          <h2 className="hs-about-headline">We are builders.</h2>
          <p className="hs-about-body">
            Hisako is a B2B AI automation agency based in Nairobi, operating globally. We build autonomous pipelines that replace the manual operations holding businesses back — using n8n, Make, custom code, and large language models.
          </p>
          <p className="hs-about-body" style={{ marginTop: "14px" }}>
            The agency sharpens our execution. The products prove our architecture. Both make us better at what we do.
          </p>
          
          <div style={{ marginTop: "32px" }}>
            <div className="hs-principle">
              <h3 className="hs-principle-label">Precision</h3>
              <div className="hs-principle-body">We design before we build. Architecture decisions made early save months later.</div>
            </div>
            <div className="hs-principle">
              <h3 className="hs-principle-label">Velocity</h3>
              <div className="hs-principle-body">Working pipelines in days, not months. We move fast, test in production, and iterate based on what the data shows.</div>
            </div>
            <div className="hs-principle">
              <h3 className="hs-principle-label">Ownership</h3>
              <div className="hs-principle-body">We treat client systems like our own. Because we know what it means to own what you ship.</div>
            </div>
          </div>
        </m.div>

      </div>
    </section>
  );
}
