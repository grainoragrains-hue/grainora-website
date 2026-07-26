import React from 'react';
import { InfiniteMarquee } from '@/components/ui/InfiniteMarquee';

export function MarqueeSection() {
  const itemsRow1 = [
    "PREMIUM RICE", "ARTISAN TEA", "PURE SPICES", 
    "EDIBLE OILS", "NUTRITIOUS PULSES", "GOURMET SNACKS"
  ];
  
  const itemsRow2 = [
    "QUALITY ASSURED", "LAB TESTED", "100% NATURAL", 
    "SUSTAINABLY SOURCED", "BORN IN BODOLAND"
  ];

  return (
    <section className="bg-primary overflow-hidden pb-12 pt-20">
      <div className="rotate-[-2deg] scale-105 transform-gpu relative z-10 w-full overflow-visible">
        <InfiniteMarquee items={itemsRow1} direction="left" speed="normal" className="bg-primary/90 backdrop-blur-sm border-y border-secondary/20 shadow-2xl" />
      </div>
      <div className="rotate-[1deg] scale-105 transform-gpu relative z-0 -mt-16 w-full overflow-visible">
        <InfiniteMarquee items={itemsRow2} direction="right" speed="fast" className="bg-primary/95 backdrop-blur-sm opacity-50 border-y-0" />
      </div>
    </section>
  );
}
