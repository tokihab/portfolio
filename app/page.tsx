import Link from 'next/link';
import Slider from './components/slider';

export default function Home() {
  // Placeholder slide arrays
  const textAnalysisSlides = ["/api/placeholder/600/400", "/api/placeholder/600/400"];
  const voicePipelineSlides = ["/api/placeholder/600/400", "/api/placeholder/600/400"];

  return (
    <div className="space-y-24 py-12">
      {/* Hero Section */}
      <section className="space-y-6 max-w-4xl">
        <div className="font-bold text-sm mb-2">{">"} system.init()</div>
        <h1 className="text-6xl md:text-8xl font-space font-extrabold tracking-tighter uppercase">
          Toni Ihab
        </h1>
        <h2 className="text-3xl font-space font-bold bg-dark text-beige inline-block px-4 py-1">AI Developer</h2>
        <p className="text-xl text-dark leading-relaxed font-medium mt-4">
          I bring AI to life in real software, from training data to building smart, working agents.
        </p>
        <div className="flex flex-wrap gap-4 pt-8">
          <a href="/cv.pdf" target="_blank" className="bg-beige text-dark px-6 py-3 font-space font-bold border-2 border-dark shadow-brutal-sm hover:translate-y-1 hover:shadow-none transition-all">View CV</a>
          <a href="https://calendly.com/tony0100512-cs" target="_blank" className="bg-dark text-beige px-6 py-3 font-space font-bold border-2 border-dark shadow-brutal-sm hover:translate-y-1 hover:shadow-none transition-all">Book a Call</a>
          <a href="https://github.com/tokihab" target="_blank" className="bg-offWhite text-dark px-6 py-3 border-2 border-dark font-space font-bold shadow-brutal-sm hover:translate-y-1 hover:shadow-none transition-all">GitHub</a>
          <a href="https://www.linkedin.com/in/toni-ihab/" target="_blank" className="bg-offWhite text-dark px-6 py-3 border-2 border-dark font-space font-bold shadow-brutal-sm hover:translate-y-1 hover:shadow-none transition-all">LinkedIn</a>
        </div>
      </section>

      {/* Highlight 1: Text Analysis */}
      <section className="space-y-8 bg-offWhite border-2 border-dark p-8 shadow-brutal">
        <h3 className="text-4xl font-space font-bold uppercase border-b-2 border-dark pb-4">
          {">"} Live Text Analysis
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="h-[500px] border-2 border-dark bg-bgWhite shadow-brutal-sm">
            <iframe 
              src="https://t0kii-tamasriberts.hf.space" 
              className="w-full h-full border-0"
              title="Gradio Text Analysis"
            ></iframe>
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="text-2xl font-space font-bold bg-beige border-2 border-dark px-4 py-2 inline-block shadow-brutal-sm w-fit">Architecture</h4>
            <div className="flex-grow">
              <Slider slides={textAnalysisSlides} />
            </div>
            <p className="text-sm font-bold border-l-4 border-dark pl-4 py-2">
              Leverages a fine-tuned MASRIBERTv3 model to execute multi-task emotion, sentiment, and sarcasm detection on Egyptian Arabic text.
            </p>
          </div>
        </div>
      </section>

      {/* Highlight 2: Voice Pipeline */}
      <section className="space-y-8 bg-beige border-2 border-dark p-8 shadow-brutal">
        <h3 className="text-4xl font-space font-bold uppercase border-b-2 border-dark pb-4">
          {">"} Real-Time Voice Pipeline
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="border-2 border-dark bg-bgWhite shadow-brutal-sm flex items-center justify-center aspect-video relative">
             {/* YouTube Placeholder */}
             <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://youtu.be/XhfqIOjIs9w?si=_kvYeNbS6yb7bjEf" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="text-2xl font-space font-bold bg-offWhite border-2 border-dark px-4 py-2 inline-block shadow-brutal-sm w-fit">Pipeline Flow</h4>
            <div className="flex-grow">
              <Slider slides={voicePipelineSlides} />
            </div>
            <p className="text-sm font-bold border-l-4 border-dark pl-4 py-2">
              Ultra-low-latency WebRTC pipeline integrating LiveKit's infrastructure with Pipecat orchestration for real-time STT to LLM to TTS processing.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}