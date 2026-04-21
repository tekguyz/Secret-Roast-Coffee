'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { maskReveal, staggerContainer, fadeUp } from '@/lib/animations';
import { ArrowDown } from 'lucide-react';
import { SteamEffect } from '@/components/ui/SteamEffect';
import { Logo } from '@/components/ui/Logo';
import { useLanguage } from '@/hooks/useLanguage';

export function Hero() {
  const { t } = useLanguage();
  const words = ['SECRET', 'ROAST'];

  return (
    <section className="relative w-full h-[100dvh] bg-[var(--color-roast-black)] overflow-hidden flex flex-col justify-center">
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-roast-black)] via-transparent to-[var(--color-roast-black)]/40 z-10" />
        {/* SWAP: Hero image — dark moody coffee close-up */}
        <Image
          src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=2000&auto=format&fit=crop"
          alt="Dark moody coffee"
          fill
          className="object-cover object-center grayscale opacity-40 animate-ken-burns transition-opacity duration-[2s]"
          priority
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-20 w-full p-6 lg:p-12 pt-24 sm:pt-12">
        {/* LOGO WATERMARK */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-auto opacity-[0.05] mix-blend-overlay pointer-events-none -z-10">
          <Logo className="w-full h-auto" />
        </div>

        <div className="flex flex-col items-start xl:max-w-3xl">
          {/* Tagline Top */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 flex flex-col items-start"
          >
            {/* HEROWATERMARK LOGO - Smaller sub-mark */}
            <Logo className="w-20 h-auto opacity-20 mb-4 -ml-2" />
            
            <span className="font-mono text-[10px] sm:text-xs text-[var(--color-roast-amber)] tracking-[0.2em] sm:tracking-[0.3em] uppercase">
              {t.hero.taglineTop}
            </span>
          </motion.div>

          <hr className="w-full border-[var(--color-roast-charcoal)] mb-6 sm:mb-8" />

          {/* Heavy Brand Reveal */}
          <motion.h1
            className="font-serif text-6xl sm:text-8xl md:text-9xl lg:text-[140px] text-[var(--color-roast-cream)] font-black uppercase italic -ml-1 sm:-ml-2 mb-4 editorial-headline"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {words.map((word, i) => (
              <span key={i} className="block overflow-hidden pb-1 pr-12">
                <motion.span
                  className="inline-block italic pr-4"
                  variants={maskReveal}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <div className="w-full max-w-sm h-divider-vanishing mb-6 sm:mb-8 self-start !bg-gradient-to-r !from-transparent !via-[var(--color-roast-amber)] !to-transparent" />

          {/* Tagline Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-4 flex flex-col space-y-8 sm:space-y-12"
          >
            <p className="font-mono text-xs sm:text-sm text-[var(--color-roast-cream)] uppercase tracking-[0.15em] sm:tracking-[0.25em] leading-relaxed max-w-md sm:max-w-none">
              {t.hero.taglineBottomLeft}<br className="sm:hidden" /> {t.hero.taglineBottomRight}
            </p>

            <motion.a
              href="#lead-capture"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
              className="group inline-flex items-center space-x-4 border border-[var(--color-roast-cream)] px-6 py-4 uppercase font-mono text-xs tracking-widest text-[var(--color-roast-cream)] hover:bg-[var(--color-roast-cream)] hover:text-[var(--color-roast-black)] transition-colors duration-300 w-fit"
            >
              <span>{t.hero.cta}</span>
              <ArrowDown className="w-4 h-4 stroke-thin group-hover:translate-y-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </div>
      
      <SteamEffect />
    </section>
  );
}


