import Link from 'next/link';
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-bgWhite text-dark font-mono antialiased min-h-screen p-2 md:p-8">
        
        {/* The Master Archive Frame */}
        <div className="max-w-6xl mx-auto w-full border-2 border-dark shadow-brutal bg-bgWhite flex flex-col">
          
          {/* Top Banner Cover Photo */}
          <div className="h-32 md:h-64 w-full border-b-2 border-dark bg-beige relative overflow-hidden shrink-0">
             <img 
               src="/cover.png" 
               alt="Archive Banner" 
               className="w-full h-full object-cover" 
             />
             <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                <h1 className="text-4xl md:text-8xl font-space font-extrabold text-bgWhite drop-shadow-[4px_4px_0px_#4A3728] uppercase tracking-tighter">
                  Toni Ihab
                </h1>
             </div>
          </div>

          {/* Grid Navigation */}
          <nav className="grid grid-cols-2 md:grid-cols-4 border-b-2 border-dark text-center font-space font-bold uppercase text-xs md:text-sm bg-bgWhite">
            <Link href="/" className="py-3 hover:bg-beige transition-colors border-b-2 md:border-b-0 border-r-2 md:border-r-2 border-dark">The Hub</Link>
            <Link href="/about" className="py-3 hover:bg-beige transition-colors border-b-2 md:border-b-0 md:border-r-2 border-dark">Diary / About</Link>
            <Link href="/projects" className="py-3 hover:bg-beige transition-colors border-r-2 md:border-r-2 border-dark">Project Log</Link>
            <Link href="/contact" className="py-3 hover:bg-beige transition-colors">Comms</Link>
          </nav>
          
          {/* Main Content */}
          <main className="w-full grow overflow-x-hidden">
            {children}
          </main>

        </div>
      </body>
    </html>
  );
}