import React from 'react';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-left">
          &copy; {new Date().getFullYear()} Due Tattoos. All rights reserved.
        </div>
        <div>
          Designed for Excellence.
        </div>
      </div>
    </footer>
  );
};
