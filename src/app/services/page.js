import Link from 'next/link';
import { getServiceCategories } from '../../lib/data';

export const metadata = {
  title: 'Our Humanitarian Projects',
  description:
    'Explore the humanitarian projects of Wafa Educational And Charitable Trust — water, education, food, health and family empowerment — serving Nuh, Haryana and communities across India.',
  alternates: { canonical: '/services' },
};

const CAT_ICONS = {
  droplet: <path d="M12 2s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />,
  book: (
    <>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </>
  ),
  food: (
    <>
      <path d="M3 11h18a9 9 0 0 1-18 0z" />
      <line x1="12" y1="3" x2="12" y2="7" />
      <line x1="8" y1="4" x2="8" y2="7" />
      <line x1="16" y1="4" x2="16" y2="7" />
    </>
  ),
  heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />,
  people: (
    <>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
};

export default function ServicesIndexPage() {
  const categories = getServiceCategories();

  return (
    <>
      <div className="page-banner">
        <div className="container">
          <h1>Our Humanitarian Projects</h1>
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span> Projects
          </div>
        </div>
      </div>

      <section className="page-content">
        <div className="container">
          {categories.map((cat) => (
            <div key={cat.id} className="project-category" id={cat.id}>
              <div className="project-category-head">
                <span className="project-category-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {CAT_ICONS[cat.icon]}
                  </svg>
                </span>
                <div>
                  <h2>{cat.title}</h2>
                  <p>{cat.intro}</p>
                </div>
              </div>

              <div className="project-grid">
                {cat.items.map((s) => (
                  <Link key={s.id} href={`/services/${s.id}`} className="project-card">
                    <div className="project-card-img">
                      <img src={s.image} alt={s.title} loading="lazy" />
                    </div>
                    <div className="project-card-body">
                      <h3>{s.title}</h3>
                      <p>{s.tagline}</p>
                      <span className="project-card-link">Learn More →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div className="blog-cta" style={{ marginTop: 'var(--space-2xl)' }}>
            <h3>Support a cause close to your heart</h3>
            <p>
              Every project here is carried out directly on the ground. Your Zakat, Sadaqah or Lillah
              reaches verified families in Nuh, Haryana and across India — transparently and with a receipt.
            </p>
            <div className="blog-cta-buttons">
              <Link href="/donate" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
