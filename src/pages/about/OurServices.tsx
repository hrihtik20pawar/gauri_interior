import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PenTool, Building2, Armchair, Hammer, HardHat, PaintBucket, Zap, Wrench, Wind, Home, Briefcase, Compass } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: PenTool, title: 'Interior Design' },
  { icon: Building2, title: 'Turnkey Projects' },
  { icon: Armchair, title: 'Modular Furniture' },
  { icon: Hammer, title: 'Carpentry' },
  { icon: HardHat, title: 'Civil Work' },
  { icon: PaintBucket, title: 'POP' },
  { icon: Zap, title: 'Electrical Work' },
  { icon: Wrench, title: 'Plumbing' },
  { icon: Wind, title: 'Air Conditioning' },
  { icon: Home, title: 'Residential Interiors' },
  { icon: Briefcase, title: 'Commercial Interiors' },
  { icon: Compass, title: 'Space Planning' },
];

export default function OurServices() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!container.current) return;

    gsap.fromTo('.svc-header',
      { y: 40 },
      { y: 0, duration: 0.4, ease: 'power2.out',
        scrollTrigger: { trigger: container.current, start: 'top 80%' } },
    );

    gsap.fromTo('.svc-card',
      { y: 30, scale: 0.95 },
      { y: 0, scale: 1, duration: 0.3, stagger: 0.03, ease: 'power2.out',
        scrollTrigger: { trigger: '.svc-grid', start: 'top 80%' } },
    );
  }, { scope: container });

  return (
    <section ref={container} className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-[1500px] mx-auto">
        <div className="svc-header text-center mb-16">
          <p className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-4">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-green mb-6">Our Services</h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full" />
        </div>

        <div className="svc-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {services.map((svc, i) => (
            <div key={i} className="svc-card group bg-gray-50/50 rounded-xl p-6 border border-gray-100 hover:bg-brand-green hover:shadow-xl transition-all duration-150 text-center cursor-default">
              <div className="w-12 h-12 rounded-xl bg-brand-teal/10 group-hover:bg-white/20 flex items-center justify-center mx-auto mb-4 transition-colors duration-150">
                <svc.icon className="w-6 h-6 text-brand-teal group-hover:text-white transition-colors duration-150" />
              </div>
              <p className="font-semibold text-gray-900 group-hover:text-white transition-colors duration-150 text-sm md:text-base">{svc.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
