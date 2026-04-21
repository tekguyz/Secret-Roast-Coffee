import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans, Space_Mono } from 'next/font/google';
import './globals.css';
import { GrainOverlay } from '@/components/ui/GrainOverlay';

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

export const metadata: Metadata = {
  metadataBase: new URL('https://secretroastcoffee.com'),
  title: 'Secret Roast Coffee — Coming Soon',
  description: 'Your daily ritual, our hidden craft. A specialty coffee roastery coming soon to Guatemala City.',
  openGraph: {
    title: 'Secret Roast Coffee',
    description: 'The secret is in the roast.',
    url: 'https://secretroastcoffee.com',
    siteName: 'Secret Roast Coffee',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Secret Roast Coffee — Coming Soon',
    description: 'The secret is in the roast.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
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
