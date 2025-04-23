"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';
import { collectionsData } from '../../data';

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

export default function ProductDetail() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const productId = params.productId as string;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Get collection and product data
  const collection = collectionsData[slug];
  const product = collection?.products.find(p => p.id === productId);

  // Redirect if collection or product is not found
  useEffect(() => {
    if (!collection || !product) {
      router.push('/collections');
    }
  }, [collection, product, router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        message: '',
      });
      setFormSubmitted(false);
    }, 5000);
  };

  // Fallback to redirect while loading
  if (!collection || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f2f2f2]">
        <div className="text-center">
          <div className="mb-6 text-[#b49146]">
            <svg className="animate-spin h-10 w-10 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
          <p className="text-[#0a1118]/70">Loading product details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col pt-[70px]">
      {/* Breadcrumb Navigation */}
      <div className="bg-[#f2f2f2] py-3 border-b border-[#0a1118]/10">
        <div className="container-custom">
          <nav className="text-sm text-[#0a1118]/70">
            <ol className="flex flex-wrap items-center">
              <li className="flex items-center">
                <Link href="/" className="hover:text-[#b49146] transition-colors">Home</Link>
                <span className="mx-2">→</span>
              </li>
              <li className="flex items-center">
                <Link href="/collections" className="hover:text-[#b49146] transition-colors">Collections</Link>
                <span className="mx-2">→</span>
              </li>
              <li className="flex items-center">
                <Link href={`/collections/${slug}`} className="hover:text-[#b49146] transition-colors">{collection.name}</Link>
                <span className="mx-2">→</span>
              </li>
              <li className="text-[#b49146]">{product.name}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Product Details */}
      <section className="luxury-section bg-white">
        <div className="container-custom">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
          >
            {/* Product Image */}
            <motion.div variants={fadeInLeft} className="sticky top-24">
              <div className="relative aspect-[3/4] overflow-hidden elegant-border">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
            
            {/* Product Info */}
            <motion.div variants={fadeInRight} className="flex flex-col">
              <h1 className="text-4xl luxury-heading text-[#0a1118] mb-4">{product.name}</h1>
              <p className="text-2xl text-[#b49146] mb-8">{product.price}</p>
              
              <div className="h-px w-24 bg-[#b49146] mb-8"></div>
              
              <div className="mb-8">
                <h3 className="text-xl luxury-heading text-[#0a1118] mb-4">Product Description</h3>
                <p className="text-[#0a1118]/80 leading-relaxed mb-6">
                  {product.description}
                </p>
                <p className="text-[#0a1118]/80 leading-relaxed">
                  This exquisite piece from our {collection.name} collection embodies HANKAR&apos;s commitment to craftsmanship and heritage. Each piece is meticulously handcrafted by our master artisans using traditional techniques and the finest materials.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl luxury-heading text-[#0a1118] mb-4">Craftsmanship Highlights</h3>
                <ul className="space-y-3">
                  {collection.craftsmanship.slice(0, 3).map((craft: string, index: number) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-center text-[#0a1118]/80"
                    >
                      <span className="text-[#b49146] mr-3">•</span>
                      {craft}
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1"
                >
                  <button 
                    onClick={() => document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' })} 
                    className="w-full btn-primary"
                  >
                    <span>Enquire Details</span>
                    <span className="ml-2">→</span>
                  </button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1"
                >
                  <button 
                    onClick={() => document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' })} 
                    className="w-full btn-secondary border-[#b49146] text-[#0a1118]"
                  >
                    <span>Book Consultation</span>
                    <span className="ml-2">→</span>
                  </button>
                </motion.div>
              </div>
              
              <div className="p-6 bg-[#f2f2f2]/50 border border-[#0a1118]/10 rounded-lg">
                <h3 className="text-lg luxury-heading text-[#0a1118] mb-3">Product Details</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-[#0a1118]/60">Collection</span>
                    <span className="text-[#0a1118]">{collection.name}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-[#0a1118]/60">Craftsmanship</span>
                    <span className="text-[#0a1118]">Hand-crafted</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-[#0a1118]/60">Made in</span>
                    <span className="text-[#0a1118]">India</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-[#0a1118]/60">Exclusivity</span>
                    <span className="text-[#0a1118]">Limited Edition</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquiry-form" className="luxury-section bg-[#f2f2f2]">
        <div className="container-custom max-w-4xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-12"
          >
            <motion.p variants={fadeIn} className="uppercase tracking-wider text-[#b49146] mb-3 text-sm">Personalized Service</motion.p>
            <motion.h2 variants={fadeIn} className="luxury-heading text-3xl text-[#0a1118] mb-4">Enquire About {product.name}</motion.h2>
            <motion.div variants={scaleUp} className="h-px w-24 bg-[#b49146] mx-auto mb-6"></motion.div>
            <motion.p variants={fadeIn} className="text-[#0a1118]/80 max-w-2xl mx-auto">
              Complete the form below to receive detailed information about this exquisite piece, schedule a private viewing, or arrange a personal consultation with our specialists.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-white p-8 rounded-lg shadow-sm border border-[#0a1118]/5"
          >
            {formSubmitted ? (
              <div className="text-center py-12">
                <div className="text-5xl text-[#b49146] mb-6">✓</div>
                <h3 className="text-2xl luxury-heading text-[#0a1118] mb-4">Thank You</h3>
                <p className="text-[#0a1118]/70 mb-6">
                  Your enquiry has been submitted successfully. Our team will contact you shortly to provide more information about {product.name}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <label htmlFor="message" className="block text-[#0a1118] mb-2 text-sm">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={`I'm interested in the ${product.name} from the ${collection.name} collection and would like more information.`}
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
                    I consent to HANKAR collecting my data to process this enquiry
                  </label>
                </div>

                <div className="pt-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full btn-primary py-4"
                  >
                    <span>Submit Enquiry</span>
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Related Products */}
      <section className="luxury-section bg-white">
        <div className="container-custom">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-12"
          >
            <motion.p variants={fadeIn} className="uppercase tracking-wider text-[#b49146] mb-3 text-sm">More to Discover</motion.p>
            <motion.h2 variants={fadeIn} className="luxury-heading text-3xl text-[#0a1118] mb-4">Related Products</motion.h2>
            <motion.div variants={scaleUp} className="h-px w-24 bg-[#b49146] mx-auto"></motion.div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {collection.products
              .filter(p => p.id !== product.id)
              .slice(0, 3)
              .map((relatedProduct, i) => (
                <motion.div 
                  key={relatedProduct.id} 
                  variants={fadeIn} 
                  className="group"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative overflow-hidden mb-6 elegant-border">
                    <div className="relative aspect-[3/4] w-full">
                      <Image
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        fill
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1118]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <div>
                        <h3 className="text-[#f2f2f2] text-xl mb-2">{relatedProduct.name}</h3>
                        <p className="text-[#f2f2f2]/80 text-sm mb-4">{relatedProduct.price}</p>
                        <Link href={`/collections/${collection.id}/${relatedProduct.id}`} className="text-[#b49146] text-sm uppercase tracking-wider inline-flex items-center">
                          View Details
                          <span className="ml-1 inline-block">→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl luxury-heading text-[#0a1118] mb-2">{relatedProduct.name}</h3>
                  <p className="text-[#b49146] mb-4">{relatedProduct.price}</p>
                  <div className="mt-4">
                    <Link href={`/collections/${collection.id}/${relatedProduct.id}`} className="btn-secondary text-sm py-2 px-4 inline-block">
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
              Experience the full {collection.name} collection in person at our Mumbai flagship. Our specialists are available for private consultations to help you discover the perfect HANKAR pieces for your collection.
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