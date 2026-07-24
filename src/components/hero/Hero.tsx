import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { images } from '../../constants/images';

const heroSlides = images.hero.slides;

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
      className="relative w-full h-screen min-h-[600px] flex items-center overflow-hidden -mt-[76px] pt-[76px]"
    >
      {heroSlides.map((src, i) => (
        <div
          key={src}
          ref={(el) => { if (el) slideRefs.current[i] = el; }}
          className="absolute inset-0 z-0 hero-bg"
          style={{ opacity: i === 0 ? 1 : 0 }}
        >
          <img
            src={src}
            alt="Interior design showcase"
            loading={i === 0 ? 'eager' : 'lazy'}
            className="w-full h-full object-cover object-[center_65%]"
            onError={() => handleImageError(i)}
          />
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
        onClick={handlePrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/60 transition-colors hero-text"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/60 transition-colors hero-text"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </section>
  );
}
