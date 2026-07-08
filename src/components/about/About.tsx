import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { CheckCircle2, ShieldCheck, PenTool, Clock, ArrowRight } from 'lucide-react';
import { images } from '../../constants/images';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo('.about-text',
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power2.out',
        scrollTrigger: { trigger: container.current, start: 'top 80%' }
      },
    );
  }, { scope: container });

  return (
    <section ref={container} className="py-24 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto bg-white" id="about">
      {/* Top Part: Title and Image */}
      <div className="flex flex-col lg:flex-row gap-16 mb-24 items-center">
        <div className="flex-1 lg:max-w-xl">
          <p className="about-text text-brand-orange font-bold tracking-wider uppercase text-sm mb-4">About Us</p>
          <h2 className="about-text text-4xl md:text-5xl lg:text-6xl font-serif text-brand-green leading-[1.15] mb-8">
            Designing Spaces. <br />
            <span className="text-teal-800">Creating Experiences.</span>
          </h2>
          <p className="about-text text-gray-700 text-lg leading-relaxed mb-6 font-medium">
            <strong className="text-brand-green">Gauri Interior Pvt. Ltd.</strong> is a comprehensive service provider for
            interior design, renovation &amp; turnkey project execution. We master excellent &amp; renovation services
            not only commercial establishment but also for residential too.
          </p>
          <p className="about-text text-gray-700 text-lg leading-relaxed font-medium">
            <strong className="text-brand-green">Gauri Interior Pvt. Ltd.</strong> is growing company in contracting turnkey
            project &amp; interior decorator work. We are also manufactures of modular furniture. The main goal of
            our organization is customer satisfaction by Considering time &amp; money.
          </p>
        </div>
        <div className="flex-1 w-full about-text">
          <img
            loading="lazy"
            src={images.about.main}
            alt="Beautiful interior design"
            className="w-full h-[400px] md:h-[500px] object-cover rounded-xl shadow-2xl"
          />
        </div>
      </div>

      {/* Services Description */}
      <div className="about-text bg-gray-50/50 p-8 md:p-12 rounded-2xl border border-gray-100 mb-12">
        <p className="text-gray-700 text-lg leading-relaxed font-medium">
          We undertake all kind of interior, decoration project on turnkey basis. It cover Carpentry, POP, Civil,
          Electrical, Plumbing, Aircondition etc. &amp; also manufactures of modular furniture. We undertake
          and execute from concept to completion, of any size &amp; time schedule.
        </p>
      </div>

      {/* Bottom Part: Highlights */}
      <div className="bg-gray-50/50 p-8 rounded-2xl border border-gray-100">
        {/* 4 Points Horizontal with Arrows */}
        <div className="about-text flex flex-col sm:flex-row items-center gap-4">
          <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-50 flex-1">
            <CheckCircle2 className="w-8 h-8 text-teal-700 shrink-0 stroke-[1.5]" />
            <div>
              <h5 className="font-semibold text-gray-900 text-sm mb-1">Client-Centric Approach</h5>
              <p className="text-xs text-gray-500">Your vision is our priority.</p>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-gray-300 shrink-0 hidden sm:block" />
          <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-50 flex-1">
            <PenTool className="w-8 h-8 text-teal-700 shrink-0 stroke-[1.5]" />
            <div>
              <h5 className="font-semibold text-gray-900 text-sm mb-1">Innovative Design</h5>
              <p className="text-xs text-gray-500">Creative solutions for every space.</p>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-gray-300 shrink-0 hidden sm:block" />
          <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-50 flex-1">
            <ShieldCheck className="w-8 h-8 text-teal-700 shrink-0 stroke-[1.5]" />
            <div>
              <h5 className="font-semibold text-gray-900 text-sm mb-1">Quality Craftsmanship</h5>
              <p className="text-xs text-gray-500">Precision in every detail.</p>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-gray-300 shrink-0 hidden sm:block" />
          <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-50 flex-1">
            <Clock className="w-8 h-8 text-teal-700 shrink-0 stroke-[1.5]" />
            <div>
              <h5 className="font-semibold text-gray-900 text-sm mb-1">Timely Delivery</h5>
              <p className="text-xs text-gray-500">Commitment you can rely on.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
