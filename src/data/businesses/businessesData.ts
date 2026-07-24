import { images } from '../../constants/images';

export interface BusinessData {
  id: string;
  logo: string;
  title: string;
  heroSubtitle: string;
  heroTitleLine1: string;
  heroTitleLine2: string;
  heroDesc: string;
  heroImg: string;
  whoWeAreImg: string;
  details: string;
  details2: string;
  details3: string;
  services: string[];
  promise: string;
  showcase: { title: string; category: string; img: string }[];
  heroBtnLabel?: string;
  heroBtnLink?: string;
  servicesTitle?: string;
  promiseLabel?: string;
  badge?: { text: string; subtext: string };
  aboutTitle?: string;
}

export const businessesData: Record<string, BusinessData> = {
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
    badge: { text: "30+", subtext: "Years of Excellence" },
    aboutTitle: "Gauri Interior\nPvt. Ltd.",
    servicesTitle: "Our Services",
    promiseLabel: "Our Promise",
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
    badge: { text: "2018", subtext: "Established" },
    aboutTitle: "Gauri's\nKitchen",
    servicesTitle: "Our Solutions",
    promiseLabel: "Our Promise",
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
    heroBtnLabel: "Launching Soon",
    badge: { text: "2027", subtext: "Launching Soon" },
    aboutTitle: "Gauri's Designing\nStudio",
    servicesTitle: "What We Offer",
    promiseLabel: "Our Vision",
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
    badge: { text: "2017", subtext: "Founded" },
    aboutTitle: "Nikhil\nEnterprises",
    servicesTitle: "Product Categories",
    promiseLabel: "Our Promise",
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
