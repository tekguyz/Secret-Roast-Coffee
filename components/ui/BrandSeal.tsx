'use client';

import { motion } from 'motion/react';
import { Logo } from './Logo';

export function BrandSeal() {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 1, 
        delay: 2.5, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      className="fixed top-0 left-1/2 -translate-x-1/2 z-50 p-4"
    >
      <Logo className="w-[50px] h-auto text-[var(--color-roast-cream)]" />
    </motion.div>
  );
}
