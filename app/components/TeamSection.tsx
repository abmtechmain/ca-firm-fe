import React from 'react';
import { TEAM_MEMBERS, BRAND_COLORS } from '../constants';

export const TeamSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        {TEAM_MEMBERS.map((member) => (
          <div key={member.id} className="flex flex-col items-center text-center space-y-4">
            {/* Member Image */}
            <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-sm">
              <img 
                src={member.imageUrl} 
                alt={member.name} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Member Info */}
            <div className="space-y-1">
              <h3 className="text-sm md:text-base font-extrabold text-gray-800 uppercase tracking-tight">
                {member.name}
              </h3>
              <p 
                className="text-sm md:text-base font-bold"
                style={{ color: BRAND_COLORS.primary }}
              >
                {member.role}
              </p>
            </div>

            {/* Description */}
            <p className="text-[11px] md:text-xs text-gray-400 leading-relaxed max-w-[180px]">
              {member.description}
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-1">
              {/* LinkedIn Icon */}
              <a href="#" className="transition-opacity hover:opacity-80">
                <div 
                  className="w-6 h-6 flex items-center justify-center rounded-[4px]"
                  style={{ backgroundColor: BRAND_COLORS.accent }}
                >
                  <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
              </a>
              {/* Email Icon */}
              <a href="#" className="transition-opacity hover:opacity-80">
                <div 
                  className="w-6 h-6 flex items-center justify-center rounded-[4px] border"
                  style={{ borderColor: BRAND_COLORS.accent, color: BRAND_COLORS.accent }}
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
