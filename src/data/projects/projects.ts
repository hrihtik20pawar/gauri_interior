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
    title: "The Oasis Villa",
    slug: "luxury-villa-mumbai",
    category: "Luxury Villas",
    type: "Turnkey Projects",
    location: "Mumbai",
    year: 2023,
    image: images.projects.oasisVilla.main,
    gallery: images.projects.oasisVilla.gallery,
    description: "A complete turnkey interior design project for a 5BHK luxury villa. Features modern contemporary styling, custom Italian marble, and bespoke furniture.",
    featured: true
  },
  {
    id: "2",
    title: "Zen Workspace",
    slug: "modern-office-pune",
    category: "Office",
    type: "Commercial",
    location: "Pune",
    year: 2024,
    image: images.projects.zenWorkspace.main,
    gallery: images.projects.zenWorkspace.gallery,
    description: "A 10,000 sq ft modern office space designed to foster creativity and collaboration with ergonomic modular furniture.",
    featured: true
  },
  {
    id: "3",
    title: "Minimalist Kitchen",
    slug: "modular-kitchen-thane",
    category: "Modular Kitchen",
    type: "Residential",
    location: "Thane",
    year: 2023,
    image: images.projects.minimalistKitchen.main,
    gallery: images.projects.minimalistKitchen.gallery,
    description: "Smart storage solutions meets sleek handle-less design in this premium acrylic finish modular kitchen.",
    featured: true
  },
  {
    id: "4",
    title: "Skyline Penthouse",
    slug: "penthouse-interior",
    category: "Living Room",
    type: "Residential",
    location: "Mumbai",
    year: 2022,
    image: images.projects.skylinePenthouse.main,
    gallery: images.projects.skylinePenthouse.gallery,
    description: "A breathtaking living room with panoramic city views, featuring custom brass accents and velvet upholstery.",
    featured: false
  },
  {
    id: "5",
    title: "Boutique Retail Store",
    slug: "boutique-retail-commercial",
    category: "Commercial",
    type: "Turnkey Projects",
    location: "Navi Mumbai",
    year: 2023,
    image: images.projects.boutiqueRetail.main,
    gallery: images.projects.boutiqueRetail.gallery,
    description: "Chic retail interior designed for a high-end fashion boutique, optimizing customer flow and product display.",
    featured: false
  },
  {
    id: "6",
    title: "Modern 3BHK Renovation",
    slug: "modern-apartment-renovation",
    category: "Renovation",
    type: "Apartments",
    location: "Mumbai",
    year: 2024,
    image: images.projects.modernRenovation.main,
    gallery: images.projects.modernRenovation.gallery,
    description: "Complete transformation of a 15-year-old apartment into a smart, energy-efficient modern home.",
    featured: true
  }
];
