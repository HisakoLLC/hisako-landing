"use client";

import { m, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function Contact() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="contact" className="relative min-h-screen py-20 md:py-32 px-6 border-b border-[#2A2A2A] bg-[#0A0A0A] overflow-hidden flex items-center">
      
      {/* Decorative Asterisk */}
      <div className="absolute left-[-200px] bottom-[-200px] pointer-events-none z-0 hidden lg:block">
        <Image 
          src="/logo.png" 
          alt="" 
          width={400}
          height={400}
          className="w-[400px] h-[400px] opacity-[0.04] animate-[spin_60s_linear_infinite]" 
        />
      </div>

      <div className="max-w-[1280px] w-full mx-auto flex flex-col gap-16 md:gap-24 relative z-10">
        
        <m.span 
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-mono text-[10px] text-[#888888] uppercase tracking-widest"
        >
          [ 04  CONTACT ]
        </m.span>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column 50% */}
          <m.div 
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2 flex flex-col gap-12"
          >
            <div className="flex flex-col gap-6">
              <h2 className="font-display text-5xl md:text-[56px] text-[#F5F5F0] leading-none tracking-tight">
                Let's build something serious.
              </h2>
              <p className="font-sans text-[16px] md:text-[18px] text-[#F5F5F0] leading-[1.6] max-w-[480px]">
                We work with businesses, founders, and teams who are building products that matter.
              </p>
            </div>

            <div className="flex flex-col gap-4 mt-4">
              <div className="flex items-center gap-4">
                <span className="font-mono text-[12px] text-[#888888] w-28">EMAIL</span>
                <span className="font-mono text-[12px] text-[#888888]">→</span>
                <a href="mailto:hello@hisako.eu" className="font-mono text-[12px] text-[#F5F5F0] hover:text-[#888888] transition-colors">hello@hisako.eu</a>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-mono text-[12px] text-[#888888] w-28">LOCATION</span>
                <span className="font-mono text-[12px] text-[#888888]">→</span>
                <span className="font-mono text-[12px] text-[#F5F5F0]">Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-mono text-[12px] text-[#888888] w-28">AVAILABILITY</span>
                <span className="font-mono text-[12px] text-[#888888]">→</span>
                <span className="font-mono text-[12px] text-[#F5F5F0]">Open to Projects</span>
              </div>
            </div>

            <div className="flex items-center gap-8 mt-4">
              <Link href="#" className="font-mono text-[11px] text-[#888888] uppercase tracking-widest hover:text-[#F5F5F0] transition-colors">
                LinkedIn
              </Link>
              <Link href="#" className="font-mono text-[11px] text-[#888888] uppercase tracking-widest hover:text-[#F5F5F0] transition-colors">
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
            className="w-full lg:w-1/2 flex flex-col pt-4"
          >
            <form className="flex flex-col w-full" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col mb-4">
                <label htmlFor="name" className="font-mono text-[10px] text-[#888888] uppercase tracking-widest mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-transparent border border-[#2A2A2A] text-[#F5F5F0] px-4 py-3 outline-none focus:border-[#F5F5F0] transition-colors duration-300 font-sans text-[15px]" 
                  required
                />
              </div>

              <div className="flex flex-col mb-4">
                <label htmlFor="email" className="font-mono text-[10px] text-[#888888] uppercase tracking-widest mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-transparent border border-[#2A2A2A] text-[#F5F5F0] px-4 py-3 outline-none focus:border-[#F5F5F0] transition-colors duration-300 font-sans text-[15px]" 
                  required
                />
              </div>

              <div className="flex flex-col mb-8">
                <label htmlFor="message" className="font-mono text-[10px] text-[#888888] uppercase tracking-widest mb-2">What are you building?</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-transparent border border-[#2A2A2A] text-[#F5F5F0] px-4 py-3 outline-none focus:border-[#F5F5F0] transition-colors duration-300 font-sans text-[15px] resize-none" 
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full h-[48px] bg-[#F5F5F0] text-[#0A0A0A] font-sans text-sm uppercase tracking-widest hover:bg-transparent hover:text-[#F5F5F0] border border-[#F5F5F0] transition-colors duration-300"
              >
                Send Message →
              </button>
            </form>
          </m.div>

        </div>
      </div>
    </section>
  );
}
