import Link from 'next/link';
import Image from 'next/image';
import { getServiceBySlug, getServiceSlugs, SITE_INFO } from '../../../lib/data';
import { notFound } from 'next/navigation';
import CountUp from '../../../components/CountUp';

const SITE_URL = SITE_INFO.url || 'https://wafatrustindia.org';

// Decode the handful of HTML entities used in the service content so the
// extracted subtitle renders as real characters (React escapes strings).
function decodeEntities(str) {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&ndash;/g, '–')
    .replace(/&mdash;/g, '—')
    .replace(/&rsquo;/g, '’')
    .replace(/&lsquo;/g, '‘')
    .replace(/&ldquo;/g, '“')
    .replace(/&rdquo;/g, '”')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ');
}

// The first <h2> in a service's content is its headline tagline
// (e.g. "Water Wells for Needy Communities – A Lifeline of Hope").
// We surface it as the hero subtitle and strip it from the body to avoid
// showing it twice.
const FIRST_H2 = /<h2[^>]*>([\s\S]*?)<\/h2>/i;

function extractSubtitle(html) {
  if (!html) return null;
  const m = html.match(FIRST_H2);
  if (!m) return null;
  const text = decodeEntities(m[1].replace(/<[^>]+>/g, '').trim());
  return text || null;
}

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

  const url = `${SITE_URL}/services/${resolvedParams.slug}`;
  return {
    title: service.title,
    description: service.metaDescription,
    alternates: { canonical: `/services/${resolvedParams.slug}` },
    openGraph: {
      title: service.title,
      description: service.metaDescription,
      url,
      type: 'website',
      images: [service.image],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.title,
      description: service.metaDescription,
      images: [service.image],
    },
  };
}

export default async function ServicePage({ params }) {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.slug);

  if (!service) {
    notFound();
  }

  const subtitle = extractSubtitle(service.content);
  // Strip the first <h2> from the body since it now appears as the hero subtitle.
  const bodyHtml = subtitle ? service.content.replace(FIRST_H2, '') : service.content;

  const url = `${SITE_URL}/services/${resolvedParams.slug}`;
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Projects', item: `${SITE_URL}/services` },
      { '@type': 'ListItem', position: 3, name: service.title, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <div className="service-hero">
        <Image src={service.image} alt={service.title} fill sizes="100vw" priority style={{ objectFit: 'cover' }} />
        <div className="service-hero-overlay">
          <div className="container">
            <h1>{service.title}</h1>
            {subtitle && <p className="service-hero-subtitle">{subtitle}</p>}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="service-body">
          {service.count && (
            <div className="service-count-badge">
              <div>
                <span className="service-count-label-top">Support</span>
                <h2 style={{ margin: 0 }}>{service.title}</h2>
              </div>
              <div className="service-count-number">
                <strong><CountUp value={service.count} /></strong>
                <span>{service.countLabel}</span>
              </div>
            </div>
          )}

          <div
            className="content-body"
            style={{ maxWidth: '100%', margin: 0, fontSize: '1.05rem', lineHeight: '1.8' }}
            dangerouslySetInnerHTML={{ __html: bodyHtml }}
          />

          {/* Donate CTA — moved to the bottom now that the sidebar is gone */}
          <div className="service-donate-cta">
            <h3>Support This Cause</h3>
            <p>Your donation can make a direct impact on this project.</p>
            <Link href="/donate" className="btn btn-primary btn-lg">
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
