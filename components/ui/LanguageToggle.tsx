'use client';

import { motion } from 'motion/react';
import { useLanguage } from '@/hooks/useLanguage';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center justify-center">
      <div className="bg-[var(--color-roast-black)]/30 backdrop-blur-md rounded-full border border-[var(--color-roast-charcoal)] p-1 flex">
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 font-mono text-[10px] tracking-widest uppercase transition-all duration-300 rounded-full ${
            language === 'en'
              ? 'text-[var(--color-roast-amber)] shadow-[0_0_10px_rgba(232,168,76,0.3)]'
              : 'text-[var(--color-roast-fog)] hover:text-[var(--color-roast-cream)]'
          }`}
        >
          EN
        </button>
        <div className="w-[1px] bg-[var(--color-roast-charcoal)] my-1" />
        <button
          onClick={() => setLanguage('es')}
          className={`px-3 py-1 font-mono text-[10px] tracking-widest uppercase transition-all duration-300 rounded-full ${
            language === 'es'
              ? 'text-[var(--color-roast-amber)] shadow-[0_0_10px_rgba(232,168,76,0.3)]'
              : 'text-[var(--color-roast-fog)] hover:text-[var(--color-roast-cream)]'
          }`}
        >
          ES
        </button>
      </div>
    </div>
  );
}
