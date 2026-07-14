import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  {
    id: 'lalbachan-vishwakarma',
    name: "Lalbachan Vishwakarma",
    role: "Founder",
    image: "/images/team/TEAM_01_noName.jpg",
    description: "What began as a small furniture business in 1993 has grown into the GAURI GROUP OF COMPANIES, thanks to the trust of our clients and the dedication of our team. Our vision has always been simple—to deliver quality craftsmanship, innovative designs, and reliable turnkey solutions while building lasting relationships through integrity and customer satisfaction. As we continue to grow with the next generation of leadership, we remain committed to creating spaces that inspire and delivering excellence in every project we undertake."
  },
  {
    id: 'shilkumar-vishwakarma',
    name: "Shilkumar L. Vishwakarma",
    role: "Managing Director & CEO",
    image: "/images/team/team_1.avif",
    description: "At GAURI GROUP, our journey has always been guided by a simple belief – to create spaces that inspire and relationships that last. From humble beginnings to growing into a diverse group of companies, we have stayed true to our values of honesty, quality, and commitment. Every project we undertake is a reflection of our passion for excellence and our dedication to our clients. As we look ahead, our focus remains the same – to innovate, to evolve, and to deliver environments that truly make a difference in people's lives."
  },
  {
    id: 'poonam-vishwakarma',
    name: "Poonam S. Vishwakarma",
    role: "Non-Executive Director",
    image: "/images/team/team_2.avif",
    description: "Mrs. Poonam S. Vishwakarma plays a vital role in shaping the long-term vision and governance of the Gauri Group of Companies. As a Non-Executive Director, she provides strategic guidance to the Board, ensuring that the Group's growth remains aligned with its founding values of integrity, quality, and customer trust. With a strong focus on organizational excellence, ethical business practices, and sustainable growth, she contributes to key policy decisions while supporting the leadership team in building a resilient and future-ready organization. Her commitment to people, culture, and responsible governance continues to strengthen the foundation of the Group as it expands across interior contracting, modular furniture manufacturing, trading, and design consultancy."
  },
  {
    id: 'nikhil-vishwakarma',
    name: "Nikhil S. Vishwakarma",
    role: "Director",
    image: "/images/team/team_3.avif",
    description: "As Director of the Gauri Group of Companies, Nikhil S. Vishwakarma leads the Group's vision for innovation, design excellence, and future-ready business growth. Combining modern thinking with decades of industry experience, he plays a key role in expanding the Group's capabilities across turnkey interiors, modular furniture manufacturing, and emerging business ventures. He is passionate about integrating contemporary design, advanced manufacturing technologies, and customer-centric solutions to deliver exceptional value. His leadership focuses on operational excellence, product innovation, and building scalable systems that strengthen the Group's position in the industry."
  },
  {
    id: 'komal-vishwakarma',
    name: "Komal N. Vishwakarma",
    role: "Business Head",
    image: "/images/team/team_4.avif",
    description: "As the Business Head of the Gauri Group of Companies, Komal N. Vishwakarma is responsible for driving the Group's overall business operations, strategic growth, and organizational excellence. She leads key functions including business development, sales, marketing, client relationship management, human resources, and operational planning. With a strong focus on customer satisfaction and sustainable growth, she works closely with the leadership team to strengthen business performance, optimize processes, and expand the Group's market presence. Her leadership combines strategic thinking with execution, ensuring that every project reflects the highest standards of quality, efficiency, and professionalism."
  },
  {
    id: 'nupur-vishwakarma',
    name: "Nupur S. Vishwakarma",
    role: "Next-Gen Design Advisor",
    image: "/images/team/team_5.avif",
    description: "As the Next-Gen Design Advisor at the Gauri Group of Companies, Nupur S. Vishwakarma brings a fresh perspective to design, creativity, and customer-centric innovation. She represents the next generation of the Group, contributing modern ideas and global design influences that complement the company's decades of craftsmanship and excellence. Her focus lies in understanding evolving lifestyles, design trends, sustainable materials, and future-ready spaces that enhance the customer experience. Working alongside the leadership team, she contributes to product development, design direction, and the Group's long-term vision for innovation."
  },
  {
    id: 'sarita-pandey',
    name: "Sarita D. Pandey",
    role: "General Manager",
    image: "/images/team/team_6.avif",
    description: "As the General Manager of the Gauri Group of Companies, Sarita D. Pandey oversees the day-to-day operations, ensuring seamless coordination across departments and the successful execution of projects. She plays a pivotal role in driving operational efficiency, maintaining quality standards, and delivering exceptional customer experiences. With extensive experience in managing teams, streamlining processes, and coordinating complex interior and turnkey projects, she works closely with the leadership team to achieve the Group's strategic objectives. Her commitment to excellence, accountability, and teamwork ensures that every project is delivered with precision, quality, and within committed timelines."
  },
  {
    id: 'ashok-pasi',
    name: "Ashok B. Pasi",
    role: "Accounts Head",
    image: "/images/team/team_7.avif",
    description: "As the Accounts Head of the Gauri Group of Companies, Ashok B. Pasi is responsible for overseeing the Group's financial operations, ensuring accuracy, transparency, and regulatory compliance across all business functions. He plays a key role in managing financial planning, accounting, taxation, budgeting, and internal financial controls. With a strong focus on financial discipline and operational efficiency, he supports the leadership team by providing timely financial insights that enable informed business decisions. His commitment to integrity, accountability, and compliance contributes significantly to the Group's sustainable growth and long-term financial stability."
  },
  {
    id: 'satyendra-paswan',
    name: "Satyendra Paswan",
    role: "Project Head",
    image: "/images/team/team_8.avif",
    description: "As the Project Head of the Gauri Group of Companies, Satyendra Paswan leads the execution of turnkey interior and fit-out projects, ensuring every assignment is delivered with precision, quality, and within committed timelines. He oversees project planning, site operations, resource management, and coordination between clients, consultants, vendors, and execution teams. With extensive experience in project execution and on-site management, he is dedicated to maintaining the highest standards of workmanship, safety, and operational excellence. His practical leadership and problem-solving approach ensure seamless project delivery while exceeding client expectations."
  },
  {
    id: 'nandini-kalambe',
    name: "Nandini D. Kalambe",
    role: "HR & Purchase Head",
    image: "/images/team/team_9.avif",
    description: "As the HR & Purchase Head of the Gauri Group of Companies, Nandini D. Kalambe leads the organization's human resource and procurement functions, ensuring operational efficiency and seamless business support. She plays a vital role in talent acquisition, employee engagement, vendor management, procurement planning, and supply chain coordination. By balancing people management with strategic purchasing, she ensures that the Group has the right talent, quality resources, and reliable vendor partnerships to successfully execute every project. Her commitment to professionalism, collaboration, and continuous improvement strengthens the organization's foundation for sustainable growth."
  }
];

export { teamMembers };

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
          <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full" />
        </div>

        {/* Desktop Pyramid Layout */}
        <div className="hidden lg:flex flex-col items-center gap-10 tm-grid">
          {/* Row 1 - 1 image */}
          <div className="flex justify-center">
            <Link to={`/team/${teamMembers[0].id}`} className="tm-card group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 w-[280px] block">
              <div className="aspect-[3/4] overflow-hidden bg-gray-50">
                <img loading="lazy" src={teamMembers[0].image} alt={teamMembers[0].name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 text-center border-t-4 border-brand-green">
                <h3 className="text-brand-green font-bold text-lg uppercase tracking-wide mb-1">{teamMembers[0].name}</h3>
                <div className="flex items-center justify-center mb-2">
                  <div className="w-2 h-2 bg-brand-green rotate-45"></div>
                </div>
                <p className="text-gray-500 text-sm uppercase tracking-widest text-center">{teamMembers[0].role}</p>
              </div>
            </Link>
          </div>

          {/* Row 2 - 2 images */}
          <div className="flex justify-center gap-8">
            {teamMembers.slice(1, 3).map((member, idx) => (
              <Link to={`/team/${member.id}`} key={idx} className="tm-card group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 w-[280px] block">
                <div className="aspect-[3/4] overflow-hidden bg-gray-50">
                  <img loading="lazy" src={member.image} alt={member.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6 text-center border-t-4 border-brand-green">
                  <h3 className="text-brand-green font-bold text-lg uppercase tracking-wide mb-1">{member.name}</h3>
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-2 h-2 bg-brand-green rotate-45"></div>
                  </div>
                  <p className="text-gray-500 text-sm uppercase tracking-widest text-center">{member.role}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Row 3 - 3 images */}
          <div className="flex justify-center gap-8">
            {teamMembers.slice(3, 6).map((member, idx) => (
              <Link to={`/team/${member.id}`} key={idx} className="tm-card group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 w-[280px] block">
                <div className="aspect-[3/4] overflow-hidden bg-gray-50">
                  <img loading="lazy" src={member.image} alt={member.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6 text-center border-t-4 border-brand-green">
                  <h3 className="text-brand-green font-bold text-lg uppercase tracking-wide mb-1">{member.name}</h3>
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-2 h-2 bg-brand-green rotate-45"></div>
                  </div>
                  <p className="text-gray-500 text-sm uppercase tracking-widest text-center">{member.role}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Row 4 - 4 images */}
          <div className="flex justify-center gap-8">
            {teamMembers.slice(6, 10).map((member, idx) => (
              <Link to={`/team/${member.id}`} key={idx} className="tm-card group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 w-[280px] block">
                <div className="aspect-[3/4] overflow-hidden bg-gray-50">
                  <img loading="lazy" src={member.image} alt={member.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6 text-center border-t-4 border-brand-green">
                  <h3 className="text-brand-green font-bold text-lg uppercase tracking-wide mb-1">{member.name}</h3>
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-2 h-2 bg-brand-green rotate-45"></div>
                  </div>
                  <p className="text-gray-500 text-sm uppercase tracking-widest text-center">{member.role}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Tablet - 2 columns */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-6">
          {teamMembers.map((member, idx) => (
            <Link to={`/team/${member.id}`} key={idx} className="tm-card group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 block">
              <div className="aspect-[3/4] overflow-hidden bg-gray-50">
                <img loading="lazy" src={member.image} alt={member.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 text-center border-t-4 border-brand-green">
                <h3 className="text-brand-green font-bold text-lg uppercase tracking-wide mb-1">{member.name}</h3>
                <div className="flex items-center justify-center mb-2">
                  <div className="w-2 h-2 bg-brand-green rotate-45"></div>
                </div>
                <p className="text-gray-500 text-sm uppercase tracking-widest text-center">{member.role}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile - 1 column */}
        <div className="grid md:hidden grid-cols-1 gap-6">
          {teamMembers.map((member, idx) => (
            <Link to={`/team/${member.id}`} key={idx} className="tm-card group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 block">
              <div className="aspect-[3/4] overflow-hidden bg-gray-50">
                <img loading="lazy" src={member.image} alt={member.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 text-center border-t-4 border-brand-green">
                <h3 className="text-brand-green font-bold text-lg uppercase tracking-wide mb-1">{member.name}</h3>
                <div className="flex items-center justify-center mb-2">
                  <div className="w-2 h-2 bg-brand-green rotate-45"></div>
                </div>
                <p className="text-gray-500 text-sm uppercase tracking-widest text-center">{member.role}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
