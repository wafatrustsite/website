import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Education',
  description:
    'Education initiatives of Wafa Educational And Charitable Trust — higher-education scholarships, Wafa Global School and Madrasa Anwar-e-Hira Lil Banat, nurturing students across India.',
  alternates: { canonical: '/education' },
};

const initiatives = [
  {
    href: '/services/scholarship-for-higher-education',
    image: '/assets/real-scholarship.jpg',
    title: 'Higher Education',
    desc: 'Scholarships that fund deserving students towards college and a brighter future.',
  },
  {
    href: '/services/wafa-international-school',
    image: '/assets/donate-4.jpg',
    title: 'Wafa Global School',
    desc: 'Quality modern schooling for children in Nuh, Haryana and the surrounding region.',
  },
  {
    href: '/services/madrasa-anwar-e-hira-lilbanat',
    image: '/assets/real-girls-madrasa.jpg',
    title: 'Madrasa Anwar-e-Hira Lil Banat',
    desc: "Islamic education for girls, combining Qur'anic learning with strong values.",
  },
];

export default function EducationPage() {
  return (
    <>
      <div className="page-banner">
        <div className="container">
          <h1>Education</h1>
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span> Education
          </div>
        </div>
      </div>

      <section className="page-content">
        <div className="container">
          <div className="content-body">
            <p>
              Education is at the heart of Wafa Educational And Charitable Trust. We believe knowledge
              is the surest way out of poverty — so we invest in students, schools and madrasas that
              give children in underprivileged communities a real chance to thrive.
            </p>
          </div>

          <div className="project-grid" style={{ marginTop: '2rem' }}>
            {initiatives.map((it) => (
              <Link key={it.href} href={it.href} className="project-card">
                <div className="project-card-img">
                  <Image src={it.image} alt={it.title} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
                </div>
                <div className="project-card-body">
                  <h3>{it.title}</h3>
                  <p>{it.desc}</p>
                  <span className="project-card-link">Learn More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
