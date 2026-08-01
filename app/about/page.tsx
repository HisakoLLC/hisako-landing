import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: "Hisako operates as a venture studio co-founding software companies, a capital provider backing early-stage technical founders, and a software company building proprietary tools.",
};

const products = [
  {
    number: "01",
    name: "Zetafo",
    category: "AI Automation",
    description: "AI workflows and agent infrastructure for US B2B companies.",
    link: "https://zetafo.com",
  },
  {
    number: "02",
    name: "VendoFlow",
    category: "Retail SaaS",
    description: "Point-of-sale and inventory management for fashion boutiques.",
    link: "https://vendoflow.com",
  },
  {
    number: "03",
    name: "Passr",
    category: "Compliance SaaS",
    description: "Digital Product Passport infrastructure for EU outdoor brands.",
    link: "https://passr.eu",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-background min-h-screen pt-40 pb-28 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* SECTION 1 — Overview */}
        <div className="mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground mb-6">
            About Hisako
          </p>
          <h1 className="font-bold text-[48px] leading-[1.04] text-foreground max-w-3xl">
            A multi-disciplinary software institution.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Hisako operates at the intersection of creation, investment, and engineering. We are a venture studio co-founding independent software companies, a capital provider backing early-stage technical teams, and a software company building long-term digital tools.
          </p>
        </div>

        {/* IMAGE BANNER */}
        <div className="mb-24 rounded-xl overflow-hidden h-[400px] w-full bg-border relative">
          <Image
            src="/Modern Office Workspace.png"
            alt="Hisako Workspace"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* SECTION 2 — Venture Studio */}
        <div className="border-t border-border pt-16 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h2 className="font-semibold text-xl text-foreground">01 / Venture Studio</h2>
              <p className="text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground mt-1">Co-founding & Building</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-base text-muted-foreground leading-relaxed">
                Through our studio, we turn raw ideas into standalone software companies. We partner with exceptional operators or deploy internal research, providing the initial engineering, design, and distribution power required to scale.
              </p>
            </div>
          </div>

          <div className="flex flex-col border-t border-border/60">
            {products.map((product, index) => (
              <div 
                key={product.name} 
                className={`grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 items-start ${
                  index !== products.length - 1 ? "border-b border-border/40" : ""
                }`}
              >
                <div className="md:col-span-1">
                  <span className="text-sm font-mono text-muted-foreground">
                    {product.number}
                  </span>
                </div>
                
                <div className="md:col-span-4">
                  <h3 className="font-semibold text-lg text-foreground">
                    {product.name}
                  </h3>
                  <p className="text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground mt-1">
                    {product.category}
                  </p>
                </div>

                <div className="md:col-span-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="md:col-span-2 md:text-right mt-2 md:mt-0">
                  <a 
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-foreground hover:text-brand transition-colors underline underline-offset-4"
                  >
                    Visit &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 3 — Capital */}
        <div className="border-t border-border pt-16 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="font-semibold text-xl text-foreground">02 / Capital</h2>
              <p className="text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground mt-1">Investing & Backing</p>
            </div>
            <div className="md:col-span-2 space-y-4">
              <p className="text-base text-muted-foreground leading-relaxed">
                We write high-conviction pre-seed and seed checks from $150k to $500k. We focus exclusively on highly technical founders building in the B2B SaaS, AI infrastructure, and compliance spaces.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed font-medium">
                Capital + Code: We believe early-stage founders need engineers, not advisors. Alongside funding, we commit dedicated design and development bandwidth to help portfolio companies ship their core products.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 4 — Software */}
        <div className="border-t border-border pt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="font-semibold text-xl text-foreground">03 / Software</h2>
              <p className="text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground mt-1">Engineering & R&D</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-base text-muted-foreground leading-relaxed">
                As a software company, we maintain a dedicated internal R&D lab. We design, engineer, and operate proprietary tools and digital utility platforms. We build with a focus on durability and security, engineering software systems that are built to run indefinitely.
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
