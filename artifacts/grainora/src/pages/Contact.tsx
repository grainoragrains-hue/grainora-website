import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="bg-primary pt-32 pb-32 min-h-screen text-primary-foreground">
        <div className="container mx-auto px-6 md:px-12">
          <SectionReveal>
            <div className="mb-20 md:text-center">
              <span className="text-secondary text-sm font-bold uppercase tracking-[0.3em] block mb-4">Connect With Us</span>
              <h1 className="font-serif text-6xl md:text-8xl font-bold tracking-tighter mb-8">
                Global <span className="italic font-light text-secondary">Presence.</span>
              </h1>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            <SectionReveal delay={0.2}>
              <div>
                <h3 className="font-serif text-3xl mb-8">Send an Inquiry</h3>
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative">
                      <input type="text" id="name" className="w-full bg-transparent border-b border-primary-foreground/20 py-3 outline-none focus:border-secondary transition-colors peer placeholder-transparent" placeholder="Name" />
                      <label htmlFor="name" className="absolute left-0 top-3 text-primary-foreground/50 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-secondary uppercase tracking-wider">Full Name</label>
                    </div>
                    <div className="relative">
                      <input type="email" id="email" className="w-full bg-transparent border-b border-primary-foreground/20 py-3 outline-none focus:border-secondary transition-colors peer placeholder-transparent" placeholder="Email" />
                      <label htmlFor="email" className="absolute left-0 top-3 text-primary-foreground/50 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-secondary uppercase tracking-wider">Email Address</label>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <select id="subject" className="w-full bg-transparent border-b border-primary-foreground/20 py-3 outline-none focus:border-secondary transition-colors text-primary-foreground appearance-none rounded-none">
                      <option value="" className="text-primary">Select Inquiry Type</option>
                      <option value="distributor" className="text-primary">Distributorship</option>
                      <option value="press" className="text-primary">Press & Media</option>
                      <option value="general" className="text-primary">General Inquiry</option>
                    </select>
                  </div>
                  
                  <div className="relative">
                    <textarea id="message" rows={4} className="w-full bg-transparent border-b border-primary-foreground/20 py-3 outline-none focus:border-secondary transition-colors peer placeholder-transparent resize-none" placeholder="Message"></textarea>
                    <label htmlFor="message" className="absolute left-0 top-3 text-primary-foreground/50 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-secondary uppercase tracking-wider">Message</label>
                  </div>
                  
                  <div className="pt-4">
                    <MagneticButton variant="primary" className="w-full md:w-auto">
                      Submit Inquiry
                    </MagneticButton>
                  </div>
                </form>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.4}>
              <div className="bg-background/5 p-10 md:p-16 border border-primary-foreground/10">
                <h3 className="font-serif text-3xl mb-10 text-secondary">Global Headquarters</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-secondary mt-1 shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold uppercase tracking-widest text-sm mb-2">Bodoland, India</h4>
                      <p className="text-primary-foreground/70 font-light leading-relaxed">
                        GRAINORA™ Complex, Sector 4<br />
                        Agricultural Innovation Hub<br />
                        Kokrajhar, BTR 783370
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="text-secondary mt-1 shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold uppercase tracking-widest text-sm mb-2">Direct Line</h4>
                      <p className="text-primary-foreground/70 font-light leading-relaxed">
                        +91 800 GRAINORA<br />
                        Mon-Fri, 9:00 AM - 6:00 PM IST
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Mail className="text-secondary mt-1 shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold uppercase tracking-widest text-sm mb-2">Email</h4>
                      <p className="text-primary-foreground/70 font-light leading-relaxed">
                        inquiries@grainora.com<br />
                        press@grainora.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
