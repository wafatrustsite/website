'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Matches the original site's "Our Projects" menu order
const services = [
  { slug: 'water-well-for-needy-place', title: 'Water well for needy place' },
  { slug: 'masjid-madrasa-build', title: 'Masjid/ Madrasa build' },
  { slug: 'handpump-for-needy-place', title: 'Handpump For Needy Place' },
  { slug: 'supply-of-water-to-the-needy-through-tankers', title: 'Supply of water to the needy through tankers' },
  { slug: 'wazu-khana-build', title: 'Wazu khana Build' },
  { slug: 'quran-e-kareem-distribution-2', title: 'Quran e Kareem Distribution' },
  { slug: 'blankets-winter-distribution', title: 'Blankets Winter Distribution' },
  { slug: 'tricycle-distribution', title: 'Tricycle Distribution' },
  { slug: 'wheelchair-distribution', title: 'Wheelchair Distribution' },
  { slug: 'iftar-for-ramadan', title: 'Iftar For Ramadan' },
  { slug: 'free-food-distribution', title: 'Free Food distribution' },
  { slug: 'free-distribution-of-ration-kit', title: 'Free distribution of ration kit' },
  { slug: 'widows-help', title: 'Widows Help' },
  { slug: 'poor-family-help', title: 'Poor Family Help' },
  { slug: 'poor-girl-marriage-help', title: 'Poor Girl marriage help' },
  { slug: 'house-build', title: 'House Build' },
  { slug: 'maktab-deeniyat', title: 'Maktab Deeniyat' },
  { slug: 'scholarship-for-higher-education', title: 'Scholarship for Higher education' },
  { slug: 'ustad-hafiz-sponsor', title: 'Ustad & Hafiz Sponsor' },
  { slug: 'distribution-of-benches-and-mats', title: 'Distribution of benches and mats etc' },
  { slug: 'sewing-machine-distribution', title: 'Sewing Machine Distribution' },
  { slug: 'cash-gift', title: 'Cash Gift' },
  { slug: 'medical-aid', title: 'Medical Aid' },
  { slug: 'small-business-project', title: 'Small Business Project' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  return (
    <>
      {/* Topbar */}
      <div className="topbar">
        <div className="container">
          <div className="topbar-left">
            <a href="mailto:wafatrust011@gmail.com">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <span>wafatrust011@gmail.com</span>
            </a>
            <a href="tel:+919373208864">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>+91 93732 08864</span>
            </a>
          </div>
          <div className="topbar-right topbar-social">
            <a href="https://www.facebook.com/wafatrust.india?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://www.instagram.com/invites/contact/?igsh=tgm5bn6b38sp&utm_content=2jv0wdf" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="https://youtube.com/@wafatrustindia?si=7Asp5Qw0XsobrO4o" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.6 3.2H4.4A2.4 2.4 0 0 0 2 5.6v12.8a2.4 2.4 0 0 0 2.4 2.4h15.2a2.4 2.4 0 0 0 2.4-2.4V5.6a2.4 2.4 0 0 0-2.4-2.4zM10 15.5v-7l6 3.5-6 3.5z"/></svg>
            </a>
            <a href="https://wa.me/919373208864" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.52 5.855L0 24l6.335-1.652A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.82a9.782 9.782 0 0 1-5.27-1.534l-.378-.224-3.917 1.022 1.046-3.815-.247-.394A9.78 9.78 0 0 1 2.18 12 9.82 9.82 0 0 1 12 2.18 9.82 9.82 0 0 1 21.82 12 9.82 9.82 0 0 1 12 21.82z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`} id="main-header">
        <div className="container">
          <Link href="/" className="header-logo">
            <Image src="/assets/logo.jpeg" alt="Wafa Trust Logo" width={55} height={55} className="header-logo-img" style={{ borderRadius: '8px' }} />
            <div className="header-logo-text">
              <strong>Wafa Trust</strong>
              <span>Educational &amp; Charitable</span>
            </div>
          </Link>

          <nav className={`nav ${mobileOpen ? 'open' : ''}`}>
            <Link href="/" className="nav-link" onClick={() => setMobileOpen(false)}>Home</Link>
            <Link href="/about" className="nav-link" onClick={() => setMobileOpen(false)}>About</Link>

            <div className={`nav-item ${servicesOpen ? 'open' : ''}`}>
              <button
                className="nav-link"
                onClick={() => setServicesOpen(!servicesOpen)}
                onMouseEnter={() => { if (window.innerWidth > 768) setServicesOpen(true); }}
              >
                Services ▾
              </button>
              <div
                className="nav-dropdown"
                onMouseLeave={() => { if (window.innerWidth > 768) setServicesOpen(false); }}
              >
                {services.map((s) => (
                  <Link key={s.slug} href={`/services/${s.slug}`} onClick={() => { setMobileOpen(false); setServicesOpen(false); }}>
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/gallery" className="nav-link" onClick={() => setMobileOpen(false)}>Gallery</Link>
            <Link href="/blog" className="nav-link" onClick={() => setMobileOpen(false)}>Blog</Link>
            <Link href="/certificate" className="nav-link" onClick={() => setMobileOpen(false)}>Certificate</Link>
            <Link href="/contact" className="nav-link" onClick={() => setMobileOpen(false)}>Contact</Link>

            <div className="nav-donate">
              <Link href="/donate" className="btn btn-primary btn-sm" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }} onClick={() => setMobileOpen(false)}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                Donate Now
              </Link>
            </div>
          </nav>

          <button
            className={`mobile-toggle ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.4)',
            zIndex: 1040,
          }}
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}
