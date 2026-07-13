import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  { name: "Shilkumar L. Vishwakarma", role: "Managing Director & CEO", image: "/images/team/TEAM_01.jpeg" },
  { name: "Shilkumar L. Vishwakarma", role: "Managing Director & CEO", image: "/images/team/team_1.avif" },
  { name: "Poonam S. Vishwakarma", role: "Non-Executive Director", image: "/images/team/team_2.avif" },
  { name: "Nikhil S. Vishwakarma", role: "Director", image: "/images/team/team_3.avif" },
  { name: "Komal N. Vishwakarma", role: "Business Head", image: "/images/team/team_4.avif" },
  { name: "Nupur S. Vishwakarma", role: "Next-Gen Design Advisor", image: "/images/team/team_5.avif" },
  { name: "Sarita D. Pandey", role: "General Manager", image: "/images/team/team_6.avif" },
  { name: "Ashok B. Passi", role: "Accounts Head", image: "/images/team/team_7.avif" },
  { name: "Satyendra Paswan", role: "Project Head", image: "/images/team/team_8.avif" },
  { name: "Nandini D. Kalambe", role: "HR & Purchase Head", image: "/images/team/team_9.avif" },
];

export default function MeetTheTeam() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!container.current) return;

    gsap.fromTo('.tm-header',
      { y: 40 },
      { y: 0, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: container.current, start: 'top 80%' } },
    );

    gsap.fromTo('.tm-card',
      { y: 50 },
      { y: 0, duration: 0.8, stagger: 0.12, ease: 'power2.out', clearProps: 'all',
        scrollTrigger: { trigger: '.tm-grid', start: 'top 80%' } },
    );
  }, { scope: container });

  return (
    <section ref={container} className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#faf9f6]">
      <div className="max-w-[1500px] mx-auto">
        <div className="tm-header text-center mb-16">
          <p className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-4">Our People</p>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-green mb-6">Meet Our Team</h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full" />
        </div>

        {/* Desktop Pyramid Layout */}
        <div className="hidden lg:flex flex-col items-center gap-8">
          {/* Row 1 - 1 image */}
          <div className="flex justify-center">
            <div className="tm-card group relative rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500 bg-white w-[220px] aspect-[3/4]">
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
              <div key={idx} className="tm-card group relative rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500 bg-white w-[220px] aspect-[3/4]">
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
              <div key={idx} className="tm-card group relative rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500 bg-white w-[220px] aspect-[3/4]">
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

          {/* Row 4 - 4 images */}
          <div className="flex justify-center gap-8">
            {teamMembers.slice(6, 10).map((member, idx) => (
              <div key={idx} className="tm-card group relative rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500 bg-white w-[220px] aspect-[3/4]">
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

        {/* Tablet - 2 columns */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-6">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="tm-card group relative rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500 bg-white aspect-[3/4]">
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

        {/* Mobile - 1 column */}
        <div className="grid md:hidden grid-cols-1 gap-5">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="tm-card group relative rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500 bg-white aspect-[3/4]">
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
