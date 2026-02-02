import React from 'react';
import { KEY_PERSONS, BRAND_COLORS } from '../constants';

export const KeyPersons: React.FC = () => {
  return (
    <div className=" mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {KEY_PERSONS.map((person) => (
        <div 
          key={person.id} 
          className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-8 items-start py-8 first:pt-0"
        >
          {/* Profile Image */}
          <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-sm">
            <img 
              src={person.imageUrl} 
              alt={person.name} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <h3 
                className="text-xl md:text-[28px] font-extrabold tracking-tight"
                style={{ color: BRAND_COLORS.primary }}
              >
                {person.name}
              </h3>
              <a 
                href={`mailto:${person.email}`}
                className="flex items-center space-x-2 text-lg md:text-[28px] font-bold transition-opacity hover:opacity-80"
                style={{ color: BRAND_COLORS.primary }}
              >
                <svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="break-all">{person.email}</span>
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <span 
                  className="text-xs md:text-[18px] font-extrabold uppercase tracking-wide"
                  style={{ color: BRAND_COLORS.accent }}
                >
                  EDUCATION QUALIFICATION : {person.qualification}
                </span>
                {person.certification && (
                  <span 
                    className="text-xs md:text-base font-bold uppercase tracking-wide"
                    style={{ color: BRAND_COLORS.primary }}
                  >
                    CERTIFICATION COURSE OF ICAI : {person.certification}
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <span 
                className="text-xs md:text-[18px] font-extrabold uppercase tracking-wide block mb-2"
                style={{ color: BRAND_COLORS.accent }}
              >
                EXPERIENCE :
              </span>
              {person.description.map((text, idx) => (
                <p key={idx} className="text-[11px] md:text-[16px] text-gray-400 leading-relaxed font-medium">
                  {text.startsWith('•') ? text : `• ${text}`}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
