export interface GalleryImage {
  id: string;
  title: string;
  category: string;
  image: string;
  companyLogo?: string;
  span?: "col-span-1" | "col-span-2" | "col-span-3" | "row-span-2";
  type?: "gallery";
}

export const galleryCategories = [
  "All",
  "Offices",
  "Hotels & Restaurants",
  "Residential",
  "Outlets",
];

interface FolderConfig {
  folder: string;
  title: string;
  category: string;
  companyLogo?: string;
}

const folders: FolderConfig[] = [
  { folder: "6. PENINSULA", title: "Peninsula", category: "Hotels & Restaurants", companyLogo: "/images/clients/client-13-26-37.avif" },
  { folder: "7. PIPSL CHENNAI GODOWN", title: "PIPSL Chennai Godown", category: "Outlets", companyLogo: "/images/clients/client-13-27-46.avif" },
  { folder: "8. JAINHIND COLLEGE LABORATORY", title: "Jainhind College Laboratory", category: "Offices", companyLogo: "/images/clients/client-13-28-33.avif" },
  { folder: "9. SANJAY KAPOOR OFFICE", title: "Sanjay Kapoor Office", category: "Offices", companyLogo: "/images/clients/client-13-30-51.avif" },
  { folder: "10. ITC GHATKOPAR", title: "ITC Ghatkopar", category: "Hotels & Restaurants", companyLogo: "/images/clients/client-13-31-26.avif" },
  { folder: "11. TAMARIND TOUR", title: "Tamarind Tour", category: "Hotels & Restaurants", companyLogo: "/images/clients/client-13-33-18.avif" },
  { folder: "12. BOBBY PAREKH", title: "Bobby Parekh", category: "Residential", companyLogo: "/images/clients/client-13-34-21.avif" },
  { folder: "13. PRACTICLE FINANCE", title: "Practicle Finance", category: "Offices", companyLogo: "/images/clients/client-13-36-36.avif" },
  { folder: "14. AMARDEEP PROJECTS", title: "Amardeep Projects", category: "Residential", companyLogo: "/images/clients/client-13-41-57.avif" },
  { folder: "15. UNITED SHIPPERS", title: "United Shippers", category: "Offices", companyLogo: "/images/clients/client-13-52-04.avif" },
  { folder: "Bharat Residential", title: "Bharat Residential", category: "Residential", companyLogo: "/images/clients/client-13-53-29.avif" },
  { folder: "BMR ADVISOR OFFICE", title: "BMR Advisor Office", category: "Offices", companyLogo: "/images/clients/client-14-55-36.avif" },
  { folder: "CRAVIN CAFE", title: "Cravin Cafe", category: "Hotels & Restaurants", companyLogo: "/images/clients/client-14-56-18.avif" },
  { folder: "HEMCO PHARMA", title: "Hemco Pharma", category: "Offices", companyLogo: "/images/clients/client-14-58-05.avif" },
  { folder: "PISPL BPO", title: "PISPL BPO", category: "Offices", companyLogo: "/images/clients/client-15-05-31.avif" },
];

const imageFiles: Record<string, string[]> = {
  "6. PENINSULA": [
    "/images/Final_Images/6. PENINSULA/WhatsApp Image 2026-07-18 at 11.48.05.avif",
    "/images/Final_Images/6. PENINSULA/WhatsApp Image 2026-07-18 at 11.48.34.avif",
    "/images/Final_Images/6. PENINSULA/WhatsApp Image 2026-07-18 at 11.49.23.avif",
    "/images/Final_Images/6. PENINSULA/WhatsApp Image 2026-07-18 at 11.57.44.avif",
    "/images/Final_Images/6. PENINSULA/WhatsApp Image 2026-07-18 at 11.57.48.avif",
    "/images/Final_Images/6. PENINSULA/WhatsApp Image 2026-07-18 at 11.57.55.avif",
  ],
  "7. PIPSL CHENNAI GODOWN": [
    "/images/Final_Images/7. PIPSL CHENNAI GODOWN/WhatsApp Image 2026-07-18 at 12.07.02.avif",
    "/images/Final_Images/7. PIPSL CHENNAI GODOWN/WhatsApp Image 2026-07-18 at 12.07.08.avif",
    "/images/Final_Images/7. PIPSL CHENNAI GODOWN/WhatsApp Image 2026-07-18 at 12.07.18.avif",
    "/images/Final_Images/7. PIPSL CHENNAI GODOWN/WhatsApp Image 2026-07-18 at 12.07.25.avif",
    "/images/Final_Images/7. PIPSL CHENNAI GODOWN/WhatsApp Image 2026-07-18 at 12.07.34.avif",
  ],
  "8. JAINHIND COLLEGE LABORATORY": [
    "/images/Final_Images/8. JAINHIND COLLEGE LABORATORY/WhatsApp Image 2026-07-18 at 12.14.24.avif",
    "/images/Final_Images/8. JAINHIND COLLEGE LABORATORY/WhatsApp Image 2026-07-18 at 12.14.29.avif",
    "/images/Final_Images/8. JAINHIND COLLEGE LABORATORY/WhatsApp Image 2026-07-18 at 12.14.36.avif",
    "/images/Final_Images/8. JAINHIND COLLEGE LABORATORY/WhatsApp Image 2026-07-18 at 12.14.43.avif",
    "/images/Final_Images/8. JAINHIND COLLEGE LABORATORY/WhatsApp Image 2026-07-18 at 12.14.47.avif",
  ],
  "9. SANJAY KAPOOR OFFICE": [
    "/images/Final_Images/9. SANJAY KAPOOR OFFICE/WhatsApp Image 2026-07-18 at 12.23.09.avif",
    "/images/Final_Images/9. SANJAY KAPOOR OFFICE/WhatsApp Image 2026-07-18 at 12.23.15.avif",
    "/images/Final_Images/9. SANJAY KAPOOR OFFICE/WhatsApp Image 2026-07-18 at 12.23.21.avif",
    "/images/Final_Images/9. SANJAY KAPOOR OFFICE/WhatsApp Image 2026-07-18 at 12.23.26.avif",
    "/images/Final_Images/9. SANJAY KAPOOR OFFICE/WhatsApp Image 2026-07-18 at 12.23.31.avif",
  ],
  "10. ITC GHATKOPAR": [
    "/images/Final_Images/10. ITC GHATKOPAR/WhatsApp Image 2026-07-18 at 12.35.04.avif",
    "/images/Final_Images/10. ITC GHATKOPAR/WhatsApp Image 2026-07-18 at 12.35.10.avif",
    "/images/Final_Images/10. ITC GHATKOPAR/WhatsApp Image 2026-07-18 at 12.35.16.avif",
    "/images/Final_Images/10. ITC GHATKOPAR/WhatsApp Image 2026-07-18 at 12.35.21.avif",
    "/images/Final_Images/10. ITC GHATKOPAR/WhatsApp Image 2026-07-18 at 12.35.27.avif",
  ],
  "11. TAMARIND TOUR": [
    "/images/Final_Images/11. TAMARIND TOUR/WhatsApp Image 2026-07-18 at 12.42.13.avif",
    "/images/Final_Images/11. TAMARIND TOUR/WhatsApp Image 2026-07-18 at 12.42.18.avif",
    "/images/Final_Images/11. TAMARIND TOUR/WhatsApp Image 2026-07-18 at 12.42.23.avif",
    "/images/Final_Images/11. TAMARIND TOUR/WhatsApp Image 2026-07-18 at 12.42.29.avif",
    "/images/Final_Images/11. TAMARIND TOUR/WhatsApp Image 2026-07-18 at 12.42.35.avif",
  ],
  "12. BOBBY PAREKH": [
    "/images/Final_Images/12. BOBBY PAREKH/WhatsApp Image 2026-07-18 at 12.48.33.avif",
    "/images/Final_Images/12. BOBBY PAREKH/WhatsApp Image 2026-07-18 at 12.48.40.avif",
    "/images/Final_Images/12. BOBBY PAREKH/WhatsApp Image 2026-07-18 at 12.48.47.avif",
    "/images/Final_Images/12. BOBBY PAREKH/WhatsApp Image 2026-07-18 at 12.48.52.avif",
    "/images/Final_Images/12. BOBBY PAREKH/WhatsApp Image 2026-07-18 at 12.48.59.avif",
  ],
  "13. PRACTICLE FINANCE": [
    "/images/Final_Images/13. PRACTICLE FINANCE/WhatsApp Image 2026-07-18 at 13.34.17.avif",
    "/images/Final_Images/13. PRACTICLE FINANCE/WhatsApp Image 2026-07-18 at 13.34.23.avif",
    "/images/Final_Images/13. PRACTICLE FINANCE/WhatsApp Image 2026-07-18 at 13.34.28.avif",
    "/images/Final_Images/13. PRACTICLE FINANCE/WhatsApp Image 2026-07-18 at 13.34.35.avif",
    "/images/Final_Images/13. PRACTICLE FINANCE/WhatsApp Image 2026-07-18 at 13.34.44.avif",
    "/images/Final_Images/13. PRACTICLE FINANCE/WhatsApp Image 2026-07-18 at 13.34.51.avif",
    "/images/Final_Images/13. PRACTICLE FINANCE/WhatsApp Image 2026-07-18 at 13.34.58.avif",
  ],
  "14. AMARDEEP PROJECTS": [
    "/images/Final_Images/14. AMARDEEP PROJECTS/WhatsApp Image 2026-07-18 at 13.54.25.avif",
    "/images/Final_Images/14. AMARDEEP PROJECTS/WhatsApp Image 2026-07-18 at 13.54.32.avif",
    "/images/Final_Images/14. AMARDEEP PROJECTS/WhatsApp Image 2026-07-18 at 13.54.37.avif",
    "/images/Final_Images/14. AMARDEEP PROJECTS/WhatsApp Image 2026-07-18 at 13.54.44.avif",
    "/images/Final_Images/14. AMARDEEP PROJECTS/WhatsApp Image 2026-07-18 at 13.54.50.avif",
    "/images/Final_Images/14. AMARDEEP PROJECTS/WhatsApp Image 2026-07-18 at 13.54.56.avif",
    "/images/Final_Images/14. AMARDEEP PROJECTS/WhatsApp Image 2026-07-18 at 13.55.04.avif",
    "/images/Final_Images/14. AMARDEEP PROJECTS/WhatsApp Image 2026-07-18 at 14.01.08.avif",
    "/images/Final_Images/14. AMARDEEP PROJECTS/WhatsApp Image 2026-07-18 at 14.01.13.avif",
    "/images/Final_Images/14. AMARDEEP PROJECTS/WhatsApp Image 2026-07-18 at 14.01.20.avif",
    "/images/Final_Images/14. AMARDEEP PROJECTS/WhatsApp Image 2026-07-18 at 14.01.29.avif",
    "/images/Final_Images/14. AMARDEEP PROJECTS/WhatsApp Image 2026-07-18 at 14.09.33.avif",
  ],
  "15. UNITED SHIPPERS": [
    "/images/Final_Images/15. UNITED SHIPPERS/WhatsApp Image 2026-07-18 at 14.19.00.avif",
    "/images/Final_Images/15. UNITED SHIPPERS/WhatsApp Image 2026-07-18 at 14.19.05.avif",
    "/images/Final_Images/15. UNITED SHIPPERS/WhatsApp Image 2026-07-18 at 14.19.12.avif",
    "/images/Final_Images/15. UNITED SHIPPERS/WhatsApp Image 2026-07-18 at 14.19.18.avif",
    "/images/Final_Images/15. UNITED SHIPPERS/WhatsApp Image 2026-07-18 at 14.19.28.avif",
  ],
  "Bharat Residential": [
    "/images/Final_Images/Bharat Residential/WhatsApp Image 2026-07-17 at 15.55.53.avif",
    "/images/Final_Images/Bharat Residential/WhatsApp Image 2026-07-17 at 15.55.58.avif",
    "/images/Final_Images/Bharat Residential/WhatsApp Image 2026-07-17 at 15.56.03.avif",
    "/images/Final_Images/Bharat Residential/WhatsApp Image 2026-07-17 at 15.56.08.avif",
    "/images/Final_Images/Bharat Residential/WhatsApp Image 2026-07-17 at 15.56.12.avif",
  ],
  "BMR ADVISOR OFFICE": [
    "/images/Final_Images/BMR ADVISOR OFFICE/WhatsApp Image 2026-07-18 at 11.13.08.avif",
    "/images/Final_Images/BMR ADVISOR OFFICE/WhatsApp Image 2026-07-18 at 11.13.10.avif",
    "/images/Final_Images/BMR ADVISOR OFFICE/WhatsApp Image 2026-07-18 at 11.13.23.avif",
    "/images/Final_Images/BMR ADVISOR OFFICE/WhatsApp Image 2026-07-18 at 11.13.25.avif",
    "/images/Final_Images/BMR ADVISOR OFFICE/WhatsApp Image 2026-07-18 at 11.13.30.avif",
    "/images/Final_Images/BMR ADVISOR OFFICE/WhatsApp Image 2026-07-18 at 11.13.34.avif",
    "/images/Final_Images/BMR ADVISOR OFFICE/WhatsApp Image 2026-07-18 at 11.13.47.avif",
  ],
  "CRAVIN CAFE": [
    "/images/Final_Images/CRAVIN CAFE/WhatsApp Image 2026-07-18 at 14.38.40.avif",
    "/images/Final_Images/CRAVIN CAFE/WhatsApp Image 2026-07-18 at 14.38.47.avif",
    "/images/Final_Images/CRAVIN CAFE/WhatsApp Image 2026-07-18 at 14.38.55.avif",
    "/images/Final_Images/CRAVIN CAFE/WhatsApp Image 2026-07-18 at 14.39.01.avif",
    "/images/Final_Images/CRAVIN CAFE/WhatsApp Image 2026-07-18 at 14.39.58.avif",
  ],
  "HEMCO PHARMA": [
    "/images/Final_Images/HEMCO PHARMA/WhatsApp Image 2026-07-18 at 11.43.21.avif",
    "/images/Final_Images/HEMCO PHARMA/WhatsApp Image 2026-07-18 at 11.43.28.avif",
    "/images/Final_Images/HEMCO PHARMA/WhatsApp Image 2026-07-18 at 11.43.37.avif",
    "/images/Final_Images/HEMCO PHARMA/WhatsApp Image 2026-07-18 at 11.43.46.avif",
    "/images/Final_Images/HEMCO PHARMA/WhatsApp Image 2026-07-18 at 11.44.07.avif",
  ],
  "PISPL BPO": [
    "/images/Final_Images/PISPL BPO/WhatsApp Image 2026-07-18 at 11.27.48.avif",
    "/images/Final_Images/PISPL BPO/WhatsApp Image 2026-07-18 at 11.27.55.avif",
    "/images/Final_Images/PISPL BPO/WhatsApp Image 2026-07-18 at 11.27.59.avif",
    "/images/Final_Images/PISPL BPO/WhatsApp Image 2026-07-18 at 11.28.07.avif",
    "/images/Final_Images/PISPL BPO/WhatsApp Image 2026-07-18 at 11.28.12.avif",
    "/images/Final_Images/PISPL BPO/WhatsApp Image 2026-07-18 at 11.28.35.avif",
  ],
};

function buildGalleryItems(): GalleryImage[] {
  const spans: ("col-span-1" | "col-span-2" | "row-span-2")[] = [
    "col-span-1", "col-span-2", "row-span-2", "col-span-1",
  ];

  // Build per-folder queues so we can round-robin across projects
  const queues: { config: FolderConfig; files: string[]; cursor: number }[] = [];
  for (const config of folders) {
    const files = imageFiles[config.folder] || [];
    if (files.length > 0) {
      queues.push({ config, files, cursor: 0 });
    }
  }

  // Round-robin: take one image from each folder at a time
  // This ensures adjacent images are always from different projects
  const items: GalleryImage[] = [];
  let idx = 0;
  let remaining = queues.length;

  while (remaining > 0) {
    for (let i = queues.length - 1; i >= 0; i--) {
      const q = queues[i];
      if (q.cursor >= q.files.length) {
        queues.splice(i, 1);
        remaining--;
        continue;
      }
      idx++;
      items.push({
        id: `g-${idx}`,
        title: q.config.title,
        category: q.config.category,
        image: q.files[q.cursor],
        companyLogo: q.config.companyLogo,
        span: spans[idx % spans.length],
        type: "gallery",
      });
      q.cursor++;
    }
  }

  return items;
}

export const galleryImages: GalleryImage[] = buildGalleryItems();
