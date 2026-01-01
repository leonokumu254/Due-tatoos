import React from 'react';
import { Translation } from '../../types';
import { ARTISTS } from '../../constants';
import { Instagram } from 'lucide-react';
import './Artists.css';

interface ArtistsProps {
  t: Translation['artists'];
}

export const Artists: React.FC<ArtistsProps> = ({ t }) => {
  return (
    <section id="artists" className="artists-section">
      <div className="container">
        <div className="section-title-wrapper">
          <h2 className="section-title">{t.title}</h2>
          <div className="title-separator"></div>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className="artists-grid">
          {ARTISTS.map((artist) => (
            <div key={artist.id} className="artist-card-wrapper">
              {/* Background Accent Element */}
              <div className="artist-card-bg"></div>
              
              {/* Card Container */}
              <div className="artist-card">
                {/* Image */}
                <div className="artist-img-wrapper">
                  <img 
                    src={artist.imageUrl} 
                    alt={artist.name} 
                    className="artist-img"
                  />
                </div>
                
                {/* Content */}
                <div className="artist-content">
                  <h3 className="artist-name">{artist.name}</h3>
                  <p className="artist-role">{artist.role}</p>
                  
                  <div className="artist-social">
                    <a href="#" className="social-link">
                      <Instagram size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
