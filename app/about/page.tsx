"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

type Tab = 'experience' | 'education' | 'extracurricular';

export default function About() {
  const [activeTab, setActiveTab] = useState<Tab>('experience');

  const tabs: { id: Tab; label: string }[] = [
    { id: 'experience', label: 'Work Experience' },
    { id: 'education', label: 'Education' },
    { id: 'extracurricular', label: 'Extracurriculars' },
  ];

  // Logic to handle dragging the mechanical knob
  const handleDragEnd = (offsetX: number, currentIndex: number) => {
    const swipeThreshold = 30; // How many pixels you need to drag to switch tabs
    
    if (offsetX < -swipeThreshold && currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1].id as Tab);
    } else if (offsetX > swipeThreshold && currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1].id as Tab);
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="p-6 md:p-8 flex flex-col h-full bg-offWhite overflow-hidden">
      
      {/* ================= DUAL CONTROL PANEL ================= */}
      <div className="w-full max-w-3xl mx-auto mb-12 flex flex-col gap-6 pt-4">
        
        {/* 1. Top Segmented Text Bar */}
        <div className="flex w-full bg-bgWhite border-2 border-dark shadow-[4px_4px_0px_#4A3728] p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex-1 py-3 text-[10px] md:text-sm font-space font-bold uppercase transition-colors z-10 ${
                activeTab === tab.id ? 'text-beige' : 'text-dark hover:bg-offWhite'
              }`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="top-bar-active"
                  className="absolute inset-0 bg-dark z-[-1]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {tab.label}
            </button>
          ))}
        </div>

        {/* 2. Bottom Mechanical Draggable Slider */}
        <div className="relative w-full h-16 flex items-center">
          
          {/* Dark Track Line (Mathematically connects the center of the first and last tick) */}
          <div className="absolute left-[16.66%] right-[16.66%] h-[6px] bg-dark z-0 rounded-full"></div>

          {/* Ticks & Draggable Knob Container */}
          <div className="relative w-full flex h-full z-10">
            {tabs.map((tab, index) => (
              <div
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative flex-1 flex justify-center items-center h-full cursor-pointer"
              >
                {/* Vertical Track Tick */}
                <div className="absolute w-1.5 h-6 bg-dark z-0"></div>

                {/* Draggable Vintage Dotted Knob */}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="bottom-slider-knob"
                    drag="x" // Enables horizontal dragging
                    dragConstraints={{ left: 0, right: 0 }} // Snaps it back to center of its cell
                    dragElastic={0.2} // Adds physical resistance when pulling
                    onDragEnd={(e, { offset }) => handleDragEnd(offset.x, index)}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="absolute w-14 h-10 bg-beige border-2 border-dark shadow-[3px_3px_0px_#4A3728] flex items-center justify-center z-20 cursor-grab active:cursor-grabbing rounded-sm"
                  >
                    {/* Retro Grip Dots (2x3 Grid) */}
                    <div className="grid grid-cols-2 gap-[4px]">
                      <div className="w-1.5 h-1.5 rounded-full bg-dark opacity-80"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-dark opacity-80"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-dark opacity-80"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-dark opacity-80"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-dark opacity-80"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-dark opacity-80"></div>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ================= ANIMATED CONTENT AREA ================= */}
      <div className="relative w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="flex flex-col gap-4 pb-10"
          >
            {/* ---------------- EXPERIENCE TAB ---------------- */}
            {activeTab === 'experience' && (
              <>
                <div className="bg-bgWhite border-2 border-dark p-4 shadow-[4px_4px_0px_#4A3728] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#4A3728] transition-all">
                  <h4 className="font-bold font-space text-lg">Elsewedy Electric</h4>
                  <p className="text-xs font-mono border-2 border-dark inline-block px-2 py-1 my-2 bg-beige">AI Engineer Extern | 2026</p>
                  <ul className="text-sm font-medium list-disc list-inside space-y-1">
                    <li>Integrated automated pipelines to process and analyze enterprise data, improving data accessibility for the engineering team.</li>
                    <li>Collaborated with the software engineering team to deploy and test AI features within a controlled staging environment, documenting system architecture for future hand-off.</li>
                  </ul>
                </div>
                
                <div className="bg-bgWhite border-2 border-dark p-4 shadow-[4px_4px_0px_#4A3728] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#4A3728] transition-all">
                  <h4 className="font-bold font-space text-lg">YallaExpand</h4>
                  <p className="text-xs font-mono border-2 border-dark inline-block px-2 py-1 my-2 bg-beige">Software Testing Trainee | 2026</p>
                  <ul className="text-sm font-medium list-disc list-inside space-y-1">
                    <li>Engaged in weekly technical masterclasses and rigorous hands-on architectural tasks designed to fast-track software engineering capabilities.</li>
                    <li>Designed, tested, and iterated on production features in a fast-paced startup environment under expert guidance.</li>
                    <li>Translated weekly theoretical materials and advanced engineering concepts into clean, scalable code implementations.</li>
                  </ul>
                </div>
                
                <div className="bg-bgWhite border-2 border-dark p-4 shadow-[4px_4px_0px_#4A3728] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#4A3728] transition-all">
                  <h4 className="font-bold font-space text-lg">Digital Egypt Pioneers Initiative</h4>
                  <p className="text-xs font-mono border-2 border-dark inline-block px-2 py-1 my-2 bg-beige">Freelancer | 2024 - 2026</p>
                  <p className="text-sm font-medium mt-1">Applied business and technical coaching to deliver 4 gigs, ranging from data analysis to UI/UX and simpler data annotation/translation tasks.</p>
                </div>
                
                <div className="bg-bgWhite border-2 border-dark p-4 shadow-[4px_4px_0px_#4A3728] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#4A3728] transition-all">
                  <h4 className="font-bold font-space text-lg">National Media Authority (Maspero)</h4>
                  <p className="text-xs font-mono border-2 border-dark inline-block px-2 py-1 my-2 bg-beige">Cybersecurity & Infrastructure Fellow | 2025</p>
                  <p className="text-sm font-medium mt-1">Evaluated physical and logical security of national-scale server environments and broadcast systems.</p>
                </div>
                
                <div className="bg-bgWhite border-2 border-dark p-4 shadow-[4px_4px_0px_#4A3728] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#4A3728] transition-all">
                  <h4 className="font-bold font-space text-lg">Arab African International Bank</h4>
                  <p className="text-xs font-mono border-2 border-dark inline-block px-2 py-1 my-2 bg-beige">Data Intern at Digital Factory | 2024</p>
                  <ul className="text-sm font-medium list-disc list-inside space-y-1">
                    <li>Processed end-to-end checks workflows, ensuring contract compliance and secure data entry.</li>
                    <li>Engineered data pipelines and PowerBI dashboards for operational insights.</li>
                  </ul>
                </div>
              </>
            )}

            {/* ---------------- EDUCATION TAB ---------------- */}
            {activeTab === 'education' && (
              <>
                {/* University */}
                <div className="bg-bgWhite border-2 border-dark p-4 shadow-[4px_4px_0px_#4A3728] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#4A3728] transition-all">
                  <h4 className="font-bold font-space text-lg">Benha National University</h4>
                  <p className="text-xs font-mono border-2 border-dark inline-block px-2 py-1 my-2 bg-beige">Bachelor of Computer Science (AI) | Graduating 2026</p>
                  <ul className="text-sm font-medium list-disc list-inside space-y-1">
                    <li>Google Development Groups on campus Machine Learning technical</li>
                    <li>Google Development Groups on campus Cybersecurity learner</li>
                    <li>ICPC National Finals Participant</li>
                  </ul>
                </div>

                {/* High School */}
                <div className="bg-bgWhite border-2 border-dark p-4 shadow-[4px_4px_0px_#4A3728] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#4A3728] transition-all">
                  <h4 className="font-bold font-space text-lg">The English School (ESC)</h4>
                  <p className="text-xs font-mono border-2 border-dark inline-block px-2 py-1 my-2 bg-beige">High School Diploma | 2022</p>
                  <ul className="text-sm font-medium list-disc list-inside space-y-1">
                    <li>2nd place in local school computer competition</li>
                    <li>3 times RoboCup participant</li>
                    <li>Selected to showcase my art class work in a Cairo-wide exhibition representing my school</li>
                  </ul>
                </div>

                {/* Course: DevOps */}
                <div className="bg-bgWhite border-2 border-dark p-4 shadow-[4px_4px_0px_#4A3728] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#4A3728] transition-all">
                  <h4 className="font-bold font-space text-lg">DevOps</h4>
                  <p className="text-xs font-mono border-2 border-dark inline-block px-2 py-1 my-2 bg-beige">Digital Egypt Pioneers Initiative | 2025 | YAT, Ard El-Golf</p>
                  <ul className="text-sm font-medium list-disc list-inside space-y-1">
                    <li>Automated infrastructure provisioning and containerized <span className="font-bold">E-commerce migration</span>, improving deployment speed.</li>
                    <li>Accomplished this after learning the following: Ansible, Terraform, AWS, Docker, Kubernetes, Jenkins, CI/CD, Prometheus and Grafana.</li>
                  </ul>
                </div>

                {/* Course: Cloud Architecture */}
                <div className="bg-bgWhite border-2 border-dark p-4 shadow-[4px_4px_0px_#4A3728] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#4A3728] transition-all">
                  <h4 className="font-bold font-space text-lg">Cloud Architecture</h4>
                  <p className="text-xs font-mono border-2 border-dark inline-block px-2 py-1 my-2 bg-beige">AWS / National Telecom Institute | 2024 ! Creatvia Salah-Salem</p>
                  <ul className="text-sm font-medium list-disc list-inside space-y-1">
                    <li>Compute, Storage, Databases, Networking, Security, Auto Scaling, Load Balancing.</li>
                    <li><span className="font-bold">Applied these technologies</span> on a Coffee Shop's web app inside AWS sandbox during the courses period.</li>
                  </ul>
                </div>

                {/* Course: Software Testing */}
                <div className="bg-bgWhite border-2 border-dark p-4 shadow-[4px_4px_0px_#4A3728] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#4A3728] transition-all">
                  <h4 className="font-bold font-space text-lg">Software Testing</h4>
                  <p className="text-xs font-mono border-2 border-dark inline-block px-2 py-1 my-2 bg-beige">Digital Egypt Pioneers Initiative | 2023 | WE, Nasr City</p>
                  <ul className="text-sm font-medium list-disc list-inside space-y-1">
                    <li><span className="font-bold">Applied ISTQB methodologies</span> we learnt to manage the full testing lifecycle of an <span className="font-bold">E-commerce platform</span>.</li>
                    <li>Engineered testing suites transitioning from manual A/B testing exploratory sessions to Data-Driven and REST API testing, utilizing Selenium and Java's TestNG to validate complex back-end service layers and data integrity.</li>
                  </ul>
                </div>
              </>
            )}

            {/* ---------------- EXTRACURRICULAR TAB ---------------- */}
            {activeTab === 'extracurricular' && (
              <>
                <div className="bg-bgWhite border-2 border-dark p-4 shadow-[4px_4px_0px_#4A3728] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#4A3728] transition-all">
                  <h4 className="font-bold font-space text-lg">Red Bull Flugtag – El Gouna</h4>
                  <p className="text-xs font-mono border-2 border-dark inline-block px-2 py-1 my-2 bg-beige">Glider Engineer & Pilot</p>
                  <ul className="text-sm font-medium list-disc list-inside space-y-1">
                    <li>Competed in the legendary Red Bull Flugtag, spearheading the end-to-end design and construction of a custom flying machine.</li>
                    <li>Opted for the hard route: independently sourced our own materials and built the entire glider from scratch in a front yard rather than relying on Red Bull's factory resources.</li>
                    <li>Navigated and resolved critical logistical nightmares, overcoming major structural and transport setbacks while shipping the massive glider across the country from Cairo to El Gouna.</li>
                    <li>Successfully brought the project to the main stage, executing our pre-flight performance and launching our custom-engineered machine off the ramp in front of a massive crowd.</li>
                  </ul>
                </div>

                <div className="bg-bgWhite border-2 border-dark p-4 shadow-[4px_4px_0px_#4A3728] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#4A3728] transition-all">
                  <h4 className="font-bold font-space text-lg">St. Mark Scouts</h4>
                  <p className="text-xs font-mono border-2 border-dark inline-block px-2 py-1 my-2 bg-beige">Troop Leader & Camp Leader</p>
                  <ul className="text-sm font-medium list-disc list-inside space-y-1">
                    <li>Rose through the ranks from a junior scout to Troop Leader, taking charge of mentoring and guiding younger members.</li>
                    <li>Earned advanced personal scout badges and spearheaded the organization and evaluation of scout proficiency exams.</li>
                    <li>Directed large-scale events and community "Fun Days," successfully managing logistics and activities for over 1,000 attendees.</li>
                    <li>Served as an English-speaking sports and camp leader, organizing team-building exercises and outdoor adventures.</li>
                  </ul>
                </div>

                <div className="bg-bgWhite border-2 border-dark p-4 shadow-[4px_4px_0px_#4A3728] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#4A3728] transition-all">
                  <h4 className="font-bold font-space text-lg">Motiv8sports</h4>
                  <p className="text-xs font-mono border-2 border-dark inline-block px-2 py-1 my-2 bg-beige">Team Leader</p>
                  <ul className="text-sm font-medium list-disc list-inside space-y-1">
                    <li>Brought the hype as a Team Leader for 7+ multi-sport camps, keeping the energy and motivation high for hundreds of kids.</li>
                    <li>Ran epic trademark events and challenges where the focus was always on teamwork, maximum participation, and having a blast rather than just winning.</li>
                    <li>Created a safe, inclusive, and super motivating environment to make sure every camper felt like an absolute rockstar.</li>
                    <li>Guided kids through non-stop action, balancing pure fun with solid mentorship and strict safety standards.</li>
                  </ul>
                </div>

                <div className="bg-bgWhite border-2 border-dark p-4 shadow-[4px_4px_0px_#4A3728] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#4A3728] transition-all">
                  <h4 className="font-bold font-space text-lg">360 Experiential Solutions</h4>
                  <p className="text-xs font-mono border-2 border-dark inline-block px-2 py-1 my-2 bg-beige">Event Operations & Facilitator</p>
                  <ul className="text-sm font-medium list-disc list-inside space-y-1">
                    <li>Partnered with 360 Solutions to run high-impact corporate team-building workshops and experiential training.</li>
                    <li>Helped teams break down communication barriers through custom challenges, games, and leadership frameworks.</li>
                    <li>Spearheaded a standout, unforgettable community event with the Baseera Foundation for blind kids - championing inclusivity and accessibility as the crown jewel of the run.</li>
                    <li>Took charge of large-scale event operations, balancing smooth logistics with high-energy crowd engagement.</li>
                  </ul>
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

    </motion.div>
  );
}