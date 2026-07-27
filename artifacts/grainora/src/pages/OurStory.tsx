import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionReveal } from "@/components/ui/SectionReveal";

export default function OurStory() {
  return (
    <>
      <Navbar />

      <main className="pt-32 pb-24 min-h-[80vh] bg-background">
        <div className="container mx-auto px-6 md:px-12">

          <SectionReveal>
            <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Our Story
            </h1>

            <p className="text-xl text-foreground/70 max-w-3xl">
              Born in Bodoland, built for the world.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.2} className="mt-16">
            <div className="max-w-4xl rounded-2xl border border-border bg-card p-10">

              <p className="text-lg leading-8 text-foreground/80 mb-8">
                At Grainora, we focus on responsibly sourced ingredients and
                reliable quality. We work closely with farming communities
                across Bodoland, following careful sourcing, handling, and
                quality standards to serve customers in India and global markets.
              </p>

              <p className="text-lg leading-8 text-foreground/80">
                Our goal is simple: consistency, traceability, and long-term
                trust.
              </p>

            </div>
          </SectionReveal>

        </div>
      </main>

      <Footer />
    </>
  );
}