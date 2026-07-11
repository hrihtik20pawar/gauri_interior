import inventory from './imageInventory.json';

export type ImageInventory = typeof inventory;

export type WebsiteCategory = keyof ImageInventory['website'];

export interface ImageEntry {
  name: string;
  category: string;
  subcategory: string;
  path: string;
}

export function getAllImages(): ImageEntry[] {
  const images: ImageEntry[] = [];
  const inv = inventory as Record<string, any>;

  for (const [category, data] of Object.entries(inv)) {
    if (category === 'website') {
      for (const [subKey, subData] of Object.entries(data as Record<string, any>)) {
        const displayName = subData._displayName || subKey;
        collectImages(subData, category, displayName, images);
      }
    } else {
      collectImages(data, category, category, images);
    }
  }

  return images;
}

function collectImages(obj: any, category: string, subcategory: string, result: ImageEntry[]) {
  if (obj.files) {
    for (const file of obj.files) {
      result.push({
        name: file.split('/').pop() || file,
        category,
        subcategory,
        path: file,
      });
    }
  }
  for (const [key, value] of Object.entries(obj)) {
    if (key !== 'files' && key !== '_displayName' && typeof value === 'object' && value !== null) {
      collectImages(value, category, subcategory, result);
    }
  }
}

export function getImagesByCategory(category: string): ImageEntry[] {
  return getAllImages().filter(img => img.category === category);
}

export function getImagesBySubcategory(subcategory: string): ImageEntry[] {
  return getAllImages().filter(img => img.subcategory === subcategory);
}

export const imageInventory = inventory;
