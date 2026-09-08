import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Montserrat } from 'next/font/google';
import '../styles/tailwind.css';
import { Toaster } from 'sonner';
import CookieConsent from '@/components/layout/CookieConsent';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'CosmoTrace — Pharmaceutical Warehousing & Compliance Operations',
  description:
    'CosmoTrace CPO delivers pharmaceutical aggregation, compliant warehousing, and track-and-trace operations for UAE & GCC markets from our Free Zone facility.',
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className={montserrat.className}>
        {children}
        <CookieConsent />
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}