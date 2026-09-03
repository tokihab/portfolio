"use client";
import React from 'react';
import Slider from './components/slider';
import { motion } from 'framer-motion';

export default function Home() {
  const textAnalysisSlides = [
    "/masrisense/MASISENSE.png", "/masrisense/MASISENSE(1).png", "/masrisense/MASISENSE(2).png",
    "/masrisense/MASISENSE(3).png", "/masrisense/MASISENSE(4).png", "/masrisense/MASISENSE(5).png"
  ];
  
  const voicePipelineSlides = [
    "/vc/livecat.png", "/vc/livecat(1).png", "/vc/livecat(2).png"
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex flex-col divide-y-2 divide-dark h-full">
      
      {/* Intro */}
      <div className="p-8 text-center bg-offWhite">
        <h2 className="text-2xl md:text-3xl font-space font-bold inline-block border-2 border-dark bg-bgWhite px-6 py-2 mb-4 shadow-brutal-sm uppercase">AI Developer</h2>
        <p className="font-medium text-sm md:text-base leading-relaxed max-w-lg mx-auto italic">
          "I bring AI to life in real software, from training data to building smart, working agents."
        </p>
      </div>

      {/* Section 1 */}
      <div className="p-6 md:p-8 bg-bgWhite flex flex-col">
        <h3 className="font-space font-bold uppercase text-xl md:text-2xl mb-6 border-b-2 border-dark pb-2">Royal Decree: Text Analysis</h3>
        <div className="w-full aspect-video border-2 border-dark bg-dark shadow-brutal-sm mb-6">
          <iframe src="https://t0kii-tamasriberts.hf.space" className="w-full h-full border-0" title="Gradio Text Analysis"></iframe>
        </div>
        <div className="w-full h-[400px] mb-6">
          <Slider slides={textAnalysisSlides} />
        </div>
        <p className="text-sm font-bold border-l-4 border-dark pl-4 mt-2 bg-beige p-3 border-2 border-dark">
          Leverages a fine-tuned MASRIBERTv3 model to execute multi-task emotion, sentiment, and sarcasm detection on Egyptian Arabic text.
        </p>
      </div>

      {/* Section 2 */}
      <div className="p-6 md:p-8 bg-offWhite flex flex-col">
        <h3 className="font-space font-bold uppercase text-xl md:text-2xl mb-6 border-b-2 border-dark pb-2">Royal Decree: Voice Pipeline</h3>
        <div className="w-full aspect-video border-2 border-dark bg-dark shadow-brutal-sm mb-6 relative">
           <iframe className="absolute top-0 left-0 w-full h-full" src="https://youtu.be/XhfqIOjIs9w?si=FMf6BsHYrC6f98Uo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div className="w-full h-[400px] mb-6">
          <Slider slides={voicePipelineSlides} />
        </div>
        <p className="text-sm font-bold border-l-4 border-dark pl-4 mt-2 bg-beige p-3 border-2 border-dark">
          Ultra-low-latency WebRTC pipeline integrating LiveKit's infrastructure with Pipecat orchestration for real-time STT to LLM to TTS processing.
        </p>
      </div>
      
    </motion.div>
  );
}