import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div 
      className="bg-white rounded-xl px-4 sm:px-6 py-6 sm:py-8 md:py-10 border border-gray-400 transition-all duration-300 cursor-pointer group relative overflow-hidden hover:border-white" 
    >
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'linear-gradient(to bottom, #044860, #056385)' }}
      />
      <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full opacity-0 group-hover:opacity-80 transition-opacity duration-300 blur-3xl transform translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div
          className="absolute w-40 h-40 bg-white rounded-full blur-3xl opacity-80"
          style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
        />
      </div>

      <div className="relative z-10 flex items-center gap-4 mb-4">
        <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#F7F9FC] transition-colors duration-300 group-hover:bg-white/10">
          <div className="text-[#F37920] group-hover:text-white transition-colors duration-300">
            {icon}
          </div>
        </div>
        <h3 
          className="font-bold uppercase tracking-tight text-lg sm:text-xl md:text-2xl text-[#023F55] group-hover:!text-white transition-colors duration-300"
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
        className="text-sm sm:text-base md:text-lg text-[#0000008A] group-hover:!text-white transition-colors duration-300 relative z-10"
      >
        {description}
      </p>
    </div>
  );
}
