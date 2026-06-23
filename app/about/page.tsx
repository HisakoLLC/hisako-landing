import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Hisako Technologies builds independent software products across AI automation, retail, and compliance.",
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
        {/* SECTION 1 — Mission */}
        <div className="mb-24">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground mb-6">
            About Hisako
          </p>
          <h1 className="font-bold text-[48px] leading-[1.04] text-foreground max-w-3xl">
            We build software products that solve real problems.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Hisako Technologies is a software product company. We build focused, 
            independently branded products across three verticals — AI automation, 
            retail operations, and regulatory compliance. Every product we ship is 
            designed to operate independently, with its own brand, domain, and customers.
          </p>
        </div>

        {/* SECTION 2 — Products */}
        <div className="border-t border-border pt-16">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground mb-10">
            What we build
          </p>

          <div className="flex flex-col">
            {products.map((product, index) => (
               <div 
               key={product.name} 
               className={`grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 items-start ${
                 index !== products.length - 1 ? "border-b border-border" : ""
               }`}
             >
                {/* Col span-1 */}
                <div className="md:col-span-1">
                  <span className="text-sm font-mono text-muted-foreground">
                    {product.number}
                  </span>
                </div>
                
                {/* Col span-4 */}
                <div className="md:col-span-4">
                  <h3 className="font-bold text-xl text-foreground">
                    {product.name}
                  </h3>
                  <p className="text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground mt-1">
                    {product.category}
                  </p>
                </div>

                {/* Col span-5 */}
                <div className="md:col-span-5">
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Col span-2 */}
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
      </div>
    </main>
  );
}
