'use client';

import { useState } from 'react';
import Link from 'next/link';

export const PROJECTS = [
  {
    id: 'water-well-for-needy-place',
    title: 'Borewell & Water Well for Needy Places',
    category: 'Clean Water',
    categoryColor: '#0099d9',
    image: '/assets/project-water-well.jpg',
    description: 'Constructing community borewells and water facilities providing clean, sustainable drinking water to drought-affected villages.',
    serviceSlug: 'water-well-for-needy-place',
  },
  {
    id: 'hand-pump-water-for-life',
    title: 'Water Hand Pump - Water for Life',
    category: 'Water for Life',
    categoryColor: '#0284c7',
    image: '/assets/project-hand-pump.jpg',
    description: 'Installing deep hand pumps directly in front of underserved rural communities to alleviate daily struggles for water.',
    serviceSlug: 'water-well-for-needy-place',
  },
  {
    id: 'wazu-khana-build',
    title: 'Wazu Khana & Masjid Ablution Stations',
    category: 'Sanitation & Faith',
    categoryColor: '#10b981',
    image: '/assets/project-wazu-khana.jpg',
    description: 'Building clean, tiled wazu khana facilities with multiple taps and water supply for worshipers in remote masjids.',
    serviceSlug: 'wazu-khana-build',
  },
  {
    id: 'free-distribution-of-ration-kit',
    title: 'Monthly Food Ration Kit Distribution',
    category: 'Hunger Relief',
    categoryColor: '#f7941d',
    image: '/assets/project-ration-kit.jpg',
    description: 'Supplying comprehensive food kits (wheat, rice, pulses, oil, spices) to impoverished families, widows, and laborers.',
    serviceSlug: 'free-distribution-of-ration-kit',
  },
  {
    id: 'free-food-distribution',
    title: 'Madrasa & Orphan Student Meal Support',
    category: 'Food & Student Care',
    categoryColor: '#ea580c',
    image: '/assets/project-food-aid.jpg',
    description: 'Providing daily wholesome, nutritious meals for residential madrasa students, orphan children, and destitute youth.',
    serviceSlug: 'free-food-distribution',
  },
  {
    id: 'quran-e-kareem-distribution-2',
    title: 'Holy Quran-e-Kareem Distribution',
    category: 'Religious Education',
    categoryColor: '#8b5cf6',
    image: '/assets/project-quran-dist.jpg',
    description: 'Printing and distributing authentic copies of Quran-e-Kareem and learning kits to madrasas and rural students.',
    serviceSlug: 'quran-e-kareem-distribution-2',
  },
  {
    id: 'water-tanker-relief',
    title: 'Emergency Clean Water Tanker Relief',
    category: 'Emergency Aid',
    categoryColor: '#0ea5e9',
    image: '/assets/project-water-tanker.jpg',
    description: 'Deploying dedicated water tankers delivering hundreds of liters of drinking water directly to villages facing water shortage.',
    serviceSlug: 'water-well-for-needy-place',
  },
  {
    id: 'house-build',
    title: 'Permanent Shelter & House Construction',
    category: 'Shelter & Dignity',
    categoryColor: '#059669',
    image: '/assets/project-house-build.jpg',
    description: 'Building strong pucca homes with sanitation for destitute families living in dilapidated huts or without roof.',
    serviceSlug: 'house-build',
  },
];

export default function ProjectShowcase() {
  const [activeProject, setActiveProject] = useState(null);
  const [selectedAmount, setSelectedAmount] = useState('1000');
  const [customAmount, setCustomAmount] = useState('');
  const [copied, setCopied] = useState(false);

  const openDonateModal = (project) => {
    setActiveProject(project);
    setCopied(false);
  };

  const closeDonateModal = () => {
    setActiveProject(null);
  };

  const amount = customAmount || selectedAmount || '1000';
  const upiId = 'wafatrust011@oksbi';
  const phone = '+919813893744';
  const cleanPhone = '919813893744';

  const upiPayUrl = activeProject
    ? `upi://pay?pa=${upiId}&pn=Wafa%20Educational%20and%20Charitable%20Trust&am=${amount}&cu=INR&tn=${encodeURIComponent('Donation for ' + activeProject.title)}`
    : `upi://pay?pa=${upiId}&pn=Wafa%20Educational%20and%20Charitable%20Trust&am=${amount}&cu=INR&tn=Donation`;

  const whatsappDonateUrl = activeProject
    ? `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
        `Hello Wafa Educational & Charitable Trust,\n\nI want to donate ₹${amount} for: *${activeProject.title}*.\n\nPlease share your payment verification details.`
      )}`
    : `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
        `Hello Wafa Trust, I want to make a donation of ₹${amount}. Please share payment details.`
      )}`;

  const copyUpi = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section-alt" id="our-projects">
      <div className="container">
        <div className="section-header animate-fade-in-up">
          <span className="subtitle">Verified Impact on Ground</span>
          <h2>Our Completed &amp; Ongoing Projects</h2>
          <p>
            Real on-ground initiatives empowering communities across India. Support any specific project below 
            with a direct, transparent donation.
          </p>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <div key={project.id} className="project-card animate-fade-in">
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} loading="lazy" />
                <span
                  className="project-badge"
                  style={{ backgroundColor: project.categoryColor }}
                >
                  {project.category}
                </span>
                <div className="project-image-overlay">
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => openDonateModal(project)}
                    style={{ gap: '6px' }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                    Donate for this Cause
                  </button>
                </div>
              </div>

              <div className="project-body">
                <h3 className="project-title">
                  <Link href={`/services/${project.serviceSlug}`}>
                    {project.title}
                  </Link>
                </h3>
                <p className="project-desc">{project.description}</p>
              </div>

              <div className="project-footer">
                <button
                  type="button"
                  className="btn btn-primary project-donate-btn"
                  onClick={() => openDonateModal(project)}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  Donate Now
                </button>
                <Link
                  href={`/services/${project.serviceSlug}`}
                  className="project-details-link"
                >
                  Details <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 'var(--space-3xl)' }}>
          <Link href="/donate" className="btn btn-outline btn-lg" style={{ marginRight: '1rem' }}>
            View All Donation Options
          </Link>
          <Link href="/gallery" className="btn btn-primary btn-lg">
            View Full Photo Gallery
          </Link>
        </div>
      </div>

      {/* Quick Donate Modal */}
      {activeProject && (
        <div className="modal-backdrop" onClick={closeDonateModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeDonateModal} aria-label="Close modal">
              &times;
            </button>

            <div className="modal-header">
              <span className="modal-tag" style={{ backgroundColor: activeProject.categoryColor }}>
                {activeProject.category}
              </span>
              <h2>Donate for {activeProject.title}</h2>
              <p>Your contribution directly supports this project on the ground.</p>
            </div>

            <div className="modal-body">
              {/* Amount Selector */}
              <div className="amount-selection">
                <label>Select Donation Amount (INR):</label>
                <div className="amount-pills">
                  {['500', '1000', '2500', '5000', '10000'].map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      className={`amount-pill ${selectedAmount === amt && !customAmount ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedAmount(amt);
                        setCustomAmount('');
                      }}
                    >
                      ₹{amt}
                    </button>
                  ))}
                </div>
                <div className="custom-amount-wrapper">
                  <span>₹</span>
                  <input
                    type="number"
                    placeholder="Enter custom amount"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                  />
                </div>
              </div>

              {/* Payment Methods Tabs / Cards */}
              <div className="payment-options-grid">
                {/* UPI QR & Pay */}
                <div className="payment-box">
                  <div className="payment-box-title">
                    <span className="icon">📱</span>
                    <strong>Scan &amp; Pay via UPI</strong>
                  </div>
                  <div className="qr-container">
                    <img
                      src="/assets/wafa-qr.png"
                      alt="Wafa Trust Official Google Pay QR Code"
                      style={{ width: '100%', maxWidth: '200px', height: 'auto', display: 'inline-block' }}
                    />
                    <span className="qr-caption">Scan with GPay, PhonePe, Paytm, or BHIM</span>
                  </div>
                  <div className="upi-id-box">
                    <span>UPI ID: <strong>{upiId}</strong></span>
                    <button type="button" className="btn-copy" onClick={copyUpi}>
                      {copied ? 'Copied ✓' : 'Copy'}
                    </button>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', marginTop: '0.35rem', textAlign: 'center' }}>
                    Paytm / PhonePe / GPay: <strong>9813893744</strong>
                  </div>
                  <a
                    href={upiPayUrl}
                    className="btn btn-primary"
                    style={{ width: '100%', marginTop: '0.75rem', justifyContent: 'center' }}
                  >
                    Open UPI App to Pay ₹{amount}
                  </a>
                </div>

                {/* Bank & WhatsApp */}
                <div className="payment-box">
                  <div className="payment-box-title">
                    <span className="icon">🏦</span>
                    <strong>Bank Account Transfer</strong>
                  </div>
                  <div className="bank-info-list">
                    <div className="bank-info-row">
                      <span>Account Name:</span>
                      <strong>Wafa Educational and Charitable Trust</strong>
                    </div>
                    <div className="bank-info-row">
                      <span>Account No:</span>
                      <strong>2053101065464</strong>
                    </div>
                    <div className="bank-info-row">
                      <span>IFSC Code:</span>
                      <strong>CNRB0002053</strong>
                    </div>
                    <div className="bank-info-row">
                      <span>Bank / Branch:</span>
                      <strong>Canara Bank (Punhana)</strong>
                    </div>
                  </div>

                  <div style={{ marginTop: '1.25rem' }}>
                    <div className="payment-box-title">
                      <span className="icon">💬</span>
                      <strong>Instant WhatsApp Support</strong>
                    </div>
                    <a
                      href={whatsappDonateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp"
                      style={{ width: '100%', marginTop: '0.5rem', justifyContent: 'center' }}
                    >
                      Donate &amp; Confirm on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="modal-footer-note">
                <p>
                  🛡️ All donations are eligible for tax exemption under <strong>Section 80G</strong>.
                  After payment, message us on WhatsApp with transaction screenshot to receive your 80G receipt.
                </p>
                <Link
                  href={`/donate?cause=${activeProject.serviceSlug}`}
                  className="link-full-page"
                  onClick={closeDonateModal}
                >
                  Go to Dedicated Donation Page →
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
