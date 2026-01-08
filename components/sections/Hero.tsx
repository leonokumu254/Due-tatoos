import React from 'react';
import { Translation } from '../../types';
import { Button } from '../ui/Button';
import './Hero.css';

interface HeroProps {
  t: Translation['hero'];
}


export const Hero: React.FC<HeroProps> = ({ t }) => {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section" data-aos="fade-up">
      {/* Background decoration */}
      <div className="hero-bg-accent" />
      
      <div className="container hero-grid">
        
        {/* Text Content */}
        <div className="hero-content">
          <div className="hero-accent-line" />
          <h1 className="hero-title" >
            {t.title.split(' ').map((word, i) => (
              <span key={i}>{word}</span>
            ))}
          </h1 >
          <p className="hero-subtitle">
            {t.subtitle}
          </p>
          <div className="hero-cta-wrapper">
            <Button onClick={scrollToBooking}>{t.cta}</Button>
          </div>
        </div>

       
      </div>
      
      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};
