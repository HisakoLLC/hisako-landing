"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Trigger initially in case page is already scrolled
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled 
          ? "bg-[#0A0A0A]/90 backdrop-blur-sm border-b border-white/6" 
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="h-14 max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
          <img 
            src="/logo.png" 
            alt="Hisako" 
            className="w-8 h-8 rounded-lg border border-white/10 object-cover"
          />
          <span className="ml-2.5 font-semibold text-sm text-white">
            Hisako
          </span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            href="/products" 
            className="text-sm font-medium text-white/50 hover:text-white transition-colors"
          >
            Products
          </Link>
          <Link 
            href="/about" 
            className="text-sm font-medium text-white/50 hover:text-white transition-colors"
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className="text-sm font-medium text-white/50 hover:text-white transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 -mr-2 text-white/60 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle mobile menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-14 left-0 right-0 bg-[#0A0A0A] border-b border-white/6 py-4 px-6 flex flex-col">
          <Link 
            href="/products" 
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium text-white/60 hover:text-white py-3 border-b border-white/6 transition-colors"
          >
            Products
          </Link>
          <Link 
            href="/about" 
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium text-white/60 hover:text-white py-3 border-b border-white/6 transition-colors"
          >
            About
          </Link>
          <Link 
            href="/contact" 
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium text-white/60 hover:text-white py-3 transition-colors"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
