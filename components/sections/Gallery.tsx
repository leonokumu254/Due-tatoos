import React from 'react';
import { Translation, GalleryItem } from '../../types';
import { GALLERY_IMAGES } from '../../constants';
import './Gallery.css';

interface GalleryProps {
  t: Translation['gallery'];
}

export const Gallery: React.FC<GalleryProps> = ({ t }) => {
  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="section-title-wrapper">
          <h2 className="section-title">{t.title}</h2>
          <div className="title-separator"></div>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className="gallery-grid">
          {GALLERY_IMAGES.map((item) => (
            <div 
              key={item.id} 
              className="gallery-item"
            >
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="gallery-img"
              />
              <div className="gallery-overlay">
                <p className="gallery-category">
                  Tattoo Art
                </p>
                <h3 className="gallery-item-title">
                  {item.title}
                </h3>
              </div>
              <div className="gallery-indicator"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
