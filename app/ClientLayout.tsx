"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Analytics } from "@vercel/analytics/react";

const DesktopIcon = ({ href, iconSrc, label }: { href: string, iconSrc: string, label: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group cursor-pointer">
    <div className="w-14 h-14 bg-beige border-2 border-t-bgWhite border-l-bgWhite border-r-dark border-b-dark p-2 group-active:border-t-dark group-active:border-l-dark group-active:border-r-bgWhite group-active:border-b-bgWhite transition-all">
      <img src={iconSrc} alt={label} className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all" loading="lazy" />
    </div>
    <span className="text-[10px] font-mono font-bold bg-transparent px-1 border border-transparent group-hover:bg-dark group-hover:text-beige group-hover:border-dark transition-all">
      {label}
    </span>
  </a>
);

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [shakeKey, setShakeKey] = useState(0);

  const handleHireClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const calendarEl = document.getElementById('calendar-widget');
    if (calendarEl) {
      calendarEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => {
        setShakeKey(prev => prev + 1);
      }, 350);
    }
  };

  return (
    <>
      {/* SOLID STICKY MASK */}
      <div className="sticky top-0 z-50 bg-beige w-full pt-4 md:pt-8 pb-6">
        <div className="max-w-6xl mx-auto flex flex-col px-4 md:px-8">
          
          {/* HABBO FOLDER TABS */}
          <nav className="flex flex-wrap items-end px-6 gap-2 relative z-10 -mb-1">
            <Link href="/" className="px-5 pt-2 pb-2 mt-2 hover:mt-0 hover:pt-4 bg-dark text-beige rounded-t-xl font-space font-bold uppercase text-xs md:text-sm transition-all">Highlight</Link>
            <Link href="/about" className="px-5 pt-2 pb-2 mt-2 hover:mt-0 hover:pt-4 bg-dark text-beige rounded-t-xl font-space font-bold uppercase text-xs md:text-sm transition-all">About</Link>
            <Link href="/projects" className="px-5 pt-2 pb-2 mt-2 hover:mt-0 hover:pt-4 bg-dark text-beige rounded-t-xl font-space font-bold uppercase text-xs md:text-sm transition-all">Projects</Link>
          </nav>

          {/* BANNER */}
          <div className="h-32 md:h-48 w-full border-4 border-dark bg-beige relative overflow-hidden z-0">
             <img src="/cover.png" alt="Cover" className="w-full h-full object-cover object-top" loading="lazy" />
             <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                <h1 className="text-4xl md:text-7xl font-space font-extrabold text-bgWhite drop-shadow-[4px_4px_0px_#4A3728] uppercase tracking-tighter">
                  Toni Ihab
                </h1>
             </div>
          </div>

        </div>
      </div>

      {/* MAIN CONTENT WRAPPER */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 pb-12 flex flex-col gap-6">
        
        {/* 2-COLUMN FLOATING WIDGET GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 items-start relative z-10">
          
          {/* LEFT SIDEBAR */}
          <aside className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-col gap-5 order-2 lg:order-1">
            
            <a 
              href="#calendar-widget" 
              onClick={handleHireClick}
              className="w-full py-3 px-4 bg-dark text-beige border-2 border-dark font-space font-bold uppercase text-center text-sm shadow-brutal hover:bg-[#5a4331] transition-all sm:col-span-2 lg:col-span-1 cursor-pointer"
            >
              Hire me pls
            </a>

            <div className="bg-bgWhite border-2 border-dark shadow-brutal p-4">
              <h3 className="font-space font-bold uppercase mb-4 border-b-2 border-dark pb-1 text-sm text-center">Link Me</h3>
              <div className="flex justify-around items-start">
                <DesktopIcon href="https://github.com/tokihab" iconSrc="/github.png" label="github.exe" />
                <DesktopIcon href="https://www.linkedin.com/in/toni-ihab/" iconSrc="/linkedin.png" label="linkedin.lnk" />
                <DesktopIcon href="/cv.pdf" iconSrc="/cv.png" label="resume.pdf" />
              </div>
            </div>

            <div className="bg-bgWhite border-2 border-dark shadow-brutal p-4 text-center">
              <h3 className="font-space font-bold uppercase mb-3 text-sm border-b-2 border-dark pb-1">Toni (Me)</h3>
              <div className="border-2 border-dark bg-beige mb-4 p-1">
                <img src="/pp.png" alt="Toni Ihab" className="w-full h-auto object-cover" loading="lazy" />
              </div>
              <div className="text-xs font-mono font-bold text-left space-y-1 bg-offWhite border-2 border-dark p-2">
                <p>NAME: Toni Ihab</p>
                <p>LOC: Roxy, Heliopolis</p>
                <p>CITY: Cairo, Egypt</p>
                <p className="pt-1 border-t border-dark/20 text-blue-900">PH: 01224477633</p>
              </div>
            </div>

            <motion.div
              id="calendar-widget"
              key={shakeKey}
              animate={{ x: shakeKey > 0 ? [0, -8, 8, -8, 8, -4, 4, 0] : 0 }}
              transition={{ duration: 0.4 }}
              className="sm:col-span-2 lg:col-span-1"
            >
              <a href="https://calendly.com/tony0100512-cs" target="_blank" rel="noopener noreferrer" className="block bg-bgWhite border-2 border-dark shadow-brutal p-3 hover:bg-beige transition-colors cursor-pointer group">
                <div className="text-center font-space font-bold border-b-2 border-dark pb-1 mb-2 group-hover:text-blue-700">08 / 2026 (Book Call)</div>
                <div className="grid grid-cols-7 text-xs text-center font-mono font-bold gap-1 mb-1 bg-dark text-beige py-1">
                  <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
                </div>
                <div className="grid grid-cols-7 text-[10px] sm:text-xs text-center font-mono gap-y-2 py-1">
                  <span className="text-gray-400">26</span><span className="text-gray-400">27</span><span className="text-gray-400">28</span><span className="text-gray-400">29</span><span className="text-gray-400">30</span><span className="text-gray-400">31</span><span>1</span>
                  <span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span>
                  <span>9</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span><span>15</span>
                  <span>16</span><span>17</span><span>18</span><span>19</span><span>20</span><span>21</span><span>22</span>
                  <span>23</span><span>24</span><span>25</span><span>26</span><span>27</span><span>28</span><span>29</span>
                  <span>30</span><span className="bg-dark text-beige font-bold">31</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
                </div>
              </a>
            </motion.div>
          </aside>

          {/* RIGHT CONTENT FEED WITH FOOTER */}
          <main className="order-1 lg:order-2 flex flex-col gap-6 overflow-hidden">
            <div className="bg-bgWhite border-2 border-dark shadow-brutal flex flex-col">
              {children}
            </div>

            {/* BRUTALIST FOOTER WITH FLYRANK BADGE */}
            <footer className="bg-dark border-2 border-dark shadow-brutal p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-beige">
              <div className="text-xs font-mono font-bold">
                <p>© 2026 TONI IHAB.</p>
                <p>SYSTEM.STATUS [ONLINE]</p>
              </div>
              <a 
                href="https://aifluency.flyrank.ai/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-105 transition-transform"
              >
                {/* Replace src with the exact badge URL they provided if it differs */}
                <img 
                  src="https://internship-badge.netlify.app/flyrank-badge-light.svg" 
                  alt="FlyRank Certified Graduate" 
                  className="h-12 w-auto [image-rendering:pixelated]" 
                  loading="lazy"
                />
              </a>
            </footer>
          </main>

        </div>
      </div>
      <Analytics />
    </>
  );
}