import React, { useState } from 'react';
import { HeroSection } from '@/sections/home/HeroSection';
import { MarqueeSection } from '@/sections/home/MarqueeSection';
import { StorySection } from '@/sections/home/StorySection';
import { CategoriesSection } from '@/sections/home/CategoriesSection';
import { QualitySection } from '@/sections/home/QualitySection';
import { InnovationSection } from '@/sections/home/InnovationSection';
import { SustainabilitySection } from '@/sections/home/SustainabilitySection';
import { DistributorSection } from '@/sections/home/DistributorSection';
import { NewsSection } from '@/sections/home/NewsSection';
import { CTASection } from '@/sections/home/CTASection';
import { LoadingScreen } from '@/pages/LoadingScreen';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeSection />
        <StorySection />
        <CategoriesSection />
        <QualitySection />
        <InnovationSection />
        <SustainabilitySection />
        <DistributorSection />
        <NewsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
