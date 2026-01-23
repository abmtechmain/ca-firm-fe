import React from 'react';
import { LEGAL_CONTENT, BRAND_COLORS } from '../constants';

const LegalSection: React.FC<{ data: any }> = ({ data }) => (
  <div className="space-y-8">
    <div className="inline-block relative">
      <h2 
        className="text-lg md:text-xl font-extrabold tracking-tight uppercase pb-1"
        style={{ color: BRAND_COLORS.primary }}
      >
        {data.title}
      </h2>
      <div 
        className="absolute bottom-0 left-0 right-0 h-[2.5px]"
        style={{ backgroundColor: BRAND_COLORS.primary }}
      ></div>
    </div>
    
    <div className="space-y-6">
      <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed">
        {data.intro}
      </p>
      
      <div className="space-y-4">
        {data.content.map((item: any, idx: number) => (
          <div key={idx} className="space-y-1">
            {item.heading && (
              <h3 className="text-sm md:text-base text-gray-700 font-bold leading-relaxed">
                {item.heading}
              </h3>
            )}
            <p className="text-sm md:text-base text-gray-400 leading-relaxed font-normal">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const LegalInformation: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto  py-20 space-y-24">
      <LegalSection data={LEGAL_CONTENT.privacyPolicy} />
      <LegalSection data={LEGAL_CONTENT.termsConditions} />
      <LegalSection data={LEGAL_CONTENT.disclaimer} />
    </div>
  );
};
