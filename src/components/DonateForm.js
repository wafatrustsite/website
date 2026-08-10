'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';

// Donation categories the trust accepts. `id` matches the `?fund=` value used
// in the header menu links; `label` is what the donor and the trust both see.
const FUND_OPTIONS = [
  { id: 'general', label: 'General Donation' },
  { id: 'zakat', label: 'Zakat' },
  { id: 'sadaqah', label: 'Sadaqah' },
  { id: 'sadaqah-jariyah', label: 'Sadaqah e Jariyah' },
  { id: 'lillah', label: 'Lillah' },
  { id: 'fidya', label: 'Fidya' },
  { id: 'kaffarah', label: 'Kaffarah' },
  { id: 'fitrana', label: 'Fitrana' },
  { id: 'interest-money', label: 'Interest Money' },
];

function fundLabel(id) {
  return (FUND_OPTIONS.find((f) => f.id === id) || FUND_OPTIONS[0]).label;
}

export default function DonateForm() {
  const [amount, setAmount] = useState('');
  const [fund, setFund] = useState('general');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const predefinedAmounts = [500, 1000, 2000, 5000, 10000];

  // Preselect the fund from the URL (e.g. /donate?fund=zakat from the menu).
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const requested = params.get('fund');
    if (requested && FUND_OPTIONS.some((f) => f.id === requested)) {
      setFund(requested);
    }
  }, []);

  const handlePayment = async () => {
    if (!amount || isNaN(amount) || amount <= 0) {
      setError('Please enter a valid amount');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // 1. Create order on the server
      const res = await fetch('/api/razorpay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: Number(amount) }),
      });

      const order = await res.json();

      if (order.error) {
        throw new Error(order.error);
      }

      // 2. Initialize Razorpay
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_live_TFOItrCb1dqgIp', // Fallback to prompt key if env missing on client
        amount: order.amount,
        currency: order.currency,
        name: "Wafa Educational And Charitable Trust",
        description: `${fundLabel(fund)} — Donation to Wafa Trust`,
        image: '/assets/logo.png', // Assuming this is available
        order_id: order.id,
        notes: {
          fund: fundLabel(fund),
        },
        handler: function (response) {
          // You could optionally verify the signature here by calling another API route
          alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
          setAmount('');
        },
        prefill: {
          name: '',
          email: '',
          contact: '',
        },
        theme: {
          color: '#0099d9',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', function (response) {
        setError(`Payment Failed: ${response.error.description}`);
      });
      rzp.open();
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="donate-form-wrapper" style={{ maxWidth: '500px', margin: '0 auto', background: '#fff', padding: '2rem', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />

      <div style={{ marginBottom: '1.5rem' }}>
        <label htmlFor="donation-fund" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Donation Type</label>
        <select
          id="donation-fund"
          value={fund}
          onChange={(e) => setFund(e.target.value)}
          style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #ddd', fontSize: '1.05rem', background: '#fff' }}
        >
          {FUND_OPTIONS.map((f) => (
            <option key={f.id} value={f.id}>{f.label}</option>
          ))}
        </select>
      </div>

      <h3 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Choose an Amount</h3>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '1.5rem' }}>
        {predefinedAmounts.map((amt) => (
          <button 
            key={amt}
            onClick={() => setAmount(amt)}
            className={`btn ${amount == amt ? 'btn-primary' : 'btn-outline'}`}
            style={{ padding: '0.5rem', fontSize: '1rem' }}
          >
            ₹{amt}
          </button>
        ))}
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Or enter custom amount (₹)</label>
        <input 
          type="number" 
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #ddd', fontSize: '1.1rem' }}
        />
      </div>

      {error && <div style={{ color: 'red', marginBottom: '1rem', fontSize: '0.9rem' }}>{error}</div>}

      <button 
        onClick={handlePayment} 
        disabled={loading}
        className="btn btn-primary" 
        style={{ width: '100%', padding: '1rem', fontSize: '1.1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}
      >
        {loading ? 'Processing...' : 'Donate Securely'}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      </button>
      
      <p style={{ textAlign: 'center', fontSize: '0.85rem', color: '#666', marginTop: '1rem' }}>
        Secured by Razorpay. All transactions are encrypted.
      </p>
    </div>
  );
}
