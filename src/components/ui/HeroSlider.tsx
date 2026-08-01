import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroSliderProps {
  slides: string[];
  autoPlayInterval?: number;
  alt?: string;
  className?: string;
  overlay?: string;
  children?: React.ReactNode;
  showControls?: boolean;
}

export default function HeroSlider({
  slides,
  autoPlayInterval = 5000,
  alt = 'Interior design showcase',
  className = 'relative w-full h-screen min-h-[600px]',
  overlay = 'from-black/30 via-transparent to-black/40',
  children,
  showControls = true,
}: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [slides.length, autoPlayInterval]);

  const goToPrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) goToPrev();
      else goToNext();
    }
  }, [goToPrev, goToNext]);

  return (
    <div
      className={className}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentSlide === i ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {Math.abs(currentSlide - i) <= 1 && (
            <img
              src={src}
              alt={alt}
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding="async"
              width="1920"
              height="1080"
              className="w-full h-full object-cover sm:object-[center_65%] object-[center_30%]"
            />
          )}
        </div>
      ))}

      <div className={`absolute inset-0 bg-gradient-to-b ${overlay}`} />

      {children && (
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
          {children}
        </div>
      )}

      {showControls && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/60 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/60 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}
    </div>
  );
}
