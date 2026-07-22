import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogById, getAllBlogs, getRelatedBlogs, getServiceBySlug, SITE_INFO } from '../../../lib/data';

const SITE_URL = SITE_INFO.url || 'https://wafatrustindia.org';

export function generateStaticParams() {
  return getAllBlogs().map((blog) => ({ id: String(blog.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const blog = getBlogById(id);
  if (!blog) return { title: 'Not Found' };

  const url = `${SITE_URL}/blog/${blog.id}`;
  return {
    title: { absolute: blog.metaTitle || `${blog.title} | Wafa Educational And Charitable Trust` },
    description: blog.metaDescription,
    keywords: blog.keyword,
    alternates: { canonical: `/blog/${blog.id}` },
    openGraph: {
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription,
      url,
      type: 'article',
      images: [`/${blog.image}`],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription,
      images: [`/${blog.image}`],
    },
  };
}

function formatDate(d) {
  const date = new Date(d);
  if (isNaN(date)) return d;
  return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default async function BlogPostPage({ params }) {
  const { id } = await params;
  const blog = getBlogById(id);
  if (!blog) notFound();

  const related = getRelatedBlogs(id, 4);
  const relatedServices = (blog.relatedServices || [])
    .map((slug) => getServiceBySlug(slug))
    .filter(Boolean);

  const url = `${SITE_URL}/blog/${blog.id}`;

  // ----- Structured data (Article + FAQ + Breadcrumb) -----
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: blog.title,
    description: blog.metaDescription,
    image: `${SITE_URL}/${blog.image}`,
    datePublished: blog.date,
    dateModified: blog.date,
    author: { '@type': 'Organization', name: SITE_INFO.name },
    publisher: {
      '@type': 'Organization',
      name: SITE_INFO.name,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/assets/logo.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };

  const faqLd = blog.faq && blog.faq.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: blog.faq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null;

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: blog.title, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      {faqLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <div className="page-banner">
        <div className="container">
          {blog.category && <span className="page-banner-tag">{blog.category}</span>}
          <h1>{blog.title}</h1>
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span> <Link href="/blog">Blog</Link> <span>/</span> {blog.title}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="service-layout">
          {/* Main article */}
          <article className="page-content" style={{ padding: '0', order: 1 }}>
            <div className="content-body" style={{ maxWidth: '100%', margin: 0 }}>
              <img
                src={`/${blog.image}`}
                alt={blog.title}
                style={{ width: '100%', borderRadius: '16px', marginBottom: '2rem' }}
              />

              <div className="blog-post-meta">
                <span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  {SITE_INFO.name}
                </span>
                <span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  {formatDate(blog.date)}
                </span>
                {blog.readTime && (
                  <span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    {blog.readTime}
                  </span>
                )}
              </div>

              <div dangerouslySetInnerHTML={{ __html: blog.content }} />

              {/* FAQ */}
              {blog.faq && blog.faq.length > 0 && (
                <div className="blog-faq">
                  <h2>Frequently Asked Questions</h2>
                  {blog.faq.map((f, i) => (
                    <div className="blog-faq-item" key={i}>
                      <h3>{f.q}</h3>
                      <p>{f.a}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Donation CTA */}
              <div className="blog-cta">
                <h3>Turn this into action</h3>
                <p>
                  Your Zakat, Sadaqah or Lillah reaches verified families in Akola, Maharashtra and across
                  India — quickly, transparently and with a receipt. Give today and become the reason for
                  someone&apos;s relief.
                </p>
                <div className="blog-cta-buttons">
                  <Link href="/donate" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                    Donate Now
                  </Link>
                </div>
              </div>

              {/* Related programs (internal links to money pages) */}
              {relatedServices.length > 0 && (
                <div className="blog-related-programs">
                  <h3>Support a related programme</h3>
                  <div className="blog-related-grid">
                    {relatedServices.map((s) => (
                      <Link key={s.id} href={`/services/${s.id}`} className="blog-related-card">
                        <img src={s.image} alt={s.title} loading="lazy" />
                        <span>{s.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="service-sidebar" style={{ order: 2 }}>
            <div className="blog-sidebar-cta">
              <h4>Make a Donation</h4>
              <p>100% of your donation goes to those in need. Give Zakat, Sadaqah or Lillah securely.</p>
              <Link href="/donate" className="btn btn-primary" style={{ width: '100%' }}>Donate Now</Link>
            </div>

            <h4 style={{ marginTop: '2rem' }}>Related Articles</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {related.map((b) => (
                <div key={b.id} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <img src={`/${b.image}`} alt={b.title} loading="lazy" style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px', flexShrink: 0 }} />
                  <h5 style={{ fontSize: '0.9rem', margin: 0, lineHeight: '1.3' }}>
                    <Link href={`/blog/${b.id}`} style={{ color: 'var(--color-text)' }}>{b.title}</Link>
                  </h5>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
