import React from 'react';
import { Link } from 'wouter';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-24 pb-12 overflow-hidden border-t border-border/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          <div className="space-y-6">
            <div>
              <span className="font-serif text-3xl font-bold tracking-widest text-primary-foreground">
                GRAINORA
                <span className="text-secondary text-sm ml-1 align-top relative top-[-4px]">™</span>
              </span>
            </div>
            <p className="text-primary-foreground/70 max-w-sm leading-relaxed">
              Building the Future of Food. Premium quality ingredients sourced globally, crafted in Bodoland for the world.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-primary transition-all duration-300">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-primary transition-all duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-primary transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-primary transition-all duration-300">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-secondary">Explore</h4>
            <ul className="space-y-4 text-sm font-medium tracking-wide">
              <li><Link href="/company" className="hover:text-secondary transition-colors">Our Story</Link></li>
              <li><Link href="/products" className="hover:text-secondary transition-colors">Products</Link></li>
              <li><Link href="/quality" className="hover:text-secondary transition-colors">Quality Standards</Link></li>
              <li><Link href="/sustainability" className="hover:text-secondary transition-colors">Sustainability</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-secondary">Connect</h4>
            <ul className="space-y-4 text-sm font-medium tracking-wide">
              <li><Link href="/distributor" className="hover:text-secondary transition-colors">Become a Distributor</Link></li>
              <li><Link href="/newsroom" className="hover:text-secondary transition-colors">Newsroom</Link></li>
              <li><Link href="/careers" className="hover:text-secondary transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-secondary">Newsletter</h4>
            <p className="text-primary-foreground/70 text-sm mb-4">
              Subscribe for the latest updates on our products and global initiatives.
            </p>
            <form className="flex border-b border-primary-foreground/30 pb-2 focus-within:border-secondary transition-colors">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent border-none outline-none flex-grow text-sm text-primary-foreground placeholder:text-primary-foreground/40"
              />
              <button type="button" className="text-sm font-semibold tracking-wide text-secondary uppercase hover:text-white transition-colors">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-primary-foreground/50 tracking-wide uppercase">
          <p>© {new Date().getFullYear()} GRAINORA™ GLOBAL. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
        
        {/* Massive Typography at bottom */}
        <div className="mt-20 overflow-hidden w-full flex justify-center opacity-10 select-none">
          <span className="font-serif text-[8vw] leading-none whitespace-nowrap font-bold tracking-tighter">
            MADE FOR THE WORLD
          </span>
        </div>
      </div>
    </footer>
  );
}
