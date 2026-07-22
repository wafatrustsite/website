import Link from 'next/link';

export const metadata = {
  title: 'About Us',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <div className="page-banner">
        <div className="container">
          <h1>About Wafa Trust</h1>
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span> About Us
          </div>
        </div>
      </div>

      <section className="page-content">
        <div className="container">
          <div className="content-body">
            <h2>Our Story</h2>
            <p>
              At Wafa Educational & Charitable Trust, our mission is to empower, educate, and uplift communities across our nation through holistic, sustainable, and compassionate initiatives. We are committed to making a meaningful and lasting impact on the lives of the underprivileged, marginalized, and underserved.
            </p>
            <p>
              Founded on the principles of empathy, integrity, and solidarity, we believe that everyone deserves the opportunity to thrive and reach their full potential. Through our various programs and projects, we strive to address pressing social, economic, and environmental challenges, fostering positive change from the ground up.
            </p>
            <img src="/assets/about.jpg" alt="About Us" />
            
            <h3>What We Do</h3>
            <p>
              Our organization is driven by a deep sense of social responsibility and a firm belief in the power of collective action. Whether it's providing access to quality education, healthcare services, clean water, or livelihood opportunities, we work tirelessly to create a more equitable and inclusive society for all.
            </p>
            <ul>
              <li><strong>Education:</strong> Establishing schools and providing resources to ensure every child has access to quality education.</li>
              <li><strong>Healthcare:</strong> Organizing medical camps and supporting treatments for the needy.</li>
              <li><strong>Water & Sanitation:</strong> Building borewells and handpumps in areas with scarce water resources.</li>
              <li><strong>Community Development:</strong> Providing food, shelter, and empowerment programs for marginalized groups.</li>
            </ul>

            <div style={{ marginTop: '3rem', textAlign: 'center' }}>
              <Link href="/mission" className="btn btn-primary" style={{ marginRight: '1rem' }}>
                Our Mission
              </Link>
              <Link href="/vision" className="btn btn-outline">
                Our Vision
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
