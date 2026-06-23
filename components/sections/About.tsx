import Image from "next/image";

export function About() {
  return (
    <section id="about" className="bg-[#F5F2EE] py-28 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* LEFT COLUMN — Image block */}
        <div className="rounded-2xl overflow-hidden h-[480px] bg-[#E0DDD9] relative">
          <Image
            src="/About.png"
            alt="About us"
            fill
            className="object-cover"
          />
        </div>

        {/* RIGHT COLUMN — Text */}
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#6B6860] mb-6">
            About
          </p>
          <h2 className="font-bold text-[36px] leading-[1.08] text-[#0F0F0F] mb-6">
            A product company, not a services firm.
          </h2>
          <div className="space-y-4">
            <p className="text-base text-[#6B6860] leading-relaxed">
              Hisako Technologies builds software products across AI automation, retail operations, and regulatory compliance. Each product is independently branded and independently focused.
            </p>
            <p className="text-base text-[#6B6860] leading-relaxed">
              We are a small, technical team. We do not consult. We do not outsource. We build things we own.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
