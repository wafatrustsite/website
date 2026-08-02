import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Our Mission',
  description:
    'The mission of Wafa Educational And Charitable Trust: to empower, educate and uplift underprivileged communities across Nuh, Haryana and India through sustainable, compassionate charity.',
  alternates: { canonical: '/mission' },
};

export default function MissionPage() {
  return (
    <>
      <div className="page-banner">
        <div className="container">
          <h1>Our Mission</h1>
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span> <Link href="/about">About</Link> <span>/</span> Mission
          </div>
        </div>
      </div>

      <section className="page-content">
        <div className="container">
          <div className="content-body">
            <h2>Our Mission</h2>
            <p>
              At Wafa Educational &amp; Charitable Trust, our mission is to empower, educate, and uplift communities across our nation through holistic, sustainable, and compassionate initiatives. We are committed to making a meaningful and lasting impact on the lives of the underprivileged, marginalized, and underserved, while promoting equality, education, and overall well-being. Our unwavering dedication to creating positive change stems from a belief in the inherent potential and dignity of every individual. We envision a future where every person has the opportunity to thrive and contribute to the betterment of society.
            </p>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', borderRadius: '16px', overflow: 'hidden', margin: '2rem 0' }}>
              <Image src="/assets/bg-2.jpg" alt="Our Mission" fill sizes="(max-width: 1024px) 100vw, 900px" style={{ objectFit: 'cover' }} />
            </div>
            <p>
              We firmly believe that education is the key to unlocking potential, reducing poverty, and fostering sustainable development. By providing access to quality education, we aim to equip individuals with the knowledge, skills, and opportunities they need to build a better future for themselves and their communities.
            </p>
            <p>
              Furthermore, we are dedicated to addressing immediate and pressing needs, such as access to healthcare, clean water, and basic necessities. Through our relief and rehabilitation efforts, we strive to alleviate suffering and restore dignity to those affected by natural disasters, conflicts, or systemic inequalities.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
