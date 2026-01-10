import React, {  useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Gallery } from './components/sections/Gallery';
import { Artists } from './components/sections/Artists';
import { Booking } from './components/sections/Booking';
import { Contact } from './components/sections/Contact';
import { Pricing } from './components/sections/Pricing';
import { Footer } from './components/layout/Footer';
import { Language } from './types';
import { TRANSLATIONS } from './constants';
import './App.css';



const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>(Language.EN);

  const toggleLanguage = () => {
    setLanguage(prev => prev === Language.EN ? Language.FR : Language.EN);
    
  }
  

  const t = TRANSLATIONS[language];

  return (
    <div className="app-wrapper">
      <Navbar 
        language={language} 
        toggleLanguage={toggleLanguage} 
        t={t.nav}
      />
      
      <main>
        <Hero t={t.hero} />
        <Gallery t={t.gallery} />
        <Artists t={t.artists} />
        <Pricing />
        <Booking t={t.booking} />
        <Contact t={t.contact} />
      </main>

      <Footer />
    </div>
  );
};

export default App;
