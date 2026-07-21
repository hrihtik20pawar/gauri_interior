import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { images } from '../../constants/images';

const heroSlides = images.hero.slides;

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef<number>(0);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    tl.fromTo('.hero-bg',
      { scale: 1.1, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: 'power2.out' }
    )
      .fromTo('.hero-text',
        { y: 60, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 1.2, stagger: 0.2, ease: 'power3.out' },
        "-=0.8"
      );
  }, { scope: container });

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX.current;

    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        // Swipe right - previous slide
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
      } else {
        // Swipe left - next slide
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }
    }
  }, []);

  return (
    <section 
      ref={container} 
      id="hero"
      className="relative w-full h-[100dvh] min-h-[600px] flex items-center overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {heroSlides.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out hero-bg ${currentSlide === i ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          {Math.abs(currentSlide - i) <= 1 && (
            <img
              src={src}
              alt="Interior design showcase"
              loading={i === 0 ? 'eager' : 'lazy'}
              className="w-full h-full object-cover object-[center_65%]"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40"></div>
        </div>
      ))}

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-24 max-w-7xl mx-auto pt-24 md:pt-28">
        <div className="max-w-2xl items-start text-left">
          <h1 className="hero-text text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] mb-6 drop-shadow-lg">
            Designing Spaces <br /> That Reflect <br /> Your <span className="text-brand-orange">Lifestyle</span>
          </h1>
          <p className="hero-text text-gray-200 text-lg md:text-xl mb-10 max-w-lg font-medium leading-relaxed drop-shadow-md ml-4 sm:ml-8 md:ml-20" style={{ fontStyle: 'italic' }}>
            From concept to creation
          </p>
          <div className="hero-text flex flex-wrap gap-4">
            <button onClick={() => navigate('/gallery')} className="bg-brand-orange text-white px-8 py-3.5 rounded font-medium hover:bg-brand-orange/90 transition-colors flex items-center gap-2 shadow-lg shadow-brand-orange/20">
              Explore Our Work <span className="text-xl leading-none">→</span>
            </button>
            <button onClick={() => navigate('/services')} className="backdrop-blur-md bg-white/10 border border-white/30 text-white px-8 py-3.5 rounded font-medium hover:bg-white hover:text-brand-green transition-colors">
              Our Services
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/60 transition-colors hero-text"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/60 transition-colors hero-text"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </section>
  );
}
