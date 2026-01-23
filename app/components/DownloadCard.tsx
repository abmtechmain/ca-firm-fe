import React from 'react';
import { DownloadItem } from '../types';
import { BRAND_COLORS } from '../constants';

interface DownloadCardProps {
  item: DownloadItem;
}

export const DownloadCard: React.FC<DownloadCardProps> = ({ item }) => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="aspect-[4/3] overflow-hidden rounded-sm">
        <img 
          src={item.imageUrl} 
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
        <p className="text-xs text-gray-500 leading-relaxed font-medium">
          {item.description}
        </p>
        <div className="pt-2">
          <button 
            className="flex items-center space-x-2 text-[10px] font-bold tracking-widest uppercase border border-gray-300 rounded-full px-5 py-2 transition-colors hover:bg-gray-50"
            style={{ color: BRAND_COLORS.primary }}
          >
            <span>DOWNLOAD PDF</span>
            <svg 
              className="w-3.5 h-3.5" 
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
    </div>
  );
};
