"use client";

import { m } from "framer-motion";
import Link from "next/link";

export default function Services() {
  const cards = [
    {
      num: "01",
      title: "Custom AI Agents",
      desc: "Autonomous systems that do real work. We build AI agents that handle complex, repeatable tasks — research, outreach, operations, data processing — without human intervention. You define the objective. The agent executes."
    },
    {
      num: "02",
      title: "AI Workflow Automation",
      desc: "We map your most expensive manual processes and replace them with intelligent, automated pipelines. Less overhead. Faster execution. Compounding operational returns over time."
    },
    {
      num: "03",
      title: "LLM Integration",
      desc: "Claude, GPT-4o, Gemini, open-source — we integrate large language models into your existing software stack. Your product gets AI capabilities without a ground-up rebuild."
    },
    {
      num: "04",
      title: "AI Strategy Consulting",
      desc: "Before you build, you need a plan. We identify where AI creates real leverage in your business, architect the right approach, and help you avoid the expensive mistakes that kill AI projects."
    }
  ];

  return (
    <section id="services" className="bg-[#0A0A0A] py-[160px]">
      <div className="container">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row items-baseline mb-[80px]">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0 mb-[24px] md:mb-0"
          >
            <span style={{ fontFamily: "var(--font-jetbrains-mono)" }} className="text-[10px] text-[#444] tracking-[0.15em] uppercase">
              [ 01 WHAT WE BUILD ]
            </span>
          </m.div>

          <m.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-grow border-b border-[#1E1E1E] mx-0 md:mx-[32px] mb-[4px] self-end hidden md:block"
          />

          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-left md:text-right"
          >
            <span style={{ fontFamily: "var(--font-bebas-neue)" }} className="block text-[clamp(3rem,5.5vw,5rem)] text-[#F5F5F0] leading-[0.9]">
              AI SYSTEMS.
            </span>
            <span style={{ fontFamily: "var(--font-bebas-neue)" }} className="block text-[clamp(3rem,5.5vw,5rem)] text-[#F5F5F0] leading-[0.9]">
              BUILT FOR SCALE.
            </span>
          </m.div>
        </div>

        {/* SERVICE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#1E1E1E]">
          {cards.map((card, index) => (
            <m.div
              key={card.num}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className={`group relative p-[32px] md:p-[56px_48px] min-h-[320px] bg-transparent hover:bg-[#0D0D0D] transition-colors duration-200 border-[#1E1E1E] ${
                index === 0 ? "md:border-r md:border-b border-b" : 
                index === 1 ? "md:border-b border-b" : 
                index === 2 ? "md:border-r border-b md:border-b-0" : 
                ""
              }`}
            >
              <div style={{ fontFamily: "var(--font-jetbrains-mono)" }} className="text-[10px] text-[#333] tracking-[0.1em]">
                {card.num}
              </div>
              <h3 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 500 }} className="text-[22px] text-[#F5F5F0] mt-[28px] leading-[1.2]">
                {card.title}
              </h3>
              <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 400 }} className="text-[14px] text-[#666] leading-[1.8] mt-[16px] max-w-[420px] pb-[40px]">
                {card.desc}
              </p>
              <div className="absolute bottom-[48px] left-[48px] right-[48px] hidden md:block">
                <span 
                  style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 400 }} 
                  className="text-[14px] text-[#333] group-hover:text-[#F5F5F0] group-hover:translate-x-[6px] transition-all duration-200 inline-block"
                >
                  →
                </span>
              </div>
            </m.div>
          ))}
        </div>

        {/* BOTTOM STATEMENT */}
        <div className="mt-[80px] w-full border-t border-[#1E1E1E] pt-[48px] flex flex-col md:flex-row items-start md:items-center justify-between gap-[32px]">
          <p style={{ fontFamily: "var(--font-dm-sans)", fontStyle: "italic", fontWeight: 400 }} className="text-[20px] text-[#555] max-w-[640px]">
            We don&apos;t add AI as a feature. We build systems where AI is the foundation.
          </p>
          <Link
            href="#contact"
            style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 400 }}
            className="flex-shrink-0 h-[44px] px-[28px] flex items-center justify-center bg-transparent text-[#666] border border-[#333] text-[15px] hover:border-[#F5F5F0] hover:text-[#F5F5F0] transition-colors duration-200"
          >
            Start a Project →
          </Link>
        </div>

      </div>
    </section>
  );
}
