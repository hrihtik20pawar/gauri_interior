import { images } from '../../constants/images';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { 
  Home, Building, Briefcase, Ruler, 
  ChefHat, Layers, Settings, Wrench, 
  PenTool, MonitorPlay, Palette, Sparkles, ArrowRight, Package, Truck, Handshake, Globe
} from 'lucide-react';
import BrandName from '../brand-name/BrandName';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo('.service-header',
      { y: 30 },
      { y: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out',
        scrollTrigger: { trigger: container.current, start: 'top 80%' } },
    );
    
    gsap.fromTo('.service-card',
      { y: 50 },
      { y: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out',
        scrollTrigger: { trigger: container.current, start: 'top 60%' } },
    );
  }, { scope: container });

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
    <section ref={container} className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50/50" id="services">
      <div className="max-w-[1500px] mx-auto">
        <div className="mb-16 max-w-2xl">
          <h2 className="service-header text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-teal-800 mb-6 font-medium">Our Services</h2>
          <p className="service-header text-gray-700 text-lg leading-relaxed font-medium">
            <BrandName as="span">Gauri Group</BrandName> is a home to four specialized businesses, each dedicated to delivering excellence in its own way.
          </p>
          <div className="service-header w-24 h-1 bg-brand-orange mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((svc, idx) => (
            <div key={idx} className={`service-card ${svc.bg} rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 p-8 flex flex-col`}>
              {/* Brand Header */}
              <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-6">
                <div className="bg-gray-50 rounded-xl p-3 border border-gray-100 shrink-0">
                  <img loading="lazy" src={svc.logo} alt={`${svc.brand} Logo`} className="h-12 w-auto object-contain" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-green text-xl leading-tight"><BrandName as="span">{svc.brand}</BrandName></h3>
                  <p className="text-[11px] text-brand-orange uppercase tracking-wider font-semibold mt-1">{svc.brandSub}</p>
                </div>
              </div>

              {/* Content */}
              <div className="text-center mb-8 px-4 flex-1">
                <h4 className="text-xl font-bold text-gray-900 mb-4 whitespace-pre-line leading-snug">{svc.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed max-w-[280px] mx-auto">{svc.desc}</p>
              </div>

              {/* Image */}
              <div className="w-full h-48 rounded-xl overflow-hidden mb-8 shadow-inner">
                <img loading="lazy" src={svc.img} alt={svc.title} className="w-full h-full object-cover" />
              </div>

              {/* Feature Icons */}
              <div className="grid grid-cols-4 gap-2 mb-8">
                {svc.features.map((feat, fidx) => (
                  <div key={fidx} className="flex flex-col items-center text-center">
                    <div className="text-teal-700 mb-2 p-2 rounded-lg bg-teal-50/50">
                      {feat.icon}
                    </div>
                    <p className="text-[10px] text-gray-600 font-medium whitespace-pre-line leading-tight">{feat.label}</p>
                  </div>
                ))}
              </div>

              {/* Button */}
              <div className="flex justify-center mt-auto">
                <button className={`${svc.btnColor} text-white px-8 py-3 rounded-full text-sm font-semibold transition-colors flex items-center gap-2 shadow-lg shadow-teal-900/10`}>
                  Explore More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <div className="text-center service-header">
          <p className="text-2xl font-serif text-gray-800">
            Four brands. <span className="text-brand-orange font-bold">One vision.</span> Endless possibilities.
          </p>
          <div className="w-12 h-[2px] bg-brand-orange mx-auto mt-6 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
