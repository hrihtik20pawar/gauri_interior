import { Clock, Building2, Users, LayoutGrid, UserCheck, Globe } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import BrandName from '../brand-name/BrandName';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    icon: <Clock className="w-10 h-10 stroke-[1.5]" />,
    target: 30,
    suffix: '+',
    label: "Years",
    sublabel: "Industry Experience"
  },
  {
    icon: <Building2 className="w-10 h-10 stroke-[1.5]" />,
    target: 560,
    suffix: '+',
    label: "Projects Successfully",
    sublabel: "Delivered"
  },
  {
    icon: <Users className="w-10 h-10 stroke-[1.5]" />,
    target: 600,
    suffix: '+',
    label: "Happy",
    sublabel: "Clients"
  },
  {
    icon: <LayoutGrid className="w-10 h-10 stroke-[1.5]" />,
    target: 4,
    suffix: '',
    label: "Business Verticals",
    sublabel: "Integrated Group Companies"
  },
  {
    icon: <UserCheck className="w-10 h-10 stroke-[1.5]" />,
    target: 150,
    suffix: '+',
    label: "Dedicated",
    sublabel: "Professionals"
  },
  {
    icon: <Globe className="w-10 h-10 stroke-[1.5]" />,
    isText: true,
    displayText: "Pan India",
    label: "Project Execution",
    sublabel: "Capability"
  }
];

export default function Stats() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const items = gsap.utils.toArray<HTMLElement>('.stat-item');

    items.forEach((item, idx) => {
      const counterEl = item.querySelector('.stat-counter');
      const stat = stats[idx];

      if (!stat.isText && counterEl) {
        const obj = { val: 0 };
        gsap.to(obj, {
          val: stat.target,
          duration: 2,
          ease: 'power1.out',
          scrollTrigger: { trigger: container.current, start: 'top 85%' },
          onUpdate: () => {
            counterEl.textContent = Math.round(obj.val) + (stat.suffix || '');
          }
        });
      }
    });

    gsap.fromTo('.stat-item',
      { y: 30 },
      {
        y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: container.current, start: 'top 85%' }
      },
    );

    gsap.fromTo('.stats-motto',
      { y: 20 },
      {
        y: 0, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: container.current, start: 'top 85%' }
      },
    );
  }, { scope: container });

  return (
    <section ref={container} className="bg-brand-green py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-sans font-semibold tracking-wide text-white">
            <BrandName as="span" size="lg" color="teal" className="whitespace-nowrap">GAURI GROUP</BrandName> <span className="text-brand-orange">AT A GLANCE</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8 md:gap-x-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-item flex flex-col items-center text-center">
              <div className="text-brand-orange mb-4">
                {stat.icon}
              </div>
              {stat.isText ? (
                <h3 className="text-3xl md:text-4xl text-white mb-2 font-sans font-semibold">{stat.displayText}</h3>
              ) : (
                <h3 className="stat-counter text-3xl md:text-4xl text-white mb-2 font-sans font-semibold">0{stat.suffix}</h3>
              )}
              <p className="text-sm md:text-base text-white font-medium">{stat.label}</p>
              <p className="text-xs md:text-sm text-gray-400 mt-1">{stat.sublabel}</p>
            </div>
          ))}
        </div>

      <div className="stats-motto mt-14 flex justify-center">
  <p className="text-white/80 text-lg md:text-xl tracking-wide text-center">
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
