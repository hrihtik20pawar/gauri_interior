import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { images } from '../../constants/images';

const heroSlides = images.hero.slides;

export default function AboutHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX.current;

    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
      } else {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }
    }
  }, []);

  useGSAP(() => {
    if (!heroRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo('.about-hero-label', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 0.5)
      .fromTo('.about-hero-title', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, '-=0.4')
      .fromTo('.about-hero-line', { scaleX: 0 }, { scaleX: 1, duration: 0.6 }, '-=0.4')
      .fromTo('.about-hero-sub', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.3');

    gsap.to('.about-hero-float-1', {
      y: -40, x: 20, ease: 'none',
      scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: true },
    });

    gsap.to('.about-hero-float-2', {
      y: -60, x: -30, ease: 'none',
      scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: true },
    });
  }, { scope: heroRef });

  return (
    <div
      ref={heroRef}
      className="relative h-[100dvh] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {heroSlides.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentSlide === i ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          {Math.abs(currentSlide - i) <= 1 && (
            <img
              src={src}
              alt="Interior design showcase"
              loading={i === 0 ? 'eager' : 'lazy'}
              className="w-full h-full object-cover object-[center_65%]"
            />
          )}
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-brand-green/50 to-brand-green/80" />

      <div className="about-hero-float-1 absolute top-[15%] right-[10%] w-72 h-72 bg-brand-teal/10 rounded-full blur-3xl" />
      <div className="about-hero-float-2 absolute bottom-[20%] left-[5%] w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <h1 className="about-hero-title font-serif text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-9xl font-bold mb-6 leading-none max-w-5xl">
          Designing Spaces That Inspire.
        </h1>
        <div className="about-hero-line w-24 h-1 bg-brand-orange rounded-full mb-8 origin-center" />
        <p className="about-hero-sub text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed font-medium">
          Creating timeless interiors through thoughtful design, expert craftsmanship, and complete turnkey execution.
        </p>
      </div>

      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/60 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/60 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
