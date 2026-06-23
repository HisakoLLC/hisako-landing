import { ArrowRight } from "lucide-react";

export function Manifesto() {
  return (
    <section className="bg-[#FFFFFF] py-28 px-6 border-t border-[#E0DDD9]">
      <div className="max-w-4xl mx-auto">
        {/* Label */}
        <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#6B6860] mb-6">
          Get in touch
        </p>

        {/* Statement */}
        <h2 className="font-bold text-[42px] leading-[1.05] text-[#0F0F0F] max-w-2xl mb-10">
          Have a project in mind, or want to know more about what we build?
        </h2>

        {/* Contact CTA */}
        <a 
          href="mailto:hello@hisako.eu" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#00311F] text-white text-sm font-medium rounded-lg hover:bg-[#004d2e] transition-colors"
        >
          hello@hisako.eu
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
