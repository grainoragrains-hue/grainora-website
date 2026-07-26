import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { ProductCard3D } from '@/components/ui/ProductCard3D';

// Images
import riceImg from '@assets/generated_images/rice.jpg';
import teaImg from '@assets/generated_images/tea.jpg';
import spicesImg from '@assets/generated_images/spices.jpg';
import pulsesImg from '@assets/generated_images/pulses.jpg';
import oilImg from '@assets/generated_images/oil.jpg';
import snacksImg from '@assets/generated_images/snacks.jpg';
import groceryImg from '@assets/generated_images/grocery.jpg';
import labImg from '@assets/generated_images/lab.jpg';

const categories = [
  { title: 'Premium Rice', image: riceImg, href: '#', desc: 'Aged basmati and rare indigenous varieties.' },
  { title: 'Artisan Tea', image: teaImg, href: '#', desc: 'Hand-plucked single-estate reserves.' },
  { title: 'Pure Spices', image: spicesImg, href: '#', desc: 'Cold-ground for maximum volatile oil retention.' },
  { title: 'Nutritious Pulses', image: pulsesImg, href: '#', desc: 'High-protein, unpolished legumes.' },
  { title: 'Edible Oils', image: oilImg, href: '#', desc: 'First cold-pressed virgin oils.' },
  { title: 'Gourmet Snacks', image: snacksImg, href: '#', desc: 'Traditional recipes reimagined.' },
  { title: 'Grocery Essentials', image: groceryImg, href: '#', desc: 'The foundation of a premium pantry.' },
  { title: 'Future Foods', image: labImg, href: '#', desc: 'Next-generation nutritional solutions.' },
];

export default function Products() {
  return (
    <>
      <Navbar />
      <main className="bg-background pt-32 pb-32">
        <div className="container mx-auto px-6 md:px-12">
          <SectionReveal>
            <div className="mb-20">
              <span className="text-secondary text-sm font-bold uppercase tracking-[0.3em] block mb-4">The Collection</span>
              <h1 className="font-serif text-6xl md:text-8xl font-bold tracking-tighter text-foreground mb-8">
                Uncompromising <br/>
                <span className="italic font-light">Quality.</span>
              </h1>
              <p className="text-xl text-foreground/70 max-w-2xl font-light leading-relaxed">
                Discover our eight categories of premium food products. Every item bearing the GRAINORA™ mark represents the absolute zenith of its category globally.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, i) => (
              <div key={i} className="flex flex-col">
                <ProductCard3D index={i} title={cat.title} image={cat.image} href={cat.href} />
                <SectionReveal delay={0.2 + (i * 0.1)}>
                  <p className="mt-4 text-foreground/60 text-sm">{cat.desc}</p>
                </SectionReveal>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
