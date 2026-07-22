import Link from 'next/link';
import { SITE_INFO } from '../../lib/data';
import DonateForm from '../../components/DonateForm';

export const metadata = {
  title: 'Donate Now',
  alternates: { canonical: '/donate' },
};

export default function DonatePage() {
  return (
    <>
      <div className="donate-hero">
        <div className="container">
          <span className="subtitle" style={{ color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>Make a Difference</span>
          <h1>Donate Now</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', opacity: 0.9 }}>
            Your contribution helps us provide education, healthcare, clean water, and 
            basic necessities to those who need it most. 
          </p>
        </div>
      </div>

      <section className="page-content" style={{ backgroundColor: 'var(--color-bg-alt)', padding: '4rem 0' }}>
        <div className="container">
          <div className="section-header">
            <h2>Secure Online Donation</h2>
            <p>Support our causes easily and securely using Razorpay.</p>
          </div>

          <DonateForm />

          <div style={{ maxWidth: '800px', margin: '3rem auto 0', textAlign: 'center' }}>
            <h3 style={{ marginBottom: '1rem' }}>Have Questions or Prefer Offline Donation?</h3>
            <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-light)' }}>
              If you'd like to sponsor a specific project (like a water well or masjid), or prefer to donate via direct bank transfer, please contact us directly.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <a href={`https://wa.me/${SITE_INFO.social.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                Message on WhatsApp
              </a>
              <Link href="/contact" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                Contact Us
              </Link>
            </div>
          </div>

          <div className="content-body" style={{ textAlign: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #ddd' }}>
            <h3>Tax Exemption Details</h3>
            <p style={{ color: 'var(--color-text-light)', maxWidth: '800px', margin: '0 auto' }}>
              All donations made to Wafa Educational And Charitable Trust are eligible for tax deduction under section 80G of the Income Tax Act, 1961. Please contact us with your PAN details to receive your 80G receipt.
            </p>
            <p style={{ color: 'var(--color-text)', fontWeight: 600, marginTop: '1rem' }}>
              80G Registration No. (URN): AAATW5134DF20221
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
