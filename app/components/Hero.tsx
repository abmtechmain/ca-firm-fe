import React from 'react';

interface HeroProps {
  image?: string;
  title: string;
  subtext: string;
  text?: string;
}

const Hero: React.FC<HeroProps> = ({ 
  image = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
  title,
  subtext,
  text
}) => {
  return (
    <section className="relative h-[400px] w-full flex items-center overflow-hidden mt-4 sm:mt-6 md:mt-8">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      />
      {/* Color Overlay */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          backgroundColor: 'rgba(2, 63, 85, 0.8)'
        }}
      />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-2 gap-6 md:gap-8 items-center">
        <div>
          <h1 
            className="font-extrabold text-white leading-tight uppercase tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-[34px] xl:text-[38px] max-w-xl text-balance"
          >
            {title}
          </h1>
        </div>
        <div className="md:pl-12">
          <p 
            className="text-slate-200 leading-relaxed font-light pl-0 md:pl-6 text-sm sm:text-base md:text-lg"
          >
            {subtext}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
