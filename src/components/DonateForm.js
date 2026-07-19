'use client';

import { useState } from 'react';
import Script from 'next/script';


export default function DonateForm() {
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const predefinedAmounts = [500, 1000, 2000, 5000, 10000];

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
        description: 'Donation to Wafa Trust',
        image: '/assets/logo.png', // Assuming this is available
        order_id: order.id,
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
