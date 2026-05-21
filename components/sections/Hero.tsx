"use client";

import { m, useReducedMotion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const headlineLines = [
    "WE BUILD",
    "THE SYSTEMS",
    "YOUR BUSINESS",
    "RUNS ON.",
  ];

  return (
    <section id="hero" className="relative min-h-[100svh] bg-[#0A0A0A] flex flex-col justify-center overflow-hidden pt-[64px]">
      <style dangerouslySetInnerHTML={{__html: `
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
                className={`font-display font-black text-[clamp(2.5rem,8vw,4.5rem)] md:text-[clamp(4rem,9vw,9rem)] leading-[0.92] tracking-tight text-[#F5F5F0] ${
                  i === 3 ? "italic pr-8" : ""
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
          className="h-[1px] w-full bg-[#2A2A2A] origin-left mb-12"
        />

        {/* Two Columns */}
        <m.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: shouldReduceMotion ? 0 : 1.0, duration: shouldReduceMotion ? 0 : 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16"
        >
          <div className="max-w-[400px]">
            <p className="font-sans text-[16px] text-[#F5F5F0] leading-[1.6]">
              Hisako is a hybrid software agency and tech product studio. We design, build, and scale digital systems for businesses and build our own global SaaS products.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-12 lg:ml-auto w-full lg:w-auto">
            <div>
              <div className="font-display font-bold text-5xl md:text-[48px] text-[#F5F5F0] leading-none mb-4">12+</div>
              <div className="font-mono text-[10px] text-[#888888] uppercase tracking-widest">Projects Delivered</div>
            </div>
            <div>
              <div className="font-display font-bold text-5xl md:text-[48px] text-[#F5F5F0] leading-none mb-4">2+</div>
              <div className="font-mono text-[10px] text-[#888888] uppercase tracking-widest">Products in Development</div>
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
            className="inline-flex items-center justify-center h-[48px] px-8 bg-[#F5F5F0] text-[#0A0A0A] font-sans text-sm uppercase tracking-widest hover:bg-transparent hover:text-[#F5F5F0] border border-[#F5F5F0] transition-colors duration-300"
          >
            Start a Project →
          </a>
          <a
            href="#work"
            className="inline-flex items-center justify-center h-[48px] px-8 bg-transparent text-[#F5F5F0] font-sans text-sm uppercase tracking-widest hover:bg-[#F5F5F0] hover:text-[#0A0A0A] border border-[#F5F5F0] transition-colors duration-300"
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
        className="mt-auto w-full border-t border-b border-[#2A2A2A] py-3 overflow-hidden bg-[#0A0A0A] z-10"
      >
        <div className="animate-ticker flex w-max font-mono text-[11px] text-[#888888] uppercase tracking-widest">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="pl-4 whitespace-nowrap">
              SOFTWARE AGENCY · PRODUCT STUDIO · VENDOFLOW · NAIROBI · GLOBAL ·
            </span>
          ))}
        </div>
      </m.div>
    </section>
  );
}
