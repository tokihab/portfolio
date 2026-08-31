export default function Projects() {
  const projects = [
    {
      title: "MASRISENSE",
      description: "Curated MASRISET (4.5M+ rows) and continued MLM pretraining on MASRIBERTv3 (perplexity: 16). Evaluated multi-task emotion, sarcasm, and sentiment detection and built a multi-scale acoustic model.",
      skills: ["PyTorch", "Hugging Face", "Transformers", "CNN + BiLSTM"]
    },
    {
      title: "Kalamna's Voice",
      description: "Ultra-low-latency WebRTC STT-LLM-TTS pipeline. Optimized inference latency for real-time conversations using asynchronous frame VAD handling and deployed via FastAPI.",
      skills: ["FastAPI", "Pipecat", "LiveKit", "WebSockets"]
    },
    {
      title: "Medical X-Ray Caption Generator",
      description: "Dual-model system comparing custom CNN encoder vs ResNet with Bahdanau Attention mechanism for medical image analysis.",
      skills: ["TensorFlow", "Keras", "Attention"]
    },
    {
      title: "3-DOF RPR Robotic Manipulator",
      description: "SerialLink model with Denavit-Hartenberg parameters; validated reachability and captured automated motion data for further analysis.",
      skills: ["MATLAB", "Robotics Toolbox"]
    }
  ];

  return (
    <div className="py-12 space-y-12">
      <h1 className="text-6xl font-space font-extrabold uppercase bg-dark text-beige inline-block px-6 py-2 shadow-brutal">
        Project Archive
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((proj, idx) => (
          <div key={idx} className="border-2 border-dark p-8 bg-offWhite shadow-brutal flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-space font-bold mb-4 uppercase">{proj.title}</h2>
              <p className="text-dark font-medium mb-8 leading-relaxed">{proj.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 border-t-2 border-dark pt-4">
              <span className="w-full text-xs font-bold uppercase mb-1">Architecture / Stack:</span>
              {proj.skills.map((skill, sIdx) => (
                <span key={sIdx} className="bg-beige text-dark text-sm px-3 py-1 font-bold border-2 border-dark shadow-[2px_2px_0px_0px_#181818]">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}