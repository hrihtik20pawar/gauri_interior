import { useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Home, ArrowLeft, ArrowRight, Phone, Mail, MessageCircle, MapPin } from 'lucide-react';
import { siteConfig } from '../../constants/contact';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
];

export default function NotFound() {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = 'Page Not Found | Gauri Interior Pvt. Ltd.';
  }, []);

  useGSAP(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      containerRef.current.querySelector('.error-code'),
      { opacity: 0, scale: 0.5, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.8 }
    )
      .fromTo(
        containerRef.current.querySelector('.error-title'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.4'
      )
      .fromTo(
        containerRef.current.querySelector('.error-desc'),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.3'
      )
      .fromTo(
        containerRef.current.querySelector('.error-divider'),
        { scaleX: 0 },
        { scaleX: 1, duration: 0.5 },
        '-=0.2'
      )
      .fromTo(
        containerRef.current.querySelectorAll('.error-link'),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
        '-=0.2'
      )
      .fromTo(
        containerRef.current.querySelector('.error-cta'),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.2'
      )
      .fromTo(
        containerRef.current.querySelector('.error-contact'),
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        '-=0.1'
      );
  }, { scope: containerRef });

  return (
    <main className="min-h-screen bg-[#faf9f6] flex items-center justify-center px-5 md:px-12 lg:px-24 py-20">
      <div ref={containerRef} className="text-center max-w-2xl mx-auto">

        <p className="error-code text-brand-orange font-bold tracking-[0.3em] uppercase text-sm mb-4 opacity-0">
          Error 404
        </p>

        <h1 className="error-title text-5xl sm:text-7xl md:text-9xl font-serif text-brand-green mb-4 opacity-0 leading-none">
          Lost in
          <span className="block text-brand-orange italic">Space</span>
        </h1>

        <p className="error-desc text-gray-500 text-base sm:text-lg leading-relaxed mb-8 max-w-md mx-auto opacity-0">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back to something beautiful.
        </p>

        <div className="error-divider w-16 h-0.5 bg-brand-orange mx-auto mb-8 origin-center" />

        <nav className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10">
          {quickLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="error-link opacity-0 group flex items-center gap-2 px-5 py-2.5 rounded-full border border-brand-green/20 text-brand-green text-sm font-medium hover:bg-brand-green hover:text-white transition-all duration-300"
            >
              {link.label}
              <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </Link>
          ))}
        </nav>

        <div className="error-cta flex flex-wrap justify-center gap-4 mb-10 opacity-0">
          <button
            onClick={() => navigate('/')}
            className="bg-brand-orange text-white px-8 py-3.5 rounded-full font-medium hover:bg-brand-orange/90 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-brand-orange/20"
          >
            <Home className="w-5 h-5" /> Go Home
          </button>
          <button
            onClick={() => navigate(-1)}
            className="backdrop-blur-md bg-white/80 border border-gray-200 text-gray-700 px-8 py-3.5 rounded-full font-medium hover:bg-white hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" /> Go Back
          </button>
        </div>

        <div className="error-contact opacity-0 border-t border-gray-200 pt-6">
          <p className="text-gray-400 text-sm mb-4">Need help? Reach out to us</p>
          <div className="space-y-3">
            <a
              href={siteConfig.contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start justify-center gap-2 text-gray-500 hover:text-brand-orange transition-colors text-sm group"
            >
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
              <span className="leading-relaxed max-w-md">{siteConfig.contact.address}</span>
            </a>
            <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
              <Phone className="w-4 h-4 shrink-0 text-brand-orange" />
              <div className="flex flex-wrap justify-center gap-x-3 gap-y-1">
                {siteConfig.contact.phones.map((phone) => (
                  <a key={phone} href={`tel:${phone.replace(/-/g, '')}`} className="hover:text-brand-orange transition-colors">
                    {phone}
                  </a>
                ))}
              </div>
            </div>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center justify-center gap-2 text-gray-500 hover:text-brand-orange transition-colors text-sm group"
            >
              <Mail className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" />
              {siteConfig.contact.email}
            </a>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-gray-500 hover:text-brand-orange transition-colors text-sm group"
            >
              <MessageCircle className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" />
              {siteConfig.contact.whatsappDisplay}
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
