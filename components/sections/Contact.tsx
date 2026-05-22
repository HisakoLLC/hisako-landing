"use client";

import { m } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#0A0A0A] py-[160px]">
      <div className="container">
        
        {/* SECTION HEADER */}
        <div className="mb-[80px]">
          <div style={{ fontFamily: "var(--font-jetbrains-mono)" }} className="text-[10px] text-[#444]">
            [ 05 CONTACT ]
          </div>
        </div>

        {/* HEADLINE */}
        <div style={{ fontFamily: "var(--font-bebas-neue)" }} className="text-[clamp(3.5rem,7vw,7rem)] text-[#F5F5F0] leading-[0.88]">
          <m.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            LET&apos;S BUILD
          </m.div>
          <m.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            SOMETHING
          </m.div>
          <m.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            SERIOUS.
          </m.div>
        </div>

        {/* CONTENT GRID */}
        <div className="mt-[64px] flex flex-col md:flex-row gap-[80px] items-start">
          
          {/* LEFT (45%) */}
          <div className="md:w-[45%]">
            <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 400 }} className="text-[15px] text-[#666] leading-[1.8] max-w-[380px]">
              We work with startups and businesses building serious AI systems and products. If you know what you want to build — or need help figuring it out — let&apos;s talk.
            </p>

            <div className="mt-[48px] flex flex-col gap-[16px]">
              <div className="flex items-center">
                <div style={{ fontFamily: "var(--font-jetbrains-mono)" }} className="text-[10px] text-[#333] tracking-[0.12em] w-[100px] uppercase">
                  EMAIL
                </div>
                <div className="text-[#333] mx-[16px]">→</div>
                <div style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 400 }} className="text-[14px] text-[#666]">
                  hello@hisako.eu
                </div>
              </div>

              <div className="flex items-center">
                <div style={{ fontFamily: "var(--font-jetbrains-mono)" }} className="text-[10px] text-[#333] tracking-[0.12em] w-[100px] uppercase">
                  LOCATION
                </div>
                <div className="text-[#333] mx-[16px]">→</div>
                <div style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 400 }} className="text-[14px] text-[#666]">
                  Nairobi, Kenya
                </div>
              </div>

              <div className="flex items-center">
                <div style={{ fontFamily: "var(--font-jetbrains-mono)" }} className="text-[10px] text-[#333] tracking-[0.12em] w-[100px] uppercase">
                  AVAILABILITY
                </div>
                <div className="text-[#333] mx-[16px]">→</div>
                <div style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 400 }} className="text-[14px] text-[#666]">
                  Open to AI Projects
                </div>
              </div>
            </div>

            <div className="mt-[32px] flex flex-row gap-[24px]">
              <a href="#" style={{ fontFamily: "var(--font-jetbrains-mono)" }} className="text-[10px] text-[#333] uppercase tracking-[0.12em] hover:text-[#F5F5F0] transition-colors duration-150">
                LINKEDIN
              </a>
              <a href="#" style={{ fontFamily: "var(--font-jetbrains-mono)" }} className="text-[10px] text-[#333] uppercase tracking-[0.12em] hover:text-[#F5F5F0] transition-colors duration-150">
                GITHUB
              </a>
            </div>
          </div>

          {/* RIGHT (55%) */}
          <m.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:w-[55%] w-full"
          >
            <form className="flex flex-col w-full" onSubmit={(e) => e.preventDefault()}>
              
              <div className="mb-[20px]">
                <label htmlFor="name" style={{ fontFamily: "var(--font-jetbrains-mono)" }} className="block text-[10px] text-[#444] uppercase tracking-[0.12em] mb-[8px]">
                  NAME
                </label>
                <input 
                  id="name"
                  type="text" 
                  placeholder=""
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                  className="w-full bg-transparent border-b border-[#222] text-[#F5F5F0] text-[15px] py-[12px] outline-none focus:border-[#F5F5F0] transition-colors duration-200 placeholder-[#333]"
                />
              </div>

              <div className="mb-[20px]">
                <label htmlFor="email" style={{ fontFamily: "var(--font-jetbrains-mono)" }} className="block text-[10px] text-[#444] uppercase tracking-[0.12em] mb-[8px]">
                  EMAIL
                </label>
                <input 
                  id="email"
                  type="email" 
                  placeholder=""
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                  className="w-full bg-transparent border-b border-[#222] text-[#F5F5F0] text-[15px] py-[12px] outline-none focus:border-[#F5F5F0] transition-colors duration-200 placeholder-[#333]"
                />
              </div>

              <div className="mb-[20px]">
                <label htmlFor="message" style={{ fontFamily: "var(--font-jetbrains-mono)" }} className="block text-[10px] text-[#444] uppercase tracking-[0.12em] mb-[8px]">
                  WHAT ARE YOU BUILDING?
                </label>
                <textarea 
                  id="message"
                  rows={5}
                  placeholder="Tell us about your business and what you're trying to automate, build, or improve with AI..."
                  style={{ fontFamily: "var(--font-dm-sans)", resize: "none" }}
                  className="w-full bg-transparent border-b border-[#222] text-[#F5F5F0] text-[15px] py-[12px] outline-none focus:border-[#F5F5F0] transition-colors duration-200 placeholder-[#333]"
                />
              </div>

              <button 
                type="submit"
                style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 500 }}
                className="mt-[32px] w-full bg-[#F5F5F0] text-[#0A0A0A] text-[12px] uppercase tracking-[0.15em] h-[52px] flex items-center justify-center hover:bg-[#E0E0D8] transition-colors duration-150"
              >
                SEND MESSAGE →
              </button>

            </form>
          </m.div>

        </div>

      </div>
    </section>
  );
}
