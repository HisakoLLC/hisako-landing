"use client";

import { m, useReducedMotion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const headlineLines = [
    "ENGINEER",
    "YOUR",
    "WORLD"
  ];

  return (
    <section id="hero" className="relative min-h-[100svh] bg-[#000000] flex flex-col justify-center overflow-hidden pt-[64px]">
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes scroll-ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: scroll-ticker 40s linear infinite;
        }
      `}} />

      {/* Right Asterisk */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ delay: shouldReduceMotion ? 0 : 0.5, duration: shouldReduceMotion ? 0 : 1 }}
        className="absolute right-[-160px] top-1/2 -translate-y-1/2 pointer-events-none hidden md:block z-0"
      >
        <Image
          src="/logo.png"
          alt=""
          width={600}
          height={600}
          priority
          className="w-[480px] h-[480px] lg:w-[600px] lg:h-[600px] animate-[spin_30s_linear_infinite]"
          style={{ width: '320px', height: '320px' }}
        />
      </m.div>

      <div className="max-w-[1280px] w-full mx-auto px-6 relative z-10 flex-1 flex flex-col justify-center py-20 md:py-24">

        {/* Top-left Label */}
        <m.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: shouldReduceMotion ? 0 : 0.1, duration: shouldReduceMotion ? 0 : 0.8 }}
          className="mb-8 md:mb-16"
        >
          <span className="font-mono text-[10px] text-[#888888] uppercase tracking-widest">
            [ HISAKO TECHNOLOGIES — EST. 2024 ]
          </span>
        </m.div>

        {/* Display Headline */}
        <div className="flex flex-col mb-12">
          {headlineLines.map((text, i) => (
            <div key={i} className="overflow-hidden pb-2 -mb-2">
              <m.h1
                initial={{ y: 80 }}
                animate={{ y: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.8,
                  delay: shouldReduceMotion ? 0 : 0.3 + i * 0.12,
                  ease: [0.16, 1, 0.3, 1], // reveal easing
                }}
                className={`font-display font-black text-[clamp(3.5rem,10vw,5.5rem)] md:text-[clamp(5rem,11vw,11rem)] leading-[0.85] tracking-[-0.04em] uppercase text-[#ffffff] ${
                  i === headlineLines.length - 1 ? "pr-8" : ""
                }`}
              >
                {text}
              </m.h1>
            </div>
          ))}
        </div>

        {/* Horizontal Rule */}
        <m.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: shouldReduceMotion ? 0 : 0.8, duration: shouldReduceMotion ? 0 : 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="h-[1px] w-full bg-[#161616] origin-left mb-12"
        />

        {/* Two Columns */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: shouldReduceMotion ? 0 : 1.0, duration: shouldReduceMotion ? 0 : 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16"
        >
          <div className="max-w-[400px]">
            <p className="font-sans text-[16px] text-[#ffffff] leading-[1.6]">
              Hisako is a hybrid software agency and tech product studio. We design, build, and scale digital systems for businesses and build our own global SaaS products.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-12 lg:ml-auto w-full lg:w-auto">
            <div>
              <div className="font-display font-black tracking-tighter text-[64px] text-[#ffffff] leading-none mb-4">12+</div>
              <div className="font-mono text-[10px] text-[#666666] uppercase tracking-[0.15em]">Projects Delivered</div>
            </div>
            <div>
              <div className="font-display font-black tracking-tighter text-[64px] text-[#ffffff] leading-none mb-4">2+</div>
              <div className="font-mono text-[10px] text-[#666666] uppercase tracking-[0.15em]">Products in Development</div>
            </div>
          </div>
        </m.div>

        {/* CTAs */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: shouldReduceMotion ? 0 : 1.2, duration: shouldReduceMotion ? 0 : 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center h-[48px] px-8 bg-[#eb3f25] text-[#ffffff] font-sans font-medium text-[11px] uppercase tracking-widest hover:bg-transparent hover:text-[#eb3f25] border border-[#eb3f25] transition-colors duration-300"
          >
            Start a Project →
          </a>
          <a
            href="#work"
            className="inline-flex items-center justify-center h-[48px] px-8 bg-transparent text-[#ffffff] font-sans text-sm uppercase tracking-widest hover:bg-[#ffffff] hover:text-[#000000] border border-[#ffffff] transition-colors duration-300"
          >
            See Our Work
          </a>
        </m.div>

      </div>

      {/* Ticker */}
      <m.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ delay: shouldReduceMotion ? 0 : 1.4, duration: shouldReduceMotion ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mt-auto w-full border-t border-b border-[#161616] py-3 overflow-hidden bg-[#000000] z-10"
      >
        <div className="animate-ticker flex w-max font-mono text-[11px] text-[#888888] uppercase tracking-widest">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="pl-4 whitespace-nowrap">
              AI AGENTS · WORKFLOW AUTOMATION · LLM INTEGRATION · AI STRATEGY · CUSTOM AI SYSTEMS · GLOBAL · 
            </span>
          ))}
        </div>
      </m.div>
    </section>
  );
}
