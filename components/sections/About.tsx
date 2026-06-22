import { Shield, Zap, Layers } from "lucide-react";

const pillars = [
  {
    title: "Domain expertise",
    description: "We don't build generic software. Every product we launch solves a deeply specific problem in a vertical we understand.",
    icon: Layers,
  },
  {
    title: "Built to scale",
    description: "From day one, our infrastructure is designed to handle enterprise volume, complex compliance, and strict security requirements.",
    icon: Shield,
  },
  {
    title: "Velocity",
    description: "We ship fast and iterate continuously. Small, technical teams executing without the bureaucratic overhead of large agencies.",
    icon: Zap,
  },
];

export function About() {
  return (
    <section id="about" className="bg-card py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top Row: Mission Statement */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand mb-4">
            About Hisako
          </p>
          <h2 className="font-bold text-[36px] md:text-[48px] leading-[1.08] text-foreground">
            We are a small, technical company that builds software products people actually use.
          </h2>
          <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Hisako Technologies builds across three verticals — AI automation, retail operations, and regulatory compliance. Every product we ship is independently branded and hyper-focused on its specific market.
          </p>
        </div>

        {/* Bottom Row: Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={pillar.title} 
                className="bg-background rounded-2xl border border-border p-8"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-brand/15 to-brand/5 border border-brand/20 flex items-center justify-center mb-6">
                  <Icon className="w-5 h-5 text-brand" strokeWidth={1.75} />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
