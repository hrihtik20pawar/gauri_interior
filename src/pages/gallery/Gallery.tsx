import React, { useEffect, useState, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import gsap from 'gsap';
import { ChevronLeft, ChevronRight, X, Maximize2, Search } from 'lucide-react';
import { galleryImages, galleryCategories, GalleryImage } from '../../data/gallery/gallery';
import Logo from '../../components/logo/Logo';
import { useLenis } from '../../App';
import { useSearchParams } from 'react-router-dom';

const heroSlides = [
  '/images/Final_Images/HomeScreen/WhatsApp Image 2026-07-17 at 13.14.53.avif',
  '/images/Final_Images/HomeScreen/WhatsApp Image 2026-07-17 at 13.15.06.avif',
  '/images/Final_Images/HomeScreen/WhatsApp Image 2026-07-17 at 13.15.29.avif',
];

export default function Gallery() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || "All";
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>(galleryImages);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();
  const [heroSlide, setHeroSlide] = useState(0);


  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Gallery | ${'Gauri Interior Pvt. Ltd.'}`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Explore our curated portfolio of interior design projects - hotels, offices, residences, healthcare spaces, and more by Gauri Interior in Mumbai.');
  }, []);

  // Update activeCategory when URL search params change
  useEffect(() => {
    const category = searchParams.get('category');
    if (category && galleryCategories.includes(category)) {
      setActiveCategory(category);
    }
  }, [searchParams]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    return () => {
      if (lightboxIndex !== null) {
        document.body.style.overflow = 'auto';
        lenis?.start();
      }
    };
  }, [lightboxIndex, lenis]);

  const heroTouchStartX = useRef<number>(0);

  const handleHeroTouchStart = useCallback((e: React.TouchEvent) => {
    heroTouchStartX.current = e.touches[0].clientX;
  }, []);

  const handleHeroTouchEnd = useCallback((e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - heroTouchStartX.current;

    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        setHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
      } else {
        setHeroSlide((prev) => (prev + 1) % heroSlides.length);
      }
    }
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
        img.category.toLowerCase().includes(q)
      );
    }

    setFilteredImages(result);
  }, [activeCategory, searchQuery]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroRef.current) {
        gsap.fromTo('.gallery-hero-text',
          { y: 50 },
          { y: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }
        );
      }

      if (galleryRef.current && galleryRef.current.children.length > 0) {
        gsap.fromTo(galleryRef.current.children,
          { y: 40, scale: 0.95 },
          { y: 0, scale: 1, duration: 0.8, stagger: 0.05, ease: 'power2.out', clearProps: 'all' }
        );
      }
    });

    return () => ctx.revert();
  }, [filteredImages]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
    lenis?.stop();
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = 'auto';
    lenis?.start();
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) => prev !== null ? (prev + 1) % filteredImages.length : null);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) => prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') setLightboxIndex((prev) => prev !== null ? (prev + 1) % filteredImages.length : null);
      if (e.key === 'ArrowLeft') setLightboxIndex((prev) => prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredImages.length]);

  // Touch/swipe support for lightbox
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (lightboxIndex === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const deltaX = touchEndX - touchStartX.current;
    const deltaY = touchEndY - touchStartY.current;

    // Only trigger if horizontal swipe is dominant (not vertical scroll)
    if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
      if (deltaX > 0) {
        // Swipe right - previous image
        setLightboxIndex((prev) => prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : null);
      } else {
        // Swipe left - next image
        setLightboxIndex((prev) => prev !== null ? (prev + 1) % filteredImages.length : null);
      }
    }
  }, [lightboxIndex, filteredImages.length]);

  return (
    <div className="min-h-screen bg-[#faf9f6] pb-24 overflow-x-hidden">
      {/* Mobile Hero - extends behind navbar */}
      <div className="sm:hidden relative w-full h-[70vh] min-h-[400px] overflow-hidden -mt-[64px]">
        {heroSlides.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: heroSlide === i ? 1 : 0 }}
          >
            <img src={src} alt="Interior design gallery showcase" loading={i === 0 ? "eager" : "lazy"} className="w-full h-full object-cover object-[center_65%]" />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

        {/* Mobile content overlay */}
        <div className="relative z-10 h-full flex flex-col justify-end px-4 pb-6 pt-20">
          <p className="text-brand-orange font-bold tracking-wider uppercase text-xs mb-2">Curated Portfolio</p>
          <h1 className="text-3xl font-serif text-white mb-3">Our Gallery</h1>
          <div className="relative mb-3">
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/90 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-brand-teal/50 transition-all text-gray-700 shadow-sm text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>
          <div className="flex flex-wrap gap-2">
            {galleryCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-2.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-brand-teal text-white shadow-lg shadow-teal-900/20'
                    : 'bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-white border border-white/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section with Slideshow - desktop/tablet only */}
      <div 
        ref={heroRef} 
        className="relative w-full hidden sm:block h-[100dvh] min-h-[500px] md:min-h-[700px] overflow-hidden"
        onTouchStart={handleHeroTouchStart}
        onTouchEnd={handleHeroTouchEnd}
      >
        {heroSlides.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: heroSlide === i ? 1 : 0 }}
          >
            <img src={src} alt="Interior design gallery showcase" loading={i === 0 ? "eager" : "lazy"} className="w-full h-full object-cover object-[center_65%]" />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <p className="gallery-hero-text text-brand-orange font-bold tracking-wider uppercase text-sm mb-4">Curated Portfolio</p>
            <h1 className="gallery-hero-text text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">Our Gallery</h1>
            <p className="gallery-hero-text text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-6 sm:mb-10 leading-relaxed px-2">
              A visual journey through our finest projects, showcasing the intersection of premium materials, flawless execution, and architectural elegance.
            </p>

            {/* Search */}
            <div className="gallery-hero-text max-w-md mx-auto mb-6 sm:mb-10 px-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search projects, locations, styles..."
                  className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 rounded-2xl bg-white/90 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-brand-teal/50 transition-all text-gray-700 shadow-sm text-sm sm:text-base"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            {/* Filters */}
            <div className="gallery-hero-text flex flex-wrap justify-center gap-2 sm:gap-3 px-2">
              {galleryCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-brand-teal text-white shadow-lg shadow-teal-900/20 scale-105'
                      : 'bg-white/90 backdrop-blur-sm text-gray-600 hover:bg-white hover:text-gray-900 border border-white/20'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-1">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setHeroSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full transition-all duration-300 ${
                heroSlide === i ? 'bg-brand-orange w-8' : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="px-4 md:px-8 lg:px-16 max-w-[1800px] mx-auto mt-6 sm:mt-8 md:mt-16">
        <div ref={galleryRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 auto-rows-[250px] sm:auto-rows-[300px] md:auto-rows-[400px]">
          {filteredImages.map((item, index) => {
            const showStoryBlock = (index + 1) % 7 === 0;

            return (
              <React.Fragment key={item.id}>
                {/* Image Item */}
                <div
                  className={`gallery-item group relative overflow-hidden rounded-[2rem] cursor-pointer bg-white shadow-sm hover:shadow-2xl transition-all duration-500 ${item.span || ''}`}
                  onClick={() => openLightbox(index)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-100 to-white animate-pulse" />
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="relative w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Company Logo Badge */}
                  {item.companyLogo && (
                    <div className="absolute top-3 right-3 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-md flex items-center justify-center p-1.5">
                      <img
                        src={item.companyLogo}
                        alt={`${item.title} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-green/90 via-brand-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 sm:p-8 pointer-events-none">
                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="inline-block px-2 sm:px-3 py-1 bg-brand-orange/90 backdrop-blur-sm text-white text-[10px] sm:text-xs font-semibold tracking-wider uppercase rounded-full mb-2 sm:mb-3">
                        {item.category}
                      </span>
                      <h3 className="text-white text-lg sm:text-2xl font-serif mb-2">{item.title}</h3>
                      <div className="flex items-center gap-2 text-white/80 font-medium text-sm mt-4">
                        <Maximize2 className="w-4 h-4" /> View Photo
                      </div>
                    </div>
                  </div>
                </div>

                {/* Storytelling Block */}
                {showStoryBlock && (
                  <div className="gallery-item col-span-1 sm:col-span-2 lg:col-span-2 row-span-1 bg-brand-green rounded-[2rem] p-6 sm:p-8 md:p-12 flex flex-col justify-center relative overflow-hidden text-white shadow-xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <Logo isDark={true} size="lg" className="h-12 sm:h-16 w-auto mb-4 sm:mb-8 opacity-80" />
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif mb-3 sm:mb-4 leading-tight">
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
          <div className="text-center py-20 sm:py-32 text-gray-500 px-4">
            <p className="text-lg sm:text-xl">No projects found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && filteredImages[lightboxIndex] && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          className="fixed inset-0 z-[200] bg-white/95 backdrop-blur-xl flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            onClick={closeLightbox}
            aria-label="Close lightbox"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-gray-500 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 p-3 sm:p-4 rounded-full transition-colors z-50 min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 text-gray-900 z-50 flex flex-col gap-1 max-w-[70%]">
            <span className="text-gray-400 text-xs sm:text-sm font-medium tracking-widest uppercase">
              {lightboxIndex + 1} / {filteredImages.length}
            </span>
            <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-serif text-brand-orange truncate">{filteredImages[lightboxIndex].title}</h3>
          </div>

          <button
            onClick={prevImage}
            aria-label="Previous image"
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 p-3 sm:p-5 rounded-full transition-colors z-50 min-w-[44px] min-h-[44px] sm:min-w-[52px] sm:min-h-[52px] flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          </button>

          <button
            onClick={nextImage}
            aria-label="Next image"
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 p-3 sm:p-5 rounded-full transition-colors z-50 min-w-[44px] min-h-[44px] sm:min-w-[52px] sm:min-h-[52px] flex items-center justify-center"
          >
            <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          </button>

          <div className="w-full h-full flex flex-col items-center justify-center p-2 sm:p-12 lg:p-24" onClick={closeLightbox}>
            <img
              src={filteredImages[lightboxIndex].image}
              alt={filteredImages[lightboxIndex].title}
              loading="eager"
              className="max-w-full max-h-[calc(100vh-14rem)] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
