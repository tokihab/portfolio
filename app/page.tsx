import React from 'react';
import Slider from './components/slider';

// Updated Stacked Retro Button Component using custom PNGs
const RetroStackButton = ({ href, label, iconSrc }: { href: string, label: string, iconSrc: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center gap-4 bg-beige border-2 border-t-bgWhite border-l-bgWhite border-b-dark border-r-dark px-4 py-3 font-space uppercase text-sm font-bold text-dark hover:bg-offWhite active:border-t-dark active:border-l-dark active:border-b-bgWhite active:border-r-bgWhite active:translate-y-0.5 transition-all"
  >
    {/* Using your uploaded PNGs with a fixed size to keep the button aligned */}
    <img src={iconSrc} alt={`${label} icon`} className="w-6 h-6 object-contain" />
    <span>{label}</span>
  </a>
);

export default function Home() {
  const textAnalysisSlides = ["https://placehold.co/600x400/FCFCFA/4A3728?text=SLIDE+1", "https://placehold.co/600x400/FCFCFA/4A3728?text=SLIDE+2"];
  const voicePipelineSlides = ["https://placehold.co/600x400/FCFCFA/4A3728?text=SLIDE+1", "https://placehold.co/600x400/FCFCFA/4A3728?text=SLIDE+2"];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-dark">
      
      {/* ================= LEFT COLUMN ================= */}
      <aside className="bg-bgWhite flex flex-col divide-y-2 divide-dark order-2 lg:order-1">
        
        {/* 1. Link Stack (Underneath each other using your custom PNGs) */}
        <div className="p-4 bg-offWhite text-center">
          <h3 className="font-space font-bold uppercase mb-4 border-b-2 border-dark pb-1 text-sm">Link Me:</h3>
          <div className="flex flex-col gap-3">
            <RetroStackButton href="https://github.com/tokihab" iconSrc="/github.png" label="GitHub" />
            <RetroStackButton href="https://www.linkedin.com/in/toni-ihab/" iconSrc="/linkedin.png" label="LinkedIn" />
            <RetroStackButton href="/cv.pdf" iconSrc="/cv.png" label="CV / Resume" />
          </div>
        </div>

        {/* 2. Profile Image & Audit Info */}
        <div className="p-4 text-center bg-beige">
          <h3 className="font-space font-bold uppercase mb-3 text-sm border-b-2 border-dark pb-1">Toni (Me)</h3>
          <div className="border-2 border-dark bg-bgWhite mb-4 shadow-[4px_4px_0px_#4A3728] p-1">
            <img 
              src="/pp.png" 
              alt="Toni Ihab" 
              className="w-full h-auto object-cover" 
            />
          </div>
          <div className="text-xs font-mono font-bold text-left space-y-1 bg-offWhite border-2 border-dark p-2">
            <p>NAME: Toni Ihab</p>
            <p>LOC: Roxy, Heliopolis[cite: 2]</p>
            <p>CITY: Cairo, Egypt</p>
          </div>
        </div>

        {/* 3. Clickable Retro Calendar */}
        <a href="https://calendly.com/tony0100512-cs" target="_blank" className="block p-3 bg-offWhite hover:bg-beige transition-colors cursor-pointer group">
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

        {/* 4. Status/Changelog */}
        <div className="p-4 bg-beige text-xs font-mono font-bold space-y-3 h-full">
          <h3 className="font-space uppercase border-b-2 border-dark pb-1 mb-2 text-sm">Status Log:</h3>
          <p className="flex items-start gap-2">
            <span className="shrink-0 text-lg leading-none">▤</span> 
            Deploying MASRISENSE.
          </p>
          <p className="flex items-start gap-2">
            <span className="shrink-0 text-lg leading-none">▤</span> 
            Building real-time WebRTC agents.
          </p>
          <p className="flex items-start gap-2">
            <span className="shrink-0 text-lg leading-none">▤</span> 
            Completing FlyRank internship portfolio.
          </p>
        </div>
      </aside>

      {/* ================= RIGHT COLUMN (MAIN FEED) ================= */}
      <section className="bg-offWhite flex flex-col divide-y-2 divide-dark order-1 lg:order-2">
        
        {/* Intro Section */}
        <div className="p-6 md:p-8 text-center bg-bgWhite">
          <h2 className="text-2xl md:text-3xl font-space font-bold inline-block border-2 border-dark bg-beige px-4 py-1 mb-4 shadow-brutal-sm uppercase">AI Developer</h2>
          <p className="font-medium text-sm md:text-base leading-relaxed max-w-lg mx-auto italic">
            "I bring AI to life in real software, from training data to building smart, working agents."
          </p>
        </div>

        {/* Live Text Analysis */}
        <div className="p-4 md:p-6 bg-offWhite flex flex-col">
          <h3 className="font-space font-bold uppercase text-xl md:text-2xl mb-4 border-b-2 border-dark pb-2">
            Royal Decree: Text Analysis
          </h3>
          <div className="w-full aspect-square md:aspect-video border-2 border-dark bg-bgWhite shadow-brutal-sm mb-6">
            <iframe 
              src="https://t0kii-tamasriberts.hf.space" 
              className="w-full h-full border-0"
              title="Gradio Text Analysis"
            ></iframe>
          </div>
          
          <div className="w-full h-87.5 mb-6">
            <Slider slides={textAnalysisSlides} />
          </div>
          
          <p className="text-sm font-bold border-l-4 border-dark pl-4 mt-4">
            Leverages a fine-tuned MASRIBERTv3 model to execute multi-task emotion, sentiment, and sarcasm detection on Egyptian Arabic text.
          </p>
        </div>

        {/* Voice Pipeline */}
        <div className="p-4 md:p-6 bg-beige flex flex-col h-full">
          <h3 className="font-space font-bold uppercase text-xl md:text-2xl mb-4 border-b-2 border-dark pb-2">
            Royal Decree: Voice Pipeline
          </h3>
          <div className="w-full aspect-video border-2 border-dark bg-bgWhite shadow-brutal-sm mb-6 relative">
             <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
          </div>
          
          <div className="w-full h-87.5 mb-6">
            <Slider slides={voicePipelineSlides} />
          </div>

          <p className="text-sm font-bold border-l-4 border-dark pl-4 mt-4">
            Ultra-low-latency WebRTC pipeline integrating LiveKit's infrastructure with Pipecat orchestration for real-time STT to LLM to TTS processing.
          </p>
        </div>
      </section>

    </div>
  );
}