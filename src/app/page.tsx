"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

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

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    } 
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    } 
  }
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const scaleUp = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    } 
  }
};

const textReveal = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0, 
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 1, 0.5, 1]
    }
  }
};

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden w-full">
        {/* Parallax background effect */}
        <motion.div 
          className="absolute inset-0 w-full h-full"
          style={{ 
            y: scrollY * 0.2,
          }}
        >
          <div className="relative z-0 w-full h-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1649139415736-a258a25ee28f?q=80&w=2911&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="HANKAR - Luxury Indian Fashion"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
          </div>
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1118]/90 via-[#0a1118]/80 to-[#0a1118]/90 z-10"></div>
        
        <div className="container-custom relative z-20 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="max-w-3xl mx-auto text-center px-4"
          >
            <motion.div variants={fadeIn} className="mb-6">
              <div className="uppercase tracking-[0.3em] text-[#b49146] text-sm mb-3">Est. 2023</div>
              <div className="flex items-center justify-center">
                <div className="h-px w-12 bg-[#b49146]/40"></div>
                <div className="mx-4 text-[#b49146]">★</div>
                <div className="h-px w-12 bg-[#b49146]/40"></div>
              </div>
            </motion.div>
            
            <motion.h1 
              variants={textReveal}
              className="text-6xl md:text-7xl lg:text-8xl luxury-heading text-[#f2f2f2] mb-8 drop-shadow-lg"
            >
              HANKAR
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl md:text-2xl luxury-heading text-[#f2f2f2]/90 italic mb-12 drop-shadow-lg"
            >
              The Epitome of Indian Luxury
            </motion.p>
            
            <motion.div
              variants={scaleUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/collections" className="btn-primary">
                  <span>Discover Collections</span>
                  <span className="ml-2">→</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="btn-secondary text-[#f2f2f2] border-[#b49146]">
                  <span>Book Consultation</span>
                  <span className="ml-2">→</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-12 left-0 right-0 z-20 flex justify-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 1.5,
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#f2f2f2" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Luxury Statement Banner */}
      <section className="py-16 bg-[#0a1118] overflow-hidden">
        <div className="container-custom">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8"
          >
            <motion.div variants={fadeInLeft} className="flex-1 w-full">
              <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] overflow-hidden rounded-lg">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                  className="h-full w-full relative"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1674729445770-bbf6ef2fec26?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGluZGlhbiUyMGx1eHVyeSUyMHZpZGUlMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D"
                    alt="HANKAR legacy and craftsmanship"
                    fill
                    className="object-cover object-center transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInRight} className="flex-1 text-[#f2f2f2] mt-6 md:mt-0 w-full">
              <h2 className="luxury-heading text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6 text-[#b49146]">Legacy of Elegance</h2>
              <p className="text-base md:text-lg leading-relaxed mb-4">
                HANKAR represents the perfect fusion of India&apos;s rich heritage craftsmanship and contemporary global luxury, creating garments that embody timeless sophistication.
              </p>
              <p className="text-base md:text-lg leading-relaxed mb-5 md:mb-6">
                Each piece is meticulously crafted using only the finest materials, ensuring an unrivaled quality that stands as a testament to our commitment to excellence.
              </p>
              <motion.div 
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Link href="/about" className="gold-underline uppercase tracking-wider text-[#b49146] text-sm">
                  Discover our story
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="luxury-section bg-[#f2f2f2]">
        <div className="container-custom">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
            className="mb-16 text-center"
          >
            <motion.p variants={fadeIn} className="uppercase tracking-wider text-[#b49146] mb-3 text-sm">Exceptional Craftsmanship</motion.p>
            <motion.h2 variants={fadeIn} className="luxury-heading text-4xl md:text-5xl text-[#0a1118] mb-4">The Collections</motion.h2>
            <motion.div variants={scaleUp} className="h-px w-24 bg-[#b49146] mx-auto"></motion.div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Collection 1 */}
            <motion.div variants={fadeIn} className="group">
              <div className="relative overflow-hidden mb-6 elegant-border">
                <div className="relative aspect-square w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1744833341427-6f2b4eac91ff?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Regal Heritage Collection"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1118]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div>
                    <h3 className="text-[#f2f2f2] text-xl mb-2">Regal Heritage</h3>
                    <p className="text-[#f2f2f2]/80 text-sm mb-4">Inspired by India&apos;s royal legacy</p>
                    <Link href="/collections/regal-heritage" className="text-[#b49146] text-sm uppercase tracking-wider">
                      View Collection
                    </Link>
                  </div>
                </div>
              </div>
              <h3 className="text-xl luxury-heading text-[#0a1118] mb-2">Regal Heritage</h3>
              <p className="text-[#0a1118]/70">Traditional silhouettes reimagined with contemporary elegance.</p>
            </motion.div>

            {/* Collection 2 */}
            <motion.div variants={fadeIn} className="group">
              <div className="relative overflow-hidden mb-6 elegant-border">
                <div className="relative aspect-square w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1634410251313-b65c51944ab3?q=80&w=2387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Contemporary Luxe Collection"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1118]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div>
                    <h3 className="text-[#f2f2f2] text-xl mb-2">Contemporary Luxe</h3>
                    <p className="text-[#f2f2f2]/80 text-sm mb-4">Modern styles for the global elite</p>
                    <Link href="/collections/contemporary-luxe" className="text-[#b49146] text-sm uppercase tracking-wider">
                      View Collection
                    </Link>
                  </div>
                </div>
              </div>
              <h3 className="text-xl luxury-heading text-[#0a1118] mb-2">Contemporary Luxe</h3>
              <p className="text-[#0a1118]/70">Refined minimalism that embodies understated luxury.</p>
            </motion.div>

            {/* Collection 3 */}
            <motion.div variants={fadeIn} className="group">
              <div className="relative overflow-hidden mb-6 elegant-border">
                <div className="relative aspect-square w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1610047402547-19096799eedd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SW5kaWFuJTIwTHV4dXJ5JTIwT2xkJTIwbW9uZXklMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D"
                    alt="Celestial Occasions Collection"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1118]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div>
                    <h3 className="text-[#f2f2f2] text-xl mb-2">Celestial Occasions</h3>
                    <p className="text-[#f2f2f2]/80 text-sm mb-4">Evening wear for momentous celebrations</p>
                    <Link href="/collections/celestial-occasions" className="text-[#b49146] text-sm uppercase tracking-wider">
                      View Collection
                    </Link>
                  </div>
                </div>
              </div>
              <h3 className="text-xl luxury-heading text-[#0a1118] mb-2">Celestial Occasions</h3>
              <p className="text-[#0a1118]/70">Exquisite creations for life&apos;s most cherished moments.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Heritage Showcase */}
      <section className="luxury-section overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
            {/* Text Content */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="order-2 lg:order-1 flex flex-col justify-center"
            >
              <p className="uppercase tracking-wider text-[#b49146] mb-3 text-sm">Our Philosophy</p>
              <h2 className="luxury-heading text-3xl md:text-4xl text-[#0a1118] mb-4 md:mb-6">Artisanal Excellence</h2>
              <div className="h-px w-24 bg-[#b49146] mb-6 md:mb-8"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
                <div>
                  <h3 className="text-xl luxury-heading text-[#0a1118] mb-3">Heritage Craftsmanship</h3>
                  <p className="text-[#0a1118]/70 mb-4 md:mb-6">
                    Each garment preserves generations of artisanal knowledge, honoring techniques perfected over centuries.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl luxury-heading text-[#0a1118] mb-3">Sustainable Luxury</h3>
                  <p className="text-[#0a1118]/70 mb-4 md:mb-6">
                    We embrace responsible practices, creating timeless pieces designed to be cherished for generations.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl luxury-heading text-[#0a1118] mb-3">Uncompromising Quality</h3>
                  <p className="text-[#0a1118]/70 mb-4 md:mb-6">
                    Only the finest materials are selected, ensuring each creation meets our exacting standards.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl luxury-heading text-[#0a1118] mb-3">Refined Aesthetic</h3>
                  <p className="text-[#0a1118]/70 mb-4 md:mb-6">
                    Every detail is thoughtfully considered, resulting in pieces of extraordinary elegance.
                  </p>
                </div>
              </div>
              
              <Link href="/philosophy" className="btn-primary self-start">
                <span>Explore Our Ethos</span>
                <span className="ml-2">→</span>
              </Link>
            </motion.div>
            
            {/* Image Grid */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={scaleUp}
              className="order-1 lg:order-2 grid grid-cols-2 gap-3 md:gap-4 w-full overflow-hidden"
            >
              <div className="relative aspect-square w-full">
                <Image 
                  src="https://images.unsplash.com/photo-1580143899752-84f03825ff1b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEluZGlhbiUyMEx1eHVyeSUyME9sZCUyMG1vbmV5JTIwY2xvdGhpbmd8ZW58MHx8MHx8fDA%3D"
                  alt="HANKAR craftsmanship detail" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="relative mt-8 md:mt-12 aspect-square w-full">
                <Image 
                  src="https://images.unsplash.com/photo-1599362593923-d5bd7c916eae?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEluZGlhbiUyMEx1eHVyeSUyME9sZCUyMG1vbmV5JTIwY2xvdGhpbmd8ZW58MHx8MHx8fDA%3D"
                  alt="HANKAR fabric detail" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="relative -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-24 aspect-square w-full">
                <Image 
                  src="https://images.unsplash.com/photo-1654764746590-841871176bc0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbiUyMGx1eHVyeSUyMHZpZGUlMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D"
                  alt="HANKAR embroidery detail" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="relative aspect-square w-full">
                <Image 
                  src="https://images.unsplash.com/photo-1571587289339-cb7da03fb5a6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwbHV4dXJ5JTIwdmlkZSUyMGNsb3RoaW5nfGVufDB8fDB8fHww"
                  alt="HANKAR materials" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="luxury-section bg-[#0a1118] text-[#f2f2f2] py-24">
        <div className="container-custom max-w-4xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
            className="text-center"
          >
            <motion.div 
              variants={scaleUp}
              className="text-6xl font-serif text-[#b49146] mb-8"
            >
              &quot;
            </motion.div>
            
            <motion.blockquote 
              variants={fadeIn}
              className="text-xl md:text-2xl italic luxury-heading mb-12"
            >
              HANKAR represents the pinnacle of Indian luxury fashion. Their meticulous attention to detail and commitment to preserving traditional craftsmanship while embracing modern design sensibilities creates pieces that are truly timeless.
            </motion.blockquote>
            
            <motion.div variants={fadeIn} className="h-px w-16 bg-[#b49146]/60 mx-auto mb-8"></motion.div>
            
            <motion.footer variants={fadeIn}>
              <cite className="not-italic uppercase tracking-widest text-sm text-[#b49146]">
                Kareena Desai • Vogue India
              </cite>
            </motion.footer>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="luxury-section bg-[#f2f2f2] relative overflow-hidden">
        <motion.div 
          className="absolute top-0 right-0 w-1/3 h-full bg-[#0a1118]/5 -skew-x-12 z-0"
          animate={{ 
            x: [0, 20, 0],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        ></motion.div>
        
        <div className="container-custom relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.p variants={fadeIn} className="uppercase tracking-wider text-[#b49146] mb-3 text-sm">Exclusive Experience</motion.p>
            <motion.h2 variants={textReveal} className="luxury-heading text-4xl md:text-5xl text-[#0a1118] mb-8">
              Visit Our Atelier
            </motion.h2>
            
            <motion.p variants={fadeIn} className="text-lg text-[#0a1118]/80 mb-12 max-w-xl mx-auto">
              Experience HANKAR in person with a private consultation at our flagship boutique. Our specialists will guide you through our collections and bespoke services.
            </motion.p>
            
            <motion.div 
              variants={scaleUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href="/contact" className="btn-primary">
                <span>Book An Appointment</span>
                <span className="ml-2">→</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Location */}
      <section className="luxury-section bg-white w-full">
        <div className="container-custom">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
            className="text-center mb-16 px-4"
          >
            <motion.p variants={fadeIn} className="uppercase tracking-wider text-[#b49146] mb-3 text-sm">Get In Touch</motion.p>
            <motion.h2 variants={fadeIn} className="luxury-heading text-4xl md:text-5xl text-[#0a1118] mb-4">
              Contact Us
            </motion.h2>
            <motion.div variants={scaleUp} className="h-px w-24 bg-[#b49146] mx-auto mb-6"></motion.div>
            <motion.p variants={fadeIn} className="text-[#0a1118]/80 max-w-2xl mx-auto">
              Reach out for inquiries, schedule a consultation, or learn more about our collections and bespoke services.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 px-4"
          >
            {/* Contact Form */}
            <motion.div variants={fadeInLeft}>
              <div className="bg-[#f2f2f2]/50 p-8 elegant-border">
                <ContactForm />
              </div>
            </motion.div>
            
            {/* Location Information */}
            <motion.div variants={fadeInRight} className="flex flex-col justify-between">
              <div>
                <h3 className="text-2xl luxury-heading text-[#0a1118] mb-6">Our Flagship Location</h3>
                
                <div className="relative h-[250px] mb-8 overflow-hidden elegant-border">
                  <Image
                    src="https://images.unsplash.com/photo-1580143899752-84f03825ff1b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEluZGlhbiUyMEx1eHVyeSUyME9sZCUyMG1vbmV5JTIwY2xvdGhpbmd8ZW58MHx8MHx8fDA%3D"
                    alt="HANKAR Mumbai Atelier"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1118]/70 to-transparent flex items-end">
                    <div className="p-6">
                      <h4 className="text-xl luxury-heading text-[#f2f2f2] mb-2">Mumbai Flagship</h4>
                      <p className="text-[#f2f2f2]/90 mb-4">
                        123 Fashion Avenue, Juhu<br />
                        Mumbai, Maharashtra 400049
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="text-xl luxury-heading text-[#0a1118] mb-3">Contact Details</h4>
                    <p className="text-[#0a1118]/80 leading-relaxed mb-2">
                      <span className="text-[#b49146]">Email:</span> contact@hankar.com
                    </p>
                    <p className="text-[#0a1118]/80 leading-relaxed">
                      <span className="text-[#b49146]">Phone:</span> +91 22 1234 5678
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl luxury-heading text-[#0a1118] mb-3">Hours</h4>
                    <p className="text-[#0a1118]/80 leading-relaxed mb-2">
                      Monday - Saturday: 10:00 AM - 7:00 PM
                    </p>
                    <p className="text-[#0a1118]/80 leading-relaxed">
                      Sunday: By appointment only
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
                      <span>Get Directions</span>
                      <span className="ml-2">→</span>
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href="/contact" className="btn-secondary border-[#b49146] text-[#0a1118]">
                      <span>View Full Contact Page</span>
                      <span className="ml-2">→</span>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Contact Form Component
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'general',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to a server
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiryType: 'general',
        message: '',
      });
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <>
      {formSubmitted ? (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12"
        >
          <div className="text-5xl text-[#b49146] mb-6">✓</div>
          <h3 className="text-2xl luxury-heading text-[#0a1118] mb-4">Thank You</h3>
          <p className="text-[#0a1118]/70 mb-6">
            Your message has been submitted successfully. Our team will contact you shortly.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <label htmlFor="name" className="block text-[#0a1118] mb-2 text-sm">Full Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-[#0a1118]/20 focus:border-[#b49146] focus:outline-none focus:ring-1 focus:ring-[#b49146] rounded-md bg-white/50"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-[#0a1118] mb-2 text-sm">Email Address*</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-[#0a1118]/20 focus:border-[#b49146] focus:outline-none focus:ring-1 focus:ring-[#b49146] rounded-md bg-white/50"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <label htmlFor="phone" className="block text-[#0a1118] mb-2 text-sm">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-[#0a1118]/20 focus:border-[#b49146] focus:outline-none focus:ring-1 focus:ring-[#b49146] rounded-md bg-white/50"
              />
            </div>
            <div>
              <label htmlFor="inquiryType" className="block text-[#0a1118] mb-2 text-sm">Inquiry Type*</label>
              <select
                id="inquiryType"
                name="inquiryType"
                required
                value={formData.inquiryType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-[#0a1118]/20 focus:border-[#b49146] focus:outline-none focus:ring-1 focus:ring-[#b49146] rounded-md bg-white/50"
              >
                <option value="general">General Inquiry</option>
                <option value="consultation">Book Private Consultation</option>
                <option value="collection">Collection Information</option>
                <option value="bespoke">Bespoke Services</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-[#0a1118] mb-2 text-sm">Message*</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleInputChange}
              placeholder="How can we assist you?"
              className="w-full px-4 py-3 border border-[#0a1118]/20 focus:border-[#b49146] focus:outline-none focus:ring-1 focus:ring-[#b49146] rounded-md bg-white/50"
            ></textarea>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              required
              className="h-4 w-4 text-[#b49146] focus:ring-[#b49146] border-[#0a1118]/20 rounded"
            />
            <label htmlFor="consent" className="ml-2 block text-sm text-[#0a1118]/80">
              I consent to HANKAR collecting my data to process this inquiry
            </label>
          </div>

          <div className="pt-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full btn-primary py-4"
            >
              <span>Submit Inquiry</span>
            </motion.button>
          </div>
        </form>
      )}
    </>
  );
}