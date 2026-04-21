'use client';

import { ArrowUpRight } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { useLanguage } from '@/hooks/useLanguage';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="px-6 sm:px-12 py-12 border-none flex flex-col sm:flex-row justify-between items-center bg-[var(--color-roast-black)] relative gap-8">
      {/* Top vanishing divider */}
      <div className="absolute top-0 left-0 right-0 h-divider-vanishing opacity-30" />
      
      <div className="flex flex-col items-center sm:items-start space-y-4">
        <Logo className="w-16 h-auto text-[var(--color-roast-amber)]" />
        <p className="font-mono text-[10px] text-[var(--color-roast-fog)] uppercase tracking-[0.3em] leading-relaxed text-center sm:text-left">
          {t.footer.branding}
        </p>
      </div>

      <div className="flex flex-col items-center sm:items-end space-y-4">
        <div className="flex gap-6">
          <a href={process.env.NEXT_PUBLIC_INSTAGRAM_URL || "#"} target="_blank" rel="noopener noreferrer" className="text-[10px] font-mono text-[var(--color-roast-fog)] uppercase tracking-widest hover:text-[var(--color-roast-amber)] transition-colors flex items-center space-x-1">
            <span>Instagram</span>
            <ArrowUpRight className="w-3 h-3 stroke-thin" />
          </a>
          <a href="#" className="font-mono text-[10px] text-[var(--color-roast-fog)] uppercase tracking-widest hover:text-[var(--color-roast-amber)] transition-colors">
            {t.footer.privacy}
          </a>
        </div>
        <p className="font-mono text-[10px] text-[var(--color-roast-charcoal)] uppercase tracking-widest">
          © {new Date().getFullYear()} Secret Roast
        </p>
      </div>
    </footer>
  );
}
