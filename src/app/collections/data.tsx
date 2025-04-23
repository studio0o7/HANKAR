// Collection data and types
export type ProductType = {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
}

export type CollectionType = {
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

export type CollectionsDataType = {
  [key: string]: CollectionType;
}

// Use the same images as in the home page
export const collectionsData: CollectionsDataType = {
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