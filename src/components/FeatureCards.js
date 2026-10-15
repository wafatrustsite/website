'use client';

import Link from 'next/link';

const features = [
  {
    title: 'Mission',
    desc: 'Our mission is to nurture young minds, promote Islamic ethics, provide vocational training, support the underprivileged.',
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
        <circle cx="12" cy="8" r="2.5" fill="#ffffff" stroke="none" />
      </svg>
    ),
    link: '/about',
  },
  {
    title: 'Events',
    desc: 'Join us in various events to make a positive impact. From educational initiatives to community support, your participation matters.',
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    link: '/events',
  },
  {
    title: 'Support',
    desc: 'Your generous contributions help us educate, train, support, orphans, and more. Together, we can make a difference.',
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        <path d="M21 15v2a3 3 0 0 1-3 3h-4" />
      </svg>
    ),
    link: '/donate',
  },
  {
    title: 'Volunteer',
    desc: 'Become a part of our dedicated volunteer team. Contribute your time and skills to uplift the less fortunate in our society.',
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <line x1="20" y1="8" x2="20" y2="14" />
        <line x1="23" y1="11" x2="17" y2="11" />
      </svg>
    ),
    link: '/contact',
  },
];

export default function FeatureCards() {
  return (
    <section className="feature-cards-section">
      <div className="container">
        <div className="feature-cards-grid">
          {features.map((feature, i) => (
            <div className="feature-blue-card" key={i}>
              <div className="feature-gold-badge">
                {feature.icon}
              </div>
              <h3 className="feature-blue-title">{feature.title}</h3>
              <p className="feature-blue-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
