import { Clock, Building2, Users, LayoutGrid, UserCheck, Globe } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect, useState } from 'react';
import BrandName from '../brand-name/BrandName';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    icon: <Clock className="w-8 h-8 sm:w-10 sm:h-10 stroke-[1.5]" />,
    target: 30,
    suffix: '+',
    label: "Years",
    sublabel: "Industry Experience"
  },
  {
    icon: <Building2 className="w-8 h-8 sm:w-10 sm:h-10 stroke-[1.5]" />,
    target: 560,
    suffix: '+',
    label: "Projects Successfully",
    sublabel: "Delivered"
  },
  {
    icon: <Users className="w-8 h-8 sm:w-10 sm:h-10 stroke-[1.5]" />,
    target: 600,
    suffix: '+',
    label: "Happy",
    sublabel: "Clients"
  },
  {
    icon: <LayoutGrid className="w-8 h-8 sm:w-10 sm:h-10 stroke-[1.5]" />,
    target: 4,
    suffix: '',
    label: "Business Verticals",
    sublabel: "Integrated Group Companies"
  },
  {
    icon: <UserCheck className="w-8 h-8 sm:w-10 sm:h-10 stroke-[1.5]" />,
    target: 150,
    suffix: '+',
    label: "Dedicated",
    sublabel: "Professionals"
  },
  {
    icon: <Globe className="w-8 h-8 sm:w-10 sm:h-10 stroke-[1.5]" />,
    isText: true,
    displayText: "Pan India",
    label: "Project Execution",
    sublabel: "Capability"
  }
];

export default function Stats() {
  const container = useRef<HTMLDivElement>(null);
  const [countersStarted, setCountersStarted] = useState(false);

  useEffect(() => {
    const el = container.current;
    if (!el || countersStarted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !countersStarted) {
            setCountersStarted(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -5% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [countersStarted]);

  useEffect(() => {
    if (!countersStarted || !container.current) return;

    const items = gsap.utils.toArray<HTMLElement>('.stat-item');
    const isMobile = window.innerWidth < 768;

    items.forEach((item, idx) => {
      const counterEl = item.querySelector('.stat-counter');
      const stat = stats[idx];

      if (!stat.isText && counterEl) {
        const obj = { val: 0 };
        gsap.to(obj, {
          val: stat.target,
          duration: 2,
          ease: 'power1.out',
          delay: idx * 0.1,
          onUpdate: () => {
            counterEl.textContent = Math.round(obj.val) + (stat.suffix || '');
          }
        });
      }
    });

    gsap.fromTo('.stat-item',
      { y: isMobile ? 15 : 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power2.out' }
    );

    gsap.fromTo('.stats-motto',
      { y: isMobile ? 10 : 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.5 }
    );

    gsap.fromTo('.stat-icon-inner',
      { rotateY: 0 },
      { rotateY: 360, duration: 1.2, stagger: 0.15, ease: 'back.out(1.4)', delay: 0.2 }
    );
  }, [countersStarted]);

  return (
    <section ref={container} className="bg-brand-green py-12 md:py-20 px-5 sm:px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8 md:mb-14">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-sans font-semibold tracking-wide text-white leading-tight">
            <BrandName as="span" size="lg" color="teal">GAURI GROUP</BrandName> <span className="text-brand-orange whitespace-nowrap">AT A GLANCE</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-3 sm:gap-y-10 sm:gap-x-6 md:gap-x-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-item flex flex-col items-center text-center">
              <div className="stat-icon-wrapper mb-3 md:mb-4">
                <div className="stat-icon-inner text-brand-orange">
                  {stat.icon}
                </div>
              </div>
              {stat.isText ? (
                <h3 className="text-xl sm:text-2xl md:text-4xl text-white mb-1 md:mb-2 font-sans font-semibold">{stat.displayText}</h3>
              ) : (
                <h3 className="stat-counter text-xl sm:text-2xl md:text-4xl text-white mb-1 md:mb-2 font-sans font-semibold">0{stat.suffix}</h3>
              )}
              <p className="text-[11px] sm:text-sm md:text-base text-white font-medium leading-tight">{stat.label}</p>
              <p className="text-[9px] sm:text-xs md:text-sm text-gray-400 mt-0.5 md:mt-1 leading-tight">{stat.sublabel}</p>
            </div>
          ))}
        </div>

        <div className="stats-motto mt-8 md:mt-14 flex justify-center">
          <p className="text-white/80 text-xs sm:text-base md:text-xl tracking-wide text-center px-2 leading-relaxed">
            Our Motto —{" "}
            <span className="text-brand-orange font-medium italic">
              "Designing Spaces. Building Relationships. Creating Excellence."
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
