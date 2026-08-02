'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function GalleryGrid({ images }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openLightbox = (image) => {
    setCurrentImage(image);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  if (!images || images.length === 0) return null;

  return (
    <>
      <div className="gallery-grid">
        {images.map((imgStr, index) => {
          const src = typeof imgStr === 'string' ? `/${imgStr}` : (imgStr.image ? `/${imgStr.image}` : '');
          if (!src) return null;
          
          return (
            <div key={index} className="gallery-item" onClick={() => openLightbox(src)}>
              <Image src={src} alt={`Wafa Trust charity work — photo ${index + 1}`} fill sizes="(max-width: 768px) 50vw, 25vw" style={{ objectFit: 'cover' }} />
              <div className="gallery-item-overlay">
                <span>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox */}
      <div className={`lightbox ${lightboxOpen ? 'open' : ''}`} onClick={closeLightbox}>
        <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
          &times;
        </button>
        {currentImage && (
          <img src={currentImage} alt="Fullscreen View" onClick={(e) => e.stopPropagation()} />
        )}
      </div>
    </>
  );
}
