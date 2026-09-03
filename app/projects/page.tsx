"use client";
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: "MASRISENSE",
      desc: "Curated MASRISET and continued MLR pretraining on MASRIBERTv3. Evaluated multi-task emotion, sentiment, and sarcasm detection.",
      stack: ["PyTorch", "Hugging Face", "Transformers", "Scikit-Learn"]
    },
    {
      title: "KALAMNA'S VOICE",
      desc: "Ultra-low-latency WebRTC STT-LLM-TTS pipeline. Optimized inference latency for real-time conversations using asynchronous VAD.",
      stack: ["FastAPI", "Pipecat", "LiveKit", "WebSockets"]
    },
    {
      title: "MEDICAL X-RAY CAPTION",
      desc: "Dual-model system comparing custom CNN encoder vs ResNet with Bahdanau Attention mechanism for medical image analysis.",
      stack: ["TensorFlow", "Keras", "Attention Mechanisms"]
    },
    {
      title: "3-DOF ROBOTIC MANIPULATOR",
      desc: "SerialLink model with Denavit-Hartenberg parameters; validated reachability and captured automated motion data.",
      stack: ["MATLAB", "Robotics Toolbox", "Kinematics"]
    }
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="p-6 md:p-8 flex flex-col h-full bg-offWhite">
      
      <h2 className="text-3xl font-space font-bold inline-block border-2 border-dark bg-dark text-beige px-6 py-2 mb-10 shadow-brutal uppercase self-start">
        Project Archive
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, i) => (
          <div key={i} className="bg-bgWhite border-2 border-dark p-5 shadow-[4px_4px_0px_#4A3728] flex flex-col justify-between hover:bg-beige transition-colors">
            <div>
              <h3 className="font-space font-bold text-xl uppercase mb-3 border-b-2 border-dark pb-2">{proj.title}</h3>
              <p className="text-sm font-medium mb-6 leading-relaxed">{proj.desc}</p>
            </div>
            <div>
              <p className="text-[10px] font-mono font-bold uppercase mb-2 text-gray-500">Architecture / Stack:</p>
              <div className="flex flex-wrap gap-2">
                {proj.stack.map(tech => (
                  <span key={tech} className="border-2 border-dark bg-bgWhite px-2 py-1 text-xs font-mono font-bold">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

    </motion.div>
  );
}