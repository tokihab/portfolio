import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import ClientLayout from './ClientLayout';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

const baseUrl = 'https://portfolio-six-pied-61a03qtk3t.vercel.app';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Toni Ihab | AI Developer',
  description: 'Portfolio of Toni Ihab, an AI Developer specializing in NLP, Egyptian Arabic text analysis (MASRISENSE), and real-time voice agents.',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  openGraph: {
    title: 'Toni Ihab | AI Developer',
    description: 'Bringing AI to life in real software, from training models to building smart, working agents.',
    url: baseUrl,
    siteName: 'Toni Ihab Portfolio',
    images: [
      {
        url: '/cover.png', 
        width: 1200,
        height: 630,
        alt: 'Toni Ihab - AI Developer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Toni Ihab | AI Developer',
    description: 'Bringing AI to life in real software, from training models to building smart, working agents.',
    images: ['/cover.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-beige text-dark font-mono antialiased min-h-screen selection:bg-dark selection:text-beige">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}