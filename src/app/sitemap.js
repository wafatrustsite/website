import { SITE_INFO, getServiceSlugs, getAllBlogs, getBlogPageCount } from '../lib/data';

// Canonical host is non-www (SITE_INFO.url = https://wafatrustindia.org)
const BASE = SITE_INFO.url.replace(/\/$/, '');

export default function sitemap() {
  const now = new Date();

  const staticPaths = [
    { p: '', priority: 1.0, freq: 'weekly' },
    { p: '/donate', priority: 0.9, freq: 'weekly' },
    { p: '/blog', priority: 0.8, freq: 'weekly' },
    { p: '/about', priority: 0.7, freq: 'monthly' },
    { p: '/mission', priority: 0.6, freq: 'monthly' },
    { p: '/vision', priority: 0.6, freq: 'monthly' },
    { p: '/gallery', priority: 0.6, freq: 'monthly' },
    { p: '/contact', priority: 0.7, freq: 'monthly' },
    { p: '/certificate', priority: 0.5, freq: 'yearly' },
    { p: '/award', priority: 0.5, freq: 'yearly' },
    { p: '/privacy-policy', priority: 0.3, freq: 'yearly' },
    { p: '/terms', priority: 0.3, freq: 'yearly' },
    { p: '/refund-policy', priority: 0.3, freq: 'yearly' },
  ];

  const staticEntries = staticPaths.map(({ p, priority, freq }) => ({
    url: `${BASE}${p}`,
    lastModified: now,
    changeFrequency: freq,
    priority,
  }));

  const serviceEntries = getServiceSlugs().map((slug) => ({
    url: `${BASE}/services/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const blogEntries = getAllBlogs().map((b) => ({
    url: `${BASE}/blog/${b.id}`,
    lastModified: new Date(b.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const blogPageEntries = [];
  const pageCount = getBlogPageCount();
  for (let i = 2; i <= pageCount; i++) {
    blogPageEntries.push({
      url: `${BASE}/blog/page/${i}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.4,
    });
  }

  return [...staticEntries, ...serviceEntries, ...blogEntries, ...blogPageEntries];
}
