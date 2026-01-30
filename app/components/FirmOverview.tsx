import React from 'react';
import { FIRM_OVERVIEW, BRAND_COLORS } from '../constants';

export const FirmOverview: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Section Title */}
      <div className="text-center mb-12 md:mb-16">
        <div className="inline-block relative">
          <h2 
            className="font-extrabold tracking-tight uppercase"
            style={{ color: BRAND_COLORS.accent, fontSize: '24px' }}
          >
            {FIRM_OVERVIEW.title}
          </h2>
          <div 
            className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-1"
            style={{ backgroundColor: BRAND_COLORS.primary }}
          ></div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-6 md:space-y-8">
        {/* Main Content Paragraphs */}
        <div className="space-y-4 md:space-y-6">
          {FIRM_OVERVIEW.content.map((paragraph, idx) => (
            <p 
              key={idx}
              className="text-gray-500 text-sm md:text-base leading-relaxed"
              style={{ fontFamily: 'var(--font-instrument-sans), sans-serif' }}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Empanelments Section */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-200">
          <h3 
            className="text-lg md:text-xl font-bold mb-4 md:mb-6"
            style={{ color: BRAND_COLORS.primary }}
          >
            The firm is dully empanelled with following:
          </h3>
          <ul className="space-y-3 md:space-y-4">
            {FIRM_OVERVIEW.empanelments.map((item, idx) => (
              <li 
                key={idx}
                className="flex items-start gap-3"
              >
                <span 
                  className="text-xl md:text-2xl font-bold mt-0.5 flex-shrink-0"
                  style={{ color: BRAND_COLORS.accent }}
                >
                  •
                </span>
                <span 
                  className="text-gray-500 text-sm md:text-base leading-relaxed"
                  style={{ fontFamily: 'var(--font-instrument-sans), sans-serif' }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
