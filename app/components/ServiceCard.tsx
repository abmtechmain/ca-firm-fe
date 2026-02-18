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
      {/* Gradient background on hover */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ 
          background: 'linear-gradient(to bottom, #044860, #056385)'
        }}
      ></div>
      
      {/* Top Right Circular Blur */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full opacity-0 group-hover:opacity-80 transition-opacity duration-300 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      
      {/* Bottom Middle Circle - Solid center with blurred edges */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* Blurred outer circle - behind */}
        <div className="absolute w-40 h-40 bg-white rounded-full blur-3xl opacity-80" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}></div>
      </div>
      
      <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 relative z-10">
        <div className="text-[#F37920] group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
      </div>
      <h3 
        className="font-bold mb-2 uppercase text-lg sm:text-xl md:text-2xl transition-colors duration-300 group-hover:text-white relative z-10" 
        style={{ color: '#023F55' }}
      >
        {title}
      </h3>
      <p 
        className="text-sm sm:text-base md:text-lg transition-colors duration-300 group-hover:text-white relative z-10" 
        style={{ color: '#0000008A' }}
      >
        {description}
      </p>
    </div>
  );
}
