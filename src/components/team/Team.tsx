import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  { name: "Shilkumar L. Vishwakarma", role: "Managing Director & CEO", image: "/images/team/TEAM_01.jpeg" },
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

    const cards = gsap.utils.toArray<HTMLElement>('.team-mosaic-card');

    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 50 },
        {
          y: 0,
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
          <div className="w-24 h-1 bg-white mx-auto rounded-full" />
        </div>

        {/* Desktop Pyramid Layout */}
        <div className="hidden lg:flex flex-col items-center gap-8">
          {/* Row 1 - 1 image */}
          <div className="flex justify-center">
            <div className="team-mosaic-card group relative rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500 bg-white w-[220px] aspect-[3/4]">
              <img loading="lazy" src={teamMembers[0].image} alt={teamMembers[0].name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-brand-green/0 group-hover:bg-brand-green/70 backdrop-blur-0 group-hover:backdrop-blur-sm transition-all duration-500 flex flex-col justify-end p-6">
                <div className="translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                  <h3 className="text-white text-xl font-serif mb-1">{teamMembers[0].name}</h3>
                  <p className="text-white/70 text-sm font-medium tracking-wide">{teamMembers[0].role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 - 2 images */}
          <div className="flex justify-center gap-8">
            {teamMembers.slice(1, 3).map((member, idx) => (
              <div key={idx} className="team-mosaic-card group relative rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500 bg-white w-[220px] aspect-[3/4]">
                <img loading="lazy" src={member.image} alt={member.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-brand-green/0 group-hover:bg-brand-green/70 backdrop-blur-0 group-hover:backdrop-blur-sm transition-all duration-500 flex flex-col justify-end p-6">
                  <div className="translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                    <h3 className="text-white text-xl font-serif mb-1">{member.name}</h3>
                    <p className="text-white/70 text-sm font-medium tracking-wide">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 3 - 3 images */}
          <div className="flex justify-center gap-8">
            {teamMembers.slice(3, 6).map((member, idx) => (
              <div key={idx} className="team-mosaic-card group relative rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500 bg-white w-[220px] aspect-[3/4]">
                <img loading="lazy" src={member.image} alt={member.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-brand-green/0 group-hover:bg-brand-green/70 backdrop-blur-0 group-hover:backdrop-blur-sm transition-all duration-500 flex flex-col justify-end p-6">
                  <div className="translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                    <h3 className="text-white text-xl font-serif mb-1">{member.name}</h3>
                    <p className="text-white/70 text-sm font-medium tracking-wide">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 4 - 3 images */}
          <div className="flex justify-center gap-8">
            {teamMembers.slice(6, 9).map((member, idx) => (
              <div key={idx} className="team-mosaic-card group relative rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500 bg-white w-[220px] aspect-[3/4]">
                <img loading="lazy" src={member.image} alt={member.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-brand-green/0 group-hover:bg-brand-green/70 backdrop-blur-0 group-hover:backdrop-blur-sm transition-all duration-500 flex flex-col justify-end p-6">
                  <div className="translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                    <h3 className="text-white text-xl font-serif mb-1">{member.name}</h3>
                    <p className="text-white/70 text-sm font-medium tracking-wide">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:grid lg:hidden grid-cols-2 gap-6">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="team-mosaic-card group relative rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500 bg-white aspect-[3/4]">
              <img loading="lazy" src={member.image} alt={member.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-brand-green/0 group-hover:bg-brand-green/70 backdrop-blur-0 group-hover:backdrop-blur-sm transition-all duration-500 flex flex-col justify-end p-6">
                <div className="translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                  <h3 className="text-white text-xl font-serif mb-1">{member.name}</h3>
                  <p className="text-white/70 text-sm font-medium tracking-wide">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:hidden grid-cols-1 gap-5">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="team-mosaic-card group relative rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500 bg-white aspect-[3/4]">
              <img loading="lazy" src={member.image} alt={member.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6">
                <div>
                  <h3 className="text-white text-xl font-serif mb-1">{member.name}</h3>
                  <p className="text-white/70 text-sm font-medium tracking-wide">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
