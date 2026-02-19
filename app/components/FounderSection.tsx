"use client";
import { FOUNDER_DATA } from '../constants';

export const FounderSection = () => {
  return (
    <>
      {/* Section Title - Above everything */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-block relative mb-6">
              <h2 
                className="font-extrabold tracking-tight uppercase"
                style={{ color: '#FF541F', fontSize: '24px' }}
              >
                MEET OUR FOUNDER
              </h2>
              <div 
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-1"
                style={{ backgroundColor: '#056385' }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Founder Content Section */}
      <section className="bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[40%_1px_60%] gap-0">
            {/* Left - Large Image (40%) */}
            <div className="relative min-h-[600px] lg:min-h-[700px]">
              <img 
                src={FOUNDER_DATA.imageUrl} 
                alt={FOUNDER_DATA.name} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thin Vertical Divider */}
            <div className="bg-gray-300"></div>

            {/* Right - Text Content (60%) */}
            <div className="px-12 py-20 lg:px-16 lg:py-24 flex flex-col justify-center">
            {/* FOUNDER Label */}
            <p 
              className="uppercase font-semibold mb-4"
              style={{ 
                color: '#FF541F',
                fontSize: '13px',
                letterSpacing: '2px'
              }}
            >
              {FOUNDER_DATA.tag}
            </p>

            {/* Name (Big Heading) */}
            <h2 
              className="font-bold mb-4"
              style={{ 
                color: '#056385',
                fontSize: '34px',
                lineHeight: '1.2'
              }}
            >
              {FOUNDER_DATA.name}
            </h2>

            {/* Short Orange Divider */}
            <div 
              className="mb-6"
              style={{ 
                width: '60px',
                height: '3px',
                backgroundColor: '#FF541F'
              }}
            ></div>

            {/* Role */}
            <p 
              className="font-medium mb-6"
              style={{ 
                color: '#056385',
                fontSize: '18px'
              }}
            >
              {FOUNDER_DATA.role}
            </p>

            {/* Bio Text */}
            <div className="space-y-4">
              {FOUNDER_DATA.description.map((para, idx) => (
                <p 
                  key={idx}
                  style={{ 
                    color: '#555555',
                    fontSize: '17px',
                    lineHeight: '1.8'
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};
