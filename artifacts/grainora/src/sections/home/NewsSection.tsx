import React from 'react';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

const news = [
  {
    date: "MARCH 15, 2024",
    category: "Corporate",
    title: "GRAINORA™ announces $500M investment in next-gen food processing facilities in Bodoland.",
    href: "/newsroom/investment"
  },
  {
    date: "FEBRUARY 28, 2024",
    category: "Product",
    title: "The launch of the 'Future Foods' line redefines plant-based protein standards globally.",
    href: "/newsroom/future-foods"
  },
  {
    date: "JANUARY 10, 2024",
    category: "Sustainability",
    title: "Achieving 100% carbon-neutral operations ahead of the 2025 global mandate.",
    href: "/newsroom/carbon-neutral"
  }
];

export function NewsSection() {
  return (
    <section className="bg-background py-32 border-b border-border/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <SectionReveal>
            <h2 className="font-serif text-5xl md:text-7xl font-bold tracking-tighter text-foreground">
              Latest from<br/>GRAINORA™
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <Link href="/newsroom" className="inline-flex items-center gap-3 text-secondary font-bold uppercase tracking-widest text-sm hover:text-primary transition-colors">
              <span>View Newsroom</span>
              <ArrowRight size={16} />
            </Link>
          </SectionReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {news.map((item, i) => (
            <SectionReveal key={i} delay={0.1 * i}>
              <Link href={item.href} className="group block h-full">
                <article className="border-t border-border pt-8 h-full flex flex-col relative">
                  <div className="flex justify-between items-center mb-6 text-xs font-bold uppercase tracking-widest text-foreground/50">
                    <span>{item.date}</span>
                    <span className="text-secondary">{item.category}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-foreground font-medium leading-tight group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  {/* Hover Arrow */}
                  <div className="absolute bottom-0 right-0 w-12 h-12 bg-secondary flex items-center justify-center text-primary opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowRight size={20} />
                  </div>
                </article>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
