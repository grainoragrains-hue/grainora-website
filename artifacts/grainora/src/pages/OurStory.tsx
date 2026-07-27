import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionReveal } from "@/components/ui/SectionReveal";

export default function OurStory() {
  return (
    <>
      <Navbar />

      <main className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">

          <SectionReveal>
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
              Our Story
            </h1>

            <p className="text-xl text-foreground/70">
              Born in Bodoland. Built for the World.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.2} className="mt-16">
            <div className="rounded-3xl border border-border bg-card p-10 md:p-16 space-y-8">

              <p className="text-xl leading-9 text-foreground/80">
                GRAINORA™️ was founded in Bodoland, India with one clear vision:
                to build a trusted food brand that represents quality,
                consistency, and ambition.
              </p>

              <p className="text-xl leading-9 text-foreground/80">
                We believe food is more than a product—it is trust shared with
                every family. From carefully selected rice to future food
                categories, every GRAINORA product is chosen with the same
                commitment to excellence.
              </p>

              <p className="text-xl leading-9 text-foreground/80">
                Working closely with farmers, suppliers, and manufacturing
                partners, we focus on delivering products that meet high quality
                standards while supporting long-term growth in Bodoland.
              </p>

              <p className="text-xl leading-9 text-foreground/80">
                Our philosophy is simple:
              </p>

              <div className="border-l-4 border-primary pl-6">
                <h2 className="font-serif text-4xl font-bold">
                  CREATE MORE.
                </h2>

                <p className="mt-4 text-lg text-foreground/70">
                  Create more opportunities. Create more value. Create more for
                  every home.
                </p>
              </div>

            </div>
          </SectionReveal>

        </div>
      </main>

      <Footer />
    </>
  );
}