import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Logo } from './Logo';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050817] border-t-8 border-[#5B18E8] pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <Logo className="mb-12" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-5xl">
            <div className="md:col-span-1">
              <h4 className="text-white font-black uppercase tracking-widest text-sm mb-6 border-b-2 border-[#D8A326] pb-2 inline-block">
                Navigation
              </h4>
              <ul className="space-y-4 text-xs font-bold text-white/50 uppercase tracking-tight">
                <li><Link href="/" className="hover:text-[#D8A326] transition-colors">Home</Link></li>
                <li><Link href="/#about" className="hover:text-[#D8A326] transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-[#D8A326] transition-colors">Contact Us</Link></li>
              </ul>
            </div>
            
            <div className="md:col-span-1">
              <h4 className="text-white font-black uppercase tracking-widest text-sm mb-6 border-b-2 border-[#D8A326] pb-2 inline-block">
                Legal Info
              </h4>
              <ul className="space-y-4 text-xs font-bold text-white/50 uppercase tracking-tight">
                <li><Link href="/terms" className="hover:text-[#D8A326] transition-colors">Terms and Conditions</Link></li>
                <li><Link href="/privacy" className="hover:text-[#D8A326] transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>

            <div className="md:col-span-1">
              <h4 className="text-white font-black uppercase tracking-widest text-sm mb-6 border-b-2 border-[#D8A326] pb-2 inline-block">
                Affiliate Disclosure
              </h4>
              <p className="text-[10px] font-bold text-white/30 leading-relaxed uppercase tracking-tighter">
                londoncasinopro.com is an independent comparison site. We do not receive deposits or any money whatsoever from users. Instead, we send users to our partner brand dashboards and may receive a commission when they interact with those brands. We are in a professional relationship with Casimba Affiliates and feature their brands for advertising purposes.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 mb-12 border-y border-white/10 py-8">
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 neo-border border-white/20">
            <span className="w-6 h-6 rounded-full border border-red-500 text-red-500 flex items-center justify-center text-[10px] font-black">18+</span>
            <span className="text-[10px] font-black text-white/50 uppercase tracking-widest">Gamble Responsibly</span>
          </div>
          
          <div className="flex items-center gap-6 opacity-50 hover:opacity-100 transition-opacity">
            <Link href="https://www.begambleaware.org" target="_blank" className="relative w-24 h-8">
              <Image src="/gambleaware.png" alt="BeGambleAware" fill className="object-contain" />
            </Link>
            <Link href="https://www.gamcare.org.uk" target="_blank" className="relative w-24 h-8">
              <Image src="/gamcare.png" alt="GamCare" fill className="object-contain" />
            </Link>
            <Link href="https://www.gamstop.co.uk" target="_blank" className="relative w-24 h-8">
              <Image src="/gamestop.png" alt="GamStop" fill className="object-contain" />
            </Link>
          </div>
        </div>

        <div className="text-center text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-4">
          © {currentYear} LONDONCASINOPRO.COM. ALL RIGHTS RESERVED.
        </div>
        <div className="text-center text-[10px] font-bold text-white/10 uppercase tracking-widest">
          londoncasinopro.com is published and operated by Michal Jan Muszynski. This platform is managed in connection with our commercial and affiliate partnerships, including Casimba Affiliates, which are reflected in the content and offers on this domain.
        </div>
      </div>
    </footer>
  );
};
