import { imageInventory } from '../imageInventory';

export interface GalleryImage {
  id: string;
  title: string;
  category: string;
  image: string;
  span?: "col-span-1" | "col-span-2" | "col-span-3" | "row-span-2";
  type?: "gallery";
}

export const galleryCategories = [
  "All",
  "Offices",
  "Hotels & Restaurants",
  "Residential",
  "Jewellery Shops",
  "Outlets",
  "Airports",
  "Hospitals",
  "Lobbies & Amenities",
  "Display Units"
];

const categoryMap: Record<string, string> = {
  offices: "Offices",
  hotel_and_restaurant: "Hotels & Restaurants",
  residencial: "Residential",
  jewellary_shope: "Jewellery Shops",
  outlet: "Outlets",
  airport: "Airports",
  hospital: "Hospitals",
  lobby_and_building_amenties: "Lobbies & Amenities",
  display_unit: "Display Units",
};

function cleanTitle(raw: string): string {
  return raw
    .replace(/^\d+\)\s*/, '')
    .replace(/\s*-\s*Office Work$/i, '')
    .replace(/\s*After\s+complition$/i, '')
    .replace(/\s*FINAL\s+PHOTO.*$/i, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function findImages(obj: any, maxCount: number = 3): string[] {
  const results: string[] = [];
  function recurse(node: any): void {
    if (results.length >= maxCount) return;
    if (Array.isArray(node)) {
      for (const item of node) {
        if (results.length >= maxCount) return;
        if (typeof item === 'string' && /\.(avif|jpg|jpeg|png|webp)$/i.test(item)) {
          results.push(item.replace(/\\/g, '/'));
        }
      }
      return;
    }
    if (node && typeof node === 'object') {
      for (const [key, value] of Object.entries(node)) {
        if (results.length >= maxCount) return;
        if (key === 'files') {
          recurse(value);
        } else if (key !== '_displayName') {
          recurse(value);
        }
      }
    }
  }
  recurse(obj);
  return results;
}

function buildGalleryItems(): GalleryImage[] {
  const items: GalleryImage[] = [];
  let idx = 0;
  const spans: ("col-span-1" | "col-span-2" | "row-span-2")[] = [
    "col-span-1", "col-span-2", "row-span-2", "col-span-1"
  ];

  const website = (imageInventory as any).website;
  if (!website) return items;

  for (const [catKey, catLabel] of Object.entries(categoryMap)) {
    const catData = website[catKey];
    if (!catData) continue;

    for (const [projectKey, projectData] of Object.entries(catData)) {
      if (projectKey === '_displayName') continue;

      const images = findImages(projectData, 3);
      if (images.length === 0) continue;

      const title = cleanTitle(projectKey);

      for (const img of images) {
        idx++;
        items.push({
          id: `g-${idx}`,
          title,
          category: catLabel as string,
          image: img,
          span: spans[idx % spans.length] as GalleryImage['span'],
          type: "gallery",
        });
      }
    }
  }

  return items;
}

export const galleryImages: GalleryImage[] = buildGalleryItems();
