import Link from 'next/link';
import Image from 'next/image';
import { getPageBySlug } from '../../lib/data';

export const metadata = {
  title: 'Awards & Recognition',
  description:
    'Awards and recognition earned by Wafa Educational And Charitable Trust for its humanitarian and charitable work serving underprivileged communities across Nuh, Haryana and India.',
  alternates: { canonical: '/award' },
};

export default function AwardPage() {
  const pageData = getPageBySlug('award');

  return (
    <>
      <div className="page-banner">
        <div className="container">
          <h1>Awards & Recognition</h1>
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span> Award
          </div>
        </div>
      </div>

      <section className="page-content">
        <div className="container">
          <div className="content-body" style={{ textAlign: 'center' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '820px', margin: '0 auto 2rem', aspectRatio: '3 / 2', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
              <Image
                src="/assets/real-award.jpg"
                alt="Wafa Educational And Charitable Trust receiving an award of recognition"
                fill
                sizes="(max-width: 900px) 100vw, 820px"
                style={{ objectFit: 'cover' }}
              />
            </div>
            {pageData && pageData.content ? (
              <div dangerouslySetInnerHTML={{ __html: pageData.content }} />
            ) : (
              <p>Awards information is being updated.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
