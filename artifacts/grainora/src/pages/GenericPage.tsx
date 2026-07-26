import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SectionReveal } from '@/components/ui/SectionReveal';

export default function GenericPage({ title, subtitle }: { title: string, subtitle: string }) {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 min-h-[80vh] bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <SectionReveal>
            <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tighter mb-6">{title}</h1>
            <p className="text-xl text-foreground/70 max-w-2xl">{subtitle}</p>
          </SectionReveal>
          
          <SectionReveal delay={0.2} className="mt-20">
            <div className="h-[40vh] border border-border flex items-center justify-center bg-card">
              <p className="text-muted-foreground uppercase tracking-widest font-bold">Content arriving soon</p>
            </div>
          </SectionReveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
