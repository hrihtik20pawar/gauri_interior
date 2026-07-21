import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Layout } from 'lucide-react';
import { useEffect } from 'react';
import { projects } from '../../data/projects/projects';

export default function WorkDetail() {
  const { id } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const project = projects.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-white pb-24">

      <div className="relative h-[70vh] min-h-[600px] w-full">
        <img 
          loading="lazy"
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-[1500px] mx-auto w-full px-6 md:px-12 lg:px-24 pb-16">
            <Link to="/#projects" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6 font-medium text-sm bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <ArrowLeft className="w-4 h-4" /> Back to Works
            </Link>
            <div className="flex gap-3 mb-4">
              <span className="bg-brand-orange text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase">{project.category}</span>
              <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border border-white/20">{project.type}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-white leading-tight mb-6 drop-shadow-lg">{project.title}</h1>
            
            <div className="flex flex-wrap gap-8 text-white/90">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-orange" />
                <span className="font-medium">{project.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-brand-orange" />
                <span className="font-medium">Completed in {project.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <Layout className="w-5 h-5 text-brand-orange" />
                <span className="font-medium">{project.type}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-24 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-8 space-y-16">
            <div>
              <h2 className="text-3xl font-serif text-brand-green mb-6">Project Overview</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {project.description}
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our approach combined modern aesthetics with highly functional layouts. We utilized premium materials to ensure durability while maintaining a luxurious feel. The spaces were optimized for natural light, creating an inviting and inspiring environment.
              </p>
            </div>

            {project.gallery.length > 0 && (
              <div>
                <h2 className="text-3xl font-serif text-brand-green mb-6">Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.gallery.map((img, i) => (
                    <img key={i} loading="lazy" src={img} alt={`${project.title} - view ${i + 1}`} className="w-full h-80 object-cover rounded-2xl shadow-md" />
                  ))}
                </div>
              </div>
            )}

            <div>
              <h2 className="text-3xl font-serif text-brand-green mb-6">More Views</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[project.image, ...project.gallery].slice(0, 6).map((img, i) => (
                  <img key={i} loading="lazy" src={img} alt={`${project.title} - additional view ${i + 1}`} className="w-full h-48 object-cover rounded-xl shadow-sm hover:shadow-md transition-shadow" />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 sticky top-24">
              <h3 className="text-2xl font-serif text-brand-green mb-6">Project Details</h3>
              <ul className="space-y-6">
                <li className="border-b border-gray-200 pb-4">
                  <p className="text-sm text-gray-500 mb-1">Client</p>
                  <p className="font-semibold text-gray-900">Private Residence</p>
                </li>
                <li className="border-b border-gray-200 pb-4">
                  <p className="text-sm text-gray-500 mb-1">Services Provided</p>
                  <ul className="mt-2 space-y-2">
                    {["Interior Design", "Custom Furniture", "Lighting Design", "Project Management"].map((s, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700 font-medium text-sm">
                        <span className="w-2 h-2 rounded-full bg-brand-teal"></span> {s}
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="pb-2">
                  <p className="text-sm text-gray-500 mb-1">Duration</p>
                  <p className="font-semibold text-gray-900">4 Months</p>
                </li>
              </ul>
              
              <div className="mt-10 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Interested in a similar project?</h4>
                <a href="#contact-us" className="block w-full bg-brand-teal text-white text-center py-3.5 rounded-xl font-medium hover:bg-teal-900 transition-colors shadow-lg shadow-teal-900/20">
                  Discuss Your Project
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
