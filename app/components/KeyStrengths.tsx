import React from 'react';
import { STRENGTHS_GRID, STRENGTHS_MAIN, BRAND_COLORS } from '../constants';

export const KeyStrengths: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Title */}
      <div className="text-center mb-12 md:mb-16">
        <div className="inline-block relative w-fit">
          <h2 
            className="page-headers"
            style={{ color: BRAND_COLORS.accent }}
          >
            KEY STRENGTHS
          </h2>
          <div 
            className="absolute -bottom-3 left-0 w-full h-1"
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
              className="rounded-2xl bg-white border shadow-sm transition-shadow duration-300 cursor-pointer group relative overflow-hidden"
            >
              {/* Gradient background on hover - fills entire card */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ 
                  background: 'linear-gradient(to bottom, #044860, #056385)'
                }}
              />
              {/* Top Right Circular Blur */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full opacity-0 group-hover:opacity-80 transition-opacity duration-300 blur-3xl transform translate-x-1/2 -translate-y-1/2" />
              {/* Bottom Middle Circle */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute w-40 h-40 bg-white rounded-full blur-3xl opacity-80" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} />
              </div>
              {/* Content - padded so gradient shows in padding area */}
              <div className="relative z-10 p-8 flex flex-col justify-start space-y-4">
                <h4 
                  className="text-lg font-bold tracking-tight uppercase text-[#F37920] group-hover:!text-white transition-colors duration-300"
                >
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:!text-white transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
