import './globals.css'
import Link from 'next/link'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 font-sans min-h-screen flex flex-col">
        <nav className="bg-white shadow-sm py-4">
          <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
            <Link href="/" className="font-bold text-xl tracking-tight">Toni Ihab</Link>
            <div className="space-x-6 text-sm font-medium">
              <Link href="/about" className="hover:text-blue-600 transition">About</Link>
              <Link href="/projects" className="hover:text-blue-600 transition">Projects</Link>
              <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
            </div>
          </div>
        </nav>
        <main className="flex-grow">{children}</main>
        <footer className="py-6 text-center text-sm text-slate-500 border-t mt-12">
          © 2026 Toni Ihab Youssef. Deployed on Vercel.
        </footer>
      </body>
    </html>
  )
}