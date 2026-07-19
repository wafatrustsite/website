import Link from 'next/link';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/mission', label: 'Our Mission' },
  { href: '/vision', label: 'Our Vision' },
  { href: '/gallery', label: 'Photo Gallery' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/donate', label: 'Donate' },
];

const serviceLinks = [
  { href: '/services/water-well-for-needy-place', label: 'Water Well' },
  { href: '/services/masjid-madrasa-build', label: 'Masjid / Madrasa Build' },
  { href: '/services/free-food-distribution', label: 'Free Food Distribution' },
  { href: '/services/medical-aid', label: 'Medical Aid' },
  { href: '/services/scholarship-for-higher-education', label: 'Scholarship for Higher Education' },
  { href: '/services/house-build', label: 'House Build' },
  { href: '/services/poor-family-help', label: 'Poor Family Help' },
  { href: '/services/sewing-machine-distribution', label: 'Sewing Machine Distribution' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* About Column */}
          <div className="footer-about">
            <h4>Wafa Trust</h4>
            <p>
              Wafa Educational And Charitable Trust is a national charitable institution dedicated to
              empowering, educating, and uplifting communities across India through sustainable and
              compassionate initiatives.
            </p>
            <div className="footer-social">
              <a href="https://www.facebook.com/wafatrust" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/wafa_trust/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
              </a>
              <a href="https://www.youtube.com/@wafatrust" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.6 3.2H4.4A2.4 2.4 0 0 0 2 5.6v12.8a2.4 2.4 0 0 0 2.4 2.4h15.2a2.4 2.4 0 0 0 2.4-2.4V5.6a2.4 2.4 0 0 0-2.4-2.4zM10 15.5v-7l6 3.5-6 3.5z"/></svg>
              </a>
              <a href="https://wa.me/919373208864" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.52 5.855L0 24l6.335-1.652A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.82a9.782 9.782 0 0 1-5.27-1.534l-.378-.224-3.917 1.022 1.046-3.815-.247-.394A9.78 9.78 0 0 1 2.18 12 9.82 9.82 0 0 1 12 2.18 9.82 9.82 0 0 1 21.82 12 9.82 9.82 0 0 1 12 21.82z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>→ {link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4>Our Services</h4>
            <ul className="footer-links">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>→ {link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4>Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <span className="icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </span>
                <div>
                  <p>Near Zubaida Hospital, Mohammadi Chowk, Akola, Maharashtra 444001, India</p>
                </div>
              </li>
              <li>
                <span className="icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </span>
                <div>
                  <p><a href="tel:+919373208864" style={{ color: 'inherit' }}>+91 93732 08864</a></p>
                </div>
              </li>
              <li>
                <span className="icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </span>
                <div>
                  <p><a href="mailto:wafatrust011@gmail.com" style={{ color: 'inherit' }}>wafatrust011@gmail.com</a></p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Wafa Educational And Charitable Trust. All Rights Reserved.</p>
          <p style={{ marginTop: '0.5rem' }}>
            <Link href="/privacy-policy" style={{ color: 'inherit', marginRight: '1rem' }}>Privacy Policy</Link>
            <Link href="/terms" style={{ color: 'inherit', marginRight: '1rem' }}>Terms & Conditions</Link>
            <Link href="/refund-policy" style={{ color: 'inherit' }}>Refund Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
