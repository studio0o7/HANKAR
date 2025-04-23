"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';

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

const productReveal = {
  hidden: { y: 50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Collection data and types
type ProductType = {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
}

type CollectionType = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  shortDesc: string;
  image: string;
  heroBanner: string;
  products: ProductType[];
  craftsmanship: string[];
}

type CollectionsDataType = {
  [key: string]: CollectionType;
}

// Use the same images as in the home page
const collectionsData: CollectionsDataType = {
  'regal-heritage': {
    id: 'regal-heritage',
    name: 'Regal Heritage',
    tagline: 'Honoring the legacy of Indian royalty',
    description: 'Traditional silhouettes reimagined with contemporary elegance, inspired by India\'s royal legacy. Each piece in our Regal Heritage collection embodies the grandeur of India\'s princely states while offering modern comfort and sophistication.',
    shortDesc: 'Inspired by India\'s royal legacy',
    image: 'https://images.unsplash.com/photo-1744833341427-6f2b4eac91ff?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    heroBanner: 'https://images.unsplash.com/photo-1744833341427-6f2b4eac91ff?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    products: [
      { 
        id: 'maharaja-sherwani',
        name: 'Maharaja Sherwani', 
        price: '₹89,500',
        image: 'https://images.unsplash.com/photo-1580143899752-84f03825ff1b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEluZGlhbiUyMEx1eHVyeSUyME9sZCUyMG1vbmV5JTIwY2xvdGhpbmd8ZW58MHx8MHx8fDA%3D',
        description: 'A majestic sherwani crafted with intricate gold threadwork and precious embellishments, inspired by the regalia of Indian maharajas.'
      },
      { 
        id: 'imperial-brocade-kurta',
        name: 'Imperial Brocade Kurta', 
        price: '₹58,200',
        image: 'https://images.unsplash.com/photo-1599362593923-d5bd7c916eae?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEluZGlhbiUyMEx1eHVyeSUyME9sZCUyMG1vbmV5JTIwY2xvdGhpbmd8ZW58MHx8MHx8fDA%3D',
        description: 'Luxurious silk kurta featuring heritage Banarasi brocade with motifs inspired by Mughal architecture and royal gardens.'
      },
      { 
        id: 'heritage-jodhpuri-suit',
        name: 'Heritage Jodhpuri Suit', 
        price: '₹76,000',
        image: 'https://images.unsplash.com/photo-1654764746590-841871176bc0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbiUyMGx1eHVyeSUyMHZpZGUlMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D',
        description: 'A sophisticated Jodhpuri suit with impeccable tailoring and subtle embellishments, perfect for formal occasions.'
      },
      { 
        id: 'royal-bandhgala',
        name: 'Royal Bandhgala', 
        price: '₹65,800',
        image: 'https://images.unsplash.com/photo-1571587289339-cb7da03fb5a6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwbHV4dXJ5JTIwdmlkZSUyMGNsb3RoaW5nfGVufDB8fDB8fHww',
        description: 'A classic bandhgala jacket reimagined with modern proportions, crafted from the finest wool and adorned with heritage buttons.'
      },
      { 
        id: 'legacy-achkan',
        name: 'Legacy Achkan', 
        price: '₹72,300',
        image: 'https://images.unsplash.com/photo-1674729445770-bbf6ef2fec26?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGluZGlhbiUyMGx1eHVyeSUyMHZpZGUlMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D',
        description: 'An exquisite achkan featuring intricate hand embroidery passed down through generations of master artisans.'
      },
      { 
        id: 'royal-silk-saree',
        name: 'Royal Silk Saree', 
        price: '₹115,000',
        image: 'https://images.unsplash.com/photo-1580143899752-84f03825ff1b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEluZGlhbiUyMEx1eHVyeSUyME9sZCUyMG1vbmV5JTIwY2xvdGhpbmd8ZW58MHx8MHx8fDA%3D',
        description: 'A resplendent silk saree with traditional motifs and real gold zari work, inspired by heirloom textiles of royal families.'
      }
    ],
    craftsmanship: [
      'Hand embroidery by master karigars',
      'Traditional zardozi work with real gold thread',
      'Heritage dyeing techniques',
      'Ancient textile patterns revived',
      'Intricate beadwork and gemstone embellishments'
    ]
  },
  'contemporary-luxe': {
    id: 'contemporary-luxe',
    name: 'Contemporary Luxe',
    tagline: 'Modern sophistication for the global elite',
    description: 'Refined minimalism that embodies understated luxury for the modern global elite. The Contemporary Luxe collection brings together clean lines, exceptional materials, and innovative craftsmanship to create versatile pieces for the discerning individual.',
    shortDesc: 'Modern styles for the global elite',
    image: 'https://images.unsplash.com/photo-1634410251313-b65c51944ab3?q=80&w=2387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    heroBanner: 'https://images.unsplash.com/photo-1634410251313-b65c51944ab3?q=80&w=2387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    products: [
      { 
        id: 'modern-nehru-jacket',
        name: 'Modern Nehru Jacket', 
        price: '₹45,600',
        image: 'https://images.unsplash.com/photo-1580143899752-84f03825ff1b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEluZGlhbiUyMEx1eHVyeSUyME9sZCUyMG1vbmV5JTIwY2xvdGhpbmd8ZW58MHx8MHx8fDA%3D',
        description: 'A sleek, contemporary take on the classic Nehru jacket, featuring clean lines and luxurious Italian wool.'
      },
      { 
        id: 'minimalist-kurta-set',
        name: 'Minimalist Kurta Set', 
        price: '₹38,900',
        image: 'https://images.unsplash.com/photo-1599362593923-d5bd7c916eae?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEluZGlhbiUyMEx1eHVyeSUyME9sZCUyMG1vbmV5JTIwY2xvdGhpbmd8ZW58MHx8MHx8fDA%3D',
        description: 'An elegant kurta set with refined details and understated elegance, perfect for modern occasions.'
      },
      { 
        id: 'elite-structured-bandhgala',
        name: 'Elite Structured Bandhgala', 
        price: '₹62,400',
        image: 'https://images.unsplash.com/photo-1654764746590-841871176bc0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbiUyMGx1eHVyeSUyMHZpZGUlMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D',
        description: 'A precisely tailored bandhgala with architectural elements and contemporary details for the fashion-forward gentleman.'
      },
      { 
        id: 'contemporary-silk-shirt',
        name: 'Contemporary Silk Shirt', 
        price: '₹32,700',
        image: 'https://images.unsplash.com/photo-1571587289339-cb7da03fb5a6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwbHV4dXJ5JTIwdmlkZSUyMGNsb3RoaW5nfGVufDB8fDB8fHww',
        description: 'An effortlessly chic silk shirt with subtle tonal details, perfect for layering or making a refined statement.'
      },
      { 
        id: 'luxury-linen-suit',
        name: 'Luxury Linen Suit', 
        price: '₹71,800',
        image: 'https://images.unsplash.com/photo-1674729445770-bbf6ef2fec26?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGluZGlhbiUyMGx1eHVyeSUyMHZpZGUlMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D',
        description: 'A meticulously crafted linen suit that combines traditional techniques with a distinctly modern silhouette.'
      },
      { 
        id: 'modern-silk-saree',
        name: 'Modern Silk Saree', 
        price: '₹68,500',
        image: 'https://images.unsplash.com/photo-1580143899752-84f03825ff1b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEluZGlhbiUyMEx1eHVyeSUyME9sZCUyMG1vbmV5JTIwY2xvdGhpbmd8ZW58MHx8MHx8fDA%3D',
        description: 'A contemporary silk saree with minimalist design and subtle texture, perfect for the modern woman.'
      }
    ],
    craftsmanship: [
      'Innovative fabric treatments',
      'Precision tailoring techniques',
      'Contemporary embellishment methods',
      'Sustainable luxury materials',
      'Fusion of traditional and modern construction'
    ]
  },
  'celestial-occasions': {
    id: 'celestial-occasions',
    name: 'Celestial Occasions',
    tagline: 'Extraordinary creations for momentous celebrations',
    description: 'Exquisite creations for life\'s most cherished moments, crafted with precision and artistry. The Celestial Occasions collection presents extraordinary garments designed for weddings, galas, and special ceremonies, showcasing unparalleled artistry and breathtaking detail.',
    shortDesc: 'Evening wear for momentous celebrations',
    image: 'https://images.unsplash.com/photo-1610047402547-19096799eedd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SW5kaWFuJTIwTHV4dXJ5JTIwT2xkJTIwbW9uZXklMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D',
    heroBanner: 'https://images.unsplash.com/photo-1610047402547-19096799eedd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SW5kaWFuJTIwTHV4dXJ5JTIwT2xkJTIwbW9uZXklMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D',
    products: [
      { 
        id: 'celestial-embroidered-sherwani',
        name: 'Celestial Embroidered Sherwani', 
        price: '₹125,000',
        image: 'https://images.unsplash.com/photo-1580143899752-84f03825ff1b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEluZGlhbiUyMEx1eHVyeSUyME9sZCUyMG1vbmV5JTIwY2xvdGhpbmd8ZW58MHx8MHx8fDA%3D',
        description: 'A masterpiece of embroidery featuring celestial motifs and couture detailing, perfect for the most significant celebrations.'
      },
      { 
        id: 'embellished-occasion-lehenga',
        name: 'Embellished Occasion Lehenga', 
        price: '₹185,000',
        image: 'https://images.unsplash.com/photo-1599362593923-d5bd7c916eae?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEluZGlhbiUyMEx1eHVyeSUyME9sZCUyMG1vbmV5JTIwY2xvdGhpbmd8ZW58MHx8MHx8fDA%3D',
        description: 'An opulent lehenga ensemble featuring thousands of hours of hand embroidery and bespoke embellishments.'
      },
      { 
        id: 'ethereal-beaded-gown',
        name: 'Ethereal Beaded Gown', 
        price: '₹165,800',
        image: 'https://images.unsplash.com/photo-1654764746590-841871176bc0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbiUyMGx1eHVyeSUyMHZpZGUlMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D',
        description: 'A breathtaking gown with celestial-inspired beadwork that catches the light with every movement.'
      },
      { 
        id: 'heirloom-bridal-couture',
        name: 'Heirloom Bridal Couture', 
        price: '₹235,000',
        image: 'https://images.unsplash.com/photo-1571587289339-cb7da03fb5a6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwbHV4dXJ5JTIwdmlkZSUyMGNsb3RoaW5nfGVufDB8fDB8fHww',
        description: 'A magnificent bridal ensemble designed to become a cherished heirloom, featuring traditional techniques with modern sensibilities.'
      },
      { 
        id: 'ceremonial-silk-ensemble',
        name: 'Ceremonial Silk Ensemble', 
        price: '₹97,400',
        image: 'https://images.unsplash.com/photo-1674729445770-bbf6ef2fec26?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGluZGlhbiUyMGx1eHVyeSUyMHZpZGUlMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D',
        description: 'A sophisticated formal ensemble crafted from rare silk with intricate detailing perfect for significant ceremonies.'
      },
      { 
        id: 'luxury-evening-anarkali',
        name: 'Luxury Evening Anarkali', 
        price: '₹125,800',
        image: 'https://images.unsplash.com/photo-1580143899752-84f03825ff1b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEluZGlhbiUyMEx1eHVyeSUyME9sZCUyMG1vbmV5JTIwY2xvdGhpbmd8ZW58MHx8MHx8fDA%3D',
        description: 'An exquisite anarkali gown featuring hand-embroidered details and a dramatic silhouette for gala events.'
      }
    ],
    craftsmanship: [
      'Hundreds of hours of hand embroidery',
      'Rare materials and embellishments',
      'Couture construction techniques',
      'Custom-dyed fabrics and threads',
      'Multi-dimensional embellishment methods'
    ]
  }
};

export default function CollectionDetail() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const collection = collectionsData[slug];
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Redirect to collections page if collection is not found
    if (!collection && slug) {
      router.push('/collections');
    }
  }, [collection, router, slug]);

  // Fallback to first collection if the slug doesn't match any collection
  if (!collection) {
    // Return a loading state while redirecting
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f2f2f2]">
        <div className="text-center">
          <div className="mb-6 text-[#b49146]">
            <svg className="animate-spin h-10 w-10 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
          <p className="text-[#0a1118]/70">Loading collection...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          style={{ 
            y: scrollY * 0.2,
          }}
        >
          <div className="relative z-0 w-full h-full overflow-hidden">
            <Image
              src={collection.heroBanner}
              alt={`${collection.name} Collection - HANKAR`}
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
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
              <div className="uppercase tracking-[0.3em] text-[#b49146] text-sm mb-3">HANKAR Collection</div>
              <div className="flex items-center justify-center">
                <div className="h-px w-12 bg-[#b49146]/40"></div>
                <div className="mx-4 text-[#b49146]">★</div>
                <div className="h-px w-12 bg-[#b49146]/40"></div>
              </div>
            </motion.div>
            
            <motion.h1 
              variants={fadeIn}
              className="text-5xl md:text-6xl luxury-heading text-[#f2f2f2] mb-6 drop-shadow-lg"
            >
              {collection.name}
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl md:text-2xl luxury-heading text-[#f2f2f2]/90 italic mb-12 max-w-3xl mx-auto drop-shadow-lg"
            >
              {collection.tagline}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Collection Overview */}
      <section className="luxury-section bg-[#f2f2f2]">
        <div className="container-custom">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInLeft} className="order-2 lg:order-1">
              <h2 className="text-4xl luxury-heading text-[#0a1118] mb-8">The {collection.name} Collection</h2>
              <div className="h-px w-24 bg-[#b49146] mb-8"></div>
              <p className="text-lg text-[#0a1118]/80 mb-8 leading-relaxed">
                {collection.description}
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl luxury-heading text-[#0a1118] mb-4">Craftsmanship Highlights</h3>
                <ul className="space-y-3">
                  {collection.craftsmanship.map((craft: string, index: number) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-center text-[#0a1118]/80"
                    >
                      <span className="text-[#b49146] mr-3">•</span>
                      {craft}
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link href="/contact" className="btn-primary inline-flex">
                  <span>Book Private Viewing</span>
                  <span className="ml-2">→</span>
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div variants={fadeInRight} className="order-1 lg:order-2">
              <div className="relative aspect-[3/4] overflow-hidden elegant-border">
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="luxury-section bg-white">
        <div className="container-custom">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.p variants={fadeIn} className="uppercase tracking-wider text-[#b49146] mb-3 text-sm">Exceptional Craftsmanship</motion.p>
            <motion.h2 variants={fadeIn} className="luxury-heading text-4xl text-[#0a1118] mb-4">Signature Pieces</motion.h2>
            <motion.div variants={scaleUp} className="h-px w-24 bg-[#b49146] mx-auto"></motion.div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {collection.products.map((product: ProductType, index: number) => (
              <motion.div 
                key={product.id} 
                variants={productReveal}
                custom={index}
                className="group cursor-pointer"
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
                      <Link href={`/collections/${collection.id}/${product.id}`} className="text-[#b49146] text-sm uppercase tracking-wider inline-flex items-center">
                        View Details
                        <span className="ml-1 inline-block">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl luxury-heading text-[#0a1118] mb-2">{product.name}</h3>
                <p className="text-[#b49146] mb-4">{product.price}</p>
                <p className="text-[#0a1118]/70 line-clamp-2">{product.description}</p>
                <div className="mt-4">
                  <Link href={`/collections/${collection.id}/${product.id}`} className="btn-secondary text-sm py-2 px-4 inline-block">
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Other Collections */}
      <section className="luxury-section bg-[#0a1118] text-[#f2f2f2]">
        <div className="container-custom">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.p variants={fadeIn} className="uppercase tracking-wider text-[#b49146] mb-3 text-sm">Explore More</motion.p>
            <motion.h2 variants={fadeIn} className="luxury-heading text-4xl text-[#f2f2f2] mb-4">Other Collections</motion.h2>
            <motion.div variants={scaleUp} className="h-px w-24 bg-[#b49146] mx-auto"></motion.div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {Object.values(collectionsData)
              .filter(col => col.id !== collection.id)
              .map((otherCollection, index) => (
                <motion.div 
                  key={otherCollection.id} 
                  variants={fadeIn} 
                  className="group"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  custom={index}
                >
                  <div className="relative overflow-hidden mb-6 elegant-border">
                    <div className="relative aspect-[16/9] w-full">
                      <Image
                        src={otherCollection.image}
                        alt={otherCollection.name}
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1118]/80 to-transparent flex items-end p-6">
                      <div>
                        <h3 className="text-[#f2f2f2] text-2xl mb-2">{otherCollection.name}</h3>
                        <p className="text-[#f2f2f2]/80 text-sm mb-4">{otherCollection.shortDesc}</p>
                        <motion.div
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Link href={`/collections/${otherCollection.id}`} className="text-[#b49146] text-sm uppercase tracking-wider inline-flex items-center">
                            Explore Collection
                            <motion.span 
                              className="ml-1"
                              initial={{ opacity: 0, x: -5 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 + (index * 0.1) }}
                            >→</motion.span>
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/collections" className="btn-secondary text-[#f2f2f2] border-[#b49146]">
                <span>View All Collections</span>
                <span className="ml-2">→</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-20 bg-[#f2f2f2] relative overflow-hidden">
        <motion.div 
          className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-[#b49146]/5"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "mirror"
          }}
        ></motion.div>
        <motion.div 
          className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-[#b49146]/5"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            repeatType: "mirror",
            delay: 1
          }}
        ></motion.div>
        
        <div className="container-custom max-w-4xl relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center"
          >
            <motion.p variants={fadeIn} className="uppercase tracking-wider text-[#b49146] mb-3 text-sm">Personalized Service</motion.p>
            <motion.h2 variants={fadeIn} className="luxury-heading text-4xl text-[#0a1118] mb-6">
              Experience {collection.name}
            </motion.h2>
            
            <motion.p variants={fadeIn} className="text-lg text-[#0a1118]/80 mb-12 max-w-3xl mx-auto">
              Schedule a private consultation at our atelier to explore the {collection.name} collection. Our specialists will guide you through the collection and help you find the perfect pieces for your needs.
            </motion.p>
            
            <motion.div 
              variants={scaleUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact" className="btn-primary">
                <span>Book Consultation</span>
                <span className="ml-2">→</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 