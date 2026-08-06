import Link from 'next/link';

export const metadata = {
  title: 'Events',
  description:
    'Events and on-ground activities of Wafa Educational And Charitable Trust — ration and food distribution, medical camps, iftar drives, winter relief and educational programmes across India.',
  alternates: { canonical: '/events' },
};

const activities = [
  ['Food & Ration Drives', 'Regular distribution of cooked meals and monthly ration kits to struggling families.'],
  ['Medical Camps', 'Health check-ups, treatment support and distribution of wheelchairs and tricycles.'],
  ['Ramadan & Iftar', 'Community iftar gatherings and Zakat distribution throughout the holy month.'],
  ['Winter Relief', 'Blanket distribution to protect vulnerable families through the cold months.'],
  ['Water Projects', 'Inaugurations of new wells, hand pumps and water points in needy villages.'],
  ['Educational Events', 'Felicitation of students, scholarship handovers and maktab activities.'],
];

export default function EventsPage() {
  return (
    <>
      <div className="page-banner">
        <div className="container">
          <h1>Events</h1>
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span> Events
          </div>
        </div>
      </div>

      <section className="page-content">
        <div className="container">
          <div className="content-body">
            <p>
              Throughout the year, Wafa Educational And Charitable Trust carries out events and drives
              on the ground across Nuh, Haryana and other parts of India. These are the moments where
              your donations become real, visible help for families in need.
            </p>
          </div>

          <div className="help-features" style={{ marginTop: '2rem' }}>
            {activities.map(([title, desc]) => (
              <div className="about-box" key={title}>
                <div>
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="blog-cta" style={{ marginTop: 'var(--space-2xl)' }}>
            <h3>Follow our latest activities</h3>
            <p>
              See photos and videos from our recent events on our social media, or explore our{' '}
              <Link href="/gallery">gallery</Link>. Want to be part of the next one?
            </p>
            <div className="blog-cta-buttons">
              <Link href="/donate" className="btn btn-primary btn-lg">Donate Now</Link>
              <Link href="/contact" className="btn btn-outline btn-lg">Get Involved</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
