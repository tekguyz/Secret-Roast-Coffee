import { Variants } from 'motion/react';

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] }
  }
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 }
  }
};

export const maskReveal: Variants = {
  hidden: { clipPath: 'inset(100% 0% 0% 0%)', y: 100 },
  visible: {
    clipPath: 'inset(0% 0% 0% 0%)',
    y: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
  }
};
