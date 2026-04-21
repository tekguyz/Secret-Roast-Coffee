'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { useLanguage } from '@/hooks/useLanguage';

const products = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop',
    alt: 'Coffee beans close up',
    isClassified: false,
    aspect: 'aspect-[4/5] sm:aspect-[3/4]',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?q=80&w=800&auto=format&fit=crop',
    alt: 'Pour over coffee',
    isClassified: true,
    aspect: 'aspect-[4/5] sm:aspect-[4/5] sm:mt-16', // asymmetric rhythm
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1542181961-9590d0c79dab?q=80&w=800&auto=format&fit=crop',
    alt: 'Espresso shot',
    isClassified: false,
    aspect: 'aspect-[4/5] sm:aspect-[3/4]',
  }
];

export function ProductReveal() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-[var(--color-roast-black)] py-12 sm:py-24 border-none">
      {/* Divider */}
      <div className="absolute top-0 left-0 right-0 h-divider-vanishing opacity-50" />

      <div className="w-full p-6 sm:p-12">
        
        {/* Header content */}
        <motion.div 
          className="flex flex-col mb-12 space-y-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
        >
          <div className="flex flex-col space-y-4 max-w-xl">
            <motion.div variants={fadeUp}>
              <span className="font-mono text-[10px] text-[var(--color-roast-amber)] tracking-widest uppercase">
                {t.productReveal.label}
              </span>
            </motion.div>
            
            <motion.h2 
              variants={fadeUp}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[var(--color-roast-cream)] editorial-headline"
            >
              {t.productReveal.headline} <br />
              <span className="italic font-black">{t.productReveal.headlineItalic}</span>
            </motion.h2>
          </div>

          <motion.div variants={fadeUp} className="flex flex-col space-y-4 max-w-sm mt-4">
            <p className="font-sans font-light text-sm text-[var(--color-roast-fog)] leading-relaxed">
              {t.productReveal.body}
            </p>
            <a href="#lead-capture" className="inline-block border border-[var(--color-roast-amber)] px-4 py-3 text-center text-[var(--color-roast-amber)] font-mono text-[10px] sm:text-xs tracking-widest uppercase hover:bg-[var(--color-roast-amber)] hover:text-[var(--color-roast-black)] transition-colors duration-300">
              {t.productReveal.cta}
            </a>
          </motion.div>
        </motion.div>

        {/* Product Grid / Carousel */}
        <motion.div 
          className="flex overflow-x-auto snap-x snap-mandatory xl:grid xl:grid-cols-3 gap-6 sm:gap-8 hide-scrollbar xl:pt-12"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, margin: "-10%" }}
        >
          {products.map((product, idx) => (
            <motion.div 
              key={product.id}
              variants={fadeUp}
              className={`group relative min-w-[80vw] sm:min-w-0 snap-center bg-[var(--color-roast-espresso)] p-4 sm:p-6 transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-[0_0_0_1px_var(--color-roast-gold)] cursor-crosshair ${product.aspect}`}
              style={{
                y: idx === 1 ? 40 : idx === 2 ? -20 : 0
              }}
            >
              <div className="relative w-full h-full overflow-hidden">
                {/* Decorative Brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[var(--color-roast-amber)] z-20 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[var(--color-roast-amber)] z-20 pointer-events-none" />
                
                {/* Image */}
                {/* SWAP: Replace with actual product photography (packaging) */}
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  className="object-cover object-center grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 blur-[2px] group-hover:blur-0"
                  referrerPolicy="no-referrer"
                />
                
                {/* Classified Overlay */}
                {product.isClassified && (
                  <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
                    <div className="bg-[var(--color-roast-amber)] border border-[var(--color-roast-black)] px-6 py-2 rotate-[-2deg] backdrop-blur-md noise-stamp shadow-xl">
                      <span className="font-mono text-xs sm:text-sm text-[var(--color-roast-black)] font-black tracking-[0.25em] uppercase">
                        {t.productReveal.redacted}
                      </span>
                    </div>
                  </div>
                )}
                
                {/* Base Dark Overlay */}
                <div className="absolute inset-0 bg-[var(--color-roast-black)]/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
