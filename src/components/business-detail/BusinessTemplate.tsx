import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { BusinessData } from '../../data/businesses/businessesData';
import OtherBusinesses from '../other-businesses/OtherBusinesses';
import BrandName from '../brand-name/BrandName';

interface BusinessTemplateProps {
  business: BusinessData;
  variant?: 'teal' | 'orange';
}

export default function BusinessTemplate({ business, variant = 'teal' }: BusinessTemplateProps) {
  const isOrange = variant === 'orange';
  const bgColor = isOrange ? 'bg-orange-50' : 'bg-teal-50';
  const btnColor = isOrange ? 'bg-brand-orange hover:bg-orange-700' : 'bg-teal-800 hover:bg-teal-900';
  const iconColor = isOrange ? 'text-brand-orange' : 'text-brand-teal';
  const iconBg = isOrange ? 'bg-brand-orange/10' : 'bg-brand-teal/10';

  const aboutTitleParts = (business.aboutTitle || business.title).split('\n');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className={`${bgColor} pt-24 pb-20 overflow-hidden relative`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <img loading="lazy" src={business.logo} alt={`${business.title} Logo`} className="h-16 md:h-20 w-auto object-contain mb-6" />
              <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-4">{business.heroSubtitle}</p>
              <h1 className="text-5xl md:text-7xl font-serif text-gray-900 leading-tight mb-6">
                {business.heroTitleLine1}
                {business.heroTitleLine2 && <><br /><span className={isOrange ? 'text-brand-orange' : 'text-teal-800'}>{business.heroTitleLine2}</span></>}
              </h1>
              <p className="text-gray-600 text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
                <BrandName as="span">{business.heroDesc}</BrandName>
              </p>
              {business.heroBtnLabel ? (
                <span className={`${btnColor} text-white px-8 py-3.5 rounded font-medium inline-flex items-center gap-2 cursor-default`}>
                  {business.heroBtnLabel}
                </span>
              ) : (
                <Link to="/#businesses" className={`${btnColor} text-white px-8 py-3.5 rounded font-medium transition-colors inline-flex items-center gap-2`}>
                  Explore Our Work <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
            <div className="flex-1 w-full relative">
              <div className="relative aspect-[4/3] md:aspect-square overflow-hidden rounded-l-full shadow-2xl">
                <img loading="lazy" src={business.heroImg} alt={business.title} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <p className="text-sm font-semibold tracking-widest text-brand-orange uppercase">About Us</p>
              <div className="h-[1px] w-12 bg-brand-orange"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-green mb-8 leading-tight">
              {aboutTitleParts.map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {i === 0 ? <BrandName as="span">{line}</BrandName> : line}
                </span>
              ))}
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p><BrandName as="span">{business.details}</BrandName></p>
              <p className="font-medium text-gray-800"><BrandName as="span">{business.details2}</BrandName></p>
              <p className="text-gray-600">{business.details3}</p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <img loading="lazy" src={business.whoWeAreImg} alt="Who We Are" className="w-full h-full object-cover" />
            </div>
            {business.badge && (
              <div className="absolute -bottom-8 -left-4 lg:-left-8 bg-brand-orange text-white rounded-2xl shadow-2xl p-6 max-w-[200px]">
                <p className="text-4xl font-serif font-bold mb-1">{business.badge.text}</p>
                <p className="text-sm text-white/80">{business.badge.subtext}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest text-brand-orange uppercase mb-4">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-serif text-brand-green mb-4">{business.servicesTitle || 'Our Services'}</h2>
            <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {business.services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-75">
                <div className={`w-12 h-12 rounded-full ${iconBg} flex items-center justify-center mb-4`}>
                  <CheckCircle className={`w-6 h-6 ${iconColor}`} />
                </div>
                <h3 className="font-semibold text-gray-900 text-base">{service}</h3>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-brand-green rounded-2xl p-8 md:p-12 text-center">
            <p className="text-white/80 text-sm font-semibold tracking-widest uppercase mb-4">{business.promiseLabel || 'Our Promise'}</p>
            <p className="text-white text-xl md:text-2xl font-serif italic max-w-3xl mx-auto">
              "{business.promise}"
            </p>
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest text-brand-orange uppercase mb-4">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-serif text-brand-green mb-4">Featured Work</h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {business.showcase.map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
                <img loading="lazy" src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <h3 className="font-semibold text-gray-900 text-lg flex items-center justify-between">
                {item.title} <ArrowRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-gray-500 text-sm mt-1">{item.category}</p>
            </div>
          ))}
        </div>
      </section>

      <OtherBusinesses currentId={business.id} />
    </div>
  );
}
