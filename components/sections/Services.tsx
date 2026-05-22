"use client";

import { useRef, useState } from "react";
import { m, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import { ScanLine } from "@/components/ui/ScanLine";

const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const dmSans = DM_Sans({ weight: ["400", "500"], subsets: ["latin"] });

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

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="services" className="bg-[#000000] pt-24 pb-12 relative overflow-hidden" ref={ref}>
      <ScanLine />
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes pulse-ring {
          0% { width: 0; height: 0; opacity: 0.25; }
          100% { width: 80px; height: 80px; opacity: 0; }
        }
        .animate-pulse-ring {
          animation: pulse-ring 500ms ease-out forwards;
        }
      `}} />

      {/* Header */}
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-6">
          <m.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-[10px] text-[#666666] tracking-[0.1em] uppercase">
              [ 01 WHAT WE BUILD ]
            </span>
          </m.div>

          <div className="flex flex-col text-left md:text-right">
            <div className="overflow-hidden pb-1 -mb-1">
              <m.h2
                initial={{ y: 80 }}
                animate={isInView ? { y: 0 } : { y: 80 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`${bebasNeue.className} text-[clamp(3rem,6vw,5rem)] leading-[0.92] text-[#F5F5F0]`}
              >
                AI Systems.
              </m.h2>
            </div>
            <div className="overflow-hidden pb-1 -mb-1">
              <m.h2
                initial={{ y: 80 }}
                animate={isInView ? { y: 0 } : { y: 80 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className={`${bebasNeue.className} text-[clamp(3rem,6vw,5rem)] leading-[0.92] text-[#F5F5F0] inline-block`}
                style={{ transform: 'skewX(-2deg)' }}
              >
                Built for Scale.
              </m.h2>
            </div>
          </div>
        </div>

        <m.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="h-[1px] w-full bg-[#2A2A2A] origin-left"
        />
      </div>

      {/* Lummi Image Block */}
      <m.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full h-[280px] relative mt-12 bg-[#111111] flex items-center justify-center"
      >
        <span className="font-mono text-[10px] text-[#333333] tracking-[0.1em] absolute z-0">
          [ IMAGE ]
        </span>
        <Image
          src="/lummi-ai-technology.png"
          alt="Dark server room neural network technology"
          fill
          className="object-cover relative z-10"
          style={{ filter: "grayscale(20%) contrast(1.08)" }}
        />
        <div 
          className="absolute inset-0 z-20 pointer-events-none"
          style={{ background: "linear-gradient(to right, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0.2) 100%)" }}
        />
      </m.div>

      {/* Services Grid */}
      <div className="container relative z-10 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {cards.map((card, i) => (
            <ServiceCard key={card.num} card={card} index={i} isInView={isInView} />
          ))}
        </div>
      </div>

      {/* Bottom Panel */}
      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="w-full bg-[#0D0D0D] border-t border-b border-[#2A2A2A] py-[48px] px-[24px] md:px-[80px] mt-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
      >
        <h3 
          className={`${bebasNeue.className} text-[28px] text-[#F5F5F0] max-w-[600px] leading-tight`}
          style={{ fontStyle: 'italic' }}
        >
          We don&apos;t add AI as a feature. We build systems where AI is the foundation.
        </h3>
        <Link
          href="#contact"
          className={`${dmSans.className} shrink-0 inline-flex items-center justify-center h-[44px] px-[28px] bg-[#F5F5F0] text-[#0A0A0A] font-medium text-[13px] uppercase tracking-wider hover:bg-transparent hover:text-[#F5F5F0] border border-transparent hover:border-[#F5F5F0] transition-colors duration-200`}
        >
          Start a Project →
        </Link>
      </m.div>
    </section>
  );
}

function ServiceCard({ card, index, isInView }: { card: { num: string; title: string; desc: string }, index: number, isInView: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  const [pulseKey, setPulseKey] = useState(0);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setPulseKey(prev => prev + 1); // Trigger animation on every enter
  };

  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative border border-[#2A2A2A] p-[40px] px-[36px] min-h-[280px] flex flex-col -mt-[1px] md:-ml-[1px] hover:border-[#3A3A3A] hover:-translate-y-[2px] transition-all duration-200 hover:z-10 bg-transparent"
    >
      {/* Pulse Animation container */}
      <div className="relative mb-[20px] w-fit">
        <span className="font-mono text-[10px] text-[#444444] tracking-[0.1em] relative z-10 block bg-[#000000] leading-none">
          {card.num}
        </span>
        {/* Pulse ring */}
        <div 
          key={pulseKey}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#F5F5F0] pointer-events-none ${isHovered ? 'animate-pulse-ring' : 'opacity-0'}`} 
        />
      </div>

      <h3 className={`${dmSans.className} font-medium text-[22px] text-[#F5F5F0]`}>
        {card.title}
      </h3>
      
      <p className={`${dmSans.className} font-normal text-[15px] text-[#777777] leading-[1.7] mt-[12px] mb-[48px]`}>
        {card.desc}
      </p>

      <div className="absolute bottom-[36px] left-[36px] right-[36px]">
        <div className="h-[1px] w-full bg-[#1E1E1E]" />
        <div className="mt-[16px] text-[15px] text-[#444444] opacity-0 -translate-x-[8px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 flex items-center">
          <span className={`${dmSans.className}`}>→</span>
        </div>
      </div>
    </m.div>
  );
}
