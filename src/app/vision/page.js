import Link from 'next/link';

export const metadata = {
  title: 'Our Vision',
};

export default function VisionPage() {
  return (
    <>
      <div className="page-banner">
        <div className="container">
          <h1>Our Vision</h1>
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span> <Link href="/about">About</Link> <span>/</span> Vision
          </div>
        </div>
      </div>

      <section className="page-content">
        <div className="container">
          <div className="content-body">
            <h2>Our Vision</h2>
            <p>
              Our vision at Wafa Educational & Charitable Trust is to envision a world where every individual, regardless of their background or circumstances, has the opportunity to live a life of dignity, purpose, and fulfillment. We aspire to build a society where compassion, equity, and justice are the cornerstones of community life.
            </p>
            <img src="/assets/bg-4.jpg" alt="Our Vision" style={{ borderRadius: '16px', margin: '2rem 0' }} />
            <p>
              In our vision, education is a fundamental right and a powerful catalyst for transformation, unlocking the boundless potential within every human being. We see a future where every child has access to quality education, empowering them to become active participants in shaping their own destinies and contributing positively to society.
            </p>
            <p>
              Furthermore, we envision a society where basic needs such as healthcare, clean water, and shelter are met, ensuring the well-being and prosperity of all communities. Through our collaborative efforts and innovative approaches, we seek to inspire a culture of empathy and solidarity, where individuals come together to uplift and support one another in times of need.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
