"use client";

import { m } from "framer-motion";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "DISCOVER",
      desc: "We audit your operations and map where AI creates real leverage. Honest analysis of what's worth building and what isn't."
    },
    {
      num: "02",
      title: "ARCHITECT",
      desc: "We design the system before writing a line of code. Models, data flows, integrations, APIs. The blueprint that prevents expensive rebuilds."
    },
    {
      num: "03",
      title: "BUILD",
      desc: "We build, test, and iterate fast. Working AI systems delivered in weeks, not quarters. You see progress from day one."
    },
    {
      num: "04",
      title: "DEPLOY & EVOLVE",
      desc: "We ship to production. Then we stay. AI systems compound with use — we monitor, retrain, and evolve the system as your business grows."
    }
  ];

  return (
    <section id="process" className="bg-[#080808] py-[160px]">
      <div className="container">
        
        {/* SECTION HEADER */}
        <div className="mb-[96px]">
          <div style={{ fontFamily: "var(--font-jetbrains-mono)" }} className="text-[10px] text-[#444] mb-[24px]">
            [ 02 HOW WE WORK ]
          </div>
          <div>
            <span style={{ fontFamily: "var(--font-bebas-neue)" }} className="block text-[clamp(3rem,5.5vw,5rem)] text-[#F5F5F0] leading-[0.9]">
              From Brief
            </span>
            <div className="flex flex-row items-center flex-wrap mt-[4px]">
              <span style={{ fontFamily: "var(--font-bebas-neue)" }} className="text-[clamp(3rem,5.5vw,5rem)] text-[#F5F5F0] leading-[0.9]">
                to Deployed.
              </span>
              <span style={{ fontFamily: "var(--font-jetbrains-mono)" }} className="text-[11px] text-[#444] ml-[16px]">
                [ end-to-end ]
              </span>
            </div>
          </div>
          <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 400 }} className="text-[15px] text-[#555] max-w-[400px] mt-[20px]">
            Four phases. No surprises. Working AI systems in weeks.
          </p>
        </div>

        {/* PROCESS STEPS */}
        <div className="border-t border-[#1E1E1E] grid grid-cols-1 md:grid-cols-4 gap-0">
          {steps.map((step, index) => (
            <m.div
              key={step.num}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`pt-[40px] md:pt-[40px] md:pb-[40px] px-0 md:px-[48px] border-b md:border-b-0 ${
                index === 0 ? "md:pl-0 md:border-r border-[#1E1E1E]" : 
                index === steps.length - 1 ? "md:pr-0" : 
                "md:border-r border-[#1E1E1E]"
              } pb-[32px]`}
            >
              <div style={{ fontFamily: "var(--font-bebas-neue)" }} className="text-[96px] text-[#161616] leading-[1]">
                {step.num}
              </div>
              <h4 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 500 }} className="text-[13px] text-[#F5F5F0] uppercase tracking-[0.12em] mt-[16px]">
                {step.title}
              </h4>
              <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 400 }} className="text-[14px] text-[#555] leading-[1.75] mt-[12px]">
                {step.desc}
              </p>

              {/* Progress bar */}
              <div className="mt-[32px] h-[1px] w-full bg-[#161616] relative overflow-hidden">
                <m.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                  className="absolute inset-0 bg-[#F5F5F0] origin-left"
                />
              </div>
            </m.div>
          ))}
        </div>

      </div>
    </section>
  );
}
