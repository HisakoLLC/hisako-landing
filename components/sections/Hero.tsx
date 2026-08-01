import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-background min-h-screen pt-32 pb-24 px-6 flex items-center">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* LEFT COLUMN */}
        <div>
          <h1 className="font-bold text-[56px] md:text-[72px] leading-[1.02] text-foreground text-left">
            We build, fund, and engineer software.
          </h1>
          
          <p className="mt-6 max-w-md text-lg text-muted-foreground leading-relaxed text-left">
            Hisako is a venture studio co-founding software companies, a capital provider backing early-stage technical founders, and a software company building proprietary tools.
          </p>
          
          <div className="mt-10 flex gap-6 items-center">
            <a 
              href="/#studio" 
              className="px-5 py-2.5 bg-brand text-white text-sm font-medium rounded-lg hover:bg-[#002918] transition-colors"
            >
              Explore our studio
            </a>
            <a 
              href="/contact" 
              className="text-foreground text-sm font-medium underline underline-offset-4 hover:text-brand transition-colors"
            >
              Pitch for capital
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-full h-[520px] rounded-2xl overflow-hidden bg-border relative">
          <Image 
            src="/Product section.png"
            alt="Hero image"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
