import React from 'react';
import { translations } from '../i18n';

export default function Contact({ language }) {
  const text = translations[language].contact;

  return (
    <section id="contact" className="contact-section">
      
      {/* Spreadsheet Eyebrow */}
      <div className="eyebrow-cell">
        E1 · {language === 'pt' ? 'Contato' : 'Contact'}
      </div>

      <div className="contact-grid">
        
        {/* Left Column: Heading and Location */}
        <div className="contact-info-col">
          <h2 className="contact-heading">{text.title}</h2>
          
          <div className="location-badge">
            <span className="location-icon">📍</span>
            <div className="location-details">
              <span className="location-label">LOCATION_DB</span>
              <span className="location-value">{text.location}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Direct Command Links */}
        <div className="contact-links-col">
          
          <div className="contact-row-link">
            <span className="contact-command">mailto:</span>
            <a 
              href="mailto:brunowasborn2rock@gmail.com" 
              className="contact-address-link"
            >
              brunowasborn2rock@gmail.com
            </a>
          </div>

          <div className="contact-row-link">
            <span className="contact-command">linkedin:</span>
            <a 
              href="https://www.linkedin.com/in/brunobennoreichert" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-address-link"
            >
              in/brunobennoreichert
            </a>
          </div>

          <div className="contact-row-link">
            <span className="contact-command">github:</span>
            <a 
              href="https://github.com/bruno-reichert" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-address-link"
            >
              github.com/bruno-reichert
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}