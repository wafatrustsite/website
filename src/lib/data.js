import fs from 'fs';
import path from 'path';

function loadData() {
  const filePath = path.join(process.cwd(), 'public', 'data', 'site-data.json');
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw);
}

export function getCounters() {
  return loadData().counters;
}

export function getAllBlogs() {
  return loadData().blogs;
}

export function getBlogById(id) {
  const blogs = loadData().blogs;
  return blogs.find((b) => String(b.id) === String(id)) || null;
}

export function getGallery() {
  return [
    'assets/blog1.jpg',
    'assets/blog2.jpg',
    'assets/blog3.jpg',
    'assets/blog4.jpg',
    'assets/slider-11.jpg',
    'assets/slider-21.jpg',
    'assets/slider-31.jpg',
    'assets/slider-41.jpg',
    'assets/slider-51.jpg',
    'assets/slider-71.jpg',
    'assets/mosques.jpg',
    'assets/image-1.jpg',
    'assets/image-2.jpg',
    'assets/image-3.jpg',
    'assets/event1.webp'
  ];
}

export function getAllPages() {
  return loadData().pages.filter((p) => typeof p === 'object' && p.id);
}

export function getPageBySlug(slug) {
  const pages = loadData().pages;
  return pages.find((p) => typeof p === 'object' && p.id === slug) || null;
}

// Campaign/service pages are a subset of all pages
const SERVICE_SLUGS = [
  'water-well-for-needy-place',
  'masjid-madrasa-build',
  'wazu-khana-build',
  'quran-e-kareem-distribution-2',
  'blankets-winter-distribution',
  'tricycle-distribution',
  'wheelchair-distribution',
  'free-food-distribution',
  'free-distribution-of-ration-kit',
  'widows-help',
  'poor-family-help',
  'poor-girl-marriage-help',
  'house-build',
  'maktab-deeniyat',
  'distribution-of-benches-and-mats-etc',
  'sewing-machine-distribution',
  'distribution-of-benches-and-mats',
  'madrasa-anwar-e-hira-lilbanat',
  'wafa-international-school',
  'could-farming-help-solve-the-climate-crisis',
  'help-the-eco-system',
];

// Map campaign slugs to high quality non-screenshot images
const CAMPAIGN_IMAGE_MAP = {
  'water-well-for-needy-place': '/assets/slider-11.jpg',
  'masjid-madrasa-build': '/assets/mosques.jpg',
  'wazu-khana-build': '/assets/slider-31.jpg',
  'quran-e-kareem-distribution-2': '/assets/blog4.jpg',
  'blankets-winter-distribution': '/assets/slider-21.jpg',
  'tricycle-distribution': '/assets/image-1.jpg',
  'wheelchair-distribution': '/assets/image-2.jpg',
  'free-food-distribution': '/assets/slider-51.jpg',
  'free-distribution-of-ration-kit': '/assets/blog1.jpg',
  'widows-help': '/assets/slider-71.jpg',
  'poor-family-help': '/assets/image-3.jpg',
  'poor-girl-marriage-help': '/assets/slider-41.jpg',
  'house-build': '/assets/blog3.jpg',
  'maktab-deeniyat': '/assets/event1.webp',
  'distribution-of-benches-and-mats-etc': '/assets/blog2.jpg',
  'sewing-machine-distribution': '/assets/slider-11.jpg',
  'distribution-of-benches-and-mats': '/assets/blog2.jpg',
  'madrasa-anwar-e-hira-lilbanat': '/assets/mosques.jpg',
  'wafa-international-school': '/assets/slider-41.jpg',
  'could-farming-help-solve-the-climate-crisis': '/assets/slider-21.jpg',
  'help-the-eco-system': '/assets/image-1.jpg',
};

export function getAllServices() {
  const pages = loadData().pages;
  return SERVICE_SLUGS.map((slug) => {
    const page = pages.find((p) => typeof p === 'object' && p.id === slug);
    if (!page) return null;
    return {
      ...page,
      image: CAMPAIGN_IMAGE_MAP[slug] || '/assets/hero.jpg',
    };
  }).filter(Boolean);
}

export function getServiceBySlug(slug) {
  const page = getPageBySlug(slug);
  if (!page) return null;
  return {
    ...page,
    image: CAMPAIGN_IMAGE_MAP[slug] || '/assets/hero.jpg',
    isService: SERVICE_SLUGS.includes(slug),
  };
}

export function getServiceSlugs() {
  return SERVICE_SLUGS;
}

export const SITE_INFO = {
  name: 'Wafa Educational And Charitable Trust',
  tagline: 'National and charitable institution',
  description:
    'Wafa Educational And Charitable Trust is a national charitable institution dedicated to empowering, educating, and uplifting communities across India through sustainable and compassionate initiatives.',
  phone: '+91 98138 93744',
  email: 'wafatrustindia@gmail.com',
  address:
    'Village & Post Office Gulalta, Tehsil Punhana, District Nuh, Haryana - 122508',
  social: {
    facebook: 'https://www.facebook.com/wafatrust',
    instagram: 'https://www.instagram.com/wafa_trust/',
    youtube: 'https://www.youtube.com/@wafatrust',
    whatsapp: 'https://wa.me/919813893744',
  },
  url: 'https://wafatrustindia.org',
};
