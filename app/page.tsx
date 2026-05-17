import { brands } from "./data/brands";
import { Hero } from "@/components/Hero";
import { BrandCard } from "@/components/BrandCard";
import { ComplianceBar } from "@/components/ComplianceBar";
import { AboutSection } from "@/components/AboutSection";
import { MobileModal } from "@/components/MobileModal";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const gclid = typeof params.gclid === 'string' ? params.gclid : null;
  
  const mobileBrands = brands.filter(b => b.isMobile);

  return (
    <div className="min-h-screen bg-[#0A0F29]">
      {/* Mobile Popup Modal */}
      <MobileModal brands={mobileBrands} gclid={gclid} />

      <Hero />
      
      <section id="brands" className="py-8 md:py-20 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-24 bg-linear-to-b from-[#050817] to-transparent opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-6xl font-black text-white mb-2 md:mb-4 uppercase tracking-tighter text-center leading-none">
              TOP RATED <span className="text-[#5B18E8]">UK CASINOS</span>
            </h2>
            <div className="flex items-center gap-4">
              <div className="h-0.5 w-8 md:h-1 md:w-12 bg-[#D8A326]" />
              <p className="text-white/60 font-black uppercase tracking-widest text-[10px] md:text-xs">Updated May 2026</p>
              <div className="h-0.5 w-8 md:h-1 md:w-12 bg-[#D8A326]" />
            </div>
            <p className="hidden md:block text-[10px] font-bold text-white/20 uppercase tracking-widest mt-4 text-center">
              londoncasinopro.com is published and operated by Michal Jan Muszynski. This platform is managed in connection with our commercial and affiliate partnerships, which are reflected in the content and offers on this domain.
            </p>
          </div>

          {/* Vertically aligned cards (list layout) */}
          <div className="grid grid-cols-1 gap-4 md:gap-8 max-w-6xl mx-auto">
            {brands.map((brand) => (
              <BrandCard 
                key={brand.id} 
                brand={brand} 
                gclid={gclid}
              />
            ))}
          </div>
        </div>
      </section>

      <ComplianceBar />

      <AboutSection />
    </div>
  );
}
