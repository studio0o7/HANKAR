import Link from 'next/link';
import { FiPhone, FiMapPin, FiMail, FiInstagram, FiFacebook, FiTwitter, FiScissors } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-[var(--primary)] text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4 group">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-2 overflow-hidden">
                <FiScissors size={20} className="text-[var(--primary)] transform -rotate-45" />
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-tight">
                  JAGADEESH
                </span>
                <span className="text-xl font-bold ml-2 text-[var(--secondary)] tracking-tight">
                  HAIR STYLE
                </span>
              </div>
            </div>
            <p className="mb-4">
              Professional hair styling, beard cuts, and hair coloring services that make you look and feel your best.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[var(--secondary)] transition-colors" aria-label="Instagram">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-[var(--secondary)] transition-colors" aria-label="Facebook">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-[var(--secondary)] transition-colors" aria-label="Twitter">
                <FiTwitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-[var(--secondary)] transition-colors flex items-center">
                  <span className="h-[2px] w-0 bg-[var(--secondary)] mr-0 transition-all duration-300 group-hover:w-3 group-hover:mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[var(--secondary)] transition-colors flex items-center">
                  <span className="h-[2px] w-0 bg-[var(--secondary)] mr-0 transition-all duration-300 group-hover:w-3 group-hover:mr-2"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[var(--secondary)] transition-colors flex items-center">
                  <span className="h-[2px] w-0 bg-[var(--secondary)] mr-0 transition-all duration-300 group-hover:w-3 group-hover:mr-2"></span>
                  About
                </Link>
              </li>
              <li>
                <Link href="/#gallery" className="hover:text-[var(--secondary)] transition-colors flex items-center">
                  <span className="h-[2px] w-0 bg-[var(--secondary)] mr-0 transition-all duration-300 group-hover:w-3 group-hover:mr-2"></span>
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-[var(--secondary)] transition-colors flex items-center">
                  <span className="h-[2px] w-0 bg-[var(--secondary)] mr-0 transition-all duration-300 group-hover:w-3 group-hover:mr-2"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center group">
                <FiMapPin className="mr-2 text-[var(--secondary)]" />
                <span className="group-hover:text-[var(--secondary)] transition-colors">123 Salon Street, Hyderabad</span>
              </li>
              <li className="flex items-center group">
                <FiPhone className="mr-2 text-[var(--secondary)]" />
                <a href="tel:+911234567890" className="hover:text-[var(--secondary)] transition-colors">+91 123 456 7890</a>
              </li>
              <li className="flex items-center group">
                <FiMail className="mr-2 text-[var(--secondary)]" />
                <a href="mailto:info@jagadeeshhair.com" className="hover:text-[var(--secondary)] transition-colors">
                  info@jagadeeshhair.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Jagadeesh Hair Style. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 