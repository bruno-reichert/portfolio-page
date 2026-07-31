import React, { useState, useEffect } from 'react';
import { translations } from '../i18n';

export default function Hero({ language }) {
  const text = translations[language].hero;
  const commandToType = "whoami";

  // Helper to check for reduced motion media settings safely
  const checkReducedMotion = () => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  };

  // 1. Initialize states directly based on user's system preferences
  const [typedCommand, setTypedCommand] = useState(() => {
    return checkReducedMotion() ? commandToType : '';
  });
  
  const [isTypingComplete, setIsTypingComplete] = useState(() => {
    return checkReducedMotion();
  });

  // The effect now ONLY handles dynamic animation transitions cleanly
  useEffect(() => {
    // If state was initialized as complete (due to reduced motion), skip typing
    if (isTypingComplete) return;

    const typingInterval = setInterval(() => {
      setTypedCommand((prev) => {
        // Use the current typed string's length to determine the next character index
        if (prev.length < commandToType.length) {
          return prev + commandToType.charAt(prev.length);
        } else {
          // Once the string matches the length of the command, stop the interval
          clearInterval(typingInterval);
          setIsTypingComplete(true);
          return prev;
        }
      });
    }, 100);

    return () => clearInterval(typingInterval);
  }, [isTypingComplete]);

  return (
    <section id="hero" className="hero-section">
      <div className="eyebrow-cell">
        A1 · {language === 'pt' ? 'Início' : 'Home'}
      </div>

      <div className="hero-content">
        
        <div className="terminal-box">
          <div className="terminal-header">
            <span className="terminal-dot red"></span>
            <span className="terminal-dot yellow"></span>
            <span className="terminal-dot green"></span>
            <span className="terminal-title">bash</span>
          </div>
          <div className="terminal-body">
            <span className="terminal-prompt-user">bruno@portfolio:~$</span>{' '}
            <span className="terminal-typed-command">{typedCommand}</span>
            {!isTypingComplete && <span className="terminal-cursor">█</span>}
          </div>
        </div>

        <div className={`hero-details ${isTypingComplete ? 'fade-in' : 'hidden'}`}>
          <h1 className="hero-name">Bruno Benno Reichert</h1>
          <h2 className="hero-tagline">{text.tagline}</h2>
          <p className="hero-subline">{text.subline}</p>
          
          <div className="hero-actions">
            <a href="#projects" className="cta-btn primary">
              {text.ctaProjects}
            </a>
            <a href="https://github.com/bruno-reichert" target="_blank" rel="noopener noreferrer" className="cta-btn secondary">
              {text.ctaGithub}
            </a>
            <a href="https://www.linkedin.com/in/brunobennoreichert" target="_blank" rel="noopener noreferrer" className="cta-btn secondary">
              {text.ctaLinkedin}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}