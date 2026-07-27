import React from 'react';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { TextReveal } from '@/components/ui/TextReveal';

export function StorySection() {
  return (
    <section className="bg-background text-foreground py-32 md:py-48 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">

          {/* Left Content */}
          <div className="lg:col-span-7">
            <SectionReveal>
              <h2 className="font-serif text-5xl md:text-7xl lg:text-[90px] leading-[0.9] font-bold tracking-tighter mb-12">
                <TextReveal text="Born in Bodoland." className="block" />
                <br />
                <span className="text-primary mt-2 block">
                  <TextReveal text="Built for the World." />
                </span>
              </h2>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="max-w-2xl text-lg md:text-xl text-foreground/70 leading-relaxed font-sans font-light">
                <p className="mb-6">
                  GRAINORA™️ was founded in Bodoland, India with a simple belief:
                  great food begins with great ambition. We carefully source
                  quality rice and food products to deliver consistency, trust,
                  and excellence to every home.
                </p>

                <p className="mb-8">
                  Every Grainora product is selected with care, packed
                  hygienically, and created to meet the expectations of families
                  who value quality. Our mission is simple — deliver food you
                  can trust while inspiring people to <strong>CREATE MORE.</strong>
                </p>

                <p className="uppercase tracking-[0.3em] text-primary font-semibold">
                  CREATE MORE.
                </p>
              </div>
            </SectionReveal>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-4 lg:col-start-9">
            <div className="grid grid-cols-2 gap-x-8 gap-y-16">

              <SectionReveal delay={0.3}>
                <div className="border-t-2 border-secondary/30 pt-6">
                  <div className="font-serif text-4xl md:text-5xl text-primary font-bold mb-2">
                    FSSAI
                  </div>
                  <div className="text-sm uppercase tracking-widest text-foreground/60 font-semibold">
                    Registered
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.4}>
                <div className="border-t-2 border-secondary/30 pt-6">
                  <div className="font-serif text-4xl md:text-5xl text-primary font-bold mb-2">
                    Premium
                  </div>
                  <div className="text-sm uppercase tracking-widest text-foreground/60 font-semibold">
                    Rice Products
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.5}>
                <div className="border-t-2 border-secondary/30 pt-6">
                  <div className="font-serif text-4xl md:text-5xl text-primary font-bold mb-2">
                    Quality
                  </div>
                  <div className="text-sm uppercase tracking-widest text-foreground/60 font-semibold">
                    Checked
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.6}>
                <div className="border-t-2 border-secondary/30 pt-6">
                  <div className="font-serif text-4xl md:text-5xl text-primary font-bold mb-2">
                    Made in
                  </div>
                  <div className="text-sm uppercase tracking-widest text-foreground/60 font-semibold">
                    Bodoland
                  </div>
                </div>
              </SectionReveal>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}