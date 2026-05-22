"use client";

import { m } from "framer-motion";

export default function Proof() {
  return (
    <section id="work" className="bg-[#0A0A0A] py-[160px]">
      <div className="container">
        
        {/* SECTION HEADER */}
        <div className="mb-[80px]">
          <div style={{ fontFamily: "var(--font-jetbrains-mono)" }} className="text-[10px] text-[#444] mb-[24px]">
            [ 03 PROOF OF WORK ]
          </div>
          <div style={{ fontFamily: "var(--font-bebas-neue)" }} className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.9]">
            <div className="text-[#F5F5F0]">WE BUILD.</div>
            <div className="text-[#F5F5F0]">WE SHIP.</div>
            <div className="text-[#3A3A3A]">WE OWN IT.</div>
          </div>
          <div className="w-full h-[1px] bg-[#1E1E1E] mt-[40px]" />
        </div>

        {/* PRIMARY PROOF BLOCK */}
        <div className="mt-[64px] border border-[#1E1E1E] flex flex-col md:flex-row overflow-hidden relative">
          
          {/* LEFT */}
          <m.div 
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-[55%] p-[32px] md:p-[56px_48px] bg-[#0A0A0A] relative z-10"
          >
            <div style={{ fontFamily: "var(--font-jetbrains-mono)" }} className="text-[9px] text-[#444] mb-[24px]">
              [ BUILT BY BUILDERS ]
            </div>
            <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 400 }} className="text-[15px] text-[#666] leading-[1.85] max-w-[460px]">
              We don&apos;t just consult on AI — we build and operate our own AI-powered products. VendoFlow, our retail operating system, is built on the same architecture we deploy for clients. When we recommend an approach, it&apos;s because we&apos;ve shipped it ourselves.
            </p>
            <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 400 }} className="text-[15px] text-[#999] mt-[28px]">
              That&apos;s the difference between an agency that talks about AI and one that lives in it.
            </p>
          </m.div>

          {/* RIGHT */}
          <m.div 
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-[45%] p-[32px] md:p-[56px_48px] border-t md:border-t-0 md:border-l border-[#1E1E1E] bg-[#0A0A0A] relative z-10"
          >
            {/* Point 1 */}
            <div className="pb-[28px] border-b border-[#111]">
              <div style={{ fontFamily: "var(--font-jetbrains-mono)" }} className="text-[9px] text-[#444] tracking-[0.15em]">AI AGENT SYSTEMS</div>
              <div style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 500 }} className="text-[16px] text-[#F5F5F0] mt-[8px]">Conversational & Autonomous Agents</div>
              <div style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 400 }} className="text-[13px] text-[#555] leading-[1.65] mt-[6px]">Intake agents, triage systems, and autonomous workflow agents — built, tested, and shipped.</div>
            </div>

            {/* Point 2 */}
            <div className="py-[28px] border-b border-[#111]">
              <div style={{ fontFamily: "var(--font-jetbrains-mono)" }} className="text-[9px] text-[#444] tracking-[0.15em]">LLM-POWERED PRODUCTS</div>
              <div style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 500 }} className="text-[16px] text-[#F5F5F0] mt-[8px]">Multi-Tenant SaaS with AI Layers</div>
              <div style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 400 }} className="text-[13px] text-[#555] leading-[1.65] mt-[6px]">Embedded AI across analytics, automation, and intelligence in production SaaS platforms.</div>
            </div>

            {/* Point 3 */}
            <div className="pt-[28px]">
              <div style={{ fontFamily: "var(--font-jetbrains-mono)" }} className="text-[9px] text-[#444] tracking-[0.15em]">END-TO-END DELIVERY</div>
              <div style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 500 }} className="text-[16px] text-[#F5F5F0] mt-[8px]">Architecture to Production</div>
              <div style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 400 }} className="text-[13px] text-[#555] leading-[1.65] mt-[6px]">We own the full stack: system design, engineering, AI integration, and deployment.</div>
            </div>
          </m.div>

        </div>

        {/* AI PROVIDER STRIP */}
        <div className="w-full border border-t-0 border-[#1E1E1E] bg-[#080808] p-[20px_24px] md:p-[20px_48px] flex flex-col md:flex-row items-start md:items-center justify-between gap-[20px]">
          <div style={{ fontFamily: "var(--font-jetbrains-mono)" }} className="text-[10px] text-[#333] tracking-[0.2em]">
            BUILT WITH
          </div>
          <div className="flex flex-row flex-wrap gap-[8px]">
            {["CLAUDE", "GPT-4O", "GEMINI", "OPEN SOURCE"].map((badge) => (
              <div 
                key={badge} 
                className="border border-[#1E1E1E] p-[5px_12px] hover:border-[#333] hover:text-[#666] transition-colors duration-150"
              >
                <span style={{ fontFamily: "var(--font-jetbrains-mono)" }} className="text-[10px] text-[#444] tracking-[0.08em] uppercase">
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
