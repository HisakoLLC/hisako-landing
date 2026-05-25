"use client";

import { m, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [img1Error, setImg1Error] = useState(false);
  const [img2Error, setImg2Error] = useState(false);

  const fadeUp = (y: number, delay: number, duration: number) => ({
    initial: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: shouldReduceMotion ? { duration: 0 } : { duration, delay, ease: "easeOut" as const }
  });

  const scaleRight = (delay: number, duration: number) => ({
    initial: shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 },
    animate: { scaleX: 1 },
    transition: shouldReduceMotion ? { duration: 0 } : { duration, delay, ease: "easeOut" as const }
  });

  const renderDots = () => (
    <div className="hs-dot-grid">
      {Array.from({ length: 40 }).map((_, i) => (
        <div key={i} className="hs-dot-item" />
      ))}
    </div>
  );

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        #hero.hs-hero-new {
          min-height: 100svh;
          background: #FFFFFF;
          padding-top: 184px;
          padding-bottom: 80px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
        }
        .hs-hero-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 80px;
          width: 100%;
          flex: 1;
        }
        .hs-hero-meta-new {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 64px;
        }
        .hs-headline-block {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: clamp(3.8rem, 7.5vw, 7.2rem);
          line-height: 0.90;
          color: #0A0A0A;
          margin: 0;
        }
        .hs-headline-line {
          display: block;
        }
        .hs-sub-copy {
          font-family: var(--font-dm-sans), sans-serif;
          font-weight: 400;
          font-size: 16px;
          color: #666;
          line-height: 1.8;
          max-width: 520px;
          margin-top: 32px;
        }
        .hs-hero-rule {
          width: 100%;
          height: 1px;
          background: #E5E5E5;
          margin-top: 48px;
          transform-origin: left;
        }
        .hs-screenshot-block {
          margin-top: 48px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1px;
          background: #E5E5E5;
          border: 1px solid #E5E5E5;
        }
        .hs-screenshot-panel {
          aspect-ratio: 16 / 9;
          position: relative;
          overflow: hidden;
          background: #F5F5F5;
        }
        .hs-panel-fallback {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          z-index: 1;
        }
        .hs-dot-grid {
          display: grid;
          grid-template-columns: repeat(8, 2px);
          grid-template-rows: repeat(5, 2px);
          gap: 8px;
        }
        .hs-dot-item {
          width: 2px;
          height: 2px;
          border-radius: 50%;
          background: #E5E5E5;
        }
        .hs-panel-label {
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 9px;
          color: #CCC;
          letter-spacing: 0.15em;
        }
        .hs-panel-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.25) 100%);
          z-index: 2;
          pointer-events: none;
        }
        .hs-panel-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 56px;
          background: linear-gradient(to top, rgba(255,255,255,0.9) 0%, transparent 100%);
          z-index: 3;
          pointer-events: none;
        }
        .hs-panel-bottom-text {
          position: absolute;
          bottom: 14px;
          left: 16px;
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 8px;
          color: #555;
          letter-spacing: 0.12em;
        }
        .hs-cta-block {
          margin-top: 40px;
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .hs-primary-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #0A0A0A;
          color: #FFFFFF;
          font-family: var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          height: 48px;
          padding: 0 32px;
          border: 1px solid transparent;
          text-decoration: none;
          transition: all 200ms ease;
          cursor: pointer;
        }
        .hs-primary-cta:hover {
          background: transparent;
          color: #0A0A0A;
          border: 1px solid #0A0A0A;
        }
        .hs-secondary-note {
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 9px;
          color: #999;
          letter-spacing: 0.1em;
        }
        .hs-ticker-new {
          width: 100%;
          border-top: 1px solid #E5E5E5;
          border-bottom: 1px solid #E5E5E5;
          padding: 12px 0;
          overflow: hidden;
          white-space: nowrap;
          margin-top: 80px;
        }
        .hs-ticker-inner-new {
          display: inline-block;
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 10px;
          color: #888;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          animation: ticker-new 38s linear infinite;
        }
        @keyframes ticker-new {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (max-width: 1024px) {
          .hs-hero-container {
            padding: 0 48px;
          }
        }
        @media (max-width: 768px) {
          .hs-hero-container {
            padding: 0 24px;
          }
          #hero.hs-hero-new {
            padding-top: 140px;
            padding-bottom: 40px;
          }
          .hs-headline-block {
            font-size: clamp(2.8rem, 9vw, 4rem);
            line-height: 0.92;
          }
          .hs-screenshot-block {
            grid-template-columns: 1fr;
          }
          .hs-screenshot-panel {
            aspect-ratio: 4 / 3;
          }
          .hs-cta-block {
            flex-direction: column;
            align-items: center;
          }
          .hs-primary-cta {
            width: 100%;
          }
          .hs-secondary-note {
            text-align: center;
          }
        }
      `}} />

      <section id="hero" className="hs-hero-new" aria-label="Hero">
        <div className="hs-hero-container">
          {/* Top Meta */}
          <m.div className="hs-hero-meta-new" {...fadeUp(16, 0.1, 0.5)}>
            <span className="hs-mono-label">[ HISAKO — AI AGENCY ]</span>
            <div className="hs-avail">
              <div className="hs-dot"></div>
              <span className="hs-avail-text">AVAILABLE FOR PROJECTS</span>
            </div>
          </m.div>

          {/* Headline */}
          <div className="hs-headline-block">
            <m.span className="hs-headline-line" {...fadeUp(56, 0.2, 0.55)}>WE REPLACE MANUAL</m.span>
            <m.span className="hs-headline-line" {...fadeUp(56, 0.31, 0.55)}>B2B OPERATIONS WITH</m.span>
            <m.span className="hs-headline-line" {...fadeUp(56, 0.42, 0.55)}>AUTONOMOUS AI</m.span>
            <m.span className="hs-headline-line" {...fadeUp(56, 0.53, 0.55)}>PIPELINES.</m.span>
          </div>

          {/* Sub-copy */}
          <m.p className="hs-sub-copy" {...fadeUp(20, 0.68, 0.5)}>
            We build end-to-end AI pipelines that eliminate the manual, repetitive work running your business operations. You define the outcome. The system handles the rest.
          </m.p>

          {/* Horizontal Rule */}
          <m.div className="hs-hero-rule" {...scaleRight(0.75, 0.7)} />

          {/* Screenshot Block */}
          <m.div className="hs-screenshot-block" {...fadeUp(32, 0.9, 0.6)}>
            {/* Panel 1 */}
            <div className="hs-screenshot-panel">
              {!img1Error ? (
                <Image 
                  src="/images/workflow-01.png"
                  alt="Workflow Canvas 1"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center", zIndex: 1 }}
                  onError={() => setImg1Error(true)}
                />
              ) : (
                <div className="hs-panel-fallback">
                  {renderDots()}
                  <span className="hs-panel-label">[ WORKFLOW CANVAS ]</span>
                </div>
              )}
              <div className="hs-panel-overlay" />
              <div className="hs-panel-bottom">
                <span className="hs-panel-bottom-text">LEAD QUALIFICATION PIPELINE</span>
              </div>
            </div>

            {/* Panel 2 */}
            <div className="hs-screenshot-panel">
              {!img2Error ? (
                <Image 
                  src="/images/workflow-02.png"
                  alt="Workflow Canvas 2"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center", zIndex: 1 }}
                  onError={() => setImg2Error(true)}
                />
              ) : (
                <div className="hs-panel-fallback">
                  {renderDots()}
                  <span className="hs-panel-label">[ AUTOMATION PIPELINE ]</span>
                </div>
              )}
              <div className="hs-panel-overlay" />
              <div className="hs-panel-bottom">
                <span className="hs-panel-bottom-text">CLIENT ONBOARDING AUTOMATION</span>
              </div>
            </div>
          </m.div>

          {/* CTA Block */}
          <m.div className="hs-cta-block" {...fadeUp(16, 1.05, 0.5)}>
            <a 
              href="#contact"
              className="hs-primary-cta"
            >
              Book a Free Strategy Call →
            </a>
            <span className="hs-secondary-note">
              No commitment. 30 minutes.
            </span>
          </m.div>
        </div>

        {/* Bottom Ticker */}
        <m.div className="hs-ticker-new" {...fadeUp(24, 1.15, 0.45)}>
          <div className="hs-ticker-inner-new">
            LEAD AUTOMATION · CLIENT ONBOARDING · SALES PIPELINES · OPS AUTOMATION · N8N · MAKE · LLM PIPELINES · ZERO MANUAL WORK · LEAD AUTOMATION · CLIENT ONBOARDING · SALES PIPELINES · OPS AUTOMATION · N8N · MAKE · LLM PIPELINES · ZERO MANUAL WORK · LEAD AUTOMATION · CLIENT ONBOARDING · SALES PIPELINES · OPS AUTOMATION · N8N · MAKE · LLM PIPELINES · ZERO MANUAL WORK · LEAD AUTOMATION · CLIENT ONBOARDING · SALES PIPELINES · OPS AUTOMATION · N8N · MAKE · LLM PIPELINES · ZERO MANUAL WORK · 
          </div>
        </m.div>
      </section>
    </>
  );
}
