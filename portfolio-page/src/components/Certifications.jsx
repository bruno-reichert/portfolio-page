import React from 'react';
import { translations } from '../i18n';
import { certificationsData } from '../data';

export default function Certifications({ language }) {
  const text = translations[language].certifications;
  const certs = certificationsData[language];

  return (
    <section id="certifications" className="certifications-section">
      
      {/* Spreadsheet Eyebrow */}
      <div className="eyebrow-cell">
        D1 · {language === 'pt' ? 'Certificações' : 'Certifications'}
      </div>

      {/* Header Area & Note */}
      <div className="certs-header">
        <h2 className="certs-heading">{text.title}</h2>
        <p className="certs-note">
          <span className="note-icon">ℹ</span> {text.note}
        </p>
      </div>

      {/* Structured Ledger Table */}
      <div className="certs-table">
        {certs.map((cert, idx) => (
          <div key={idx} className="cert-row">
            
            {/* Column 1: Date / Timeline */}
            <div className="cert-col cert-date">
              {cert.date}
            </div>

            {/* Column 2: Credentials and details */}
            <div className="cert-col cert-info">
            <h3 className="cert-title">
                {cert.url ? (
                  <a 
                    href={cert.url.startsWith('http') ? cert.url : `${import.meta.env.BASE_URL}${cert.url}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="cert-link"
                  >
                    {cert.title} <span className="cert-link-arrow">&nearr;</span>
                  </a>
                ) : (
                  cert.title
                )}
              </h3>
              <p className="cert-description">{cert.description}</p>
            </div>

            {/* Column 3: Badge Status */}
            <div className="cert-col cert-status">
              {cert.inProgress ? (
                <span className="badge progress">
                  {text.statusEnCourse}
                </span>
              ) : (
                <span className="badge completed">
                  {language === 'pt' ? 'CONCLUÍDO' : 'COMPLETED'}
                </span>
              )}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}