import Link from 'next/link';
import { getServiceBySlug, getServiceSlugs, getAllServices } from '../../../lib/data';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const slugs = getServiceSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.slug);
  if (!service) return { title: 'Not Found' };
  
  return {
    title: service.title,
    description: `Learn more about our ${service.title} campaign.`,
    alternates: { canonical: `/services/${resolvedParams.slug}` },
    openGraph: {
      images: [service.image],
    }
  };
}

export default async function ServicePage({ params }) {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.slug);
  const allServices = getAllServices();
  
  if (!service) {
    notFound();
  }

  return (
    <>
      <div className="service-hero">
        <img src="/assets/bg-4.jpg" alt="Service Header Background" />
        <div className="service-hero-overlay">
          <div className="container">
            <h1>{service.title}</h1>
            <div className="breadcrumb" style={{ marginTop: '1rem' }}>
              <Link href="/">Home</Link> <span style={{ color: 'rgba(255,255,255,0.4)', margin: '0 0.5rem' }}>/</span> 
              <span style={{ color: 'var(--color-accent-light)' }}>Services</span> <span style={{ color: 'rgba(255,255,255,0.4)', margin: '0 0.5rem' }}>/</span> 
              <span style={{ color: 'rgba(255,255,255,0.8)' }}>{service.title}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="service-layout">
          {/* Sidebar */}
          <aside className="service-sidebar">
            <h4>All Services</h4>
            <ul>
              {allServices.map((s) => (
                <li key={s.id}>
                  <Link 
                    href={`/services/${s.id}`}
                    className={s.id === params.slug ? 'active' : ''}
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-light)' }}>
              <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Support This Cause</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-light)', marginBottom: '1rem' }}>
                Your donation can make a direct impact on this project.
              </p>
              <Link href="/donate" className="btn btn-primary" style={{ width: '100%', padding: '0.5rem' }}>
                Donate Now
              </Link>
            </div>
          </aside>

          {/* Main Content */}
          <div className="page-content" style={{ padding: '0' }}>
            <img
              src={service.image}
              alt={service.title}
              style={{ width: '100%', borderRadius: 'var(--radius-lg)', marginBottom: '2rem', maxHeight: '450px', objectFit: 'cover', boxShadow: 'var(--shadow-sm)' }}
            />
            {service.count && (
              <div className="service-count-badge">
                <div>
                  <span className="service-count-label-top">Support</span>
                  <h2 style={{ margin: 0 }}>{service.title}</h2>
                </div>
                <div className="service-count-number">
                  <strong>{service.count}</strong>
                  <span>{service.countLabel}</span>
                </div>
              </div>
            )}
            <div
              className="content-body"
              style={{ maxWidth: '100%', margin: 0, fontSize: '1.05rem', lineHeight: '1.8' }}
              dangerouslySetInnerHTML={{ __html: service.content }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
