import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects/projects';

gsap.registerPlugin(ScrollTrigger);

export default function Works() {
  const container = useRef<HTMLDivElement>(null);
  const featuredProjects = projects.filter(p => p.featured).slice(0, 6);

  useGSAP(() => {
    gsap.fromTo('.work-item',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power2.out',
        scrollTrigger: { trigger: container.current, start: 'top 75%' } },
    );
  }, { scope: container });

  return (
    <section ref={container} className="py-24 px-6 md:px-12 lg:px-24 bg-white" id="projects">
      <div className="max-w-[1500px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-4">Our Portfolio</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-green mb-6">Featured Works</h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {featuredProjects.map((project) => (
            <Link to={`/works/${project.id}`} key={project.id} className="work-item group relative overflow-hidden rounded-2xl aspect-[4/3] block">
              <img 
                loading="lazy"
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green/90 via-brand-green/20 to-transparent sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 sm:p-8">
                <p className="text-brand-orange font-medium text-sm mb-2 sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-500">{project.category}</p>
                <h3 className="text-white text-lg sm:text-xl font-serif sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-500 delay-75">{project.title}</h3>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/projects" className="inline-flex items-center gap-2 bg-brand-teal text-white px-8 py-3.5 rounded font-medium hover:bg-teal-900 transition-colors shadow-lg shadow-teal-900/20">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
