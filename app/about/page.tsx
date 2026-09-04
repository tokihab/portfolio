"use client";
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function About() {
  const [isVolunteeringOpen, setIsVolunteeringOpen] = useState(false);

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="p-6 md:p-8 flex flex-col h-full bg-offWhite">
      
      <h2 className="text-3xl font-space font-bold inline-block border-2 border-dark bg-dark text-beige px-6 py-2 mb-10 shadow-brutal uppercase self-start">
        Timeline
      </h2>

      {/* Experience */}
      <h3 className="font-space font-bold uppercase text-lg mb-4 border-b-2 border-dark pb-1">Work Experience</h3>
      <div className="flex flex-col gap-4 mb-10">
        <div className="bg-bgWhite border-2 border-dark p-4 shadow-[4px_4px_0px_#4A3728] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#4A3728] transition-all">
          <h4 className="font-bold font-space text-lg">Elsewedy Electric</h4>
          <p className="text-xs font-mono border-2 border-dark inline-block px-2 py-1 my-2 bg-beige">AI Engineer Extern | 2026</p>
          <ul className="text-sm font-medium list-disc list-inside">
            <li>Integrated automated piplines to process and analyze enterprise data, improving data accessibility for the engineering team.</li>
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
          <p className="text-xs font-mono border-2 border-dark inline-block px-2 py-1 my-2 bg-beige">Freelancer under the initiative direction | 2024 to 2026</p>
          <p className="text-sm font-medium">Applied bussiness and technical coaching to deliver 4 gigs, ranging from data analysis to ui/ux and simpler data annotation/translation tasks.</p>
        </div>
        <div className="bg-bgWhite border-2 border-dark p-4 shadow-[4px_4px_0px_#4A3728] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#4A3728] transition-all">
          <h4 className="font-bold font-space text-lg">National Media Authority (Maspero)</h4>
          <p className="text-xs font-mono border-2 border-dark inline-block px-2 py-1 my-2 bg-beige">Cybersecurity & Infrastructure Fellow | 2025</p>
          <p className="text-sm font-medium">Evaluated physical and logical security of national-scale server environments and broadcast systems.</p>
        </div>
        <div className="bg-bgWhite border-2 border-dark p-4 shadow-[4px_4px_0px_#4A3728] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#4A3728] transition-all">
          <h4 className="font-bold font-space text-lg">Arab African International Bank</h4>
          <p className="text-xs font-mono border-2 border-dark inline-block px-2 py-1 my-2 bg-beige">Data Intern at Digital Factory | 2024</p>
          <ul className="text-sm font-medium list-disc list-inside">
            <li>Processed end-to-end checks workflows, ensuring contract compliance and secure data entry</li>
            <li>Engineered data pipelines and PowerBI dashboards for operational insights</li>
          </ul>
        </div>
      </div>

      {/* Education */}
      <h3 className="font-space font-bold uppercase text-lg mb-4 border-b-2 border-dark pb-1">Education</h3>
      <div className="bg-beige border-2 border-dark p-4 shadow-[4px_4px_0px_#4A3728] mb-10">
        <h4 className="font-bold font-space text-lg">Benha National University</h4>
        <p className="text-sm font-medium mb-2">Bachelor of Computer Science Majored in Artificial Intelligence.</p>
        <ul className="text-sm font-medium list-disc list-inside">
          <li>Graduated 2026</li>
          <li>Google Development Groups on campus Machine Learning technical </li>
          <li>Google Development Groups on campus Cybersecurity learner</li>
          <li>ICPC National Finals Participant</li>
        </ul>
        <h4 className="font-bold font-space text-lg border-t-2 border-dark pt-4">The English School (ESC)</h4>
        <ul className="text-sm font-medium list-disc list-inside">
          <li>Graduated 2022</li>
          <li>2nd place in local schools computer competition</li>
          <li>3 times RoboCup participant</li>
          <li>Selected to showcase my art class work in a Cairo-wide exhibition representing my school</li>
        </ul>
        
      </div>

      {/* Volunteering & extracurricular */}
      <div className="flex items-center justify-between gap-4 mb-4 border-b-2 border-dark pb-1">
        <h3 className="font-space font-bold uppercase text-lg">Volunteering & Extracurricular</h3>
        <button
          type="button"
          onClick={() => setIsVolunteeringOpen((isOpen) => !isOpen)}
          aria-expanded={isVolunteeringOpen}
          className="bg-beige border-2 border-dark px-3 py-1 font-mono text-xs font-bold uppercase shadow-[3px_3px_0px_#4A3728] transition-colors hover:bg-offWhite active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
        >
          {isVolunteeringOpen ? 'Collapse' : 'Expand'}
        </button>
      </div>

      {/* Properly wrapped conditional block */}
      {isVolunteeringOpen && (
        <div className="flex flex-col gap-4">
          <div className="bg-beige border-2 border-dark p-4 shadow-[4px_4px_0px_#4A3728] hover:bg-offWhite transition-colors">
            <h4 className="font-bold font-space text-lg">St. Mark Scouts</h4>
            <ul className="text-sm font-medium list-disc list-inside space-y-1">
              <li>Rose through the ranks from a junior scout to Troop Leader, taking charge of mentoring and guiding younger members.</li>
              <li>Earned advanced personal scout badges and spearheaded the organization and evaluation of scout proficiency exams.</li>
              <li>Directed large-scale events and community "Fun Days," successfully managing logistics and activities for over 1,000 attendees.</li>
              <li>Served as an English-speaking sports and camp leader, organizing team-building exercises and outdoor adventures.</li>
            </ul>
          </div>
          <div className="bg-beige border-2 border-dark p-4 shadow-[4px_4px_0px_#4A3728] hover:bg-offWhite transition-colors">
            <h4 className="font-bold font-space text-lg">Motiv8sports</h4>
            <ul className="text-sm font-medium list-disc list-inside space-y-1">
              <li>Brought the hype as a Team Leader for 7+ multi-sport camps, keeping the energy and motivation high for hundreds of kids.</li>
              <li>Ran epic trademark events and challenges where the focus was always on teamwork, maximum participation, and having a blast rather than just winning.</li>
              <li>Created a safe, inclusive, and super motivating environment to make sure every camper felt like an absolute rockstar.</li>
              <li>Guided kids through non-stop action, balancing pure fun with solid mentorship and strict safety standards.</li>
            </ul>
          </div>
          <div className="bg-beige border-2 border-dark p-4 shadow-[4px_4px_0px_#4A3728] hover:bg-offWhite transition-colors">
            <h4 className="font-bold font-space text-lg">360 Experiential Solutions</h4>
            <ul className="text-sm font-medium list-disc list-inside space-y-1">
              <li>Partnered with 360 Solutions to run high-impact corporate team-building workshops and experiential training.</li>
              <li>Helped teams break down communication barriers through custom challenges, games, and leadership frameworks.</li>
              <li>Spearheaded a standout, unforgettable community event with the Baseera Foundation for blind kids - championing inclusivity and accessibility as the crown jewel of the run.</li>
              <li>Took charge of large-scale event operations, balancing smooth logistics with high-energy crowd engagement.</li>
            </ul>
            
          </div>
          <div className="bg-beige border-2 border-dark p-4 shadow-[4px_4px_0px_#4A3728] hover:bg-offWhite transition-colors">
            <h4 className="font-bold font-space text-lg">Red Bull Flugtag – El Gouna</h4>
            <ul className="text-sm font-medium list-disc list-inside space-y-1">
              <li>Competed in the legendary Red Bull Flugtag, spearheading the end-to-end design and construction of a custom flying machine.</li>
              <li>Opted for the hard route: independently sourced our own materials and built the entire glider from scratch in a front yard rather than relying on Red Bull's factory resources.</li>
              <li>Navigated and resolved critical logistical nightmares, overcoming major structural and transport setbacks while shipping the massive glider across the country from Cairo to El Gouna.</li>
              <li>Successfully brought the project to the main stage, executing our pre-flight performance and launching our custom-engineered machine off the ramp in front of a massive crowd.</li>
            </ul>
          </div>
        </div>
      )}

    </motion.div>
  );
}