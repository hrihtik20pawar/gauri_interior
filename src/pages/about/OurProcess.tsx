import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { num: '01', title: 'Consultation', description: 'Understanding your vision, requirements, and budget through detailed discussion.' },
  { num: '02', title: 'Concept Development', description: 'Creating design concepts with mood boards, layouts, and material palettes.' },
  { num: '03', title: 'Planning', description: 'Detailed space planning, 3D renders, and technical drawings for approval.' },
  { num: '04', title: 'Material Selection', description: 'Curating premium materials, finishes, and furnishings for your project.' },
  { num: '05', title: 'Execution', description: 'Professional on-site execution with skilled craftsmen and project managers.' },
  { num: '06', title: 'Quality Inspection', description: 'Rigorous quality checks at every stage to ensure flawless finishing.' },
  { num: '07', title: 'Project Handover', description: 'Final walkthrough and seamless handover of your completed space.' },
];

export default function OurProcess() {
  const container = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!container.current || !scrollRef.current) return;

    gsap.fromTo('.process-header',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: container.current, start: 'top 80%' } },
    );

    const totalWidth = scrollRef.current.scrollWidth - scrollRef.current.offsetWidth;

    gsap.to(scrollRef.current, {
      x: -totalWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: container.current,
        start: 'top 40%',
        end: `+=${totalWidth}`,
        scrub: 1,
        pin: true,
      },
    });

    gsap.fromTo('.process-step',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: container.current, start: 'top 60%' } },
    );
  }, { scope: container });

  return (
    <section ref={container} className="py-24 md:py-32 bg-[#faf9f6] overflow-hidden">
      <div className="px-6 md:px-12 lg:px-24 max-w-[1500px] mx-auto">
        <div className="process-header text-center mb-16">
          <p className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-4">How We Work</p>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-green mb-6">Our Process</h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full" />
        </div>
      </div>

      <div ref={scrollRef} className="flex gap-6 px-6 md:px-12 lg:px-24 will-change-transform">
        {steps.map((step, i) => (
          <div key={i} className="process-step shrink-0 w-[300px] md:w-[350px] bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative group hover:shadow-2xl transition-shadow duration-500">
            <div className="text-6xl font-serif font-bold text-brand-teal/10 mb-4 group-hover:text-brand-teal/20 transition-colors duration-500">{step.num}</div>
            <div className="w-12 h-1 bg-brand-orange rounded-full mb-6" />
            <h3 className="text-xl font-serif text-brand-green mb-3">{step.title}</h3>
            <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6 text-brand-teal/30">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
