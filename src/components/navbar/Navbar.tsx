import { Menu, X, Mail, MessageCircle } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import Logo from '../logo/Logo';
import { siteConfig } from '../../constants/contact';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const location = useLocation();
  const contactRef = useRef<HTMLDivElement>(null);

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20 || !isHome);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Click outside to close contact dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (contactRef.current && !contactRef.current.contains(event.target as Node)) {
        setContactOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    gsap.fromTo('.nav-item',
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out', delay: 0.2 }
    );
  }, [isHome]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    // { name: "Products", path: "/products" },
    // { name: "Why Us", path: "/why-us" }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

        <Link to="/" className="nav-item block">
          <Logo isDark={!scrolled} size="lg" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link, i) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={i}
                to={link.path}
                className={`nav-item transition-colors hover:text-brand-orange ${scrolled ? 'text-gray-700' : 'text-gray-100'} ${isActive ? 'border-b-2 border-brand-orange pb-1 text-brand-orange' : ''}`}
              >
                {link.name}
              </Link>
            )
          })}
        </div>

        {/* Desktop Get in Touch Dropdown */}
        <div className="hidden lg:flex items-center gap-6 nav-item relative" ref={contactRef}>
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
        <button className={`lg:hidden nav-item p-2 min-w-[44px] min-h-[44px] flex items-center justify-center ${scrolled ? 'text-brand-teal' : 'text-white'}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 py-6 px-6 flex flex-col gap-4 shadow-xl z-40 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link, i) => {
            const isActive = location.pathname === link.path;
            return (
              <Link key={i} to={link.path} className={`font-medium py-3 block ${isActive ? 'text-brand-orange' : 'text-gray-700'}`}>{link.name}</Link>
            )
          })}

          {/* Mobile Get in Touch Dropdown */}
          <div ref={contactRef}>
            <button
              onClick={() => setContactOpen(!contactOpen)}
              className="w-full text-center bg-brand-orange text-white py-3 rounded-lg font-medium hover:bg-brand-orange/90 active:scale-98 transition-all duration-200 mt-2 flex items-center justify-center gap-2"
            >
              Get in Touch
            </button>

            {contactOpen && (
              <div className="mt-2 bg-gray-50 rounded-xl overflow-hidden border border-gray-100">
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
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
