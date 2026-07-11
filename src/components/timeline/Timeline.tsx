import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const timelineSteps = [
  {
    num: "01",
    title: "Gauri Group Founded",
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
    image: "/images/WEBSITE/1) OFFICES/6) Hemco Pharma - Office Work/HEMCO PHARMA FINAL PHOTO/HEMCO PHARMA (11).avif",
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

  useGSAP(() => {
    gsap.fromTo('.timeline-header',
      { y: 40 },
      {
        y: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out',
        scrollTrigger: { trigger: container.current, start: 'top 80%' }
      },
    );

    const items = gsap.utils.toArray('.timeline-card-item') as HTMLElement[];
    items.forEach((item) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });

      tl.fromTo(item.querySelector('.timeline-node'),
        { scale: 0 },
        { scale: 1, duration: 0.5, ease: 'back.out(1.7)' }
      );

      tl.fromTo(item.querySelector('.timeline-card'),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
        "-=0.3"
      );

      tl.fromTo(item.querySelectorAll('.timeline-bullet'),
        { x: -10, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: 'power2.out' },
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

        {/* Timeline Cards */}
        <div className="max-w-5xl mx-auto space-y-8 md:space-y-12">
          {timelineSteps.map((step, index) => (
            <div key={step.num} className="timeline-card-item relative flex items-start gap-6 md:gap-10">
              
              {/* Left Node */}
              <div className="timeline-node flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-white border-4 border-brand-orange shadow-[0_0_20px_rgba(234,91,35,0.3)] flex items-center justify-center z-10">
                <span className="text-brand-orange font-bold text-lg md:text-xl">{step.num}</span>
              </div>

              {/* Card */}
              <div className="timeline-card flex-1 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)] transition-shadow duration-300">
                
                {/* Image */}
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <span className="absolute bottom-4 right-4 bg-brand-orange text-white text-sm font-bold px-3 py-1 rounded-full">{step.year}</span>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-serif text-brand-green mb-6">{step.title}</h3>
                  
                  <ul className="space-y-4">
                    {step.items.map((item, i) => (
                      <li key={i} className="timeline-bullet flex items-center justify-end gap-3 text-gray-700 font-medium text-sm md:text-base">
                        <span>{item}</span>
                        <span className="w-2.5 h-2.5 rounded-full bg-brand-orange flex-shrink-0"></span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
