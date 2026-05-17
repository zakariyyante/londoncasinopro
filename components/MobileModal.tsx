"use client";

import React, { useState, useEffect } from 'react';
import { Brand } from '@/app/data/brands';
import { BrandCard } from './BrandCard';
import { Logo } from './Logo';

interface MobileModalProps {
  brands: Brand[];
  gclid: string | null;
}

export const MobileModal: React.FC<MobileModalProps> = ({ brands, gclid }) => {
  const [isOpen, setIsOpen] = useState(!!(gclid && brands.length > 0));

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="fixed inset-0 z-[100] bg-[#0f051d] overflow-y-auto">
      <div className="min-h-screen flex flex-col">
        {/* Modal Header */}
        <div className="sticky top-0 z-10 bg-[#0f051d]/90 backdrop-blur-md border-b border-white/10 p-4 flex items-center justify-between">
          <Logo />
          <button 
            onClick={handleClose}
            className="p-2 text-white/50 hover:text-white"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Content */}
        <div className="flex-1 p-4 pb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-white mb-2">Exclusive Mobile Offers</h2>
            <p className="text-white/60">Hand-picked deals for UK mobile players</p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {brands.map((brand) => (
              <BrandCard key={brand.id} brand={brand} gclid={gclid} />
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-black/40 p-6 border-t border-white/10 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-red-600 text-red-600 font-bold text-[10px]">18+</span>
            <span className="text-xs font-bold text-white">Gamble Responsibly</span>
          </div>
          <button 
            onClick={handleClose}
            className="text-[#ff8c00] font-bold uppercase tracking-widest text-sm"
          >
            Continue to Site
          </button>
        </div>
      </div>
    </div>
  );
};
