"use client";

import { useRef } from "react";
import { m, useInView } from "framer-motion";

export function ScanLine() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none z-[100] overflow-hidden">
      <m.div
        initial={{ top: "0%", opacity: 1 }}
        animate={isInView ? { top: "100%", opacity: [1, 1, 0] } : { top: "0%", opacity: 1 }}
        transition={{ 
          top: { duration: 0.7, ease: "easeOut" },
          opacity: { duration: 0.7, ease: "easeOut" }
        }}
        className="absolute left-0 right-0 h-[1px]"
        style={{ background: "linear-gradient(to right, transparent, rgba(245,245,240,0.12), transparent)" }}
      />
    </div>
  );
}
