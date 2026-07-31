import React from 'react';
import { translations } from '../i18n';

export default function Footer({ language }) {
  const text = translations[language].footer;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        {/* Left: Copyright tag */}
        <p className="copyright-text">
          &copy; {currentYear} Bruno Benno Reichert
        </p>

        {/* Right: Dynamic Back to Top anchor */}
        <a href="#hero" className="back-to-top-link">
          <span className="footer-arrow">▲</span> {text.backToTop}
        </a>

      </div>
    </footer>
  );
}