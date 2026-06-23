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

export function Products() {
  return (
    <section id="products" className="bg-[#FFFFFF] py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#6B6860] mb-4">
            Our products
          </p>
          <h2 className="font-bold text-[42px] leading-[1.05] text-[#0F0F0F]">
            Three products. One team.
          </h2>
        </div>

        <div className="flex flex-col">
          {products.map((product, index) => (
            <div 
              key={product.name} 
              className={`grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-12 items-start ${
                index !== products.length - 1 ? "border-b border-[#E0DDD9]" : ""
              }`}
            >
              <div className="md:col-span-1">
                <span className="text-sm font-medium text-[#6B6860] font-mono md:pt-1 block">
                  {product.number}
                </span>
              </div>
              
              <div className="md:col-span-4">
                <h3 className="font-bold text-2xl text-[#0F0F0F]">
                  {product.name}
                </h3>
                <p className="text-xs font-medium uppercase tracking-[0.1em] text-[#6B6860] mt-1">
                  {product.category}
                </p>
              </div>

              <div className="md:col-span-4">
                <p className="text-base text-[#6B6860] leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="md:col-span-3 md:text-right mt-2 md:mt-0">
                <a 
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[#0F0F0F] hover:text-[#00311F] transition-colors underline underline-offset-4"
                >
                  Visit &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
