import { Armchair, ChefHat, PencilRuler, Briefcase, BadgeCheck, Headphones, Package } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo('.feature-item',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: container.current, start: 'top 85%' } },
    );
  }, { scope: container });

  const features = [
    {
      icon: <Armchair className="w-10 h-10 stroke-[1.5]" />,
      title: "Interior Design",
      desc: "Beautiful, functional interiors tailored to your style."
    },
    {
      icon: <Package className="w-10 h-10 stroke-[1.5]" />,
      title: "Trade & Supply",
      desc: "Reliable trading solutions with quality products and trusted partnerships."
    },
    {
      icon: <ChefHat className="w-10 h-10 stroke-[1.5]" />,
      title: "Modular Kitchens",
      desc: "Smart, stylish kitchens crafted for convenience."
    },
    {
      icon: <PencilRuler className="w-10 h-10 stroke-[1.5]" />,
      title: "Design Solutions",
      desc: "Creative design solutions that bring ideas to life."
    },
    {
      icon: <Briefcase className="w-10 h-10 stroke-[1.5]" />,
      title: "Turnkey Projects",
      desc: "End-to-end interior solutions with seamless execution."
    },
    {
      icon: <BadgeCheck className="w-10 h-10 stroke-[1.5]" />,
      title: "Quality & Trust",
      desc: "Quality craftsmanship you can rely on."
    },
    {
      icon: <Headphones className="w-10 h-10 stroke-[1.5]" />,
      title: "Support",
      desc: "Dedicated support at every step."
    }
  ];

  return (
    <section ref={container} className="py-20 px-6 max-w-[1400px] mx-auto bg-white border-t border-b border-gray-100">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-y-12 gap-x-4 text-center">
        {features.map((feature, idx) => (
          <div key={idx} className="feature-item flex flex-col items-center px-4 relative">
            {idx !== 0 && (
              <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-20 bg-gray-200"></div>
            )}
            <div className="text-teal-800 mb-4">
              {feature.icon}
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 text-sm lg:text-base">{feature.title}</h3>
            <p className="text-xs lg:text-sm text-gray-500 leading-relaxed max-w-[180px] mx-auto">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
