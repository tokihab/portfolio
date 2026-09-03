"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Slider({ slides }: { slides: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () => setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <div className="relative w-full h-full border-2 border-dark bg-beige flex flex-col overflow-hidden group">
      
      {/* Image Container */}
      <div className="relative flex-grow h-[250px] md:h-[400px] bg-beige w-full overflow-hidden p-2">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={slides[currentIndex]}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-contain drop-shadow-md"
            alt={`Slide ${currentIndex + 1}`}
          />
        </AnimatePresence>
      </div>

      {/* Retro OS Controls */}
      <div className="flex justify-between items-center bg-offWhite border-t-2 border-dark p-2">
         <button onClick={prevSlide} className="px-3 py-1 border-2 border-t-bgWhite border-l-bgWhite border-b-dark border-r-dark bg-beige hover:bg-offWhite active:border-t-dark active:border-l-dark active:border-b-bgWhite active:border-r-bgWhite text-xs font-bold font-space uppercase flex items-center gap-1 transition-all">
           <ChevronLeft size={16} strokeWidth={3}/> Prev
         </button>
         
         <span className="text-xs font-mono font-bold bg-bgWhite border-2 border-dark px-3 py-1">
           {currentIndex + 1} / {slides.length}
         </span>
         
         <button onClick={nextSlide} className="px-3 py-1 border-2 border-t-bgWhite border-l-bgWhite border-b-dark border-r-dark bg-beige hover:bg-offWhite active:border-t-dark active:border-l-dark active:border-b-bgWhite active:border-r-bgWhite text-xs font-bold font-space uppercase flex items-center gap-1 transition-all">
           Next <ChevronRight size={16} strokeWidth={3}/>
         </button>
      </div>
    </div>
  );
}