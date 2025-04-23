"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { collectionsData, type ProductType } from '../collections/data';

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

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

// Extended product type with collection info
interface ExtendedProductType extends ProductType {
  collectionId: string;
  collectionName: string;
  gender?: string;
}

// Get all men's products across collections
const getMensProducts = (): ExtendedProductType[] => {
  const mensProducts: ExtendedProductType[] = [];
  
  Object.values(collectionsData).forEach(collection => {
    // Filter men's products - assuming we have a gender property or we're filtering based on collection
    // For now, let's include products from "regal-heritage" and "contemporary-luxe" as men's products
    // In a real implementation, you might have explicit gender tagging
    const collectionProducts = collection.products.filter(product => 
      (product as ExtendedProductType).gender === 'men' || 
      (!(product as ExtendedProductType).gender && ['regal-heritage', 'contemporary-luxe'].includes(collection.id))
    );
    
    collectionProducts.forEach(product => {
      mensProducts.push({
        ...product,
        collectionId: collection.id,
        collectionName: collection.name
      });
    });
  });
  
  return mensProducts;
};

export default function MenPage() {
  const [products, setProducts] = useState<ExtendedProductType[]>([]);
  
  useEffect(() => {
    // Get men's products on client side to avoid hydration issues
    setProducts(getMensProducts());
  }, []);

  return (
    <div className="flex flex-col pt-[70px]">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1634410251313-b65c51944ab3?q=80&w=2387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="HANKAR Men's Collection"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#0a1118]/40"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="max-w-3xl mx-auto text-[#f2f2f2]"
          >
            <motion.p variants={fadeIn} className="uppercase tracking-wider text-[#b49146] mb-4 text-sm">Masculine Elegance</motion.p>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl luxury-heading mb-6">Men&apos;s Collection</motion.h1>
            <motion.div variants={scaleUp} className="h-px w-24 bg-[#b49146] mx-auto mb-6"></motion.div>
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-[#f2f2f2]/90 mb-8">
              Discover our curated selection of men&apos;s attire, where timeless elegance meets contemporary style.
              Each piece embodies the HANKAR philosophy of refined craftsmanship and subtle luxury.
            </motion.p>
          </motion.div>
        </div>
      </section>
      
      {/* Breadcrumb */}
      <div className="bg-[#f2f2f2] py-3 border-b border-[#0a1118]/10">
        <div className="container-custom">
          <nav className="text-sm text-[#0a1118]/70">
            <ol className="flex flex-wrap items-center">
              <li className="flex items-center">
                <Link href="/" className="hover:text-[#b49146] transition-colors">Home</Link>
                <span className="mx-2">→</span>
              </li>
              <li className="text-[#b49146]">Men</li>
            </ol>
          </nav>
        </div>
      </div>
      
      {/* Products Grid */}
      <section className="luxury-section bg-white">
        <div className="container-custom">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeIn} className="luxury-heading text-3xl text-[#0a1118] mb-4">Our Men&apos;s Collection</motion.h2>
            <motion.div variants={scaleUp} className="h-px w-24 bg-[#b49146] mx-auto mb-6"></motion.div>
            <motion.p variants={fadeIn} className="text-[#0a1118]/80 max-w-2xl mx-auto">
              Each garment is a testament to our dedication to timeless elegance, meticulous tailoring, and exceptional materials.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {products.map((product) => (
              <motion.div 
                key={`${product.collectionId}-${product.id}`} 
                variants={fadeIn} 
                className="group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden mb-6 elegant-border">
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1118]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div>
                      <h3 className="text-[#f2f2f2] text-xl mb-2">{product.name}</h3>
                      <p className="text-[#f2f2f2]/80 text-sm mb-4">{product.price}</p>
                      <Link href={`/collections/${product.collectionId}/${product.id}`} className="text-[#b49146] text-sm uppercase tracking-wider inline-flex items-center">
                        View Details
                        <span className="ml-1 inline-block">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl luxury-heading text-[#0a1118] mb-2">{product.name}</h3>
                <p className="text-sm text-[#0a1118]/70 mb-2">{product.collectionName}</p>
                <p className="text-[#b49146] mb-4">{product.price}</p>
                <div className="mt-4">
                  <Link href={`/collections/${product.collectionId}/${product.id}`} className="btn-secondary text-sm py-2 px-4 inline-block">
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="luxury-section bg-[#0a1118] text-[#f2f2f2]">
        <div className="container-custom max-w-4xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center"
          >
            <motion.p variants={fadeIn} className="uppercase tracking-wider text-[#b49146] mb-3 text-sm">Experience HANKAR</motion.p>
            <motion.h2 variants={fadeIn} className="luxury-heading text-3xl mb-8">
              Visit Our Flagship Atelier
            </motion.h2>
            
            <motion.p variants={fadeIn} className="text-lg text-[#f2f2f2]/80 mb-12 max-w-3xl mx-auto">
              Experience our full men&apos;s collection in person at our Mumbai flagship. Our specialists are available for private consultations to help you discover the perfect HANKAR pieces for your wardrobe.
            </motion.p>
            
            <motion.div 
              variants={scaleUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="btn-primary bg-[#b49146] text-[#f2f2f2] hover:bg-[#f2f2f2] hover:text-[#0a1118]">
                  <span>Book In-Store Consultation</span>
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