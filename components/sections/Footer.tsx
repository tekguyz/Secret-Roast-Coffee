import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="px-6 sm:px-12 py-6 border-none flex justify-between items-center bg-[var(--color-roast-black)] relative">
      {/* Top vanishing divider */}
      <div className="absolute top-0 left-0 right-0 h-divider-vanishing opacity-30" />
      
      <p className="font-mono text-[10px] text-[var(--color-roast-fog)] uppercase tracking-widest hidden sm:block">
        © {new Date().getFullYear()} Secret Roast
      </p>
      
      <div className="flex gap-6">
        <a href={process.env.NEXT_PUBLIC_INSTAGRAM_URL || "#"} target="_blank" rel="noopener noreferrer" className="text-[10px] font-mono text-[var(--color-roast-fog)] uppercase tracking-widest hover:text-[var(--color-roast-amber)] transition-colors flex items-center space-x-1">
          <span>Instagram</span>
          <ArrowUpRight className="w-3 h-3 stroke-thin" />
        </a>
        <a href="#" className="font-mono text-[10px] text-[var(--color-roast-fog)] uppercase tracking-widest hover:text-[var(--color-roast-amber)] transition-colors">
          Privacy
        </a>
      </div>
    </footer>
  );
}
