import React from 'react';
import { KEY_PERSONS, BRAND_COLORS } from '../constants';

export const KeyPersons: React.FC = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {KEY_PERSONS.map((person) => (
        <div 
          key={person.id} 
          className="bg-white rounded-2xl overflow-hidden transition-all duration-300"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] lg:items-stretch">
            <div className="relative w-full aspect-[4/5] lg:aspect-auto lg:w-full lg:h-[500px] lg:min-h-0 overflow-hidden px-4 lg:px-6">
              <img 
                src={person.imageUrl} 
                alt={person.name} 
                className="w-full h-full object-cover"
                style={{ 
                  objectPosition: person.imagePosition ?? 'top',
                  transform: 'scale(1.2)',
                  transformOrigin: 'top center'
                }}
              />
            </div>

            <div className="flex flex-col flex-1 min-w-0 p-6 md:p-8 lg:p-10 lg:pr-6 space-y-6">
              <div className="flex flex-col gap-3">
                <h3 
                  className="text-2xl md:text-3xl font-extrabold tracking-tight"
                  style={{ color: BRAND_COLORS.primary }}
                >
                  {person.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span 
                    className="text-xs md:text-sm font-semibold uppercase tracking-wide rounded-full px-3 py-1"
                    style={{ 
                      color: BRAND_COLORS.primary,
                      backgroundColor: `${BRAND_COLORS.primary}12`
                    }}
                  >
                    {person.qualification}
                  </span>
                  {person.certification && (
                    <span 
                      className="text-xs md:text-sm font-semibold uppercase tracking-wide rounded-full px-3 py-1"
                      style={{ 
                        color: BRAND_COLORS.accent,
                        backgroundColor: `${BRAND_COLORS.accent}14`
                      }}
                    >
                      {person.certification}
                    </span>
                  )}
                </div>
                <a 
                  href={`mailto:${person.email}`}
                  className="flex items-center gap-2 text-sm md:text-base font-semibold transition-colors hover:opacity-80"
                  style={{ color: BRAND_COLORS.primary }}
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="break-all">{person.email}</span>
                </a>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span 
                    className="text-sm md:text-base font-extrabold uppercase tracking-wide block"
                    style={{ color: BRAND_COLORS.accent }}
                  >
                    Highlights
                  </span>
                  <span className="h-px w-16" style={{ backgroundColor: `${BRAND_COLORS.accent}80` }}></span>
                </div>
                <div className="space-y-3">
                  {person.description.map((text, idx) => (
                    <p 
                      key={idx} 
                      className="leading-relaxed flex items-start gap-2"
                      style={{ 
                        color: '#4b5563',
                        fontSize: '15px',
                        lineHeight: '1.7'
                      }}
                    >
                      <span className="mt-1 flex-shrink-0" style={{ color: BRAND_COLORS.accent }}>•</span>
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
