/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, useEffect, useState, useRef, createContext, useContext } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate, Link } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/navbar/Navbar';
import Preloader from './components/preloader/Preloader';
import Logo from './components/logo/Logo';
import BackButton from './components/back-button/BackButton';
import ScrollToTop from './components/scroll-to-top/ScrollToTop';
import { siteConfig } from './constants/contact';
import { MapPin, Phone, Mail, MessageCircle, Instagram, Linkedin, Facebook } from 'lucide-react';
import BrandName from './components/brand-name/BrandName';

gsap.registerPlugin(ScrollTrigger);

const LenisContext = createContext<Lenis | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

const Home = React.lazy(() => import('./pages/home/Home'));
const BusinessDetail = React.lazy(() => import('./pages/business-detail/BusinessDetail'));
const ProjectDetail = React.lazy(() => import('./pages/project-detail/ProjectDetail'));
const Gallery = React.lazy(() => import('./pages/gallery/Gallery'));
const GenericPage = React.lazy(() => import('./pages/generic-page/GenericPage'));
const WorkDetail = React.lazy(() => import('./pages/work-detail/WorkDetail'));
const AboutPage = React.lazy(() => import('./pages/about/AboutPage'));
const BusinessesPage = React.lazy(() => import('./pages/businesses/BusinessesPage'));
const TeamMemberDetail = React.lazy(() => import('./pages/team-detail/TeamMemberDetail'));
const ServicesPage = React.lazy(() => import('./pages/services/ServicesPage'));
const NotFound = React.lazy(() => import('./pages/not-found/NotFound'));

function PageTransition({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const wrapper = useRef<HTMLDivElement>(null);
  const prevPathname = useRef(pathname);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      window.scrollTo(0, 0);
      // Only kill ScrollTrigger instances tied to page content, not persistent components
      ScrollTrigger.getAll().forEach(t => {
        if (t.trigger && !t.trigger.closest?.('nav') && !t.trigger.closest?.('header')) {
          t.kill();
        }
      });
    }

    if (wrapper.current) {
      tweenRef.current?.kill();
      tweenRef.current = gsap.fromTo(
        wrapper.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', clearProps: 'transform,opacity' }
      );
    }

    const timer = setTimeout(() => {
      ScrollTrigger.refresh(true);
    }, 300);

    return () => {
      clearTimeout(timer);
      tweenRef.current?.kill();
    };
  }, [pathname]);

  return <div ref={wrapper}>{children}</div>;
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Disable Lenis on mobile for better performance
    const isMobile = window.innerWidth < 768;
    
    if (isMobile) {
      // On mobile, just register ScrollTrigger without Lenis
      gsap.ticker.lagSmoothing(0);
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    lenisRef.current = lenis;
    setLenis(lenis);

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Fix tab switching: refresh ScrollTrigger when tab becomes visible
    let refreshTimeout: ReturnType<typeof setTimeout>;
    const handleVisibility = () => {
      if (!document.hidden) {
        clearTimeout(refreshTimeout);
        refreshTimeout = setTimeout(() => {
          // Force-complete all ScrollTrigger animations that never fired
          ScrollTrigger.getAll().forEach(st => {
            if (st.progress === 0) {
              st.progress(1);
            }
          });
          // Also clear any stuck inline opacity styles from gsap.fromTo
          document.querySelectorAll('[style*="opacity: 0"]').forEach(el => {
            const htmlEl = el as HTMLElement;
            if (htmlEl.style.opacity === '0') {
              htmlEl.style.removeProperty('opacity');
              htmlEl.style.removeProperty('transform');
            }
          });
          ScrollTrigger.refresh(true);
        }, 150);
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    // Global safety net: after 2s, force any remaining opacity:0 elements visible
    const safetyTimer = setTimeout(() => {
      document.querySelectorAll('[style*="opacity: 0"]').forEach(el => {
        const htmlEl = el as HTMLElement;
        if (htmlEl.style.opacity === '0') {
          htmlEl.style.removeProperty('opacity');
          htmlEl.style.removeProperty('transform');
        }
      });
    }, 2000);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibility);
      clearTimeout(refreshTimeout);
      clearTimeout(safetyTimer);
      lenis.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>
      <BrowserRouter>
        <div className="min-h-screen bg-[#faf9f6] text-gray-800 font-sans selection:bg-brand-orange selection:text-white overflow-x-hidden">
          {loading && <Preloader onComplete={() => setLoading(false)} />}

          <Navbar />
          <BackButton />
          <ScrollToTop />

          <Suspense fallback={null}>
            <PageTransition>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/business/:id" element={<BusinessDetail />} />
                <Route path="/projects" element={<Navigate to="/gallery" replace />} />
                <Route path="/projects/:slug" element={<ProjectDetail />} />
                <Route path="/works/:id" element={<WorkDetail />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/businesses" element={<BusinessesPage />} />
                <Route path="/team/:id" element={<TeamMemberDetail />} />
                <Route path="/services" element={<ServicesPage />} />
                {/* <Route path="/products" element={<GenericPage title="Our Products" description="Explore our exclusive range of modular furniture and finishes." />} /> */}
                <Route path="/why-us" element={<GenericPage title="Why Choose Us" description="What makes Gauri Group the trusted choice for luxury interiors." />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </PageTransition>
          </Suspense>

          <footer className="bg-brand-green text-white" id="contact-us">
            <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-24 py-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">

                {/* Brand */}
                <div>
                  <div className="mb-4">
                    <Logo isDark={true} size="sm" />
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                    Creating functional, inspiring, and truly personalized spaces since 2014.
                  </p>
                </div>

                {/* Get in Touch */}
                <div>
                  <h3 className="text-lg font-serif font-semibold mb-6">Get in Touch</h3>
                  <ul className="space-y-4">
                    <li>
                      <a
                        href={siteConfig.contact.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 text-white/70 hover:text-white transition-colors group"
                      >
                        <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-brand-orange group-hover:scale-110 transition-transform" />
                        <span className="text-sm leading-relaxed">{siteConfig.contact.address}</span>
                      </a>
                    </li>
                    <li className="flex items-center gap-3 text-white/70">
                      <Phone className="w-5 h-5 shrink-0 text-brand-orange" />
                      <div className="flex flex-wrap gap-x-4 gap-y-1">
                        {siteConfig.contact.phones.map((phone) => (
                          <a key={phone} href={`tel:${phone.replace(/-/g, '')}`} className="text-sm hover:text-white transition-colors">
                            {phone}
                          </a>
                        ))}
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Quick Links */}
                <div>
                  <h3 className="text-lg font-serif font-semibold mb-6">Quick Links</h3>
                  <ul className="space-y-3">
                    <li>
                      <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
                        <Mail className="w-5 h-5 shrink-0 text-brand-orange group-hover:scale-110 transition-transform" />
                        <span className="text-sm">{siteConfig.contact.email}</span>
                      </a>
                    </li>
                    <li>
                      <a href={`https://wa.me/${siteConfig.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
                        <MessageCircle className="w-5 h-5 shrink-0 text-brand-orange group-hover:scale-110 transition-transform" />
                        <span className="text-sm">{siteConfig.contact.whatsappDisplay}</span>
                      </a>
                    </li>
                  </ul>

                  {/* Social Media */}
                  <div className="flex gap-3 mt-6">
                    <a href="https://www.instagram.com/gauri_group__/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange/80 hover:scale-110 transition-all duration-300">
                      <Instagram className="w-5 h-5 text-white" />
                    </a>
                    <a href="https://www.linkedin.com/company/gauri-interior/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange/80 hover:scale-110 transition-all duration-300">
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                    <a href="https://www.facebook.com/gauriinterior" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange/80 hover:scale-110 transition-all duration-300">
                      <Facebook className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Copyright bar */}
            <div className="border-t border-white/10">
              <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-24 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-white/40 text-sm">© {new Date().getFullYear()} <BrandName as="span">Gauri Interior Pvt. Ltd.</BrandName> All rights reserved.</p>
                <div className="flex gap-4 sm:gap-6">
                  <a href="#contact-us" className="text-white/40 text-sm hover:text-white/70 transition-colors py-3">Contact Us</a>
                  <Link to="/about" className="text-white/40 text-sm hover:text-white/70 transition-colors py-3">About Us</Link>
                  <Link to="/gallery" className="text-white/40 text-sm hover:text-white/70 transition-colors py-3">Gallery</Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </BrowserRouter>
    </LenisContext.Provider>
  );
}

