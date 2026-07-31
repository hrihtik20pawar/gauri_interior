import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BrandName from '../brand-name/BrandName';

gsap.registerPlugin(ScrollTrigger);
const timelineSteps = [
  {
    num: "01",
    title: "Gauri Group Founded",
    highlight: "Gauri Group",
    image: "/images/Final_Images/Bharat Residential/WhatsApp Image 2026-07-17 at 15.55.53.avif",
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
    image: "/images/timeline/timeline_01.avif",
    items: [
      "Slowly and steadily.",
      "We evolved & started delivering complete Turnkey Projects.",
      "Expanded our expertise in interior execution.",
      "Built a reputation for quality work."
    ],
    year: "1993-2011"
  },
  {
    num: "03",
    title: "Gauri Interior Pvt. Ltd.",
    highlight: "Gauri Interior Pvt. Ltd.",
    image: "/images/Final_Images/CRAVIN CAFE/WhatsApp Image 2026-07-18 at 14.38.40.avif",
    items: [
      "With the vision of our current MD & CEO Mr. Shilkumar L. Vishwakarma.",
      "We launched our 1st venture.",
      "Gauri Interior Pvt. Ltd."
    ],
    year: "2012"
  },
  {
    num: "04",
    title: "Nikhil Enterprise",
    highlight: "Nikhil Enterprise",
    image: "/images/Final_Images/BMR ADVISOR OFFICE/WhatsApp Image 2026-07-18 at 11.13.08.avif",
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
    image: "/images/Final_Images/6. PENINSULA/WhatsApp Image 2026-07-18 at 11.48.05.avif",
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
    image: "/images/Final_Images/PISPL BPO/WhatsApp Image 2026-07-18 at 11.27.48.avif",
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
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = container.current;
    if (!el || animated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            setAnimated(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animated]);

  useGSAP(() => {
    if (!animated) return;
    const isMobile = window.innerWidth < 768;

    gsap.fromTo('.timeline-header',
      { y: isMobile ? 20 : 40, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out',
      },
    );

    if (!isMobile && lineRef.current) {
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
    }

    const items = gsap.utils.toArray('.timeline-item') as HTMLElement[];

    items.forEach((item, i) => {
      const isEven = i % 2 === 0;

      const iconEl = item.querySelector('.timeline-icon-container');
      const cardEl = item.querySelector('.timeline-card');
      const listItems = item.querySelectorAll('.timeline-list-item');

      if (iconEl) {
        gsap.fromTo(iconEl,
          { scale: 0 },
          {
            scale: 1, duration: 0.5, ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: item,
              start: isMobile ? 'top 90%' : 'top 75%',
              once: true
            },
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
      }

      if (cardEl) {
        gsap.fromTo(cardEl,
          {
            x: isMobile ? 0 : (isEven ? -50 : 50),
            y: isMobile ? 30 : 0,
            scale: 0.95,
            opacity: 0
          },
          {
            x: 0, y: 0, scale: 1, opacity: 1,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: isMobile ? 'top 90%' : 'top 75%',
              once: true
            }
          }
        );
      }

      if (listItems.length > 0) {
        gsap.fromTo(listItems,
          { x: isMobile ? 0 : (isEven ? -10 : 10), opacity: 0 },
          {
            x: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: isMobile ? 'top 90%' : 'top 75%',
              once: true
            }
          }
        );
      }
    });

  }, { scope: container, dependencies: [animated] });

  return (
    <section ref={container} className="py-10 md:py-24 lg:py-32 px-5 md:px-12 lg:px-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden" id="process">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-8 md:mb-12 lg:mb-24 max-w-3xl mx-auto">
          <p className="timeline-header text-brand-orange font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-3 md:mb-4">Our Journey</p>
          <h2 className="timeline-header text-xl sm:text-2xl md:text-5xl lg:text-6xl xl:text-7xl font-sans text-brand-green leading-[1.1] mb-3 md:mb-6 uppercase">
            The Story of <br className="hidden sm:block" /> <BrandName as="span" size="lg" className="text-brand-teal font-sans tracking-wide">GAURI Group</BrandName>
          </h2>
          <p className="timeline-header text-gray-500 text-sm sm:text-base md:text-xl leading-relaxed font-medium">
            From humble beginnings to becoming a trusted name in interior design and modular manufacturing, our journey is defined by passion, precision, and growth.
          </p>
        </div>

        <div className="timeline-wrapper relative max-w-5xl mx-auto">

          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 -translate-x-1/2 rounded-full"></div>
          <div ref={lineRef} className="hidden md:block absolute left-1/2 top-0 w-[3px] bg-gradient-to-b from-brand-orange via-teal-600 to-brand-green -translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(234,91,35,0.4)]"></div>

          <div className="md:hidden absolute left-[18px] top-0 bottom-0 w-[2px] bg-gray-200 rounded-full"></div>
          <div className="md:hidden absolute left-[18px] top-0 bottom-0 w-[3px] bg-gradient-to-b from-brand-orange via-teal-600 to-brand-green rounded-full opacity-30"></div>


          <div className="flex flex-col gap-10 md:gap-32 relative z-10">
            {timelineSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={step.num} className={`timeline-item relative flex flex-col md:flex-row items-center w-full ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                  <div className="hidden md:block w-1/2 px-12 flex items-center justify-center">
                    <span className="text-7xl lg:text-8xl font-sans text-brand-orange/20 font-bold whitespace-nowrap">
                      {step.year}
                    </span>
                  </div>

                  <div className="timeline-icon-container absolute left-[10px] md:left-8 lg:left-1/2 -translate-x-1/2 flex items-center justify-center z-20 group">
                  </div>

                  <div className={`w-full md:w-1/2 pl-12 sm:pl-14 md:pl-0 md:px-12 ${isEven ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                    <div className="timeline-card bg-white/60 backdrop-blur-md rounded-[1.25rem] md:rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group overflow-hidden">

                      <div className="relative h-36 sm:h-40 md:h-56 overflow-hidden">
                        <img
                          loading="lazy"
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>

                      <div className="p-4 sm:p-5 md:p-10">
                        <span className="inline-block text-3xl sm:text-4xl md:text-6xl font-sans text-gray-100 font-bold mb-2 md:mb-4 -mt-2 md:-mt-4 -ml-1 md:-ml-2 group-hover:text-brand-orange/10 transition-colors duration-300">
                          {step.num}
                        </span>
                        <h3 className="text-lg sm:text-xl md:text-3xl font-sans text-brand-green mb-3 md:mb-6">
                          <BrandName as="span" size="lg">{step.title}</BrandName>
                        </h3>
                        <ul className="space-y-1.5 md:space-y-3 flex flex-col items-start text-left">
                          {step.items.map((item, i) => (
                            <li key={i} className="timeline-list-item flex items-center gap-2 md:gap-3 text-gray-600 font-medium text-xs sm:text-[13px] md:text-[15px]">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0"></span>
                              <BrandName as="span">{item}</BrandName>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}

            <div className="timeline-item relative flex flex-col items-center w-full">
              <div className="w-full flex justify-center px-4 md:px-12">
                <div className="timeline-card bg-brand-green/5 backdrop-blur-md p-4 sm:p-5 md:p-10 rounded-[1.25rem] md:rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-brand-green/10 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group w-full max-w-lg">
                  <h3 className="text-lg sm:text-xl md:text-3xl font-sans text-brand-green mb-3 md:mb-6 text-center">Where We Are Now</h3>
                  <ul className="space-y-1.5 md:space-y-3 flex flex-col items-start text-left ml-3 md:ml-4">
                    <li className="timeline-list-item flex items-center gap-2 md:gap-3 text-gray-600 font-medium text-xs sm:text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                      Over 100+ successful projects delivered
                    </li>
                    <li className="timeline-list-item flex items-center gap-2 md:gap-3 text-gray-600 font-medium text-xs sm:text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                      Trusted by top brands and families
                    </li>
                    <li className="timeline-list-item flex items-center gap-2 md:gap-3 text-gray-600 font-medium text-xs sm:text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                      Continuing to innovate in spatial design
                    </li>
                    <li className="timeline-list-item flex items-center gap-2 md:gap-3 text-gray-600 font-medium text-xs sm:text-sm">
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
