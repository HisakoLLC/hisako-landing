import Image from "next/image";

export default function UnderConstruction() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#0A0A0A]">
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center max-w-sm mx-auto px-6 text-center">

        {/* Logo mark at top */}
        <div className="w-12 h-12 bg-black border border-white/10 rounded-xl flex items-center justify-center mb-8 overflow-hidden relative">
          <Image src="/logo.png" alt="Hisako Logo" fill className="object-cover" />
        </div>

        {/* Wordmark below the mark */}
        <div className="font-semibold text-sm tracking-[0.15em] uppercase text-white/60 mb-12">
          Hisako
        </div>

        {/* Headline */}
        <h1 className="font-bold text-[32px] leading-[1.1] text-white mb-4">
          Something is being built.
        </h1>

        {/* Subtext */}
        <p className="text-sm text-white/40 mb-16">
          hisako.eu is coming soon.
        </p>

        {/* Thin horizontal rule */}
        <div className="w-8 h-px bg-white/10 mx-auto mb-16"></div>

        {/* Footer line at bottom */}
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p className="text-xs text-white/20">
            © 2026 Hisako Technologies
          </p>
        </div>
      </div>
    </main>
  );
}
