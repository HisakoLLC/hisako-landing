"use client";

import { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <m.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-[32px] right-[32px] z-[90] w-[40px] h-[40px] bg-transparent border border-[#222] hover:border-[#444] flex items-center justify-center transition-colors duration-200"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" width="16" alt="Top" className="w-[16px] h-auto" />
        </m.button>
      )}
    </AnimatePresence>
  );
}
