'use client';

import { motion } from 'motion/react';
import { CountdownTimer } from '@/components/ui/CountdownTimer';
import { ArrowUpRight } from 'lucide-react';
import { fadeUp } from '@/lib/animations';

export function ComingSoon() {
  const marqueeText = "COMING SOON · SECRET ROAST COFFEE · GUATEMALA CITY · ";
  const marqueeItems = new Array(10).fill(marqueeText);

  return (
    <section className="relative bg-[var(--color-roast-black)] overflow-hidden flex flex-col border-none p-6 sm:p-12 items-center">
      {/* Top vanishing divider */}
      <div className="absolute top-0 left-0 right-0 h-divider-vanishing opacity-50" />

      <div className="w-full flex flex-col items-center">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={fadeUp}
          className="mb-8"
        >
          <span className="font-mono text-[10px] text-[var(--color-roast-amber)] tracking-[0.2em] uppercase">
            THE SHELTER IS BEING BUILT
          </span>
        </motion.div>

        {/* Countdown */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={fadeUp}
          className="w-full mb-12 flex justify-center"
        >
          <CountdownTimer />
        </motion.div>

        {/* IG Card */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={fadeUp}
          className="w-full max-w-sm bg-[var(--color-roast-espresso)] p-6 flex flex-col group relative"
        >
          {/* Decorative lines */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--color-roast-amber)]" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[var(--color-roast-amber)]" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[var(--color-roast-amber)]" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--color-roast-amber)]" />

          <div className="w-full aspect-square bg-[var(--color-roast-black)] relative overflow-hidden mb-6 filter grayscale-[50%] group-hover:grayscale-0 transition-all duration-500">
            {/* SWAP: Replace with actual IG feed / construction image */}
            <motion.div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?q=80&w=1000&auto=format&fit=crop")' }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            />
          </div>
          
          <div className="flex flex-col space-y-4">
            <p className="font-sans text-sm sm:text-base text-[var(--color-roast-cream)] leading-relaxed italic">
              &quot;We toast the rules. We built the shelter. COMING SOON&quot;
            </p>
            <a 
              href={process.env.NEXT_PUBLIC_INSTAGRAM_URL || "#"} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 font-mono text-xs text-[var(--color-roast-amber)] uppercase tracking-wider hover:text-[var(--color-roast-cream)] transition-colors"
            >
              <span>@secretroastcoffee</span>
              <ArrowUpRight className="w-4 h-4 stroke-thin" />
            </a>
          </div>
        </motion.div>

      </div>

    </section>
  );
}
