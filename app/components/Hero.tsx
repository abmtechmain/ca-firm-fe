import React from 'react';

interface HeroProps {
  image?: string;
  title: string;
  subtext: string;
  /** Extra paragraph(s) below subtext */
  text?: string;
  /** Taller hero with more vertical space when text + subtext are long */
  expanded?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  image = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
  title,
  subtext,
  text,
  expanded = false,
}) => {
  const heightClass = expanded
    ? 'min-h-[460px] md:min-h-[520px] py-12 md:py-16 h-auto'
    : 'h-[400px]';

  return (
    <section
      className={`relative w-full flex items-center overflow-hidden mt-4 sm:mt-6 md:mt-8 ${heightClass}`}
    >
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
        <div className="md:pl-12 space-y-4 md:space-y-5">
          <p className="text-slate-200 leading-relaxed font-light pl-0 md:pl-6 text-sm sm:text-base md:text-lg">
            {subtext}
          </p>
          {text ? (
            <p className="text-slate-300/95 leading-relaxed pl-0 md:pl-6 text-sm sm:text-base border-t border-white/15 pt-4 md:pt-5">
              {text}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Hero;
