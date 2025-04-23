"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a1118] text-[#f2f2f2] pt-24 pb-8 overflow-hidden w-full">
      <div className="container-custom">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16"
        >
          <motion.div variants={fadeIn} className="space-y-8">
            <h3 className="text-3xl font-serif font-medium tracking-wider text-[#b49146]">HANKAR</h3>
            <p className="text-[#f2f2f2]/70 max-w-xs leading-relaxed">
              Classic luxury clothing brand for men and women with an old money aesthetic, delivering timeless elegance and sophisticated style.
            </p>
            <div className="flex space-x-4">
              {["facebook", "instagram", "twitter", "pinterest"].map((social) => (
                <a 
                  key={social}
                  href={`https://${social}.com`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-[#b49146]/30 flex items-center justify-center rounded-full hover:border-[#b49146] transition-colors"
                >
                  <span className="text-[#b49146] text-sm uppercase">{social.charAt(0)}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className="space-y-8">
            <h4 className="text-lg font-serif text-[#b49146] relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-px after:bg-[#b49146]/50">Collections</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/collections/regal-heritage" className="text-[#f2f2f2]/70 hover:text-[#b49146] transition-colors inline-block gold-underline">
                  Regal Heritage
                </Link>
              </li>
              <li>
                <Link href="/collections/contemporary-luxe" className="text-[#f2f2f2]/70 hover:text-[#b49146] transition-colors inline-block gold-underline">
                  Contemporary Luxe
                </Link>
              </li>
              <li>
                <Link href="/collections/celestial-occasions" className="text-[#f2f2f2]/70 hover:text-[#b49146] transition-colors inline-block gold-underline">
                  Celestial Occasions
                </Link>
              </li>
              <li>
                <Link href="/men" className="text-[#f2f2f2]/70 hover:text-[#b49146] transition-colors inline-block gold-underline">
                  Men&apos;s Collection
                </Link>
              </li>
              <li>
                <Link href="/women" className="text-[#f2f2f2]/70 hover:text-[#b49146] transition-colors inline-block gold-underline">
                  Women&apos;s Collection
                </Link>
              </li>
              <li>
                <Link href="/accessories" className="text-[#f2f2f2]/70 hover:text-[#b49146] transition-colors inline-block gold-underline">
                  Accessories
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={fadeIn} className="space-y-8">
            <h4 className="text-lg font-serif text-[#b49146] relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-px after:bg-[#b49146]/50">Company</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-[#f2f2f2]/70 hover:text-[#b49146] transition-colors inline-block gold-underline">
                  Our Heritage
                </Link>
              </li>
              <li>
                <Link href="/philosophy" className="text-[#f2f2f2]/70 hover:text-[#b49146] transition-colors inline-block gold-underline">
                  Artisanal Excellence
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#f2f2f2]/70 hover:text-[#b49146] transition-colors inline-block gold-underline">
                  Visit Our Atelier
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-[#f2f2f2]/70 hover:text-[#b49146] transition-colors inline-block gold-underline">
                  Join Our Team
                </Link>
              </li>
              <li>
                <Link href="/stores" className="text-[#f2f2f2]/70 hover:text-[#b49146] transition-colors inline-block gold-underline">
                  Luxury Boutiques
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={fadeIn} className="space-y-8">
            <h4 className="text-lg font-serif text-[#b49146] relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-px after:bg-[#b49146]/50">Visit Us</h4>
            <address className="not-italic text-[#f2f2f2]/70 space-y-2">
              <p className="leading-relaxed">123 Fashion Avenue,<br/>Mumbai, India 400001</p>
              <p className="leading-relaxed">contact@hankar.com</p>
              <p className="leading-relaxed">+91 123 456 7890</p>
            </address>
            <div className="pt-4">
              <Link href="/contact" className="border border-[#b49146] text-[#b49146] px-6 py-2 text-sm uppercase tracking-wider inline-block hover:bg-[#b49146] hover:text-[#0a1118] transition-all">
                Book Appointment
              </Link>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full"
        >
          <div className="border-t border-[#f2f2f2]/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
              <p className="text-[#f2f2f2]/40 text-sm mb-4 md:mb-0 md:mr-8">
                © {currentYear} HANKAR Luxury. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link href="/terms" className="text-[#f2f2f2]/40 text-sm hover:text-[#b49146] transition-colors gold-underline">
                  Terms & Conditions
                </Link>
                <Link href="/privacy" className="text-[#f2f2f2]/40 text-sm hover:text-[#b49146] transition-colors gold-underline">
                  Privacy Policy
                </Link>
              </div>
            </div>
            <div className="text-[#f2f2f2]/40 text-sm">
              Crafted with excellence
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 