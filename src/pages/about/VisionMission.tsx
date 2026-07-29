import { useRef, useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Eye, Target } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function VisionMission() {
  const container = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = container.current;
    if (!el || animated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            setAnimated(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -5% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animated]);

  useGSAP(() => {
    if (!container.current || !animated) return;

    gsap.fromTo('.vm-vision',
      { clipPath: 'inset(0 0 0 100%)', opacity: 0 },
      { clipPath: 'inset(0 0 0 0%)', opacity: 1, duration: 1, ease: 'power3.inOut' },
    );

    gsap.fromTo('.vm-mission',
      { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
      { clipPath: 'inset(0 0% 0 0)', opacity: 1, duration: 1, ease: 'power3.inOut', delay: 0.3 },
    );
  }, { scope: container, dependencies: [animated] });

  return (
    <section ref={container} className="py-16 md:py-32 px-5 md:px-12 lg:px-24 bg-[#faf9f6]">
      <div className="max-w-[1500px] mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-brand-orange font-bold tracking-wider uppercase text-xs sm:text-sm mb-3 md:mb-4">Purpose</p>
          <h2 className="text-3xl md:text-5xl font-serif text-brand-green mb-4 md:mb-6">Vision & Mission</h2>
          <div className="w-16 md:w-24 h-1 bg-brand-orange mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6">
          <div className="vm-vision lg:col-span-7 bg-brand-green rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-10 lg:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-brand-teal/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="w-12 md:w-16 h-12 md:h-16 rounded-xl md:rounded-2xl bg-white/10 flex items-center justify-center mb-5 md:mb-8">
                <Eye className="w-6 h-6 md:w-8 md:h-8 text-brand-orange" />
              </div>
              <h3 className="text-2xl md:text-4xl font-serif text-white mb-4 md:mb-6">Our Vision</h3>
              <p className="text-white/80 text-sm md:text-lg leading-relaxed">
                Our vision is to become one of the most trusted interior design and turnkey solution companies by delivering innovative, functional, and inspiring spaces that exceed client expectations.
              </p>
            </div>
          </div>

          <div className="vm-mission lg:col-span-5 bg-white rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-10 lg:p-14 border border-gray-100 shadow-xl relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-36 md:w-48 h-36 md:h-48 bg-brand-orange/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10">
              <div className="w-12 md:w-16 h-12 md:h-16 rounded-xl md:rounded-2xl bg-brand-orange/10 flex items-center justify-center mb-5 md:mb-8">
                <Target className="w-6 h-6 md:w-8 md:h-8 text-brand-orange" />
              </div>
              <h3 className="text-2xl md:text-4xl font-serif text-brand-green mb-4 md:mb-6">Our Mission</h3>
              <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
                Our mission is to deliver high-quality interior solutions through creativity, skilled craftsmanship, transparent communication, timely execution, and an unwavering commitment to customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
