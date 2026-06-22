import { Bot, ShoppingBag, Shield } from "lucide-react";

const products = [
  {
    name: "Zetafo",
    icon: Bot,
    category: "AI Agency",
    description: "AI automation and agent infrastructure for US B2B companies. We build and deploy custom AI workflows.",
    link: "https://zetafo.com",
  },
  {
    name: "VendoFlow",
    icon: ShoppingBag,
    category: "Retail SaaS",
    description: "Point-of-sale and inventory management for fashion boutiques. M-Pesa native, built for the shop floor.",
    link: "https://vendoflow.co",
  },
  {
    name: "Passr",
    icon: Shield,
    category: "Compliance SaaS",
    description: "Digital Product Passport infrastructure for EU outdoor brands. Built for ESPR, AGEC, and PFAS compliance.",
    link: "https://passr.eu",
  },
];

export function Products() {
  return (
    <section id="products" className="bg-[#0A0A0A] pt-4 pb-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/30 mb-3">
            What we build
          </p>
          <h2 className="font-bold text-4xl text-white leading-tight">
            Our products
          </h2>
          <p className="text-base text-white/40 mt-3">
            Each one independently branded, independently focused.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <a
                key={product.name}
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/[0.03] rounded-2xl border border-white/8 p-7 flex flex-col gap-5 hover:bg-white/[0.05] hover:border-white/12 transition-all duration-200 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#00311F]/40 border border-[#00311F]/30 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#00b87a]" strokeWidth={1.75} />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/25 border border-white/8 px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
                
                <div className="mt-2">
                  <h3 className="font-semibold text-xl text-white">
                    {product.name}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed mt-2 line-clamp-2">
                    {product.description}
                  </p>
                </div>

                <div className="mt-auto pt-4 border-t border-white/6">
                  <span className="text-sm font-medium text-[#00b87a] group-hover:text-[#00d68a] transition-colors inline-flex items-center">
                    Visit {product.name} <span aria-hidden="true" className="ml-1">&rarr;</span>
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
