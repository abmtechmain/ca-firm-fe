import React from 'react';
import { WHO_WE_ARE_TEXT, BRAND_COLORS } from '../constants';

export const WhoWeAre: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 text-center">
      {/* Header */}
      <div className="inline-block relative w-fit mb-12">
        <h2 
          className="text-xl md:text-2xl font-extrabold tracking-widest uppercase"
          style={{ color: BRAND_COLORS.accent }}
        >
          {WHO_WE_ARE_TEXT.title}
        </h2>
        <div 
          className="absolute -bottom-3 left-0 w-full h-[3px]"
          style={{ backgroundColor: BRAND_COLORS.primary }}
        ></div>
      </div>

      {/* Content */}
      <div className="space-y-6">
        {WHO_WE_ARE_TEXT.content.map((paragraph, index) => (
          <p 
            key={index} 
            className="text-gray-500 text-sm md:text-base leading-relaxed"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};
