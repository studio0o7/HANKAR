"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Animation variants
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

// Collection data
const collections = [
  {
    id: 'regal-heritage',
    name: 'Regal Heritage',
    description: 'Traditional silhouettes reimagined with contemporary elegance, inspired by India\'s royal legacy.',
    shortDesc: 'Inspired by India\'s royal legacy',
    image: 'https://images.unsplash.com/photo-1744833341427-6f2b4eac91ff?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    items: [
      { name: 'Maharaja Sherwani', price: '₹89,500' },
      { name: 'Imperial Brocade Kurta', price: '₹58,200' },
      { name: 'Heritage Jodhpuri Suit', price: '₹76,000' },
      { name: 'Royal Bandhgala', price: '₹65,800' },
      { name: 'Legacy Achkan', price: '₹72,300' },
    ]
  },
  {
    id: 'contemporary-luxe',
    name: 'Contemporary Luxe',
    description: 'Refined minimalism that embodies understated luxury for the modern global elite.',
    shortDesc: 'Modern styles for the global elite',
    image: 'https://images.unsplash.com/photo-1634410251313-b65c51944ab3?q=80&w=2387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    items: [
      { name: 'Modern Nehru Jacket', price: '₹45,600' },
      { name: 'Minimalist Kurta Set', price: '₹38,900' },
      { name: 'Elite Structured Bandhgala', price: '₹62,400' },
      { name: 'Contemporary Silk Shirt', price: '₹32,700' },
      { name: 'Luxury Linen Suit', price: '₹71,800' },
    ]
  },
  {
    id: 'celestial-occasions',
    name: 'Celestial Occasions',
    description: 'Exquisite creations for life\'s most cherished moments, crafted with precision and artistry.',
    shortDesc: 'Evening wear for momentous celebrations',
    image: 'https://images.unsplash.com/photo-1610047402547-19096799eedd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SW5kaWFuJTIwTHV4dXJ5JTIwT2xkJTIwbW9uZXklMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D',
    items: [
      { name: 'Celestial Embroidered Sherwani', price: '₹125,000' },
      { name: 'Embellished Occasion Lehenga', price: '₹185,000' },
      { name: 'Ethereal Beaded Gown', price: '₹165,800' },
      { name: 'Heirloom Bridal Couture', price: '₹235,000' },
      { name: 'Ceremonial Silk Ensemble', price: '₹97,400' },
    ]
  }
];

export default function Collections() {
  const [activeCollection, setActiveCollection] = useState(collections[0]);
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
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        {/* Parallax background effect */}
        <motion.div 
          className="absolute inset-0"
          style={{ 
            y: scrollY * 0.2,
          }}
        >
          <div className="relative z-0 w-full h-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1649139415736-a258a25ee28f?q=80&w=2911&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="HANKAR Collections"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1118]/90 via-[#0a1118]/80 to-[#0a1118]/90 z-10"></div>
        
        <div className="container-custom relative z-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeIn} className="mb-6">
              <div className="uppercase tracking-[0.3em] text-[#b49146] text-sm mb-3">Curated Excellence</div>
              <div className="flex items-center justify-center">
                <div className="h-px w-12 bg-[#b49146]/40"></div>
                <div className="mx-4 text-[#b49146]">★</div>
                <div className="h-px w-12 bg-[#b49146]/40"></div>
              </div>
            </motion.div>
            
            <motion.h1 
              variants={textReveal}
              className="text-5xl md:text-6xl luxury-heading text-[#f2f2f2] mb-8 drop-shadow-lg"
            >
              Our Collections
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl luxury-heading text-[#f2f2f2]/90 italic mb-12 max-w-3xl mx-auto drop-shadow-lg"
            >
              Each HANKAR collection represents a distinct expression of our design philosophy, combining heritage craftsmanship with contemporary sophistication.
            </motion.p>
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

      {/* Collection Navigation - No longer sticky */}
      <div className="bg-[#f2f2f2] shadow-md z-10">
        <div className="container-custom py-6">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="flex flex-wrap justify-center gap-6"
          >
            {collections.map((collection) => (
              <motion.div 
                key={collection.id}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                className={`cursor-pointer px-6 py-3 border-b-2 transition-all duration-300 ${activeCollection.id === collection.id ? 'border-[#b49146]' : 'border-transparent hover:border-[#b49146]/50'}`}
                onClick={() => setActiveCollection(collection)}
              >
                <h3 className="text-lg luxury-heading text-[#0a1118]">{collection.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Featured Collection */}
      <section className="luxury-section bg-white">
        <div className="container-custom">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            key={activeCollection.id}
          >
            <motion.div 
              variants={fadeInLeft}
              key={activeCollection.id + "-image"}
              className="order-2 lg:order-1"
            >
              <div className="relative aspect-[4/5] overflow-hidden elegant-border">
                <motion.div
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  key={activeCollection.id + "-inner"}
                  transition={{ duration: 0.7 }}
                  className="h-full w-full"
                >
                  <Image
                    src={activeCollection.image}
                    alt={activeCollection.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1118]/70 via-transparent to-transparent"></div>
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 p-8"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <h2 className="text-3xl luxury-heading text-[#f2f2f2] mb-2">{activeCollection.name}</h2>
                    <p className="text-[#f2f2f2]/80 text-lg">{activeCollection.shortDesc}</p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeInRight}
              key={activeCollection.id + "-content"}
              className="order-1 lg:order-2"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key={activeCollection.id + "-text"}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-4xl luxury-heading text-[#0a1118] mb-8">{activeCollection.name}</h2>
                <div className="h-px w-24 bg-[#b49146] mb-8"></div>
                <p className="text-lg text-[#0a1118]/80 mb-12">
                  {activeCollection.description}
                </p>
                
                <div className="mb-12">
                  <h3 className="text-xl luxury-heading text-[#0a1118] mb-6">Signature Pieces</h3>
                  <div className="space-y-4">
                    {activeCollection.items.map((item, index) => (
                      <motion.div 
                        key={item.name + activeCollection.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.5 }}
                        className="flex justify-between items-center border-b border-[#0a1118]/10 pb-3"
                      >
                        <span className="text-[#0a1118]/90">{item.name}</span>
                        <span className="text-[#b49146]">{item.price}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href={`/collections/${activeCollection.id}`} className="btn-primary">
                    <span>Explore Full Collection</span>
                    <span className="ml-2">→</span>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* All Collections Grid */}
      <section className="luxury-section bg-[#f2f2f2]">
        <div className="container-custom">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
            className="mb-16 text-center"
          >
            <motion.p variants={fadeIn} className="uppercase tracking-wider text-[#b49146] mb-3 text-sm">Complete Portfolio</motion.p>
            <motion.h2 variants={textReveal} className="luxury-heading text-4xl text-[#0a1118] mb-4">Browse All Collections</motion.h2>
            <motion.div variants={scaleUp} className="h-px w-24 bg-[#b49146] mx-auto"></motion.div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {collections.map((collection) => (
              <motion.div 
                key={collection.id} 
                variants={fadeIn} 
                className="group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden mb-6 elegant-border">
                  <div className="relative aspect-square w-full">
                    <Image
                      src={collection.image}
                      alt={collection.name}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1118]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div>
                      <h3 className="text-[#f2f2f2] text-xl mb-2">{collection.name}</h3>
                      <p className="text-[#f2f2f2]/80 text-sm mb-4">{collection.shortDesc}</p>
                      <Link href={`/collections/${collection.id}`} className="text-[#b49146] text-sm uppercase tracking-wider">
                        View Collection
                      </Link>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl luxury-heading text-[#0a1118] mb-2">{collection.name}</h3>
                <p className="text-[#0a1118]/70">{collection.shortDesc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bespoke Service CTA */}
      <section className="luxury-section bg-[#0a1118] text-[#f2f2f2]">
        <div className="container-custom max-w-5xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center"
          >
            <motion.p variants={fadeIn} className="uppercase tracking-wider text-[#b49146] mb-3 text-sm">Personalized Experience</motion.p>
            <motion.h2 variants={textReveal} className="luxury-heading text-4xl mb-8">
              Bespoke Atelier Service
            </motion.h2>
            
            <motion.p variants={fadeIn} className="text-lg text-[#f2f2f2]/80 mb-12 max-w-3xl mx-auto">
              For those seeking the ultimate expression of individuality, our bespoke service offers a personalized journey from conceptualization to creation, resulting in a truly one-of-a-kind HANKAR masterpiece.
            </motion.p>
            
            <motion.div 
              variants={scaleUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/bespoke" className="btn-primary bg-[#b49146] text-[#f2f2f2] hover:bg-[#f2f2f2] hover:text-[#0a1118]">
                  <span>Discover Bespoke</span>
                  <span className="ml-2">→</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="btn-secondary text-[#f2f2f2] border-[#b49146] hover:bg-[#f2f2f2] hover:text-[#0a1118]">
                  <span>Book Consultation</span>
                  <span className="ml-2">→</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 