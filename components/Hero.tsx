import React from 'react';

export const Hero = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="hidden md:block relative py-6 md:py-12 overflow-hidden bg-[#050817] border-b-4 border-[#5B18E8]">
      {/* Geometric Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#5B18E8]/10 skew-x-12 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-[#D8A326]/10 -skew-x-12 -translate-x-1/2 pointer-events-none" />
      
      {/* Decorative Bars */}
      <div className="absolute top-4 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#5B18E8] to-transparent opacity-50" />
      <div className="absolute bottom-4 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#D8A326] to-transparent opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl text-center md:text-left">
          <div className="inline-block px-3 py-1 bg-[#5B18E8] text-white text-[10px] font-black uppercase tracking-[0.2em] mb-4 md:mb-6 neo-shadow-sm">
            UK&apos;S PREMIER COMPARISON HUB {currentYear}
          </div>

          <h1 className="text-3xl md:text-6xl font-black text-white mb-2 md:mb-4 leading-[0.9] uppercase tracking-tighter">
            BEST UK <span className="text-[#D8A326]">CASINOS</span> <br />
            <span className="bg-[#5B18E8] px-2 inline-block -rotate-1">COMPARED</span>
          </h1>

          <p className="hidden md:block text-lg md:text-xl text-white/60 mb-10 max-w-xl font-bold uppercase tracking-tight border-l-4 border-[#D8A326] pl-4">
            Expert-reviewed, exclusive bonuses, and rapid payouts. Verified for UK players.
          </p>

          <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Licensed Platforms",
              "Secure Access",
              "Fast Comparison",
              "Mobile Friendly",
            ].map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2 p-3 bg-white/5 border-2 border-white/10 cut-corner-sm">
                <span className="text-[#D8A326] font-black">▶</span>
                <span className="text-[10px] font-black text-white uppercase tracking-wider">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
