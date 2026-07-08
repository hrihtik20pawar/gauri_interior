import { Building2, Users, Star, Lightbulb } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo('.stat-item',
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power2.out',
        scrollTrigger: { trigger: container.current, start: 'top 85%' }
      },
    );
  }, { scope: container });

  const stats = [
    {
      icon: <Building2 className="w-10 h-10 stroke-[1.5]" />,
      value: "100+",
      label: "Projects Completed"
    },
    {
      icon: <Users className="w-10 h-10 stroke-[1.5]" />,
      value: "85+",
      label: "Happy Clients"
    },
    {
      icon: <Star className="w-10 h-10 stroke-[1.5]" />,
      value: "14+",
      label: "Years of Experience"
    },
    {
      icon: <Lightbulb className="w-10 h-10 stroke-[1.5]" />,
      value: "1",
      label: "Vision - Endless Possibilities"
    }
  ];

  return (
    <section ref={container} className="bg-brand-green py-20 px-6 relative overflow-hidden">
      {/* Decorative background subtle image or gradient could go here, but keeping it clean per reference */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-4 md:gap-x-8 text-center relative z-10">
        {stats.map((stat, idx) => (
          <div key={idx} className="stat-item flex flex-col items-center relative">
            {idx !== 0 && (
              <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-24 bg-white/10"></div>
            )}
            <div className="text-brand-orange mb-6">
              {stat.icon}
            </div>
            <h3 className="text-4xl md:text-5xl text-white mb-3 font-medium font-serif">{stat.value}</h3>
            <p className="text-sm md:text-base text-gray-300 font-medium tracking-wide">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
