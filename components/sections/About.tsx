import Image from "next/image";

export function About() {
  return (
    <section id="software" className="bg-[#FFFFFF] py-28 px-6 border-t border-[#E0DDD9]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* LEFT COLUMN — Image block */}
        <div className="rounded-2xl overflow-hidden h-[480px] bg-[#E0DDD9] relative">
          <Image
            src="/CTA.png"
            alt="Software lab"
            fill
            className="object-cover"
          />
        </div>

        {/* RIGHT COLUMN — Text */}
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#6B6860] mb-6">
            Software
          </p>
          <h2 className="font-bold text-[36px] leading-[1.08] text-[#0F0F0F] mb-6">
            Engineering robust, long-term systems.
          </h2>
          <div className="space-y-4">
            <p className="text-base text-[#6B6860] leading-relaxed">
              At our core, Hisako is a software company. We maintain a dedicated software lab that designs, builds, and operates proprietary platforms, tools, and developer infrastructure.
            </p>
            <p className="text-base text-[#6B6860] leading-relaxed">
              We focus on performance, security, and extreme engineering discipline. Rather than building for temporary trends, we develop products designed to run indefinitely.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
