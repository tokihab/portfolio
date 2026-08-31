import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-16 py-10">
      {/* Hero Section */}
      <section className="space-y-6">
        <h1 className="text-5xl font-extrabold tracking-tight">Toni Ihab</h1>
        <h2 className="text-2xl text-gray-600">AI Developer</h2>
        <p className="text-lg max-w-2xl text-gray-700">
          Building intelligent systems, from natural language processing to real-time pipelines and cloud infrastructure.
        </p>
        <div className="flex gap-4 pt-4">
          <a href="/cv.pdf" target="_blank" className="bg-black text-white px-5 py-2 rounded-md font-medium hover:bg-gray-800">View CV</a>
          <a href="https://calendly.com/tony0100512-cs" target="_blank" className="border border-black px-5 py-2 rounded-md font-medium hover:bg-gray-100">Book a Call</a>
          <a href="https://github.com/tokihab" target="_blank" className="text-gray-600 hover:text-black px-2 py-2">GitHub</a>
          <a href="https://www.linkedin.com/in/toni-ihab/" target="_blank" className="text-gray-600 hover:text-black px-2 py-2">LinkedIn</a>
        </div>
      </section>

      {/* Highlight 1: Gradio Text Analysis */}
      <section className="space-y-6">
        <h3 className="text-3xl font-bold border-b pb-2">Live Text Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="h-[500px] border rounded-lg overflow-hidden shadow-sm bg-white">
            <iframe 
              src="https://huggingface.co/spaces/T0KII/taMASRIBERTs" 
              className="w-full h-full border-0"
              title="Gradio Text Analysis"
            ></iframe>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Behind the Architecture</h4>
            <img src="/text-slide.png" alt="Architecture Slide" className="border rounded-lg shadow-sm w-full" />
            <p className="text-gray-600">
              This space leverages a fine-tuned MASRIBERTv3 model to execute multi-task emotion, sentiment, and sarcasm detection on Egyptian Arabic text.
            </p>
          </div>
        </div>
      </section>

      {/* Highlight 2: Voice Pipeline */}
      <section className="space-y-6">
        <h3 className="text-3xl font-bold border-b pb-2">Real-Time Voice Pipeline</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border rounded-lg overflow-hidden shadow-sm bg-black flex items-center">
            <video src="/voice-demo.mp4" controls className="w-full h-auto"></video>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Pipeline Architecture</h4>
            <img src="/voice-slide.png" alt="Voice Pipeline Slide" className="border rounded-lg shadow-sm w-full" />
            <p className="text-gray-600">
              An ultra-low-latency WebRTC pipeline integrating LiveKit's infrastructure with Pipecat orchestration for real-time STT to LLM to TTS processing.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}