import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight, X, Maximize2, Search, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { galleryImages, galleryCategories, GalleryImage } from '../../data/gallery/gallery';
import Logo from '../../components/logo/Logo';

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>(galleryImages);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let result = galleryImages;

    if (activeCategory !== "All") {
      result = result.filter(img => img.category === activeCategory);
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(img =>
        img.title.toLowerCase().includes(q) ||
        img.category.toLowerCase().includes(q) ||
        (img.location && img.location.toLowerCase().includes(q)) ||
        (img.description && img.description.toLowerCase().includes(q))
      );
    }

    setFilteredImages(result);
  }, [activeCategory, searchQuery]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroRef.current) {
        gsap.fromTo('.gallery-hero-text',
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' }
        );
      }

      if (galleryRef.current && galleryRef.current.children.length > 0) {
        gsap.fromTo(galleryRef.current.children,
          { y: 40, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.05, ease: 'power2.out', clearProps: 'all' }
        );

        const items = gsap.utils.toArray('.gallery-item');
        items.forEach((item: any) => {
          gsap.fromTo(item,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
              }
            }
          );
        });
      }
    });

    return () => ctx.revert();
  }, [filteredImages]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  const handleItemClick = (item: GalleryImage, index: number) => {
    if (item.type === "project" && item.slug) {
      navigate(`/projects/${item.slug}`);
    } else {
      openLightbox(index);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
      if (e.key === 'ArrowLeft') setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredImages.length]);

  const galleryOnlyImages = lightboxIndex !== null ? filteredImages.filter(i => i.type !== "project") : [];

  const getLightboxIndex = () => {
    if (lightboxIndex === null) return null;
    const item = filteredImages[lightboxIndex];
    if (!item || item.type === "project") return null;
    return galleryOnlyImages.findIndex(i => i.id === item.id);
  };

  const lightboxGalleryIndex = getLightboxIndex();

  return (
    <div className="min-h-screen bg-[#faf9f6] pb-24">
      {/* Hero Section */}
      <div ref={heroRef} className="pt-32 pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1500px] mx-auto text-center">
          <p className="gallery-hero-text text-brand-orange font-bold tracking-wider uppercase text-sm mb-4">Curated Portfolio</p>
          <h1 className="gallery-hero-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-brand-green mb-6">Our Gallery</h1>
          <p className="gallery-hero-text text-gray-600 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            A visual journey through our finest projects, showcasing the intersection of premium materials, flawless execution, and architectural elegance.
          </p>

          {/* Search */}
          <div className="gallery-hero-text max-w-md mx-auto mb-10">
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects, locations, styles..."
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-teal/50 transition-all text-gray-700 shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>

          {/* Filters */}
          <div className="gallery-hero-text flex flex-wrap justify-center gap-3">
            {galleryCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-brand-teal text-white shadow-lg shadow-teal-900/20 scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="px-4 md:px-8 lg:px-16 max-w-[1800px] mx-auto">
        <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[400px]">
          {filteredImages.map((item, index) => {
            const showStoryBlock = (index + 1) % 7 === 0;
            const isProject = item.type === "project";

            return (
              <React.Fragment key={item.id}>
                {/* Image Item */}
                <div
                  className={`gallery-item group relative overflow-hidden rounded-[2rem] cursor-pointer bg-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 ${item.span || ''}`}
                  onClick={() => handleItemClick(item, index)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-green/90 via-brand-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="inline-block px-3 py-1 bg-brand-orange/90 backdrop-blur-sm text-white text-xs font-semibold tracking-wider uppercase rounded-full mb-3">
                        {item.category}
                      </span>
                      <h3 className="text-white text-2xl font-serif mb-2">{item.title}</h3>

                      {isProject ? (
                        <div className="flex flex-col gap-2 mt-3">
                          {item.location && (
                            <div className="flex items-center gap-2 text-white/80 font-medium text-sm">
                              <MapPin className="w-4 h-4" /> {item.location}
                            </div>
                          )}
                          {item.year && (
                            <div className="flex items-center gap-2 text-white/80 font-medium text-sm">
                              <Calendar className="w-4 h-4" /> {item.year}
                            </div>
                          )}
                          <div className="flex items-center gap-2 text-white font-medium text-sm mt-2">
                            <ExternalLink className="w-4 h-4" /> View Project Details
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 text-white/80 font-medium text-sm mt-4">
                          <Maximize2 className="w-4 h-4" /> View Fullscreen
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Project badge */}
                  {isProject && (
                    <div className="absolute top-4 right-4 bg-brand-orange text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase shadow-lg z-10">
                      Featured
                    </div>
                  )}
                </div>

                {/* Storytelling Block */}
                {showStoryBlock && (
                  <div className="gallery-item col-span-1 md:col-span-2 lg:col-span-2 row-span-1 bg-brand-green rounded-[2rem] p-8 md:p-12 flex flex-col justify-center relative overflow-hidden text-white shadow-xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <Logo isDark={true} size="lg" className="h-16 w-auto mb-8 opacity-80" />
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif mb-4 leading-tight">
                      "Design is not just what it looks like and feels like. Design is how it works."
                    </h3>
                    <p className="text-white/60 font-medium tracking-wide uppercase text-sm">Our Philosophy</p>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-32 text-gray-500">
            <p className="text-xl">No projects found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && filteredImages[lightboxIndex]?.type !== "project" && (
        <div className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="absolute top-6 left-6 text-white z-50 flex flex-col gap-1">
            <span className="text-white/50 text-sm font-medium tracking-widest uppercase">
              {lightboxIndex + 1} / {filteredImages.length}
            </span>
            <h3 className="text-xl font-serif">{filteredImages[lightboxIndex].title}</h3>
          </div>

          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-4 rounded-full transition-colors z-50"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-4 rounded-full transition-colors z-50"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="w-full h-full p-4 md:p-12 lg:p-24 flex items-center justify-center" onClick={closeLightbox}>
            <img
              src={filteredImages[lightboxIndex].image}
              alt={filteredImages[lightboxIndex].title}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
