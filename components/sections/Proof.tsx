"use client";

import { useRef } from "react";
import { m, useInView } from "framer-motion";
import Image from "next/image";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import { ScanLine } from "@/components/ui/ScanLine";

const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const dmSans = DM_Sans({ weight: ["400", "500"], subsets: ["latin"] });

export function Proof() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="work" className="bg-[#000000] py-[128px] relative overflow-hidden" ref={ref}>
      <ScanLine />
      <div className="container relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-[48px]">
          <m.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6 }}
            className="mb-[24px]"
          >
            <span className="font-mono text-[10px] text-[#666666] tracking-[0.1em] uppercase">
              [ 03 PROOF OF WORK ]
            </span>
          </m.div>

          <div className="flex flex-col">
            {["We Build.", "We Ship.", "We Own It."].map((text, i) => (
              <div key={i} className="overflow-hidden pb-1 -mb-1">
                <m.h2
                  initial={{ y: 80 }}
                  animate={isInView ? { y: 0 } : { y: 80 }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className={`${bebasNeue.className} text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.9] ${i === 2 ? 'text-[#777777]' : 'text-[#F5F5F0]'}`}
                >
                  {text}
                </m.h2>
              </div>
            ))}
          </div>

          <m.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="h-[1px] w-full bg-[#2A2A2A] origin-left mt-[32px]"
          />
        </div>

        {/* PRIMARY PROOF BLOCK */}
        <div className="w-full flex flex-col md:flex-row border border-[#2A2A2A]">
          {/* Left Column (55%) */}
          <m.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="w-full md:w-[55%] p-[32px] md:p-[48px] flex flex-col"
          >
            <span className="font-mono text-[9px] text-[#555555] uppercase tracking-[0.1em] mb-[24px]">
              [ BUILT BY BUILDERS ]
            </span>
            <p className={`${dmSans.className} text-[16px] text-[#888888] leading-[1.8] max-w-[480px]`}>
              We don't just consult on AI — we build and operate our own AI-powered products. VendoFlow, our retail operating system, is built on the same architecture we deploy for clients. When we recommend an approach, it's because we've shipped it ourselves.
            </p>
            <p className={`${dmSans.className} font-medium text-[15px] text-[#F5F5F0] mt-[32px] leading-[1.6]`}>
              That's the difference between an agency that talks about AI and one that lives in it.
            </p>
          </m.div>

          {/* Right Column (45%) */}
          <m.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="w-full md:w-[45%] p-[32px] md:p-[48px] md:border-l border-[#2A2A2A] border-t md:border-t-0 flex flex-col"
          >
            {/* Point 1 */}
            <div className="pb-[28px] border-b border-[#1E1E1E]">
              <div className="font-mono text-[9px] text-[#555555] tracking-[0.15em] uppercase">
                AI AGENT SYSTEMS
              </div>
              <h3 className={`${dmSans.className} font-medium text-[17px] text-[#F5F5F0] mt-[8px]`}>
                Conversational & Autonomous Agents
              </h3>
              <p className={`${dmSans.className} font-normal text-[14px] text-[#666666] leading-[1.65] mt-[6px]`}>
                Intake agents, triage systems, and autonomous workflow agents — built, tested, and shipped.
              </p>
            </div>

            {/* Point 2 */}
            <div className="py-[28px] border-b border-[#1E1E1E]">
              <div className="font-mono text-[9px] text-[#555555] tracking-[0.15em] uppercase">
                LLM-POWERED PRODUCTS
              </div>
              <h3 className={`${dmSans.className} font-medium text-[17px] text-[#F5F5F0] mt-[8px]`}>
                Multi-Tenant SaaS with AI Layers
              </h3>
              <p className={`${dmSans.className} font-normal text-[14px] text-[#666666] leading-[1.65] mt-[6px]`}>
                Embedded AI across analytics, automation, and intelligence in production SaaS platforms.
              </p>
            </div>

            {/* Point 3 */}
            <div className="pt-[28px]">
              <div className="font-mono text-[9px] text-[#555555] tracking-[0.15em] uppercase">
                END-TO-END DELIVERY
              </div>
              <h3 className={`${dmSans.className} font-medium text-[17px] text-[#F5F5F0] mt-[8px]`}>
                Architecture to Production
              </h3>
              <p className={`${dmSans.className} font-normal text-[14px] text-[#666666] leading-[1.65] mt-[6px]`}>
                We own the full stack: system design, engineering, AI integration, and deployment.
              </p>
            </div>
          </m.div>
        </div>
      </div>

      {/* AI PROVIDER STRIP */}
      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="w-full bg-[#0D0D0D] border-y border-[#2A2A2A] py-[24px] px-[24px] md:px-[80px] mt-[64px] flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
      >
        <span className="font-mono text-[10px] text-[#444444] tracking-[0.2em] uppercase shrink-0">
          BUILT WITH
        </span>
        <div className="flex flex-wrap items-center gap-[8px]">
          {["CLAUDE", "GPT-4O", "GEMINI", "OPEN SOURCE"].map((badge) => (
            <div 
              key={badge}
              className="border border-[#2A2A2A] px-[14px] py-[6px] font-mono text-[11px] text-[#666666] tracking-[0.1em] uppercase hover:border-[#555555] hover:text-[#999999] transition-colors duration-200 cursor-default"
            >
              {badge}
            </div>
          ))}
        </div>
      </m.div>

      {/* LUMMI IMAGE BLOCK */}
      <m.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="w-full h-[320px] relative mt-[64px]"
      >
        <Image
          src="/lummi-ai-abstract.png"
          alt="Dark abstract technology futuristic minimal"
          fill
          className="object-cover relative z-10"
          style={{ filter: "grayscale(25%) contrast(1.1)" }}
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/45 z-20 pointer-events-none" />
      </m.div>

    </section>
  );
}
