import { images } from '../../constants/images';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect, useState } from 'react';
import { 
  Home, Building, Briefcase, Ruler, 
  ChefHat, Layers, Settings, Wrench, 
  PenTool, MonitorPlay, Palette, Sparkles, ArrowRight, Package, Truck, Handshake, Globe
} from 'lucide-react';
import BrandName from '../brand-name/BrandName';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const container = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = container.current;
    if (!el || animated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            setAnimated(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animated]);

  useGSAP(() => {
    if (!animated) return;

    gsap.fromTo('.service-header',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power2.out' },
    );
    
    gsap.fromTo('.service-card',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power2.out' },
    );
  }, { scope: container, dependencies: [animated] });

  const services = [
    {
      brand: "Gauri Interior Pvt. Ltd.",
      brandSub: "Interior • Kitchen • Design",
      bg: "bg-white",
      title: "Turnkey Interior Solutions for Every Space",
      desc: "We design and deliver end-to-end interior solutions for residential, commercial and retail spaces with creativity and precision.",
      img: images.businesses.interior,
      logo: images.businesses.interiorLogo,
      btnColor: "bg-teal-800 hover:bg-teal-900",
      features: [
        { icon: <Home className="w-6 h-6 stroke-[1.5]" />, label: "Residential\nInteriors" },
        { icon: <Building className="w-6 h-6 stroke-[1.5]" />, label: "Commercial\nInteriors" },
        { icon: <Briefcase className="w-6 h-6 stroke-[1.5]" />, label: "Turnkey\nProjects" },
        { icon: <Ruler className="w-6 h-6 stroke-[1.5]" />, label: "Space\nPlanning" },
      ]
    },
    {
      brand: "Gauri's Kitchen",
      brandSub: "Design bhi, Storage bhi",
      bg: "bg-[#fef9f5]",
      title: "Modular Kitchens &\nSmart Storage Solutions",
      desc: "Stylish, functional and durable modular kitchens and storage solutions tailored to your lifestyle.",
      img: images.businesses.kitchen,
      logo: images.businesses.kitchenLogo,
      btnColor: "bg-brand-orange hover:bg-orange-700",
      features: [
        { icon: <ChefHat className="w-6 h-6 stroke-[1.5]" />, label: "Modular\nKitchens" },
        { icon: <Layers className="w-6 h-6 stroke-[1.5]" />, label: "Wardrobes &\nStorage" },
        { icon: <Settings className="w-6 h-6 stroke-[1.5]" />, label: "Accessories &\nFittings" },
        { icon: <Wrench className="w-6 h-6 stroke-[1.5]" />, label: "Custom\nSolutions" },
      ]
    },
    {
      brand: "Gauri's Designing Studio",
      brandSub: "Design bhi, Storage bhi",
      bg: "bg-white",
      title: "Design Consulting &\nCreative Solutions",
      desc: "From concept to creation - we provide design consulting, 3D visualization and styling solutions to bring your ideas to life.",
      img: images.businesses.studio,
      logo: images.businesses.studioLogo,
      btnColor: "bg-teal-800 hover:bg-teal-900",
      features: [
        { icon: <PenTool className="w-6 h-6 stroke-[1.5]" />, label: "Design\nConsulting" },
        { icon: <MonitorPlay className="w-6 h-6 stroke-[1.5]" />, label: "3D Visualization\n& Rendering" },
        { icon: <Palette className="w-6 h-6 stroke-[1.5]" />, label: "Material &\nFinish Selection" },
        { icon: <Sparkles className="w-6 h-6 stroke-[1.5]" />, label: "Styling & Space\nSolutions" },
      ]
    },
    {
      brand: "Nikhil Company",
      brandSub: "Quality Trading, Trusted Partnerships",
      bg: "bg-[#f8fafb]",
      title: "Trading & Supply\nChain Solutions",
      desc: "Reliable trading solutions with quality products, trusted partnerships and efficient supply chain management.",
      img: images.businesses.nikhil,
      logo: images.businesses.nikhilLogo,
      btnColor: "bg-teal-800 hover:bg-teal-900",
      features: [
        { icon: <Package className="w-6 h-6 stroke-[1.5]" />, label: "Product\nSourcing" },
        { icon: <Truck className="w-6 h-6 stroke-[1.5]" />, label: "Supply Chain\nManagement" },
        { icon: <Handshake className="w-6 h-6 stroke-[1.5]" />, label: "Trusted\nPartnerships" },
        { icon: <Globe className="w-6 h-6 stroke-[1.5]" />, label: "Market\nExpansion" },
      ]
    }
  ];

  return (
    <section ref={container} className="py-16 md:py-24 px-5 md:px-12 lg:px-24 bg-gray-50/50" id="services">
      <div className="max-w-[1500px] mx-auto">
        <div className="mb-10 md:mb-16 max-w-2xl">
          <h2 className="service-header text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif text-teal-800 mb-4 md:mb-6 font-medium">Our Services</h2>
          <p className="service-header text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
            <BrandName as="span">Gauri Group</BrandName> is a home to four specialized businesses, each dedicated to delivering excellence in its own way.
          </p>
          <div className="service-header w-16 md:w-24 h-1 bg-brand-orange mt-6 md:mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 mb-12 md:mb-20">
          {services.map((svc, idx) => (
            <div key={idx} className={`service-card ${svc.bg} rounded-[1.5rem] md:rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 p-5 md:p-8 flex flex-col`}>
              <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-8 border-b border-gray-100 pb-4 md:pb-6">
                <div className="bg-gray-50 rounded-xl p-2.5 md:p-3 border border-gray-100 shrink-0">
                  <img loading="lazy" decoding="async" width="200" height="60" src={svc.logo} alt={`${svc.brand} Logo`} className="h-10 md:h-12 w-auto object-contain" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-green text-base md:text-xl leading-tight"><BrandName as="span">{svc.brand}</BrandName></h3>
                  <p className="text-[10px] md:text-[11px] text-brand-orange uppercase tracking-wider font-semibold mt-0.5 md:mt-1">{svc.brandSub}</p>
                </div>
              </div>

              <div className="text-center mb-5 md:mb-8 px-2 md:px-4 flex-1">
                <h4 className="text-base md:text-xl font-bold text-gray-900 mb-3 md:mb-4 whitespace-pre-line leading-snug">{svc.title}</h4>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-[280px] mx-auto">{svc.desc}</p>
              </div>

              <div className="w-full h-36 md:h-48 rounded-lg md:rounded-xl overflow-hidden mb-5 md:mb-8 shadow-inner">
                <img loading="lazy" decoding="async" width="800" height="400" src={svc.img} alt={svc.title} className="w-full h-full object-cover" />
              </div>

              <div className="grid grid-cols-2 gap-2 mb-5 md:mb-8">
                {svc.features.map((feat, fidx) => (
                  <div key={fidx} className="flex flex-col items-center text-center">
                    <div className="text-teal-700 mb-1.5 md:mb-2 p-1.5 md:p-2 rounded-lg bg-teal-50/50">
                      {feat.icon}
                    </div>
                    <p className="text-[10px] md:text-xs text-gray-600 font-medium whitespace-pre-line leading-tight">{feat.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-auto">
                <button className={`${svc.btnColor} text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 shadow-lg shadow-teal-900/10`}>
                  Explore More <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center service-header">
          <p className="text-lg md:text-2xl font-serif text-gray-800">
            Four brands. <span className="text-brand-orange font-bold">One vision.</span> Endless possibilities.
          </p>
          <div className="w-10 md:w-12 h-[2px] bg-brand-orange mx-auto mt-4 md:mt-6 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
