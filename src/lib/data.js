import fs from 'fs';
import path from 'path';
import { blogPosts } from './blogsData';

function loadData() {
  const filePath = path.join(process.cwd(), 'public', 'data', 'site-data.json');
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw);
}

export function getCounters() {
  return loadData().counters;
}

// ===== BLOG =====
export const BLOG_PAGE_SIZE = 9;

// Newest posts first (by date)
export function getAllBlogs() {
  return [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getBlogById(id) {
  return blogPosts.find((b) => String(b.id) === String(id)) || null;
}

export function getBlogPageCount() {
  return Math.max(1, Math.ceil(blogPosts.length / BLOG_PAGE_SIZE));
}

// 1-indexed page of blog cards
export function getBlogsPage(page = 1) {
  const all = getAllBlogs();
  const start = (page - 1) * BLOG_PAGE_SIZE;
  return all.slice(start, start + BLOG_PAGE_SIZE);
}

// Related posts sharing a category, excluding the current one
export function getRelatedBlogs(id, limit = 3) {
  const current = getBlogById(id);
  if (!current) return getAllBlogs().slice(0, limit);
  const sameCat = getAllBlogs().filter(
    (b) => b.id !== current.id && b.category === current.category
  );
  const pool = sameCat.length >= limit ? sameCat : getAllBlogs().filter((b) => b.id !== current.id);
  return pool.slice(0, limit);
}

export function getGallery() {
  return [
    'assets/image-1.jpg',
    'assets/image-2.jpg',
    'assets/image-3.jpg',
    'assets/donate-2.jpg',
    'assets/donate-4.jpg',
    'assets/donate-5.jpg',
    'assets/donate-6.jpg',
    'assets/donate-7.jpg'
  ];
}

export function getAllPages() {
  return loadData().pages.filter((p) => typeof p === 'object' && p.id);
}

export function getPageBySlug(slug) {
  const pages = loadData().pages;
  return pages.find((p) => typeof p === 'object' && p.id === slug) || null;
}

// Campaign/service pages in the original site's "Our Projects" menu order,
// plus the trust's two institutions at the end
const SERVICE_SLUGS = [
  'water-well-for-needy-place',
  'masjid-madrasa-build',
  'handpump-for-needy-place',
  'supply-of-water-to-the-needy-through-tankers',
  'wazu-khana-build',
  'quran-e-kareem-distribution-2',
  'blankets-winter-distribution',
  'tricycle-distribution',
  'wheelchair-distribution',
  'iftar-for-ramadan',
  'free-food-distribution',
  'free-distribution-of-ration-kit',
  'widows-help',
  'poor-family-help',
  'poor-girl-marriage-help',
  'house-build',
  'maktab-deeniyat',
  'scholarship-for-higher-education',
  'ustad-hafiz-sponsor',
  'distribution-of-benches-and-mats',
  'sewing-machine-distribution',
  'cash-gift',
  'medical-aid',
  'small-business-project',
  'madrasa-anwar-e-hira-lilbanat',
  'wafa-international-school',
];

// Card images per service. IMPORTANT: never use campaign_*.jpeg here — those
// files are phone screenshots of web pages, not photos. Real trust photos:
// blog1-4, image-1, event1.webp, hero.jpg. The rest are the theme's stock
// photos, matched by subject.
const CAMPAIGN_IMAGE_MAP = {
  'water-well-for-needy-place': '/assets/donate-7.jpg',
  'masjid-madrasa-build': '/assets/image-1.jpg',
  'handpump-for-needy-place': '/assets/blog2.jpg',
  'supply-of-water-to-the-needy-through-tankers': '/assets/donate-5.jpg',
  'wazu-khana-build': '/assets/image-1.jpg',
  'quran-e-kareem-distribution-2': '/assets/blog4.jpg',
  'blankets-winter-distribution': '/assets/image-2.jpg',
  'tricycle-distribution': '/assets/donate-6.jpg',
  'wheelchair-distribution': '/assets/slider-21.jpg',
  'iftar-for-ramadan': '/assets/event1.webp',
  'free-food-distribution': '/assets/slider-11.jpg',
  'free-distribution-of-ration-kit': '/assets/blog1.jpg',
  'widows-help': '/assets/slider-31.jpg',
  'poor-family-help': '/assets/about.jpg',
  'poor-girl-marriage-help': '/assets/slider-41.jpg',
  'house-build': '/assets/blog3.jpg',
  'maktab-deeniyat': '/assets/slider-51.jpg',
  'scholarship-for-higher-education': '/assets/donate-4.jpg',
  'ustad-hafiz-sponsor': '/assets/mosques.jpg',
  'distribution-of-benches-and-mats': '/assets/slider-71.jpg',
  'sewing-machine-distribution': '/assets/donate-2.jpg',
  'cash-gift': '/assets/bg-2.jpg',
  'medical-aid': '/assets/image-3.jpg',
  'small-business-project': '/assets/donate-2.jpg',
  'madrasa-anwar-e-hira-lilbanat': '/assets/blog4.jpg',
  'wafa-international-school': '/assets/donate-4.jpg',
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
  phone: '+91 93732 08864',
  email: 'wafatrust011@gmail.com',
  address:
    'Near Zubaida Hospital, Mohammadi Chowk, Akola, Maharashtra 444001, India',
  social: {
    facebook: 'https://www.facebook.com/wafatrust',
    instagram: 'https://www.instagram.com/wafa_trust/',
    youtube: 'https://www.youtube.com/@wafatrust',
    whatsapp: 'https://wa.me/919373208864',
  },
  url: 'https://wafatrustindia.org',
};
