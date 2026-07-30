import React from 'react';
import { useTheme } from './hooks/useTheme';
import { useLanguage } from './hooks/useLanguage';

// Import component shells
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Styling
import './App.css';

function App() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  return (
    <>
      {/* 
        The Header receives the theme/language state and their toggle functions
        so the user can interact with the switch controls.
      */}
      <Header 
        theme={theme} 
        toggleTheme={toggleTheme} 
        language={language} 
        toggleLanguage={toggleLanguage} 
      />
      
      {/* Main layout container wrapping all sections sequentially */}
      <main>
        <Hero language={language} />
        <About language={language} />
        <Projects language={language} />
        <Certifications language={language} />
        <Contact language={language} />
      </main>

      <Footer language={language} />
    </>
  );
}

export default App;