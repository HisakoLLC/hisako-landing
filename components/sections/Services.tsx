"use client";

import { m, useReducedMotion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    num: "01",
    title: "Full-Stack Development",
    desc: "Web and mobile applications built end-to-end, from architecture to deployment."
  },
  {
    num: "02",
    title: "SaaS Product Development",
    desc: "Custom software products designed for scalability, multi-tenancy, and recurring revenue."
  },
  {
    num: "03",
    title: "UI/UX Design",
    desc: "Precision interfaces with editorial quality. Design systems, not templates."
  },
  {
    num: "04",
    title: "Business Systems",
    desc: "Dashboards, internal tools, automation workflows, and operational software."
  },
  {
    num: "05",
    title: "MVP Development",
    desc: "From zero to working product. Fast, focused, fundable."
  },
  {
    num: "06",
    title: "Technical Consulting",
    desc: "Architecture reviews, stack decisions, system design for complex products."
  }
];

export function Services() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { 
      opacity: 1, y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section id="services" className="min-h-screen py-20 md:py-32 px-6 border-b border-[#2A2A2A] bg-[#0A0A0A]">
      <div className="max-w-[1280px] w-full mx-auto flex flex-col gap-16 md:gap-24">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 w-full">
          <m.span 
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
            className="shrink-0 font-mono text-[10px] text-[#888888] uppercase tracking-widest"
          >
            [ 01  SERVICES ]
          </m.span>
          
          <m.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: [0.25, 0.1, 0.25, 1], delay: shouldReduceMotion ? 0 : 0.2 }}
            className="h-[1px] w-full bg-[#2A2A2A] origin-left hidden md:block mt-2 md:mt-0"
          />

          <m.h2 
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.1 }}
            className="shrink-0 font-display text-4xl md:text-[64px] leading-[1] tracking-tight text-[#F5F5F0]"
          >
            What We Do
          </m.h2>

          {/* Mobile only rule */}
          <m.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: [0.25, 0.1, 0.25, 1], delay: shouldReduceMotion ? 0 : 0.2 }}
            className="h-[1px] w-full bg-[#2A2A2A] origin-left block md:hidden mt-2"
          />
        </div>

        {/* Lummi Image Placeholder */}
        <m.div 
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
          className="w-full h-[400px] md:h-[500px] lg:h-[600px] relative border border-[#2A2A2A] overflow-hidden"
        >
          {/* [IMAGE: Modern Workspace with Desktop Computer (2).png] */}
          <Image 
            src="/images/Modern Workspace with Desktop Computer (2).png"
            alt="Services Workspace"
            fill
            className="object-cover object-center"
            style={{ filter: "grayscale(15%) contrast(1.05)" }}
          />
          <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        </m.div>

        {/* Services Grid */}
        <m.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => (
            <m.div 
              key={i}
              variants={itemVariants}
              className="group relative flex flex-col justify-between p-8 bg-transparent border border-[#2A2A2A] hover:border-[#555555] hover:-translate-y-[3px] transition-all duration-200 cursor-default min-h-[280px]"
            >
              <div className="flex flex-col gap-8">
                <span className="font-mono text-[10px] text-[#888888]">
                  {service.num}
                </span>
                <div className="flex flex-col gap-4">
                  <h3 className="font-sans text-[20px] font-medium text-[#F5F5F0] leading-snug">
                    {service.title}
                  </h3>
                  <p className="font-sans text-[15px] leading-[1.65] text-[#888888]">
                    {service.desc}
                  </p>
                </div>
              </div>

              {/* Bottom interactive element */}
              <div className="mt-8 pt-4 overflow-hidden h-[40px] flex items-end">
                <div className="flex items-center transform -translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-[0.16,1,0.3,1]">
                  <div className="h-[1px] bg-[#555555] w-8 mr-4" />
                  <span className="font-sans text-[#F5F5F0] text-sm">→</span>
                </div>
              </div>
            </m.div>
          ))}
        </m.div>

        {/* Bottom Dark Panel */}
        <m.div 
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
          className="w-full bg-[#111111] border border-[#2A2A2A] p-8 md:p-16 flex flex-col lg:flex-row gap-12 items-start lg:items-center justify-between"
        >
          <div className="max-w-2xl">
            <p className="font-display text-2xl md:text-[28px] text-[#F5F5F0] leading-[1.4]">
              &quot;We don&apos;t just write code — we build systems that solve real business problems.&quot;
            </p>
          </div>
          
          <div className="flex flex-col gap-6 w-full lg:w-auto shrink-0">
            <p className="font-sans text-[15px] text-[#888888] max-w-[300px]">
              Ready to transform your technical operations? Let&apos;s discuss your next project.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center h-[48px] px-8 bg-[#F5F5F0] text-[#0A0A0A] font-sans text-sm uppercase tracking-widest hover:bg-transparent hover:text-[#F5F5F0] border border-[#F5F5F0] transition-colors duration-300 w-fit"
            >
              Start a Project →
            </a>
          </div>
        </m.div>

      </div>
    </section>
  );
}
