import React from 'react';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { MagneticButton } from '@/components/ui/MagneticButton';
import labImg from '@assets/generated_images/lab.jpg';

export function InnovationSection() {
  return (
    <section className="bg-primary text-primary-foreground py-0 relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-fixed bg-center opacity-30 mix-blend-luminosity grayscale-[0.5]"
          style={{ backgroundImage: `url(${labImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/40" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 py-32">
        <div className="max-w-3xl">
          <SectionReveal>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-secondary" />
              <span className="text-secondary text-sm font-bold uppercase tracking-[0.2em]">Next-Gen Nutrition</span>
            </div>
            
            <h2 className="font-serif text-5xl md:text-7xl lg:text-[80px] leading-[0.9] font-bold tracking-tighter mb-8">
              Engineering the <br/>
              <span className="italic font-light text-white/90">Future of Food.</span>
            </h2>
          </SectionReveal>
          
          <SectionReveal delay={0.2}>
            <p className="text-lg md:text-xl text-primary-foreground/70 leading-relaxed font-light mb-12 max-w-xl">
              Our advanced culinary labs in Bodoland are breaking new ground. By merging ancient agricultural wisdom with molecular food science, we are creating products that are vastly more nutritious, sustainable, and intensely flavorful.
            </p>
          </SectionReveal>
          
          <SectionReveal delay={0.4}>
            <MagneticButton href="/company#innovation" variant="primary">
              Discover Our Labs
            </MagneticButton>
          </SectionReveal>
        </div>
      </div>
      
      {/* Decorative tech rings */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] border-[1px] border-secondary/10 rounded-full pointer-events-none opacity-50" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] border-[1px] border-secondary/20 rounded-full pointer-events-none opacity-50" />
    </section>
  );
}
