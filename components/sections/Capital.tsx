import { Coins, Code, Zap } from "lucide-react";

const pillars = [
  {
    icon: Coins,
    title: "Pre-seed & Seed",
    description: "We write high-conviction checks from $150k to $500k at the earliest stages of formation.",
  },
  {
    icon: Code,
    title: "Capital + Code",
    description: "We don't just invest. Our core engineering and design teams help you ship and scale from day one.",
  },
  {
    icon: Zap,
    title: "Thesis Focused",
    description: "We back technical founders building the future of B2B SaaS, AI infrastructure, and compliance.",
  },
];

export function Capital() {
  return (
    <section id="capital" className="bg-[#F5F2EE] py-28 px-6 border-t border-[#E0DDD9]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#6B6860] mb-4">
            Capital
          </p>
          <h2 className="font-bold text-[42px] md:text-[48px] leading-[1.05] text-[#0F0F0F] mb-6">
            Backing early-stage builders.
          </h2>
          <p className="text-base md:text-lg text-[#6B6860] leading-relaxed mb-8">
            We provide capital and hands-on technical resources to outstanding software engineers. If you are building high-conviction software in the AI, SaaS, or compliance sectors, we want to help you scale.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-5 py-2.5 bg-[#00311F] hover:bg-[#002918] text-white text-sm font-medium rounded-lg transition-colors"
          >
            Pitch Hisako Capital
          </a>
        </div>

        {/* Cards Grid — 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={pillar.title} 
                className="bg-white rounded-xl border border-[#E0DDD9] p-8 flex flex-col justify-between min-h-[240px] transition-all hover:border-[#00311F]/30"
              >
                <div>
                  {/* Icon container */}
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-b from-[#00311F]/15 to-[#00311F]/5 border border-[#00311F]/20 flex items-center justify-center mb-6">
                    <Icon className="w-4 h-4 text-[#00311F]" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-semibold text-lg text-[#0F0F0F] mb-3">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-sm text-[#6B6860] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
