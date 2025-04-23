"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  
  // Check if current page needs a dark header by default
  const needsDarkHeader = pathname.includes('/men') || 
                          pathname.includes('/women') || 
                          pathname.includes('/collections') ||
                          pathname.includes('/about') ||
                          pathname.includes('/contact');
  
  useEffect(() => {
    const handleResize = () => {
      // Close mobile menu if screen is resized to desktop
      if (window.innerWidth >= 1024 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [scrolled, isMenuOpen]);

  // Close mobile menu when navigating to a new page
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header 
        className={`fixed w-full z-50 transition-all duration-200 ${
          scrolled || needsDarkHeader ? 'py-2 bg-[#0a1118]/95 backdrop-blur-sm' : 'py-4 md:py-6 bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ 
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1]
        }}
      >
        <div className="container-custom flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            className="relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link href="/" className="flex items-center">
              <h1 className={`font-serif font-bold tracking-wider transition-all duration-200 ${
                scrolled || needsDarkHeader ? 'text-xl md:text-2xl text-[#f2f2f2]' : 'text-2xl md:text-3xl text-[#f2f2f2]'
              }`}>
                HANKAR
              </h1>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {[
              { href: '/', label: 'Home' },
              { href: '/collections', label: 'Collections' },
              { href: '/men', label: 'Men' },
              { href: '/women', label: 'Women' },
              { href: '/about', label: 'About' },
              { href: '/contact', label: 'Contact' },
            ].map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.4,
                  delay: 0.2 + (i * 0.1),
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <Link 
                  href={item.href}
                  className={`uppercase text-sm tracking-widest gold-underline transition-colors ${
                    scrolled || needsDarkHeader ? 'text-[#f2f2f2]' : 'text-[#f2f2f2]'
                  } ${pathname === item.href ? 'text-[#b49146]' : ''}`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden relative z-20 p-2 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className={`w-6 h-0.5 bg-[#f2f2f2] mb-1.5 transition-all duration-200 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-[#f2f2f2] mb-1.5 transition-all duration-200 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-[#f2f2f2] transition-all duration-200 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>
      </motion.header>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed top-[60px] md:top-[72px] left-0 right-0 bg-[#0a1118] shadow-lg z-40 lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container-custom py-4">
              <nav className="flex flex-col divide-y divide-[#f2f2f2]/10">
                {[
                  { href: '/', label: 'Home' },
                  { href: '/collections', label: 'Collections' },
                  { href: '/men', label: 'Men' },
                  { href: '/women', label: 'Women' },
                  { href: '/about', label: 'About' },
                  { href: '/contact', label: 'Contact' },
                ].map((item) => (
                  <Link 
                    key={item.href}
                    href={item.href}
                    className={`py-3 px-2 uppercase text-sm tracking-widest transition-colors ${
                      pathname === item.href ? 'text-[#b49146]' : 'text-[#f2f2f2]'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              
              <div className="mt-6 pt-4 border-t border-[#f2f2f2]/10">
                <div className="flex flex-col space-y-2 mb-4">
                  <p className="text-[#b49146] uppercase tracking-widest text-xs">Visit Our Atelier</p>
                  <p className="text-[#f2f2f2]/70 text-sm">123 Fashion Avenue, Mumbai</p>
                </div>
                <Link 
                  href="/contact" 
                  className="border border-[#b49146] text-[#b49146] px-4 py-2 text-xs uppercase tracking-wider hover:bg-[#b49146] hover:text-[#0a1118] transition-all inline-block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header; 