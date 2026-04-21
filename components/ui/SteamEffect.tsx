'use client';

import { motion, useScroll, useTransform, useSpring, useAnimationFrame } from 'motion/react';
import { useRef, useState } from 'react';

export function SteamEffect() {
  const { scrollYProgress } = useScroll();
  
  // Faster as we scroll down
  const speedScale = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const smoothSpeed = useSpring(speedScale, { stiffness: 100, damping: 30 });

  // Fade out faster as we scroll down
  const opacityBase = useTransform(scrollYProgress, [0, 0.4], [0.2, 0]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
      {[...Array(3)].map((_, i) => (
        <SteamParticle key={i} index={i} speed={smoothSpeed} opacity={opacityBase} />
      ))}
    </div>
  );
}

function SteamParticle({ index, speed, opacity }: { index: number, speed: any, opacity: any }) {
  const ref = useRef<HTMLDivElement>(null);
  const [y, setY] = useState(100);

  useAnimationFrame((time, delta) => {
    if (!ref.current) return;
    
    // Move up based on global speed which is modulated by scroll
    const currentSpeed = speed.get();
    const movement = (delta * 0.02) * currentSpeed;
    
    setY((prev) => {
      let newY = prev - movement;
      if (newY < -150) newY = 150; // reset to bottom
      return newY;
    });
  });

  const xPos = 5 + (index * 15);
  const blur = 40 + (index * 10);

  return (
    <motion.div 
      ref={ref}
      className="absolute bottom-0 w-48 h-96 bg-gradient-to-t from-[var(--color-roast-fog)] to-transparent"
      style={{ 
        left: `${xPos}%`,
        y: `${y}%`,
        opacity: opacity,
        filter: `blur(${blur}px)`,
      }}
    />
  );
}
