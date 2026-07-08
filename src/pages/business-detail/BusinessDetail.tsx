import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Home, Settings, Building2, Wrench } from 'lucide-react';
import { useEffect } from 'react';
import { images } from '../../constants/images';

export default function BusinessDetail() {
  const { id } = useParams();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const data = {
    interior: {
      id: "interior",
      logo: images.businesses.interiorLogo || images.logo,
      title: "Gauri Interior Pvt. Ltd.",
      heroSubtitle: "WE DESIGN SPACES THAT",
      heroTitleLine1: "Reflect Your Style.",
      heroTitleLine2: "Enhance Your Life.",
      heroDesc: "We create aesthetic, functional and timeless interiors that perfectly blend creativity, quality and comfort.",
      heroImg: images.businesses.interior,
      whoWeAreImg: images.gallery.g8,
      details: "We are a team of passionate designers, planners and craftsmen dedicated to delivering spaces that reflect your lifestyle and purpose. Our collaborative approach ensures every project is thoughtfully designed and flawlessly executed.",
      details2: "Gauri Interior Pvt. Ltd. is growing company in contracting turnkey project & interior decorator work. We are also manufactures of modular furniture. The main goal of our organization is customer satisfaction by considering time & money.",
      details3: "We undertake all kind of interior, decoration project on turnkey basis. It cover Carpentry, POP, Civil, Electrical, Plumbing, Aircondition etc. & also manufactures of modular furniture. We undertake and execute from concept to completion, of any size & time schedule.",
      showcase: [
        { title: "Modern Luxury Villa", category: "Residential", img: images.projects.oasisVilla.main },
        { title: "Corporate Office Space", category: "Commercial", img: images.projects.zenWorkspace.main },
        { title: "Premium Modular Kitchen", category: "Modular Furniture", img: images.projects.minimalistKitchen.main },
        { title: "Elegant Bedroom Design", category: "Residential", img: images.gallery.g1 },
        { title: "Retail Store Interior", category: "Commercial", img: images.projects.boutiqueRetail.main },
        { title: "Modular Office Workstation", category: "Modular Furniture", img: images.gallery.g2 }
      ]
    },
    kitchen: {
      id: "kitchen",
      logo: images.businesses.kitchenLogo || images.logo,
      title: "Gauri's Kitchen",
      heroSubtitle: "WE BUILD KITCHENS THAT",
      heroTitleLine1: "Combine Style.",
      heroTitleLine2: "Maximize Storage.",
      heroDesc: "Modular kitchens and smart storage solutions designed for style, efficiency and convenience.",
      heroImg: images.businesses.kitchen,
      whoWeAreImg: images.gallery.g5,
      details: "The kitchen is the heart of the home, and we make it beat with style and functionality. Gauri's Kitchen brings you world-class modular kitchens, wardrobes, and storage units built with premium materials.",
      details2: "We focus on ergonomics, smart space utilization, and durable hardware to create spaces that make everyday living a joy.",
      details3: "Our team of experts will guide you through every step, from selecting the perfect materials to final installation.",
      showcase: [
        { title: "Minimalist Kitchen", category: "Modular", img: images.projects.minimalistKitchen.main },
        { title: "Modular Wardrobe", category: "Storage", img: images.gallery.g5 },
        { title: "Luxury Dining", category: "Dining", img: images.gallery.g9 },
        { title: "Smart Storage", category: "Storage", img: images.gallery.g3 },
        { title: "Classic Kitchen", category: "Modular", img: images.gallery.g11 },
        { title: "Modern Pantry", category: "Storage", img: images.gallery.g10 }
      ]
    },
    studio: {
      id: "studio",
      logo: images.businesses.studioLogo || images.logo,
      title: "Gauri's Designing Studio",
      heroSubtitle: "WE CRAFT VISIONS THAT",
      heroTitleLine1: "Inspire Creativity.",
      heroTitleLine2: "Bring Ideas to Life.",
      heroDesc: "Design consulting, 3D visualization and styling solutions that bring ideas to life.",
      heroImg: images.businesses.studio,
      whoWeAreImg: images.gallery.g7,
      details: "Bring your vision to life before a single brick is laid. Our Designing Studio offers comprehensive design consulting, material selection, and hyper-realistic 3D rendering services.",
      details2: "Whether you are a homeowner visualizing your future living room, or a developer needing marketing collateral, our studio provides the creative and technical expertise you need.",
      details3: "We work closely with clients to understand their needs and deliver exceptional designs that exceed expectations.",
      showcase: [
        { title: "3D Visualization", category: "Design", img: images.gallery.g12 },
        { title: "Concept Design", category: "Planning", img: images.gallery.g8 },
        { title: "Material Selection", category: "Consulting", img: images.gallery.g11 },
        { title: "Space Planning", category: "Design", img: images.gallery.g7 },
        { title: "Interior Styling", category: "Styling", img: images.gallery.g4 },
        { title: "Exterior Rendering", category: "Visualization", img: images.gallery.g6 }
      ]
    },
    nikhil: {
      id: "nikhil",
      logo: images.businesses.nikhilLogo || images.logo,
      title: "Nikhil Company",
      heroSubtitle: "WE ARE A TRADING COMPANY THAT",
      heroTitleLine1: "Deliver Quality.",
      heroTitleLine2: "Build Trust.",
      heroDesc: "Reliable trading solutions with quality products, trusted partnerships and efficient supply chain management.",
      heroImg: images.businesses.nikhil,
      whoWeAreImg: images.gallery.g8,
      details: "Nikhil Company is a trusted name in the trading industry, specializing in sourcing and distributing quality products across diverse sectors. We bridge the gap between manufacturers and customers with efficiency and reliability.",
      details2: "With a strong network of suppliers and a commitment to quality, we ensure timely delivery and competitive pricing. Our expertise spans across multiple product categories, making us a one-stop solution for trading needs.",
      details3: "We believe in building long-term relationships through transparent business practices, consistent quality, and a customer-first approach that drives everything we do.",
      showcase: [
        { title: "Product Distribution", category: "Trading", img: images.gallery.g8 },
        { title: "Supply Chain Solutions", category: "Logistics", img: images.gallery.g6 },
        { title: "Quality Procurement", category: "Sourcing", img: images.gallery.g12 },
        { title: "Bulk Trading", category: "Wholesale", img: images.gallery.g2 },
        { title: "Market Expansion", category: "Strategy", img: images.gallery.g1 },
        { title: "Partnership Network", category: "Business", img: images.gallery.g4 }
      ]
    }
  };

  const current = data[id as keyof typeof data];

  if (!current) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h2 className="text-2xl font-serif text-teal-800 mb-4">Business not found</h2>
          <Link to="/" className="text-brand-orange hover:underline inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const primaryColor = current.id === 'kitchen' ? 'text-brand-orange' : 'text-teal-800';
  const bgColor = current.id === 'kitchen' ? 'bg-orange-50' : 'bg-teal-50';
  const btnColor = current.id === 'kitchen' ? 'bg-brand-orange hover:bg-orange-700' : current.id === 'nikhil' ? 'bg-teal-800 hover:bg-teal-900' : 'bg-teal-800 hover:bg-teal-900';

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className={`${bgColor} pt-32 pb-20 overflow-hidden relative`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <img loading="lazy" src={current.logo} alt={`${current.title} Logo`} className="h-24 w-auto object-contain mb-6" />
              <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-4">{current.heroSubtitle}</p>
              <h1 className="text-5xl md:text-7xl font-serif text-gray-900 leading-tight mb-6">
                {current.heroTitleLine1}<br />
                <span className={primaryColor}>{current.heroTitleLine2}</span>
              </h1>
              <p className="text-gray-600 text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
                {current.heroDesc}
              </p>
              <button className={`${btnColor} text-white px-8 py-3.5 rounded font-medium transition-colors inline-flex items-center gap-2`}>
                Explore Our Work <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="flex-1 w-full relative">
               {/* Curved Image mask */}
               <div className="relative aspect-[4/3] md:aspect-square overflow-hidden rounded-l-full shadow-2xl">
                  <img loading="lazy" src={current.heroImg} alt={current.title} className="w-full h-full object-cover" />
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Who We Are */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="flex items-center gap-4 mb-6">
               <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Who We Are</p>
               <div className="h-[1px] w-12 bg-gray-300"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8 leading-tight">
              Designing Spaces.<br />
              <span className={primaryColor}>Delivering Experiences.</span>
            </h2>
            <div className="space-y-6 text-gray-600">
              <p className="leading-relaxed">{current.details}</p>
              <p className="leading-relaxed font-medium text-gray-800">{current.details2}</p>
              <p className="leading-relaxed text-sm">{current.details3}</p>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <img loading="lazy" src={current.whoWeAreImg} alt="Who We Are" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Features Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Turnkey Interior Solutions", icon: <Building2 className={`w-6 h-6 ${primaryColor}`} /> },
            { title: "Custom Modular Furniture", icon: <Wrench className={`w-6 h-6 ${primaryColor}`} /> },
            { title: "Residential & Commercial Expertise", icon: <Home className={`w-6 h-6 ${primaryColor}`} /> },
            { title: "End-to-End Project Execution", icon: <Settings className={`w-6 h-6 ${primaryColor}`} /> }
          ].map((feat, idx) => (
             <div key={idx} className="bg-white border border-gray-100 shadow-sm p-6 rounded-xl flex items-start gap-4 hover:shadow-md transition-shadow">
               <div className="shrink-0">{feat.icon}</div>
               <p className="font-medium text-gray-800 leading-tight">{feat.title}</p>
             </div>
          ))}
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
               <div className="flex items-center gap-4 mb-4">
                 <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Our Featured Work</p>
               </div>
               <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">Spaces That Inspire</h2>
               <p className="text-gray-600 max-w-xl">From concept to completion, we craft interiors that are functional, aesthetic, and truly transformative.</p>
            </div>
            <button className={`${btnColor} text-white px-6 py-2.5 rounded text-sm font-medium transition-colors inline-flex items-center gap-2 shrink-0`}>
                View All Projects <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {current.showcase.map((item, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
                  <img loading="lazy" src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="font-semibold text-gray-900 text-lg flex items-center justify-between">
                  {item.title} <ArrowRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </h3>
                <p className="text-gray-500 text-sm mt-1">{item.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-16">
          <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-4">Our Process</p>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">From Concept to Creation</h2>
          <p className="text-gray-600">A seamless design journey crafted to bring your vision to life with precision and care.</p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-6 left-0 w-full h-[2px] bg-gray-200"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6 lg:gap-4 relative z-10">
            {[
              { num: "01", title: "Initial Consultation", desc: "Understanding requirements, Site visit, Initial discussion" },
              { num: "02", title: "Planning & Concept", desc: "Space planning, Mood boards, Material selection, Budget estimation" },
              { num: "03", title: "Design Development", desc: "2D Layout, 3D Visualization, Client revisions, Final approval" },
              { num: "04", title: "Material Procurement", desc: "Premium material sourcing, Quality inspection, Manufacturing planning" },
              { num: "05", title: "Manufacturing", desc: "Modular furniture production, Precision craftsmanship, Factory control" },
              { num: "06", title: "Installation", desc: "Professional installation, Site supervision, Final detailing" },
              { num: "07", title: "Project Handover", desc: "Final inspection, Client walkthrough, Handover, After-sales support" }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center gap-4">
                <div className={`w-12 h-12 rounded-full ${btnColor} text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-md`}>
                  {step.num}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-2">{step.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer is handled globally, but we can add an extra minimal one if we wanted, let's leave it to global. */}
    </div>
  );
}
