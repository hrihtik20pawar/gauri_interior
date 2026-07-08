import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Eye, Target } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function VisionMission() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!container.current) return;

    gsap.fromTo('.vm-vision',
      { clipPath: 'inset(0 0 0 100%)', opacity: 0 },
      { clipPath: 'inset(0 0 0 0%)', opacity: 1, duration: 1, ease: 'power3.inOut',
        scrollTrigger: { trigger: container.current, start: 'top 75%' } },
    );

    gsap.fromTo('.vm-mission',
      { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
      { clipPath: 'inset(0 0% 0 0)', opacity: 1, duration: 1, ease: 'power3.inOut',
        scrollTrigger: { trigger: container.current, start: 'top 70%' } },
    );
  }, { scope: container });

  return (
    <section ref={container} className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#faf9f6]">
      <div className="max-w-[1500px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-4">Purpose</p>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-green mb-6">Vision & Mission</h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Vision */}
          <div className="vm-vision lg:col-span-7 bg-brand-green rounded-[2rem] p-6 md:p-10 lg:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8">
                <Eye className="w-8 h-8 text-brand-orange" />
              </div>
              <h3 className="text-3xl md:text-4xl font-serif text-white mb-6">Our Vision</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                Our vision is to become one of the most trusted interior design and turnkey solution companies by delivering innovative, functional, and inspiring spaces that exceed client expectations.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="vm-mission lg:col-span-5 bg-white rounded-[2rem] p-6 md:p-10 lg:p-14 border border-gray-100 shadow-xl relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-orange/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 flex items-center justify-center mb-8">
                <Target className="w-8 h-8 text-brand-orange" />
              </div>
              <h3 className="text-3xl md:text-4xl font-serif text-brand-green mb-6">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our mission is to deliver high-quality interior solutions through creativity, skilled craftsmanship, transparent communication, timely execution, and an unwavering commitment to customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
