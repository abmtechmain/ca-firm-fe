import React from 'react';
import { CaseStudy } from '../types';
import { BRAND_COLORS } from '../constants';

interface CaseStudySectionProps {
  caseStudy: CaseStudy;
}

export const CaseStudySection: React.FC<CaseStudySectionProps> = ({ caseStudy }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-start">
        {/* Left: Image with specific shadow and sizing */}
        <div className="rounded-sm overflow-hidden aspect-[16/9] lg:aspect-[1.8/1] shadow-lg">
          <img 
            src={caseStudy.imageUrl} 
            alt="Client Profile" 
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Right: Details with refined typography */}
        <div className="flex flex-col space-y-8 pt-2">
          <DetailRow label="TITLE" value={caseStudy.title} />
          <DetailRow label="PROBLEM" value={caseStudy.problem} />
          <DetailRow label="SOLUTION" value={caseStudy.solution} />
          <DetailRow label="OUTCOME" value={caseStudy.outcome} />
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <button 
          className="flex items-center space-x-3 text-[11px] font-bold tracking-[0.1em] uppercase border border-gray-400 rounded-full px-8 py-3.5 transition-all hover:bg-gray-50 hover:border-gray-500"
          style={{ color: BRAND_COLORS.primary }}
        >
          <span>VIEW CASE STUDY</span>
          <svg 
            className="w-4 h-4" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const DetailRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="grid grid-cols-[100px_1fr] md:grid-cols-[140px_1fr] gap-6 items-start">
    <span className="text-base md:text-lg font-bold text-gray-800 uppercase tracking-wide leading-tight">
      {label}
    </span>
    <span className="text-sm md:text-[15px] text-gray-500 font-normal leading-relaxed">
      {value}
    </span>
  </div>
);
