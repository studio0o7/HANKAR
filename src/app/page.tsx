'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FiScissors, FiTrendingUp, FiUsers, FiCalendar, FiMapPin, FiPhone, FiClock, FiCheck, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useRef, useState, useEffect } from 'react';

export default function HomePage() {
  // Active slide state for each slider
  const [activeServiceSlide, setActiveServiceSlide] = useState(0);
  const [activeGallerySlide, setActiveGallerySlide] = useState(0);
  const [activeTestimonialSlide, setActiveTestimonialSlide] = useState(0);
  
  // Refs for each slider
  const servicesRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  
  // Function to scroll to specific index in mobile view
  const scrollToItem = (ref: React.RefObject<HTMLDivElement | null>, index: number) => {
    if (ref.current) {
      const itemWidth = ref.current.clientWidth; // Use actual width
      const position = index * itemWidth;
      ref.current.scrollTo({ left: position, behavior: 'smooth' });
    }
  };

  // Set up intersection observers for sliders to update active slide indicators
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.7, // When 70% of the item is visible
    };

    // Services observer
    if (servicesRef.current) {
      const serviceItems = servicesRef.current.querySelectorAll('.service-item');
      
      const servicesObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = Array.from(serviceItems).indexOf(entry.target as Element);
            setActiveServiceSlide(index);
          }
        });
      }, observerOptions);
      
      serviceItems.forEach(item => {
        servicesObserver.observe(item);
      });
    }
    
    // Gallery observer
    if (galleryRef.current) {
      const galleryItems = galleryRef.current.querySelectorAll('.gallery-item');
      
      const galleryObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = Math.floor(Array.from(galleryItems).indexOf(entry.target as Element) / 2);
            setActiveGallerySlide(index);
          }
        });
      }, observerOptions);
      
      galleryItems.forEach(item => {
        galleryObserver.observe(item);
      });
    }
    
    // Testimonials observer
    if (testimonialsRef.current) {
      const testimonialItems = testimonialsRef.current.querySelectorAll('.testimonial-item');
      
      const testimonialsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = Array.from(testimonialItems).indexOf(entry.target as Element);
            setActiveTestimonialSlide(index);
          }
        });
      }, observerOptions);
      
      testimonialItems.forEach(item => {
        testimonialsObserver.observe(item);
      });
    }
    
    // Cleanup
    return () => {
      // Cleanup observers when component unmounts
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative gradient-bg text-white py-20 lg:py-28">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute h-40 w-40 rounded-full bg-[var(--accent)] blur-3xl left-1/4 top-1/4"></div>
          <div className="absolute h-60 w-60 rounded-full bg-[var(--secondary)] blur-3xl right-1/3 bottom-1/3"></div>
          <div className="absolute h-32 w-32 rounded-full bg-white blur-3xl left-1/3 bottom-1/4"></div>
        </div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="text-center lg:text-left pt-4 lg:pt-8">
              <div className="inline-block bg-[var(--secondary)]/30 px-4 py-2 rounded-full text-sm font-medium mb-5">Premium Hair Salon in Hyderabad</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
                Expert Hair Styling & Grooming Services
              </h1>
              <p className="text-lg md:text-xl mb-6 text-[var(--light-accent)]">
                Discover exceptional haircuts, beard grooming, and professional coloring services at Jagadeesh Hair Style.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link href="/#contact" className="btn btn-secondary">
                  Book Appointment
                </Link>
                <Link href="/services" className="btn btn-outline border-white text-white hover:bg-white hover:text-[var(--primary)]">
                  View Services
                </Link>
              </div>

              <div className="mt-8 hidden lg:grid grid-cols-3 gap-8">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[var(--secondary)]/30 rounded-full flex items-center justify-center mr-3">
                    <FiUsers size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-sm">10+ Years</p>
                    <p className="text-xs text-[var(--light-accent)]">Experience</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[var(--secondary)]/30 rounded-full flex items-center justify-center mr-3">
                    <FiScissors size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-sm">Expert Team</p>
                    <p className="text-xs text-[var(--light-accent)]">Professionals</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[var(--secondary)]/30 rounded-full flex items-center justify-center mr-3">
                    <FiCheck size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-sm">Premium</p>
                    <p className="text-xs text-[var(--light-accent)]">Service</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card p-5 max-w-md mx-auto lg:mx-0 lg:ml-auto w-full hidden lg:block">
              <h2 className="text-[var(--primary)] text-xl font-bold mb-4 text-center">Book Your Appointment</h2>
              <form id="booking-form-top" className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="name-top" className="block mb-1 text-sm font-medium text-[var(--foreground)]">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name-top"
                      className="input-field bg-white text-[var(--foreground)]"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone-top" className="block mb-1 text-sm font-medium text-[var(--foreground)]">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone-top"
                      className="input-field bg-white text-[var(--foreground)]"
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="request-type-top" className="block mb-1 text-sm font-medium text-[var(--foreground)]">
                    Request Type
                  </label>
                  <select
                    id="request-type-top"
                    className="input-field bg-white text-[var(--foreground)]"
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="booking">Book Appointment</option>
                    <option value="enquiry">Make an Enquiry</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="service-top" className="block mb-1 text-sm font-medium text-[var(--foreground)]">
                    Service
                  </label>
                  <select
                    id="service-top"
                    className="input-field bg-white text-[var(--foreground)]"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="haircut">Haircut</option>
                    <option value="beard">Beard Trim</option>
                    <option value="coloring">Hair Coloring</option>
                    <option value="combo">Haircut & Beard Combo</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="date-top" className="block mb-1 text-sm font-medium text-[var(--foreground)]">
                      Date
                    </label>
                    <input
                      type="date"
                      id="date-top"
                      className="input-field bg-white text-[var(--foreground)]"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="time-top" className="block mb-1 text-sm font-medium text-[var(--foreground)]">
                      Time
                    </label>
                    <select
                      id="time-top"
                      className="input-field bg-white text-[var(--foreground)]"
                      required
                    >
                      <option value="">Select time</option>
                      <option value="morning">Morning (9-12)</option>
                      <option value="afternoon">Afternoon (12-4)</option>
                      <option value="evening">Evening (4-8)</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message-top" className="block mb-1 text-sm font-medium text-[var(--foreground)]">
                    Message
                  </label>
                  <textarea
                    id="message-top"
                    rows={2}
                    className="input-field bg-white text-[var(--foreground)]"
                    placeholder="Any specific requirements..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full btn btn-primary py-2.5 text-base"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section bg-white" id="services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="relative">
            {/* Mobile slider indicators */}
            <div className="flex justify-center items-center md:hidden mb-4">
              <div className="flex space-x-2">
                {[0, 1, 2].map((i) => (
                  <button 
                    key={i}
                    onClick={() => scrollToItem(servicesRef, i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      i === activeServiceSlide 
                        ? 'bg-[var(--primary)] w-5' 
                        : 'bg-gray-300'
                    }`}
                    aria-label={`Go to service ${i+1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Services grid (desktop) / slider (mobile) */}
            <div 
              ref={servicesRef}
              className="flex md:grid md:grid-cols-3 overflow-x-auto gap-4 md:gap-8 pb-4 md:pb-0 hide-scrollbar md:overflow-x-visible snap-x snap-mandatory"
              onScroll={() => {
                if (servicesRef.current) {
                  const scrollPosition = servicesRef.current.scrollLeft;
                  const itemWidth = servicesRef.current.clientWidth;
                  const newIndex = Math.round(scrollPosition / itemWidth);
                  setActiveServiceSlide(newIndex);
                }
              }}
            >
              <div className="card p-8 hover:translate-y-[-5px] overflow-hidden min-w-[280px] flex-shrink-0 md:min-w-0 md:flex-shrink-1 w-[calc(100vw-64px)] md:w-auto mx-auto md:mx-0 snap-center service-item">
                <div className="relative h-52 rounded-lg mb-6 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Hair Styling"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <div className="w-12 h-12 bg-[var(--primary)] text-white rounded-full flex items-center justify-center">
                      <FiScissors size={22} />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Hair Styling</h3>
                <p className="mb-6 text-center">Expert cuts and styling for all hair types and preferences.</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <FiCheck className="text-[var(--secondary)] mr-2" />
                    <span>Trendy & Classic Cuts</span>
                  </div>
                  <div className="flex items-center">
                    <FiCheck className="text-[var(--secondary)] mr-2" />
                    <span>Styling & Finishing</span>
                  </div>
                  <div className="flex items-center">
                    <FiCheck className="text-[var(--secondary)] mr-2" />
                    <span>Hair Wash & Treatment</span>
                  </div>
                </div>
                <Link href="/services" className="block text-center text-[var(--primary)] font-medium hover:text-[var(--secondary)]">
                  Learn More →
                </Link>
              </div>
              
              <div className="card p-8 hover:translate-y-[-5px] overflow-hidden min-w-[280px] flex-shrink-0 md:min-w-0 md:flex-shrink-1 w-[calc(100vw-64px)] md:w-auto mx-auto md:mx-0 snap-center service-item">
                <div className="relative h-52 rounded-lg mb-6 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Beard Grooming"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <div className="w-12 h-12 bg-[var(--primary)] text-white rounded-full flex items-center justify-center">
                      <FiTrendingUp size={22} />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Beard Grooming</h3>
                <p className="mb-6 text-center">Professional beard trimming and styling services.</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <FiCheck className="text-[var(--secondary)] mr-2" />
                    <span>Beard Trimming & Shaping</span>
                  </div>
                  <div className="flex items-center">
                    <FiCheck className="text-[var(--secondary)] mr-2" />
                    <span>Clean Shaves</span>
                  </div>
                  <div className="flex items-center">
                    <FiCheck className="text-[var(--secondary)] mr-2" />
                    <span>Beard Styling</span>
                  </div>
                </div>
                <Link href="/services" className="block text-center text-[var(--primary)] font-medium hover:text-[var(--secondary)]">
                  Learn More →
                </Link>
              </div>
              
              <div className="card p-8 hover:translate-y-[-5px] overflow-hidden min-w-[280px] flex-shrink-0 md:min-w-0 md:flex-shrink-1 w-[calc(100vw-64px)] md:w-auto mx-auto md:mx-0 snap-center service-item">
                <div className="relative h-52 rounded-lg mb-6 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Hair Coloring"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <div className="w-12 h-12 bg-[var(--primary)] text-white rounded-full flex items-center justify-center">
                      <FiUsers size={22} />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Hair Coloring</h3>
                <p className="mb-6 text-center">Premium coloring services using quality products.</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <FiCheck className="text-[var(--secondary)] mr-2" />
                    <span>Full Color & Highlights</span>
                  </div>
                  <div className="flex items-center">
                    <FiCheck className="text-[var(--secondary)] mr-2" />
                    <span>Root Touch-ups</span>
                  </div>
                  <div className="flex items-center">
                    <FiCheck className="text-[var(--secondary)] mr-2" />
                    <span>Fashion Colors</span>
                  </div>
                </div>
                <Link href="/services" className="block text-center text-[var(--primary)] font-medium hover:text-[var(--secondary)]">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section bg-[var(--background)]" id="gallery">
        <div className="container">
          <h2 className="section-title">Our Gallery</h2>
          <div className="relative">
            {/* Mobile arrow controls for gallery */}
            <div className="flex justify-between items-center md:hidden mb-4">
              <button 
                onClick={() => {
                  if (galleryRef.current) {
                    const currentIndex = activeGallerySlide;
                    const newIndex = Math.max(0, currentIndex - 1);
                    scrollToItem(galleryRef, newIndex);
                    setActiveGallerySlide(newIndex);
                  }
                }} 
                className="p-2 rounded-full bg-white shadow-md z-10 hover:bg-gray-100 transition-all"
                aria-label="Previous gallery image"
                disabled={activeGallerySlide === 0}
              >
                <FiChevronLeft size={20} className={activeGallerySlide === 0 ? "text-gray-300" : "text-gray-700"} />
              </button>
              
              <button 
                onClick={() => {
                  if (galleryRef.current) {
                    const currentIndex = activeGallerySlide;
                    const newIndex = Math.min(3, currentIndex + 1);
                    scrollToItem(galleryRef, newIndex);
                    setActiveGallerySlide(newIndex);
                  }
                }} 
                className="p-2 rounded-full bg-white shadow-md z-10 hover:bg-gray-100 transition-all"
                aria-label="Next gallery image"
                disabled={activeGallerySlide === 3}
              >
                <FiChevronRight size={20} className={activeGallerySlide === 3 ? "text-gray-300" : "text-gray-700"} />
              </button>
            </div>
            
            {/* Gallery grid (desktop) / slider (mobile) */}
            <div 
              ref={galleryRef}
              className="flex md:grid md:grid-cols-3 lg:grid-cols-4 overflow-x-auto gap-4 pb-4 md:pb-0 hide-scrollbar md:overflow-x-visible snap-x snap-mandatory"
              onScroll={() => {
                if (galleryRef.current) {
                  const scrollPosition = galleryRef.current.scrollLeft;
                  const itemWidth = galleryRef.current.clientWidth;
                  const newIndex = Math.round(scrollPosition / itemWidth);
                  setActiveGallerySlide(newIndex);
                }
              }}
            >
              {[
                'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', // Men's haircut
                'https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', // Beard trim
                'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', // Haircut service
                'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', // Beard styling
                'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', // New image 5
                'https://images.unsplash.com/photo-1580087433295-ab2600c1030e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', // Professional haircut
                'https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', // Beard grooming
                'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', // New image 8
              ].map((src, index) => (
                <div key={index} className="group relative h-64 rounded-lg overflow-hidden min-w-[280px] md:min-w-0 flex-shrink-0 md:flex-shrink-1 w-[calc(100vw-64px)] md:w-auto mx-auto md:mx-0 snap-center gallery-item">
                  <Image
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <span className="font-medium">{
                        index === 0 ? "Classic Haircut" :
                        index === 1 ? "Beard Trimming" :
                        index === 2 ? "Hair Styling" :
                        index === 3 ? "Beard Styling" :
                        index === 4 ? "Modern Gentleman" :
                        index === 5 ? "Professional Service" :
                        index === 6 ? "Beard Grooming" :
                        "Haircut Finishing"
                      }</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-white" id="testimonials">
        <div className="container">
          <h2 className="section-title">Client Testimonials</h2>
          <div className="relative">
            {/* Mobile slider indicators */}
            <div className="flex justify-center items-center md:hidden mb-4">
              <div className="flex space-x-2">
                {[0, 1, 2].map((i) => (
                  <button 
                    key={i}
                    onClick={() => scrollToItem(testimonialsRef, i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      i === activeTestimonialSlide 
                        ? 'bg-[var(--primary)] w-5' 
                        : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${i+1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Testimonials grid (desktop) / slider (mobile) */}
            <div 
              ref={testimonialsRef}
              className="flex md:grid md:grid-cols-3 overflow-x-auto gap-4 md:gap-8 pb-4 md:pb-0 hide-scrollbar md:overflow-x-visible snap-x snap-mandatory"
              onScroll={() => {
                if (testimonialsRef.current) {
                  const scrollPosition = testimonialsRef.current.scrollLeft;
                  const itemWidth = testimonialsRef.current.clientWidth;
                  const newIndex = Math.round(scrollPosition / itemWidth);
                  setActiveTestimonialSlide(newIndex);
                }
              }}
            >
              {[
                {
                  name: 'Rahul M.',
                  quote: 'Best haircut I&apos;ve ever had. The attention to detail is impressive!',
                  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
                },
                {
                  name: 'Aditya K.',
                  quote: 'The beard trimming service was excellent. I&apos;ll definitely be coming back!',
                  image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
                },
                {
                  name: 'Vikram S.',
                  quote: 'Very professional service and great atmosphere. Highly recommended!',
                  image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
                },
              ].map((testimonial, index) => (
                <div key={index} className="card p-6 hover:translate-y-[-5px] min-w-[280px] flex-shrink-0 md:min-w-0 md:flex-shrink-1 w-[calc(100vw-64px)] md:w-auto mx-auto md:mx-0 snap-center testimonial-item">
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden mr-4 relative">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                  </div>
                  <p className="italic">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="flex text-[var(--accent)] mt-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours & Location */}
      <section className="section bg-[var(--background)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Business Hours</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <div className="flex items-center">
                    <FiClock className="text-[var(--secondary)] mr-3" size={20} />
                    <span>Monday - Friday</span>
                  </div>
                  <span className="font-medium">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <div className="flex items-center">
                    <FiClock className="text-[var(--secondary)] mr-3" size={20} />
                    <span>Saturday</span>
                  </div>
                  <span className="font-medium">9:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <FiClock className="text-[var(--secondary)] mr-3" size={20} />
                    <span>Sunday</span>
                  </div>
                  <span className="font-medium">10:00 AM - 6:00 PM</span>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center mb-4">
                  <FiMapPin className="text-[var(--secondary)] mr-3" size={20} />
                  <span>123 Salon Street, Hyderabad</span>
                </div>
                <div className="flex items-center">
                  <FiPhone className="text-[var(--secondary)] mr-3" size={20} />
                  <a href="tel:+911234567890" className="hover:text-[var(--secondary)]">
                    +91 123 456 7890
                  </a>
                </div>
              </div>
            </div>
            
            <div className="card p-8 flex-col justify-center hidden lg:block">
              <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Us</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[var(--secondary)] text-white rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <FiScissors size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Expert Stylists</h4>
                    <p className="text-sm">Our team of experienced professionals ensure you get the best service.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[var(--secondary)] text-white rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <FiUsers size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Personalized Service</h4>
                    <p className="text-sm">We take time to understand your style preferences and needs.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[var(--secondary)] text-white rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <FiCalendar size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Convenient Booking</h4>
                    <p className="text-sm">Easy online booking system to save your time and ensure slot availability.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add CSS for hiding scrollbars while allowing scrolling */}
      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;  /* Chrome, Safari and Opera */
        }
      `}</style>

      {/* Booking Form Section */}
      <section className="section bg-white" id="contact">
        <div className="container">
          <h2 className="section-title">Book an Appointment</h2>
          <div className="max-w-3xl mx-auto">
            <div className="card p-8">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-[var(--foreground)]">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="input-field bg-white"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-[var(--foreground)]">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="input-field bg-white"
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-[var(--foreground)]">
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="input-field bg-white"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="request-type" className="block mb-2 text-sm font-medium text-[var(--foreground)]">
                    Request Type
                  </label>
                  <select
                    id="request-type"
                    className="input-field bg-white"
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="booking">Book Appointment</option>
                    <option value="enquiry">Make an Enquiry</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="service" className="block mb-2 text-sm font-medium text-[var(--foreground)]">
                    Service
                  </label>
                  <select
                    id="service"
                    className="input-field bg-white"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="haircut">Haircut</option>
                    <option value="beard">Beard Trim</option>
                    <option value="coloring">Hair Coloring</option>
                    <option value="combo">Haircut & Beard Combo</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block mb-2 text-sm font-medium text-[var(--foreground)]">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      className="input-field bg-white"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block mb-2 text-sm font-medium text-[var(--foreground)]">
                      Preferred Time
                    </label>
                    <select
                      id="time"
                      className="input-field bg-white"
                      required
                    >
                      <option value="">Select time</option>
                      <option value="morning">Morning (9am-12pm)</option>
                      <option value="afternoon">Afternoon (12pm-4pm)</option>
                      <option value="evening">Evening (4pm-8pm)</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-[var(--foreground)]">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    className="input-field bg-white"
                    placeholder="Any specific requirements or questions..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full btn btn-primary py-3 text-lg"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 