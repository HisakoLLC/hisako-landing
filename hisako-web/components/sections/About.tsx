import { Layers, Code2, Globe } from "lucide-react";

export function About() {
  return (
    <section id="about" className="bg-white py-32 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* ROW 1: Mission Statement */}
        <div className="text-center max-w-3xl mx-auto mb-24 flex flex-col items-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#00311F] mb-4">
            About Hisako
          </p>
          <h2 className="font-bold text-[36px] md:text-[48px] leading-[1.08] text-zinc-900">
            We are a small, technical company that builds software products people actually use.
          </h2>
          <p className="mt-6 text-base text-zinc-500 leading-relaxed max-w-2xl mx-auto">
            Hisako Technologies builds across three verticals — AI automation, retail operations, and regulatory compliance. Every product we ship is independently branded and independently focused. We are the team behind all of it.
          </p>
        </div>

        {/* ROW 2: Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-100 rounded-2xl overflow-hidden border border-zinc-100">
          
          {/* Pillar 1 */}
          <div className="bg-white p-8 flex flex-col gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-[#00311F]/15 to-[#00311F]/5 border border-[#00311F]/20 flex items-center justify-center mb-1">
              <Layers className="w-5 h-5 text-[#00311F]" strokeWidth={1.75} />
            </div>
            <h3 className="font-semibold text-base text-zinc-900">
              Independent products
            </h3>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Each product has its own brand, domain, and customer base. None of them depend on each other to exist.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white p-8 flex flex-col gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-[#00311F]/15 to-[#00311F]/5 border border-[#00311F]/20 flex items-center justify-center mb-1">
              <Code2 className="w-5 h-5 text-[#00311F]" strokeWidth={1.75} />
            </div>
            <h3 className="font-semibold text-base text-zinc-900">
              Built to last
            </h3>
            <p className="text-sm text-zinc-500 leading-relaxed">
              We do not ship demos. Every product is designed for real customers, real revenue, and real scale.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white p-8 flex flex-col gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-[#00311F]/15 to-[#00311F]/5 border border-[#00311F]/20 flex items-center justify-center mb-1">
              <Globe className="w-5 h-5 text-[#00311F]" strokeWidth={1.75} />
            </div>
            <h3 className="font-semibold text-base text-zinc-900">
              Global by default
            </h3>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Our products serve customers globally. We build for markets, not geographies.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
