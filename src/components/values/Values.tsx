import { Shield, Users, Award, Lightbulb, Heart } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Values() {
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
    if (!animated) return;

    gsap.fromTo('.value-item',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power2.out' },
    );
  }, { scope: container, dependencies: [animated] });

  const values = [
    {
      icon: <Shield className="w-7 h-7 md:w-8 md:h-8 stroke-[1.5]" />,
      title: "Integrity",
      desc: "We believe in honesty, transparency and trust."
    },
    {
      icon: <Users className="w-7 h-7 md:w-8 md:h-8 stroke-[1.5]" />,
      title: "Collaboration",
      desc: "We work together to create the best outcomes."
    },
    {
      icon: <Award className="w-7 h-7 md:w-8 md:h-8 stroke-[1.5]" />,
      title: "Excellence",
      desc: "We deliver the highest standards in every project."
    },
    {
      icon: <Lightbulb className="w-7 h-7 md:w-8 md:h-8 stroke-[1.5]" />,
      title: "Innovation",
      desc: "We embrace creativity and new ideas."
    },
    {
      icon: <Heart className="w-7 h-7 md:w-8 md:h-8 stroke-[1.5]" />,
      title: "Passion",
      desc: "We are passionate about creating meaningful spaces."
    }
  ];

  return (
    <section ref={container} className="bg-brand-green py-12 md:py-20 px-5 md:px-6">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-8 md:gap-12 lg:items-center">
        <div className="lg:w-1/4">
          <h2 className="text-2xl md:text-4xl font-serif text-white mb-3 md:mb-4">Our Values</h2>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
            These values define who we are and guide everything we do.
          </p>
        </div>
        
        <div className="lg:w-3/4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 md:gap-8">
          {values.map((val, idx) => (
            <div key={idx} className="value-item flex flex-col items-center text-center">
              <div className="text-brand-orange mb-3 md:mb-4 p-3 md:p-4 rounded-full bg-white/5">
                {val.icon}
              </div>
              <h4 className="text-white font-medium mb-1.5 md:mb-2 text-xs sm:text-sm">{val.title}</h4>
              <p className="text-[10px] sm:text-xs text-gray-400 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
