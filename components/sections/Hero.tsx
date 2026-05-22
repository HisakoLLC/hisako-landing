"use client";

import { useEffect, useRef, useState } from "react";
import { m, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Bebas_Neue, DM_Sans } from "next/font/google";

const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const dmSans = DM_Sans({ weight: ["400", "500"], subsets: ["latin"] });

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [typedText, setTypedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(false);
  const fullText = "We design and deploy custom AI systems for businesses that want to operate at a different level.";

  // Particle Network Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    const numParticles = window.innerWidth < 768 ? 18 : 35;
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2 * (0.3 + Math.random() * 0.2),
          vy: (Math.random() - 0.5) * 2 * (0.3 + Math.random() * 0.2),
        });
      }
    };

    const draw = () => {
      if (document.hidden) {
        animationFrameId = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(245, 245, 240, 0.07)";
        ctx.fill();

        for (let j = i + 1; j < numParticles; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 160) {
            const opacity = (1 - dist / 160) * 0.045;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(245, 245, 240, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    resize();
    initParticles();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Typewriter Animation
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    let blinkIntervalId: NodeJS.Timeout;

    const timeoutId = setTimeout(() => {
      let currentIndex = 0;
      setCursorVisible(true);

      intervalId = setInterval(() => {
        if (currentIndex < fullText.length) {
          setTypedText(fullText.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(intervalId);
          let blinkCount = 0;
          blinkIntervalId = setInterval(() => {
            setCursorVisible((v) => !v);
            blinkCount++;
            if (blinkCount >= 8) {
              clearInterval(blinkIntervalId);
              setCursorVisible(false);
            }
          }, 400);
        }
      }, 28);
    }, 1200);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
      clearInterval(blinkIntervalId);
    };
  }, [fullText]);

  return (
    <section id="hero" className="relative h-[100svh] bg-[#0A0A0A] flex flex-col justify-center overflow-hidden">
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes scroll-ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: scroll-ticker 35s linear infinite;
        }
        @keyframes pulse-live {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.3; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-pulse-live {
          animation: pulse-live 2s ease-in-out infinite;
        }
      `}} />

      {/* Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none w-full h-full"
        style={{ willChange: 'transform' }}
      />

      <div className="container relative z-10 flex-1 flex flex-col justify-center pt-[140px]">

        {/* Top Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0">
          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.1, duration: 0.5 }}
          >
            <span className="font-mono text-[10px] text-[#666666] tracking-[0.15em]">
              [ HISAKO — AI AGENCY ]
            </span>
          </m.div>

          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.2, duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <div className="w-[6px] h-[6px] rounded-full bg-[#F5F5F0] opacity-90 animate-pulse-live"></div>
            <span className="font-mono text-[9px] text-[#555555] tracking-[0.12em] uppercase">
              AVAILABLE FOR PROJECTS
            </span>
          </m.div>
        </div>

        {/* Headline Block */}
        <div className="flex flex-col mt-[32px]">
          {["ENGINEER", "YOUR", "WORLD."].map((text, i) => (
            <div key={i} className="overflow-hidden">
              <m.h1
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.8,
                  delay: shouldReduceMotion ? 0 : (i === 0 ? 0.25 : i === 1 ? 0.37 : 0.49),
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`${bebasNeue.className} text-[clamp(5rem,11vw,10rem)] leading-[0.88] text-[#F5F5F0] uppercase`}
              >
                {text}
              </m.h1>
            </div>
          ))}
        </div>

        {/* Sub-Headline */}
        <div className="mt-[28px] font-mono text-[11px] md:text-[13px] text-[#888888] leading-[1.7] max-w-[520px] min-h-[44px]">
          {typedText}
          <span style={{ opacity: cursorVisible ? 1 : 0, transition: 'opacity 0.1s' }}>|</span>
        </div>

        {/* Horizontal Rule */}
        <m.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: shouldReduceMotion ? 0 : 0.8, duration: shouldReduceMotion ? 0 : 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="h-[1px] w-full bg-[#2A2A2A] origin-left mt-[36px]"
        />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-start gap-[80px] mt-[28px] mb-[40px]">
          
          {/* Left Column */}
          <div className="max-w-[400px]">
            <m.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.9, duration: 0.6 }}
              className={`${dmSans.className} text-[15px] text-[#888888] leading-[1.75]`}
            >
              Hisako is an AI agency that builds custom AI agents, automation workflows, and intelligent systems for startups and businesses operating globally.
            </m.p>

            {/* CTAs */}
            <m.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: shouldReduceMotion ? 0 : 1.05, duration: 0.6 }}
              className="flex flex-wrap gap-[12px] mt-[20px]"
            >
              <Link
                href="#contact"
                className={`${dmSans.className} inline-flex items-center justify-center h-[44px] px-[28px] bg-[#F5F5F0] text-[#0A0A0A] font-medium text-[13px] uppercase tracking-wider hover:bg-transparent hover:text-[#F5F5F0] border border-transparent hover:border-[#F5F5F0] transition-colors duration-200`}
              >
                Start a Project →
              </Link>
              <Link
                href="#process"
                className={`${dmSans.className} inline-flex items-center justify-center h-[44px] px-[24px] bg-transparent text-[#666666] font-medium text-[13px] uppercase tracking-wider hover:border-[#F5F5F0] hover:text-[#F5F5F0] border border-[#2A2A2A] transition-colors duration-200`}
              >
                See How We Work
              </Link>
            </m.div>
          </div>

          {/* Right Column */}
          <m.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: shouldReduceMotion ? 0 : 1.1, duration: 0.6 }}
            className="flex flex-col gap-[24px]"
          >
            <div>
              <div className={`${bebasNeue.className} text-[36px] text-[#F5F5F0] leading-none`}>End-to-End</div>
              <div className="font-mono text-[9px] text-[#555555] uppercase tracking-[0.15em] mt-[4px]">STRATEGY TO DEPLOYMENT</div>
            </div>
            <div>
              <div className={`${bebasNeue.className} text-[36px] text-[#F5F5F0] leading-none`}>AI-Native</div>
              <div className="font-mono text-[9px] text-[#555555] uppercase tracking-[0.15em] mt-[4px]">BUILT FOR SCALE FROM DAY ONE</div>
            </div>
          </m.div>

        </div>

      </div>

      {/* Ticker */}
      <m.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ delay: shouldReduceMotion ? 0 : 1.3, duration: shouldReduceMotion ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mt-auto w-full border-t border-b border-[#2A2A2A] py-3 overflow-hidden bg-[#0A0A0A] z-10"
      >
        <div className="animate-ticker flex w-max font-mono text-[10px] text-[#888888] uppercase tracking-widest">
          {[...Array(15)].map((_, i) => (
            <span key={i} className="pl-4 whitespace-nowrap">
              AI AGENTS · WORKFLOW AUTOMATION · LLM INTEGRATION · AI STRATEGY · CUSTOM AI SYSTEMS · GLOBAL · 
            </span>
          ))}
        </div>
      </m.div>
    </section>
  );
}
