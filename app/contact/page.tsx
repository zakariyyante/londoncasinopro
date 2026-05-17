import React from 'react';

export default function ContactPage() {
  return (
    <div className="bg-[#0A0F29] min-h-screen">
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <div className="flex flex-col items-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-tighter text-center leading-none">
            CONTACT <span className="text-[#5B18E8]">US</span>
          </h1>
          <div className="w-24 h-2 bg-[#D8A326] neo-border border-[#050817]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-[#0D1433] neo-border border-[#5B18E8] neo-shadow-purple p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-[#5B18E8]/10 -translate-y-8 translate-x-8 rotate-45" />
            
            <h2 className="text-2xl font-black text-white mb-8 uppercase tracking-tight">Get in Touch</h2>
            <p className="text-sm font-bold text-white/50 mb-8 leading-relaxed uppercase tracking-tight">
              Have questions about our reviews or partner brands? Our team is here to help. We aim to respond to all inquiries within 24-48 hours.
            </p>
            
            <div className="space-y-6">
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-[#D8A326] uppercase tracking-widest mb-1">Email Us</span>
                <a href="mailto:contact@londoncasinopro.com" className="text-lg font-black text-white hover:text-[#5B18E8] transition-colors">
                  contact@londoncasinopro.com
                </a>
              </div>
              
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-[#D8A326] uppercase tracking-widest mb-1">Office Address</span>
                <address className="text-sm font-bold text-white/50 not-italic uppercase tracking-tight">
                  Michal Jan Muszynski<br />
                  Dziewicza 22<br />
                  Sosnowiec, 41-209<br />
                  Poland
                </address>
              </div>
            </div>
          </div>

          <div className="bg-[#050817] neo-border border-[#D8A326] neo-shadow-gold p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-[#D8A326]/10 -translate-y-8 translate-x-8 rotate-45" />
            
            <h2 className="text-2xl font-black text-white mb-8 uppercase tracking-tight">Business Inquiries</h2>
            <p className="text-sm font-bold text-white/40 mb-8 leading-relaxed uppercase tracking-tight">
              For partnership opportunities, advertising requests, or media inquiries, please reach out via our dedicated business channel.
            </p>
            
            <div className="p-6 bg-white/5 neo-border border-white/10 cut-corner-sm">
              <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-4">Publisher Disclosure</p>
              <p className="text-xs font-bold text-white/50 uppercase tracking-tight leading-relaxed">
                londoncasinopro.com is published and operated by Michal Jan Muszynski. This platform is managed in connection with our commercial and affiliate partnerships, which are reflected in the content and offers on this domain.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
