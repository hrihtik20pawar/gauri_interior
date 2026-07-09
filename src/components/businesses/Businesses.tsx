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
      { y: 50 },
      {
        y: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out',
        scrollTrigger: { trigger: container.current, start: 'top 80%' }
      },
    );
  }, { scope: container });

  const businesses = [
    {
      id: 'interior',
      logo: images.businesses.interiorLogo || images.logo,
      desc: <>Complete <span className="text-brand-orange font-semibold">turnkey interior solutions</span> for commercial, residential and institutional spaces—from design to <span className="text-brand-orange font-semibold">flawless execution</span>.</>,
      img: images.businesses.interior,
      btnColor: "bg-brand-orange hover:bg-orange-700"
    },
    {
      id: 'nikhil',
      logo: images.businesses.nikhilLogo || images.logo,
      desc: <>Your trusted partner for <span className="text-brand-orange font-semibold">premium plywood, laminates, hardware</span> and modular furniture materials with <span className="text-brand-orange font-semibold">reliable supply solutions</span>.</>,
      img: images.businesses.nikhil,
      btnColor: "bg-brand-orange hover:bg-orange-700"
    },
    {
      id: 'kitchen',
      logo: images.businesses.kitchenLogo || images.logo,
      desc: <>Elegant <span className="text-brand-orange font-semibold">modular kitchens</span> and <span className="text-brand-orange font-semibold">smart storage solutions</span> designed to enhance functionality, comfort and modern living.</>,
      img: images.businesses.kitchen,
      btnColor: "bg-brand-orange hover:bg-orange-700"
    },
    {
      id: 'studio',
      logo: images.businesses.studioLogo || images.logo,
      desc: <>Creative <span className="text-brand-orange font-semibold">design consultancy</span> delivering architecture, interiors, space planning and <span className="text-brand-orange font-semibold">3D visualization</span> with innovative solutions.</>,
      img: images.businesses.studio,
      btnColor: "bg-brand-orange hover:bg-orange-700"
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
