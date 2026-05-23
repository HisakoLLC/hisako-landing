"use client";

import { m } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="hs-hero" aria-label="Hero">
      
      {/* Top Meta */}
      <div className="hs-hero-meta">
        <span className="hs-mono-label">[ HISAKO — AI AGENCY ]</span>
        <div className="hs-avail">
          <div className="hs-dot"></div>
          <span className="hs-avail-text">AVAILABLE FOR PROJECTS</span>
        </div>
      </div>

      {/* Main Content */}
      <m.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="hs-headline">
          ENGINEER<br/>
          YOUR<br/>
          WORLD.
        </h1>
        
        <div className="hs-rule"></div>
        
        <div className="hs-bottom-grid">
          
          <div className="hs-col hs-col-1">
            <p className="hs-body">
              Hisako is an AI agency that builds custom AI agents, automation workflows, and intelligent systems for startups and businesses operating globally.
            </p>
            <div className="hs-btns">
              <button 
                className="hs-btn-primary"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Start a Project →
              </button>
              <button 
                className="hs-btn-ghost"
                onClick={() => document.getElementById("process")?.scrollIntoView({ behavior: "smooth" })}
              >
                See How We Work
              </button>
            </div>
          </div>
          
          <div className="hs-col hs-col-2">
            <div className="hs-stat-val">End-to-End</div>
            <div className="hs-stat-lbl">Strategy to Deployment</div>
          </div>
          
          <div className="hs-col hs-col-3">
            <div className="hs-stat-val">AI-Native</div>
            <div className="hs-stat-lbl">Built for Scale from Day One</div>
          </div>
          
        </div>
      </m.div>

      {/* Bottom Ticker */}
      <m.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="hs-ticker"
      >
        <div className="hs-ticker-inner">
          AI AGENTS &nbsp;·&nbsp; WORKFLOW AUTOMATION &nbsp;·&nbsp; LLM INTEGRATION &nbsp;·&nbsp; AI STRATEGY &nbsp;·&nbsp; CUSTOM AI SYSTEMS &nbsp;·&nbsp; GLOBAL &nbsp;·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          AI AGENTS &nbsp;·&nbsp; WORKFLOW AUTOMATION &nbsp;·&nbsp; LLM INTEGRATION &nbsp;·&nbsp; AI STRATEGY &nbsp;·&nbsp; CUSTOM AI SYSTEMS &nbsp;·&nbsp; GLOBAL &nbsp;·&nbsp;
        </div>
      </m.div>

    </section>
  );
}
