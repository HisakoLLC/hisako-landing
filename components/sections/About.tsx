"use client";

import { m, useReducedMotion } from "framer-motion";
import { Globe, Code2, TrendingUp } from "lucide-react";
import Image from "next/image";

export function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="min-h-screen py-20 md:py-32 px-6 border-b border-[#2A2A2A] bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-[1280px] w-full mx-auto flex flex-col gap-16 md:gap-24">
        
        <m.span 
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-mono text-[10px] text-[#888888] uppercase tracking-widest"
        >
          [ 03  ABOUT ]
        </m.span>

        {/* Two-column Layout */}
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          
          {/* Left Column 50% */}
          <m.div 
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-1/2 flex flex-col gap-4"
          >
            <div className="w-full aspect-[3/4] lg:h-[600px] relative border border-[#2A2A2A] overflow-hidden">
              {/* [IMAGE: Contemporary Urban Office Scene.png] */}
              <Image 
                src="/images/Contemporary Urban Office Scene.png"
                alt="Founders Workspace"
                fill
                className="object-cover"
                style={{ filter: "grayscale(15%) contrast(1.05)" }}
              />
              <div className="absolute inset-0 bg-black/40 pointer-events-none" />
            </div>
            <span className="font-mono text-[10px] text-[#888888] uppercase tracking-widest">
              Nairobi, Kenya · Est. 2024
            </span>
          </m.div>

          {/* Right Column 50% */}
          <m.div 
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-1/2 flex flex-col justify-center gap-12"
          >
            <div className="flex flex-col gap-6">
              <span className="font-mono text-[10px] text-[#888888] uppercase tracking-widest">
                [ OUR IDENTITY ]
              </span>
              <h3 className="font-display text-4xl md:text-[52px] font-bold text-[#F5F5F0] leading-none tracking-tight">
                We are builders.
              </h3>
            </div>

            <div className="flex flex-col gap-6 max-w-[600px]">
              <p className="font-sans text-[16px] md:text-[18px] text-[#F5F5F0] leading-[1.6]">
                Hisako operates at the intersection of software engineering, product design, and scalable system architecture. We move between client solutions and long-term product creation — using both to strengthen each other.
              </p>
              <p className="font-sans text-[16px] md:text-[18px] text-[#F5F5F0] leading-[1.6]">
                The agency sharpens our execution. The products define our future.
              </p>
            </div>

            <div className="flex flex-col gap-8 mt-4">
              {[
                { label: "Simplicity", text: "Clean, intuitive systems that are easy to use" },
                { label: "Scalability", text: "Architecture that grows with the business" },
                { label: "Precision", text: "Attention to detail in both design and engineering" }
              ].map((principle, i) => (
                <div key={i} className="flex flex-col gap-2 pl-4 border-l border-[#2A2A2A] hover:border-[#555555] transition-colors duration-300">
                  <span className="font-mono text-[10px] text-[#888888] uppercase tracking-widest">{principle.label}</span>
                  <span className="font-sans text-[15px] text-[#F5F5F0]">{principle.text}</span>
                </div>
              ))}
            </div>
          </m.div>

        </div>

        {/* Pull-quote */}
        <m.div 
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
          className="w-full border-t border-b border-[#2A2A2A] py-16 md:py-24 flex items-center justify-center my-8 md:my-16"
        >
          <h4 className="font-display italic text-3xl md:text-[40px] text-[#F5F5F0] text-center px-4 max-w-4xl leading-tight">
            "Build once. Own it. Scale globally."
          </h4>
        </m.div>

        {/* Vision Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { Icon: Globe, text: "Empower businesses with modern digital systems" },
            { Icon: Code2, text: "Build software that scales globally" },
            { Icon: TrendingUp, text: "Create products that evolve into industry infrastructure" }
          ].map((item, i) => (
            <m.div 
              key={i}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.1 * i }}
              className="flex flex-col gap-6 pb-8 border-b border-[#2A2A2A] hover:border-[#555555] transition-colors duration-300"
            >
              <item.Icon className="w-8 h-8 text-[#F5F5F0] stroke-[1.5]" />
              <p className="font-sans text-[16px] text-[#F5F5F0] leading-[1.6]">
                {item.text}
              </p>
            </m.div>
          ))}
        </div>

      </div>
    </section>
  );
}
