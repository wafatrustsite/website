import Link from 'next/link';
import { getServiceBySlug, getServiceSlugs } from '../../../lib/data';
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
    openGraph: {
      images: [service.image],
    }
  };
}

export default async function ServicePage({ params }) {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.slug);
  
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

      <div className="container" style={{ maxWidth: '960px', padding: '3.5rem 1.5rem' }}>
        <div className="page-content" style={{ padding: '0' }}>
          <img 
            src={service.image} 
            alt={service.title} 
            style={{ width: '100%', borderRadius: 'var(--radius-lg)', marginBottom: '2rem', maxHeight: '480px', objectFit: 'cover', boxShadow: 'var(--shadow-md)' }} 
          />
          <div 
            className="content-body"
            style={{ maxWidth: '100%', margin: 0, fontSize: '1.1rem', lineHeight: '1.85' }}
            dangerouslySetInnerHTML={{ __html: service.content }}
          />

          {/* Support This Cause / Donate Now */}
          <div style={{
            marginTop: '3rem',
            padding: '2.5rem 2rem',
            background: 'linear-gradient(135deg, rgba(0, 153, 217, 0.06), rgba(247, 148, 29, 0.08))',
            borderRadius: 'var(--radius-lg)',
            border: '1.5px solid rgba(0, 153, 217, 0.25)',
            textAlign: 'center',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <h3 style={{ fontSize: '1.6rem', color: 'var(--color-primary-dark)', marginBottom: '0.6rem' }}>
              Support This Cause
            </h3>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-light)', maxWidth: '620px', margin: '0 auto 1.5rem', lineHeight: '1.6' }}>
              Your donation can make a direct impact on this project. Help us continue our mission for <strong>{service.title}</strong>.
            </p>
            <div style={{ display: 'inline-flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link 
                href={`/donate?cause=${service.id}`}
                className="btn btn-primary"
                style={{ padding: '0.85rem 2.5rem', fontSize: '1.1rem', fontWeight: 700, borderRadius: 'var(--radius-full)' }}
              >
                ❤ Donate Now
              </Link>
              <a 
                href={`https://wa.me/919813893744?text=${encodeURIComponent(`Hello Wafa Trust, I want to donate for: *${service.title}*. Please share details.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent"
                style={{ padding: '0.85rem 2rem', fontSize: '1.05rem', fontWeight: 600, borderRadius: 'var(--radius-full)' }}
              >
                💬 Donate via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
