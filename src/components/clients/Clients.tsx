import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

const clients = [
  { name: "Ikshana Resort & Spa", logo: "/images/clients/ikshana.svg" },
  { name: "Kohinoor Continental", logo: "/images/clients/kohinoor-continental.svg" },
  { name: "Kohinoor Elite", logo: "/images/clients/kohinoor-elite.svg" },
  { name: "Crave by Andy", logo: "/images/clients/crave.svg" },
  { name: "Big Mishra Pedha", logo: "/images/clients/big-mishra.svg" },
  { name: "KRA Jewellers", logo: "/images/clients/kra.svg" },
  { name: "Shapoorji Pallonji", logo: "/images/clients/shapoorji.svg" },
  { name: "Rotary International", logo: "/images/clients/rotary.svg" },
  { name: "Tamarind Global", logo: "/images/clients/tamarind.svg" },
  { name: "Good Home Realty", logo: "/images/clients/good-home.svg" },
  { name: "JISL", logo: "/images/clients/jisl.svg" },
  { name: "Peninsula Land", logo: "/images/clients/peninsula.svg" },
  { name: "United Shippers", logo: "/images/clients/united-shippers.svg" },
  { name: "L&T", logo: "/images/clients/lt.svg" },
  { name: "BMR Advisors", logo: "/images/clients/bmr.svg" },
  { name: "Parekh", logo: "/images/clients/parekh.svg" },
  { name: "Chinai Piramal Group", logo: "/images/clients/piramal.svg" },
  { name: "S Raheja Realty", logo: "/images/clients/raheja.svg" },
  { name: "Parle Agro", logo: "/images/clients/parle.svg" },
  { name: "ITC Limited", logo: "/images/clients/itc.svg" },
  { name: "Romell Group", logo: "/images/clients/romell.svg" },
  { name: "MAN Realty", logo: "/images/clients/man-realty.svg" },
  { name: "Josmo", logo: "/images/clients/josmo.svg" },
  { name: "Tara Jewellers", logo: "/images/clients/tara.svg" },
  { name: "SRJ", logo: "/images/clients/srj.svg" },
  { name: "Renaissance Jewellery", logo: "/images/clients/renaissance.svg" },
];

export default function Clients() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!scrollRef.current) return;

    const scrollWidth = scrollRef.current.scrollWidth / 2;
    
    gsap.to(scrollRef.current, {
      x: -scrollWidth,
      duration: 40,
      ease: 'none',
      repeat: -1,
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-gradient-to-b from-[#faf9f6] to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-12">
        <div className="text-center">
          <p className="text-brand-orange font-bold tracking-[0.2em] uppercase text-sm mb-4">Our Partners</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-brand-green mb-4">Trusted by Leading Brands</h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#faf9f6] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#faf9f6] to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Content */}
        <div ref={scrollRef} className="flex gap-8 md:gap-12 items-center w-max">
          {[...clients, ...clients].map((client, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-44 md:w-56 h-28 md:h-36 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center p-4 md:p-6 border border-gray-100 hover:border-brand-orange/30 group overflow-hidden"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
