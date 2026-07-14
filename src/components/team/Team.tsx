import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  { name: "Shilkumar L. Vishwakarma", role: "Managing Director & CEO", image: "/images/team/TEAM_01.avif" },
  { name: "Poonam S. Vishwakarma", role: "Non-Executive Director", image: "/images/team/team_2.avif" },
  { name: "Nikhil S. Vishwakarma", role: "Director", image: "/images/team/team_3.avif" },
  { name: "Komal N. Vishwakarma", role: "Business Head", image: "/images/team/team_4.avif" },
  { name: "Nupur S. Vishwakarma", role: "Next-Gen Design Advisor", image: "/images/team/team_5.avif" },
  { name: "Sarita D. Pandey", role: "General Manager", image: "/images/team/team_6.avif" },
  { name: "Ashok B. Passi", role: "Accounts Head", image: "/images/team/team_7.avif" },
  { name: "Satyendra Paswan", role: "Project Head", image: "/images/team/team_8.avif" },
  { name: "Nandini D. Kalambe", role: "HR & Purchase Head", image: "/images/team/team_9.avif" },
];

export default function Team() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!container.current) return;

    const cards = gsap.utils.toArray<HTMLElement>('.team-card');

    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.1,
          ease: 'power3.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#faf9f6]">
      <div className="max-w-[1500px] mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-brand-orange font-bold tracking-[0.2em] uppercase text-sm mb-4">Leadership</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-green mb-6">Our Core Team</h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full" />
        </div>

        {/* Desktop Grid - Reliance Style */}
        <div className="hidden lg:grid grid-cols-4 gap-6">
          {teamMembers.slice(0, 8).map((member, idx) => (
            <div key={idx} className="team-card group relative">
              {/* Card Container */}
              <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-b from-[#e8d5a3] via-[#d4b978] to-[#c9a855] aspect-[3/4]">
                {/* Portrait Image */}
                <img 
                  loading="lazy" 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" 
                />
                
                {/* Blue Info Card Overlay */}
                <div className="absolute bottom-0 left-4 right-4 bg-[#1a3a5c] rounded-t-lg p-5 transform group-hover:-translate-y-2 transition-transform duration-500">
                  <h3 className="text-white text-lg font-bold mb-2 text-center">{member.name}</h3>
                  <div className="w-10 h-[2px] bg-brand-orange mx-auto rounded-full mb-3"></div>
                  <p className="text-gray-300 text-xs text-center tracking-wide uppercase">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tablet Grid */}
        <div className="hidden md:grid lg:hidden grid-cols-3 gap-5">
          {teamMembers.slice(0, 9).map((member, idx) => (
            <div key={idx} className="team-card group relative">
              <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-b from-[#e8d5a3] via-[#d4b978] to-[#c9a855] aspect-[3/4]">
                <img 
                  loading="lazy" 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute bottom-0 left-3 right-3 bg-[#1a3a5c] rounded-t-lg p-4 transform group-hover:-translate-y-2 transition-transform duration-500">
                  <h3 className="text-white text-base font-bold mb-2 text-center">{member.name}</h3>
                  <div className="w-8 h-[2px] bg-brand-orange mx-auto rounded-full mb-2"></div>
                  <p className="text-gray-300 text-[11px] text-center tracking-wide uppercase">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Grid */}
        <div className="grid md:hidden grid-cols-2 gap-4">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="team-card group relative">
              <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-b from-[#e8d5a3] via-[#d4b978] to-[#c9a855] aspect-[3/4]">
                <img 
                  loading="lazy" 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute bottom-0 left-2 right-2 bg-[#1a3a5c] rounded-t-lg p-3 transform group-hover:-translate-y-2 transition-transform duration-500">
                  <h3 className="text-white text-sm font-bold mb-1 text-center">{member.name}</h3>
                  <div className="w-6 h-[2px] bg-brand-orange mx-auto rounded-full mb-2"></div>
                  <p className="text-gray-300 text-[10px] text-center tracking-wide uppercase">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Remaining member for desktop (9th member) */}
        <div className="hidden lg:flex justify-center mt-6">
          <div className="team-card group relative w-[calc(25%-12px)]">
            <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-b from-[#e8d5a3] via-[#d4b978] to-[#c9a855] aspect-[3/4]">
              <img 
                loading="lazy" 
                src={teamMembers[8].image} 
                alt={teamMembers[8].name} 
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute bottom-0 left-4 right-4 bg-[#1a3a5c] rounded-t-lg p-5 transform group-hover:-translate-y-2 transition-transform duration-500">
                <h3 className="text-white text-lg font-bold mb-2 text-center">{teamMembers[8].name}</h3>
                <div className="w-10 h-[2px] bg-brand-orange mx-auto rounded-full mb-3"></div>
                <p className="text-gray-300 text-xs text-center tracking-wide uppercase">{teamMembers[8].role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
