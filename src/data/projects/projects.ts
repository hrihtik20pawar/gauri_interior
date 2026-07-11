import { images } from '../../constants/images';

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  type: string;
  location: string;
  year: number;
  image: string;
  gallery: string[];
  description: string;
  featured: boolean;
}

export const projectCategories = [
  "All Projects",
  "Residential",
  "Commercial",
  "Modular Kitchen",
  "Living Room",
  "Bedroom",
  "Dining",
  "Office",
  "Luxury Villas",
  "Apartments",
  "Renovation",
  "Turnkey Projects"
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Mazda Residence",
    slug: "mazda-residence",
    category: "Residential",
    type: "Turnkey Projects",
    location: "Mumbai",
    year: 2023,
    image: images.projects.oasisVilla.main,
    gallery: images.projects.oasisVilla.gallery,
    description: "A complete turnkey interior design project for a luxury residence featuring modern contemporary styling, custom Italian marble, and bespoke furniture.",
    featured: true
  },
  {
    id: "2",
    title: "Hemco Pharma Office",
    slug: "hemco-pharma-office",
    category: "Office",
    type: "Commercial",
    location: "Mumbai",
    year: 2024,
    image: images.projects.zenWorkspace.main,
    gallery: images.projects.zenWorkspace.gallery,
    description: "A modern office space designed to foster creativity and collaboration with ergonomic modular furniture and premium finishes.",
    featured: true
  },
  {
    id: "3",
    title: "Cravin Cafe",
    slug: "cravin-cafe",
    category: "Hotels & Restaurants",
    type: "Hospitality",
    location: "Mumbai",
    year: 2023,
    image: images.projects.minimalistKitchen.main,
    gallery: images.projects.minimalistKitchen.gallery,
    description: "A stylish cafe interior with premium materials, ambient lighting, and thoughtful space planning for an exceptional dining experience.",
    featured: true
  },
  {
    id: "4",
    title: "Big Mishra Display Unit",
    slug: "big-mishra-display",
    category: "Display Units",
    type: "Commercial",
    location: "Mumbai",
    year: 2022,
    image: images.projects.skylinePenthouse.main,
    gallery: images.projects.skylinePenthouse.gallery,
    description: "A stunning display unit featuring custom brass accents, premium finishes, and elegant product presentation.",
    featured: false
  },
  {
    id: "5",
    title: "KRA Jewellery Showroom",
    slug: "kra-jewellery-showroom",
    category: "Jewellery Shops",
    type: "Retail",
    location: "Mumbai",
    year: 2023,
    image: images.projects.boutiqueRetail.main,
    gallery: images.projects.boutiqueRetail.gallery,
    description: "Chic retail interior designed for a premium jewellery showroom, optimizing customer flow and product display with luxurious finishes.",
    featured: false
  },
  {
    id: "6",
    title: "PISPL Call Center",
    slug: "pispl-call-center",
    category: "Office",
    type: "Commercial",
    location: "Mumbai",
    year: 2024,
    image: images.projects.modernRenovation.main,
    gallery: images.projects.modernRenovation.gallery,
    description: "Complete transformation of a commercial space into a modern, efficient call center with ergonomic workstations.",
    featured: true
  }
];
