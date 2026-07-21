import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Home, Settings, Building2, Wrench, CheckCircle } from 'lucide-react';
import { useEffect } from 'react';
import { images } from '../../constants/images';
import OtherBusinesses from '../../components/other-businesses/OtherBusinesses';
import BrandName from '../../components/brand-name/BrandName';

export default function BusinessDetail() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const data = {
    interior: {
      id: "interior",
      logo: images.businesses.interiorLogo || images.logo,
      title: "Gauri Interior Pvt. Ltd.",
      heroSubtitle: "DESIGNING SPACES THAT",
      heroTitleLine1: "Building Trust.",
      heroTitleLine2: "",
      heroDesc: "Established in 2012, GAURI INTERIOR PVT. LTD. is the flagship company of the GAURI GROUP, specializing in comprehensive turnkey interior contracting solutions.",
      heroImg: images.businesses.interior,
      whoWeAreImg: images.gallery.g8,
      details: "Established in 2012, GAURI INTERIOR PVT. LTD. is the flagship company of the GAURI GROUP, specializing in comprehensive turnkey interior contracting solutions. Built upon a legacy that began in 1993, the company has grown into a trusted name in the interior industry by consistently delivering projects with exceptional quality, innovation, and precision.",
      details2: "We offer end-to-end interior solutions for corporate offices, commercial spaces, retail outlets, hospitality, healthcare, educational institutions, industrial facilities, and premium residences. From design coordination and manufacturing to execution, installation, and project management, every project is managed under one roof.",
      details3: "Our commitment to superior craftsmanship, advanced manufacturing, timely execution, and customer satisfaction has enabled us to build lasting relationships with clients across India.",
      services: [
        "Turnkey Interior Contracting",
        "Corporate Office Interiors",
        "Commercial & Retail Fit-Outs",
        "Healthcare & Educational Interiors",
        "Hospitality Interiors",
        "Custom Furniture Manufacturing",
        "Civil, Electrical & MEP Coordination",
        "Project Management & Execution"
      ],
      promise: "Delivering functional, innovative, and inspiring spaces that exceed client expectations.",
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
      heroSubtitle: "WHERE FUNCTIONALITY MEETS",
      heroTitleLine1: "Elegance.",
      heroTitleLine2: "",
      heroDesc: "Established in 2018, GAURI'S KITCHEN is the modular kitchen and furniture division of the GAURI GROUP, dedicated to designing and manufacturing stylish, functional, and customized living spaces.",
      heroImg: images.businesses.kitchen,
      whoWeAreImg: images.gallery.g5,
      details: "Established in 2018, GAURI'S KITCHEN is the modular kitchen and furniture division of the GAURI GROUP, dedicated to designing and manufacturing stylish, functional, and customized living spaces.",
      details2: "We specialize in premium modular kitchens, wardrobes, TV units, bedroom furniture, storage solutions, and bespoke home interiors tailored to every lifestyle and budget. By combining innovative design with quality materials and precision manufacturing, we create spaces that are beautiful, practical, and built to last.",
      details3: "Every project is carefully planned to maximize space, enhance usability, and reflect the unique personality of each client.",
      services: [
        "Modular Kitchens",
        "Wardrobes & Walk-in Closets",
        "TV Units & Entertainment Walls",
        "Bedroom Furniture",
        "Living Room Furniture",
        "Storage & Utility Solutions",
        "Custom Residential Interiors"
      ],
      promise: "Creating smart, elegant, and functional homes with superior craftsmanship and personalized design.",
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
      heroSubtitle: "TRANSFORMING IDEAS INTO",
      heroTitleLine1: "Inspiring Designs.",
      heroTitleLine2: "",
      heroDesc: "Launching in 2027, GAURI'S DESIGNING STUDIO will be the creative design consultancy division of the GAURI GROUP, offering innovative architectural, interior, and space-planning solutions.",
      heroImg: images.businesses.studio,
      whoWeAreImg: images.gallery.g7,
      details: "Launching in 2027, GAURI'S DESIGNING STUDIO will be the creative design consultancy division of the GAURI GROUP, offering innovative architectural, interior, and space-planning solutions for residential, commercial, hospitality, retail, and institutional projects.",
      details2: "The studio will focus on creating intelligent, sustainable, and aesthetically refined environments through thoughtful planning, creative visualization, and detail-oriented design. Every project will be approached with a balance of functionality, innovation, and timeless elegance.",
      details3: "From concept development and 3D visualization to working drawings and execution support, the studio aims to provide comprehensive design consultancy services tailored to each client's vision.",
      services: [
        "Interior Design Consultancy",
        "Architectural Planning",
        "Space Planning",
        "2D Layouts & Working Drawings",
        "3D Visualization & Rendering",
        "Material & Finish Selection",
        "Furniture & Lighting Design",
        "Design Supervision & Consultation"
      ],
      promise: "To become a leading design consultancy known for creativity, innovation, and design excellence while shaping spaces that inspire generations.",
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
      title: "Nikhil Enterprises",
      heroSubtitle: "YOUR TRUSTED PARTNER FOR",
      heroTitleLine1: "Premium Interior Materials.",
      heroTitleLine2: "",
      heroDesc: "Founded in 2017, NIKHIL ENTERPRISES serves as the procurement and distribution arm of the GAURI GROUP, supplying high-quality hardware, plywood, laminates, decorative surfaces, modular fittings, and allied interior products.",
      heroImg: images.businesses.nikhil,
      whoWeAreImg: images.gallery.g8,
      details: "Founded in 2017, NIKHIL ENTERPRISES serves as the procurement and distribution arm of the GAURI GROUP, supplying high-quality hardware, plywood, laminates, decorative surfaces, modular fittings, and allied interior products.",
      details2: "We work with leading national and international brands to provide architects, interior designers, contractors, builders, and homeowners with reliable products that combine durability, functionality, and aesthetics.",
      details3: "With a strong focus on product quality, competitive pricing, inventory availability, and prompt service, NIKHIL ENTERPRISES has become a trusted destination for complete interior material solutions.",
      services: [
        "Plywood, MDF, HDHMR & Block Boards",
        "Laminates, Veneers & Decorative Panels",
        "Architectural Hardware",
        "Modular Kitchen Accessories",
        "Wardrobe & Furniture Fittings",
        "Sliding Systems & Drawer Channels",
        "Adhesives, Edge Bands & Accessories"
      ],
      promise: "Quality products, trusted brands, and dependable service—all under one roof.",
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

  const isInterior = current.id === 'interior';
  const interiorData = isInterior ? data.interior : null;
  const isNikhil = current.id === 'nikhil';
  const nikhilData = isNikhil ? data.nikhil : null;
  const isKitchen = current.id === 'kitchen';
  const kitchenData = isKitchen ? data.kitchen : null;
  const isStudio = current.id === 'studio';
  const studioData = isStudio ? data.studio : null;
  const primaryColor = current.id === 'kitchen' ? 'text-brand-orange' : 'text-teal-800';
  const bgColor = current.id === 'kitchen' ? 'bg-orange-50' : 'bg-teal-50';
  const btnColor = current.id === 'kitchen' ? 'bg-brand-orange hover:bg-orange-700' : current.id === 'nikhil' ? 'bg-teal-800 hover:bg-teal-900' : 'bg-teal-800 hover:bg-teal-900';

  if (isInterior) {
    return (
      <div className="min-h-screen bg-white">

        <div className="bg-teal-50 pt-24 pb-20 overflow-hidden relative">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <img loading="lazy" src={current.logo} alt={`${current.title} Logo`} className="h-16 w-auto object-contain mb-6" style={{ imageRendering: '-webkit-optimize-contrast' }} />
                <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-4">{current.heroSubtitle}</p>
                <h1 className="text-5xl md:text-7xl font-serif text-gray-900 leading-tight mb-6">
                  {current.heroTitleLine1}
                </h1>
                <p className="text-gray-600 text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
                  <BrandName as="span">{current.heroDesc}</BrandName>
                </p>
                <Link to="/#businesses" className="bg-teal-800 hover:bg-teal-900 text-white px-8 py-3.5 rounded font-medium transition-colors inline-flex items-center gap-2">
                  Explore Our Work <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="flex-1 w-full relative">
                <div className="relative aspect-[4/3] md:aspect-square overflow-hidden rounded-l-full shadow-2xl">
                  <img loading="lazy" src={current.heroImg} alt={current.title} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="py-24 max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <p className="text-sm font-semibold tracking-widest text-brand-orange uppercase">About Us</p>
                <div className="h-[1px] w-12 bg-brand-orange"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-green mb-8 leading-tight">
                <BrandName as="span">Gauri Interior</BrandName><br />Pvt. Ltd.
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p><BrandName as="span">{current.details}</BrandName></p>
                <p className="font-medium text-gray-800">{current.details2}</p>
                <p className="text-gray-600">{current.details3}</p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <img loading="lazy" src={current.whoWeAreImg} alt="Who We Are" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -left-4 lg:-left-8 bg-brand-orange text-white rounded-2xl shadow-2xl p-6 max-w-[200px]">
                <p className="text-4xl font-serif font-bold mb-1">30+</p>
                <p className="text-sm text-white/80">Years of Excellence</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-50 border-t border-gray-100">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold tracking-widest text-brand-orange uppercase mb-4">What We Do</p>
              <h2 className="text-3xl md:text-4xl font-serif text-brand-green mb-4">Our Services</h2>
              <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {(() => {
                const serviceCategoryMap: Record<string, string> = {
                  "Turnkey Interior Contracting": "All",
                  "Corporate Office Interiors": "Offices",
                  "Commercial & Retail Fit-Outs": "Outlets",
                  "Healthcare & Educational Interiors": "Hospitals",
                  "Hospitality Interiors": "Hotels & Restaurants",
                  "Custom Furniture Manufacturing": "Display Units",
                  "Civil, Electrical & MEP Coordination": "Lobbies & Amenities",
                  "Project Management & Execution": "All",
                };
                return interiorData!.services.map((service, idx) => {
                  const category = serviceCategoryMap[service] || "All";
                  return (
                    <Link
                      key={idx}
                      to={`/gallery?category=${encodeURIComponent(category)}`}
                      className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-75 block"
                    >
                      <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center mb-4">
                        <CheckCircle className="w-6 h-6 text-brand-teal" />
                      </div>
                      <h3 className="font-semibold text-gray-900 text-base">{service}</h3>
                    </Link>
                  );
                });
              })()}
            </div>

            <div className="mt-16 bg-brand-green rounded-2xl p-8 md:p-12 text-center">
              <p className="text-white/80 text-sm font-semibold tracking-widest uppercase mb-4">Our Promise</p>
              <p className="text-white text-xl md:text-2xl font-serif italic max-w-3xl mx-auto">
                "{interiorData!.promise}"
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-widest text-brand-orange uppercase mb-4">Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-serif text-brand-green mb-4">Featured Work</h2>
            <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {current.showcase.map((item, idx) => (
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

        <OtherBusinesses currentId="interior" />
      </div>
    );
  }

  if (isKitchen) {
    return (
      <div className="min-h-screen bg-white">
        <div className="bg-orange-50 pt-24 pb-20 overflow-hidden relative">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <img loading="lazy" src={current.logo} alt={`${current.title} Logo`} className="h-24 w-auto object-contain mb-6" style={{ imageRendering: '-webkit-optimize-contrast' }} />
                <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-4">{current.heroSubtitle}</p>
                <h1 className="text-5xl md:text-7xl font-serif text-gray-900 leading-tight mb-6">
                  {current.heroTitleLine1}
                </h1>
                <p className="text-gray-600 text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
                  <BrandName as="span">{current.heroDesc}</BrandName>
                </p>
                <Link to="/#businesses" className="bg-brand-orange hover:bg-orange-700 text-white px-8 py-3.5 rounded font-medium transition-colors inline-flex items-center gap-2">
                  Explore Our Work <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="flex-1 w-full relative">
                <div className="relative aspect-[4/3] md:aspect-square overflow-hidden rounded-l-full shadow-2xl">
                  <img loading="lazy" src={current.heroImg} alt={current.title} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="py-24 max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <p className="text-sm font-semibold tracking-widest text-brand-orange uppercase">About Us</p>
                <div className="h-[1px] w-12 bg-brand-orange"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-green mb-8 leading-tight">
                <BrandName as="span">Gauri's</BrandName><br />Kitchen
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p><BrandName as="span">{kitchenData!.details}</BrandName></p>
                <p className="font-medium text-gray-800"><BrandName as="span">{kitchenData!.details2}</BrandName></p>
                <p className="text-gray-600">{kitchenData!.details3}</p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <img loading="lazy" src={current.whoWeAreImg} alt="Who We Are" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -left-4 lg:-left-8 bg-brand-orange text-white rounded-2xl shadow-2xl p-6 max-w-[200px]">
                <p className="text-4xl font-serif font-bold mb-1">2018</p>
                <p className="text-sm text-white/80">Established</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-50 border-t border-gray-100">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold tracking-widest text-brand-orange uppercase mb-4">What We Offer</p>
              <h2 className="text-3xl md:text-4xl font-serif text-brand-green mb-4">Our Solutions</h2>
              <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {kitchenData!.services.map((service, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-75">
                  <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-brand-orange" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-base">{service}</h3>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-brand-green rounded-2xl p-8 md:p-12 text-center">
              <p className="text-white/80 text-sm font-semibold tracking-widest uppercase mb-4">Our Promise</p>
              <p className="text-white text-xl md:text-2xl font-serif italic max-w-3xl mx-auto">
                "{kitchenData!.promise}"
              </p>
            </div>
          </div>
        </section>


        <section className="py-24 max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-widest text-brand-orange uppercase mb-4">Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-serif text-brand-green mb-4">Featured Work</h2>
            <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {current.showcase.map((item, idx) => (
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

        <OtherBusinesses currentId="kitchen" />
      </div>
    );
  }

  if (isNikhil) {
    return (
      <div className="min-h-screen bg-white">
        <div className="bg-teal-50 pt-24 pb-20 overflow-hidden relative">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <img loading="lazy" src={current.logo} alt={`${current.title} Logo`} className="h-24 w-auto object-contain mb-6" style={{ imageRendering: '-webkit-optimize-contrast' }} />
                <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-4">{current.heroSubtitle}</p>
                <h1 className="text-5xl md:text-7xl font-serif text-gray-900 leading-tight mb-6">
                  {current.heroTitleLine1}
                </h1>
                <p className="text-gray-600 text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
                  <BrandName as="span">{current.heroDesc}</BrandName>
                </p>
                <Link to="/#businesses" className="bg-teal-800 hover:bg-teal-900 text-white px-8 py-3.5 rounded font-medium transition-colors inline-flex items-center gap-2">
                  Explore Our Work <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="flex-1 w-full relative">
                <div className="relative aspect-[4/3] md:aspect-square overflow-hidden rounded-l-full shadow-2xl">
                  <img loading="lazy" src={current.heroImg} alt={current.title} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="py-24 max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <p className="text-sm font-semibold tracking-widest text-brand-orange uppercase">About Us</p>
                <div className="h-[1px] w-12 bg-brand-orange"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-green mb-8 leading-tight">
                Nikhil<br />Enterprises
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p><BrandName as="span">{nikhilData!.details}</BrandName></p>
                <p className="font-medium text-gray-800">{nikhilData!.details2}</p>
                <p className="text-gray-600">{nikhilData!.details3}</p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <img loading="lazy" src={current.whoWeAreImg} alt="Who We Are" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -left-4 lg:-left-8 bg-brand-orange text-white rounded-2xl shadow-2xl p-6 max-w-[200px]">
                <p className="text-4xl font-serif font-bold mb-1">2017</p>
                <p className="text-sm text-white/80">Founded</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-50 border-t border-gray-100">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold tracking-widest text-brand-orange uppercase mb-4">What We Offer</p>
              <h2 className="text-3xl md:text-4xl font-serif text-brand-green mb-4">Product Categories</h2>
              <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {nikhilData!.services.map((service, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-75">
                  <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-brand-teal" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-base">{service}</h3>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-brand-green rounded-2xl p-8 md:p-12 text-center">
              <p className="text-white/80 text-sm font-semibold tracking-widest uppercase mb-4">Our Promise</p>
              <p className="text-white text-xl md:text-2xl font-serif italic max-w-3xl mx-auto">
                "{nikhilData!.promise}"
              </p>
            </div>
          </div>
        </section>


        <section className="py-24 max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-widest text-brand-orange uppercase mb-4">Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-serif text-brand-green mb-4">Featured Work</h2>
            <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {current.showcase.map((item, idx) => (
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

        <OtherBusinesses currentId="nikhil" />
      </div>
    );
  }

  if (isStudio) {
    return (
      <div className="min-h-screen bg-white">
        <div className="bg-teal-50 pt-24 pb-20 overflow-hidden relative">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <img loading="lazy" src={current.logo} alt={`${current.title} Logo`} className="h-16 w-auto object-contain mb-6" style={{ imageRendering: '-webkit-optimize-contrast' }} />
                <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-4">{current.heroSubtitle}</p>
                <h1 className="text-5xl md:text-7xl font-serif text-gray-900 leading-tight mb-6">
                  {current.heroTitleLine1}
                </h1>
                <p className="text-gray-600 text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
                  <BrandName as="span">{current.heroDesc}</BrandName>
                </p>
                <span className="bg-brand-orange text-white px-8 py-3.5 rounded font-medium inline-flex items-center gap-2 cursor-default">
                  Launching Soon
                </span>
              </div>
              <div className="flex-1 w-full relative">
                <div className="relative aspect-[4/3] md:aspect-square overflow-hidden rounded-l-full shadow-2xl">
                  <img loading="lazy" src={current.heroImg} alt={current.title} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="py-24 max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <p className="text-sm font-semibold tracking-widest text-brand-orange uppercase">About Us</p>
                <div className="h-[1px] w-12 bg-brand-orange"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-green mb-8 leading-tight">
                <BrandName as="span">Gauri's Designing</BrandName><br />Studio
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p><BrandName as="span">{studioData!.details}</BrandName></p>
                <p className="font-medium text-gray-800"><BrandName as="span">{studioData!.details2}</BrandName></p>
                <p className="text-gray-600">{studioData!.details3}</p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <img loading="lazy" src={current.whoWeAreImg} alt="Who We Are" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -left-4 lg:-left-8 bg-brand-orange text-white rounded-2xl shadow-2xl p-6 max-w-[200px]">
                <p className="text-4xl font-serif font-bold mb-1">2027</p>
                <p className="text-sm text-white/80">Launching Soon</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-50 border-t border-gray-100">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold tracking-widest text-brand-orange uppercase mb-4">Planned Services</p>
              <h2 className="text-3xl md:text-4xl font-serif text-brand-green mb-4">What We Offer</h2>
              <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {studioData!.services.map((service, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-75">
                  <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-brand-teal" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-base">{service}</h3>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-brand-green rounded-2xl p-8 md:p-12 text-center">
              <p className="text-white/80 text-sm font-semibold tracking-widest uppercase mb-4">Our Vision</p>
              <p className="text-white text-xl md:text-2xl font-serif italic max-w-3xl mx-auto">
                "{studioData!.promise}"
              </p>
            </div>
          </div>
        </section>

        <OtherBusinesses currentId="studio" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className={`${bgColor} pt-24 pb-20 overflow-hidden relative`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <img loading="lazy" src={current.logo} alt={`${current.title} Logo`} className="h-16 w-auto object-contain mb-6" style={{ imageRendering: '-webkit-optimize-contrast' }} />
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
               <div className="relative aspect-[4/3] md:aspect-square overflow-hidden rounded-l-full shadow-2xl">
                  <img loading="lazy" src={current.heroImg} alt={current.title} className="w-full h-full object-cover" />
               </div>
            </div>
          </div>
        </div>
      </div>

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

            {studioData && studioData.services && (
              <div className="mt-8">
                <h3 className="text-xl font-serif text-gray-900 mb-4">Services</h3>
                <ul className="space-y-2">
                  {studioData.services.map((service, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0"></span>
                      {service}
                    </li>
                  ))}
                </ul>
                {studioData.promise && (
                  <p className="mt-6 text-gray-800 font-medium italic">
                    <strong>Our Promise:</strong> {studioData.promise}
                  </p>
                )}
              </div>
            )}
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <img loading="lazy" src={current.whoWeAreImg} alt="Who We Are" className="w-full h-full object-cover" />
          </div>
        </div>

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
                  <img loading="lazy" src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
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

      <section className="py-24 max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-16">
          <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-4">Our Process</p>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">From Concept to Creation</h2>
          <p className="text-gray-600">A seamless design journey crafted to bring your vision to life with precision and care.</p>
        </div>

        <div className="relative">
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
      </div>
    );
  }

