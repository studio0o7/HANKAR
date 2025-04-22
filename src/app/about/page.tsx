import Image from 'next/image';
import Link from 'next/link';
import { FiAward, FiClock, FiHeart, FiUsers } from 'react-icons/fi';

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[var(--primary)] text-white py-12">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">About Us</h1>
          <p className="text-center max-w-2xl mx-auto">
            Learn more about Jagadeesh Hair Style and our team of professional stylists.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Salon Interior"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="mb-4">
                Founded by Jagadeesh, our salon has been serving clients with exceptional hair styling 
                and grooming services for over 5 years. What started as a small setup has now grown 
                into a well-known name in the industry.
              </p>
              <p className="mb-4">
                Our mission is to provide high-quality hair care services in a comfortable and 
                friendly environment. We are committed to staying updated with the latest trends 
                and techniques in hair styling to offer you the best experience.
              </p>
              <p>
                At Jagadeesh Hair Style, we believe that a great haircut can boost your confidence 
                and transform your appearance. That&apos;s why we take the time to understand your 
                needs and preferences before starting any service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Stylist */}
      <section className="section bg-[var(--background)]">
        <div className="container">
          <h2 className="section-title">Meet Our Master Stylist</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <div className="relative h-[350px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Jagadeesh - Master Stylist"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-3">Jagadeesh</h3>
              <p className="text-[var(--primary)] font-medium mb-4">Founder & Master Stylist</p>
              <p className="mb-4">
                With over 10 years of experience in the hair styling industry, Jagadeesh has 
                established himself as a skilled stylist who excels in creating looks that 
                complement each client&apos;s unique style and personality.
              </p>
              <p className="mb-4">
                He specializes in precision haircuts, beard grooming, and creative coloring techniques. 
                His attention to detail and dedication to customer satisfaction have earned him a 
                loyal clientele over the years.
              </p>
              <p className="mb-6">
                Jagadeesh regularly attends workshops and training sessions to stay updated with the 
                latest trends and techniques in hair styling, ensuring that his clients always receive 
                the best service.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                  <FiAward className="text-[var(--primary)] mr-3" size={24} />
                  <div>
                    <h4 className="font-bold">Certified</h4>
                    <p className="text-sm">Professional Stylist</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                  <FiClock className="text-[var(--primary)] mr-3" size={24} />
                  <div>
                    <h4 className="font-bold">Experience</h4>
                    <p className="text-sm">10+ Years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title">Our Talented Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Ramesh",
                position: "Senior Stylist",
                speciality: "Expert in classic and modern haircuts",
                image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "Suresh",
                position: "Beard Specialist",
                speciality: "Specialized in beard styling and grooming",
                image: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "Anil",
                position: "Color Expert",
                speciality: "Specialized in hair coloring techniques",
                image: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              }
            ].map((member, index) => (
              <div key={index} className="bg-[var(--background)] rounded-lg overflow-hidden shadow-md">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-[var(--primary)] font-medium mb-3">{member.position}</p>
                  <p className="mb-0">{member.speciality}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-[var(--background)]">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <FiUsers size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Experienced Team</h3>
              <p>
                Our stylists have years of experience and continuous training in latest techniques.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <FiHeart size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Personalized Service</h3>
              <p>
                We take time to understand your preferences and suggest styles that suit you best.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <FiAward size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Products</h3>
              <p>
                We use premium hair care products that ensure the best results without damage.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <FiClock size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Timely Service</h3>
              <p>
                We value your time and ensure that our services are delivered promptly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-[var(--primary)] to-black text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for a Fresh New Look?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Visit us today or book an appointment to experience our professional services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/#contact" className="btn btn-secondary py-3 px-8 text-lg">
              Book Appointment
            </Link>
            <Link href="/services" className="btn bg-white text-[var(--primary)] hover:bg-opacity-90 py-3 px-8 text-lg">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 