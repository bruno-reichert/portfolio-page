import { useState, useEffect } from 'react';

export function useLanguage() {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('lang');
    if (savedLanguage) {
      return savedLanguage;
    }
    // Default fallback to Portuguese
    return 'pt';
  });

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('lang', language);
    localStorage.setItem('lang', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'pt' ? 'en' : 'pt'));
  };

  return { language, setLanguage, toggleLanguage };
}