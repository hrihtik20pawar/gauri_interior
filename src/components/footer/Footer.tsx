import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageCircle, Instagram, Linkedin, Facebook } from 'lucide-react';
import Logo from '../logo/Logo';
import { siteConfig } from '../../constants/contact';
import BrandName from '../brand-name/BrandName';

export default function Footer() {
  return (
    <footer className="bg-brand-green text-white" id="contact-us">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          <div>
            <div className="mb-4">
              <Logo isDark={true} size="sm" />
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Creating functional, inspiring, and truly personalized spaces since 2014.
            </p>
          </div>

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
  );
}
