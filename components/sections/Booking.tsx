import React, { useState } from 'react';
import { Translation } from '../../types';
import { Button } from '../ui/Button';
import { X, CheckCircle, CreditCard, Send } from 'lucide-react';
import './Booking.css';

interface BookingProps {
  t: Translation['booking'];
}

export const Booking: React.FC<BookingProps> = ({ t }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    description: '',
    date: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="booking" className="booking-section">
      {/* Decorative elements */}
      <div className="booking-blob-1"></div>
      <div className="booking-blob-2"></div>

      <div className="container booking-container-relative">
        <div className="booking-form-card">
          
          <div className="booking-card-accent"></div>

          <div className="section-title-wrapper">
            <h2 className="section-title">{t.title}</h2>
            <p className="section-subtitle">{t.subtitle}</p>
          </div>

          <form onSubmit={handleSubmit} className="booking-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">{t.form.name}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder={t.form.name}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone" className="form-label">{t.form.phone}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                  placeholder={t.form.phone}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="date" className="form-label">{t.form.date}</label>
              <input
                type="date"
                id="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description" className="form-label">{t.form.description}</label>
              <textarea
                id="description"
                name="description"
                required
                rows={4}
                value={formData.description}
                onChange={handleChange}
                className="form-input form-input-textarea"
                placeholder={t.form.description}
              />
            </div>

            <div className="form-submit-wrapper">
              <Button type="submit" fullWidth>{t.form.submit}</Button>
            </div>
          </form>
        </div>
      </div>

      {/* Payment Instruction Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button 
              onClick={closeModal}
              className="modal-close-btn"
            >
              <X size={24} />
            </button>
            
            <div className="modal-body">
              <div className="modal-icon-wrapper">
                <CheckCircle size={32} />
              </div>
              
              <h3 className="modal-title">{t.modal.title}</h3>
              
              <div className="modal-info-box">
                <p className="modal-message">
                  {t.modal.message}
                </p>
                
                <div className="payment-methods">
                  <div className="payment-method">
                     <div className="payment-icon bg-blue">
                        <Send size={20} />
                     </div>
                     <span className="payment-label">Sendwave</span>
                  </div>
                  <div className="separator-vertical"></div>
                  <div className="payment-method">
                     <div className="payment-icon bg-green">
                        <CreditCard size={20} />
                     </div>
                     <span className="payment-label">TapTap</span>
                  </div>
                </div>
              </div>
              
              <Button onClick={closeModal} variant="outline" fullWidth>
                {t.modal.close}
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
