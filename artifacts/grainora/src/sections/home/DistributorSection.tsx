import React from 'react';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { Globe2 } from 'lucide-react';

export function DistributorSection() {
  return (
    <section className="bg-primary text-primary-foreground py-32 relative overflow-hidden">
      {/* Abstract Grid Map */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <SectionReveal>
          <Globe2 size={48} className="mx-auto text-secondary mb-8 opacity-80" strokeWidth={1} />
          <h2 className="font-serif text-5xl md:text-7xl font-bold tracking-tighter mb-8 max-w-4xl mx-auto">
            Global Reach.<br/>Local Excellence.
          </h2>
        </SectionReveal>
        
        <SectionReveal delay={0.2}>
          <p className="text-lg md:text-xl text-primary-foreground/70 leading-relaxed font-light mb-12 max-w-2xl mx-auto">
            Join the GRAINORA™ distribution network. We are actively partnering with premium retailers, luxury grocers, and national distributors across 25+ countries to bring Bodoland's finest to the world.
          </p>
        </SectionReveal>
        
        <SectionReveal delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <MagneticButton href="/distributor" variant="primary">
              Become a Distributor
            </MagneticButton>
            <MagneticButton href="/contact" variant="outline">
              Global Offices
            </MagneticButton>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
