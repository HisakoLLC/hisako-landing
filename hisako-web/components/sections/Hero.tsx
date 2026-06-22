import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#0A0A0A] overflow-hidden">
      {/* Radial glow background behind text */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 40%, rgba(0,49,31,0.35) 0%, transparent 70%)"
        }}
      />
      
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Eyebrow pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-white/50 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00311F]" />
          Hisako Technologies
        </div>

        {/* Headline */}
        <h1 className="font-bold text-[52px] md:text-[72px] leading-[1.02] text-white">
          Building software for the next decade.
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-base md:text-lg text-white/50 max-w-xl mx-auto leading-relaxed">
          We are a product company. We build focused, independent software products across AI, retail, and compliance.
        </p>

        {/* CTA row */}
        <div className="mt-10 flex gap-4 justify-center">
          <a 
            href="#products" 
            className="px-5 py-2.5 bg-[#00311F] hover:bg-[#004d2e] text-white text-sm font-medium rounded-lg transition-colors"
          >
            See our products
          </a>
          <a 
            href="#about" 
            className="px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium rounded-lg transition-colors"
          >
            About us
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <ChevronDown className="w-4 h-4 text-white/20 animate-bounce" />
      </div>
    </section>
  );
}
