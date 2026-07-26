import React from 'react';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { TextReveal } from '@/components/ui/TextReveal';
import { MagneticButton } from '@/components/ui/MagneticButton';

export function SustainabilitySection() {
  return (
    <section className="bg-[#FAF8F3] py-32 md:py-48 relative overflow-hidden">
      {/* Organic Shapes Background */}
      <div className="absolute top-0 right-0 w-[50vw] h-[100%] bg-[#0D2B1F]/5 rounded-bl-[100vw] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[80%] bg-[#D4AF37]/5 rounded-tr-[80vw] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div>
            <SectionReveal>
              <div className="w-16 h-16 rounded-full bg-[#0D2B1F]/10 flex items-center justify-center mb-8">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0D2B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h2 className="font-serif text-5xl md:text-7xl font-bold tracking-tighter text-[#1C1C1E] mb-8">
                <TextReveal text="Earth-Forward." />
              </h2>
            </SectionReveal>
            
            <SectionReveal delay={0.2}>
              <p className="text-lg md:text-xl text-[#1C1C1E]/70 leading-relaxed font-light mb-8">
                We believe true luxury shouldn't cost the Earth. Our commitment to sustainability drives every decision—from zero-waste processing facilities to 100% biodegradable premium packaging.
              </p>
              <p className="text-lg md:text-xl text-[#1C1C1E]/70 leading-relaxed font-light mb-12">
                By investing heavily in the Bodoland farming community, we've created a regenerative ecosystem that enriches the soil, empowers the growers, and delivers an unparalleled product.
              </p>
            </SectionReveal>
            
            <SectionReveal delay={0.4}>
              <MagneticButton href="/sustainability" variant="primary">
                View Impact Report
              </MagneticButton>
            </SectionReveal>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-8">
            <SectionReveal delay={0.2}>
              <div className="aspect-square bg-[#0D2B1F] p-8 flex flex-col justify-end text-[#FAF8F3]">
                <span className="font-serif text-5xl md:text-6xl font-bold text-[#D4AF37] mb-2">0%</span>
                <span className="text-sm uppercase tracking-widest font-semibold opacity-80">Waste<br/>Facilities</span>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div className="aspect-square bg-[#1C1C1E] p-8 flex flex-col justify-end text-[#FAF8F3] translate-y-8 md:translate-y-12">
                <span className="font-serif text-5xl md:text-6xl font-bold text-[#D4AF37] mb-2">10k+</span>
                <span className="text-sm uppercase tracking-widest font-semibold opacity-80">Farmers<br/>Empowered</span>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.4}>
              <div className="aspect-[4/3] col-span-2 bg-[#D4AF37]/20 p-8 flex flex-col justify-center text-[#1C1C1E] mt-4 md:mt-8 border border-[#D4AF37]/30">
                <span className="font-serif text-3xl md:text-4xl font-bold mb-4">"The greenest supply chain in global FMCG."</span>
                <span className="text-sm font-bold uppercase tracking-widest text-[#0D2B1F]">— Global Food Council</span>
              </div>
            </SectionReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
