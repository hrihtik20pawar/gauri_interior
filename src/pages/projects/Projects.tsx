import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { Search, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { projects, projectCategories, Project } from '../../data/projects/projects';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let result = projects;
    
    // Filter by category
    if (activeCategory !== "All Projects") {
      result = result.filter(p => 
        p.category === activeCategory || p.type === activeCategory
      );
    }
    
    // Filter by search
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.title.toLowerCase().includes(q) || 
        p.location.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.type.toLowerCase().includes(q)
      );
    }

    setFilteredProjects(result);
  }, [activeCategory, searchQuery]);

  // Animate on filter change
  useEffect(() => {
    if (!galleryRef.current || galleryRef.current.children.length === 0) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(galleryRef.current!.children, 
        { y: 30, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out', clearProps: 'all' }
      );
    }, galleryRef);
    return () => ctx.revert();
  }, [filteredProjects]);

  return (
    <div className="pt-28 pb-20 px-6 md:px-12 lg:px-24 min-h-screen bg-white">
      <div className="max-w-[1500px] mx-auto">
        

        <div className="text-center mb-16">
          <p className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-4">Portfolio</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-green mb-6">Our Works</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our curated selection of premium interior design and turnkey projects.
          </p>
        </div>

        <div className="mb-12 space-y-8">
          <div className="relative max-w-md mx-auto">
            <input 
              type="text" 
              placeholder="Search projects, locations, styles..." 
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-teal/50 transition-all text-gray-700"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {projectCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-brand-teal text-white shadow-lg shadow-teal-900/20 scale-105'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <Link 
                to={`/projects/${project.slug}`} 
                key={project.id}
                className="group block relative overflow-hidden rounded-[2rem] bg-gray-50 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    loading="lazy"
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-semibold text-brand-teal uppercase tracking-wider shadow-sm">
                    {project.category}
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-serif text-gray-900 mb-3 group-hover:text-brand-teal transition-colors">{project.title}</h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-6">{project.description}</p>
                  
                  <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                    <div className="flex items-center gap-4 text-xs font-medium text-gray-500">
                      <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {project.location}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {project.year}</span>
                    </div>
                    <span className="w-10 h-10 rounded-full bg-brand-orange text-white flex items-center justify-center transform group-hover:-rotate-45 transition-transform duration-300 shadow-md">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full py-20 text-center text-gray-500">
              No projects found matching your criteria.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
