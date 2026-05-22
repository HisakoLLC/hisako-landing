"use client";

import Link from "next/link";

export default function Footer() {
  const links = [
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#080808] border-t border-[#1E1E1E] pt-[64px] pb-[40px]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[48px] md:gap-0">
          
          {/* Col 1 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" height="20" alt="Hisako" className="h-[20px] w-auto" />
              <span style={{ fontFamily: "var(--font-jetbrains-mono)" }} className="text-[11px] text-[#F5F5F0] tracking-[0.2em] ml-[8px]">
                HISAKO
              </span>
            </div>
            <div style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 400 }} className="text-[13px] text-[#444] mt-[12px]">
              AI Agency — Nairobi, Kenya
            </div>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col items-center gap-[12px]">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 400 }}
                className="text-[12px] text-[#444] hover:text-[#F5F5F0] transition-colors duration-150"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Col 3 */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right justify-end">
            <div style={{ fontFamily: "var(--font-jetbrains-mono)" }} className="text-[10px] text-[#333]">
              © 2026 Hisako Technologies Limited.
            </div>
            <div style={{ fontFamily: "var(--font-jetbrains-mono)" }} className="text-[10px] text-[#333] mt-[4px]">
              Nairobi, Kenya.
            </div>
          </div>

        </div>

        {/* BOTTOM STRIP */}
        <div className="mt-[48px] border-t border-[#111] pt-[20px] text-center">
          <div style={{ fontFamily: "var(--font-jetbrains-mono)" }} className="text-[9px] text-[#2A2A2A] tracking-[0.2em] uppercase">
            AI AGENTS · WORKFLOW AUTOMATION · LLM INTEGRATION · HISAKO ·
          </div>
        </div>

      </div>
    </footer>
  );
}
