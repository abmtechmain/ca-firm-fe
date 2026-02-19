import React from 'react';
import Image from 'next/image';
import { FIRM_OVERVIEW } from '../constants';

export const FirmOverview: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Section Title */}
      <div className="text-center mb-12 md:mb-16">
        <div className="inline-block relative mb-6">
          <h2 
            className="font-extrabold tracking-tight uppercase"
            style={{ color: '#FF541F', fontSize: '24px' }}
          >
            {FIRM_OVERVIEW.title}
          </h2>
          <div 
            className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-1"
            style={{ backgroundColor: '#056385' }}
          ></div>
        </div>
      </div>

      {/* Content Layout - Image Left, Content Right */}
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-stretch">
        {/* Left Side - Image */}
        <div className="w-full lg:w-[40%]">
          <div className="bg-white rounded-xl border border-gray-400 overflow-hidden h-full">
            <div className="relative w-full h-full min-h-[400px] lg:min-h-[600px]">
              <Image
                src="/images/firm-overview.png"
                alt="Firm Overview"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Content Card */}
        <div className="w-full lg:w-[60%]">
          <div className="bg-white rounded-xl px-6 py-8 md:px-8 md:py-10 border border-gray-400 transition-all duration-300 hover:shadow-lg h-full">
            {/* Main Content */}
            <div className="space-y-4 md:space-y-5 mb-8 md:mb-10">
              {FIRM_OVERVIEW.content.map((paragraph, idx) => (
                <p 
                  key={idx}
                  className="leading-relaxed text-justify"
                  style={{ 
                    color: '#0000008A',
                    fontSize: '16px',
                    lineHeight: '1.7'
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Empanelments Section */}
            <div className="pt-6 md:pt-8 border-t border-gray-200">
              <h3 
                className="text-lg md:text-xl font-bold mb-6 uppercase"
                style={{ color: '#056385' }}
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
                      style={{ color: '#F37920' }}
                    >
                      •
                    </span>
                    <span 
                      className="leading-relaxed"
                      style={{ 
                        color: '#0000008A',
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
