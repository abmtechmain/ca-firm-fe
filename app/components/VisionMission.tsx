import React from 'react';
import { VISION_MISSION, BRAND_COLORS } from '../constants';

export const VisionMission: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Vision Card */}
        <div className="relative overflow-hidden rounded-2xl border border-blue-200 bg-white p-8 lg:p-10 flex flex-col justify-center min-h-[200px]">
          {/* Faded Background Image */}
          <div 
            className="absolute inset-0 opacity-[0.07] pointer-events-none"
            style={{ 
              backgroundImage: `url(${VISION_MISSION.vision.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="relative z-10 space-y-4">
            <h3 
              className="text-3xl md:text-4xl font-extrabold tracking-tight"
              style={{ color: BRAND_COLORS.primary }}
            >
              {VISION_MISSION.vision.title}
            </h3>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-sm">
              {VISION_MISSION.vision.description}
            </p>
          </div>
        </div>

        {/* Mission Card */}
        <div className="relative overflow-hidden rounded-2xl border border-blue-200 bg-white p-8 lg:p-10 flex flex-col justify-center min-h-[200px]">
          {/* Faded Background Image */}
          <div 
            className="absolute inset-0 opacity-[0.07] pointer-events-none"
            style={{ 
              backgroundImage: `url(${VISION_MISSION.mission.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="relative z-10 space-y-4">
            <h3 
              className="text-3xl md:text-4xl font-extrabold tracking-tight"
              style={{ color: BRAND_COLORS.primary }}
            >
              {VISION_MISSION.mission.title}
            </h3>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-sm">
              {VISION_MISSION.mission.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
