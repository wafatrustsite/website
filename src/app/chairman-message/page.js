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
            <p style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--color-primary)' }}>
              Assalamu Alaikum and warm greetings,
            </p>
            <p>
              It is my honour to welcome you to Wafa Educational And Charitable Trust. What began as a
              simple intention — to stand beside the poorest families in our region — has, by the grace
              of Allah and the generosity of our donors, grown into a trust that reaches thousands of
              lives across Nuh, Haryana and beyond.
            </p>
            <p>
              We believe every human being deserves clean water, a meal, an education, healthcare and
              the dignity of standing on their own feet. Whether it is a hand pump for a village, a
              ration kit for a struggling household, a wheelchair for the disabled, or a scholarship for
              a bright student, our promise remains the same: your trust is an <em>amanah</em>, and every
              contribution reaches those who need it most — directly, transparently and with a receipt.
            </p>
            <p>
              To our donors and well-wishers around the world: thank you. You are the reason a mother
              can feed her children, a widow can earn with dignity, and a child can learn to read. May
              Allah accept your giving and multiply it for you.
            </p>
            <p style={{ marginTop: '2rem', fontWeight: 700 }}>
              — Chairman<br />
              <span style={{ fontWeight: 500, color: 'var(--color-text-light)' }}>
                Wafa Educational And Charitable Trust
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
