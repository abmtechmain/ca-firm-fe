import React from 'react';
import { KEY_PERSONS, BRAND_COLORS } from '../constants';

export const KeyPersons: React.FC = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {KEY_PERSONS.map((person) => (
        <div 
          key={person.id} 
          className="bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-lg"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[34%_66%] gap-0">
            {/* Profile Image */}
            <div className="relative aspect-[4/5] lg:aspect-auto lg:min-h-[420px] bg-slate-50">
              <img 
                src={person.imageUrl} 
                alt={person.name} 
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Details */}
            <div className="flex flex-col p-6 md:p-8 lg:p-10 space-y-6">
              {/* Name and Email */}
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
                  <span 
                    className="text-xs md:text-sm font-semibold uppercase tracking-wide rounded-full px-3 py-1"
                    style={{ 
                      color: BRAND_COLORS.accent,
                      backgroundColor: `${BRAND_COLORS.accent}14`
                    }}
                  >
                    {person.certification}
                  </span>
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
                {/* Personal phone number hidden by request */}
                {/* <a 
                  href={`tel:${person.phone}`}
                  className="flex items-center gap-2 text-base md:text-lg font-semibold transition-colors hover:opacity-80"
                  style={{ color: BRAND_COLORS.primary }}
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.5 4.49a1 1 0 01-.25 1.02l-1.77 1.77a16 16 0 007.07 7.07l1.77-1.77a1 1 0 011.02-.25l4.49 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.82 21 3 14.18 3 6V5z" />
                  </svg>
                  <span>{person.phone}</span>
                </a> */}
              </div>

              {/* Highlights + Expand */}
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
                  {person.description.slice(0, 3).map((text, idx) => (
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

                {person.description.length > 3 && (
                  <details className="group">
                    <summary 
                      className="cursor-pointer select-none text-sm font-semibold inline-flex items-center gap-2"
                      style={{ color: BRAND_COLORS.primary }}
                    >
                      View full profile
                      <span className="transition-transform duration-200 group-open:rotate-180">▾</span>
                    </summary>
                    <div className="mt-3 space-y-3">
                      {person.description.slice(3).map((text, idx) => (
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
                  </details>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
