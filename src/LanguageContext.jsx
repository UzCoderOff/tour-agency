import React, { createContext, useState, useContext, useEffect } from 'react';
import en from './translations/en.json';
import ru from './translations/ru.json';
import uz from './translations/uz.json';

const translations = {
  en,
  ru,
  uz,
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const lang = window.location.pathname.split('/')[1];
    if (translations[lang]) {
      setLanguage(lang);
    }
  }, []);

  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
      window.history.pushState({}, '', `/${lang}`);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, translations: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
