import { Hero } from '@/components/sections/Hero';
import { TheSecret } from '@/components/sections/TheSecret';
import { Origin } from '@/components/sections/Origin';
import { ProductReveal } from '@/components/sections/ProductReveal';
import { ComingSoon } from '@/components/sections/ComingSoon';
import { LeadCapture } from '@/components/sections/LeadCapture';
import { Footer } from '@/components/sections/Footer';
import { BrandSeal } from '@/components/ui/BrandSeal';

export default function Home() {
  return (
    <>
      <BrandSeal />
      <div className="fixed top-0 left-0 right-0 h-1 bg-[var(--color-roast-espresso)] overflow-hidden z-[60]">
        <div className="h-full bg-[var(--color-roast-amber)] w-[200%] md:w-[150%] xl:w-1/3 animate-marquee" />
      </div>

      <main className="bg-[var(--color-roast-black)] min-h-screen w-full flex flex-col xl:grid xl:grid-cols-12 relative">
        {/* Vertical Vanishing Divider */}
        <div className="absolute left-[calc((100%/12)*7)] top-0 bottom-0 v-divider-vanishing hidden xl:block z-50 opacity-50" />

        {/* Left Column */}
        <section className="xl:col-span-7 flex flex-col relative">
          <Hero />
          <Origin />
          <ProductReveal />
        </section>
        
        {/* Right Column */}
        <section className="xl:col-span-5 flex flex-col bg-[var(--color-roast-black)] relative">
          <TheSecret />
          <LeadCapture />
          <ComingSoon />
          <Footer />
        </section>
      </main>
    </>
  );
}
