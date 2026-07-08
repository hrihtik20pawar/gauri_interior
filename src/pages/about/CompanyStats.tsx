import { useRef, useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, Users, Star, Lightbulb, Palette } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: Building2, value: 100, suffix: '+', label: 'Projects Completed' },
  { icon: Users, value: 50, suffix: '+', label: 'Happy Clients' },
  { icon: Star, value: 15, suffix: '+', label: 'Years of Experience' },
  { icon: Lightbulb, value: 25, suffix: '+', label: 'Team Members' },
  { icon: Palette, value: 500, suffix: '+', label: 'Design Concepts Delivered' },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useGSAP(() => {
    if (animated.current) return;
    const obj = { val: 0 };
    gsap.to(obj, {
      val: target,
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: { trigger: ref.current, start: 'top 85%' },
      onUpdate: () => {
        setCount(Math.round(obj.val));
        animated.current = true;
      },
    });
  });

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function CompanyStats() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!container.current) return;

    gsap.fromTo('.stat-item',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power2.out',
        scrollTrigger: { trigger: container.current, start: 'top 80%' } },
    );
  }, { scope: container });

  return (
    <section ref={container} className="py-24 md:py-32 bg-brand-green">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-16">
          <p className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-4">Track Record</p>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Our Numbers Speak</h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item text-center">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-brand-orange" />
              </div>
              <p className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">
                <Counter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-white/60 text-sm font-medium tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
