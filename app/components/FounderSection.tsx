import React from 'react';
import { FOUNDER_DATA, BRAND_COLORS } from '../constants';

export const FounderSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 lg:gap-20 items-start">
        {/* Left: Founder Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/5] lg:aspect-[1/1.2]">
          <img 
            src={FOUNDER_DATA.imageUrl} 
            alt={FOUNDER_DATA.name} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Founder Details */}
        <div className="flex flex-col space-y-6 lg:pt-4">
          <div className="space-y-2">
            <span 
              className="text-xs md:text-sm font-extrabold tracking-widest uppercase"
              style={{ color: BRAND_COLORS.accent }}
            >
              {FOUNDER_DATA.tag}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold flex flex-wrap items-baseline gap-x-3">
              <span style={{ color: BRAND_COLORS.primary }}>{FOUNDER_DATA.name}</span>
              <span className="text-base md:text-lg font-bold" style={{ color: BRAND_COLORS.primary }}>
                {FOUNDER_DATA.role}
              </span>
            </h2>
          </div>

          <div className="space-y-4">
            {FOUNDER_DATA.description.map((para, idx) => (
              <p key={idx} className="text-gray-400 text-sm md:text-base leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          <div className="pt-6">
            <button className="flex items-center space-x-3 text-xs md:text-sm font-bold tracking-widest uppercase border border-gray-300 rounded-lg px-8 py-3.5 text-gray-500 transition-all hover:bg-gray-50 hover:border-gray-400">
              <span>KNOW MORE</span>
              <svg 
                className="w-4 h-4" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
