'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  { slug: 'water-well-for-needy-place', title: 'Water Well for Needy Place' },
  { slug: 'masjid-madrasa-build', title: 'Masjid / Madrasa Build' },
  { slug: 'wazu-khana-build', title: 'Wazu Khana Build' },
  { slug: 'quran-e-kareem-distribution-2', title: 'Quran e Kareem Distribution' },
  { slug: 'blankets-winter-distribution', title: 'Blankets Winter Distribution' },
  { slug: 'tricycle-distribution', title: 'Tricycle Distribution' },
  { slug: 'wheelchair-distribution', title: 'Wheelchair Distribution' },
  { slug: 'free-food-distribution', title: 'Free Food Distribution' },
  { slug: 'free-distribution-of-ration-kit', title: 'Free Distribution of Ration Kit' },
  { slug: 'widows-help', title: 'Widows Help' },
  { slug: 'poor-family-help', title: 'Poor Family Help' },
  { slug: 'poor-girl-marriage-help', title: 'Poor Girl Marriage Help' },
  { slug: 'house-build', title: 'House Build' },
  { slug: 'maktab-deeniyat', title: 'Maktab Deeniyat' },
  { slug: 'sewing-machine-distribution', title: 'Sewing Machine Distribution' },
  { slug: 'distribution-of-benches-and-mats', title: 'Distribution of Benches and Mats' },
  { slug: 'madrasa-anwar-e-hira-lilbanat', title: 'Madrasa Anwar e Hira Lilbanat' },
  { slug: 'wafa-international-school', title: 'Wafa International School' },
];

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Topbar */}
      <div className="topbar">
        <div className="container">
          <div className="topbar-left">
            <a href="mailto:wafatrustindia@gmail.com">
              <span>✉</span> wafatrustindia@gmail.com
            </a>
            <a href="tel:+919813893744">
              <span>📞</span> +91 98138 93744
            </a>
          </div>
          <div className="topbar-right topbar-social">
            <a href="https://www.facebook.com/wafatrust" target="_blank" rel="noopener noreferrer" aria-label="Facebook">f</a>
            <a href="https://www.instagram.com/wafa_trust/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">ig</a>
            <a href="https://www.youtube.com/@wafatrust" target="_blank" rel="noopener noreferrer" aria-label="YouTube">▶</a>
            <a href="https://wa.me/919813893744" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">wa</a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`} id="main-header">
        <div className="container">
          <Link href="/" className="header-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Image src="/assets/logo.jpeg" alt="Wafa Trust Logo" width={55} height={55} style={{ borderRadius: '8px' }} />
            <div className="header-logo-text">
              <strong style={{ fontSize: '1.2rem', color: 'var(--color-primary)' }}>Wafa Trust</strong>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-text-light)' }}>Educational &amp; Charitable</span>
            </div>
          </Link>

          <nav className="nav">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/about" className="nav-link">About</Link>

            <div
              className={`nav-item ${servicesOpen ? 'open' : ''}`}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="nav-link"
                onClick={() => setServicesOpen(!servicesOpen)}
                style={{ cursor: 'pointer' }}
              >
                Services ▾
              </button>
              <div className="nav-dropdown">
                {services.map((s) => (
                  <Link key={s.slug} href={`/services/${s.slug}`} onClick={() => setServicesOpen(false)}>
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/gallery" className="nav-link">Gallery</Link>
            <Link href="/blog" className="nav-link">Blog</Link>
            <Link href="/certificate" className="nav-link">Certificate</Link>
            <Link href="/contact" className="nav-link">Contact</Link>

            <div className="nav-donate">
              <Link href="/donate" className="btn btn-primary btn-sm" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                Donate Now
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
