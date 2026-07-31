import React from 'react';
import { translations } from '../i18n';

export default function About({ language }) {
  const text = translations[language].about;

  return (
    <section id="about" className="about-section">
      
      {/* Spreadsheet Eyebrow */}
      <div className="eyebrow-cell">
        B1 · {language === 'pt' ? 'Sobre' : 'About'}
      </div>

      <div className="about-grid">
        
        {/* Left column: Section Title */}
        <div className="about-title-col">
          <h2 className="about-heading">{text.title}</h2>
          <div className="ledger-accent-bar"></div>
        </div>

        {/* Right column: Narrative Bio Text */}
        <div className="about-text-col">
          <p className="about-bio-text">
            {text.text}
          </p>
        </div>

      </div>

    </section>
  );
}