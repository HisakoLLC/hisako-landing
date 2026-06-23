import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-background min-h-screen pt-32 pb-24 px-6 flex items-center">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* LEFT COLUMN */}
        <div>
          <h1 className="font-bold text-[56px] md:text-[72px] leading-[1.02] text-foreground text-left">
            Software built to last.
          </h1>
          
          <p className="mt-6 max-w-sm text-lg text-muted-foreground leading-relaxed text-left">
            Hisako Technologies builds independent software products across AI automation, retail, and compliance.
          </p>
          
          <div className="mt-10 flex gap-4 items-center">
            <a 
              href="#products" 
              className="px-5 py-2.5 bg-brand text-white text-sm font-medium rounded-lg hover:bg-[#004d2e] transition-colors"
            >
              See our products
            </a>
            <a 
              href="/about" 
              className="text-foreground text-sm font-medium underline underline-offset-4 hover:text-brand transition-colors"
            >
              About us
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
