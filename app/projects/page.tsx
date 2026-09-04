"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  description: string;
  image: string;
  bookmarkImage?: string;
  videoId?: string;
  link: string;
  linkText: string;
  githubLink?: string;
}

interface Category {
  id: string;
  title: string;
  projects: Project[];
}

// Organized Project Data mapped to your public folder assets
const categories: Category[] = [
  {
    id: 'ai',
    title: 'AI & Deep Learning',
    projects: [
      {
        id: 'xray',
        title: 'Gen-AI Lungs X-Ray',
        subtitle: 'Medical Image Captioning',
        year: '2025',
        description: 'A Generative AI pipeline designed to automatically generate accurate medical captions for lung X-rays.',
        image: '/xrays.jpg',
        link: 'https://huggingface.co/spaces/T0KII/Gen-AI-Captioning-Lungs-Xrays', 
        linkText: 'Run_Model.exe',
      },
      {
        id: 'masrisense',
        title: 'MASRISENSE',
        subtitle: 'Egyptian Dialect Text Analysis',
        year: '2026',
        description: 'Leverages a fine-tuned MASRIBERTv4 model and Egyptian Arabic Fasttext Vectors to execute multi-task sentiment and sarcasm detection.',
        image: '/masrisense.png', 
        link: 'https://t0kii-tamasriberts.hf.space',
        linkText: 'Run_Model.exe',
      },
      {
        id: 'signature-verification',
        title: 'Signature Verification',
        subtitle: 'Siamese Neural Network',
        year: '2026',
        description: 'A deep learning web application utilizing a Keras Siamese CNN and Hugging Face infrastructure to compare handwriting signatures and flag forgeries.',
        image: '/siamese.png',
        bookmarkImage: '/siamesebookmark.png',
        link: 'https://siamese-signature-similarity.streamlit.app/',
        linkText: 'Launch_App.exe',
        githubLink: 'https://github.com/tokihab/signature-similarity',
      },
      {
        id: 'kalamna',
        title: 'KALAMNA',
        subtitle: 'CS Voice Agent',
        year: '2026',
        description: "Ultra-low-latency WebRTC pipeline integrating LiveKit's infrastructure with Pipecat orchestration for real-time STT to LLM to TTS processing.",
        image: '/livecat.jpg', 
        link: 'https://www.youtube.com/watch?v=XhfqIOjIs9w',
        linkText: 'Play_Video.exe',
      },
      {
        id: 'movie-recommender',
        title: 'Movie Recommender',
        subtitle: 'NLP Sentiment Engine',
        year: '2025',
        description: 'An interactive Streamlit web application that analyzes user sentiment input to provide highly personalized movie recommendations.',
        image: '/reccsys.jpg', 
        link: 'https://movie-sentiment-recommendor.streamlit.app/',
        linkText: 'Launch_App.exe',
        githubLink: 'https://github.com/tokihab/movie-recommendor',
      }
    ]
  },
  {
    id: 'data',
    title: 'Data Analytics & BI',
    projects: [
      {
        id: 'supply-chain',
        title: 'Supply Chain Analysis',
        subtitle: 'Data Visualization',
        year: '2025',
        description: 'Comprehensive supply chain analytics and visualization. Watch the interactive dashboard walkthrough above to explore the data.',
        image: '/supch.jpg',
        videoId: 'FR3fO4Qhd_A', 
        link: 'https://github.com/tokihab/SupplyChainAnalysis',
        linkText: 'View_Repo.exe',
      },
      {
        id: 'fashion',
        title: 'Sustainable Fashion',
        subtitle: 'Data Analysis',
        year: '2025',
        description: 'In-depth analysis of sustainable fashion trends, mapping supply chain metrics to environmental impact.',
        image: '/susfash.jpg',
        bookmarkImage: '/susfashbookmark.jpg',
        videoId: 'u8kylgOKwqE', 
        link: 'https://github.com/tokihab/Sustainable-Fashion-Analysis',
        linkText: 'View_Repo.exe',
      }
    ]
  },
  {
    id: 'software',
    title: 'Software & Engineering',
    projects: [
      {
        id: 'webdev',
        title: 'Tier List',
        subtitle: 'PHP+REACT+SQL+DOTNET',
        year: '2026',
        description: 'A full-stack application for tracking and ranking metrics, featuring an interactive UI and a robust data backend.',
        image: '/tierlist.jpg',
        bookmarkImage: '/tierlistbookmark.png',
        link: 'https://huggingface.co/spaces/T0KII/tierlists-webapp', 
        linkText: 'Launch_App.exe',
      },
      {
        id: 'pong',
        title: 'PONG-BNU',
        subtitle: 'Game Development',
        year: '2024',
        description: 'The classic Pong game rebuilt and optimized with modern programming paradigms for BNU.',
        image: '/pong.jpg',
        bookmarkImage: '/pongbookmark.png',
        link: 'https://github.com/tokihab/PONG-BNU',
        linkText: 'View_Repo.exe',
      },
      {
        id: 'octave',
        title: 'GNU Octave Vision',
        subtitle: 'Image Processing',
        year: '2024',
        description: 'Mathematical image processing and computer vision scripts built entirely within the GNU Octave environment.',
        image: '/GNU.png',
        bookmarkImage: '/GNUbookmark.png',
        link: 'https://github.com/tokihab/image-processing-GNUoctave',
        linkText: 'View_Repo.exe',
      }
    ]
  }
];

export default function Projects() {
  const [openDrawer, setOpenDrawer] = useState<string>(categories[0].id);
  const [activeProject, setActiveProject] = useState<Project>(categories[0].projects[0]);

  const handleToggleDrawer = (categoryId: string) => {
    if (openDrawer !== categoryId) {
      setOpenDrawer(categoryId);
      const category = categories.find((c) => c.id === categoryId);
      if (category) setActiveProject(category.projects[0]);
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="p-6 md:p-8 flex flex-col h-full bg-offWhite min-h-[800px]">
      
      {/* Header */}
      <h2 className="text-3xl font-space font-bold inline-block border-2 border-dark bg-dark text-beige px-6 py-2 shadow-brutal uppercase self-start mb-8">
        Project Archive
      </h2>

      {/* ================= SLIDING DRAWERS ================= */}
      <div className="flex flex-col gap-4 mb-10 w-full max-w-5xl mx-auto">
        {categories.map((category) => {
          const isOpen = openDrawer === category.id;

          return (
            <div key={category.id} className="border-2 border-dark bg-bgWhite shadow-brutal-sm flex flex-col overflow-hidden">
              
              {/* Drawer Handle */}
              <button 
                onClick={() => handleToggleDrawer(category.id)}
                className={`w-full flex justify-between items-center px-6 py-4 font-space font-bold uppercase transition-colors ${
                  isOpen ? 'bg-dark text-beige' : 'hover:bg-beige text-dark'
                }`}
              >
                <span className="text-sm md:text-lg tracking-widest">{category.title}</span>
                <span className="font-mono text-xl">{isOpen ? '[-]' : '[+]'}</span>
              </button>

              {/* Drawer Content (VHS Shelf) */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden bg-beige border-t-2 border-dark"
                  >
                    <div className="w-full flex items-center h-[300px] md:h-[400px] gap-2 md:gap-4 p-4 md:p-6 overflow-x-auto">
                      {category.projects.map((project) => {
                        const isActive = activeProject.id === project.id;

                        return (
                          <motion.div
                            layout
                            key={project.id}
                            onClick={() => setActiveProject(project)}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className={`relative h-full border-2 border-dark overflow-hidden shrink-0 flex flex-col transition-colors duration-300 ${
                              isActive 
                                ? 'w-[240px] sm:w-[320px] md:w-[420px] bg-bgWhite shadow-[6px_6px_0px_#4A3728] cursor-default z-10' 
                                : 'w-10 sm:w-12 md:w-16 bg-dark hover:bg-[#5a4331] cursor-pointer z-0'
                            }`}
                          >
                            {isActive ? (
                              // --- ACTIVE TAPE ---
                              <motion.div 
                                initial={{ opacity: 0 }} 
                                animate={{ opacity: 1 }} 
                                transition={{ delay: 0.15 }}
                                className="w-full h-full relative bg-dark"
                              >
                                {project.videoId ? (
                                  <iframe 
                                    title={project.title}
                                    className="w-full h-full border-0 bg-dark pointer-events-auto filter sepia-[0.3] contrast-125 brightness-90"
                                    src={`https://www.youtube.com/embed/${project.videoId}?rel=0`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen={true}
                                  ></iframe>
                                ) : (
                                  <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover object-center filter sepia-[0.35] contrast-125 brightness-90 saturate-[0.85]"
                                  />
                                )}
                                
                                {/* Brutalist Badge */}
                                <div className="absolute top-4 left-4 bg-bgWhite border-2 border-dark px-2 py-1 text-[10px] font-mono font-bold shadow-brutal-sm z-20 pointer-events-none">
                                  VOL.{project.year}
                                </div>
                              </motion.div>
                            ) : (
                              // --- INACTIVE TAPE SPINE WITH FAINT BOOKMARK ---
                              <div className="w-full h-full flex flex-col items-center justify-between py-4 relative overflow-hidden bg-dark">
                                {project.bookmarkImage && (
                                  <img 
                                    src={project.bookmarkImage} 
                                    alt="" 
                                    className="absolute inset-0 w-full h-full object-cover opacity-25 filter sepia contrast-150 pointer-events-none"
                                  />
                                )}
                                <div className="w-6 h-6 border-2 border-beige flex items-center justify-center text-beige font-mono text-[10px] font-bold shrink-0 z-10 bg-dark/90">
                                  {project.year.slice(-2)}
                                </div>
                                <div 
                                  className="text-beige font-space font-bold uppercase tracking-widest text-xs md:text-sm whitespace-nowrap overflow-hidden z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
                                  style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                                >
                                  {project.title}
                                </div>
                                <div className="w-2 h-2 rounded-full bg-beige shrink-0 z-10"></div>
                              </div>
                            )}
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* ================= PROJECT DETAILS (Displays Active Project) ================= */}
      <div className="mt-4 w-full max-w-2xl mx-auto text-center min-h-[180px] bg-bgWhite border-2 border-dark p-6 shadow-brutal">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center"
          >
            <h3 className="text-2xl md:text-3xl font-space font-extrabold uppercase text-dark tracking-tighter">
              {activeProject.title}
            </h3>
            
            <div className="flex items-center gap-3 mt-2 mb-4">
              <span className="font-space font-bold uppercase text-xs md:text-sm tracking-widest text-gray-500">
                {activeProject.subtitle}
              </span>
              <span className="w-1.5 h-1.5 bg-dark rounded-full"></span>
              <span className="font-mono font-bold text-xs bg-dark text-beige px-2 py-0.5">
                {activeProject.year}
              </span>
            </div>

            <p className="font-medium text-sm md:text-base leading-relaxed text-dark max-w-xl">
              {activeProject.description}
            </p>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              {activeProject.link && (
                <a 
                  href={activeProject.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-beige border-2 border-dark font-space font-bold uppercase text-xs md:text-sm shadow-[3px_3px_0px_#4A3728] hover:translate-y-0.5 hover:shadow-[1px_1px_0px_#4A3728] transition-all"
                >
                  {activeProject.linkText}
                </a>
              )}

              {activeProject.githubLink && (
                <a 
                  href={activeProject.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-dark text-beige border-2 border-dark font-space font-bold uppercase text-xs md:text-sm shadow-[3px_3px_0px_#4A3728] hover:translate-y-0.5 hover:shadow-[1px_1px_0px_#4A3728] transition-all"
                >
                  View_Repo.exe
                </a>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

    </motion.div>
  );
}