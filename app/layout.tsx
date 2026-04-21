import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans, Space_Mono } from 'next/font/google';
import './globals.css';
import { GrainOverlay } from '@/components/ui/GrainOverlay';
import { content } from '@/config/site-content';

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
});

// Default to Spanish metadata for SEO/Crawlability as per brand location
const t = content.es.metadata;

export const metadata: Metadata = {
  metadataBase: new URL('https://secretroastcoffee.com'),
  title: t.title,
  description: t.description,
  openGraph: {
    title: t.ogTitle,
    description: t.ogDescription,
    url: 'https://secretroastcoffee.com',
    siteName: 'Secret Roast Coffee',
    images: [
      { 
        url: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1200&h=630&auto=format&fit=crop', 
        width: 1200, 
        height: 630,
        alt: 'Secret Roast Coffee - Premium Guatemalan Highlands'
      }
    ],
    locale: 'es_GT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: t.title,
    description: t.ogDescription,
    images: ['https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1200&h=630&auto=format&fit=crop'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} ${spaceMono.variable}`}>
      <body className="antialiased font-sans" suppressHydrationWarning>
        <GrainOverlay />
        {children}
      </body>
    </html>
  );
}
