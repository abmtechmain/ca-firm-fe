'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CONTACT_INFO } from '../constants';

/**
 * Footer — Refined editorial
 * Aesthetic: Trust-forward, clear hierarchy. Asymmetric grid, bold labels, restrained motion.
 * Differentiation: Accent bar + Poppins labels + Instrument Sans body; no generic card stack.
 */

const FOOTER_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about-us' },
  { name: 'Services', href: '/services' },
  { name: 'Resources', href: '/resources' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

const BRANCHES = ['Jalgaon', 'Golaghat (Assam)', 'Pune'];

/** Space after logo+nav column (gap before Office time). Change to e.g. pl-6, pl-12, pl-16. */
const FOOTER_COL_GAP = 'pl-12 lg:pl-16';

/** Space between Office time/Branch and Head office. Adjust freely: e.g. pl-8, pl-12, pl-16, pl-20. */
const FOOTER_OFFICE_TO_HEAD_GAP = 'pl-10 lg:pl-14';

const Footer: React.FC = () => {
  return (
    <footer
      className="relative border-t border-[var(--footer-border)] py-8 md:py-12 pb-6 md:pb-8"
      style={{
        backgroundColor: 'var(--footer-bg)',
        color: 'var(--footer-fg)',
      }}
    >
      {/* Accent line — narrative anchor */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ backgroundColor: 'var(--footer-accent)' }}
      />

      <div className="container mx-auto px-4 pl-6 md:pl-10 max-w-7xl">
        {/* Main grid — asymmetric: logo+nav dominant, then equal columns */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-y-8 md:gap-x-0 lg:gap-y-12 mb-14">
          {/* Logo — spans 5-6 cols, vertically centered */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col items-start md:self-center">
            <div className="flex-shrink-0 w-full">
              <Image
                src="/images/footer-logo.png"
                alt="CA SKMRD & ASSOCIATES CHARTERED ACCOUNTANTS"
                width={650}
                height={170}
                className="w-full max-w-[420px] md:max-w-[480px] h-auto object-contain"
              />
            </div>
          </div>

          {/* Navigation — spans 2 cols */}
          <nav aria-label="Footer navigation" className="md:col-span-2 md:pl-12 lg:pl-16">
            <h4
              className="mb-5 text-xs font-bold uppercase tracking-[0.2em]"
              style={{
                color: 'var(--footer-primary)',
                fontFamily: 'var(--footer-label-font)',
              }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="footer-link inline-block text-sm font-medium transition-colors duration-200 rounded"
                    style={{ fontFamily: 'var(--footer-body-font)' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Office time + contact — 2 cols */}
          <div className={`md:col-span-2 ${FOOTER_COL_GAP}`}>
            <h4
              className="mb-5 text-xs font-bold uppercase tracking-[0.2em]"
              style={{
                color: 'var(--footer-primary)',
                fontFamily: 'var(--footer-label-font)',
              }}
            >
              Office time
            </h4>
            <address
              className="not-italic space-y-3 text-sm font-medium"
              style={{
                color: 'var(--footer-muted)',
                fontFamily: 'var(--footer-body-font)',
                lineHeight: 1.6,
              }}
            >
              <p>Monday – Saturday</p>
              <p className="font-bold" style={{ color: 'var(--footer-fg)' }}>
                10:00 AM – 6:30 PM
              </p>
              <p className="mt-4">{CONTACT_INFO.landline}</p>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="block transition-colors duration-200 hover:opacity-80"
                style={{ color: 'var(--footer-accent)' }}
              >
                {CONTACT_INFO.email}
              </a>
            </address>
          
            
          {/* Branch — 2 cols */}
          <div className="md:col-span-2 mt-8">
            <h4
              className="mb-5 text-xs font-bold uppercase tracking-[0.2em]"
              style={{
                color: 'var(--footer-primary)',
                fontFamily: 'var(--footer-label-font)',
              }}
            >
              Branch
            </h4>
            <ul
              className="space-y-2.5 text-sm font-medium"
              style={{
                color: 'var(--footer-muted)',
                fontFamily: 'var(--footer-body-font)',
              }}
            >
              {BRANCHES.map((city) => (
                <li key={city}>{city}</li>
              ))}
            </ul>
          </div>
          </div>
          {/* Head office — 3 cols, aligned to far right */}
          <div className={`md:col-span-3 md:col-start-10 md:ml-auto ${FOOTER_OFFICE_TO_HEAD_GAP}`}>
            <h4
              className="mb-5 text-xs font-bold uppercase tracking-[0.2em]"
              style={{
                color: 'var(--footer-primary)',
                fontFamily: 'var(--footer-label-font)',
              }}
            >
              Head office
            </h4>
            <div
              className="space-y-5 text-sm font-medium"
              style={{
                color: 'var(--footer-muted)',
                fontFamily: 'var(--footer-body-font)',
                lineHeight: 1.65,
              }}
            >
              <div>
                <span className="font-bold uppercase tracking-wide" style={{ color: 'var(--footer-fg)' }}>
                  Head office 1
                </span>
                <p className="mt-1">
                  A-1/2 Ashtavinayak Apt., Behind Dholya Ganapati Mandir, Ashok Stambh, Nashik 422002
                </p>
                <a href="tel:+919822656851" className="mt-1 block">+91 9822656851</a>
              </div>
              <div>
                <span className="font-bold uppercase tracking-wide" style={{ color: 'var(--footer-fg)' }}>
                  Head office 2
                </span>
                <p className="mt-1">
                  Flat No. 1/2, Saee Apartment, Madhav Colony, Pournima Bus Stop, Nashik Pune Road, Dwarka, Nashik 422011
                </p>
                <a href="tel:+919511840438" className="mt-1 block">+91 9511840438</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar — line just above copyright, pushed to bottom */}
        <div className="mt-6 md:mt-8">
          <div
            className="border-t border-[var(--footer-border)] pt-4 flex flex-col items-center text-center"
            style={{ color: 'var(--footer-muted)' }}
          >
            <p
              className="text-xs font-medium"
              style={{ fontFamily: 'var(--footer-body-font)' }}
            >
              © 2026 SKMRD & Associates. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
