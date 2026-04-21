'use client';

import { motion } from 'motion/react';
import { fadeUp } from '@/lib/animations';
import { EmailForm } from '@/components/ui/EmailForm';
import { useLanguage } from '@/hooks/useLanguage';

export function LeadCapture() {
  const { t } = useLanguage();

  return (
    <section id="lead-capture" className="flex-1 flex flex-col justify-center p-6 sm:p-12 border-none bg-[var(--color-roast-black)] min-h-[500px] relative">
      {/* Top vanishing divider */}
      <div className="absolute top-0 left-0 right-0 h-divider-vanishing opacity-50" />
      {/* Bottom vanishing divider */}
      <div className="absolute bottom-0 left-0 right-0 h-divider-vanishing opacity-50" />
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={fadeUp}
        className="relative z-10 w-full flex flex-col items-start"
      >
        <span className="font-mono text-[10px] sm:text-xs text-[var(--color-roast-amber)] tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-6">
          {t.leadCapture.label}
        </span>

        <h3 className="font-serif text-3xl sm:text-4xl text-[var(--color-roast-cream)] mb-2 editorial-headline">
          {t.leadCapture.headline}
        </h3>
        
        <p className="font-sans font-light text-sm text-[var(--color-roast-fog)] leading-relaxed max-w-xs mb-8">
          {t.leadCapture.body}
        </p>

        <div className="w-full max-w-md h-[56px] relative">
          <EmailForm />
        </div>

        <div className="mt-6 flex items-center space-x-3">
          <div className="w-2 h-2 rounded-full bg-[var(--color-roast-amber)] animate-pulse" />
          <span className="font-mono text-[10px] text-[var(--color-roast-amber)] uppercase tracking-widest">
            {t.leadCapture.spots}
          </span>
        </div>

        <p className="font-mono text-[9px] text-[var(--color-roast-fog)] mt-4 uppercase tracking-tighter italic">
          {t.leadCapture.footer}
        </p>

      </motion.div>
    </section>
  );
}
