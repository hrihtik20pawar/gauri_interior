import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { images } from '../../constants/images';

const heroSlides = images.hero.slides;
const MAX_PRELOADED = 2;

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<HTMLDivElement[]>([]);
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [failedSlides, setFailedSlides] = useState<Set<number>>(new Set());
  const currentSlideRef = useRef(0);

  const goToSlide = useCallback((index: number) => {
    slideRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.to(el, {
        opacity: i === index ? 1 : 0,
        duration: 1,
        ease: 'power2.inOut',
      });
    });
  }, []);

  const handleImageError = useCallback((index: number) => {
    setFailedSlides(prev => {
      const next = new Set(prev);
      next.add(index);
      return next;
    });
  }, []);

  useEffect(() => {
    if (failedSlides.size === 0) return;
    if (failedSlides.has(currentSlideRef.current)) {
      const nextIndex = (currentSlideRef.current + 1) % heroSlides.length;
      currentSlideRef.current = nextIndex;
      setCurrentSlide(nextIndex);
      goToSlide(nextIndex);
    }
  }, [failedSlides, goToSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      let nextIndex = (currentSlideRef.current + 1) % heroSlides.length;
      while (failedSlides.has(nextIndex) && nextIndex !== currentSlideRef.current) {
        nextIndex = (nextIndex + 1) % heroSlides.length;
      }
      currentSlideRef.current = nextIndex;
      setCurrentSlide(nextIndex);
      goToSlide(nextIndex);
    }, 5000);
    return () => clearInterval(interval);
  }, [failedSlides, goToSlide]);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    tl.fromTo(slideRefs.current[0],
      { scale: 1.1, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: 'power2.out' }
    )
      .fromTo('.hero-text',
        { y: 60, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 1.2, stagger: 0.2, ease: 'power3.out' },
        "-=0.8"
      );
  }, { scope: container });

  const handlePrev = useCallback(() => {
    let newIndex = (currentSlideRef.current - 1 + heroSlides.length) % heroSlides.length;
    while (failedSlides.has(newIndex) && newIndex !== currentSlideRef.current) {
      newIndex = (newIndex - 1 + heroSlides.length) % heroSlides.length;
    }
    currentSlideRef.current = newIndex;
    setCurrentSlide(newIndex);
    goToSlide(newIndex);
  }, [goToSlide, failedSlides]);

  const handleNext = useCallback(() => {
    let newIndex = (currentSlideRef.current + 1) % heroSlides.length;
    while (failedSlides.has(newIndex) && newIndex !== currentSlideRef.current) {
      newIndex = (newIndex + 1) % heroSlides.length;
    }
    currentSlideRef.current = newIndex;
    setCurrentSlide(newIndex);
    goToSlide(newIndex);
  }, [goToSlide, failedSlides]);

  return (
    <section 
      ref={container} 
      id="hero"
      className="relative w-full h-[100dvh] lg:h-screen flex items-center overflow-hidden bg-black"
    >
      {heroSlides.map((src, i) => {
        const distance = Math.abs(i - currentSlide);
        const shouldRender = distance <= 1 || (distance === 2 && i === 0);
        if (!shouldRender && i > MAX_PRELOADED) return null;

        return (
          <div
            key={src}
            ref={(el) => { if (el) slideRefs.current[i] = el; }}
            className="absolute inset-0 z-0 hero-bg h-full"
            style={{ opacity: i === 0 ? 1 : 0 }}
          >
            <img
              src={src}
              alt="Interior design showcase"
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding="async"
              fetchPriority={i === 0 ? 'high' : 'low'}
              width="1920"
              height="1080"
              className="w-full h-full object-cover sm:object-[center_65%] object-[center_30%] scale-[1.02]"
              onError={() => handleImageError(i)}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70"></div>
          </div>
        );
      })}

      <div className="relative z-10 w-full px-5 sm:px-6 md:px-12 lg:px-24 max-w-7xl mx-auto py-16 sm:py-20 md:pt-28 lg:pt-0 flex items-center">
        <div className="max-w-2xl items-start text-left">
          <h1 className="hero-text hero-heading font-serif text-white leading-[1.1] mb-3 sm:mb-4 md:mb-6 drop-shadow-lg">
            Designing Spaces <br className="hidden sm:block" /> That Reflect <br className="hidden sm:block" /> Your <span className="text-brand-orange italic">Style</span>
          </h1>
          <p className="hero-text text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl mb-5 sm:mb-6 md:mb-10 max-w-md sm:max-w-lg font-medium leading-relaxed drop-shadow-md ml-0 sm:ml-8 md:ml-20">
            Crafting elegant interiors that inspire comfort and elevate living.
          </p>
          <div className="hero-text flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
            <button onClick={() => navigate('/gallery')} className="bg-brand-orange text-white px-6 md:px-8 py-3.5 md:py-3.5 rounded-xl text-sm md:text-base font-semibold hover:bg-brand-orange/90 transition-colors flex items-center justify-center sm:justify-start gap-2 shadow-lg shadow-brand-orange/20 min-h-[50px] w-full sm:w-auto">
              Explore Our Work <span className="text-lg leading-none">→</span>
            </button>
            <button onClick={() => navigate('/services')} className="backdrop-blur-md bg-white/10 border border-white/30 text-white px-6 md:px-8 py-3.5 md:py-3.5 rounded-xl text-sm md:text-base font-medium hover:bg-white hover:text-brand-green transition-colors min-h-[50px] w-full sm:w-auto">
              Our Services
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={handlePrev}
        className="absolute left-3 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/60 transition-colors hero-text"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-3 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/60 transition-colors hero-text"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex gap-2 hero-text">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              currentSlideRef.current = i;
              setCurrentSlide(i);
              goToSlide(i);
            }}
            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
              i === currentSlide
                ? 'bg-brand-orange w-6 sm:w-7'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
