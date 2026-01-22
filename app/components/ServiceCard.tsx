import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div 
      className="bg-white rounded-xl px-6 py-12 border border-gray-400 transition-all duration-300 cursor-pointer group relative overflow-hidden hover:border-white" 
      style={{ 
        width: '280px', 
        height: '320px'
      }}
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
      
      <div className="mb-4 relative z-10">
        <div className="text-[#023F55] group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
      </div>
      <h3 
        className="font-bold mb-3 uppercase transition-colors duration-300 text-[#023F55] group-hover:text-white relative z-10" 
        style={{ fontSize: '20px' }}
      >
        {title}
      </h3>
      <p 
        className="transition-colors duration-300 text-[#0000008A] group-hover:text-white relative z-10" 
        style={{ fontSize: '16px', lineHeight: '1.6' }}
      >
        {description}
      </p>
    </div>
  );
}
