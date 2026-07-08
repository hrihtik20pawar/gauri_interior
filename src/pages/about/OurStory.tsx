import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, Sofa, Home } from 'lucide-react';
import { images } from '../../constants/images';

gsap.registerPlugin(ScrollTrigger);

export default function OurStory() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!container.current) return;

    gsap.fromTo('.story-image',
      { clipPath: 'inset(0 100% 0 0)' },
      { clipPath: 'inset(0 0% 0 0)', duration: 1.2, ease: 'power3.inOut',
        scrollTrigger: { trigger: container.current, start: 'top 75%' } },
    );

    gsap.fromTo('.story-text',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power2.out',
        scrollTrigger: { trigger: container.current, start: 'top 75%' } },
    );

    gsap.fromTo('.story-stat-card',
      { y: 30, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: container.current, start: 'top 60%' } },
    );
  }, { scope: container });

  return (
    <section ref={container} className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#faf9f6]">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
          {/* Text */}
          <div className="flex-1 order-2 lg:order-1">
            <p className="story-text text-brand-orange font-bold tracking-wider uppercase text-sm mb-4">Our Story</p>
            <h2 className="story-text text-4xl md:text-5xl font-serif text-brand-green mb-6 leading-tight">
              Building Dreams Through Design Excellence
            </h2>
            <div className="story-text w-24 h-1 bg-brand-orange rounded-full mb-8" />
            <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
            <p className="story-text">
              <strong className="text-brand-green">Gauri Interior Pvt. Ltd.</strong> is a comprehensive service provider for
              interior design, renovation &amp; turnkey project execution. We master excellent &amp; renovation services
              not only commercial establishment but also for residential too.
            </p>
            <p className="story-text">
              <strong className="text-brand-green">Gauri Interior Pvt. Ltd.</strong> is growing company in contracting turnkey
              project &amp; interior decorator work. We are also manufactures of modular furniture. The main goal of
              our organization is customer satisfaction by Considering time &amp; money.
            </p>
            <p className="story-text">
              We undertake all kind of interior, decoration project on turnkey basis. It cover Carpentry, POP, Civil,
              Electrical, Plumbing, Aircondition etc. &amp; also manufactures of modular furniture. We undertake
              and execute from concept to completion, of any size &amp; time schedule.
            </p>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 order-1 lg:order-2 relative">
            <div className="story-image rounded-[2rem] overflow-hidden shadow-2xl">
              <img loading="lazy" src={images.about.story} alt="Gauri Interior workspace" className="w-full h-[300px] md:h-[500px] object-cover" />
            </div>
            <div className="story-stat-card absolute -bottom-8 -left-4 lg:-left-8 bg-white rounded-2xl shadow-2xl p-6 max-w-[280px] border border-gray-100">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5 text-brand-teal" />
                  </div>
                  <p className="text-sm font-semibold text-gray-900">Turnkey Interior Solutions</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0">
                    <Sofa className="w-5 h-5 text-brand-orange" />
                  </div>
                  <p className="text-sm font-semibold text-gray-900">Modular Furniture Manufacturing</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center shrink-0">
                    <Home className="w-5 h-5 text-brand-teal" />
                  </div>
                  <p className="text-sm font-semibold text-gray-900">Residential & Commercial Expertise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
