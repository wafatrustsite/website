'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const slides = [
  { 
    image: '/assets/hero.jpg', 
    subtitle: 'Wafa Educational And Charitable Trust',
    title: 'Be A Voice For Poor People',
    desc: 'We are here to support you every step of the way.'
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
        >
          <img src={slide.image} alt={slide.title} />
          
          {/* Premium Gradient Overlay */}
          <div className="hero-overlay-premium"></div>
          
          <div className="hero-content-wrapper">
            <div className="container">
              <div className={`hero-content ${index === currentSlide ? 'animate' : ''}`}>
                <span className="hero-subtitle">{slide.subtitle}</span>
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-desc">{slide.desc}</p>
                <div className="hero-buttons">
                  <Link href="/donate" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                    Donate Now
                  </Link>
                  <Link href="/about" className="btn btn-white btn-lg">
                    Discover More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

    </section>
  );
}
