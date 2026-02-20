import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div 
      className="bg-white rounded-2xl px-5 sm:px-7 py-7 sm:py-8 md:py-9 shadow-sm transition-all duration-300 cursor-pointer group relative overflow-hidden hover:shadow-md border border-gray-200" 
    >
      {/* Subtle hover gradient */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'linear-gradient(to bottom, #044860, #056385)' }}
      ></div>

      <div className="relative z-10 flex items-center gap-4 mb-4">
        <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#F7F9FC] transition-colors duration-300 group-hover:bg-white/10">
          <div className="text-[#F37920] group-hover:text-white transition-colors duration-300">
            {icon}
          </div>
        </div>
        <h3 
          className="font-bold uppercase tracking-tight text-lg sm:text-xl text-[#023F55] group-hover:!text-white transition-colors duration-300"
        >
          {title}
        </h3>
      </div>
      <h3 
        className="sr-only"
      >
        {title}
      </h3>
      <p 
        className="text-sm sm:text-base text-[#4b5563] group-hover:!text-white transition-colors duration-300 relative z-10"
      >
        {description}
      </p>
    </div>
  );
}
