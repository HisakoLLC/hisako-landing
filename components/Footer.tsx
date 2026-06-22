import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/6 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* TOP ROW */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pb-12 border-b border-white/6">
          
          {/* Col 1 — Brand block */}
          <div className="col-span-2 md:col-span-1 flex flex-col">
            <Link href="/" className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Hisako" 
                className="w-8 h-8 rounded-lg border border-white/10 object-cover bg-white/8"
              />
              <span className="ml-2.5 font-semibold text-sm text-white">
                Hisako
              </span>
            </Link>
            <p className="mt-3 text-xs text-white/30 max-w-[160px]">
              Building software for the next decade.
            </p>
          </div>

          {/* Col 2 — Products */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/30 mb-4">
              Products
            </p>
            <a href="https://zetafo.com" target="_blank" rel="noopener noreferrer" className="block mb-2.5 text-sm text-white/50 hover:text-white transition-colors">
              Zetafo
            </a>
            <a href="https://vendoflow.com" target="_blank" rel="noopener noreferrer" className="block mb-2.5 text-sm text-white/50 hover:text-white transition-colors">
              VendoFlow
            </a>
            <a href="https://passr.eu" target="_blank" rel="noopener noreferrer" className="block mb-2.5 text-sm text-white/50 hover:text-white transition-colors">
              Passr
            </a>
          </div>

          {/* Col 3 — Company */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/30 mb-4">
              Company
            </p>
            <a href="#about" className="block mb-2.5 text-sm text-white/50 hover:text-white transition-colors">
              About
            </a>
            <a href="mailto:hello@hisako.eu" className="block mb-2.5 text-sm text-white/50 hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Col 4 — Legal */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/30 mb-4">
              Legal
            </p>
            <Link href="/privacy" className="block mb-2.5 text-sm text-white/50 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="block mb-2.5 text-sm text-white/50 hover:text-white transition-colors">
              Terms
            </Link>
          </div>

        </div>

        {/* BOTTOM ROW */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/25">
          <p>&copy; 2026 Hisako Technologies. All rights reserved.</p>
          <p>hisako.eu</p>
        </div>

      </div>
    </footer>
  );
}
