import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PenTool, Building2, Armchair, Home, Briefcase, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const cards = [
  { icon: Building2, title: 'Turnkey Projects', description: 'Complete end-to-end project execution from concept to handover, handling every detail professionally.', category: 'Commercial' },
  { icon: Armchair, title: 'Modular Furniture', description: 'Custom-manufactured modular furniture solutions crafted with precision and premium materials.', category: 'Retail Work' },
  { icon: Home, title: 'Residential Interiors', description: 'Homes that reflect your personality — from apartments to luxury villas, designed for comfortable living.', category: 'Residential' },
  { icon: Briefcase, title: 'Commercial Interiors', description: 'Workspaces, retail outlets, and commercial environments designed for productivity and brand impact.', category: 'Commercial' },
  { icon: CheckCircle2, title: 'Complete Execution', description: 'Comprehensive project management covering civil work, electrical, plumbing, carpentry, and finishing.', category: 'Institutional' },
  { icon: PenTool, title: 'Interior Design', description: 'Thoughtful design that transforms spaces into functional, beautiful environments tailored to your vision.', category: 'Residential' },
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
        {
          y: 0, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: container.current, start: 'top 80%' }
        },
      );
    }

    if (whoCards.length) {
      gsap.fromTo(whoCards,
        { y: 50 },
        {
          y: 0, duration: 0.8, stagger: 0.12, ease: 'power2.out',
          scrollTrigger: { trigger: whoGrid || container.current, start: 'top 80%' }
        },
      );
    }
  }, { scope: container });

  return (
    <section ref={container} className="py-16 md:py-32 px-5 md:px-12 lg:px-24 bg-white">
      <div className="max-w-[1500px] mx-auto">
        <div className="who-header text-center mb-10 md:mb-16">
          <p className="text-brand-orange font-bold tracking-wider uppercase text-xs sm:text-sm mb-3 md:mb-4">Who We Are</p>
          <h2 className="text-3xl md:text-5xl font-serif text-brand-green mb-4 md:mb-6">Our Expertise</h2>
          <div className="w-16 md:w-24 h-1 bg-brand-orange mx-auto rounded-full" />
        </div>

        <div className="who-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {cards.map((card, i) => (
            <Link
              key={i}
              to={`/gallery?category=${encodeURIComponent(card.category)}`}
              className="who-card group bg-gray-50/50 rounded-xl md:rounded-2xl p-5 md:p-8 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 block"
            >
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-brand-teal/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-brand-teal group-hover:scale-110 transition-all duration-500">
                <card.icon className="w-5 h-5 md:w-7 md:h-7 text-brand-teal group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-base md:text-xl font-serif text-gray-900 mb-2 md:mb-3">{card.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
