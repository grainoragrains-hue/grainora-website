import React from 'react';
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
  { title: 'Premium Rice', image: riceImg, href: '/products#rice' },
  { title: 'Artisan Tea', image: teaImg, href: '/products#tea' },
  { title: 'Pure Spices', image: spicesImg, href: '/products#spices' },
  { title: 'Nutritious Pulses', image: pulsesImg, href: '/products#pulses' },
  { title: 'Edible Oils', image: oilImg, href: '/products#oils' },
  { title: 'Gourmet Snacks', image: snacksImg, href: '/products#snacks' },
  { title: 'Grocery Essentials', image: groceryImg, href: '/products#grocery' },
  { title: 'Future Foods', image: labImg, href: '/products#future' },
];

export function CategoriesSection() {
  return (
    <section className="bg-primary py-32 md:py-48 relative z-20">
      <div className="container mx-auto px-6 md:px-12">
        <SectionReveal>
          <div className="mb-20 md:mb-32 flex flex-col md:flex-row justify-between items-end gap-8">
            <h2 className="font-serif text-5xl md:text-7xl lg:text-[100px] leading-[0.9] text-primary-foreground font-bold tracking-tighter">
              A Portfolio of<br/>
              <span className="text-secondary italic font-light">Perfection.</span>
            </h2>
            <p className="max-w-md text-primary-foreground/70 text-lg md:text-xl font-light">
              Eight distinct categories. One uncompromising standard. Explore the absolute pinnacle of global food craft.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((cat, i) => (
            <ProductCard3D 
              key={i}
              index={i}
              title={cat.title}
              image={cat.image}
              href={cat.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
