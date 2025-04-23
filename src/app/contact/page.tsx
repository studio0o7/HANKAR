"use client";

import { useState } from 'react';
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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'general',
    preferredDate: '',
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
        preferredDate: '',
        message: '',
      });
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <div className="flex flex-col pt-[70px]">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1571587289339-cb7da03fb5a6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwbHV4dXJ5JTIwdmlkZSUyMGNsb3RoaW5nfGVufDB8fDB8fHww"
            alt="HANKAR Atelier"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#0a1118]/50"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="max-w-3xl mx-auto text-[#f2f2f2]"
          >
            <motion.p variants={fadeIn} className="uppercase tracking-wider text-[#b49146] mb-4 text-sm">Connect With Us</motion.p>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl luxury-heading mb-6">Contact HANKAR</motion.h1>
            <motion.div variants={scaleUp} className="h-px w-24 bg-[#b49146] mx-auto mb-6"></motion.div>
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-[#f2f2f2]/90 mb-8">
              Schedule a private consultation or reach out with any inquiries
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
              <li className="text-[#b49146]">Contact</li>
            </ol>
          </nav>
        </div>
      </div>
      
      {/* Contact Information & Form */}
      <section className="luxury-section bg-white">
        <div className="container-custom">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16"
          >
            {/* Contact Information */}
            <motion.div variants={fadeInLeft} className="order-2 lg:order-1">
              <p className="uppercase tracking-wider text-[#b49146] mb-3 text-sm">Visit Our Atelier</p>
              <h2 className="luxury-heading text-3xl md:text-4xl text-[#0a1118] mb-6">Experience HANKAR In Person</h2>
              <div className="h-px w-24 bg-[#b49146] mb-8"></div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl luxury-heading text-[#0a1118] mb-3">Mumbai Flagship Atelier</h3>
                  <p className="text-[#0a1118]/80 leading-relaxed">
                    123 Fashion Avenue, Juhu<br />
                    Mumbai, Maharashtra 400049<br />
                    India
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl luxury-heading text-[#0a1118] mb-3">Contact Details</h3>
                  <p className="text-[#0a1118]/80 leading-relaxed mb-2">
                    <span className="text-[#b49146]">Email:</span> contact@hankar.com
                  </p>
                  <p className="text-[#0a1118]/80 leading-relaxed">
                    <span className="text-[#b49146]">Phone:</span> +91 22 1234 5678
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl luxury-heading text-[#0a1118] mb-3">Hours</h3>
                  <p className="text-[#0a1118]/80 leading-relaxed mb-2">
                    Monday - Saturday: 10:00 AM - 7:00 PM
                  </p>
                  <p className="text-[#0a1118]/80 leading-relaxed">
                    Sunday: By appointment only
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl luxury-heading text-[#0a1118] mb-3">Private Consultations</h3>
                  <p className="text-[#0a1118]/80 leading-relaxed">
                    For a personalized experience, we offer private consultations with our design team. Fill out the form to request an appointment at your preferred time.
                  </p>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl luxury-heading text-[#0a1118] mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  {['Instagram', 'Facebook', 'Pinterest', 'LinkedIn'].map((social) => (
                    <Link 
                      key={social}
                      href={`#${social.toLowerCase()}`} 
                      className="w-10 h-10 rounded-full border border-[#b49146] flex items-center justify-center text-[#b49146] hover:bg-[#b49146] hover:text-[#f2f2f2] transition-colors"
                    >
                      {social[0]}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div variants={fadeInRight} className="order-1 lg:order-2">
              <div className="bg-[#f2f2f2]/50 p-8 elegant-border">
                <h2 className="text-2xl luxury-heading text-[#0a1118] mb-6">Get In Touch</h2>
                
                {formSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-12"
                  >
                    <div className="text-5xl text-[#b49146] mb-6">✓</div>
                    <h3 className="text-2xl luxury-heading text-[#0a1118] mb-4">Thank You</h3>
                    <p className="text-[#0a1118]/70 mb-6">
                      Your message has been submitted successfully. Our team will contact you shortly to assist with your inquiry.
                    </p>
                  </motion.div>
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                    {formData.inquiryType === 'consultation' && (
                      <div>
                        <label htmlFor="preferredDate" className="block text-[#0a1118] mb-2 text-sm">Preferred Date & Time*</label>
                        <input
                          type="datetime-local"
                          id="preferredDate"
                          name="preferredDate"
                          required={formData.inquiryType === 'consultation'}
                          value={formData.preferredDate}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-[#0a1118]/20 focus:border-[#b49146] focus:outline-none focus:ring-1 focus:ring-[#b49146] rounded-md bg-white/50"
                        />
                      </div>
                    )}

                    <div>
                      <label htmlFor="message" className="block text-[#0a1118] mb-2 text-sm">Message*</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder={formData.inquiryType === 'consultation' 
                          ? "Please let us know any specific requirements or interests for your consultation."
                          : "How can we assist you?"}
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
                        <span>{formData.inquiryType === 'consultation' ? 'Request Consultation' : 'Submit Inquiry'}</span>
                      </motion.button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Location Map */}
      <section className="luxury-section bg-[#f2f2f2]">
        <div className="container-custom">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-12"
          >
            <motion.p variants={fadeIn} className="uppercase tracking-wider text-[#b49146] mb-3 text-sm">Find Us</motion.p>
            <motion.h2 variants={fadeIn} className="luxury-heading text-3xl text-[#0a1118] mb-4">Our Location</motion.h2>
            <motion.div variants={scaleUp} className="h-px w-24 bg-[#b49146] mx-auto mb-6"></motion.div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="relative w-full h-[400px] overflow-hidden elegant-border"
          >
            <Image
              src="https://images.unsplash.com/photo-1580143899752-84f03825ff1b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEluZGlhbiUyMEx1eHVyeSUyME9sZCUyMG1vbmV5JTIwY2xvdGhpbmd8ZW58MHx8MHx8fDA%3D"
              alt="HANKAR Mumbai Atelier"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-[#0a1118]/80 text-[#f2f2f2] px-8 py-6 max-w-md text-center">
                <h3 className="text-2xl luxury-heading mb-4">Mumbai Flagship</h3>
                <p className="mb-4">123 Fashion Avenue, Juhu<br />Mumbai, Maharashtra 400049</p>
                <Link href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-[#b49146] uppercase tracking-wider text-sm inline-flex items-center">
                  <span>Get Directions</span>
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
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
            <motion.p variants={fadeIn} className="uppercase tracking-wider text-[#b49146] mb-3 text-sm">Stay Connected</motion.p>
            <motion.h2 variants={fadeIn} className="luxury-heading text-3xl mb-8">
              Join Our Community
            </motion.h2>
            
            <motion.p variants={fadeIn} className="text-lg text-[#f2f2f2]/80 mb-12 max-w-3xl mx-auto">
              Sign up for our newsletter to receive exclusive updates on new collections, events, and special offers from HANKAR.
            </motion.p>
            
            <motion.div variants={fadeIn} className="max-w-md mx-auto">
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 bg-[#f2f2f2]/10 border border-[#b49146]/30 focus:border-[#b49146] focus:outline-none focus:ring-1 focus:ring-[#b49146] rounded-l-md text-[#f2f2f2]"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-[#b49146] text-[#f2f2f2] py-3 px-6 rounded-r-md uppercase tracking-wider text-sm hover:bg-[#f2f2f2] hover:text-[#0a1118] transition-colors"
                >
                  Subscribe
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 