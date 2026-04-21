'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { fadeUp, staggerContainer } from '@/lib/animations';

export function Origin() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex flex-col justify-end overflow-hidden border-none">
      {/* Divider */}
      <div className="absolute top-0 left-0 right-0 h-divider-vanishing opacity-50" />

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* SWAP: Replace with actual farm/origin photography */}
        <Image
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2000&auto=format&fit=crop"
          alt="Guatemala coffee farm highlands"
          fill
          className="object-cover object-center grayscale-[20%]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-roast-black)] via-[var(--color-roast-black)]/60 to-transparent bottom-0 h-full" />
      </div>

      <div className="relative z-10 w-full p-6 sm:p-12 pb-16 sm:pb-24">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="flex flex-col space-y-8"
        >
          {/* Section Label */}
          <motion.div variants={fadeUp}>
            <span className="font-mono text-[10px] text-[var(--color-roast-amber)] tracking-[0.2em] sm:tracking-[0.3em] uppercase">
              002 / ORIGIN
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2 
            variants={fadeUp}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl text-[var(--color-roast-cream)] editorial-headline"
          >
            From the <br className="hidden sm:block text-white" />
            <span className="italic font-black">Highlands.</span>
          </motion.h2>

          {/* Body */}
          <motion.p 
            variants={fadeUp}
            className="font-sans font-light text-base sm:text-lg text-[var(--color-roast-fog)] leading-[1.65] max-w-md"
          >
            Grown in volcanic soil at altitude. <br />
            Harvested by hand. Roasted with intent.
          </motion.p>

          {/* Pills */}
          <motion.div 
            variants={fadeUp}
            className="flex flex-wrap gap-3 sm:gap-4 pt-4"
          >
            <div className="bg-[var(--color-roast-espresso)] border border-[var(--color-roast-charcoal)] px-4 py-1.5 text-[var(--color-roast-amber)] font-mono text-[10px] tracking-wider uppercase rounded-full flex items-center space-x-2">
              <span className="text-sm">🌋</span>
              <span>1,500m+ Altitude</span>
            </div>
            <div className="bg-[var(--color-roast-espresso)] border border-[var(--color-roast-charcoal)] px-4 py-1.5 text-[var(--color-roast-amber)] font-mono text-[10px] tracking-wider uppercase rounded-full flex items-center space-x-2">
              <span className="text-sm">☕</span>
              <span>Single Origin</span>
            </div>
            <div className="bg-[var(--color-roast-espresso)] border border-[var(--color-roast-charcoal)] px-4 py-1.5 text-[var(--color-roast-amber)] font-mono text-[10px] tracking-wider uppercase rounded-full flex items-center space-x-2">
              <span className="text-sm">🔥</span>
              <span>Slow Roast</span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
