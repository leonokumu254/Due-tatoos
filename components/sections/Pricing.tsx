import React, { useState } from 'react';
import './Pricing.css';

const pricingData = {
  en: {
    header: 'Tattoo Pricing (Estimates)',
    intro: 'Pricing varies by artist and complexity.',
    items: [
      { name: 'Shop Minimum (Setup & Sterile Materials)', price: '80 € – 100 €' },
      { name: 'Hourly Rate (Standard)', price: '100 € – 160 € / hr' },
      { name: 'Hourly Rate (Expert/Guest)', price: '200 € – 350 € / hr' },
      { name: 'Full Day Session (5-7 hours)', price: '600 € – 1,200 €' },
    ],
    footer: 'Deposit required (30%) and is non-refundable for convenience of the date booked. Free touch-ups within 3 months.',
  },
  fr: {
    header: 'Tarifs Tatouage (Estimations)',
    intro: "Les prix varient selon l'artiste et la complexité.",
    items: [
      { name: 'Prix Minimum (Matériel stérile & Installation)', price: '80 € – 100 €' },
      { name: 'Taux Horaire (Standard)', price: '100 € – 160 € / hr' },
      { name: 'Taux Horaire (Expert/Guest)', price: '200 € – 350 € / hr' },
      { name: 'Séance Complète (5-7 heures)', price: '600 € – 1,200 €' },
    ],
    footer: "Acompte requis (30%) et non remboursable pour la commodité de la date réservée. Retouches gratuites sous 3 mois.",
  },
};

export const Pricing: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'fr'>('en');

  const handleLanguageToggle = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  const t = pricingData[language];

  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <div className="section-title-wrapper">
          <h2 className="section-title">{t.header}</h2>
          <div className="title-separator"></div>
          <p className="section-subtitle">{t.intro}</p>
        </div>

        <div className="pricing-content-wrapper">
          <div className="pricing-card">
            <div className="language-toggle-wrapper">
                <button
                    onClick={handleLanguageToggle}
                    className="language-toggle"
                >
                    <span className={language === 'en' ? 'active' : ''}>EN</span>
                    <span>/</span>
                    <span className={language === 'fr' ? 'active' : ''}>FR</span>
                </button>
            </div>
            <ul className="pricing-list">
              {t.items.map((item, index) => (
                <li key={index} className="pricing-item">
                  <span className="pricing-item-name">{item.name}</span>
                  <span className="pricing-item-dots"></span>
                  <span className="pricing-item-price">{item.price}</span>
                </li>
              ))}
            </ul>
            <div className="pricing-footer">
              <p>{t.footer}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
