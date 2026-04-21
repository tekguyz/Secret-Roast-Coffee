'use client';

import { motion } from 'motion/react';
import { fadeUp } from '@/lib/animations';
import { EmailForm } from '@/components/ui/EmailForm';

export function LeadCapture() {
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
          004 / JOIN THE INNER CIRCLE
        </span>

        <h3 className="font-serif text-3xl sm:text-4xl text-[var(--color-roast-cream)] mb-2 editorial-headline">
          Be first. Be a founder.
        </h3>
        
        <p className="font-sans font-light text-sm text-[var(--color-roast-fog)] leading-relaxed max-w-xs mb-8">
          Claim your spot for founding pricing and early access. Restricted to first {process.env.NEXT_PUBLIC_FOUNDING_MEMBER_CAP || 500} members.
        </p>

        <div className="w-full max-w-md h-[56px] relative">
          <EmailForm />
        </div>

        <div className="mt-6 flex items-center space-x-3">
          <div className="w-2 h-2 rounded-full bg-[var(--color-roast-amber)] animate-pulse" />
          <span className="font-mono text-[10px] text-[var(--color-roast-amber)] uppercase tracking-widest">
            Spot 412/500 remaining
          </span>
        </div>

        <p className="font-mono text-[9px] text-[var(--color-roast-fog)] mt-4 uppercase tracking-tighter italic">
          Access closes at {process.env.NEXT_PUBLIC_FOUNDING_MEMBER_CAP || 500} members. No spam. Just the good stuff.
        </p>

      </motion.div>
    </section>
  );
}
