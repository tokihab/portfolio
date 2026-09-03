"use client";
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="p-6 md:p-8 flex flex-col h-full bg-offWhite">
      
      <h2 className="text-3xl font-space font-bold inline-block border-2 border-dark bg-dark text-beige px-6 py-2 mb-10 shadow-brutal uppercase self-start">
        About & Experience
      </h2>

      {/* Experience */}
      <h3 className="font-space font-bold uppercase text-lg mb-4 border-b-2 border-dark pb-1">Experience</h3>
      <div className="flex flex-col gap-4 mb-10">
        <div className="bg-bgWhite border-2 border-dark p-4 shadow-[4px_4px_0px_#4A3728] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#4A3728] transition-all">
          <h4 className="font-bold font-space text-lg">Digital Egypt Pioneers Initiative</h4>
          <p className="text-xs font-mono border-2 border-dark inline-block px-2 py-1 my-2 bg-beige">Software Quality Assurance Trainee | 2026</p>
          <p className="text-sm font-medium">Completed intensive tracks covering manual testing, automated testing methodologies, and deployment pipelines.</p>
        </div>
        <div className="bg-bgWhite border-2 border-dark p-4 shadow-[4px_4px_0px_#4A3728] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#4A3728] transition-all">
          <h4 className="font-bold font-space text-lg">National Media Authority (Maspero)</h4>
          <p className="text-xs font-mono border-2 border-dark inline-block px-2 py-1 my-2 bg-beige">Cybersecurity & Infrastructure Fellow | 2026</p>
          <p className="text-sm font-medium">Evaluated physical and logical security of national-scale server environments and broadcast systems.</p>
        </div>
      </div>

      {/* Education */}
      <h3 className="font-space font-bold uppercase text-lg mb-4 border-b-2 border-dark pb-1">Education & Community</h3>
      <div className="bg-beige border-2 border-dark p-4 shadow-[4px_4px_0px_#4A3728]">
        <h4 className="font-bold font-space text-lg">Benha National University</h4>
        <p className="text-sm font-medium mb-4">Bachelor of Computer Science (AI Major). GDG Tech Track Leader.</p>
        
        <h4 className="font-bold font-space text-lg border-t-2 border-dark pt-4">The English School (ESC)</h4>
        <p className="text-sm font-medium">Graduated 2022. Fluent English speaker and active scout camp leader.</p>
      </div>

    </motion.div>
  );
}