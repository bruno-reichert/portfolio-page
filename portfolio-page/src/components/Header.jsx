import React from 'react';
import { translations } from '../i18n';

export default function Header({ theme, toggleTheme, language, toggleLanguage }) {
  const navText = translations[language].nav;

  return (
    <header className="site-header">
      <div className="header-container">
        
        {/* Terminal Logo */}
        <a href="#hero" className="terminal-logo">
          <span className="prompt-symbol">&gt;</span>
          <span className="prompt-user">bruno</span>
          <span className="prompt-cursor">_</span>
        </a>

        {/* Dynamic Navigation Links */}
        <nav className="header-nav">
          <ul className="nav-list">
            <li>
              <a href="#about" className="nav-link">
                <span className="nav-bullet">//</span> {navText.about}
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-link">
                <span className="nav-bullet">//</span> {navText.projects}
              </a>
            </li>
            <li>
              <a href="#certifications" className="nav-link">
                <span className="nav-bullet">//</span> {navText.certifications}
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link">
                <span className="nav-bullet">//</span> {navText.contact}
              </a>
            </li>
          </ul>
        </nav>

        {/* Header Controls (Theme & Language switches) */}
        <div className="header-controls">
          
          {/* Language Switcher (PT / EN toggle option) */}
          <div className="lang-switcher">
            <button 
              onClick={() => toggleLanguage()} 
              className={`control-btn lang-btn ${language === 'pt' ? 'active' : ''}`}
              aria-label="Mudar idioma para Português"
            >
              PT
            </button>
            <span className="control-divider">/</span>
            <button 
              onClick={() => toggleLanguage()} 
              className={`control-btn lang-btn ${language === 'en' ? 'active' : ''}`}
              aria-label="Switch language to English"
            >
              EN
            </button>
          </div>

          <span className="controls-separator">|</span>

          {/* Theme Switcher Button (Sun/Moon Toggle) */}
          <button 
            onClick={toggleTheme} 
            className="control-btn theme-btn"
            aria-label={theme === 'light' ? 'Mudar para tema escuro' : 'Switch to light theme'}
          >
            {theme === 'light' ? (
              /* Moon Icon */
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="theme-icon">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            ) : (
              /* Sun Icon */
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="theme-icon">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            )}
          </button>

        </div>

      </div>
    </header>
  );
}