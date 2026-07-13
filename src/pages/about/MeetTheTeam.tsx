import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  { name: "Shilkumar L. Vishwakarma", role: "Managing Director & CEO", image: "/images/team/TEAM_01.jpeg" },
  { name: "Poonam S. Vishwakarma", role: "Non-Executive Director", image: "/images/team/team_2.avif" },
  { name: "Nikhil S. Vishwakarma", role: "Director", image: "/images/team/team_3.avif" },
  { name: "Komal N. Vishwakarma", role: "Business Head", image: "/images/team/team_4.avif" },
  { name: "Nupur S. Vishwakarma", role: "Next-Gen Design Advisor", image: "/images/team/team_5.avif" },
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

        <div className="tm-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="tm-card group relative rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500 bg-white aspect-[3/4]">
              <img loading="lazy" src={member.image} alt={member.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent sm:bg-brand-green/0 sm:group-hover:bg-brand-green/70 sm:backdrop-blur-0 sm:group-hover:backdrop-blur-sm transition-all duration-500 flex flex-col justify-end p-6">
                <div className="sm:translate-y-6 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 transition-all duration-500 delay-75">
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
