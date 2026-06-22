import { ArrowRight } from "lucide-react";

export function Manifesto() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Eyebrow */}
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand mb-6">
          Hisako Technologies
        </p>

        {/* Statement */}
        <h2 className="font-bold text-[36px] md:text-[52px] leading-[1.05] text-foreground">
          Serious software, built by a serious team.
        </h2>

        {/* Sub-statement */}
        <p className="mt-5 text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
          We are not a consultancy. We are not an outsourcing firm. 
          We build products we own and stand behind.
        </p>

        {/* Contact CTA */}
        <div className="mt-10">
          <a 
            href="mailto:hello@hisako.eu" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            Get in touch
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
