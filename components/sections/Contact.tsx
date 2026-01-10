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
           <div className="map-container">
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d269.12903786085326!2d2.375102111933269!3d48.864905099999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66dfb251857a3%3A0xdba5ea61d5e9fc63!2zQUREVUxUIFRyw6lsYXrDqQ!5e1!3m2!1sen!2ske!4v1768027732970!5m2!1sen!2ske" 
    width="100%" 
    height="450" 
    style={{ border: 0 }} 
    allowFullScreen 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
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
