import React from 'react';
import { STRENGTHS_GRID, STRENGTHS_MAIN, BRAND_COLORS } from '../constants';

export const KeyStrengths: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Title */}
      <div className="text-center mb-12 md:mb-16">
        <div className="inline-block relative">
          <h2 
            className="font-extrabold tracking-tight uppercase"
            style={{ color: BRAND_COLORS.accent, fontSize: '24px' }}
          >
            KEY STRENGTHS
          </h2>
          <div 
            className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-1"
            style={{ backgroundColor: BRAND_COLORS.primary }}
          ></div>
        </div>
      </div>

      {/* Grid container for the whole section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* Main Experience Card (Left) */}
        <div className="flex flex-col border rounded-2xl overflow-hidden bg-white shadow-sm">
          <div className="p-10 lg:p-16 flex flex-col items-center text-center space-y-6">
            <h3 
              className="text-2xl md:text-3xl font-extrabold tracking-tight"
              style={{ color: BRAND_COLORS.primary }}
            >
              {STRENGTHS_MAIN.title}
            </h3>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md">
              {STRENGTHS_MAIN.description}
            </p>
          </div>
          <div className="mt-auto aspect-video md:aspect-[16/7] lg:aspect-auto h-64 lg:h-80 w-full overflow-hidden">
            <img 
              src={STRENGTHS_MAIN.imageUrl} 
              alt="Experience" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Grid of 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {STRENGTHS_GRID.map((item, index) => (
            <div 
              key={index} 
              className="p-8 border rounded-2xl bg-white shadow-sm flex flex-col justify-start space-y-4"
              style={{ borderColor: BRAND_COLORS.primary }}
            >
              <h4 
                className="text-lg font-bold tracking-tight uppercase"
                style={{ color: BRAND_COLORS.accent }}
              >
                {item.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
