import React, { createContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import i18n, { defaultResources } from '../i18n';

type Translations = Record<string, Record<string, string>>;

interface TranslationContextType {
  translations: Translations;
  updateTranslation: (lng: string, key: string, value: string) => void;
  resetTranslations: () => void;
}

export const TranslationContext = createContext<TranslationContextType>({} as TranslationContextType);

export const TranslationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [translations, setTranslations] = useState<Translations>(() => {
    const saved = localStorage.getItem('portfolio_translations');
    if (saved) return JSON.parse(saved);
    
    // Convert defaultResources to a flat structure
    const base: Translations = { en: {}, fr: {}, rw: {} };
    Object.keys(defaultResources).forEach(lng => {
      base[lng] = { ...defaultResources[lng as keyof typeof defaultResources].translation };
    });
    return base;
  });

  // Apply translations to i18next whenever they change
  useEffect(() => {
    Object.keys(translations).forEach(lng => {
      i18n.addResourceBundle(lng, 'translation', translations[lng], true, true);
    });
    localStorage.setItem('portfolio_translations', JSON.stringify(translations));
    
    // Trigger re-render in i18next
    i18n.changeLanguage(i18n.language);
  }, [translations]);

  const updateTranslation = (lng: string, key: string, value: string) => {
    setTranslations(prev => ({
      ...prev,
      [lng]: {
        ...prev[lng],
        [key]: value
      }
    }));
  };

  const resetTranslations = () => {
    const base: Translations = { en: {}, fr: {}, rw: {} };
    Object.keys(defaultResources).forEach(lng => {
      base[lng] = { ...defaultResources[lng as keyof typeof defaultResources].translation };
    });
    setTranslations(base);
  };

  return (
    <TranslationContext.Provider value={{ translations, updateTranslation, resetTranslations }}>
      {children}
    </TranslationContext.Provider>
  );
};
