import React from 'react';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { MagneticButton } from '@/components/ui/MagneticButton';

export function CTASection() {
  return (
    <section className="bg-foreground text-background py-40 relative overflow-hidden">
      {/* Luxury Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-secondary/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <SectionReveal>
          <h2 className="font-serif text-6xl md:text-[100px] leading-[0.9] font-bold tracking-tighter mb-12">
            Experience<br/>
            <span className="text-secondary italic font-light">The Standard.</span>
          </h2>
        </SectionReveal>
        
        <SectionReveal delay={0.2}>
          <MagneticButton href="/contact" variant="primary">
            Contact GRAINORA™
          </MagneticButton>
        </SectionReveal>
      </div>
    </section>
  );
}
