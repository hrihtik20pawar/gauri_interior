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
    "Mr. Sundesh",
    "Sandeep Agrawal",
    "Purnima & Divya Sethi",
    "Gulita House",
    "Sujata Madam Banglow"
  ],
  "Luxury Villas": [
    "Piramar Banglow",
    "Samir Chennai Banglow",
    "Mazda - Alibaug",
    "Ashok Nirvana - Mahesh Gupta"
  ],
  "Commercial": [
    "Kohinoor Square (Value)",
    "JSL",
    "Hemmo Pharma",
    "PISPL",
    "BMR",
    "Bobby Parikh",
    "Mahesh Gupta - Peninsula",
    "Tamarind Tours",
    "ITC",
    "Practical Finance"
  ],
  "Retail Work": [
    "Tara Jewels",
    "Watches & More",
    "Cravin Cafe - Sujata Mam",
    "Big Mishra",
    "Chapter - Ava Belapur",
    "Aura Spa",
    "Heads Up For Tails"
  ],
  "Developers": [
    "Shapoorji Paloon Ji - Vanaha",
    "Piramal - Vakunth",
    "Peninsula Land Ltd - Good Home Reality",
    "Tejuka - Tribica"
  ],
  "Institutional": [
    "BIS",
    "Jaihind College",
    "Deep Jyoti School"
  ],
  "Hospitality Project": [
    "Medical",
    "Hear & Dental Clinic",
    "Amaha Clinic",
    "Pradhan Dental Clinic",
    "Ikshana Resort (29-05-26)",
    "Kohinoor Hotel",
    "Airport Lunge",
    "Ikshana Resort - Sample Room",
    "United Shippers"
  ],
  "Warehousing & Factory's": [
    "Jewellery Factory",
    "Warehouse"
  ],
};

interface FolderConfig {
  folder: string;
  title: string;
  category: string;
  companyLogo?: string;
}

const folders: FolderConfig[] = [
  // Residential - exact sequence
  { folder: "PARLE AGRO", title: "Parle Agro", category: "Residential" },
  { folder: "MR. SUNDESH", title: "Mr. Sundesh", category: "Residential" },
  { folder: "SANDEEP AGRAWAL", title: "Sandeep Agrawal", category: "Residential" },
  { folder: "PURNIMA & DIVYA SETHI", title: "Purnima & Divya Sethi", category: "Residential" },
  { folder: "GULATI HOUSE", title: "Gulita House", category: "Residential" },
  { folder: "SUJATA MADAM BANGLOW", title: "Sujata Madam Banglow", category: "Residential" },

  // Luxury Villas
  { folder: "PIRAMAL BANGLOW", title: "Piramar Banglow", category: "Luxury Villas" },
  { folder: "SAMIR CHENNAI BANGLOW", title: "Samir Chennai Bungalow", category: "Luxury Villas" },
  { folder: "MAZDA", title: "Mazda - Alibaug", category: "Luxury Villas" },
  { folder: "ASHOK NIRWANA", title: "Ashok Nirvana - Mahesh Gupta", category: "Luxury Villas" },

  // Commercial - exact sequence
  { folder: "KOHINOOR SQUARE", title: "Kohinoor Square (Value)", category: "Commercial" },
  { folder: "JSL", title: "JSL", category: "Commercial" },
  { folder: "HEMCO PHARMA", title: "Hemmo Pharma", category: "Commercial" },
  { folder: "PISPL BPO", title: "PISPL", category: "Commercial" },
  { folder: "BMR ADVISOR OFFICE", title: "BMR", category: "Commercial" },
  { folder: "12. BOBBY PAREKH", title: "Bobby Parikh", category: "Commercial" },
  { folder: "6. PENINSULA", title: "Mahesh Gupta - Peninsula", category: "Commercial" },
  { folder: "11. TAMARIND TOUR", title: "Tamarind Tours", category: "Commercial" },
  { folder: "10. ITC GHATKOPAR", title: "ITC", category: "Commercial" },
  { folder: "13. PRACTICLE FINANCE", title: "Practical Finance", category: "Commercial" },

  // Retail Work - exact sequence
  { folder: "TARA JEWELS", title: "Tara Jewels", category: "Retail Work" },
  { folder: "WATCHES & MORE", title: "Watches & More", category: "Retail Work" },
  { folder: "CRAVIN CAFE", title: "Cravin Cafe - Sujata Mam", category: "Retail Work" },
  { folder: "BIG MISHRA", title: "Big Mishra", category: "Retail Work" },
  { folder: "CHAPTER AVA BELAPUR", title: "Chapter - Ava Belapur", category: "Retail Work" },
  { folder: "AURA SPA", title: "Aura Spa", category: "Retail Work" },
  { folder: "HEADS UP FOR TAILS", title: "Heads Up For Tails", category: "Retail Work" },

  // Developers - exact sequence
  { folder: "SHAPOORJI PALOON JI", title: "Shapoorji Paloon Ji - Vanaha", category: "Developers" },
  { folder: "PIRAMAL VAKUNTH", title: "Piramal - Vakunth", category: "Developers" },
  { folder: "PENINSULA LAND LTD", title: "Peninsula Land Ltd - Good Home Reality", category: "Developers" },
  { folder: "TEJUKA", title: "Tejuka - Tribica", category: "Developers" },

  // Institutional - exact sequence
  { folder: "BIS", title: "BIS", category: "Institutional" },
  { folder: "8. JAINHIND COLLEGE LABORATORY", title: "Jaihind College", category: "Institutional" },
  { folder: "DEEP JYOTI SCHOOL", title: "Deep Jyoti School", category: "Institutional" },

  // Hospitality Project - exact sequence
  { folder: "MEDICAL", title: "Medical", category: "Hospitality Project" },
  { folder: "HEAR & DENTAL CLINIC", title: "Hear & Dental Clinic", category: "Hospitality Project" },
  { folder: "AMAHA CLINIC", title: "Amaha Clinic", category: "Hospitality Project" },
  { folder: "PRADHAN DENTAL CLINIC", title: "Pradhan Dental Clinic", category: "Hospitality Project" },
  { folder: "ISKANA RESORT", title: "Ikshana Resort (29-05-26)", category: "Hospitality Project" },
  { folder: "KOHINOOR HOTEL", title: "Kohinoor Hotel", category: "Hospitality Project" },
  { folder: "AIRPORT LUNGE", title: "Airport Lunge", category: "Hospitality Project" },
  { folder: "ISKANA RESORT SAMPLE", title: "Ikshana Resort - Sample Room", category: "Hospitality Project" },
  { folder: "15. UNITED SHIPPERS", title: "United Shippers", category: "Hospitality Project" },

  // Warehousing & Factory's
  { folder: "JEWELLERY FACTORY", title: "Jewellery Factory", category: "Warehousing & Factory's" },
  { folder: "WAREHOUSE", title: "Warehouse", category: "Warehousing & Factory's" },
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
  "CRAVIN CAFE": [
    "/images/Final_Images/CRAVIN CAFE/WhatsApp Image 2026-07-18 at 14.38.40.avif",
    "/images/Final_Images/CRAVIN CAFE/WhatsApp Image 2026-07-18 at 14.38.47.avif",
    "/images/Final_Images/CRAVIN CAFE/WhatsApp Image 2026-07-18 at 14.38.55.avif",
    "/images/Final_Images/CRAVIN CAFE/WhatsApp Image 2026-07-18 at 14.39.01.avif",
    "/images/Final_Images/CRAVIN CAFE/WhatsApp Image 2026-07-18 at 14.39.58.avif",
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
  "15. UNITED SHIPPERS": [
    "/images/Final_Images/15. UNITED SHIPPERS/WhatsApp Image 2026-07-18 at 14.19.00.avif",
    "/images/Final_Images/15. UNITED SHIPPERS/WhatsApp Image 2026-07-18 at 14.19.05.avif",
    "/images/Final_Images/15. UNITED SHIPPERS/WhatsApp Image 2026-07-18 at 14.19.12.avif",
    "/images/Final_Images/15. UNITED SHIPPERS/WhatsApp Image 2026-07-18 at 14.19.18.avif",
    "/images/Final_Images/15. UNITED SHIPPERS/WhatsApp Image 2026-07-18 at 14.19.28.avif",
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