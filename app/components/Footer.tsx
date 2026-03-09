'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Github, Twitter, Chrome as Google } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

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
            <div className="mb-4">
              <Image
                src="/images/logo-mav.png"
                alt="SKMRD & ASSOCIATES"
                width={300}
                height={80}
                className="w-full max-w-[280px] h-auto object-contain"
              />
            </div>
            {/* <p 
              className="text-gray-600 text-sm leading-relaxed max-w-[350px] font-medium text-justify"
              style={{ fontSize: '14px', lineHeight: '1.6' }}
            >
              A professionally managed Chartered Accountancy firm providing comprehensive accounting, taxation, audit, and compliance services with accuracy, integrity, and ethical standards.
            </p> */}
            <p 
              className="text-gray-600 text-sm leading-relaxed max-w-[350px] font-medium"
              style={{ fontSize: '14px', lineHeight: '1.6' }}
            >
              <strong>HEAD OFFICE 1</strong><br />
              A-1/2 Ashtavinayak Apt. Behind Dholya Ganapati Mandir, Ashok Stambh, Nashik- 422002<br />
              +91 9822656851<br /><br />
              <strong>HEAD OFFICE 2</strong><br />
              Flat No. 1/2, Saee Apartment, Madhav Colony, Pournima Bus Stop, Nashik Pune Road, Dwarka, Nashik- 422011<br />
              +91 9511840438
            </p>
          </div>

          {/* Branches */}
          <div className="md:w-1/5">
            <h4 
              className="font-bold mb-6 text-lg uppercase tracking-wider"
              style={{ color: '#056385' }}
            >
              Branch
            </h4>
            <ul className="space-y-3 text-sm text-gray-500 font-medium">
              <li>Jalgaon</li>
              <li>Assam</li>
              <li>Pune</li>
            </ul>
          </div>

          {/* Office Time */}
          <div className="md:w-1/5">
            <h4 
              className="font-bold mb-6 text-lg uppercase tracking-wider"
              style={{ color: '#056385' }}
            >
              Office Time
            </h4>
            <address className="not-italic space-y-4 text-sm text-gray-500 leading-relaxed font-medium">
              <p>Monday - Saturday</p>
              <p className="font-bold">10:00AM to 6:30PM</p>
              {/* <p className="text-xs">Sunday Closed</p> */}
              <p className="mt-4">{CONTACT_INFO.landline}</p>
              <p className="hover:text-[#F37920] cursor-pointer">{CONTACT_INFO.email}</p>
            </address>
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
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col items-center">
          {/* <div className="flex gap-4 mb-6">
            <SocialIcon icon={<Facebook size={18} />} />
            <SocialIcon icon={<Github size={18} />} />
            <SocialIcon icon={<Twitter size={18} />} />
            <SocialIcon icon={<Google size={18} />} />
          </div> */}
          <p className="text-gray-400 text-xs font-medium">© 2026 All Right Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
