'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

export function EmailForm() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch('/__forms.html', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded',
          'X-Requested-With': 'XMLHttpRequest'
        },
        body: new URLSearchParams(formData as any).toString(),
      });
      setStatus('success');
    } catch (error) {
      // Revert if error
      setStatus('idle');
    }
  };

  return (
    <div className="w-full relative h-[60px]">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-50"
          >
            <motion.h4 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-xl sm:text-2xl text-[var(--color-roast-cream)] mb-2"
            >
              {t.leadCapture.form.success.headline}
            </motion.h4>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-mono text-[10px] text-[var(--color-roast-amber)] uppercase tracking-[0.2em]"
            >
              {t.leadCapture.form.success.subheadline}
            </motion.p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, filter: 'blur(10px)' }}
            name="founding-members"
            method="POST"
            action="/__forms.html"
            onSubmit={handleSubmit}
            className="absolute inset-0 block w-full group h-[56px]"
          >
            <input type="hidden" name="form-name" value="founding-members" />
            <input type="hidden" name="bot-field" className="hidden" />
            
            <input
              type="email"
              name="email"
              placeholder={t.leadCapture.form.placeholder}
              required
              disabled={status === 'submitting'}
              className="w-full h-full bg-[var(--color-roast-espresso)] border border-[var(--color-roast-charcoal)] px-6 pr-32 sm:pr-40 text-[var(--color-roast-cream)] font-mono text-sm placeholder:text-[var(--color-roast-charcoal)] focus:outline-none focus:border-[var(--color-roast-gold)] focus:shadow-[0_0_20px_oklch(76%_0.16_80_/_0.15)] transition-all duration-300 disabled:opacity-50"
            />
            
            <button 
              type="submit"
              disabled={status === 'submitting'}
              className="absolute right-2 top-2 bottom-2 bg-[var(--color-roast-amber)] px-4 sm:px-6 text-[var(--color-roast-black)] font-mono text-[10px] sm:text-[10px] font-bold tracking-widest uppercase hover:bg-[var(--color-roast-gold)] transition-colors duration-300 disabled:opacity-50 flex items-center justify-center whitespace-nowrap"
            >
              <span>{status === 'submitting' ? t.leadCapture.form.submitting : t.leadCapture.form.cta}</span>
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
