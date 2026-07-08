import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { images } from '../../constants/images';

export default function AboutHero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!heroRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo('.about-hero-bg', { scale: 1.15, y: -30 }, { scale: 1, y: 0, duration: 2 })
      .fromTo('.about-hero-label', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=1.2')
      .fromTo('.about-hero-title', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, '-=0.8')
      .fromTo('.about-hero-line', { scaleX: 0 }, { scaleX: 1, duration: 0.6 }, '-=0.4')
      .fromTo('.about-hero-sub', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.3');

    gsap.to('.about-hero-bg', {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: true },
    });

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
    <div ref={heroRef} className="relative h-screen overflow-hidden">
      <div className="about-hero-bg absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${images.about.hero}')` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-green/70 via-brand-green/40 to-brand-green/80" />

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
    </div>
  );
}
