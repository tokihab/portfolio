export default function Projects() {
  const projects = [
    {
      title: "MASRISENSE",
      description: "Curated MASRISET (4.5M+ rows) and continued MLM pretraining on MASRIBERTv3. Evaluated multi-task emotion/sarcasm/sentiment detection and built a multi-scale acoustic model.",
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
      title: "Movie Recommender",
      description: "Built collaborative filtering and content-based recommendation system for personalized movie suggestions.",
      skills: ["NLP", "Machine Learning", "Python"]
    },
    {
      title: "3-DOF RPR Robotic Manipulator",
      description: "SerialLink model with Denavit-Hartenberg parameters; validated reachability and captured automated motion data.",
      skills: ["MATLAB", "Robotics Toolbox"]
    },
    {
      title: "Image Processing Toolkit",
      description: "30+ functions for spatial/frequency domain operations with a GUI application enabling real-time manipulation.",
      skills: ["MATLAB"]
    }
  ];

  return (
    <div className="py-10">
      <h1 className="text-4xl font-bold mb-8">All Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <div key={idx} className="border p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-semibold mb-2">{proj.title}</h2>
            <p className="text-gray-700 mb-4">{proj.description}</p>
            <div className="flex flex-wrap gap-2">
              {proj.skills.map((skill, sIdx) => (
                <span key={sIdx} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded font-medium">
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