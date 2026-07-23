import Razorpay from 'razorpay';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();
    const amount = Number(body?.amount);

    // Validate: finite integer rupees within a sane range (₹1 – ₹10,00,000)
    if (!Number.isFinite(amount) || amount < 1 || amount > 1000000) {
      return NextResponse.json(
        { error: 'Invalid amount' },
        { status: 400 }
      );
    }
    const rupees = Math.round(amount);

    if (!process.env.Razorpay_Key_ID || !process.env.Razorpay_Key_Secret) {
      console.error('Razorpay keys are not configured');
      return NextResponse.json(
        { error: 'Payment is temporarily unavailable' },
        { status: 503 }
      );
    }

    const razorpay = new Razorpay({
      key_id: process.env.Razorpay_Key_ID,
      key_secret: process.env.Razorpay_Key_Secret,
    });

    const options = {
      amount: rupees * 100, // amount in smallest currency unit (paise)
      currency: 'INR',
      receipt: `receipt_order_${Math.floor(Math.random() * 1000000)}`,
    };

    const order = await razorpay.orders.create(options);
    return NextResponse.json(order);
  } catch (error) {
    console.error('Razorpay Error:', error);
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    );
  }
}
