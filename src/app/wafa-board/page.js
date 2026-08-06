import Link from 'next/link';

export const metadata = {
  title: 'Wafa Board — Trustees, Staff, Mentors & Volunteers',
  description:
    'Meet the people behind Wafa Educational And Charitable Trust — our trustees and staff, mentors and the volunteers who carry out our charitable work across Nuh, Haryana and India.',
  alternates: { canonical: '/wafa-board' },
};

export default function WafaBoardPage() {
  return (
    <>
      <div className="page-banner">
        <div className="container">
          <h1>Wafa Board</h1>
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span> Wafa Board
          </div>
        </div>
      </div>

      <section className="page-content">
        <div className="container">
          <div className="content-body">
            <p>
              Wafa Educational And Charitable Trust is run by a dedicated team of trustees, staff,
              mentors and volunteers who give their time and expertise to serve the underprivileged.
              Together they ensure that every project is carried out on the ground with honesty,
              compassion and full transparency.
            </p>

            <h2 id="trustees" style={{ scrollMarginTop: '100px' }}>Trustees &amp; Staff</h2>
            <p>
              Our trustees provide governance and direction, while our staff manage day-to-day
              operations — from planning water and food projects to verifying beneficiaries and
              maintaining records. They are the backbone that keeps the trust accountable to its
              donors and its mission.
            </p>

            <h2 id="mentors" style={{ scrollMarginTop: '100px' }}>Mentors</h2>
            <p>
              Our mentors are respected scholars, educators and community elders who guide the trust&apos;s
              educational and religious initiatives — our maktabs, madrasas and scholarship programmes —
              helping shape the next generation with knowledge and good character.
            </p>

            <h2 id="volunteers" style={{ scrollMarginTop: '100px' }}>Volunteers</h2>
            <p>
              Our volunteers are the hands and heart of every distribution drive, medical camp and
              relief effort. From packing ration kits to organising iftar and winter-blanket drives,
              they turn donations into real help for real families.
            </p>
            <p>
              Would you like to join us? We welcome volunteers who want to make a difference in their
              community.
            </p>

            <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
              <Link href="/contact" className="btn btn-primary" style={{ marginRight: '1rem' }}>
                Become a Volunteer
              </Link>
              <Link href="/donate" className="btn btn-outline">
                Support Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
