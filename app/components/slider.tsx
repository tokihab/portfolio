"use client";
import { useState } from "react";

export default function Slider({ slides }: { slides: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="border-2 border-dark bg-beige shadow-brutal flex flex-col h-full">
      <div className="grow flex items-center justify-center p-4 bg-offWhite border-b-2 border-dark min-h-75">
        {/* Placeholder rendering - replace img src with actual slide paths later */}
        <img src={slides[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="max-h-full object-contain" />
      </div>
      <div className="flex justify-between items-center p-3 font-space font-bold bg-beige">
        <button onClick={prevSlide} className="px-4 py-1 border-2 border-dark hover:bg-dark hover:text-offWhite transition-colors">
          {"< PREV"}
        </button>
        <span className="text-sm">{currentIndex + 1} / {slides.length}</span>
        <button onClick={nextSlide} className="px-4 py-1 border-2 border-dark hover:bg-dark hover:text-offWhite transition-colors">
          {"NEXT >"}
        </button>
      </div>
    </div>
  );
}