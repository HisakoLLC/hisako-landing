import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white border-t border-navy-border relative overflow-hidden">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-10 sm:pt-14 pb-10 sm:pb-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 pb-10 sm:pb-14 border-b border-white/10">
          {/* Brand & Contact Area (Left) */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <div className="space-y-2.5">
              <Link href="/" className="inline-flex items-center gap-2.5 py-1 group">
                <Image
                  src="/icon.jpg"
                  alt="Hisako Logo"
                  width={28}
                  height={28}
                  className="w-7 h-7 rounded-sm object-contain shrink-0 group-hover:opacity-90 transition-opacity"
                />
                <span className="font-heading font-bold text-2xl tracking-tight text-white group-hover:text-primary transition-colors">
                  Hisako
                </span>
              </Link>
              <p className="font-sans text-sm text-white/70 max-w-sm leading-relaxed">
                Technology that moves businesses forward.
              </p>
            </div>

            {/* Email / Contact Area */}
            <div className="space-y-1">
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-white/40 block">
                Direct Inquiries
              </span>
              <a
                href="mailto:hello@hisako.eu"
                className="font-sans text-sm font-medium text-white hover:text-primary transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-primary break-all py-1 inline-block"
              >
                hello@hisako.eu
              </a>
            </div>

            {/* Location */}
            <div className="space-y-1">
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-white/40 block">
                Location
              </span>
              <p className="font-sans text-sm text-white/80">
                Nairobi, Kenya
              </p>
            </div>
          </div>

          {/* Navigation Columns (Right: 2 cols on mobile, 3 cols on tablet/desktop) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Capabilities */}
            <div className="space-y-3 sm:space-y-4">
              <p className="text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-wider text-white/40">
                Capabilities
              </p>
              <ul className="space-y-1.5 sm:space-y-2 text-sm">
                <li>
                  <Link
                    href="/capabilities"
                    className="text-white/70 hover:text-white transition-colors py-1 inline-block min-h-[32px] flex items-center"
                  >
                    Software Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/capabilities"
                    className="text-white/70 hover:text-white transition-colors py-1 inline-block min-h-[32px] flex items-center"
                  >
                    AI & Automation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/capabilities"
                    className="text-white/70 hover:text-white transition-colors py-1 inline-block min-h-[32px] flex items-center"
                  >
                    Digital Transformation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/capabilities"
                    className="text-white/70 hover:text-white transition-colors py-1 inline-block min-h-[32px] flex items-center"
                  >
                    Technology Infrastructure
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-3 sm:space-y-4">
              <p className="text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-wider text-white/40">
                Company
              </p>
              <ul className="space-y-1.5 sm:space-y-2 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="text-white/70 hover:text-white transition-colors py-1 inline-block min-h-[32px] flex items-center"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/work"
                    className="text-white/70 hover:text-white transition-colors py-1 inline-block min-h-[32px] flex items-center"
                  >
                    Work
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-white/70 hover:text-white transition-colors py-1 inline-block min-h-[32px] flex items-center"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Links (Placeholders — No invented URLs) */}
            <div className="space-y-3 sm:space-y-4 col-span-2 sm:col-span-1">
              <p className="text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-wider text-white/40">
                Connect
              </p>
              <ul className="space-y-1.5 sm:space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors py-1 inline-block min-h-[32px] flex items-center"
                    aria-label="LinkedIn (placeholder)"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors py-1 inline-block min-h-[32px] flex items-center"
                    aria-label="X / Twitter (placeholder)"
                  >
                    X (Twitter)
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors py-1 inline-block min-h-[32px] flex items-center"
                    aria-label="GitHub (placeholder)"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal & Location */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-mono text-white/40">
          <p>© {currentYear} Hisako. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
          </div>
          <p>Nairobi, Kenya</p>
        </div>
      </div>
    </footer>
  )
}
