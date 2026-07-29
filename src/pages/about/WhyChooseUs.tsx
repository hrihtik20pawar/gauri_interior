import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2, Factory, Users, Award, Gem, Clock, MessageCircle, Eye } from 'lucide-react';
import BrandName from '../../components/brand-name/BrandName';

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: CheckCircle2, title: 'Complete Turnkey Solutions', description: 'From concept to handover, we manage every aspect of your project.' },
  { icon: Factory, title: 'Modular Furniture Manufacturing', description: 'In-house manufacturing of premium modular furniture and fittings.' },
  { icon: Users, title: 'Customer-Centric Approach', description: 'Your vision drives every decision we make throughout the project.' },
  { icon: Award, title: 'Experienced Professionals', description: 'A team of skilled designers, architects, and craftspeople.' },
  { icon: Gem, title: 'Quality Craftsmanship', description: 'Premium materials and meticulous attention to every detail.' },
  { icon: Clock, title: 'Timely Delivery', description: 'We respect your timelines and deliver projects on schedule.' },
  { icon: MessageCircle, title: 'Transparent Communication', description: 'Clear updates and honest communication at every project stage.' },
  { icon: Eye, title: 'Attention to Every Detail', description: 'No detail is too small — we ensure perfection in every element.' },
];

export default function WhyChooseUs() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!container.current) return;

    gsap.fromTo('.wcu-header',
      { y: 40 },
      { y: 0, duration: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: container.current, start: 'top 80%' } },
    );

    gsap.fromTo('.wcu-card',
      { y: 50 },
      { y: 0, duration: 0.1, stagger: 0.02, ease: 'power2.out',
        scrollTrigger: { trigger: '.wcu-grid', start: 'top 80%' } },
    );
  }, { scope: container });

  return (
    <section ref={container} className="py-16 md:py-32 px-5 md:px-12 lg:px-24 bg-white">
      <div className="max-w-[1500px] mx-auto">
        <div className="wcu-header text-center mb-10 md:mb-16">
          <p className="text-brand-orange font-bold tracking-wider uppercase text-xs sm:text-sm mb-3 md:mb-4">Why Us</p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-sans text-brand-green mb-4 md:mb-6">Why Choose <BrandName as="span">Gauri Interior</BrandName></h2>
          <div className="w-16 md:w-24 h-1 bg-brand-orange mx-auto rounded-full" />
        </div>

        <div className="wcu-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feat, i) => (
            <div key={i} className="wcu-card group bg-gray-50/50 rounded-xl md:rounded-2xl p-5 md:p-7 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-brand-orange/10 flex items-center justify-center mb-3 md:mb-5 group-hover:bg-brand-orange group-hover:scale-110 transition-all duration-500">
                <feat.icon className="w-5 h-5 md:w-6 md:h-6 text-brand-orange group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-sm md:text-lg font-serif text-gray-900 mb-1.5 md:mb-2">{feat.title}</h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{feat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
