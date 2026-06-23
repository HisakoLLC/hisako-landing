import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#0F0F0F] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-12">
          {/* LEFT BLOCK */}
          <div>
            <div className="flex items-center">
              <div className="w-7 h-7 bg-white/10 rounded-md flex items-center justify-center text-white font-bold text-base leading-none">
                *
              </div>
              <span className="font-semibold text-sm text-white ml-2">
                Hisako
              </span>
            </div>
            <span className="mt-3 block text-xs text-white/40 max-w-[180px] leading-relaxed">
              Software built to last.
            </span>
          </div>

          {/* THREE LINK COLUMNS */}
          <div className="flex flex-col sm:flex-row gap-10 md:gap-16">
            {/* Col 1 */}
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/30 mb-4">
                Products
              </p>
              <a href="https://zetafo.com" target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-white transition-colors block mb-3">
                Zetafo
              </a>
              <a href="https://vendoflow.com" target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-white transition-colors block mb-3">
                VendoFlow
              </a>
              <a href="https://passr.eu" target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-white transition-colors block mb-3">
                Passr
              </a>
            </div>

            {/* Col 2 */}
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/30 mb-4">
                Company
              </p>
              <Link href="/about" className="text-sm text-white/50 hover:text-white transition-colors block mb-3">
                About
              </Link>
              <Link href="/contact" className="text-sm text-white/50 hover:text-white transition-colors block mb-3">
                Contact
              </Link>
            </div>

            {/* Col 3 */}
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/30 mb-4">
                Legal
              </p>
              <Link href="/privacy" className="text-sm text-white/50 hover:text-white transition-colors block mb-3">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-white/50 hover:text-white transition-colors block mb-3">
                Terms
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 pt-8 border-t border-white/8 flex flex-col sm:flex-row justify-between gap-4 text-xs text-white/25">
          <p>© 2026 Hisako Technologies. All rights reserved.</p>
          <p>hisako.eu</p>
        </div>
      </div>
    </footer>
  );
}
