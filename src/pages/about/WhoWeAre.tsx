import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PenTool, Building2, Armchair, Home, Briefcase, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const cards = [
  { icon: PenTool, title: 'Interior Design', description: 'Thoughtful design that transforms spaces into functional, beautiful environments tailored to your vision.' },
  { icon: Building2, title: 'Turnkey Projects', description: 'Complete end-to-end project execution from concept to handover, handling every detail professionally.' },
  { icon: Armchair, title: 'Modular Furniture', description: 'Custom-manufactured modular furniture solutions crafted with precision and premium materials.' },
  { icon: Home, title: 'Residential Interiors', description: 'Homes that reflect your personality — from apartments to luxury villas, designed for comfortable living.' },
  { icon: Briefcase, title: 'Commercial Interiors', description: 'Workspaces, retail outlets, and commercial environments designed for productivity and brand impact.' },
  { icon: CheckCircle2, title: 'Complete Execution', description: 'Comprehensive project management covering civil work, electrical, plumbing, carpentry, and finishing.' },
];

export default function WhoWeAre() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!container.current) return;

    const whoHeader = container.current.querySelector('.who-header');
    const whoCards = container.current.querySelectorAll('.who-card');
    const whoGrid = container.current.querySelector('.who-grid');

    if (whoHeader) {
      gsap.fromTo(whoHeader,
        { y: 40 },
        { y: 0, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: container.current, start: 'top 80%' } },
      );
    }

    if (whoCards.length) {
      gsap.fromTo(whoCards,
        { y: 50 },
        { y: 0, duration: 0.8, stagger: 0.12, ease: 'power2.out',
          scrollTrigger: { trigger: whoGrid || container.current, start: 'top 80%' } },
      );
    }
  }, { scope: container });

  return (
    <section ref={container} className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-[1500px] mx-auto">
        <div className="who-header text-center mb-16">
          <p className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-4">Who We Are</p>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-green mb-6">Our Expertise</h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full" />
        </div>

        <div className="who-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div key={i} className="who-card group bg-gray-50/50 rounded-2xl p-8 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-brand-teal/10 flex items-center justify-center mb-6 group-hover:bg-brand-teal group-hover:scale-110 transition-all duration-500">
                <card.icon className="w-7 h-7 text-brand-teal group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-serif text-gray-900 mb-3">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
