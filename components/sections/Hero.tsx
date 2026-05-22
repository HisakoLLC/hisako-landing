"use client";

import { useEffect, useRef, useState } from "react";
import { m, useReducedMotion } from "framer-motion";
import Link from "next/link";

// Custom hook for the typewriter effect
function useTypewriter(text: string, delay: number, interval: number) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const startTyping = () => {
      setIsTyping(true);
      setIsBlinking(true);
      let currentIndex = 0;
      
      intervalId = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(intervalId);
          setIsTyping(false);
          // Blink 4 times (400ms on/off = 800ms cycle) -> 3.2 seconds
          setTimeout(() => {
            setIsBlinking(false);
            setIsComplete(true);
          }, 3200);
        }
      }, interval);
    };

    const timeoutId = setTimeout(startTyping, delay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, delay, interval]);

  return { displayedText, isBlinking, isTyping, isComplete };
}

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shouldReduceMotion = useReducedMotion();
  
  const { displayedText, isBlinking, isComplete } = useTypewriter(
    "We design and deploy custom AI systems for businesses that want to operate at a different level.",
    1200,
    28
  );

  // Particle network effect
  useEffect(() => {
    if (shouldReduceMotion) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let nodes: Array<{ x: number; y: number; vx: number; vy: number }> = [];
    const NODE_COUNT = 35;
    
    const initNodes = () => {
      nodes = [];
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 1.0,
          vy: (Math.random() - 0.5) * 1.0
        });
      }
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initNodes();
    };

    window.addEventListener("resize", resize);
    resize();

    const draw = () => {
      if (document.hidden) {
        animationFrameId = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update nodes
      for (let i = 0; i < NODE_COUNT; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        if (node.x <= 0 || node.x >= canvas.width) node.vx *= -1;
        if (node.y <= 0 || node.y >= canvas.height) node.vy *= -1;

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.07)";
        ctx.fill();
      }

      // Draw lines
      for (let i = 0; i < NODE_COUNT; i++) {
        for (let j = i + 1; j < NODE_COUNT; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 160) {
            const opacity = (1 - dist / 160) * 0.045;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(255,255,255,${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [shouldReduceMotion]);

  const headlineLines = ["ENGINEER", "YOUR", "WORLD."];

  return (
    <section id="hero" className="relative min-h-[100svh] bg-[#000000] flex flex-col pt-[140px] overflow-hidden">
      {/* Particle Network Canvas */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* Foreground Content */}
      <div className="container relative z-10 flex-1 flex flex-col justify-center">
        
        {/* Top Row */}
        <div className="flex items-center justify-between w-full max-w-[840px] mb-8">
          <m.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="font-mono text-[10px] text-[#888888] tracking-[0.15em] uppercase"
          >
            [ HISAKO — AI AGENCY ]
          </m.span>
          
          <m.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <div className="w-[6px] h-[6px] rounded-full bg-[#ffffff] opacity-90 animate-pulse-live" />
            <span className="font-mono text-[9px] text-[#888888] tracking-[0.12em] uppercase">
              AVAILABLE FOR PROJECTS
            </span>
          </m.div>
        </div>

        {/* Headline Block */}
        <div className="flex flex-col gap-0 max-w-[840px]">
          {headlineLines.map((line, index) => (
            <div key={line} className="overflow-hidden">
              <m.h1 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ 
                  delay: 0.25 + (index * 0.12), 
                  duration: 0.8, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="font-display font-black text-[clamp(4.5rem,11vw,10rem)] leading-[0.88] tracking-tighter uppercase text-[#ffffff] origin-bottom"
              >
                {line}
              </m.h1>
            </div>
          ))}
        </div>

        {/* Sub-headline / Typewriter */}
        <div className="mt-7 min-h-[48px] max-w-[520px]">
          <p className="font-mono text-[13px] text-[#aaaaaa] leading-[1.7] inline-block">
            {displayedText}
            {(!isComplete || isBlinking) && (
              <span 
                className={`inline-block w-[8px] h-[1em] bg-[#aaaaaa] ml-[4px] align-middle ${isBlinking ? "animate-blink" : ""}`}
                style={{ opacity: isBlinking ? 1 : 0 }}
              />
            )}
          </p>
        </div>

        {/* Horizontal Rule */}
        <m.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full h-[1px] bg-[#161616] mt-9 origin-left"
        />

        {/* Bottom Row */}
        <div className="mt-7 flex flex-col md:flex-row items-start justify-between gap-12 md:gap-[80px] pb-24">
          
          {/* Left Column */}
          <m.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col max-w-[400px]"
          >
            <p className="font-sans text-[15px] text-[#888888] leading-[1.75]">
              Hisako is an AI agency that builds custom AI agents, automation workflows, and intelligent systems for startups and businesses operating globally.
            </p>
            
            <m.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.6 }}
              className="flex items-center gap-3 mt-5"
            >
              <Link 
                href="#contact"
                className="inline-flex items-center justify-center h-[44px] px-[28px] bg-[#eb3f25] text-[#ffffff] font-sans font-medium text-[13px] uppercase tracking-wider hover:bg-transparent hover:text-[#eb3f25] border border-[#eb3f25] transition-colors duration-200"
              >
                Start a Project →
              </Link>
              <Link 
                href="#process"
                className="inline-flex items-center justify-center h-[44px] px-[24px] bg-transparent border border-[#161616] text-[#888888] font-sans font-medium text-[13px] uppercase tracking-wider hover:border-[#ffffff] hover:text-[#ffffff] transition-colors duration-200"
              >
                See How We Work
              </Link>
            </m.div>
          </m.div>

          {/* Right Column (Stats) */}
          <m.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex flex-col gap-6 shrink-0 md:pt-4"
          >
            <div className="flex flex-col">
              <span className="font-display font-black text-4xl text-[#ffffff] leading-none tracking-tighter uppercase">End-to-End</span>
              <span className="font-mono text-[9px] text-[#888888] tracking-[0.15em] mt-2 uppercase">STRATEGY TO DEPLOYMENT</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-4xl text-[#ffffff] leading-none tracking-tighter uppercase">AI-Native</span>
              <span className="font-mono text-[9px] text-[#888888] tracking-[0.15em] mt-2 uppercase">BUILT FOR SCALE FROM DAY ONE</span>
            </div>
          </m.div>

        </div>
      </div>

      {/* Ticker */}
      <m.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ delay: 1.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full border-t border-b border-[#161616] py-3 overflow-hidden bg-[#000000] z-10 mt-auto"
      >
        <div className="animate-ticker flex w-max font-mono text-[10px] text-[#888888] uppercase tracking-widest">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="pl-4 whitespace-nowrap">
              AI AGENTS · WORKFLOW AUTOMATION · LLM INTEGRATION · AI STRATEGY · CUSTOM AI SYSTEMS · GLOBAL · 
            </span>
          ))}
        </div>
      </m.div>

    </section>
  );
}
