"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Logo } from './Logo';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Brands', href: '/#brands' },
    { name: 'About Us', href: '/#about' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* 18+ Top Disclaimer Bar */}
      <div className="bg-[#050817] border-b border-white/10 py-2">
        <div className="container mx-auto px-4 flex items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-5 h-5 rounded-full border border-red-500 text-red-500 font-black text-[10px]">18+</span>
            <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">Please Gamble Responsibly</span>
          </div>
          <div className="hidden sm:block h-3 w-[1px] bg-white/10"></div>
          <Link href="https://www.begambleaware.org" target="_blank" className="text-[10px] font-black text-[#D8A326] hover:text-white transition-colors uppercase tracking-[0.2em]">
            BeGambleAware.org
          </Link>
        </div>
      </div>

      <div className="w-full bg-[#0A0F29] border-b-4 border-[#5B18E8]">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="hover:opacity-90 transition-opacity">
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-black uppercase tracking-widest text-white/70 hover:text-[#D8A326] transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D8A326] group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`w-full h-1 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-full h-1 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-1 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>
    </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0A0F29] border-t-2 border-[#5B18E8] py-6 px-4 neo-shadow-purple">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-black uppercase tracking-tighter text-white hover:text-[#D8A326]"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
