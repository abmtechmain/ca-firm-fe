import React from 'react';
import { KEY_PERSONS, BRAND_COLORS } from '../constants';

export const KeyPersons: React.FC = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {KEY_PERSONS.map((person) => (
        <div 
          key={person.id} 
          className="bg-white rounded-xl border border-gray-400 overflow-hidden transition-all duration-300 hover:shadow-lg"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-0">
            {/* Profile Image */}
            <div className="relative aspect-[4/5] lg:aspect-auto lg:min-h-[450px]">
              <img 
                src={person.imageUrl} 
                alt={person.name} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="flex flex-col p-6 md:p-8 lg:p-10 space-y-5">
              {/* Name and Email */}
              <div className="flex flex-col gap-3">
                <h3 
                  className="text-2xl md:text-3xl font-extrabold tracking-tight"
                  style={{ color: '#056385' }}
                >
                  {person.name}
                </h3>
                <a 
                  href={`mailto:${person.email}`}
                  className="flex items-center gap-2 text-base md:text-lg font-semibold transition-colors hover:opacity-80"
                  style={{ color: '#056385' }}
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="break-all">{person.email}</span>
                </a>
              </div>

              {/* Education Qualification */}
              <div className="pt-2">
                <span 
                  className="text-sm md:text-base font-extrabold uppercase tracking-wide inline-block"
                  style={{ color: '#F37920' }}
                >
                  EDUCATION QUALIFICATION : {person.qualification}
                </span>
              </div>

              {/* Details Section */}
              <div className="space-y-4 pt-2">
                <span 
                  className="text-sm md:text-base font-extrabold uppercase tracking-wide block"
                  style={{ color: '#F37920' }}
                >
                  DETAILS :
                </span>
                <div className="space-y-3">
                  {person.description.map((text, idx) => (
                    <p 
                      key={idx} 
                      className="leading-relaxed flex items-start gap-2"
                      style={{ 
                        color: '#0000008A',
                        fontSize: '15px',
                        lineHeight: '1.7'
                      }}
                    >
                      <span className="text-[#F37920] mt-1 flex-shrink-0">•</span>
                      <span>{text.startsWith('•') ? text.substring(1).trim() : text}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
