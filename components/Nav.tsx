"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F5F2EE] border-b border-[#E0DDD9] h-[60px]">
      <div className="h-full max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* LEFT — Logo */}
        <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
          <span className="font-semibold text-sm text-[#0F0F0F] tracking-tight">
            Hisako
          </span>
        </Link>
        
        {/* RIGHT — Nav links + CTA (Desktop) */}
        <div className="hidden md:flex items-center">
          <nav className="flex items-center gap-8">
            <Link 
              href="#products" 
              className="text-sm font-medium text-[#6B6860] hover:text-[#0F0F0F] transition-colors"
            >
              Products
            </Link>
            <Link 
              href="/about" 
              className="text-sm font-medium text-[#6B6860] hover:text-[#0F0F0F] transition-colors"
            >
              About
            </Link>
          </nav>
          
          <Link 
            href="/contact" 
            className="ml-6 px-4 py-2 bg-[#0F0F0F] text-white text-sm font-medium rounded-lg hover:bg-[#2a2a2a] transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 -mr-2 text-[#0F0F0F] hover:opacity-70 transition-opacity"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle mobile menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-[60px] left-0 right-0 bg-[#F5F2EE] border-b border-[#E0DDD9] py-4 px-6 flex flex-col gap-2">
          <Link 
            href="#products" 
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium text-[#6B6860] hover:text-[#0F0F0F] py-3 border-b border-[#E0DDD9] transition-colors"
          >
            Products
          </Link>
          <Link 
            href="/about" 
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium text-[#6B6860] hover:text-[#0F0F0F] py-3 border-b border-[#E0DDD9] transition-colors"
          >
            About
          </Link>
          <div className="py-3">
            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)}
              className="inline-block px-4 py-2 bg-[#0F0F0F] text-white text-sm font-medium rounded-lg hover:bg-[#2a2a2a] transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
