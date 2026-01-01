import React from 'react';
import { Translation } from '../../types';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import './Contact.css';

interface ContactProps {
  t: Translation['contact'];
}

export const Contact: React.FC<ContactProps> = ({ t }) => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-grid">
          
          {/* Contact Info */}
          <div className="contact-info-block">
            <div className="contact-header">
              <h2 className="contact-title-main">{t.title}</h2>
              <div className="contact-separator"></div>
              <p className="contact-subtitle">{t.subtitle}</p>
            </div>

            <div className="contact-details-list">
              <div className="contact-detail-item">
                <div className="contact-icon-box">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="contact-detail-label">Address</h4>
                  <p className="contact-detail-text">{t.address}</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon-box">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="contact-detail-label">Phone</h4>
                  <p className="contact-detail-text">{t.phone}</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon-box">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="contact-detail-label">Email</h4>
                  <p className="contact-detail-text">{t.email}</p>
                </div>
              </div>
            </div>

            <div className="contact-social-section">
              <h4 className="contact-social-title">Follow Us</h4>
              <div className="contact-social-icons">
                <a href="#" className="social-btn">
                  <Instagram size={20} />
                </a>
                <a href="#" className="social-btn">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="contact-map-wrapper">
            <div className="map-bg"></div>
            <div className="map-content">
              <div className="map-placeholder-box">
                <MapPin className="map-icon" size={32} />
                <span className="map-text">{t.mapPlaceholder}</span>
              </div>
            </div>
            
            {/* Visual corner accents */}
            <div className="corner-accent-tl"></div>
            <div className="corner-accent-br"></div>
          </div>

        </div>
      </div>
    </section>
  );
};
