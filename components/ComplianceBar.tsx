import React from 'react';
import Link from 'next/link';

export const ComplianceBar = () => {
  return (
    <div className="w-full bg-[#050817] border-y-4 border-[#D8A326] py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
          <div className="flex items-center gap-3 bg-white px-4 py-2 neo-shadow-sm neo-border -rotate-1">
            <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-red-600 text-red-600 font-black text-sm">18+</span>
            <span className="font-black text-[#050817] uppercase tracking-tighter">Adults Only</span>
          </div>
          <p className="text-xs font-bold text-white/70 max-w-2xl uppercase tracking-tight leading-relaxed">
            Please gamble responsibly. For help and support, visit{' '}
            <Link href="https://www.begambleaware.org" target="_blank" className="text-[#D8A326] underline hover:text-white transition-colors">
              BeGambleAware.org
            </Link>
            {' '}or call the National Gambling Helpline on 0808 8020 133.
          </p>
        </div>
      </div>
    </div>
  );
};
