"use client";

export default function About() {
  return (
    <section id="about" className="bg-[#080808] py-[160px]">
      <div className="container">
        
        <div className="flex flex-col md:flex-row gap-[80px]">
          
          {/* LEFT (45%) */}
          <div className="md:w-[45%] flex flex-col items-start justify-center relative min-h-[400px]">
            <span 
              style={{ fontFamily: "var(--font-bebas-neue)", WebkitTextStroke: "1px #1E1E1E" }} 
              className="text-[clamp(5rem,8vw,9rem)] text-transparent leading-[1] select-none"
            >
              HISAKO
            </span>
            <span style={{ fontFamily: "var(--font-jetbrains-mono)" }} className="text-[9px] text-[#333] mt-[16px] uppercase tracking-[0.1em]">
              [ AI AGENCY · NAIROBI, KENYA ]
            </span>
          </div>

          {/* RIGHT (55%) */}
          <div className="md:w-[55%]">
            <div style={{ fontFamily: "var(--font-jetbrains-mono)" }} className="text-[10px] text-[#444] mb-[16px]">
              [ 04 ABOUT ]
            </div>
            <h2 style={{ fontFamily: "var(--font-bebas-neue)" }} className="text-[56px] text-[#F5F5F0] leading-[1]">
              We are builders.
            </h2>

            <div style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 400 }} className="text-[15px] text-[#666] leading-[1.85] mt-[28px]">
              <p>
                Hisako is an AI agency and tech studio based in Nairobi, operating globally. We build custom AI systems for client businesses while simultaneously developing and owning our own AI-powered software products.
              </p>
              <p className="mt-[20px]">
                The agency sharpens our execution. The products prove our architecture. Both make us better at what we do.
              </p>
            </div>

            <div className="mt-[40px] flex flex-col gap-[24px]">
              {/* Principle 1 */}
              <div className="border-l border-[#1E1E1E] pl-[20px]">
                <div style={{ fontFamily: "var(--font-jetbrains-mono)" }} className="text-[9px] text-[#444] tracking-[0.15em] uppercase">
                  PRECISION
                </div>
                <div style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 400 }} className="text-[14px] text-[#555] leading-[1.65] mt-[6px]">
                  We design before we build. Architecture decisions made early save months later.
                </div>
              </div>

              {/* Principle 2 */}
              <div className="border-l border-[#1E1E1E] pl-[20px]">
                <div style={{ fontFamily: "var(--font-jetbrains-mono)" }} className="text-[9px] text-[#444] tracking-[0.15em] uppercase">
                  VELOCITY
                </div>
                <div style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 400 }} className="text-[14px] text-[#555] leading-[1.65] mt-[6px]">
                  Working systems in weeks, not quarters. We move fast without breaking foundations.
                </div>
              </div>

              {/* Principle 3 */}
              <div className="border-l border-[#1E1E1E] pl-[20px]">
                <div style={{ fontFamily: "var(--font-jetbrains-mono)" }} className="text-[9px] text-[#444] tracking-[0.15em] uppercase">
                  OWNERSHIP
                </div>
                <div style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 400 }} className="text-[14px] text-[#555] leading-[1.65] mt-[6px]">
                  We treat client systems like our own. Because we know what it means to own what you ship.
                </div>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}
