"use client";

import { useEffect, useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Products } from "@/components/sections/Products";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Hero />
      <Services />
      <Products />
      <About />
      <Contact />

      <AnimatePresence>
        {showScroll && (
          <m.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-[32px] right-[32px] z-[90] w-[44px] h-[44px] bg-transparent border border-[#2A2A2A] hover:border-[#F5F5F0] flex items-center justify-center transition-colors duration-300 cursor-pointer rounded-none"
            aria-label="Scroll to top"
          >
            <svg 
              className="w-[16px] h-[16px]"
              viewBox="0 0 100 100" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="currentColor" strokeWidth="3" strokeLinecap="square">
                <line x1="50" y1="5" x2="50" y2="95" />
                <line x1="11" y1="27.5" x2="89" y2="72.5" />
                <line x1="11" y1="72.5" x2="89" y2="27.5" />
              </g>
            </svg>
          </m.button>
        )}
      </AnimatePresence>
    </>
  );
}
