"use client";

import { m, useReducedMotion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="hero" className="min-h-[100svh] bg-[#0A0A0A] pt-[64px] flex flex-col justify-between">
      <div className="container pt-[120px] pb-[80px] flex-1 flex flex-col justify-center">
        
        {/* TOP META ROW */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-[80px] gap-4">
          <m.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.1, duration: 0.5 }}
          >
            <span style={{ fontFamily: "var(--font-jetbrains-mono)" }} className="text-[10px] text-[#444] tracking-[0.15em]">
              [ HISAKO — AI AGENCY ]
            </span>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.1, duration: 0.5 }}
            className="flex items-center gap-[8px]"
          >
            <style dangerouslySetInnerHTML={{
              __html: `
                @keyframes pulse-circle {
                  0%, 100% { opacity: 0.7; transform: scale(1); }
                  50% { opacity: 0.3; transform: scale(1.3); }
                }
                .animate-pulse-circle {
                  animation: pulse-circle 2.5s ease-in-out infinite;
                }
              `
            }} />
            <div className="w-[6px] h-[6px] rounded-full bg-[#F5F5F0] animate-pulse-circle"></div>
            <span style={{ fontFamily: "var(--font-jetbrains-mono)" }} className="text-[9px] text-[#444] tracking-[0.12em] uppercase">
              AVAILABLE FOR PROJECTS
            </span>
          </m.div>
        </div>

        {/* HEADLINE BLOCK */}
        <div className="flex flex-col">
          {["ENGINEER", "YOUR", "WORLD."].map((text, i) => (
            <div key={i} className="overflow-hidden">
              <m.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.6,
                  delay: shouldReduceMotion ? 0 : (i === 0 ? 0.2 : i === 1 ? 0.32 : 0.44),
                }}
                style={{ fontFamily: "var(--font-bebas-neue)" }}
                className="text-[clamp(5.5rem,11vw,10.5rem)] leading-[0.87] text-[#F5F5F0] uppercase"
              >
                {text}
              </m.h1>
            </div>
          ))}
        </div>

        {/* HORIZONTAL RULE */}
        <m.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="h-[1px] w-full bg-[#1E1E1E] origin-left mt-[48px]"
        />

        {/* BOTTOM GRID */}
        <m.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="mt-[48px] grid grid-cols-1 md:grid-cols-3 gap-[48px] md:gap-0"
        >
          {/* Column 1 */}
          <div className="md:pr-[48px] md:border-r border-[#1E1E1E] flex flex-col justify-between">
            <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 400 }} className="text-[15px] text-[#666] leading-[1.8] max-w-[380px]">
              Hisako is an AI agency that builds custom AI agents, automation workflows, and intelligent systems for startups and businesses operating globally.
            </p>
            <div className="flex flex-row gap-[12px] mt-[36px]">
              <Link
                href="#contact"
                style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 500 }}
                className="h-[44px] px-[28px] flex items-center justify-center bg-[#F5F5F0] text-[#0A0A0A] text-[12px] uppercase tracking-[0.1em] hover:bg-transparent hover:text-[#F5F5F0] border border-transparent hover:border-[#F5F5F0] transition-colors duration-200"
              >
                Start a Project →
              </Link>
              <Link
                href="#process"
                style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 500 }}
                className="h-[44px] px-[24px] flex items-center justify-center bg-transparent text-[#555] border border-[#222] text-[12px] uppercase tracking-[0.1em] hover:text-[#F5F5F0] hover:border-[#F5F5F0] transition-colors duration-200"
              >
                See How We Work
              </Link>
            </div>
          </div>

          {/* Column 2 */}
          <div className="md:px-[48px] md:border-r border-[#1E1E1E] flex flex-col justify-start">
            <div style={{ fontFamily: "var(--font-bebas-neue)" }} className="text-[42px] text-[#F5F5F0] leading-[1]">
              End-to-End
            </div>
            <div style={{ fontFamily: "var(--font-jetbrains-mono)" }} className="text-[9px] text-[#444] tracking-[0.15em] mt-[8px] uppercase">
              STRATEGY TO DEPLOYMENT
            </div>
          </div>

          {/* Column 3 */}
          <div className="md:pl-[48px] flex flex-col justify-start">
            <div style={{ fontFamily: "var(--font-bebas-neue)" }} className="text-[42px] text-[#F5F5F0] leading-[1]">
              AI-Native
            </div>
            <div style={{ fontFamily: "var(--font-jetbrains-mono)" }} className="text-[9px] text-[#444] tracking-[0.15em] mt-[8px] uppercase">
              BUILT FOR SCALE FROM DAY ONE
            </div>
          </div>
        </m.div>
      </div>

      {/* TICKER */}
      <m.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.5 }}
        className="w-full border-t border-b border-[#1E1E1E] py-[12px] mt-[80px] overflow-hidden"
      >
        <style dangerouslySetInnerHTML={{
          __html: `
            @keyframes seamless-ticker {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-seamless-ticker {
              animation: seamless-ticker 40s linear infinite;
            }
          `
        }} />
        <div className="animate-seamless-ticker flex w-max">
          <div className="flex whitespace-nowrap">
            {[...Array(15)].map((_, i) => (
              <span key={i} style={{ fontFamily: "var(--font-jetbrains-mono)" }} className="text-[10px] text-[#444] tracking-[0.12em] uppercase px-[10px]">
                AI AGENTS · WORKFLOW AUTOMATION · LLM INTEGRATION · AI STRATEGY · CUSTOM AI SYSTEMS · GLOBAL · 
              </span>
            ))}
          </div>
        </div>
      </m.div>
    </section>
  );
}
