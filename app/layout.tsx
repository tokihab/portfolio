import type { Metadata } from 'next';
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import ClientLayout from './ClientLayout';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Toni Ihab | AI Developer',
  description: 'Portfolio of Toni Ihab, an AI Developer specializing in NLP, Egyptian Arabic text analysis (MASRISENSE), and real-time voice agents.',
  openGraph: {
    title: 'Toni Ihab | AI Developer',
    description: 'Bringing AI to life in real software, from training models to building smart, working agents.',
    url: 'https://toniihab.vercel.app',
    siteName: 'Toni Ihab Portfolio',
    images: [
      {
        url: 'https://toniihab.vercel.app/cover.png', 
        width: 1200,
        height: 630,
        alt: 'Toni Ihab - AI Developer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
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