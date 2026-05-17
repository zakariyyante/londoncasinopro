import React from 'react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-[#0A0F29]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white text-center uppercase tracking-tighter leading-none mb-4">
            HOW WE RATE <span className="text-[#5B18E8]">CASINO</span> SITES
          </h2>
          <div className="w-24 h-2 bg-[#D8A326] neo-border border-[#050817]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-[#0D1433] neo-border border-[#5B18E8] neo-shadow-purple p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-[#5B18E8]/10 -translate-y-8 translate-x-8 rotate-45" />
            
            <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3 uppercase tracking-tight">
              <span className="w-8 h-8 bg-[#5B18E8] text-white flex items-center justify-center cut-corner-sm">1</span>
              Why Our Reviews Stand Out
            </h3>
            <ul className="space-y-6">
              {[
                "Strict licensing and regulation checks (UKGC focus)",
                "Real player feedback and payout speed testing",
                "Deep dive into bonus terms and wagering requirements",
                "Mobile compatibility and app performance audits",
                "Game variety and software provider analysis",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 group">
                  <span className="text-[#D8A326] font-black group-hover:translate-x-1 transition-transform">▶</span>
                  <span className="text-sm font-bold text-white/50 uppercase tracking-tight leading-tight">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#050817] neo-border border-[#D8A326] neo-shadow-gold p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-[#D8A326]/10 -translate-y-8 translate-x-8 rotate-45" />
            
            <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3 uppercase tracking-tight">
              <span className="w-8 h-8 bg-[#D8A326] text-[#050817] flex items-center justify-center cut-corner-sm">2</span>
              Our Partners & Revenue
            </h3>
            <p className="text-sm font-bold text-white/40 mb-4 leading-relaxed uppercase tracking-tight">
              Michal Jan Muszynski serves as the publisher and site operator for londoncasinopro.com. This platform is managed in connection with our commercial and affiliate partnerships, which are reflected in the curated content and promotional offers provided on this domain.
            </p>
            <p className="text-sm font-bold text-white/40 mb-8 leading-relaxed uppercase tracking-tight">
              IMPORTANT: We do not receive deposits or any money whatsoever from users. Instead, we send you to our partner brand dashboards. We may receive a commission from these partners when you interact with their platforms.
            </p>
            <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest mb-8">
              Publisher: Michal Jan Muszynski | Dziewicza 22, Sosnowiec, 41-209, Poland
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="https://www.gamstop.co.uk" target="_blank" className="p-4 bg-white text-[#050817] text-center text-xs font-black uppercase tracking-widest neo-border border-[#050817] hover:bg-[#D8A326] transition-colors">
                GAMSTOP
              </a>
              <a href="https://www.gamcare.org.uk" target="_blank" className="p-4 bg-[#5B18E8] text-white text-center text-xs font-black uppercase tracking-widest neo-border border-[#050817] hover:bg-[#D8A326] hover:text-[#050817] transition-colors">
                GamCare
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
