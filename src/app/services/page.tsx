import Image from 'next/image';
import Link from 'next/link';
import { FiScissors, FiTrendingUp, FiDroplet, FiStar } from 'react-icons/fi';

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[var(--primary)] text-white py-12">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Our Services</h1>
          <p className="text-center max-w-2xl mx-auto">
            Explore our range of professional hair styling, beard grooming, and hair coloring services.
            All services are performed by our experienced stylists.
          </p>
        </div>
      </section>

      {/* Hair Styling */}
      <section className="section bg-white">
        <div className="container">
          <div className="flex items-center justify-center mb-8">
            <div className="w-14 h-14 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mr-4">
              <FiScissors size={24} />
            </div>
            <h2 className="text-3xl font-bold">Hair Styling</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Hair Styling"
                fill
                className="object-cover"
              />
            </div>
            
            <div>
              <p className="mb-6">
                Our hair styling services are tailored to meet your personal style preferences and hair type.
                Our experienced stylists will consult with you to understand your needs and recommend the
                best styles that suit your face shape and lifestyle.
              </p>
              
              <div className="bg-[var(--background)] rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Hair Styling Services</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center border-b pb-2">
                    <span>Men&apos;s Haircut</span>
                    <span className="font-bold">₹200</span>
                  </li>
                  <li className="flex justify-between items-center border-b pb-2">
                    <span>Kids Haircut</span>
                    <span className="font-bold">₹150</span>
                  </li>
                  <li className="flex justify-between items-center border-b pb-2">
                    <span>Head Shave</span>
                    <span className="font-bold">₹100</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Hair Wash & Styling</span>
                    <span className="font-bold">₹150</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beard Grooming */}
      <section className="section bg-[var(--background)]">
        <div className="container">
          <div className="flex items-center justify-center mb-8">
            <div className="w-14 h-14 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mr-4">
              <FiTrendingUp size={24} />
            </div>
            <h2 className="text-3xl font-bold">Beard Grooming</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="md:order-2 relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Beard Grooming"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="md:order-1">
              <p className="mb-6">
                A well-groomed beard enhances your facial features and gives you a polished look.
                Our beard grooming services include precise trimming, shaping, and styling to keep
                your beard looking its best.
              </p>
              
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Beard Services</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center border-b pb-2">
                    <span>Beard Trim</span>
                    <span className="font-bold">₹100</span>
                  </li>
                  <li className="flex justify-between items-center border-b pb-2">
                    <span>Beard Styling</span>
                    <span className="font-bold">₹150</span>
                  </li>
                  <li className="flex justify-between items-center border-b pb-2">
                    <span>Clean Shave</span>
                    <span className="font-bold">₹80</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Beard Coloring</span>
                    <span className="font-bold">₹200</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hair Coloring */}
      <section className="section bg-white">
        <div className="container">
          <div className="flex items-center justify-center mb-8">
            <div className="w-14 h-14 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mr-4">
              <FiDroplet size={24} />
            </div>
            <h2 className="text-3xl font-bold">Hair Coloring</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Hair Coloring"
                fill
                className="object-cover"
              />
            </div>
            
            <div>
              <p className="mb-6">
                Transform your look with our professional hair coloring services. We use premium quality
                products that ensure vibrant, long-lasting color while minimizing damage to your hair.
              </p>
              
              <div className="bg-[var(--background)] rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Coloring Services</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center border-b pb-2">
                    <span>Full Hair Color</span>
                    <span className="font-bold">₹500</span>
                  </li>
                  <li className="flex justify-between items-center border-b pb-2">
                    <span>Highlights</span>
                    <span className="font-bold">₹800</span>
                  </li>
                  <li className="flex justify-between items-center border-b pb-2">
                    <span>Root Touch-up</span>
                    <span className="font-bold">₹300</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Fashion Color</span>
                    <span className="font-bold">₹1000+</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Deals */}
      <section className="section bg-[var(--background)]">
        <div className="container">
          <div className="flex items-center justify-center mb-8">
            <div className="w-14 h-14 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mr-4">
              <FiStar size={24} />
            </div>
            <h2 className="text-3xl font-bold">Package Deals</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-2">Basic Package</h3>
              <div className="text-3xl font-bold text-[var(--primary)] my-4">₹250</div>
              <ul className="space-y-2 mb-6 text-left">
                <li className="flex items-center">
                  <span className="mr-2 text-[var(--secondary)]">✓</span>
                  Haircut
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[var(--secondary)]">✓</span>
                  Beard Trim
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[var(--secondary)]">✓</span>
                  Face Wash
                </li>
              </ul>
              <Link href="/#contact" className="btn btn-primary block">
                Book Now
              </Link>
            </div>
            
            <div className="bg-[var(--primary)] text-white p-6 rounded-lg shadow-md text-center transform scale-105">
              <div className="absolute -top-3 left-0 right-0 text-center">
                <span className="bg-[var(--secondary)] text-white text-sm font-bold py-1 px-4 rounded-full">
                  POPULAR
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Package</h3>
              <div className="text-3xl font-bold text-[var(--secondary)] my-4">₹450</div>
              <ul className="space-y-2 mb-6 text-left">
                <li className="flex items-center">
                  <span className="mr-2 text-[var(--secondary)]">✓</span>
                  Haircut
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[var(--secondary)]">✓</span>
                  Beard Styling
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[var(--secondary)]">✓</span>
                  Face Wash
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[var(--secondary)]">✓</span>
                  Hair Wash & Styling
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[var(--secondary)]">✓</span>
                  Face Massage
                </li>
              </ul>
              <Link href="/#contact" className="btn bg-[var(--secondary)] text-white hover:bg-opacity-90 block">
                Book Now
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-2">Luxury Package</h3>
              <div className="text-3xl font-bold text-[var(--primary)] my-4">₹800</div>
              <ul className="space-y-2 mb-6 text-left">
                <li className="flex items-center">
                  <span className="mr-2 text-[var(--secondary)]">✓</span>
                  Haircut
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[var(--secondary)]">✓</span>
                  Premium Beard Styling
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[var(--secondary)]">✓</span>
                  Hair Coloring
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[var(--secondary)]">✓</span>
                  Hair Spa Treatment
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[var(--secondary)]">✓</span>
                  Head & Shoulder Massage
                </li>
              </ul>
              <Link href="/#contact" className="btn btn-primary block">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border-b pb-4">
              <h3 className="text-xl font-bold mb-2">How long does a typical haircut service take?</h3>
              <p>A standard men&apos;s haircut typically takes 30-45 minutes, depending on the style and complexity.</p>
            </div>
            
            <div className="border-b pb-4">
              <h3 className="text-xl font-bold mb-2">Do I need to make an appointment?</h3>
              <p>While we accept walk-ins, we recommend booking an appointment to ensure availability and minimize waiting time.</p>
            </div>
            
            <div className="border-b pb-4">
              <h3 className="text-xl font-bold mb-2">What hair products do you use?</h3>
              <p>We use professional-grade products that are suitable for various hair types. Our stylists will recommend products based on your specific hair needs.</p>
            </div>
            
            <div className="border-b pb-4">
              <h3 className="text-xl font-bold mb-2">Do you offer any discounts?</h3>
              <p>Yes, we offer special discounts for students, senior citizens, and first-time clients. We also have loyalty programs and seasonal promotions.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2">What payment methods do you accept?</h3>
              <p>We accept cash, all major credit cards, and digital payment methods like Google Pay and PhonePe.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[var(--primary)] text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Look Your Best?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Book your appointment now and experience the best hair styling and grooming services in Hyderabad.
          </p>
          <Link href="/#contact" className="btn bg-white text-[var(--primary)] hover:bg-[var(--light-accent)]">
            Book Your Appointment
          </Link>
        </div>
      </section>
    </>
  );
} 