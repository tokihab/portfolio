import Link from 'next/link';
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-bgWhite text-dark font-mono antialiased flex flex-col min-h-screen">
        {/* Simple Navigation */}
        <nav className="p-6 bg-bgWhite sticky top-0 z-50 border-b-2 border-dark">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <Link href="/" className="font-space font-bold text-2xl tracking-tighter">
              [TI] <span className="text-lg font-mono font-normal ml-2">toni_ihab</span>
            </Link>
            <div className="space-x-8 text-sm font-bold font-space uppercase">
              <Link href="/about" className="hover:underline underline-offset-4 decoration-2">/about</Link>
              <Link href="/projects" className="hover:underline underline-offset-4 decoration-2">/projects</Link>
              <Link href="/contact" className="hover:underline underline-offset-4 decoration-2">/contact</Link>
            </div>
          </div>
        </nav>
        
        {/* Main Content */}
        <main className="max-w-6xl mx-auto p-6 flex-grow w-full">
          {children}
        </main>

        {/* Brutalist Footer */}
        <footer className="border-t-2 border-dark bg-beige p-6 mt-12">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 font-bold text-sm uppercase">
            <p>SYSTEM.STATUS: ONLINE</p>
            <div className="space-x-6">
              <a href="mailto:tony0100512@cs.bnu.edu.eg" className="hover:bg-dark hover:text-offWhite px-2 py-1 transition-colors">EMAIL</a>
              <a href="https://github.com/tokihab" target="_blank" className="hover:bg-dark hover:text-offWhite px-2 py-1 transition-colors">GITHUB</a>
              <a href="https://www.linkedin.com/in/toni-ihab/" target="_blank" className="hover:bg-dark hover:text-offWhite px-2 py-1 transition-colors">LINKEDIN</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}