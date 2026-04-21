import { create } from 'zustand';
import { Language, content } from '@/config/site-content';

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: typeof content.es;
}

export const useLanguage = create<LanguageState>((set) => ({
  language: 'es',
  t: content.es,
  setLanguage: (lang: Language) => set({ 
    language: lang, 
    t: content[lang] 
  }),
  toggleLanguage: () => set((state) => {
    const nextLang = state.language === 'en' ? 'es' : 'en';
    return {
      language: nextLang,
      t: content[nextLang]
    };
  }),
}));
