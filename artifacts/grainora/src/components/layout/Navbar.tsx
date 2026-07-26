import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Company', path: '/company' },
  { name: 'Products', path: '/products' },
  { name: 'Quality', path: '/quality' },
  { name: 'Sustainability', path: '/sustainability' },
  { name: 'Distributor', path: '/distributor' },
  { name: 'Newsroom', path: '/newsroom' },
  { name: 'Careers', path: '/careers' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled || mobileMenuOpen
            ? 'bg-background/80 backdrop-blur-lg border-b border-border/50 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="relative z-50">
            <span className="font-serif text-2xl font-bold tracking-widest text-foreground">
              GRAINORA
              <span className="text-secondary text-sm ml-1 align-top relative top-[-4px]">™</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {links.map((link) => (
              <Link key={link.path} href={link.path}>
                <span className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-secondary ${
                  location === link.path ? 'text-secondary' : 'text-foreground/80'
                }`}>
                  {link.name}
                </span>
              </Link>
            ))}
            <Link href="/contact">
              <span className="px-6 py-2.5 border border-secondary text-secondary text-sm font-medium tracking-wide uppercase hover:bg-secondary hover:text-primary transition-colors duration-300">
                Contact Us
              </span>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden relative z-50 p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center pt-20 pb-10 px-6 lg:hidden"
          >
            <nav className="flex flex-col items-center space-y-6 w-full max-w-sm">
              {links.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="w-full text-center"
                >
                  <Link href={link.path} onClick={() => setMobileMenuOpen(false)}>
                    <span className={`block text-2xl font-serif tracking-wide ${
                      location === link.path ? 'text-secondary' : 'text-foreground'
                    }`}>
                      {link.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.1 }}
                className="w-full text-center pt-6"
              >
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <span className="inline-block px-8 py-3 border border-secondary text-secondary font-medium tracking-wide uppercase hover:bg-secondary hover:text-primary transition-colors duration-300">
                    Contact Us
                  </span>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
