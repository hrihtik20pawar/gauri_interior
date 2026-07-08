import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { images } from '../../constants/images';

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useGSAP(() => {
    // We delay the hero animation slightly to wait for the preloader to finish (approx 2.5s)
    const tl = gsap.timeline({ delay: 0.5 });

    // Image gentle zoom in effect
    tl.fromTo('.hero-bg',
      { scale: 1.1, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: 'power2.out' }
    )
      // Text pops out in the main image
      .fromTo('.hero-text',
        { y: 60, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 1.2, stagger: 0.2, ease: 'power3.out' },
        "-=0.8"
      );
  }, { scope: container });

  return (
    <section ref={container} className="relative w-full h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0 hero-bg">
        <img
          src={images.hero.main}
          alt="Modern living room interior"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay to make text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-24 max-w-7xl mx-auto pt-20">
        <div className="max-w-2xl">
          <h1 className="hero-text text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] mb-6 drop-shadow-lg">
            Designing Spaces <br /> That Reflect <br /> Your <span className="text-brand-orange">Lifestyle</span>
          </h1>
          <p className="hero-text text-gray-200 text-lg md:text-xl mb-10 max-w-lg font-medium leading-relaxed drop-shadow-md text-center" style={{ fontStyle: 'italic' }}>
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

      {/* Pagination Dots mimic */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-10 hero-text">
        <div className="w-2.5 h-2.5 rounded-full bg-brand-orange shadow-[0_0_8px_rgba(234,91,35,0.8)] cursor-pointer"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-white/50 backdrop-blur-sm cursor-pointer hover:bg-white/80 transition-colors"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-white/50 backdrop-blur-sm cursor-pointer hover:bg-white/80 transition-colors"></div>
      </div>
    </section>
  );
}
