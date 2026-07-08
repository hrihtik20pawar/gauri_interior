import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export default function AboutCta() {
  const ctaRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useGSAP(() => {
    if (!ctaRef.current) return;
    gsap.fromTo(ctaRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: ctaRef.current, start: 'top 80%' } },
    );
  }, { scope: ctaRef });

  return (
    <div ref={ctaRef} className="bg-brand-green py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-6">
          Let's Build Your Dream Space Together
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you're planning a residential renovation, commercial workspace, or a complete turnkey interior project, our team is ready to transform your vision into reality.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/projects')}
            className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 rounded font-semibold tracking-wide transition-all duration-300 hover:shadow-xl hover:shadow-orange-900/30 group"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <button
            onClick={() => navigate('/gallery')}
            className="inline-flex items-center justify-center gap-2 backdrop-blur-md bg-white/10 border border-white/30 text-white px-8 py-4 rounded font-semibold tracking-wide hover:bg-white hover:text-brand-green transition-all duration-300"
          >
            View Our Gallery
          </button>
        </div>
      </div>
    </div>
  );
}
