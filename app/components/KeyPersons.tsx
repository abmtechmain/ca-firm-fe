import React from 'react';
import { KEY_PERSONS, BRAND_COLORS } from '../constants';

export const KeyPersons: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
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
                href={`tel:${person.phone}`}
                className="flex items-center space-x-2 text-lg md:text-[28px] font-bold transition-opacity hover:opacity-80"
                style={{ color: BRAND_COLORS.primary }}
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span>{person.phone}</span>
              </a>
            </div>

            <div className="flex items-center space-x-2">
              <span 
                className="text-xs md:text-[18px] font-extrabold uppercase tracking-wide"
                style={{ color: BRAND_COLORS.accent }}
              >
                EDUCATION QUALIFICATION : {person.qualification}
              </span>
            </div>

            <div className="space-y-4 pt-4">
              {person.description.map((text, idx) => (
                <p key={idx} className="text-[11px] md:text-[16px] text-gray-400 leading-relaxed font-medium">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
