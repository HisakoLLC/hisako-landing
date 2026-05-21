"use client";

import { useEffect, useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import Image from "next/image";
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
            className="fixed bottom-8 right-8 z-[100] w-12 h-12 bg-[#0A0A0A] border border-[#2A2A2A] hover:border-[#F5F5F0] flex items-center justify-center transition-colors duration-300 cursor-pointer"
            aria-label="Scroll to top"
          >
            <Image 
              src="/logo.png" 
              alt="Top" 
              width={20}
              height={20}
              className="w-[20px] h-[20px]" 
            />
          </m.button>
        )}
      </AnimatePresence>
    </>
  );
}
