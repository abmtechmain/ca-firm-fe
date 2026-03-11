'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeroSlide {
  title: string;
  description: string;
  image: string;
  buttonText?: string;
  buttonLink?: string;
}

interface HeroCarouselProps {
  slides: HeroSlide[];
}

export default function HeroCarousel({ slides }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Validate slides
  if (!slides || slides.length === 0) {
    return null;
  }

  // Auto-play carousel
  useEffect(() => {
    if (slides.length <= 1) return; // Don't auto-play if only one slide
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const currentSlide = slides[currentIndex];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-18 py-8 sm:py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-stretch gap-6 md:gap-8 lg:max-h-[60vh]">
          {/* Left Section - 70% */}
          <div className="w-full lg:w-[70%] lg:pr-8 flex flex-col justify-between gap-4 md:gap-6">
            <div className="transition-opacity duration-500">
              <h1 
                className="leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px]"
                style={{ 
                  color: '#044860',
                  fontWeight: 'bold'
                }}
              >
                {currentSlide.title}
              </h1>
              <p 
                className="leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl mt-4"
                style={{ 
                  color: '#0000008A'
                }}
              >
                {currentSlide.description}
              </p>
            </div>
            {currentSlide.buttonText && currentSlide.buttonLink && (
              <Link 
                href={currentSlide.buttonLink}
                className="px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity text-sm sm:text-base w-full sm:w-fit cursor-pointer inline-block text-center"
                style={{ 
                  backgroundColor: '#F37920'
                }}
              >
                {currentSlide.buttonText}
              </Link>
            )}
          </div>

          {/* Right Section - 30% */}
          <div className="w-full lg:w-[30%] relative lg:ml-auto">
            {/* Carousel Container */}
            <div className="relative w-full overflow-hidden rounded-lg aspect-[4/5] sm:aspect-[5/6] md:aspect-[5/7] lg:aspect-[4/5] xl:aspect-[5/7]">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover object-center rounded-lg"
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 30vw"
                  />
                </div>
              ))}
            </div>



            {/* Rating Card on Top Left */}
            <div className="hidden md:block absolute top-2 md:top-4 lg:-top-6 left-2 md:left-4 lg:-left-6 xl:-left-8 bg-white rounded-2xl md:rounded-3xl lg:rounded-4xl shadow-lg p-2 md:p-3 px-3 md:px-6 lg:px-8 z-10 flex items-center gap-2 md:gap-3 font-poppins border border-gray-200">
              <div className='flex items-center gap-2 md:gap-4'>
                <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex-shrink-0">
                  <Image src="/images/Star 1.svg" alt="Star" width={50} height={50} className="w-full h-full" />
                </div>
                <div>
                  <div className="text-base md:text-lg lg:text-xl xl:text-[24px] font-medium text-black">4.9</div>
                  <div className="text-xs md:text-sm lg:text-base xl:text-[18px] text-gray-600">Review</div>
                </div>
              </div>
            </div>

            {/* Experience Card on Bottom Left */}
            <div className="hidden md:block absolute bottom-2 md:bottom-4 lg:-bottom-6 left-2 md:left-4 lg:-left-8 xl:-left-12 bg-white rounded-2xl md:rounded-3xl shadow-lg p-2 md:p-3 px-3 md:px-4 lg:px-6 z-10 flex items-center gap-2 md:gap-3 font-poppins border border-gray-200">
              <div className='flex items-center gap-2 md:gap-4'>
                <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-[#056385] rounded-2xl md:rounded-3xl flex items-center justify-center flex-shrink-0 gap-0.5">
                  <span className="text-white font-medium text-base md:text-lg lg:text-xl xl:text-[24px]">30</span>
                  <span className="text-white font-medium text-[10px] md:text-xs lg:text-sm xl:text-base leading-none">+</span>
                </div>
                <div>
                  <div className="text-gray-600 text-sm md:text-base lg:text-lg xl:text-[20px]">Years of</div>
                  <div className="text-gray-600 text-sm md:text-base lg:text-lg xl:text-[20px]">Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots Indicator - Bottom of Section */}
        {slides.length > 1 && (
          <div className="flex justify-center gap-2 mt-8 md:mt-12">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-[#056385] w-6'
                    : 'bg-gray-300 hover:bg-gray-400 w-2'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
