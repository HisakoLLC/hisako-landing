"use client";

import { m, useReducedMotion } from "framer-motion";
import Link from "next/link";

export function Contact() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="contact" className="relative min-h-screen py-20 md:py-32 border-t border-[#161616] bg-[#f4f4f4] overflow-hidden flex items-center">
      
      <div className="container flex flex-col gap-16 md:gap-24 relative z-10">
        
        <m.span 
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-mono text-[10px] text-[#666666] uppercase tracking-widest"
        >
          [ 04  CONTACT ]
        </m.span>

        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Left Column 50% */}
          <m.div 
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2 flex flex-col gap-12"
          >
            <div className="flex flex-col gap-6">
              <h2 className="font-display font-black text-[clamp(3.5rem,8vw,6rem)] text-[#000000] leading-[0.85] tracking-tighter uppercase">
                Let&apos;s build<br/>something<br/>serious.
              </h2>
              <p className="font-sans text-[16px] md:text-[18px] text-[#333333] leading-[1.6] max-w-[480px]">
                We work with businesses, founders, and teams who are building products that matter.
              </p>
            </div>

            <div className="flex flex-col gap-4 mt-4 border-t border-[#e0e0e0] pt-8">
              <div className="flex items-center gap-4">
                <span className="font-mono text-[12px] text-[#888888] w-28">EMAIL</span>
                <span className="font-mono text-[12px] text-[#888888]">→</span>
                <a href="mailto:hello@hisako.eu" className="font-mono text-[12px] text-[#000000] hover:text-[#eb3f25] transition-colors">hello@hisako.eu</a>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-mono text-[12px] text-[#888888] w-28">LOCATION</span>
                <span className="font-mono text-[12px] text-[#888888]">→</span>
                <span className="font-mono text-[12px] text-[#000000]">Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-mono text-[12px] text-[#888888] w-28">AVAILABILITY</span>
                <span className="font-mono text-[12px] text-[#888888]">→</span>
                <span className="font-mono text-[12px] text-[#000000]">Open to Projects</span>
              </div>
            </div>

            <div className="flex items-center gap-8 mt-4">
              <Link href="#" className="font-mono text-[11px] text-[#888888] uppercase tracking-widest hover:text-[#000000] transition-colors">
                LinkedIn
              </Link>
              <Link href="#" className="font-mono text-[11px] text-[#888888] uppercase tracking-widest hover:text-[#000000] transition-colors">
                GitHub
              </Link>
            </div>
          </m.div>

          {/* Right Column 50% */}
          <m.div 
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2 flex flex-col pt-4 lg:pt-0"
          >
            <form className="flex flex-col w-full h-full justify-center" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col mb-[20px]">
                <label htmlFor="name" className="font-mono text-[10px] text-[#888888] uppercase tracking-widest mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-transparent border-b border-[#cccccc] text-[#000000] px-0 py-3 outline-none focus:border-[#000000] transition-colors duration-300 font-sans text-[16px]" 
                  required
                />
              </div>

              <div className="flex flex-col mb-[20px]">
                <label htmlFor="email" className="font-mono text-[10px] text-[#888888] uppercase tracking-widest mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-transparent border-b border-[#cccccc] text-[#000000] px-0 py-3 outline-none focus:border-[#000000] transition-colors duration-300 font-sans text-[16px]" 
                  required
                />
              </div>

              <div className="flex flex-col mb-[40px]">
                <label htmlFor="message" className="font-mono text-[10px] text-[#888888] uppercase tracking-widest mb-2">What are you building?</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-transparent border-b border-[#cccccc] text-[#000000] px-0 py-3 outline-none focus:border-[#000000] transition-colors duration-300 font-sans text-[16px] resize-none" 
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full h-[64px] bg-[#eb3f25] text-[#ffffff] font-sans font-medium text-[12px] uppercase tracking-[0.2em] hover:bg-[#000000] hover:text-[#ffffff] transition-colors duration-300"
              >
                Submit Inquiry →
              </button>
            </form>
          </m.div>

        </div>
      </div>
    </section>
  );
}
