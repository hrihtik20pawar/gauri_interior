import { Mail, MessageCircle, Phone } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import Logo from '../logo/Logo';
import { siteConfig } from '../../constants/contact';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const location = useLocation();
  const desktopContactRef = useRef<HTMLDivElement>(null);
  const mobileContactRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Track navbar height for mobile menu positioning
  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
  }, [isOpen]);

  // Click outside to close contact dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      const clickedInsideDesktop = desktopContactRef.current?.contains(target);
      const clickedInsideMobile = mobileContactRef.current?.contains(target);
      if (!clickedInsideDesktop && !clickedInsideMobile) {
        setContactOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.nav-item',
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out', delay: 0.2 }
      );
    });
    return () => ctx.revert();
  }, [isHome]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
  ];

  return (
    <nav ref={navRef} className="fixed w-full z-50 transition-all duration-300 bg-transparent py-5">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">

        <Link to="/" className="nav-item block shrink-0 min-w-0 overflow-visible max-w-[45vw]">
          <Logo isDark={true} size="lg" className="scale-[0.4] sm:scale-[0.55] md:scale-75 lg:scale-100 origin-left transition-transform duration-300" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium shrink-0">
          {navLinks.map((link, i) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={i}
                to={link.path}
                className={`nav-item transition-colors hover:text-brand-orange text-gray-100 ${isActive ? 'border-b-2 border-brand-orange pb-1 text-brand-orange' : ''}`}
              >
                {link.name}
              </Link>
            )
          })}
        </div>

        {/* Desktop Get in Touch Dropdown */}
        <div className="hidden lg:flex items-center gap-6 nav-item relative" ref={desktopContactRef}>
          <button
            onClick={() => setContactOpen(!contactOpen)}
            className="bg-brand-orange text-white px-5 py-2.5 rounded-lg font-medium hover:bg-brand-orange/90 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-brand-orange/15 text-sm flex items-center gap-2"
          >
            Get in Touch
          </button>

          {contactOpen && (
            <div className="absolute top-full right-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50">
              <div className="p-2">
                <a
                  href={`tel:${siteConfig.contact.phones[0].replace(/-/g, '')}`}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  onClick={() => setContactOpen(false)}
                >
                  <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center group-hover:bg-brand-teal/20 transition-colors">
                    <Phone className="w-5 h-5 text-brand-teal" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Call Us</p>
                    <p className="text-xs text-gray-500">{siteConfig.contact.phones[0]}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  onClick={() => setContactOpen(false)}
                >
                  <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center group-hover:bg-brand-orange/20 transition-colors">
                    <Mail className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Email Us</p>
                    <p className="text-xs text-gray-500 truncate">{siteConfig.contact.email}</p>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  onClick={() => setContactOpen(false)}
                >
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                    <MessageCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">WhatsApp</p>
                    <p className="text-xs text-gray-500">{siteConfig.contact.whatsappDisplay}</p>
                  </div>
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden nav-item shrink-0 p-2.5 min-w-[44px] min-h-[44px] flex flex-col items-center justify-center gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-[2px] bg-white rounded-full transition-all duration-300"></span>
          <span className="block w-6 h-[2px] bg-white rounded-full transition-all duration-300"></span>
          <span className="block w-6 h-[2px] bg-white rounded-full transition-all duration-300"></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed left-0 right-0 bg-white border-b border-gray-100 shadow-xl z-40 overflow-y-auto transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
        style={{ top: `${navHeight}px`, maxHeight: `calc(100dvh - ${navHeight}px)` }}
      >
        <div className="py-4 px-6 flex flex-col">
          {navLinks.map((link, i) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={i} 
                to={link.path} 
                className={`font-medium py-3.5 block transition-colors border-b border-gray-100 last:border-b-0 ${
                  isActive 
                    ? 'text-brand-orange border-l-4 border-brand-orange pl-4 -ml-[1px]' 
                    : 'text-gray-700 hover:text-brand-orange hover:bg-gray-50 rounded-lg px-2'
                }`}
              >
                {link.name}
              </Link>
            )
          })}

          {/* Mobile Get in Touch */}
          <div ref={mobileContactRef} className="mt-4 pt-4 border-t border-gray-100">
            <button
              onClick={() => setContactOpen(!contactOpen)}
              className="w-full text-center bg-brand-orange text-white py-3 rounded-lg font-medium hover:bg-brand-orange/90 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2"
            >
              Get in Touch
            </button>

            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${contactOpen ? 'max-h-[200px] opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
              <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100">
                <a
                  href={`tel:${siteConfig.contact.phones[0].replace(/-/g, '')}`}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors"
                  onClick={() => { setContactOpen(false); setIsOpen(false); }}
                >
                  <Phone className="w-5 h-5 text-brand-teal" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Call Us</p>
                    <p className="text-xs text-gray-500">{siteConfig.contact.phones[0]}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors"
                  onClick={() => { setContactOpen(false); setIsOpen(false); }}
                >
                  <Mail className="w-5 h-5 text-brand-orange" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Email Us</p>
                    <p className="text-xs text-gray-500">{siteConfig.contact.email}</p>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors"
                  onClick={() => { setContactOpen(false); setIsOpen(false); }}
                >
                  <MessageCircle className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">WhatsApp</p>
                    <p className="text-xs text-gray-500">{siteConfig.contact.whatsappDisplay}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
