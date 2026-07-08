import { images } from '../../constants/images';
import { projects } from '../projects/projects';

export interface GalleryImage {
  id: string;
  title: string;
  category: string;
  image: string;
  span?: "col-span-1" | "col-span-2" | "col-span-3" | "row-span-2";
  type?: "gallery" | "project";
  slug?: string;
  location?: string;
  year?: number;
  description?: string;
}

export const galleryCategories = [
  "All",
  "Work Station",
  "Residential",
  "Commercial",
  "Modular Furniture",
  "Modular Kitchen",
  "Living Room",
  "Bedroom",
  "Luxury Villas",
  "Infrastructure"
];

const galleryItems: GalleryImage[] = images.gallery_arr.map((img, idx) => {
  const spans: ("col-span-1" | "col-span-2" | "row-span-2")[] = ["col-span-1", "col-span-2", "row-span-2", "col-span-1"];
  const randomSpan = spans[idx % spans.length];
  
  const categoryMap: Record<number, string> = {
    0: "Work Station", 1: "Residential", 2: "Commercial", 3: "Modular Furniture",
    4: "Work Station", 5: "Infrastructure", 6: "Residential", 7: "Commercial",
    8: "Modular Furniture", 9: "Work Station", 10: "Infrastructure", 11: "Residential",
    12: "Commercial", 13: "Modular Furniture", 14: "Work Station", 15: "Infrastructure",
    16: "Residential", 17: "Commercial", 18: "Modular Furniture", 19: "Work Station",
    20: "Infrastructure", 21: "Residential", 22: "Commercial", 23: "Modular Furniture",
    24: "Work Station", 25: "Infrastructure", 26: "Residential", 27: "Commercial",
  };
  
  return {
    id: `g${idx + 1}`,
    title: `Project Display ${idx + 1}`,
    category: categoryMap[idx] || "Work Station",
    image: img,
    span: randomSpan as GalleryImage['span'],
    type: "gallery",
  };
});

const projectItems: GalleryImage[] = projects.map((p) => ({
  id: `p-${p.id}`,
  title: p.title,
  category: p.category,
  image: p.image,
  span: "col-span-1" as const,
  type: "project",
  slug: p.slug,
  location: p.location,
  year: p.year,
  description: p.description,
}));

export const galleryImages: GalleryImage[] = [...projectItems, ...galleryItems];
