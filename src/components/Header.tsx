"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX, FiScissors } from 'react-icons/fi';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 py-4'}`}>
      <div className="container flex justify-between items-center">
        <Link href="/" className="flex items-center group">
          <div className="relative w-10 h-10 bg-[var(--primary)] rounded-full flex items-center justify-center mr-2 overflow-hidden transition-transform group-hover:scale-110">
            <FiScissors size={20} className="text-white transform -rotate-45" />
          </div>
          <div>
            <span className="text-xl font-bold text-[var(--primary)] tracking-tight transition-colors group-hover:text-[var(--secondary)]">
              JAGADEESH
            </span>
            <span className="hidden sm:inline-block text-xl font-bold ml-2 text-[var(--secondary)] tracking-tight">
              HAIR STYLE
            </span>
            <div className="hidden sm:block h-0.5 w-0 bg-[var(--secondary)] transition-all duration-300 group-hover:w-full"></div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`font-medium transition-all hover:text-[var(--secondary)] relative group ${
                pathname === item.path ? 'text-[var(--secondary)]' : 'text-[var(--foreground)]'
              }`}
            >
              {item.name}
              <span className={`absolute bottom-[-4px] left-0 w-0 h-0.5 bg-[var(--secondary)] transition-all duration-300 group-hover:w-full ${pathname === item.path ? 'w-full' : 'w-0'}`}></span>
            </Link>
          ))}
          <Link 
            href="/#contact" 
            className="btn btn-primary shadow-sm hover:shadow-md transition-all hover:translate-y-[-2px]"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[var(--foreground)] p-2 rounded-full hover:bg-gray-100 transition-colors"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden border-t">
            <div className="container py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`font-medium transition-colors hover:text-[var(--secondary)] py-2 pl-4 border-l-2 ${
                    pathname === item.path 
                      ? 'text-[var(--secondary)] border-[var(--secondary)]' 
                      : 'text-[var(--foreground)] border-transparent'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                href="/#contact" 
                className="btn btn-primary inline-block text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 