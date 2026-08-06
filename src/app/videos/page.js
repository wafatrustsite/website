import Link from 'next/link';

export const metadata = {
  title: 'Video Gallery',
  description:
    'Watch videos of Wafa Educational And Charitable Trust in action — water projects, food and ration distribution, medical camps and educational programmes across India.',
  alternates: { canonical: '/videos' },
};

const YOUTUBE = 'https://youtube.com/@wafatrustindia';

export default function VideosPage() {
  return (
    <>
      <div className="page-banner">
        <div className="container">
          <h1>Video Gallery</h1>
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span> <Link href="/gallery">Gallery</Link> <span>/</span> Videos
          </div>
        </div>
      </div>

      <section className="page-content">
        <div className="container">
          <div className="content-body" style={{ textAlign: 'center' }}>
            <p>
              See the work of Wafa Educational And Charitable Trust with your own eyes. From new water
              wells and hand pumps to ration and food distribution, medical camps and educational
              programmes — our videos capture the real impact of your generosity.
            </p>
            <p>
              All of our latest videos are published on our official YouTube channel.
            </p>
            <div style={{ marginTop: '2.5rem' }}>
              <a
                href={YOUTUBE}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M19.6 3.2H4.4A2.4 2.4 0 0 0 2 5.6v12.8a2.4 2.4 0 0 0 2.4 2.4h15.2a2.4 2.4 0 0 0 2.4-2.4V5.6a2.4 2.4 0 0 0-2.4-2.4zM10 15.5v-7l6 3.5-6 3.5z" />
                </svg>
                Watch on YouTube
              </a>
            </div>
            <p style={{ marginTop: '2rem', color: 'var(--color-text-light)' }}>
              Prefer photos? Visit our <Link href="/gallery">photo gallery</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
