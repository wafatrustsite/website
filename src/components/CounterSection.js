'use client';

import { useState, useEffect, useRef } from 'react';

export default function CounterSection({ counters }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="counters-white" ref={sectionRef}>
      <div className="container">
        <div className="counters-white-grid">
          {/* 1. Borewell / Water Well */}
          <div className="counter-white-item">
            <div className="counter-white-icon" aria-label="Borewell / Water Well">
              <svg width="48" height="48" viewBox="0 0 64 64" fill="#111827">
                {/* Pitched Roof */}
                <path d="M6 25 L32 8 L58 25 L54 28 L50 25 L50 26 L14 26 L14 25 L10 28 Z" />
                {/* Support Beams */}
                <rect x="15" y="26" width="4" height="22" />
                <rect x="45" y="26" width="4" height="22" />
                {/* Crossbeam and Pulley */}
                <rect x="15" y="28" width="34" height="3" />
                <circle cx="32" cy="33" r="3.5" fill="none" stroke="#111827" strokeWidth="2.5" />
                <line x1="32" y1="31" x2="32" y2="44" stroke="#111827" strokeWidth="2" />
                {/* Bucket */}
                <path d="M28 41 L36 41 L34.5 48 L29.5 48 Z" />
                {/* Well Base Wall */}
                <rect x="10" y="46" width="44" height="13" rx="1.5" />
                {/* Brick Lines */}
                <line x1="10" y1="52.5" x2="54" y2="52.5" stroke="#ffffff" strokeWidth="1.5" />
                <line x1="24" y1="46" x2="24" y2="52.5" stroke="#ffffff" strokeWidth="1.5" />
                <line x1="40" y1="46" x2="40" y2="52.5" stroke="#ffffff" strokeWidth="1.5" />
                <line x1="18" y1="52.5" x2="18" y2="59" stroke="#ffffff" strokeWidth="1.5" />
                <line x1="32" y1="52.5" x2="32" y2="59" stroke="#ffffff" strokeWidth="1.5" />
                <line x1="46" y1="52.5" x2="46" y2="59" stroke="#ffffff" strokeWidth="1.5" />
                {/* Ground Line */}
                <rect x="4" y="59" width="56" height="3" rx="1" />
              </svg>
            </div>
            <div className="counter-white-number">
              {counters?.borewell || '1,160'} +
            </div>
            <div className="counter-white-label">
              Borewell/<br />Water well
            </div>
          </div>

          {/* 2. Handpump */}
          <div className="counter-white-item">
            <div className="counter-white-icon" aria-label="Handpump">
              <svg width="48" height="48" viewBox="0 0 64 64" fill="#111827">
                {/* Base Plate */}
                <rect x="14" y="58" width="36" height="4" rx="1" />
                <rect x="22" y="54" width="20" height="4" />
                {/* Main Pump Cylinder Body */}
                <rect x="26" y="24" width="12" height="30" rx="1" />
                {/* Top Cap */}
                <rect x="23" y="20" width="18" height="4" rx="1" />
                {/* Piston Rod & Joint */}
                <rect x="29" y="11" width="6" height="9" />
                <circle cx="32" cy="11" r="3.5" />
                {/* Water Spout (Left) */}
                <path d="M26 33 L15 33 L13 40 L18 40 L20 37 L26 37 Z" />
                {/* Water Drop */}
                <path d="M15 45 C15 45 13 48 13 49.5 A2 2 0 0 0 17 49.5 C17 48 15 45 15 45 Z" />
                {/* Handpump Lever Handle (Right) */}
                <line x1="32" y1="20" x2="55" y2="38" stroke="#111827" strokeWidth="4.5" strokeLinecap="round" />
                <circle cx="56" cy="39" r="4.5" />
              </svg>
            </div>
            <div className="counter-white-number">
              {counters?.handpump || '823'} +
            </div>
            <div className="counter-white-label">
              Handpump
            </div>
          </div>

          {/* 3. Masjid */}
          <div className="counter-white-item">
            <div className="counter-white-icon" aria-label="Masjid">
              <svg width="48" height="48" viewBox="0 0 64 64" fill="#111827">
                {/* Ground */}
                <rect x="6" y="58" width="52" height="3" rx="1" />
                {/* Main Hall */}
                <rect x="21" y="34" width="22" height="24" />
                {/* Central Arched Doorway */}
                <path d="M27 58 V44 C27 40 37 40 37 44 V58 Z" fill="#ffffff" />
                {/* Main Onion Dome */}
                <path d="M21 34 C21 19 32 15 32 15 C32 15 43 19 43 34 Z" />
                {/* Dome Finial & Crescent */}
                <line x1="32" y1="10" x2="32" y2="15" stroke="#111827" strokeWidth="2" />
                <circle cx="32" cy="8.5" r="3" />
                <circle cx="33.2" cy="7.8" r="2.4" fill="#ffffff" />
                {/* Left Minaret */}
                <rect x="11" y="24" width="6" height="34" />
                <rect x="9" y="22" width="10" height="2" />
                <path d="M11 22 C11 15 14 13 14 13 C14 13 17 15 17 22 Z" />
                <circle cx="14" cy="10.5" r="1.5" />
                {/* Right Minaret */}
                <rect x="47" y="24" width="6" height="34" />
                <rect x="45" y="22" width="10" height="2" />
                <path d="M47 22 C47 15 50 13 50 13 C50 13 53 15 53 22 Z" />
                <circle cx="50" cy="10.5" r="1.5" />
              </svg>
            </div>
            <div className="counter-white-number">
              {counters?.masjid || '181'} +
            </div>
            <div className="counter-white-label">
              Masjid
            </div>
          </div>

          {/* 4. Foods */}
          <div className="counter-white-item">
            <div className="counter-white-icon" aria-label="Foods">
              <svg width="48" height="48" viewBox="0 0 64 64" fill="#111827">
                {/* Food Bowl Body */}
                <path d="M12 32 C14 50 24 54 32 54 C40 54 50 50 52 32 Z" />
                {/* Bowl Lip/Rim */}
                <rect x="9" y="29" width="46" height="4" rx="2" />
                {/* Bowl Foot Base */}
                <rect x="22" y="54" width="20" height="4" rx="1" />
                {/* Rice / Food Mound */}
                <path d="M14 29 C16 19 23 17 32 17 C41 17 48 19 50 29 Z" />
                {/* Rising Steam Lines */}
                <path d="M23 13 C21 9 24 7 23 3" fill="none" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M32 13 C30 9 34 6 32 3" fill="none" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M41 13 C39 9 42 7 41 3" fill="none" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
            <div className="counter-white-number">
              {counters?.foods || '15,885'} +
            </div>
            <div className="counter-white-label">
              Foods
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
