import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const timelineSteps = [
  {
    num: "01",
    title: "Gauri Group Founded",
    highlight: "Gauri Group",
    image: "/images/WEBSITE/3) RESIDENCIAL/1) MAZDA/MAZDA FINAL PHOTO/MAZDA FINAL PHOTO (125).avif",
    items: [
      "Our journey began in 1993.",
      "Mr. Lalbachan Vishwakarma entered the Furniture Industry.",
      "Started with small projects.",
      "Built the foundation of Gauri Group."
    ],
    year: "1993"
  },
  {
    num: "02",
    title: "The Beginning",
    highlight: "",
    image: "/images/WEBSITE/1) OFFICES/6) Hemco Pharma - Office Work/HEMCO PHARMA FINAL PHOTO/HEMCO PHARMA (11).avif",
    items: [
      "Slowly and steadily.",
      " We evolved & started delivering complete Turnkey Projects.",
      "Expanded our expertise in interior execution.",
      "Built a reputation for quality work."
    ],
    year: "1993-2011"
  },
  {
    num: "03",
    title: "Gauri Interior Pvt. Ltd.",
    highlight: "Gauri Interior Pvt. Ltd.",
    image: "/images/WEBSITE/2) HOTEL & RESTAURANT/1) CRAVIN CAFE/CRAVIN CAFE FINAL PHOTO/Cravin Cafe (32).avif",
    items: [
      "With the vision of our current MD & CEO Mr. Shilkumar L. Vishwakarma.",
      "We launched our 1st venture.",
      "Gauri Interior Pvt. Ltd."
    ],
    year: "2012"
  },
  {
    num: "04",
    title: "Nikhil Enterprice",
    highlight: "Nikhil Enterprice",
    image: "/images/WEBSITE/4) JEWELLARY SHOPE/1) KRA/KRA (1).avif",
    items: [
      "Expanded further with our second venture.",
      "NIKHIL ENTERPRISES.",
      "Dealing in Hardware, Plywoods & allied products."
    ],
    year: "2017"
  },
  {
    num: "05",
    title: "GAURI'S KITCHEN",
    highlight: "GAURI'S KITCHEN",
    image: "/images/WEBSITE/9) DISPLAY UNIT/1) Big Mishra/BIG MISHRA FINAL PHOTO/BIG MISHRA (1).avif",
    items: [
      "We brought comfort and style to every home.",
      "Launched GAURI'S KITCHEN.",
      "Dealing in all types of Kitchen & Modular Furniture.",
      "Established in 2018."
    ],
    year: "2018"
  },
  {
    num: "06",
    title: "Gauri Designing Studio",
    highlight: "Gauri Designing Studio",
    image: "/images/WEBSITE/1) OFFICES/4) PISPL CALL CENTER/PISPL CALL CENTER FINAL PHOTO/IMG_0335.avif",
    items: [
      "Upcoming venture.",
      "GAURI'S DESIGNING STUDIO.",
      "Dedicated to Designing Consultancy.",
      "Complete operations to commence from 2027."
    ],
    year: "2027"
  }
];

export default function Timeline() {
  const container = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo('.timeline-header',
      { y: 40 },
      {
        y: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out',
        scrollTrigger: { trigger: container.current, start: 'top 80%' }
      },
    );

    gsap.fromTo(lineRef.current,
      { height: 0 },
      {
        height: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: '.timeline-wrapper',
          start: 'top 50%',
          end: 'bottom 50%',
          scrub: 1
        }
      }
    );

    const items = gsap.utils.toArray('.timeline-item') as HTMLElement[];

    items.forEach((item, i) => {
      const isEven = i % 2 === 0;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      });

      tl.fromTo(item.querySelector('.timeline-icon-container'),
        { scale: 0 },
        {
          scale: 1, duration: 0.5, ease: 'back.out(1.7)',
          onComplete: () => {
            const icon = item.querySelector('.timeline-year-icon');
            if (icon) {
              gsap.fromTo(icon,
                { boxShadow: '0 0 0px rgba(234,91,35,0)' },
                {
                  boxShadow: '0 0 20px rgba(234,91,35,0.8), 0 0 40px rgba(234,91,35,0.4)',
                  duration: 0.6,
                  yoyo: true,
                  repeat: 1,
                  ease: 'power2.inOut'
                }
              );
            }
          }
        }
      );

      tl.fromTo(item.querySelector('.timeline-card'),
        {
          x: isEven ? -50 : 50,
          scale: 0.95
        },
        {
          x: 0,
          scale: 1,
          duration: 0.7,
          ease: 'power3.out'
        },
        "-=0.3"
      );

      tl.fromTo(item.querySelectorAll('.timeline-list-item'),
        { x: isEven ? -10 : 10 },
        { x: 0, duration: 0.4, stagger: 0.1, ease: 'power2.out' },
        "-=0.4"
      );
    });

  }, { scope: container });

  return (
    <section ref={container} className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden" id="process">
      <div className="max-w-7xl mx-auto">

        {/* Header section */}
        <div className="text-center mb-12 md:mb-24 max-w-3xl mx-auto">
          <p className="timeline-header text-brand-orange font-bold tracking-[0.2em] uppercase text-sm mb-4">Our Journey</p>
          <h2 className="timeline-header text-5xl md:text-6xl lg:text-7xl font-serif text-brand-green leading-[1.1] mb-6">
            The Story of <br /> <span className="text-teal-800 italic font-light">Gauri Group</span>
          </h2>
          <p className="timeline-header text-gray-500 text-xl leading-relaxed font-medium">
            From humble beginnings to becoming a trusted name in interior design and modular manufacturing, our journey is defined by passion, precision, and growth.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="timeline-wrapper relative max-w-5xl mx-auto">

          {/* Central Line - Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 -translate-x-1/2 rounded-full"></div>
          {/* Progress Line - Desktop */}
          <div ref={lineRef} className="hidden md:block absolute left-1/2 top-0 w-[3px] bg-gradient-to-b from-brand-orange via-teal-600 to-brand-green -translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(234,91,35,0.4)]"></div>

          {/* Central Line - Mobile */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-[2px] bg-gray-200 rounded-full"></div>
          {/* Progress Line - Mobile */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-[3px] bg-gradient-to-b from-brand-orange via-teal-600 to-brand-green rounded-full opacity-30"></div>


          <div className="flex flex-col gap-16 md:gap-32 relative z-10">
            {timelineSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={step.num} className={`timeline-item relative flex flex-col md:flex-row items-center w-full ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden md:block w-1/2 px-12"></div>

                  {/* Center Icon/Node */}
                  <div className="timeline-icon-container absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20 group">
                    <div className="timeline-year-icon bg-brand-orange flex items-center justify-center text-white font-bold text-xs tracking-wide whitespace-nowrap px-4 py-2.5 rounded-full shadow-[0_0_20px_rgba(234,91,35,0.5)] border-4 border-white hover:border-brand-orange transition-colors duration-300">
                      {step.year}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 md:px-12 ${isEven ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                    <div className="timeline-card bg-white/60 backdrop-blur-md rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group overflow-hidden">
                      
                      {/* Project Image */}
                      <div className="relative h-48 md:h-56 overflow-hidden">
                        <img 
                          src={step.image} 
                          alt={step.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>

                      {/* Text Content */}
                      <div className="p-6 md:p-10">
                        <span className="inline-block text-6xl font-serif text-gray-100 font-bold mb-4 -mt-4 -ml-2 group-hover:text-brand-orange/10 transition-colors duration-300">
                          {step.num}
                        </span>
                        <h3 className="text-3xl font-serif text-brand-green mb-6">
                          {step.highlight ? (
                            <>
                              <span className="text-brand-orange font-sans font-semibold tracking-wider uppercase">{step.highlight}</span>
                              {step.title.replace(step.highlight, '')}
                            </>
                          ) : (
                            step.title
                          )}
                        </h3>
                        <ul className="space-y-3 flex flex-col items-start text-left">
                          {step.items.map((item, i) => (
                            <li key={i} className="timeline-list-item flex items-center gap-3 text-gray-600 font-medium text-[15px]">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}

            {/* Where We Are Now - Centered End Card */}
            <div className="timeline-item relative flex flex-col items-center w-full">
              <div className="w-full pl-16 md:pl-0 md:flex md:justify-center md:px-12">
                <div className="timeline-card bg-brand-green/5 backdrop-blur-md p-6 md:p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-brand-green/10 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group md:max-w-lg">
                  <h3 className="text-3xl font-serif text-brand-green mb-6 text-center">Where We Are Now</h3>
                  <ul className="space-y-3 flex flex-col items-start text-left">
                    <li className="timeline-list-item flex items-center gap-3 text-gray-600 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                      Over 100+ successful projects delivered
                    </li>
                    <li className="timeline-list-item flex items-center gap-3 text-gray-600 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                      Trusted by top brands and families
                    </li>
                    <li className="timeline-list-item flex items-center gap-3 text-gray-600 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                      Continuing to innovate in spatial design
                    </li>
                    <li className="timeline-list-item flex items-center gap-3 text-gray-600 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                      Building sustainable, functional, and beautiful environments
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
