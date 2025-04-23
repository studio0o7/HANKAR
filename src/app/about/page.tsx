"use client";

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

export default function AboutPage() {
  return (
    <div className="flex flex-col pt-[70px]">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1674729445770-bbf6ef2fec26?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGluZGlhbiUyMGx1eHVyeSUyMHZpZGUlMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D"
            alt="HANKAR Legacy"
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
            <motion.p variants={fadeIn} className="uppercase tracking-wider text-[#b49146] mb-4 text-sm">Our Heritage</motion.p>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl luxury-heading mb-6">The HANKAR Legacy</motion.h1>
            <motion.div variants={scaleUp} className="h-px w-24 bg-[#b49146] mx-auto mb-6"></motion.div>
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-[#f2f2f2]/90 mb-8">
              A journey through timeless elegance, where traditional craftsmanship meets contemporary luxury.
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
              <li className="text-[#b49146]">About</li>
            </ol>
          </nav>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="luxury-section bg-white">
        <div className="container-custom">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInLeft} className="order-2 lg:order-1">
              <p className="uppercase tracking-wider text-[#b49146] mb-3 text-sm">Our Story</p>
              <h2 className="luxury-heading text-3xl md:text-4xl text-[#0a1118] mb-6">A Heritage of Excellence</h2>
              <div className="h-px w-24 bg-[#b49146] mb-8"></div>
              <p className="text-[#0a1118]/80 leading-relaxed mb-6">
                Founded in 2023 by visionary designer Indra Sharma, HANKAR was born from a profound appreciation for India&apos;s rich textile heritage and a desire to showcase this legacy on the global luxury stage.
              </p>
              <p className="text-[#0a1118]/80 leading-relaxed mb-6">
                The name HANKAR derives from &apos;Hank&apos; — the unit of measurement for yarn — and &apos;Kar&apos; — meaning artisan. Together, they represent our commitment to craftsmanship and the meticulous creation of each garment.
              </p>
              <p className="text-[#0a1118]/80 leading-relaxed">
                Our journey began with a small atelier in Mumbai, working with master artisans whose families have preserved traditional techniques for generations. Today, while our reach has expanded globally, our core philosophy remains unchanged: to create timeless pieces that honor both heritage and innovation.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInRight} className="order-1 lg:order-2">
              <div className="relative aspect-[4/5] overflow-hidden elegant-border">
                <Image
                  src="https://images.unsplash.com/photo-1580143899752-84f03825ff1b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEluZGlhbiUyMEx1eHVyeSUyME9sZCUyMG1vbmV5JTIwY2xvdGhpbmd8ZW58MHx8MHx8fDA%3D"
                  alt="HANKAR founder"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Our Philosophy */}
      <section className="luxury-section bg-[#f2f2f2]">
        <div className="container-custom">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.p variants={fadeIn} className="uppercase tracking-wider text-[#b49146] mb-3 text-sm">Our Vision</motion.p>
            <motion.h2 variants={fadeIn} className="luxury-heading text-3xl md:text-4xl text-[#0a1118] mb-4">Philosophy & Values</motion.h2>
            <motion.div variants={scaleUp} className="h-px w-24 bg-[#b49146] mx-auto mb-6"></motion.div>
            <motion.p variants={fadeIn} className="text-[#0a1118]/80 max-w-2xl mx-auto">
              At HANKAR, we are guided by a set of core principles that inform every aspect of our brand, from design and production to our relationships with clients and artisans.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeIn} className="bg-white p-8 shadow-sm">
              <div className="text-[#b49146] text-4xl mb-6">⦿</div>
              <h3 className="text-xl luxury-heading text-[#0a1118] mb-4">Heritage Craftsmanship</h3>
              <p className="text-[#0a1118]/70">
                We honor and preserve traditional techniques passed down through generations, working closely with master artisans to ensure these skills continue to thrive.
              </p>
            </motion.div>
            
            <motion.div variants={fadeIn} className="bg-white p-8 shadow-sm">
              <div className="text-[#b49146] text-4xl mb-6">⦿</div>
              <h3 className="text-xl luxury-heading text-[#0a1118] mb-4">Sustainable Luxury</h3>
              <p className="text-[#0a1118]/70">
                Our commitment to sustainability shapes every decision, from sourcing materials to ethical production practices, creating pieces that are as responsible as they are beautiful.
              </p>
            </motion.div>
            
            <motion.div variants={fadeIn} className="bg-white p-8 shadow-sm">
              <div className="text-[#b49146] text-4xl mb-6">⦿</div>
              <h3 className="text-xl luxury-heading text-[#0a1118] mb-4">Timeless Design</h3>
              <p className="text-[#0a1118]/70">
                We reject the transient nature of fast fashion in favor of enduring elegance. Each HANKAR creation transcends trends, designed to be cherished for generations.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Craftsmanship Process */}
      <section className="luxury-section bg-white">
        <div className="container-custom">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.p variants={fadeIn} className="uppercase tracking-wider text-[#b49146] mb-3 text-sm">Our Process</motion.p>
            <motion.h2 variants={fadeIn} className="luxury-heading text-3xl md:text-4xl text-[#0a1118] mb-4">The Art of Craftsmanship</motion.h2>
            <motion.div variants={scaleUp} className="h-px w-24 bg-[#b49146] mx-auto mb-6"></motion.div>
            <motion.p variants={fadeIn} className="text-[#0a1118]/80 max-w-2xl mx-auto">
              Every HANKAR creation undergoes a meticulous journey from conception to completion, involving dozens of skilled hands and hundreds of hours of dedicated craftsmanship.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInLeft}>
              <div className="relative aspect-square overflow-hidden elegant-border">
                <Image
                  src="https://images.unsplash.com/photo-1599362593923-d5bd7c916eae?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEluZGlhbiUyMEx1eHVyeSUyME9sZCUyMG1vbmV5JTIwY2xvdGhpbmd8ZW58MHx8MHx8fDA%3D"
                  alt="HANKAR craftsmanship process"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
            
            <motion.div variants={fadeInRight}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl luxury-heading text-[#0a1118] mb-3 flex items-center">
                    <span className="text-[#b49146] mr-4">01</span>
                    Material Selection
                  </h3>
                  <p className="text-[#0a1118]/70">
                    We source only the finest materials, from handwoven silks to organic cottons, selecting each for its exceptional quality and sustainability credentials.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl luxury-heading text-[#0a1118] mb-3 flex items-center">
                    <span className="text-[#b49146] mr-4">02</span>
                    Traditional Techniques
                  </h3>
                  <p className="text-[#0a1118]/70">
                    Our artisans employ age-old techniques like hand embroidery, block printing, and traditional weaving methods that have been perfected over centuries.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl luxury-heading text-[#0a1118] mb-3 flex items-center">
                    <span className="text-[#b49146] mr-4">03</span>
                    Meticulous Construction
                  </h3>
                  <p className="text-[#0a1118]/70">
                    Each garment is constructed with extraordinary attention to detail, with multiple fittings and quality checks throughout the creation process.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl luxury-heading text-[#0a1118] mb-3 flex items-center">
                    <span className="text-[#b49146] mr-4">04</span>
                    Final Refinement
                  </h3>
                  <p className="text-[#0a1118]/70">
                    Before any piece bears the HANKAR name, it undergoes a rigorous final inspection to ensure it meets our exacting standards of quality and craftsmanship.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="luxury-section bg-[#0a1118] text-[#f2f2f2]">
        <div className="container-custom max-w-4xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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
              What sets HANKAR apart is not just their exceptional craftsmanship, but their deep understanding that true luxury is about creating pieces with meaning, pieces that tell a story and connect us to our cultural heritage in a profoundly contemporary way.
            </motion.blockquote>
            
            <motion.div variants={fadeIn} className="h-px w-16 bg-[#b49146]/60 mx-auto mb-8"></motion.div>
            
            <motion.footer variants={fadeIn}>
              <cite className="not-italic uppercase tracking-widest text-sm text-[#b49146]">
                The Financial Times • Luxury Edition
              </cite>
            </motion.footer>
          </motion.div>
        </div>
      </section>
      
      {/* Our Atelier */}
      <section className="luxury-section bg-[#f2f2f2]">
        <div className="container-custom">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInLeft}>
              <p className="uppercase tracking-wider text-[#b49146] mb-3 text-sm">Visit Us</p>
              <h2 className="luxury-heading text-3xl md:text-4xl text-[#0a1118] mb-6">Our Flagship Atelier</h2>
              <div className="h-px w-24 bg-[#b49146] mb-8"></div>
              <p className="text-[#0a1118]/80 leading-relaxed mb-6">
                Located in the heart of Mumbai&apos;s luxury district, our flagship atelier offers an immersive experience into the world of HANKAR. Here, clients can explore our collections, meet with our design team, and enjoy personalized styling consultations.
              </p>
              <p className="text-[#0a1118]/80 leading-relaxed mb-8">
                The space itself reflects our brand philosophy—a harmonious blend of traditional Indian architectural elements and contemporary design, creating an atmosphere of refined elegance and warm hospitality.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/contact" className="btn-primary">
                    <span>Book a Visit</span>
                    <span className="ml-2">→</span>
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/collections" className="btn-secondary border-[#b49146] text-[#0a1118]">
                    <span>Explore Collections</span>
                    <span className="ml-2">→</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInRight}>
              <div className="relative aspect-[4/3] overflow-hidden elegant-border">
                <Image
                  src="https://images.unsplash.com/photo-1571587289339-cb7da03fb5a6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwbHV4dXJ5JTIwdmlkZSUyMGNsb3RoaW5nfGVufDB8fDB8fHww"
                  alt="HANKAR Mumbai atelier"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
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
            <motion.p variants={fadeIn} className="uppercase tracking-wider text-[#b49146] mb-3 text-sm">Join Our Journey</motion.p>
            <motion.h2 variants={fadeIn} className="luxury-heading text-3xl mb-8">
              Experience HANKAR
            </motion.h2>
            
            <motion.p variants={fadeIn} className="text-lg text-[#f2f2f2]/80 mb-12 max-w-3xl mx-auto">
              We invite you to explore our collections and experience the HANKAR difference—where heritage meets innovation, and timeless elegance is reimagined for the modern connoisseur.
            </motion.p>
            
            <motion.div 
              variants={scaleUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/collections" className="btn-primary bg-[#b49146] text-[#f2f2f2] hover:bg-[#f2f2f2] hover:text-[#0a1118]">
                  <span>Discover Our Collections</span>
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