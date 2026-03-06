import React from 'react';
import Image from 'next/image';
import { FIRM_OVERVIEW, BRAND_COLORS } from '../constants';

export const FirmOverview: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Section Title */}
      <div className="text-center mb-10 md:mb-14">
        <div className="inline-block relative mb-6">
          <h2 
            className="font-extrabold tracking-tight uppercase"
            style={{ color: BRAND_COLORS.accent, fontSize: '24px' }}
          >
            {FIRM_OVERVIEW.title}
          </h2>
          <div 
            className="absolute -bottom-3 left-0 w-full h-1"
            style={{ backgroundColor: BRAND_COLORS.primary }}
          ></div>
        </div>
      </div>

      {/* Content Layout - Image Left, Content Right */}
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-stretch">
        {/* Left Side - Image */}
        <div className="w-full lg:w-[40%]">
          <div className="bg-white rounded-2xl overflow-hidden h-full shadow-sm">
            <div className="relative w-full h-full min-h-[360px] lg:min-h-[540px] bg-white">
              <Image
                src="/images/firm-overview.png"
                alt="Firm Overview"
                fill
                className="object-contain p-6"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Content Card */}
        <div className="w-full lg:w-[60%]">
          <div className="bg-white rounded-2xl px-6 py-8 md:px-8 md:py-10 shadow-sm h-full">
            {/* Main Content */}
            <div 
              className="space-y-4 md:space-y-5 mb-8 md:mb-10 border-l-2 pl-5"
              style={{ borderColor: `${BRAND_COLORS.accent}55` }}
            >
              {FIRM_OVERVIEW.content.map((paragraph, idx) => (
                <p 
                  key={idx}
                  className="leading-relaxed text-justify"
                  style={{ 
                    color: '#4b5563',
                    fontSize: '16px',
                    lineHeight: '1.7'
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Empanelments Section */}
            <div className="rounded-xl bg-[#F7F9FC] px-5 py-6 md:px-6 md:py-7">
              <h3 
                className="text-lg md:text-xl font-bold mb-6 uppercase"
                style={{ color: BRAND_COLORS.primary }}
              >
                The firm is duly empanelled with following:
              </h3>
              <ul className="space-y-3 md:space-y-4">
                {FIRM_OVERVIEW.empanelments.map((item, idx) => (
                  <li 
                    key={idx}
                    className="flex items-start gap-3"
                  >
                    <span 
                      className="text-xl font-bold mt-0.5 flex-shrink-0"
                      style={{ color: BRAND_COLORS.accent }}
                    >
                      •
                    </span>
                    <span 
                      className="leading-relaxed"
                      style={{ 
                        color: '#4b5563',
                        fontSize: '15px',
                        lineHeight: '1.7'
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
