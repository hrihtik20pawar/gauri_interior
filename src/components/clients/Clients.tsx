import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

const clients = [
  { name: "Client 1", logo: "/images/clients/client-13-26-37.avif" },
  { name: "Client 2", logo: "/images/clients/client-13-27-46.avif" },
  { name: "Client 3", logo: "/images/clients/client-13-28-33.avif" },
  { name: "Client 4", logo: "/images/clients/client-13-30-51.avif" },
  { name: "Client 5", logo: "/images/clients/client-13-31-26.avif" },
  { name: "Client 6", logo: "/images/clients/client-13-33-18.avif" },
  { name: "Client 7", logo: "/images/clients/client-13-34-21.avif" },
  { name: "Client 8", logo: "/images/clients/client-13-36-36.avif" },
  { name: "Client 9", logo: "/images/clients/client-13-41-57.avif" },
  { name: "Client 10", logo: "/images/clients/client-13-52-04.avif" },
  { name: "Client 11", logo: "/images/clients/client-13-53-29.avif" },
  { name: "Client 12", logo: "/images/clients/client-14-55-36.avif" },
  { name: "Client 13", logo: "/images/clients/client-14-56-18.avif" },
  { name: "Client 14", logo: "/images/clients/client-14-58-05.avif" },
  { name: "Client 15", logo: "/images/clients/client-15-05-31.avif" },
];

const clientsRow2 = [...clients].reverse();

export default function Clients() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef1 = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!scrollRef1.current || !scrollRef2.current) return;

    const scrollWidth1 = scrollRef1.current.scrollWidth / 2;
    const scrollWidth2 = scrollRef2.current.scrollWidth / 2;

    gsap.to(scrollRef1.current, {
      x: -scrollWidth1,
      duration: 40,
      ease: 'none',
      repeat: -1,
    });

    gsap.to(scrollRef2.current, {
      x: -scrollWidth2,
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

      {/* Carousel 1 */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#faf9f6] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#faf9f6] to-transparent z-10 pointer-events-none"></div>
        <div ref={scrollRef1} className="flex gap-8 md:gap-12 items-center w-max">
          {[...clients, ...clients].map((client, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-44 md:w-56 h-28 md:h-36 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center p-4 md:p-6 border border-gray-100 hover:border-brand-orange/30 group overflow-hidden"
            >
              <img
                loading="lazy"
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Carousel 2 */}
      <div className="relative mt-8 md:mt-10">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#faf9f6] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#faf9f6] to-transparent z-10 pointer-events-none"></div>
        <div ref={scrollRef2} className="flex gap-8 md:gap-12 items-center w-max">
          {[...clientsRow2, ...clientsRow2].map((client, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-44 md:w-56 h-28 md:h-36 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center p-4 md:p-6 border border-gray-100 hover:border-brand-orange/30 group overflow-hidden"
            >
              <img
                loading="lazy"
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
