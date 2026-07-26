import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { ShieldCheck, TestTube, Leaf, Droplet, Award } from 'lucide-react';

const pillars = [
  { icon: <TestTube size={32} strokeWidth={1.5} />, title: "Lab Tested", desc: "Every batch undergoes 40+ rigorous scientific parameters for absolute safety and nutritional integrity." },
  { icon: <ShieldCheck size={32} strokeWidth={1.5} />, title: "Quality Assured", desc: "A flawless, unbroken chain of custody from farm to premium packaging." },
  { icon: <Droplet size={32} strokeWidth={1.5} />, title: "Hygienically Processed", desc: "State-of-the-art sterile facilities ensuring zero human touch during critical processing phases." },
  { icon: <Leaf size={32} strokeWidth={1.5} />, title: "Carefully Selected", desc: "Only the top 1% of global harvests meet the stringent GRAINORA™ threshold." },
  { icon: <Award size={32} strokeWidth={1.5} />, title: "Trusted Standards", desc: "Exceeding international food safety guidelines with global certifications." }
];

export function QualitySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} className="bg-background py-32 md:py-48 relative overflow-hidden">
      {/* Background typographic watermark */}
      <motion.div style={{ y }} className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none overflow-hidden">
        <span className="font-serif text-[40vw] font-bold leading-none tracking-tighter whitespace-nowrap">QUALITY</span>
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-24 md:mb-32">
          <SectionReveal>
            <span className="text-secondary text-sm font-bold uppercase tracking-[0.3em] block mb-6">The GRAINORA™ Standard</span>
            <h2 className="font-serif text-5xl md:text-7xl font-bold tracking-tighter text-foreground max-w-4xl mx-auto">
              Science Meets Nature.
            </h2>
          </SectionReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {pillars.map((pillar, i) => (
            <SectionReveal key={i} delay={i * 0.1} className="h-full">
              <div className="bg-card border border-card-border p-8 h-full flex flex-col items-start group hover:border-secondary/50 transition-colors duration-500 rounded-none relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-secondary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                
                <div className="text-primary mb-8 p-4 bg-primary/5 rounded-full group-hover:bg-secondary/10 group-hover:text-secondary transition-colors duration-500">
                  {pillar.icon}
                </div>
                
                <h3 className="font-serif text-xl font-bold text-foreground mb-4">{pillar.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed font-light flex-grow">
                  {pillar.desc}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
