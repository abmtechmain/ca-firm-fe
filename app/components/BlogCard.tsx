import React from 'react';
import Link from 'next/link';
import { BlogPost } from '../types';
import { BRAND_COLORS } from '../constants';

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="group flex flex-col space-y-4">
      <div className="relative">
        {/* Image Container */}
        <div className="aspect-[4/2] overflow-hidden rounded-sm">
          <img 
            src={post.imageUrl} 
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        
        {/* Number Badge */}
        <div 
          className="absolute bottom-0 right-4 translate-y-1/2 w-12 h-16 flex items-center justify-center text-white text-xl font-bold shadow-md"
          style={{ backgroundColor: BRAND_COLORS.primary }}
        >
          {post.number}
        </div>
      </div>

      <div className="pt-4 flex flex-col space-y-2">
        {/* Meta info */}
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
          {post.date} || {post.location}
        </p>
        
        {/* Title and Button Row */}
        <div className="flex items-center justify-between gap-4 pt-2">
          {/* Title */}
          <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight flex-1">
            {post.title}
          </h3>

          {/* Action Button */}
          <Link
            href={`/blog/${post.id}`}
            className="flex items-center space-x-2 text-[10px] font-bold tracking-widest uppercase border border-gray-300 rounded-full px-4 py-1.5 transition-colors hover:bg-gray-100 flex-shrink-0"
            style={{ color: BRAND_COLORS.primary }}
          >
            <span>READ</span>
            <svg 
              className="w-3 h-3" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};
