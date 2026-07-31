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
  "Residential",
  "Luxury Villas",
  "Commercial",
  "Retail Work",
  "Developers",
  "Institutional",
  "Hospitality Project",
  "Warehousing & Factory's",
];

export const categorySubcategories: Record<string, string[]> = {
  "Residential": [
    "Parle Agro",
    "Sandeep Agrawal",
    "Purnima & Divya Sethi",
    "Gulati House",
    "Bharat Residential",
  ],
  "Luxury Villas": [
    "Mazda - Alibaug",
  ],
  "Commercial": [
    "Hemmo Pharma",
    "PISPL",
    "BMR Advisor Office",
    "Bobby Parikh",
    "Peninsula",
    "Tamarind Tours",
    "ITC",
    "Practical Finance",
    "Sanjay Kapoor Office",
    "Amardeep Projects",
  ],
  "Retail Work": [
    "Cravin Cafe",
  ],
  "Developers": [],
  "Institutional": [
    "Jaihind College",
  ],
  "Hospitality Project": [
    "United Shippers",
  ],
  "Warehousing & Factory's": [
    "PIPSL Chennai Godown",
  ],
};

interface FolderConfig {
  folder: string;
  title: string;
  category: string;
  companyLogo?: string;
}

const folders: FolderConfig[] = [
  // Residential
  { folder: "PARLE AGRO", title: "Parle Agro", category: "Residential" },
  { folder: "SANDEEP AGRAWAL", title: "Sandeep Agrawal", category: "Residential" },
  { folder: "PURNIMA & DIVYA SETHI", title: "Purnima & Divya Sethi", category: "Residential" },
  { folder: "GULATI HOUSE", title: "Gulati House", category: "Residential" },
  { folder: "Bharat Residential", title: "Bharat Residential", category: "Residential" },

  // Luxury Villas
  { folder: "MAZDA", title: "Mazda - Alibaug", category: "Luxury Villas" },

  // Commercial
  { folder: "HEMCO PHARMA", title: "Hemmo Pharma", category: "Commercial" },
  { folder: "PISPL BPO", title: "PISPL", category: "Commercial" },
  { folder: "BMR ADVISOR OFFICE", title: "BMR Advisor Office", category: "Commercial" },
  { folder: "12. BOBBY PAREKH", title: "Bobby Parikh", category: "Commercial" },
  { folder: "6. PENINSULA", title: "Peninsula", category: "Commercial" },
  { folder: "11. TAMARIND TOUR", title: "Tamarind Tours", category: "Commercial" },
  { folder: "10. ITC GHATKOPAR", title: "ITC", category: "Commercial" },
  { folder: "13. PRACTICLE FINANCE", title: "Practical Finance", category: "Commercial" },
  { folder: "9. SANJAY KAPOOR OFFICE", title: "Sanjay Kapoor Office", category: "Commercial" },
  { folder: "14. AMARDEEP PROJECTS", title: "Amardeep Projects", category: "Commercial" },

  // Retail Work
  { folder: "CRAVIN CAFE", title: "Cravin Cafe", category: "Retail Work" },

  // Institutional
  { folder: "8. JAINHIND COLLEGE LABORATORY", title: "Jaihind College", category: "Institutional" },

  // Hospitality Project
  { folder: "15. UNITED SHIPPERS", title: "United Shippers", category: "Hospitality Project" },

  // Warehousing & Factory's
  { folder: "7. PIPSL CHENNAI GODOWN", title: "PIPSL Chennai Godown", category: "Warehousing & Factory's" },
];

const imageFiles: Record<string, string[]> = {
  "PARLE AGRO": [
    "/images/new_images_works/Residential/PARLE AGRO/WhatsApp Image 2026-07-29 at 12.43.49 (1).avif",
    "/images/new_images_works/Residential/PARLE AGRO/WhatsApp Image 2026-07-29 at 12.43.49.avif",
    "/images/new_images_works/Residential/PARLE AGRO/WhatsApp Image 2026-07-29 at 12.43.50 (1).avif",
    "/images/new_images_works/Residential/PARLE AGRO/WhatsApp Image 2026-07-29 at 12.43.50 (2).avif",
    "/images/new_images_works/Residential/PARLE AGRO/WhatsApp Image 2026-07-29 at 12.43.50.avif",
    "/images/new_images_works/Residential/PARLE AGRO/WhatsApp Image 2026-07-29 at 12.43.51 (1).avif",
    "/images/new_images_works/Residential/PARLE AGRO/WhatsApp Image 2026-07-29 at 12.43.51 (2).avif",
    "/images/new_images_works/Residential/PARLE AGRO/WhatsApp Image 2026-07-29 at 12.43.51.avif",
    "/images/new_images_works/Residential/PARLE AGRO/WhatsApp Image 2026-07-29 at 12.43.52 (1).avif",
    "/images/new_images_works/Residential/PARLE AGRO/WhatsApp Image 2026-07-29 at 12.43.52 (2).avif",
    "/images/new_images_works/Residential/PARLE AGRO/WhatsApp Image 2026-07-29 at 12.43.52.avif",
    "/images/new_images_works/Residential/PARLE AGRO/WhatsApp Image 2026-07-29 at 12.43.53 (1).avif",
    "/images/new_images_works/Residential/PARLE AGRO/WhatsApp Image 2026-07-29 at 12.43.53 (2).avif",
    "/images/new_images_works/Residential/PARLE AGRO/WhatsApp Image 2026-07-29 at 12.43.53.avif",
    "/images/new_images_works/Residential/PARLE AGRO/WhatsApp Image 2026-07-29 at 12.43.54 (1).avif",
    "/images/new_images_works/Residential/PARLE AGRO/WhatsApp Image 2026-07-29 at 12.43.54.avif",
    "/images/new_images_works/Residential/PARLE AGRO/WhatsApp Image 2026-07-29 at 12.43.55 (1).avif",
    "/images/new_images_works/Residential/PARLE AGRO/WhatsApp Image 2026-07-29 at 12.43.55 (2).avif",
    "/images/new_images_works/Residential/PARLE AGRO/WhatsApp Image 2026-07-29 at 12.43.55.avif",
    "/images/new_images_works/Residential/PARLE AGRO/WhatsApp Image 2026-07-29 at 12.43.56 (1).avif",
    "/images/new_images_works/Residential/PARLE AGRO/WhatsApp Image 2026-07-29 at 12.43.56 (2).avif",
    "/images/new_images_works/Residential/PARLE AGRO/WhatsApp Image 2026-07-29 at 12.43.56.avif",
    "/images/new_images_works/Residential/PARLE AGRO/WhatsApp Image 2026-07-29 at 12.43.57 (1).avif",
    "/images/new_images_works/Residential/PARLE AGRO/WhatsApp Image 2026-07-29 at 12.43.57.avif",
    "/images/new_images_works/Residential/PARLE AGRO/WhatsApp Image 2026-07-29 at 12.43.58 (1).avif",
    "/images/new_images_works/Residential/PARLE AGRO/WhatsApp Image 2026-07-29 at 12.43.58.avif",
    "/images/new_images_works/Residential/PARLE AGRO/WhatsApp Image 2026-07-29 at 12.43.59 (1).avif",
    "/images/new_images_works/Residential/PARLE AGRO/WhatsApp Image 2026-07-29 at 12.43.59 (2).avif",
    "/images/new_images_works/Residential/PARLE AGRO/WhatsApp Image 2026-07-29 at 12.43.59.avif",
    "/images/new_images_works/Residential/PARLE AGRO/WhatsApp Image 2026-07-29 at 12.44.00 (1).avif",
    "/images/new_images_works/Residential/PARLE AGRO/WhatsApp Image 2026-07-29 at 12.44.00 (2).avif",
    "/images/new_images_works/Residential/PARLE AGRO/WhatsApp Image 2026-07-29 at 12.44.00.avif",
    "/images/new_images_works/Residential/PARLE AGRO/WhatsApp Image 2026-07-29 at 12.44.01 (1).avif",
    "/images/new_images_works/Residential/PARLE AGRO/WhatsApp Image 2026-07-29 at 12.44.01 (2).avif",
    "/images/new_images_works/Residential/PARLE AGRO/WhatsApp Image 2026-07-29 at 12.44.01.avif",
  ],
  "SANDEEP AGRAWAL": [
    "/images/new_images_works/Residential/SANDEEP AGRAWAL/WhatsApp Image 2026-07-29 at 12.45.25 (1).avif",
    "/images/new_images_works/Residential/SANDEEP AGRAWAL/WhatsApp Image 2026-07-29 at 12.45.25.avif",
    "/images/new_images_works/Residential/SANDEEP AGRAWAL/WhatsApp Image 2026-07-29 at 12.45.26 (1).avif",
    "/images/new_images_works/Residential/SANDEEP AGRAWAL/WhatsApp Image 2026-07-29 at 12.45.26 (2).avif",
    "/images/new_images_works/Residential/SANDEEP AGRAWAL/WhatsApp Image 2026-07-29 at 12.45.26.avif",
    "/images/new_images_works/Residential/SANDEEP AGRAWAL/WhatsApp Image 2026-07-29 at 12.45.27 (1).avif",
    "/images/new_images_works/Residential/SANDEEP AGRAWAL/WhatsApp Image 2026-07-29 at 12.45.27.avif",
    "/images/new_images_works/Residential/SANDEEP AGRAWAL/WhatsApp Image 2026-07-29 at 12.45.28 (1).avif",
    "/images/new_images_works/Residential/SANDEEP AGRAWAL/WhatsApp Image 2026-07-29 at 12.45.28.avif",
  ],
  "PURNIMA & DIVYA SETHI": [
    "/images/new_images_works/Residential/PURNIMA & DIVYA SETHI/WhatsApp Image 2026-07-29 at 12.45.52.avif",
    "/images/new_images_works/Residential/PURNIMA & DIVYA SETHI/WhatsApp Image 2026-07-29 at 12.45.53.avif",
    "/images/new_images_works/Residential/PURNIMA & DIVYA SETHI/WhatsApp Image 2026-07-29 at 12.45.54 (1).avif",
    "/images/new_images_works/Residential/PURNIMA & DIVYA SETHI/WhatsApp Image 2026-07-29 at 12.45.54.avif",
    "/images/new_images_works/Residential/PURNIMA & DIVYA SETHI/WhatsApp Image 2026-07-29 at 12.45.55 (1).avif",
    "/images/new_images_works/Residential/PURNIMA & DIVYA SETHI/WhatsApp Image 2026-07-29 at 12.45.55 (2).avif",
    "/images/new_images_works/Residential/PURNIMA & DIVYA SETHI/WhatsApp Image 2026-07-29 at 12.45.55.avif",
    "/images/new_images_works/Residential/PURNIMA & DIVYA SETHI/WhatsApp Image 2026-07-29 at 12.45.56 (1).avif",
    "/images/new_images_works/Residential/PURNIMA & DIVYA SETHI/WhatsApp Image 2026-07-29 at 12.45.56.avif",
  ],
  "GULATI HOUSE": [
    "/images/new_images_works/Residential/GULATI HOUSE/WhatsApp Image 2026-07-29 at 12.46.42.avif",
    "/images/new_images_works/Residential/GULATI HOUSE/WhatsApp Image 2026-07-29 at 12.46.43 (1).avif",
    "/images/new_images_works/Residential/GULATI HOUSE/WhatsApp Image 2026-07-29 at 12.46.43.avif",
    "/images/new_images_works/Residential/GULATI HOUSE/WhatsApp Image 2026-07-29 at 12.46.44 (1).avif",
    "/images/new_images_works/Residential/GULATI HOUSE/WhatsApp Image 2026-07-29 at 12.46.44 (2).avif",
    "/images/new_images_works/Residential/GULATI HOUSE/WhatsApp Image 2026-07-29 at 12.46.44.avif",
    "/images/new_images_works/Residential/GULATI HOUSE/WhatsApp Image 2026-07-29 at 12.46.45.avif",
  ],
  "MAZDA": [
    "/images/new_images_works/Residential/MAZDA/WhatsApp Image 2026-07-29 at 12.44.34.avif",
    "/images/new_images_works/Residential/MAZDA/WhatsApp Image 2026-07-29 at 12.44.35 (1).avif",
    "/images/new_images_works/Residential/MAZDA/WhatsApp Image 2026-07-29 at 12.44.35 (2).avif",
    "/images/new_images_works/Residential/MAZDA/WhatsApp Image 2026-07-29 at 12.44.35.avif",
    "/images/new_images_works/Residential/MAZDA/WhatsApp Image 2026-07-29 at 12.44.36 (1).avif",
    "/images/new_images_works/Residential/MAZDA/WhatsApp Image 2026-07-29 at 12.44.36.avif",
    "/images/new_images_works/Residential/MAZDA/WhatsApp Image 2026-07-29 at 12.44.37 (1).avif",
    "/images/new_images_works/Residential/MAZDA/WhatsApp Image 2026-07-29 at 12.44.37 (2).avif",
    "/images/new_images_works/Residential/MAZDA/WhatsApp Image 2026-07-29 at 12.44.37.avif",
    "/images/new_images_works/Residential/MAZDA/WhatsApp Image 2026-07-29 at 12.44.38 (1).avif",
    "/images/new_images_works/Residential/MAZDA/WhatsApp Image 2026-07-29 at 12.44.38.avif",
    "/images/new_images_works/Residential/MAZDA/WhatsApp Image 2026-07-29 at 12.44.39 (1).avif",
    "/images/new_images_works/Residential/MAZDA/WhatsApp Image 2026-07-29 at 12.44.39 (2).avif",
    "/images/new_images_works/Residential/MAZDA/WhatsApp Image 2026-07-29 at 12.44.39.avif",
    "/images/new_images_works/Residential/MAZDA/WhatsApp Image 2026-07-29 at 12.44.40 (1).avif",
    "/images/new_images_works/Residential/MAZDA/WhatsApp Image 2026-07-29 at 12.44.40 (2).avif",
    "/images/new_images_works/Residential/MAZDA/WhatsApp Image 2026-07-29 at 12.44.40.avif",
    "/images/new_images_works/Residential/MAZDA/WhatsApp Image 2026-07-29 at 12.44.41 (1).avif",
    "/images/new_images_works/Residential/MAZDA/WhatsApp Image 2026-07-29 at 12.44.41.avif",
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
  "BMR ADVISOR OFFICE": [
    "/images/Final_Images/BMR ADVISOR OFFICE/WhatsApp Image 2026-07-18 at 11.13.08.avif",
    "/images/Final_Images/BMR ADVISOR OFFICE/WhatsApp Image 2026-07-18 at 11.13.10.avif",
    "/images/Final_Images/BMR ADVISOR OFFICE/WhatsApp Image 2026-07-18 at 11.13.23.avif",
    "/images/Final_Images/BMR ADVISOR OFFICE/WhatsApp Image 2026-07-18 at 11.13.25.avif",
    "/images/Final_Images/BMR ADVISOR OFFICE/WhatsApp Image 2026-07-18 at 11.13.30.avif",
    "/images/Final_Images/BMR ADVISOR OFFICE/WhatsApp Image 2026-07-18 at 11.13.34.avif",
    "/images/Final_Images/BMR ADVISOR OFFICE/WhatsApp Image 2026-07-18 at 11.13.47.avif",
  ],
  "12. BOBBY PAREKH": [
    "/images/Final_Images/12. BOBBY PAREKH/WhatsApp Image 2026-07-18 at 12.48.33.avif",
    "/images/Final_Images/12. BOBBY PAREKH/WhatsApp Image 2026-07-18 at 12.48.40.avif",
    "/images/Final_Images/12. BOBBY PAREKH/WhatsApp Image 2026-07-18 at 12.48.47.avif",
    "/images/Final_Images/12. BOBBY PAREKH/WhatsApp Image 2026-07-18 at 12.48.52.avif",
    "/images/Final_Images/12. BOBBY PAREKH/WhatsApp Image 2026-07-18 at 12.48.59.avif",
  ],
  "6. PENINSULA": [
    "/images/Final_Images/6. PENINSULA/WhatsApp Image 2026-07-18 at 11.48.05.avif",
    "/images/Final_Images/6. PENINSULA/WhatsApp Image 2026-07-18 at 11.48.34.avif",
    "/images/Final_Images/6. PENINSULA/WhatsApp Image 2026-07-18 at 11.49.23.avif",
    "/images/Final_Images/6. PENINSULA/WhatsApp Image 2026-07-18 at 11.57.44.avif",
    "/images/Final_Images/6. PENINSULA/WhatsApp Image 2026-07-18 at 11.57.48.avif",
    "/images/Final_Images/6. PENINSULA/WhatsApp Image 2026-07-18 at 11.57.55.avif",
  ],
  "11. TAMARIND TOUR": [
    "/images/Final_Images/11. TAMARIND TOUR/WhatsApp Image 2026-07-18 at 12.42.13.avif",
    "/images/Final_Images/11. TAMARIND TOUR/WhatsApp Image 2026-07-18 at 12.42.18.avif",
    "/images/Final_Images/11. TAMARIND TOUR/WhatsApp Image 2026-07-18 at 12.42.23.avif",
    "/images/Final_Images/11. TAMARIND TOUR/WhatsApp Image 2026-07-18 at 12.42.29.avif",
    "/images/Final_Images/11. TAMARIND TOUR/WhatsApp Image 2026-07-18 at 12.42.35.avif",
  ],
  "10. ITC GHATKOPAR": [
    "/images/Final_Images/10. ITC GHATKOPAR/WhatsApp Image 2026-07-18 at 12.35.04.avif",
    "/images/Final_Images/10. ITC GHATKOPAR/WhatsApp Image 2026-07-18 at 12.35.10.avif",
    "/images/Final_Images/10. ITC GHATKOPAR/WhatsApp Image 2026-07-18 at 12.35.16.avif",
    "/images/Final_Images/10. ITC GHATKOPAR/WhatsApp Image 2026-07-18 at 12.35.21.avif",
    "/images/Final_Images/10. ITC GHATKOPAR/WhatsApp Image 2026-07-18 at 12.35.27.avif",
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
  "9. SANJAY KAPOOR OFFICE": [
    "/images/Final_Images/9. SANJAY KAPOOR OFFICE/WhatsApp Image 2026-07-18 at 12.23.09.avif",
    "/images/Final_Images/9. SANJAY KAPOOR OFFICE/WhatsApp Image 2026-07-18 at 12.23.15.avif",
    "/images/Final_Images/9. SANJAY KAPOOR OFFICE/WhatsApp Image 2026-07-18 at 12.23.21.avif",
    "/images/Final_Images/9. SANJAY KAPOOR OFFICE/WhatsApp Image 2026-07-18 at 12.23.26.avif",
    "/images/Final_Images/9. SANJAY KAPOOR OFFICE/WhatsApp Image 2026-07-18 at 12.23.31.avif",
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
  "CRAVIN CAFE": [
    "/images/Final_Images/CRAVIN CAFE/WhatsApp Image 2026-07-18 at 14.38.40.avif",
    "/images/Final_Images/CRAVIN CAFE/WhatsApp Image 2026-07-18 at 14.38.47.avif",
    "/images/Final_Images/CRAVIN CAFE/WhatsApp Image 2026-07-18 at 14.38.55.avif",
    "/images/Final_Images/CRAVIN CAFE/WhatsApp Image 2026-07-18 at 14.39.01.avif",
    "/images/Final_Images/CRAVIN CAFE/WhatsApp Image 2026-07-18 at 14.39.58.avif",
  ],
  "8. JAINHIND COLLEGE LABORATORY": [
    "/images/Final_Images/8. JAINHIND COLLEGE LABORATORY/WhatsApp Image 2026-07-18 at 12.14.24.avif",
    "/images/Final_Images/8. JAINHIND COLLEGE LABORATORY/WhatsApp Image 2026-07-18 at 12.14.29.avif",
    "/images/Final_Images/8. JAINHIND COLLEGE LABORATORY/WhatsApp Image 2026-07-18 at 12.14.36.avif",
    "/images/Final_Images/8. JAINHIND COLLEGE LABORATORY/WhatsApp Image 2026-07-18 at 12.14.43.avif",
    "/images/Final_Images/8. JAINHIND COLLEGE LABORATORY/WhatsApp Image 2026-07-18 at 12.14.47.avif",
  ],
  "15. UNITED SHIPPERS": [
    "/images/Final_Images/15. UNITED SHIPPERS/WhatsApp Image 2026-07-18 at 14.19.00.avif",
    "/images/Final_Images/15. UNITED SHIPPERS/WhatsApp Image 2026-07-18 at 14.19.05.avif",
    "/images/Final_Images/15. UNITED SHIPPERS/WhatsApp Image 2026-07-18 at 14.19.12.avif",
    "/images/Final_Images/15. UNITED SHIPPERS/WhatsApp Image 2026-07-18 at 14.19.18.avif",
    "/images/Final_Images/15. UNITED SHIPPERS/WhatsApp Image 2026-07-18 at 14.19.28.avif",
  ],
  "7. PIPSL CHENNAI GODOWN": [
    "/images/Final_Images/7. PIPSL CHENNAI GODOWN/WhatsApp Image 2026-07-18 at 12.07.02.avif",
    "/images/Final_Images/7. PIPSL CHENNAI GODOWN/WhatsApp Image 2026-07-18 at 12.07.08.avif",
    "/images/Final_Images/7. PIPSL CHENNAI GODOWN/WhatsApp Image 2026-07-18 at 12.07.18.avif",
    "/images/Final_Images/7. PIPSL CHENNAI GODOWN/WhatsApp Image 2026-07-18 at 12.07.25.avif",
    "/images/Final_Images/7. PIPSL CHENNAI GODOWN/WhatsApp Image 2026-07-18 at 12.07.34.avif",
  ],
  "Bharat Residential": [
    "/images/Final_Images/Bharat Residential/WhatsApp Image 2026-07-17 at 15.55.53.avif",
    "/images/Final_Images/Bharat Residential/WhatsApp Image 2026-07-17 at 15.55.58.avif",
    "/images/Final_Images/Bharat Residential/WhatsApp Image 2026-07-17 at 15.56.03.avif",
    "/images/Final_Images/Bharat Residential/WhatsApp Image 2026-07-17 at 15.56.08.avif",
    "/images/Final_Images/Bharat Residential/WhatsApp Image 2026-07-17 at 15.56.12.avif",
  ],
};

function buildGalleryItems(): GalleryImage[] {
  const spans: ("col-span-1" | "col-span-2" | "row-span-2")[] = [
    "col-span-1", "col-span-2", "row-span-2", "col-span-1",
  ];

  const queues: { config: FolderConfig; files: string[]; cursor: number }[] = [];
  for (const config of folders) {
    const files = imageFiles[config.folder] || [];
    queues.push({ config, files, cursor: 0 });
  }

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
