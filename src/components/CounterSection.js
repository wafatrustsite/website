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
    <section className="counters" ref={sectionRef}>
      <div className="container">
        <div className="counters-grid">
          <div className="counter-item">
            <span className="counter-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
            </span>
            <span className="counter-number" style={{ animation: isVisible ? 'countUp 1s ease forwards' : 'none', opacity: isVisible ? 1 : 0 }}>
              {counters.borewell}+
            </span>
            <span className="counter-label">Borewell / Waterwell</span>
          </div>
          <div className="counter-item">
            <span className="counter-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </span>
            <span className="counter-number" style={{ animation: isVisible ? 'countUp 1s 0.2s ease forwards' : 'none', opacity: isVisible ? 1 : 0 }}>
              {counters.handpump}+
            </span>
            <span className="counter-label">Handpump</span>
          </div>
          <div className="counter-item">
            <span className="counter-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 12h3v8h14v-8h3L12 2z"/></svg>
            </span>
            <span className="counter-number" style={{ animation: isVisible ? 'countUp 1s 0.4s ease forwards' : 'none', opacity: isVisible ? 1 : 0 }}>
              {counters.masjid}+
            </span>
            <span className="counter-label">Masjid</span>
          </div>
          <div className="counter-item">
            <span className="counter-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </span>
            <span className="counter-number" style={{ animation: isVisible ? 'countUp 1s 0.6s ease forwards' : 'none', opacity: isVisible ? 1 : 0 }}>
              {counters.foods}+
            </span>
            <span className="counter-label">Foods</span>
          </div>
        </div>
      </div>
    </section>
  );
}
