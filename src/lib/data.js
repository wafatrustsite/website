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
    'assets/real-water-well.jpg',
    'assets/real-quran.jpg',
    'assets/real-ration-kit.jpg',
    'assets/real-free-food.jpg',
    'assets/real-handpump.jpg',
    'assets/real-wheelchair.jpg',
    'assets/real-house.jpg',
    'assets/real-iftar.jpg',
    'assets/real-scholarship.jpg',
    'assets/real-water-tanker.jpg',
    'assets/real-maktab.jpg',
    'assets/real-small-business.jpg'
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
  'support-for-orphans',
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

// Card images per service. `real-*.jpg` are genuine, Wafa-branded field photos
// supplied by the trust (Aug 2026). A few programmes without a clean real photo
// keep a matched stock image (noted inline). Never use campaign_*.jpeg here —
// those are phone screenshots of the old site, not photos.
const CAMPAIGN_IMAGE_MAP = {
  'water-well-for-needy-place': '/assets/real-water-well.jpg',
  'masjid-madrasa-build': '/assets/real-masjid.jpg',
  'handpump-for-needy-place': '/assets/real-handpump.jpg',
  'supply-of-water-to-the-needy-through-tankers': '/assets/real-water-tanker.jpg',
  'wazu-khana-build': '/assets/real-wazu-khana.jpg',
  'quran-e-kareem-distribution-2': '/assets/real-quran.jpg',
  'blankets-winter-distribution': '/assets/image-2.jpg', // no clean real photo yet
  'tricycle-distribution': '/assets/real-tricycle.jpg',
  'wheelchair-distribution': '/assets/real-wheelchair.jpg',
  'iftar-for-ramadan': '/assets/real-iftar.jpg',
  'free-food-distribution': '/assets/real-free-food.jpg',
  'free-distribution-of-ration-kit': '/assets/real-ration-kit.jpg',
  'widows-help': '/assets/real-widows.jpg',
  'support-for-orphans': '/assets/real-orphans.jpg',
  'poor-family-help': '/assets/about.jpg', // no dedicated real photo yet
  'poor-girl-marriage-help': '/assets/slider-41.jpg', // no real photo yet
  'house-build': '/assets/real-house.jpg',
  'maktab-deeniyat': '/assets/real-maktab.jpg',
  'scholarship-for-higher-education': '/assets/real-scholarship.jpg',
  'ustad-hafiz-sponsor': '/assets/mosques.jpg', // no dedicated real photo yet
  'distribution-of-benches-and-mats': '/assets/real-benches-mats.jpg',
  'sewing-machine-distribution': '/assets/donate-2.jpg', // no real photo yet
  'cash-gift': '/assets/bg-2.jpg', // no real photo (only stock was supplied)
  'medical-aid': '/assets/real-medical-aid.jpg',
  'small-business-project': '/assets/real-small-business.jpg',
  'madrasa-anwar-e-hira-lilbanat': '/assets/real-girls-madrasa.jpg',
  'wafa-international-school': '/assets/donate-4.jpg', // no real school photo yet
};

// Unique, keyword-rich meta descriptions per service (SEO). These replace the
// old templated "Learn more about our X campaign." so each donation/money page
// has its own snippet. Kept ~150-160 chars for full SERP display.
const SERVICE_META = {
  'water-well-for-needy-place': "Fund a clean-water well for a needy village in India. Your Sadaqah or Lillah gives whole communities a lasting, safe source of drinking water. Donate today.",
  'masjid-madrasa-build': 'Help build a masjid or madrasa in India — a lasting centre of faith, learning and community. Give your Lillah, Sadaqah Jariyah or Zakat with Wafa Trust.',
  'handpump-for-needy-place': 'Install a hand pump for a poor community in India and bring clean water closer to families. An ongoing-reward Sadaqah Jariyah. Donate with Wafa Trust.',
  'supply-of-water-to-the-needy-through-tankers': 'Provide emergency water by tanker to drought-hit, source-less communities in India. Your Sadaqah delivers safe drinking water fast. Donate with Wafa Trust.',
  'wazu-khana-build': 'Help build clean, dignified wudu (ablution) facilities for worshippers in India — a Sadaqah Jariyah rewarded with every prayer. Donate with Wafa Trust.',
  'quran-e-kareem-distribution-2': "Place the Holy Qur'an into willing homes and maktabs across India. A Sadaqah Jariyah that keeps rewarding with every letter recited. Donate with Wafa Trust.",
  'blankets-winter-distribution': 'Donate blankets to vulnerable families and the homeless across India this winter — a simple, life-saving Sadaqah. Give warmth today with Wafa Trust.',
  'tricycle-distribution': 'Gift a hand-powered tricycle and restore independence to a disabled person in India. A dignity-giving Sadaqah. Donate with Wafa Educational & Charitable Trust.',
  'wheelchair-distribution': 'Donate a wheelchair and restore mobility and dignity to a disabled person in India. A deeply rewarding act of Sadaqah. Give today with Wafa Trust.',
  'iftar-for-ramadan': 'Provide iftar meals to fasting families in India this Ramadan. Share the reward of the fast with your Sadaqah or Zakat. Donate with Wafa Trust.',
  'free-food-distribution': 'Feed a hungry family in India with nutritious meals so no one sleeps hungry. Your Sadaqah reaches verified families in Nuh and beyond. Donate with Wafa Trust.',
  'free-distribution-of-ration-kit': "Sponsor a month's ration kit of staple food for a struggling family in India. A practical, high-impact Sadaqah or Zakat. Donate with Wafa Trust.",
  'widows-help': 'Support a widow in India with food, income and dignity — a highly rewarded act of Zakat and Sadaqah that rebuilds a whole family. Donate with Wafa Trust.',
  'support-for-orphans': "Sponsor an orphan's care, food, shelter and education in India — among the most beloved acts of charity in Islam. Donate Zakat or Sadaqah with Wafa Trust.",
  'poor-family-help': 'Give holistic support to a poor family in India breaking out of poverty. Your Zakat and Sadaqah restores hope and stability. Donate with Wafa Trust.',
  'poor-girl-marriage-help': 'Help a poor family in India marry their daughter with dignity by covering essential wedding costs through your Zakat or Sadaqah. Donate with Wafa Trust.',
  'house-build': 'Help build a safe, permanent home for a homeless family in India — a lasting Sadaqah Jariyah that shelters a family for years. Donate with Wafa Trust.',
  'maktab-deeniyat': 'Fund essential Islamic education for children in India, online and offline — a Sadaqah Jariyah that keeps rewarding as they learn. Donate with Wafa Trust.',
  'scholarship-for-higher-education': 'Fund a deserving student in India toward higher education and a brighter future. A transformative Sadaqah or Zakat. Donate with Wafa Trust.',
  'ustad-hafiz-sponsor': "Sponsor an ustad or hafiz who preserves and teaches the Qur'an in India. Support the teachers behind every student. Donate Sadaqah with Wafa Trust.",
  'distribution-of-benches-and-mats': 'Provide benches and mats so no child in India studies on the floor — a practical Sadaqah Jariyah for schools and maktabs. Donate with Wafa Trust.',
  'sewing-machine-distribution': 'Gift a sewing machine — a livelihood in a box — to empower a woman in India to earn with dignity. A lasting Sadaqah. Donate with Wafa Trust.',
  'cash-gift': 'Give direct cash relief to a struggling family in India, restoring hope and stability fast. Distribute your Zakat or Sadaqah. Donate with Wafa Trust.',
  'medical-aid': 'Fund treatment and medical bills for poor patients in India who cannot afford care — an urgent, often life-saving Sadaqah or Zakat. Donate with Wafa Trust.',
  'small-business-project': 'Give seed support to launch a self-reliant small business for a poor family in India — a Sadaqah that ends dependence for good. Donate with Wafa Trust.',
  'madrasa-anwar-e-hira-lilbanat': "Support Madrasa Anwar-e-Hira Lilbanat, Wafa Trust's girls' madrasa in India providing Islamic education. A Sadaqah Jariyah. Donate today.",
  'wafa-international-school': 'Support Wafa International School, providing quality education to children in Nuh, Haryana, India. Invest in the next generation. Donate today.',
};

function serviceDescription(slug, title) {
  return SERVICE_META[slug] || `Support our ${title} programme in India with Wafa Educational And Charitable Trust. Donate your Zakat, Sadaqah or Lillah today.`;
}

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
    metaDescription: serviceDescription(slug, page.title),
    isService: SERVICE_SLUGS.includes(slug),
  };
}

export function getServiceSlugs() {
  return SERVICE_SLUGS;
}

// Projects grouped into categories for the /services showcase page
export const SERVICE_CATEGORIES = [
  {
    id: 'water-sanitation',
    title: 'Water & Sanitation',
    intro: 'Clean water and hygiene for communities that struggle for it every day.',
    icon: 'droplet',
    items: [
      ['water-well-for-needy-place', 'A lasting source of clean, safe drinking water for whole communities.'],
      ['handpump-for-needy-place', 'Bringing clean water closer to families in need.'],
      ['supply-of-water-to-the-needy-through-tankers', 'Emergency water for drought-hit, source-less communities.'],
      ['wazu-khana-build', 'Clean, dignified ablution (wudu) facilities for worshippers.'],
    ],
  },
  {
    id: 'religious-educational',
    title: 'Religious & Educational',
    intro: 'Building faith, knowledge and opportunity for the next generation.',
    icon: 'book',
    items: [
      ['masjid-madrasa-build', 'Building centers of faith, knowledge and community.'],
      ['quran-e-kareem-distribution-2', "Placing the Holy Qur'an into every willing home and maktab."],
      ['maktab-deeniyat', 'Essential Islamic education for children, online and offline.'],
      ['ustad-hafiz-sponsor', "Supporting the teachers who preserve the Qur'an."],
      ['distribution-of-benches-and-mats', 'Proper seating so no child struggles to learn.'],
      ['scholarship-for-higher-education', 'Funding deserving students toward higher education.'],
    ],
  },
  {
    id: 'food-relief',
    title: 'Food & Relief',
    intro: 'Meeting the most basic needs — so no one goes without food or warmth.',
    icon: 'food',
    items: [
      ['free-food-distribution', 'Nutritious meals so no one has to sleep hungry.'],
      ['free-distribution-of-ration-kit', 'A month of staple food for a struggling family.'],
      ['iftar-for-ramadan', 'Iftar meals for fasting families in Ramadan.'],
      ['blankets-winter-distribution', 'Warmth for the vulnerable through the harsh winter.'],
    ],
  },
  {
    id: 'health-mobility',
    title: 'Health & Mobility',
    intro: 'Restoring health, dignity and independence to those in need.',
    icon: 'heart',
    items: [
      ['medical-aid', 'Treatment and medical-bill support for the poor.'],
      ['wheelchair-distribution', 'Restoring mobility and dignity to the disabled.'],
      ['tricycle-distribution', 'Hand-powered tricycles that return independence.'],
    ],
  },
  {
    id: 'family-empowerment',
    title: 'Family & Empowerment',
    intro: 'Lifting families out of poverty with lasting, dignified support.',
    icon: 'people',
    items: [
      ['widows-help', 'Support and empowerment for widows in need.'],
      ['support-for-orphans', 'Care, education and shelter for orphaned children.'],
      ['poor-family-help', 'Holistic support for families breaking out of poverty.'],
      ['poor-girl-marriage-help', 'Helping poor families marry daughters with dignity.'],
      ['house-build', 'Safe, permanent homes for the homeless.'],
      ['sewing-machine-distribution', 'A livelihood in a box — empowering women to earn.'],
      ['cash-gift', 'Direct cash relief that restores hope and stability.'],
      ['small-business-project', 'Seed support to launch a self-reliant livelihood.'],
    ],
  },
];

export function getServiceCategories() {
  return SERVICE_CATEGORIES.map((cat) => ({
    ...cat,
    items: cat.items
      .map(([slug, tagline]) => {
        const s = getServiceBySlug(slug);
        return s ? { id: slug, title: s.title, image: s.image, tagline } : null;
      })
      .filter(Boolean),
  }));
}

export const SITE_INFO = {
  name: 'Wafa Educational And Charitable Trust',
  tagline: 'National and charitable institution',
  description:
    'Wafa Educational And Charitable Trust is a national charitable institution dedicated to empowering, educating, and uplifting communities across India through sustainable and compassionate initiatives.',
  phone: '+91 98138 93744',
  phone2: '+91 98128 93744',
  email: 'wafatrustindia@gmail.com',
  address:
    'Village & Post Office Gulalta, Tehsil Punhana, District Nuh, Haryana 122508, India',
  social: {
    facebook: 'https://www.facebook.com/wafatrust.india?mibextid=ZbWKwL',
    instagram: 'https://www.instagram.com/invites/contact/?igsh=tgm5bn6b38sp&utm_content=2jv0wdf',
    youtube: 'https://youtube.com/@wafatrustindia?si=7Asp5Qw0XsobrO4o',
    whatsapp: 'https://wa.me/919813893744',
  },
  url: 'https://wafatrustindia.org',
};
