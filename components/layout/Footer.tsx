import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const links = [
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="w-full border-t border-[#161616] bg-[#000000] pt-16">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 pb-16">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Hisako Logo" width={24} height={24} className="h-[24px] w-auto grayscale" />
            <span className="font-mono font-bold text-[11px] tracking-[0.2em] text-[#ffffff]">HISAKO</span>
          </div>
          <p className="text-[13px] text-[#555555] max-w-[200px] leading-relaxed" style={{ fontFamily: '"DM Sans", sans-serif' }}>
            AI Agency — Nairobi, Kenya
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-mono text-[11px] uppercase tracking-widest text-[#888888] hover:text-[#eb3f25] transition-colors duration-200 w-fit"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3 md:items-end text-left md:text-right">
          <p className="font-mono text-[11px] text-[#888888] uppercase">
            © 2026 Hisako Technologies Limited. Nairobi, Kenya.
          </p>
        </div>
      </div>

      <div className="w-full border-t border-[#161616] py-4 text-center overflow-hidden flex items-center justify-center">
        <p className="font-mono text-[clamp(0.55rem,1.2vw,0.75rem)] uppercase tracking-[0.2em] text-[#888888] whitespace-nowrap">
          AI AGENTS · WORKFLOW AUTOMATION · LLM INTEGRATION · HISAKO · 
        </p>
      </div>
    </footer>
  );
}
