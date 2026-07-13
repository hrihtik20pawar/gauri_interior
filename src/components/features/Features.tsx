import { Armchair, ChefHat, PencilRuler, Briefcase, BadgeCheck, Headphones, Package } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <Briefcase className="w-10 h-10 stroke-[1.5]" />,
    title: "Turnkey Projects",
    desc: "End-to-end interior solutions with seamless execution."
  },
  {
    icon: <PencilRuler className="w-10 h-10 stroke-[1.5]" />,
    title: "Design Solutions",
    desc: "Creative design solutions that bring ideas to life."
  },
  {
    icon: <Armchair className="w-10 h-10 stroke-[1.5]" />,
    title: "Interior Design",
    desc: "Beautiful, functional interiors tailored to your style."
  },
  {
    icon: <ChefHat className="w-10 h-10 stroke-[1.5]" />,
    title: "Modular Kitchens",
    desc: "Smart, stylish kitchens crafted for convenience."
  },
  {
    icon: <Package className="w-10 h-10 stroke-[1.5]" />,
    title: "Trade & Supply",
    desc: "Reliable trading solutions with quality products and trusted partnerships."
  },
  {
    icon: <BadgeCheck className="w-10 h-10 stroke-[1.5]" />,
    title: "Quality & Trust",
    desc: "Quality craftsmanship you can rely on."
  }
];

const duplicatedFeatures = [...features, ...features, ...features];

export default function Features() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Features marquee is always visible, no opacity animation needed
  }, { scope: container });

  return (
    <section ref={container} className="py-20 bg-white border-t border-b border-gray-100 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 mb-10">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-900 font-medium text-center">
          Our <span className="text-brand-orange">Services</span>
        </h2>
      </div>

      <div className="features-marquee relative overflow-hidden">
        {/* Gradient overlays for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="marquee-track flex animate-marquee">
          {duplicatedFeatures.map((feature, idx) => {
            const serialNum = String((idx % features.length) + 1).padStart(2, '0');
            return (
              <div key={idx} className="flex-shrink-0 w-[280px] md:w-[320px] flex items-start gap-4 px-8 py-6">
                <span className="text-5xl md:text-6xl font-serif font-bold text-gray-200 leading-none mt-1 select-none">{serialNum}</span>
                <div className="flex flex-col items-start">
                  <div className="text-teal-800 mb-3">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-base">{feature.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed max-w-[200px]">{feature.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
