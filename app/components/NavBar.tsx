'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white pt-4 px-4 sm:px-6 lg:px-[50px]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo and Hamburger */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <div className="flex items-center">
              <Image
                src="/images/logo-mav.png"
                alt="SKMRD & ASSOCIATES"
                width={200}
                height={45}
                className="h-[35px] md:h-[45px] w-auto"
                quality={100}
                priority
                unoptimized
                style={{ objectFit: 'contain' }}
              />
            </div>

            {/* Hamburger Menu Button - Mobile Only */}
            <button
              onClick={toggleMenu}
              className="md:hidden flex flex-col items-center justify-center w-10 h-10 space-y-1.5 focus:outline-none"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-[#056385] transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-[#056385] transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-[#056385] transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></span>
            </button>
          </div>

          {/* Navigation items - Desktop */}
          <div className="hidden md:flex items-center justify-center border-2 border-gray-200 gap-2 sm:gap-4 md:gap-8 lg:gap-12 rounded-2xl px-3 sm:px-4 md:px-6 py-2 md:py-3">
            <Link href="/" className="text-xs sm:text-sm md:text-base font-medium hover:opacity-80 transition-colors" style={{ color: '#056385' }}>
              HOME
            </Link>
            <Link href="/about-us" className="text-xs sm:text-sm md:text-base font-medium hover:opacity-80 transition-colors" style={{ color: '#056385' }}>
              ABOUT US
            </Link>
            <Link href="/services" className="text-xs sm:text-sm md:text-base font-medium hover:opacity-80 transition-colors" style={{ color: '#056385' }}>
              SERVICES
            </Link>
            <Link href="/resources" className="text-xs sm:text-sm md:text-base font-medium hover:opacity-80 transition-colors" style={{ color: '#056385' }}>
              RESOURCES
            </Link>
            <Link href="/careers" className="text-xs sm:text-sm md:text-base font-medium hover:opacity-80 transition-colors" style={{ color: '#056385' }}>
              CAREERS
            </Link>
            <Link href="/contact" className="text-xs sm:text-sm md:text-base font-medium hover:opacity-80 transition-colors" style={{ color: '#056385' }}>
              CONTACT
            </Link>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`md:hidden w-full overflow-hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="flex flex-col border-2 border-gray-200 rounded-2xl px-4 py-4 space-y-3 bg-white">
              <Link 
                href="/" 
                className="text-sm font-medium hover:opacity-80 transition-colors py-2" 
                style={{ color: '#056385' }}
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>
              <Link 
                href="/about-us" 
                className="text-sm font-medium hover:opacity-80 transition-colors py-2" 
                style={{ color: '#056385' }}
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT US
              </Link>
              <Link 
                href="/services" 
                className="text-sm font-medium hover:opacity-80 transition-colors py-2" 
                style={{ color: '#056385' }}
                onClick={() => setIsMenuOpen(false)}
              >
                SERVICES
              </Link>
              <Link 
                href="/resources" 
                className="text-sm font-medium hover:opacity-80 transition-colors py-2" 
                style={{ color: '#056385' }}
                onClick={() => setIsMenuOpen(false)}
              >
                RESOURCES
              </Link>
              <Link 
                href="/careers" 
                className="text-sm font-medium hover:opacity-80 transition-colors py-2" 
                style={{ color: '#056385' }}
                onClick={() => setIsMenuOpen(false)}
              >
                CAREERS
              </Link>
              <Link 
                href="/contact" 
                className="text-sm font-medium hover:opacity-80 transition-colors py-2" 
                style={{ color: '#056385' }}
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
