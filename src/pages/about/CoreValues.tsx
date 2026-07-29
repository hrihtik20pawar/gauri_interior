import { useRef, useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Lightbulb, Heart, Award, Handshake, Sparkles } from 'lucide-react';
import { images } from '../../constants/images';

gsap.registerPlugin(ScrollTrigger);

const values = [
  { icon: Shield, title: 'Quality', description: 'We never compromise on quality. Every material, every finish, every detail meets the highest standards of craftsmanship.', image: images.about.value1 },
  { icon: Handshake, title: 'Integrity', description: 'Transparent communication, honest pricing, and ethical practices form the foundation of every client relationship.', image: images.about.value2 },
  { icon: Lightbulb, title: 'Innovation', description: 'We stay ahead of design trends and technology to bring fresh, creative solutions to every project.', image: images.about.value3 },
  { icon: Heart, title: 'Customer Satisfaction', description: 'Your happiness is our success. We go above and beyond to exceed expectations at every stage.', image: images.about.value4 },
  { icon: Award, title: 'Excellence', description: 'From concept to completion, we pursue excellence in design, execution, and client experience.', image: images.about.value5 },
  { icon: Sparkles, title: 'Trust', description: 'Building lasting relationships through reliability, consistency, and delivering on our promises.', image: images.about.value6 },
];

export default function CoreValues() {
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
      { threshold: 0.05, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animated]);

  useGSAP(() => {
    if (!container.current || !animated) return;

    gsap.fromTo('.cv-header',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
    );

    const items = gsap.utils.toArray<HTMLElement>('.cv-row');
    items.forEach((item, i) => {
      const isEven = i % 2 === 0;
      gsap.fromTo(item,
        { x: isMobile ? 0 : (isEven ? -60 : 60), opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: item, start: 'top 85%', once: true } },
      );
    });
  }, { scope: container, dependencies: [animated] });

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <section ref={container} className="py-16 md:py-32 px-5 md:px-12 lg:px-24 bg-white">
      <div className="max-w-[1500px] mx-auto">
        <div className="cv-header text-center mb-12 md:mb-20">
          <p className="text-brand-orange font-bold tracking-wider uppercase text-xs sm:text-sm mb-3 md:mb-4">What Drives Us</p>
          <h2 className="text-3xl md:text-5xl font-serif text-brand-green mb-4 md:mb-6">Core Values</h2>
          <div className="w-16 md:w-24 h-1 bg-brand-orange mx-auto rounded-full" />
        </div>

        <div className="space-y-8 md:space-y-20">
          {values.map((val, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={i} className={`cv-row flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 md:gap-12 lg:gap-16 items-center`}>
                <div className="flex-1 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-xl">
                  <img loading="lazy" decoding="async" width="800" height="600" src={val.image} alt={val.title} className="w-full h-[200px] md:h-[400px] object-cover" />
                </div>
                <div className="flex-1">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-brand-teal/10 flex items-center justify-center mb-4 md:mb-6">
                    <val.icon className="w-5 h-5 md:w-7 md:h-7 text-brand-teal" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif text-brand-green mb-3 md:mb-4">{val.title}</h3>
                  <div className="w-12 md:w-16 h-1 bg-brand-orange rounded-full mb-4 md:mb-6" />
                  <p className="text-gray-600 text-sm md:text-lg leading-relaxed">{val.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
