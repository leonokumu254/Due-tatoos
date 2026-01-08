import React, { useState } from 'react';
import { Translation } from '../../types'; 
import { GALLERY_IMAGES } from '../../constants';
import './Gallery.css';

interface GalleryProps {
  t: Translation['gallery'];
}

export const Gallery: React.FC<GalleryProps> = ({ t }) => {
  // 1. Change state to track the INDEX (number), not the URL
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  // Helper to open specific index
  const openModal = (index: number) => {
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setCurrentIndex(null);
  };

  // 2. Logic for Next Image
  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent click from bubbling up
    if (currentIndex !== null) {
      // If at the end, go back to 0 (loop), otherwise add 1
      const nextIndex = currentIndex === GALLERY_IMAGES.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(nextIndex);
    }
  };

  // 3. Logic for Previous Image
  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex !== null) {
      // If at 0, go to last image (loop), otherwise subtract 1
      const prevIndex = currentIndex === 0 ? GALLERY_IMAGES.length - 1 : currentIndex - 1;
      setCurrentIndex(prevIndex);
    }
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        {/* ... Title section remains the same ... */}
        <div className="section-title-wrapper">
          <h2 className="section-title">{t.title}</h2>
          <div className="title-separator"></div>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className="gallery-grid">
          {/* 4. Map now uses the index (idx) */}
          {GALLERY_IMAGES.map((item, idx) => (
            <div 
              key={item.id} 
              className="gallery-item"
              // Pass the index to the open function
              onClick={() => openModal(idx)}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="gallery-img"
              />
              <div className="gallery-overlay">
                <p className="gallery-category">Tattoo Art</p>
                <h3 className="gallery-item-title">{item.title}</h3>
              </div>
              <div className="gallery-indicator"></div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Modal Logic */}
      {currentIndex !== null && (
        <div className="full-img" style={{ display: 'flex' }}>
          
          <img 
            src={GALLERY_IMAGES[currentIndex].imageUrl} 
            id="fullImg" 
            alt="enlarged" 
          />
          
        
          <span className="close-btn" onClick={closeModal}>X</span>

          {/* Navigation Buttons */}
          <button className="nav-btn prev-btn" onClick={showPrev}>&#10094;</button>
          <button className="nav-btn next-btn" onClick={showNext}>&#10095;</button>
        </div>
      )}
    </section>
  );
};