"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Brand } from '@/app/data/brands';
import { track } from '@vercel/analytics';

const GCLID_KEY = 'lcp_gclid';

interface BrandCardProps {
  brand: Brand;
  rank?: number;
  gclid?: string | null;
}

export const buildUrl = (url: string, gclid: string | null | undefined) => {
  if (!gclid) return url;
  if (url.endsWith('=')) {
    return `${url}${gclid}`;
  }
  return url;
};

declare global {
  interface Window {
    gtag_report_conversion: (url?: string) => void;
  }
}

export const BrandCard: React.FC<BrandCardProps> = ({ brand, gclid: gclidProp }) => {
  const [gclid, setGclid] = useState<string | null>(gclidProp ?? null);

  useEffect(() => {
    if (gclidProp) {
      sessionStorage.setItem(GCLID_KEY, gclidProp);
      setGclid(gclidProp);
    } else {
      const stored = sessionStorage.getItem(GCLID_KEY);
      if (stored) setGclid(stored);
    }
  }, [gclidProp]);

  const finalUrl = buildUrl(brand.url, gclid);

  const handleCardClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    track('Brand Click', { brand: brand.name });
    if (typeof window !== 'undefined' && window.gtag_report_conversion) {
      window.gtag_report_conversion();
    }
    window.open(finalUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <a
      href={brand.displayUrl}
      onClick={handleCardClick}
      className="bg-[#0D1433] neo-border border-[#5B18E8] neo-shadow-purple relative group flex flex-col md:flex-row transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0_#5B18E8] cursor-pointer no-underline"
    >
      {/* Left Accent Bar (Desktop) / Top (Mobile) */}
      <div className="w-full h-1 md:w-2 md:h-auto bg-[#D8A326] shrink-0" />
      
      {brand.badge && (
        <div className="absolute top-1 left-0 md:top-0 md:left-2 bg-[#D8A326] text-[#050817] font-black px-3 md:px-4 py-0.5 md:py-1 text-[10px] md:text-xs uppercase tracking-widest neo-border border-t-0 border-l-0 z-10">
          {brand.badge}
        </div>
      )}

      <div className="p-3 md:p-6 flex flex-col md:flex-row items-center gap-3 md:gap-8 flex-1">
        {/* Logo & Rating Section */}
        <div className="flex flex-row md:flex-col items-center justify-between md:justify-center gap-4 shrink-0 w-full md:w-56">
          <div className="relative w-24 h-20 md:w-44 md:h-32 bg-white/5 neo-border border-white/10 p-1 md:p-3 flex items-center justify-center group-hover:neo-shadow-sm transition-all overflow-hidden">
            <div className="text-3xl md:text-5xl grayscale group-hover:grayscale-0 transition-all opacity-20">🎰</div>
            <Image 
              src={brand.logo} 
              alt={brand.name} 
              fill 
              className="object-contain p-2 md:p-4 scale-110 md:scale-125 transition-transform group-hover:scale-135"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
          
          <div className="flex flex-col items-end md:items-center flex-1 md:flex-none">
            <div className="flex items-center gap-2">
              <div className="bg-[#5B18E8] text-white px-1.5 md:px-2 py-0.5 text-[8px] md:text-[10px] font-black cut-corner-sm">
                {brand.rating.toFixed(1)}
              </div>
              <div className="flex text-[#D8A326] text-[10px] md:text-xs">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < Math.ceil(brand.rating / 2) ? "opacity-100" : "opacity-20"}>★</span>
                ))}
              </div>
            </div>
            <div className="text-[7px] md:text-[9px] text-white/30 uppercase font-bold tracking-tighter mt-1">
              {brand.votes.toLocaleString()} Verified Votes
            </div>
          </div>
        </div>

        {/* Bonus Info Section */}
        <div className="flex-1 w-full">
          <div className="bg-white/5 border-2 border-white/10 p-3 md:p-6 relative overflow-hidden h-full flex flex-col justify-center">
            {/* Geometric corner cut using clip-path */}
            <div className="absolute top-0 right-0 w-8 h-8 md:w-12 md:h-12 bg-[#D8A326] translate-x-4 -translate-y-4 md:translate-x-6 md:-translate-y-6 rotate-45" />
            
            <div className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-[#D8A326] font-black mb-1 md:mb-2">Exclusive Offer</div>
            <div className="text-sm md:text-2xl font-black text-white leading-tight uppercase tracking-tight">
              {brand.bonus}
            </div>
            <div className="mt-2 md:mt-4 flex flex-wrap gap-2 md:gap-4">
              <div className="text-[8px] md:text-[10px] font-bold text-white/40 uppercase tracking-widest flex items-center gap-1">
                <span className="text-[#D8A326]">✔</span> Fast Payouts
              </div>
              <div className="text-[8px] md:text-[10px] font-bold text-white/40 uppercase tracking-widest flex items-center gap-1">
                <span className="text-[#D8A326]">✔</span> UK Licensed
              </div>
              <div className="hidden md:flex text-[8px] md:text-[10px] font-bold text-white/40 uppercase tracking-widest items-center gap-1">
                <span className="text-[#D8A326]">✔</span> 24/7 Support
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button Section */}
        <div className="shrink-0 w-full md:w-64">
          <div 
            className="w-full py-3 md:py-6 bg-[#5B18E8] text-white font-black uppercase tracking-[0.1em] md:tracking-[0.2em] text-xs md:text-lg neo-border border-[#050817] hover:bg-[#D8A326] hover:text-[#050817] transition-colors active:translate-x-0.5 active:translate-y-0.5 neo-shadow-sm group-hover:neo-shadow text-center"
          >
            Play at {brand.name}
          </div>
          <p className="text-[7px] md:text-[8px] text-center mt-2 md:mt-3 text-white/30 uppercase font-bold tracking-tighter">
            T&Cs Apply | 18+ | BeGambleAware.org
          </p>
        </div>
      </div>
    </a>
  );
};
