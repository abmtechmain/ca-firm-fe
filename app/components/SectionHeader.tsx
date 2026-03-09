import React from 'react';
import { BRAND_COLORS } from '../constants';

interface SectionHeaderProps {
  title: string;
  description: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => {
  return (
    <div className="text-center mb-16 space-y-6">
      <div className="inline-block relative w-fit">
        <h2 
          className="font-extrabold tracking-tight uppercase"
          style={{ color: BRAND_COLORS.accent, fontSize: '24px' }}
        >
          {title}
        </h2>
        <div 
          className="absolute -bottom-3 left-0 w-full h-1"
          style={{ backgroundColor: BRAND_COLORS.primary }}
        ></div>
      </div>
      
      <p className="max-w-2xl mx-auto text-gray-500 text-sm md:text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
};
