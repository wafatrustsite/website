import Link from 'next/link';

export const metadata = {
  title: "Chairman's Message",
  description:
    "A message from the Chairman of Wafa Educational And Charitable Trust on our mission to educate, empower and uplift underprivileged communities across Nuh, Haryana and India.",
  alternates: { canonical: '/chairman-message' },
};

export default function ChairmanMessagePage() {
  return (
    <>
      <div className="page-banner">
        <div className="container">
          <h1>Chairman&apos;s Message</h1>
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span> <Link href="/about">About Us</Link> <span>/</span> Chairman&apos;s Message
          </div>
        </div>
      </div>

      <section className="page-content">
        <div className="container">
          <div className="content-body">
            <p style={{ fontWeight: 600 }}>
              Dear Friends, Respected Supporters, Donors and Well-wishers,
            </p>
            <p style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--color-primary)' }}>
              Assalamu Alaikum, Rahmatullahi Wa Barakatuh!
            </p>
            <p>
              It is a matter of great joy and honour for us that Wafa Educational and Charitable Trust
              continues its services for the betterment of society. Our goal is to bring positive
              changes in the fields of education, health, and welfare so that every individual can live
              a dignified life.
            </p>
            <p>
              Alhamdulillah, so far hundreds of orphans and needy children have been provided with
              educational opportunities, widows and deserving families are being supported, and youth
              are being provided with employment opportunities through technical training. We are
              determined to further expand the scope of these services and reach every needy person.
            </p>
            <p>
              Since our inception, we have achieved many notable milestones — including the educational
              sponsorship of orphans and needy children, financial assistance to widows and deserving
              families, and the provision of facilities in the health sector. Through our training
              programmes, we are equipping the youth with skills so they can become independent and
              live with dignity.
            </p>
            <p>
              We are proud that, despite our limited resources, with the grace and mercy of Allah and
              the help of philanthropists like you, we have adorned hundreds of orphans and needy
              children with the jewel of education, sponsored widows and destitute families, and
              provided health and employment opportunities. We are determined to expand these services
              further and reach every needy person.
            </p>
            <p>
              All these achievements are the result of your cooperation and prayers. I request you all
              to stay with us in this mission and make it more successful through your prayers,
              cooperation, and financial assistance. May Allah grant us more success in serving the
              people. Ameen.
            </p>
            <p style={{ fontWeight: 600 }}>And peace,</p>
            <p style={{ marginTop: '2rem', fontWeight: 700 }}>
              Mohammad Shakir Wafa<br />
              <span style={{ fontWeight: 500, color: 'var(--color-text-light)' }}>
                Founder &amp; Chairman, Wafa Educational and Charitable Trust
              </span>
            </p>

            <div style={{ marginTop: '3rem', textAlign: 'center' }}>
              <Link href="/donate" className="btn btn-primary" style={{ marginRight: '1rem' }}>
                Support Our Mission
              </Link>
              <Link href="/about" className="btn btn-outline">
                About the Trust
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
