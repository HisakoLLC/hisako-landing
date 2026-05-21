"use client";

import { m, useReducedMotion } from "framer-motion";
import Image from "next/image";

export function Products() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="products" className="min-h-screen pt-20 md:pt-32 pb-20 md:pb-32 px-6 border-b border-[#2A2A2A] bg-[#0A0A0A] overflow-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-right {
          animation: marquee-right 40s linear infinite;
        }
      `}} />

      <div className="max-w-[1280px] w-full mx-auto flex flex-col gap-16 md:gap-24">
        
        {/* Intro */}
        <div className="flex flex-col max-w-2xl">
          <m.span 
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-mono text-[10px] text-[#888888] uppercase tracking-widest mb-12"
          >
            [ 02  PRODUCTS ]
          </m.span>
          
          <m.h2 
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-[72px] leading-[1] tracking-tight text-[#F5F5F0] mb-4"
          >
            We Don&apos;t Just Build for Clients.
          </m.h2>
          
          <m.div 
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.2 }}
          >
            <h3 className="font-display italic text-2xl md:text-[32px] text-[#888888] mb-8">
              We build for ourselves too.
            </h3>
            <p className="font-sans text-[16px] text-[#F5F5F0] leading-[1.6] max-w-[480px]">
              Beyond client work, Hisako owns and develops its own software products — designed for scale, built for longevity.
            </p>
          </m.div>
        </div>

      </div>

      {/* Marquee Strip (full width) */}
      <m.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: shouldReduceMotion ? 0 : 0.3 }}
        className="w-full border-t border-b border-[#2A2A2A] py-6 my-16 md:my-24 bg-[#0A0A0A]"
      >
        <div className="animate-marquee-right flex w-max font-mono text-[24px] md:text-[32px] text-[#F5F5F0] uppercase tracking-widest">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="pl-8 whitespace-nowrap">
              HISAKO BUILDS · HISAKO OWNS · HISAKO SCALES ·
            </span>
          ))}
        </div>
      </m.div>

      <div className="max-w-[1280px] w-full mx-auto flex flex-col gap-16 md:gap-24">
        
        {/* VendoFlow Feature Block */}
        <m.div 
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full bg-[#111111] border border-[#2A2A2A] flex flex-col lg:flex-row overflow-hidden"
        >
          {/* Left Side 60% */}
          <div className="w-full lg:w-[60%] p-8 md:p-16 flex flex-col justify-between">
            <div className="flex flex-col gap-6">
              <span className="font-mono text-[10px] text-[#888888] uppercase tracking-widest">
                [ FLAGSHIP PRODUCT ]
              </span>
              
              <div>
                <h3 className="font-display font-black text-5xl md:text-[72px] text-[#F5F5F0] leading-none mb-2">
                  VendoFlow
                </h3>
                <p className="font-sans text-[22px] text-[#888888] leading-[1.4]">
                  The Retail Operating System.
                </p>
              </div>

              <p className="font-sans text-[16px] text-[#F5F5F0] leading-[1.6] max-w-[480px] mt-4">
                VendoFlow is a next-generation point-of-sale and business management platform for retail businesses.
              </p>

              <div className="flex flex-col gap-4 mt-8 mb-12">
                {[
                  "Point of Sale & Payments",
                  "Inventory Management",
                  "Sales Analytics & Reporting",
                  "Multi-location Operations"
                ].map((feature, i) => (
                  <div key={i} className="pl-4 border-l border-[#2A2A2A] hover:border-[#555555] transition-colors duration-300">
                    <span className="font-sans text-[15px] text-[#F5F5F0]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-8 mt-auto pt-8 border-t border-[#2A2A2A]">
              <span className="font-mono text-[10px] text-[#888888] uppercase tracking-widest">
                [ STATUS: IN DEVELOPMENT ]
              </span>
              <a
                href="#vendoflow"
                className="inline-flex items-center justify-center h-[48px] px-8 bg-transparent text-[#F5F5F0] font-sans text-sm uppercase tracking-widest hover:bg-[#F5F5F0] hover:text-[#0A0A0A] border border-[#F5F5F0] transition-colors duration-300 sm:ml-auto w-fit"
              >
                Learn More →
              </a>
            </div>
          </div>

          {/* Right Side 40% */}
          <div className="w-full lg:w-[40%] min-h-[320px] lg:min-h-full relative border-t lg:border-t-0 lg:border-l border-[#2A2A2A]">
            {/* [IMAGE: Urban Oasis Bookstore & Boutique.png] */}
            <Image 
              src="/images/Urban Oasis Bookstore & Boutique.png"
              alt="VendoFlow Retail"
              fill
              className="object-cover"
              style={{ filter: "grayscale(15%) contrast(1.05)" }}
            />
            <div className="absolute inset-0 bg-black/40 pointer-events-none" />
            
            {/* Hisako watermark */}
            <div className="absolute bottom-6 right-6 pointer-events-none">
              <Image 
                src="/logo.png" 
                alt="" 
                width={80}
                height={80}
                className="w-[80px] h-[80px] opacity-[0.15] grayscale"
              />
            </div>
          </div>
        </m.div>

        {/* More from the Studio */}
        <div className="flex flex-col gap-12">
          <m.h3 
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-display italic text-3xl md:text-[40px] text-[#F5F5F0]"
          >
            More from the Studio
          </m.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Passr */}
            <m.div 
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
              className="p-8 border border-[#2A2A2A] flex flex-col justify-between min-h-[240px] bg-transparent hover:border-[#444444] transition-colors duration-300"
            >
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <h4 className="font-sans text-[24px] font-medium text-[#F5F5F0]">Passr</h4>
                  <span className="font-mono text-[10px] text-[#888888] uppercase tracking-widest mt-2">[ IN BUILD ]</span>
                </div>
                <p className="font-sans text-[15px] text-[#888888] leading-[1.6]">
                  EU Digital Product Passport compliance platform for outdoor and activewear brands.
                </p>
              </div>
            </m.div>
            
            {/* Card 2: Stealth */}
            <m.div 
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.1 }}
              className="p-8 border border-[#2A2A2A] flex flex-col justify-between min-h-[240px] bg-transparent opacity-50"
            >
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <h4 className="font-mono text-[14px] text-[#F5F5F0] tracking-widest">[ STEALTH ]</h4>
                </div>
                <p className="font-sans text-[15px] text-[#888888] leading-[1.6]">
                  A new product under development. Details coming soon.
                </p>
              </div>
            </m.div>
          </div>
        </div>

      </div>
    </section>
  );
}
