import { ArrowRight } from "lucide-react";

export function Manifesto() {
  return (
    <section className="bg-[#0A0A0A] py-32 px-6">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/30 mb-6">
          Hisako Technologies
        </p>
        
        <h2 className="font-bold text-[36px] md:text-[52px] leading-[1.05] text-white">
          Serious software, built by a serious team.
        </h2>
        
        <p className="mt-5 text-base text-white/40 max-w-lg mx-auto leading-relaxed">
          We are not a consultancy. We are not an outsourcing firm. 
          We build products we own and stand behind.
        </p>
        
        <div className="mt-10">
          <a 
            href="mailto:hello@hisako.eu" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-zinc-900 text-sm font-medium rounded-lg hover:bg-zinc-100 transition-colors"
          >
            Get in touch
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
