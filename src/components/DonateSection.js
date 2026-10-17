'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const CAUSES = [
  { id: 'general', title: 'General Charity & Sadqah (Where Needed Most)' },
  { id: 'water-well-for-needy-place', title: 'Borewell & Water Well for Needy Places' },
  { id: 'hand-pump-water-for-life', title: 'Water Hand Pump - Water for Life' },
  { id: 'wazu-khana-build', title: 'Wazu Khana & Masjid Ablution Facilities' },
  { id: 'free-distribution-of-ration-kit', title: 'Monthly Food Ration Kit Distribution' },
  { id: 'free-food-distribution', title: 'Madrasa & Orphan Student Meal Support' },
  { id: 'quran-e-kareem-distribution-2', title: 'Quran-e-Kareem & Islamic Books Distribution' },
  { id: 'sewing-machine-distribution', title: 'Sewing Machine for Women Empowerment' },
  { id: 'blankets-winter-distribution', title: 'Blankets & Winter Clothes Distribution' },
  { id: 'widows-help', title: 'Widows & Vulnerable Women Financial Aid' },
  { id: 'poor-family-help', title: 'Poor Family Help & Emergency Assistance' },
  { id: 'poor-girl-marriage-help', title: 'Poor Girl Marriage Support' },
  { id: 'house-build', title: 'Permanent Shelter & House Construction' },
  { id: 'maktab-deeniyat', title: 'Maktab Deeniyat & Rural Education' },
  { id: 'wheelchair-distribution', title: 'Wheelchair & Tricycle Distribution' },
];

export default function DonateSection() {
  const searchParams = useSearchParams();
  const initialCause = searchParams.get('cause') || 'general';

  const [selectedCause, setSelectedCause] = useState(initialCause);
  const [selectedAmount, setSelectedAmount] = useState('1000');
  const [customAmount, setCustomAmount] = useState('');
  const [copiedBank, setCopiedBank] = useState(false);
  const [copiedUpi, setCopiedUpi] = useState(false);

  useEffect(() => {
    const causeParam = searchParams.get('cause');
    if (causeParam && CAUSES.some((c) => c.id === causeParam)) {
      setSelectedCause(causeParam);
    }
  }, [searchParams]);

  const amount = customAmount || selectedAmount || '1000';
  const upiId = 'wafatrust011@oksbi';
  const cleanPhone = '919813893744';

  const activeCauseObj = CAUSES.find((c) => c.id === selectedCause) || CAUSES[0];

  const upiPayUrl = `upi://pay?pa=${upiId}&pn=Wafa%20Educational%20and%20Charitable%20Trust&am=${amount}&cu=INR&tn=${encodeURIComponent('Donation for ' + activeCauseObj.title)}`;

  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    `Hello Wafa Educational & Charitable Trust,\n\nI want to donate ₹${amount} for: *${activeCauseObj.title}*.\n\nPlease share transaction verification and 80G receipt details.`
  )}`;

  const copyBank = () => {
    const text = `Account Name: Wafa Educational and Charitable Trust\nAccount No: 2053101065464\nIFSC Code: CNRB0002053\nBank: Canara Bank\nBranch: Punhana`;
    navigator.clipboard.writeText(text);
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 2000);
  };

  const copyUpi = () => {
    navigator.clipboard.writeText(upiId);
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2000);
  };

  return (
    <section className="page-content">
      <div className="container">
        {/* Cause Selector Card */}
        <div
          style={{
            background: 'var(--color-bg-card)',
            padding: 'var(--space-xl)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-md)',
            border: '1px solid var(--color-border-light)',
            marginBottom: 'var(--space-2xl)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Dedicated Cause Contribution
              </span>
              <h2 style={{ fontSize: '1.4rem', margin: '4px 0 0' }}>
                You are Donating to: <span style={{ color: 'var(--color-primary)' }}>{activeCauseObj.title}</span>
              </h2>
            </div>
            <div style={{ minWidth: '260px' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '4px', color: 'var(--color-text-light)' }}>
                Change Selected Project / Cause:
              </label>
              <select
                value={selectedCause}
                onChange={(e) => setSelectedCause(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.6rem 0.85rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  outline: 'none',
                  backgroundColor: '#fff',
                  cursor: 'pointer',
                }}
              >
                {CAUSES.map((cause) => (
                  <option key={cause.id} value={cause.id}>
                    {cause.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Quick Amount Selector */}
          <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--color-border-light)' }}>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.75rem' }}>
              Choose Contribution Amount:
            </label>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
              {['500', '1000', '2500', '5000', '10000', '25000'].map((amt) => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => {
                    setSelectedAmount(amt);
                    setCustomAmount('');
                  }}
                  style={{
                    padding: '0.5rem 1.25rem',
                    borderRadius: 'var(--radius-full)',
                    border: '2px solid',
                    borderColor: selectedAmount === amt && !customAmount ? 'var(--color-primary)' : 'var(--color-border)',
                    backgroundColor: selectedAmount === amt && !customAmount ? 'var(--color-primary)' : '#fff',
                    color: selectedAmount === amt && !customAmount ? '#fff' : 'var(--color-text)',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  ₹{amt}
                </button>
              ))}

              <div style={{ display: 'flex', alignItems: 'center', position: 'relative', width: '180px' }}>
                <span style={{ position: 'absolute', left: '12px', fontWeight: 600, color: 'var(--color-text-light)' }}>₹</span>
                <input
                  type="number"
                  placeholder="Custom"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.5rem 0.75rem 0.5rem 1.85rem',
                    borderRadius: 'var(--radius-full)',
                    border: '2px solid var(--color-border)',
                    fontSize: '0.9rem',
                    outline: 'none',
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* 3 Donation Methods Cards */}
        <div className="donate-methods" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-xl)' }}>
          {/* Card 1: Instant UPI & QR */}
          <div className="donate-card" style={{ display: 'flex', flexDirection: 'column' }}>
            <span className="icon">📱</span>
            <h3>Instant UPI / QR Code</h3>
            <p>Scan with any UPI app to donate ₹{amount} instantly.</p>

            <div className="qr-container" style={{ textAlign: 'center', margin: '0.75rem 0' }}>
              <img
                src="/assets/wafa-qr.png"
                alt="Wafa Trust Official Google Pay QR Code"
                style={{ width: '100%', maxWidth: '210px', height: 'auto', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-light)', margin: '0 auto', display: 'block' }}
              />
              <span style={{ display: 'block', fontSize: '0.78rem', color: 'var(--color-text-muted)', marginTop: '8px' }}>
                Google Pay, PhonePe, Paytm, BHIM, Cred
              </span>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: '#f1f5f3',
                padding: '8px 14px',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.85rem',
                marginBottom: '0.5rem',
              }}
            >
              <span>UPI: <strong>{upiId}</strong></span>
              <button
                type="button"
                onClick={copyUpi}
                style={{
                  padding: '3px 10px',
                  background: '#fff',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--color-primary)',
                  cursor: 'pointer',
                }}
              >
                {copiedUpi ? 'Copied ✓' : 'Copy'}
              </button>
            </div>
            <div
              style={{
                background: '#f8faf9',
                border: '1px solid var(--color-border-light)',
                borderRadius: 'var(--radius-sm)',
                padding: '6px 12px',
                fontSize: '0.8rem',
                textAlign: 'center',
                marginBottom: '1rem',
                color: 'var(--color-text)',
              }}
            >
              Paytm / PhonePe / GPay: <strong>9813893744</strong>
            </div>

            <a
              href={upiPayUrl}
              className="btn btn-primary"
              style={{ width: '100%', marginTop: 'auto', justifyContent: 'center' }}
            >
              Pay ₹{amount} via UPI App
            </a>
          </div>

          {/* Card 2: Bank Transfer */}
          <div className="donate-card" style={{ display: 'flex', flexDirection: 'column' }}>
            <span className="icon">💳</span>
            <h3>Bank Transfer (NEFT/RTGS)</h3>
            <p>Transfer directly to our official trust bank account.</p>

            <div
              style={{
                background: '#fbfdfc',
                border: '1px solid var(--color-border-light)',
                borderRadius: 'var(--radius-md)',
                padding: '14px',
                fontSize: '0.88rem',
                margin: '1rem 0',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed var(--color-border-light)', paddingBottom: '6px' }}>
                <span style={{ color: 'var(--color-text-light)' }}>Account Name:</span>
                <strong style={{ textAlign: 'right', fontSize: '0.82rem' }}>Wafa Educational and Charitable Trust</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed var(--color-border-light)', paddingBottom: '6px' }}>
                <span style={{ color: 'var(--color-text-light)' }}>Account No:</span>
                <strong>2053101065464</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed var(--color-border-light)', paddingBottom: '6px' }}>
                <span style={{ color: 'var(--color-text-light)' }}>IFSC Code:</span>
                <strong>CNRB0002053</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed var(--color-border-light)', paddingBottom: '6px' }}>
                <span style={{ color: 'var(--color-text-light)' }}>Bank:</span>
                <strong>Canara Bank</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--color-text-light)' }}>Branch:</span>
                <strong>Punhana</strong>
              </div>
            </div>

            <button
              type="button"
              className="btn btn-outline"
              onClick={copyBank}
              style={{ width: '100%', marginTop: 'auto', justifyContent: 'center' }}
            >
              {copiedBank ? 'Bank Details Copied ✓' : 'Copy All Bank Details'}
            </button>
          </div>

          {/* Card 3: WhatsApp & Questions */}
          <div className="donate-card" style={{ display: 'flex', flexDirection: 'column' }}>
            <span className="icon">💬</span>
            <h3>WhatsApp Confirmation</h3>
            <p>Sponsor a specific project directly with our administrative team.</p>

            <div
              style={{
                background: '#f0fdf4',
                border: '1px solid #bbf7d0',
                borderRadius: 'var(--radius-md)',
                padding: '14px',
                fontSize: '0.85rem',
                margin: '1rem 0',
                color: '#166534',
              }}
            >
              <p style={{ margin: 0 }}>
                ✅ Instant acknowledgement<br />
                ✅ 80G Tax Exemption Receipt<br />
                ✅ Video &amp; Photo proof of your project
              </p>
            </div>

            <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Donate via WhatsApp
              </a>
              <Link href="/contact" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
                Contact Administrative Office
              </Link>
            </div>
          </div>
        </div>

        {/* 80G Tax Exemption Details */}
        <div
          style={{
            textAlign: 'center',
            marginTop: 'var(--space-3xl)',
            background: 'var(--color-bg-card)',
            padding: 'var(--space-xl)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--color-border-light)',
          }}
        >
          <h3 style={{ marginBottom: '8px' }}>80G Tax Exemption &amp; Trust Compliance</h3>
          <p style={{ color: 'var(--color-text-light)', maxWidth: '750px', margin: '0 auto 12px' }}>
            All donations made to <strong>Wafa Educational And Charitable Trust</strong> (Registered Charity No. 918)
            are eligible for 50% tax exemption under Section 80G of the Income Tax Act, 1961.
            Please send your PAN card and donation screenshot on WhatsApp to receive your official 80G receipt.
          </p>
          <div style={{ display: 'inline-flex', gap: '1.5rem', fontSize: '0.9rem', color: 'var(--color-text)', fontWeight: 600 }}>
            <span>📞 Helpline: +91 98138 93744</span>
            <span>✉️ Email: wafatrustindia@gmail.com</span>
            <span>📍 Punhana, Nuh, Haryana</span>
          </div>
        </div>
      </div>
    </section>
  );
}
