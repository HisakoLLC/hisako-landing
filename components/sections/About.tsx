"use client";

import { useRef } from "react";
import { m, useInView } from "framer-motion";
import Image from "next/image";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import { ScanLine } from "@/components/ui/ScanLine";

const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const dmSans = DM_Sans({ weight: ["400", "500"], subsets: ["latin"] });

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="py-24 bg-[#000000] relative overflow-hidden" ref={ref}>
      <ScanLine />
      <div className="container relative z-10 flex flex-col md:flex-row gap-12 lg:gap-0">
        
        {/* Left Column (45%) */}
        <m.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-[45%] flex flex-col"
        >
          <div className="w-full h-auto aspect-[3/4] relative">
            <Image
              src="/images/Contemporary Urban Office Scene.png"
              alt="Founders Workspace"
              fill
              className="object-cover"
              style={{ filter: "grayscale(15%) contrast(1.05)" }}
            />
          </div>
          <span className="font-mono text-[10px] text-[#444444] mt-[8px]">
            Nairobi, Kenya · Global
          </span>
        </m.div>

        {/* Right Column (55%) */}
        <m.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full md:w-[55%] lg:pl-[64px] flex flex-col justify-center"
        >
          <span className="font-mono text-[10px] text-[#555555]">
            [ 04 ABOUT ]
          </span>
          <h2 className={`${bebasNeue.className} text-[56px] text-[#F5F5F0] mt-[12px] leading-none`}>
            We are builders.
          </h2>
          
          <div className="mt-[24px] flex flex-col gap-[16px]">
            <p className={`${dmSans.className} text-[15px] text-[#777777] leading-[1.8]`}>
              Hisako is an AI agency and tech studio based in Nairobi, operating globally. We build custom AI systems for client businesses while simultaneously developing and owning our own AI-powered software products.
            </p>
            <p className={`${dmSans.className} text-[15px] text-[#777777] leading-[1.8]`}>
              The agency sharpens our execution. The products prove our architecture. Both make us better at what we do.
            </p>
          </div>

          <div className="mt-[32px] flex flex-col gap-[20px]">
            <div className="border-l border-[#2A2A2A] pl-[16px]">
              <span className="font-mono text-[9px] text-[#555555] uppercase tracking-[0.15em]">
                PRECISION
              </span>
              <p className={`${dmSans.className} text-[14px] text-[#666666] leading-[1.6] mt-[4px]`}>
                We design before we build. Architecture decisions made early save months later.
              </p>
            </div>
            
            <div className="border-l border-[#2A2A2A] pl-[16px]">
              <span className="font-mono text-[9px] text-[#555555] uppercase tracking-[0.15em]">
                VELOCITY
              </span>
              <p className={`${dmSans.className} text-[14px] text-[#666666] leading-[1.6] mt-[4px]`}>
                Working systems in weeks, not quarters. We move fast without breaking foundations.
              </p>
            </div>

            <div className="border-l border-[#2A2A2A] pl-[16px]">
              <span className="font-mono text-[9px] text-[#555555] uppercase tracking-[0.15em]">
                OWNERSHIP
              </span>
              <p className={`${dmSans.className} text-[14px] text-[#666666] leading-[1.6] mt-[4px]`}>
                We treat client systems like our own. Because we know what it means to own what you ship.
              </p>
            </div>
          </div>
        </m.div>

      </div>
    </section>
  );
}
