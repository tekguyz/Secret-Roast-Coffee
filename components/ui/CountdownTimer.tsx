'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// Default fallback: 60 days from now
const getFallbackLaunchDate = () => {
  const date = new Date();
  date.setDate(date.getDate() + 60);
  return date.getTime();
};

const LAUNCH_DATE_MS = process.env.NEXT_PUBLIC_LAUNCH_DATE 
  ? new Date(process.env.NEXT_PUBLIC_LAUNCH_DATE).getTime() 
  : getFallbackLaunchDate();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(): TimeLeft {
  const difference = LAUNCH_DATE_MS - new Date().getTime();
  
  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return { days: 0, hours: 0, minutes: 0, seconds: 0 };
}

function padDigit(num: number) {
  return num.toString().padStart(2, '0');
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Only run on client
    const handleMount = () => {
      setIsMounted(true);
      setTimeLeft(calculateTimeLeft());
    };
    
    // Defer setting state to avoid synchronous update in effect
    // We can just use a setTimeout to yield to browser
    setTimeout(handleMount, 0);
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  if (!isMounted) {
    return (
      <div className="flex justify-between items-center w-full max-w-sm opacity-0">
        <DigitBlock value="00" label="Days" />
        <span className="text-[var(--color-roast-charcoal)] font-mono pb-4">:</span>
        <DigitBlock value="00" label="Hrs" />
        <span className="text-[var(--color-roast-charcoal)] font-mono pb-4">:</span>
        <DigitBlock value="00" label="Min" />
        <span className="text-[var(--color-roast-charcoal)] font-mono pb-4">:</span>
        <DigitBlock value="00" label="Sec" />
      </div>
    );
  }

  return (
    <div className="flex justify-between items-center w-full max-w-sm">
      <DigitBlock value={padDigit(timeLeft.days)} label="Days" />
      <span className="text-[var(--color-roast-charcoal)] font-mono pb-4">:</span>
      <DigitBlock value={padDigit(timeLeft.hours)} label="Hrs" />
      <span className="text-[var(--color-roast-charcoal)] font-mono pb-4">:</span>
      <DigitBlock value={padDigit(timeLeft.minutes)} label="Min" />
      <span className="text-[var(--color-roast-charcoal)] font-mono pb-4">:</span>
      <DigitBlock value={padDigit(timeLeft.seconds)} label="Sec" />
    </div>
  );
}

function DigitBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="font-mono text-3xl sm:text-4xl leading-none text-[var(--color-roast-cream)] w-10 sm:w-16 relative flex justify-center">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, position: 'absolute' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="inline-block"
          >
            {value}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="font-mono text-[9px] text-[var(--color-roast-fog)] mt-2 uppercase tracking-widest block">
        {label}
      </span>
    </div>
  );
}
