"use client";

import { useRef } from "react";
import { m, useInView } from "framer-motion";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import { ScanLine } from "@/components/ui/ScanLine";

const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const dmSans = DM_Sans({ weight: ["400", "500"], subsets: ["latin"] });

const steps = [
  {
    num: "01",
    title: "DISCOVER",
    desc: "We audit your operations and map where AI creates real leverage. No fluff — just honest analysis of what's worth building and what isn't.",
  },
  {
    num: "02",
    title: "ARCHITECT",
    desc: "We design the system before writing a line of code. Models, data flows, integrations, APIs, infrastructure. The blueprint that prevents expensive rebuilds.",
  },
  {
    num: "03",
    title: "BUILD",
    desc: "We build, test, and iterate fast. Working AI systems delivered in weeks, not quarters. You see progress from day one.",
  },
  {
    num: "04",
    title: "DEPLOY & EVOLVE",
    desc: "We ship to production. Then we stay. AI systems compound with use — we monitor, retrain, and evolve the system as your business grows.",
  },
];

export function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="process" className="bg-[#080808] py-[128px] relative overflow-hidden" ref={ref}>
      <ScanLine />
      <div className="container relative z-10">
        
        {/* Header */}
        <div className="flex flex-col gap-6">
          <m.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-[10px] text-[#666666] uppercase tracking-widest">
              [ 02 HOW WE WORK ]
            </span>
          </m.div>

          <div className="flex flex-col">
            <div className="overflow-hidden pb-1 -mb-1">
              <m.h2
                initial={{ y: 80 }}
                animate={isInView ? { y: 0 } : { y: 80 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`${bebasNeue.className} text-[clamp(3rem,6vw,5rem)] leading-[0.92] text-[#F5F5F0]`}
              >
                From Brief
              </m.h2>
            </div>
            <div className="overflow-hidden pb-1 -mb-1 flex items-center flex-wrap">
              <m.h2
                initial={{ y: 80 }}
                animate={isInView ? { y: 0 } : { y: 80 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className={`${bebasNeue.className} text-[clamp(3rem,6vw,5rem)] leading-[0.92] text-[#F5F5F0] flex items-center flex-wrap`}
              >
                to Deployed.
                <span 
                  className="font-mono text-[11px] text-[#555555] ml-[16px] tracking-normal inline-block" 
                  style={{ fontFamily: '"JetBrains Mono", monospace', verticalAlign: 'middle', marginBottom: '0.2em' }}
                >
                  [ end-to-end ]
                </span>
              </m.h2>
            </div>
          </div>

          <m.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`${dmSans.className} text-[16px] text-[#666666] max-w-[480px] mt-2`}
          >
            Four phases. No surprises. Working AI systems in weeks.
          </m.p>
        </div>

        {/* Process Steps */}
        <div className="relative mt-[64px]">
          
          {/* Connecting Line (Desktop) */}
          <m.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
            className="hidden md:block absolute top-[40px] left-0 right-0 h-[1px] bg-[#1E1E1E] origin-left -z-10"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-y-[48px] md:gap-y-0 relative z-10">
            {steps.map((step, i) => {
              const paddingClass = 
                i === 0 ? "md:pr-[40px]" : 
                i === steps.length - 1 ? "md:pl-[40px]" : 
                "md:px-[40px]";
                
              return (
                <m.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.12 }}
                  className={`flex flex-col relative border-b md:border-b-0 md:border-r border-[#2A2A2A] last:border-b-0 md:last:border-r-0 pb-[32px] md:pb-0 ${paddingClass}`}
                >
                  <div className={`${bebasNeue.className} text-[80px] text-[#1A1A1A] leading-none mb-[24px]`}>
                    {step.num}
                  </div>
                  <h3 className={`${dmSans.className} font-medium text-[18px] text-[#F5F5F0]`}>
                    {step.title}
                  </h3>
                  <p className={`${dmSans.className} font-normal text-[14px] text-[#666666] leading-[1.7] mt-[10px] flex-1`}>
                    {step.desc}
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="mt-[24px] h-[2px] w-full bg-[#1A1A1A] relative">
                    <m.div
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                      transition={{ duration: 0.6, delay: 1.0 + i * 0.15, ease: "easeInOut" }}
                      className="absolute inset-0 bg-[#F5F5F0] origin-left"
                    />
                  </div>
                </m.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
