'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Github, Twitter, Chrome as Google } from 'lucide-react';

const SocialIcon: React.FC<{ icon: React.ReactNode }> = ({ icon }) => (
  <a href="#" className="w-9 h-9 border border-[#F37920] rounded-full flex items-center justify-center text-[#F37920] hover:bg-[#F37920] hover:text-white transition-all duration-300">
    {icon}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row gap-12 mb-12">
          {/* Logo Section - Bigger */}
          <div className="md:w-2/5">
            <Image
              src="/images/footer-logoo.png"
              alt="SKMRD & ASSOCIATES"
              width={300}
              height={200}
              className="w-auto h-auto object-contain"
            />
          </div>

          {/* Useful Links */}
          <div className="md:w-1/5">
            <h4 
              className="font-bold mb-6 text-lg uppercase tracking-wider"
              style={{ color: '#056385' }}
            >
              Useful Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'About', href: '/about-us' },
                { name: 'Services', href: '/services' },
                { name: 'Resources', href: '/resources' },
                { name: 'Contact', href: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-500 hover:text-[#F37920] transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect 1 */}
          <div className="md:w-1/5">
            <h4 
              className="font-bold mb-6 text-lg uppercase tracking-wider"
              style={{ color: '#056385' }}
            >
              Connect With Us
            </h4>
            <address className="not-italic space-y-4 text-sm text-gray-500 leading-relaxed font-medium">
              <p>Office: xyz, 123, mumbai,<br />maharashtra</p>
              <p>+91 654 356 6589</p>
              <p className="hover:text-[#F37920] cursor-pointer">samarthkale33@gmail.com</p>
            </address>
          </div>

          {/* Connect 2 */}
          <div className="md:w-1/5">
            <h4 
              className="font-bold mb-6 text-lg uppercase tracking-wider"
              style={{ color: '#056385' }}
            >
              Office Time
            </h4>
            <address className="not-italic space-y-4 text-sm text-gray-500 leading-relaxed font-medium">
              <p>Monday - Friday</p>
              <p className="font-bold">10:00 to 5:00</p>
              <p className="text-xs">Saturday & Sunday Closed</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col items-center">
          <div className="flex gap-4 mb-6">
            <SocialIcon icon={<Facebook size={18} />} />
            <SocialIcon icon={<Github size={18} />} />
            <SocialIcon icon={<Twitter size={18} />} />
            <SocialIcon icon={<Google size={18} />} />
          </div>
          <p className="text-gray-400 text-xs font-medium">© 2026 All Right Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
