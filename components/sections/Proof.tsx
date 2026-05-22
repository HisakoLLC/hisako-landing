"use client";

import { useReducedMotion } from "framer-motion";

export function Proof() {
  return (
    <section id="work" className="min-h-screen py-20 md:py-32 border-b border-[#161616] bg-[#000000] overflow-hidden">
      <div className="container flex flex-col gap-16 md:gap-24">
        <span className="font-mono text-[10px] text-[#888888] uppercase tracking-widest">
          [ 03  PROOF OF WORK ]
        </span>
        
        {/* Placeholder content for now */}
        <h2 className="font-display font-black text-4xl md:text-5xl lg:text-[72px] leading-[0.9] tracking-tighter uppercase text-[#ffffff]">
          Proof of Work
        </h2>
      </div>
    </section>
  );
}
