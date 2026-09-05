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
      
      {/* 1. Intro Header */}
      <div className="pt-8 pb-6 text-center bg-offWhite">
        <h2 className="text-2xl md:text-3xl font-space font-bold inline-block border-2 border-dark bg-bgWhite px-6 py-2 shadow-brutal-sm uppercase">AI Developer</h2>
      </div>

      {/* 2. Short Description */}
      <div className="py-6 px-8 text-center bg-offWhite">
        <p className="font-medium text-sm md:text-base leading-relaxed max-w-lg mx-auto italic">
          "Bringing AI to life in real software, from training models to building smart, working agents."
        </p>
      </div>

      {/* 3. HIGHLIGHTS Image Break */}
      <div className="h-24 md:h-32 w-full border-y-2 border-dark relative overflow-hidden bg-beige">
         <img src="/cover.png" alt="Highlights Banner" className="w-full h-full object-cover object-bottom" loading="lazy" />
         <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
            <h2 className="text-3xl md:text-5xl font-space font-extrabold text-bgWhite drop-shadow-[3px_3px_0px_#4A3728] uppercase tracking-widest">
              Highlights
            </h2>
         </div>
      </div>

      {/* Section 1: MASRISENSE */}
      <div className="p-6 md:p-8 bg-bgWhite flex flex-col">
        <h3 className="font-space font-bold uppercase text-xl md:text-2xl mb-6 border-b-2 border-dark pb-2">MASRISENSE: KALAMNA's Text Analysis on Egyptian Arabic Dialect</h3>
        
        {/* FIXED MOBILE WRAPPER: 600px tall on mobile, aspect-video on desktop */}
        <div className="w-full h-[600px] lg:h-auto lg:aspect-video border-2 border-dark bg-dark shadow-brutal-sm mb-6">
          <iframe 
            src="https://t0kii-tamasriberts.hf.space" 
            className="w-full h-full border-0" 
            title="Gradio Text Analysis"
            loading="lazy"
          ></iframe>
        </div>
        
        <div className="w-full h-100 mb-6">
          <Slider slides={textAnalysisSlides} />
        </div>
        <ul className="text-sm font-bold border-l-4 border-dark pl-4 mt-2 bg-beige p-4 border-2 list-disc list-inside space-y-2">
          <li>Leverages a fine-tuned MASRIBERTv4 model + Egyptian Arabic Fasttext Vectors to execute multi-task sentiment, and sarcasm detection on Egyptian Arabic text</li>
          <li>The end goal is pinpointing urgent/escalating messages inside customer service exchange with our RAG powered AI agent</li>
          <li>Used alongside Tone detection using rule based combination for voice conversations</li>
          <li>Currently F1 Score is 80% Average between both heads. quite high for a niche dialect but still a blind spot exists in deadpan sarcasm. limited by the available training data.</li>
        </ul>
      </div>

      {/* Section 2: KALAMNA */}
      <div className="p-6 md:p-8 bg-offWhite flex flex-col">
        <h3 className="font-space font-bold uppercase text-xl md:text-2xl mb-6 border-b-2 border-dark pb-2">KALAMNA Egyptian dialect cs voice agent</h3>
        
        {/* FIXED MOBILE WRAPPER: Responsive heights for smaller screens before snapping to aspect-video */}
        <div className="w-full h-[250px] sm:h-[350px] md:aspect-video border-2 border-dark bg-dark shadow-brutal-sm mb-6 relative">
           <iframe 
            className="absolute top-0 left-0 w-full h-full" 
            src="https://www.youtube.com/embed/XhfqIOjIs9w" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        
        <div className="w-full h-100 mb-6">
          <Slider slides={voicePipelineSlides} />
        </div>
        <ul className="text-sm font-bold border-l-4 border-dark pl-4 mt-2 bg-beige p-4 border-2 list-disc list-inside space-y-3">
          <li>Ultra-low-latency WebRTC pipeline integrating LiveKit's infrastructure with Pipecat orchestration for real-time STT to LLM to TTS processing.</li>
          <li>Hooked up with MASRISENSE for sentiment and sarcasm detection, and a rule-based tone detection system to provide a full-fledged AI agent experience in Egyptian Arabic dialect.</li>
          <li>Alongside MASRISENSE integration, its an RAG powered customer support agent, capable of answering questions and providing information from a knowledge base in real-time, with the ability to handle multiple users simultaneously.</li>
          <li>In the demonstration above you will find very high latency issues. thats because i choose a higher quality model not present in any normal model provider. so i decided to host it into a colab notebook and connected it through an ngrok api endpoint to my pipecat pipeline due to hardware limitations.</li>
        </ul>
      </div>
      
    </motion.div>
  );
}