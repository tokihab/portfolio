"use client";
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

export default function Contact() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="p-6 md:p-8 flex flex-col h-full bg-offWhite">
      
      <h2 className="text-3xl font-space font-bold inline-block border-2 border-dark bg-dark text-beige px-6 py-2 mb-10 shadow-brutal uppercase self-start">
        Initialize Connection
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        {/* Terminal Data */}
        <div className="bg-beige border-2 border-dark p-6 shadow-brutal flex flex-col gap-6">
          <div>
            <h3 className="font-mono font-bold text-sm border-b-2 border-dark pb-1 mb-2"> LOCATION DATA</h3>
            <p className="text-sm font-medium">Roxy, Heliopolis<br/>Cairo, Egypt</p>
          </div>
          <div>
            <h3 className="font-mono font-bold text-sm border-b-2 border-dark pb-1 mb-2"> DIRECT COMMS</h3>
            <p className="text-sm font-medium">Email: toni.youssef@example.com</p>
          </div>
          <div>
            <h3 className="font-mono font-bold text-sm border-b-2 border-dark pb-1 mb-2"> EXTERNAL NODES</h3>
            <ul className="text-sm font-medium space-y-2">
              <li><a href="https://github.com/tokihab" className="hover:underline hover:text-blue-700">└ GitHub Repository</a></li>
              <li><a href="https://www.linkedin.com/in/toni-ihab/" className="hover:underline hover:text-blue-700">└ LinkedIn Network</a></li>
            </ul>
          </div>
        </div>

        {/* Schedule Action */}
        <div className="bg-bgWhite border-2 border-dark p-8 shadow-brutal flex flex-col items-center justify-center text-center h-full">
          <Calendar size={48} strokeWidth={1.5} className="mb-4" />
          <h3 className="font-space font-bold text-2xl uppercase mb-3">Schedule A Meeting</h3>
          <p className="text-sm font-medium mb-8 max-w-xs">
            Use the calendar interface to book a quick introductory call or technical discussion.
          </p>
          <a 
            href="https://calendly.com/tony0100512-cs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full bg-dark text-beige border-2 border-dark py-3 font-space font-bold uppercase hover:bg-beige hover:text-dark transition-colors"
          >
            OPEN_CALENDLY()
          </a>
        </div>

      </div>

    </motion.div>
  );
}