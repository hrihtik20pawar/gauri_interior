import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { images } from '../../constants/images';
import Logo from '../logo/Logo';

gsap.registerPlugin(ScrollTrigger);

export default function Businesses() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo('.business-card',
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power2.out',
        scrollTrigger: { trigger: container.current, start: 'top 80%' }
      },
    );
  }, { scope: container });

  const businesses = [
    {
      id: 'interior',
      logo: images.businesses.interiorLogo || images.logo, // Provide a logo path
      desc: "Turnkey interior solutions for residential, commercial and retail spaces. From concept to completion, we create functional and beautiful environments.",
      img: images.businesses.interior,
      btnColor: "bg-teal-800 hover:bg-teal-900"
    },
    {
      id: 'nikhil',
      logo: images.businesses.nikhilLogo || images.logo,
      desc: "Reliable trading solutions with quality products, trusted partnerships and efficient supply chain management.",
      img: images.businesses.nikhil,
      btnColor: "bg-teal-800 hover:bg-teal-900"
    },
    {
      id: 'kitchen',
      logo: images.businesses.kitchenLogo || images.logo, // Provide a logo path
      desc: "Modular kitchens and smart storage solutions designed for style, efficiency and convenience – tailored to your lifestyle.",
      img: images.businesses.kitchen,
      btnColor: "bg-brand-orange hover:bg-orange-700"
    },
    {
      id: 'studio',
      logo: images.businesses.studioLogo || images.logo, // Provide a logo path
      desc: "Design consulting, 3D visualization and styling solutions that bring ideas to life with creativity and precision.",
      img: images.businesses.studio,
      btnColor: "bg-teal-800 hover:bg-teal-900"
    }
  ];

  return (
    <section ref={container} className="py-20 px-6 max-w-[1400px] mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif text-teal-800 mb-4">Our Businesses</h2>
        <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {businesses.map((biz, idx) => (
          <div key={idx} className="business-card bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden border border-gray-100 flex flex-col">
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                  <img loading="lazy" src={biz.logo} alt="Business Logo" className="h-16 w-auto object-contain" />
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">{biz.desc}</p>

              <Link to={`/business/${biz.id}`} className={`${biz.btnColor} text-white px-5 py-2.5 rounded text-sm font-medium transition-colors inline-flex items-center gap-2 mt-auto self-center`}>
                Know More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="h-64 w-full overflow-hidden bg-gray-50">
              <img loading="lazy" src={biz.img} alt="Business Preview" className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
