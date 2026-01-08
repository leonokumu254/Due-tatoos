import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Language, Translation } from '../../types';
import './Navbar.css';

interface NavbarProps {
  language: Language;
  toggleLanguage: () => void;
  t: Translation['nav'];
}

export const Navbar: React.FC<NavbarProps> = ({ language, toggleLanguage, t }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: t.home, id: 'hero' },
    { label: t.gallery, id: 'gallery' },
    { label: t.artists, id: 'artists' },
    { label: t.contact, id: 'contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-content">
        {/* Logo */}
        <div 
          className="logo"
          onClick={() => scrollToSection('hero')}
        >
          <img src="/images/logo.png" alt="" id='logo'  />
        </div>

        {/* Desktop Nav */}
        <div className="nav-links-desktop">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="nav-link"
            >
              {link.label}
            </button>
          ))}
          
          <button
            onClick={() => scrollToSection('booking')}
            className="btn-book-nav"
          >
            {t.book}
          </button>

          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="lang-switcher"
          >
            <Globe size={18} />
            <span className="lang-text">{language}</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="mobile-controls">
          <button
            onClick={toggleLanguage}
            className="lang-switcher"
          >
            <span className="lang-text">{language}</span>
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="menu-toggle"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="mobile-nav-link"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('booking')}
            className="mobile-book-btn"
          >
            {t.book}
          </button>
        </div>
      )}
    </nav>
  );
};
