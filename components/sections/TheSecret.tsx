'use client';

import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { useRef } from 'react';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { useLanguage } from '@/hooks/useLanguage';

export function TheSecret() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Base parallax transform
  const yBase = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  
  // Weighted Spring for lag effect
  const ySmooth = useSpring(yBase, { stiffness: 100, damping: 30 });

  return (
    <section ref={containerRef} className="relative p-6 sm:p-12 border-none overflow-hidden">
      {/* Vanishing border bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-divider-vanishing opacity-50" />

      {/* Decorative Parallax Typography with Weighted Scroll */}
      <motion.div 
        style={{ y: ySmooth }}
        className="absolute right-[-20%] md:right-[-10%] top-[20%] origin-center -rotate-90 pointer-events-none opacity-[0.03] select-none z-0"
      >
        <span className="font-serif text-[12rem] md:text-[15rem] leading-none whitespace-nowrap text-white font-black uppercase tracking-tighter italic">
          {t.theSecret.bgText}
        </span>
      </motion.div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className="flex flex-col relative z-10"
      >
        <motion.p variants={fadeUp} className="font-mono text-[var(--color-roast-amber)] text-[10px] tracking-widest uppercase mb-6">
          {t.theSecret.label}
        </motion.p>
        
        <motion.blockquote variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-serif italic text-[var(--color-roast-cream)] mb-8 editorial-headline">
          &quot;{t.theSecret.quote}&quot;
        </motion.blockquote>

        <motion.div variants={fadeUp}>
          <p className="text-[var(--color-roast-fog)] font-light leading-relaxed max-w-sm text-sm sm:text-base">
            {t.theSecret.body1}
          </p>
          <p className="text-[var(--color-roast-fog)] font-light leading-relaxed max-w-sm text-sm sm:text-base mt-4">
            {t.theSecret.body2}
          </p>
          <div className="pt-8">
            <span className="font-mono text-[10px] sm:text-xs text-[var(--color-roast-amber)] tracking-[0.1em] sm:tracking-[0.15em] uppercase">
              {t.theSecret.comingSoon}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
