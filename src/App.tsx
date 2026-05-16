/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Award, 
  Globe, 
  Languages, 
  CheckCircle2,
  Calendar
} from "lucide-react";
import { useEffect, useState } from "react";

// Types based on the resume data
interface Job {
  company: string;
  role: string;
  period: string;
  location?: string;
  project?: string;
  tasks: string[];
}

interface Education {
  degree: string;
  period: string;
  school: string;
  focus?: string;
}

const resumeData = {
  name: "Aodun Gaowa",
  role: "Business Development Manager",
  contact: {
    phone: "+49 (0)152 3390 3259",
    email: "a.gaowa@gp-iconsulting.de",
    location: "Munich, Germany",
    nationality: "German",
    born: "Inner Mongolia, China",
    status: "Married, 1 child"
  },
  experience: [
    {
      company: "Self-employed",
      role: "Business Development Manager",
      period: "01/2026 - Present",
      location: "Munich",
      tasks: [
        "Consulting for German-Chinese automotive and manufacturing projects with a focus on Business Development and Project Management."
      ]
    },
    {
      company: "BMW AG",
      role: "Commercial Project Management Assembly",
      period: "06/2023 - 12/2025",
      location: "Munich",
      project: "5er, 7er, ALPINA and M-Derivatives",
      tasks: [
        "Commercial management of all project phases: manufacturing costs, investment, and budget.",
        "Agreement on project goals, evaluation of sync points, confirmation of concepts and products.",
        "Controlling and consolidation of evaluation orders (technical changes etc.) according to target agreement."
      ]
    },
    {
      company: "BMW AG",
      role: "Business Management Software Development",
      period: "10/2022 - 06/2023",
      location: "Munich",
      project: "Autonomous Driving",
      tasks: [
        "Planning and controlling the budget for the entire main department.",
        "Organizing and performing evaluation orders and consolidating evaluation results."
      ]
    },
    {
      company: "MINTH GmbH",
      role: "Project Manager",
      period: "04/2019 - 10/2022",
      location: "Munich, China, Serbia, Austria",
      project: "High-voltage battery housing BEV (BMW iX1 housing base)",
      tasks: [
        "Industrialization of a new production line in Serbia (Greenfield project), ensuring quality, schedule, and costs.",
        "Schnittstelle between the internal global team, BMW, and European suppliers: FFT, HAGE, MDS, TRICO."
      ]
    },
    {
      company: "BMW AG",
      role: "Project Control",
      period: "10/2015 - 03/2019",
      location: "Munich",
      tasks: [
        "Monitoring OEM project status and risk management.",
        "Consolidating high-risk topics for management decisions.",
        "Integrating BEST PRACTICE platform concepts for problem-solving and Lessons Learned."
      ]
    },
    {
      company: "China / Industrialization",
      role: "Industrialization Engineer",
      period: "01/2014 - 09/2015",
      location: "China",
      tasks: [
        "Industrialization of new Eloxal production lines in an international team.",
        "Process planning, supplier procurement, personnel planning, HW/SW implementation.",
        "BMW Supplier Innovation Award 2016 for corrosion resistance."
      ]
    },
    {
      company: "BMW AG",
      role: "Project Coordinator",
      period: "08/2012 - 12/2013",
      location: "Unterschleißheim",
      project: "Relocation project BMW 3-series",
      tasks: [
        "Communication management in multicultural teams and maintaining efficient teamwork.",
        "Conducting intercultural communication training."
      ]
    }
  ],
  education: [
    {
      degree: "Master, Systems Engineering",
      period: "03/2008 - 03/2012",
      school: "Hochschule München",
      focus: "Project Management, Process Planning"
    },
    {
      degree: "Informatics (Vordiplom)",
      period: "04/2005 - 02/2008",
      school: "Technical University of Munich"
    }
  ],
  skills: {
    soft: ["Analytical thinking", "Problem solving", "Intercultural communication", "Strong communicator"],
    hard: ["Agile/SAFe", "SAP Expertise", "Project Management", "MS Office"]
  },
  languages: [
    { name: "German", level: "Fluent" },
    { name: "English", level: "Fluent" },
    { name: "Chinese", level: "Native" },
    { name: "Mongolian", level: "Native" }
  ]
};

const SectionHeader = ({ id, title }: { id: string, title: string }) => (
  <div id={id} className="relative mb-12">
    <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-2">{title}</h2>
    <div className="h-[2px] w-full bg-slate-900" />
  </div>
);

export default function App() {
  const [activeJob, setActiveJob] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] font-sans selection:bg-[#1A1A1A] selection:text-white pb-24">
      {/* Top Progress Bar */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "circOut" }}
        className="fixed top-0 left-0 right-0 h-1 bg-[#1A1A1A] origin-left z-50"
      />

      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Sidebar / Rail */}
        <aside className="w-full md:w-80 border-b md:border-b-0 md:border-r border-[#1A1A1A]/5 p-8 md:p-12 flex flex-col justify-between">
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col space-y-4"
            >
              <span className="font-mono font-bold text-sm tracking-tighter uppercase">Profile.Core</span>
              <div className="space-y-6">
                <section>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#1A1A1A]/40 mb-3">Essentials</h4>
                  <ul className="space-y-3 font-mono text-[11px]">
                    <li className="flex justify-between"><span>Status</span> <span className="text-[#1A1A1A]/50 italic">{resumeData.contact.status}</span></li>
                    <li className="flex justify-between"><span>Nationality</span> <span className="text-[#1A1A1A]/50 italic">{resumeData.contact.nationality}</span></li>
                    <li className="flex justify-between"><span>Base</span> <span className="text-[#1A1A1A]/50 italic">Munich, DE</span></li>
                  </ul>
                </section>
                
                <section>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#1A1A1A]/40 mb-3">Connect</h4>
                  <div className="space-y-2 text-xs font-mono">
                    <p className="flex items-center gap-2">
                       <Mail size={12} className="opacity-30" />
                       <a href={`mailto:${resumeData.contact.email}`} className="hover:opacity-60">{resumeData.contact.email}</a>
                    </p>
                    <p className="flex items-center gap-2">
                       <Phone size={12} className="opacity-30" />
                       <span>{resumeData.contact.phone}</span>
                    </p>
                  </div>
                </section>
              </div>
            </motion.div>

            <div className="p-6 bg-[#1A1A1A] rounded-2xl text-white">
              <p className="text-[10px] uppercase tracking-widest font-bold mb-2 opacity-50">Latest Role</p>
              <p className="text-xs font-mono">{resumeData.experience[0].role}</p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 md:p-20 lg:p-24 overflow-y-auto">
          <header className="max-w-3xl mb-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "circOut" }}
            >
              <h1 className="text-[80px] md:text-[130px] leading-[0.8] font-serif tracking-tighter mb-8">
                {resumeData.name.split(' ')[0]} <br/> 
                <span className="italic opacity-20">{resumeData.name.split(' ')[1]}.</span>
              </h1>
              <p className="text-2xl md:text-3xl font-light leading-snug text-[#1A1A1A]/80 tracking-tight max-w-xl">
                A strategic leader in <span className="font-serif italic font-medium uppercase text-lg tracking-widest bg-[#1A1A1A] text-white px-2 py-1 mx-1 rounded-sm">Business Development</span> and industrial management.
              </p>
            </motion.div>
          </header>

          <div className="max-w-4xl space-y-40">
            {/* Experience */}
            <section>
              <SectionHeader id="section-experience" title="Professional Lineup" />
              <div className="space-y-24">
                {resumeData.experience.map((job, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8"
                  >
                    <div className="lg:col-span-4">
                      <span className="font-mono text-xs font-bold text-[#1A1A1A]/30 uppercase tracking-[0.2em] mb-2 block">{job.period}</span>
                      <h3 className="text-2xl font-serif italic mb-4">{job.company}</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 border border-[#1A1A1A]/10 rounded text-[9px] uppercase font-bold tracking-widest">{job.location}</span>
                      </div>
                    </div>
                    <div className="lg:col-span-8 space-y-6">
                      <p className="text-xl font-medium tracking-tight border-b border-[#1A1A1A]/5 pb-4">{job.role}</p>
                      <ul className="space-y-4">
                        {job.tasks.map((task, tidx) => (
                          <li key={tidx} className="flex items-start gap-4 group">
                            <span className="text-[10px] font-mono opacity-20 mt-1.5 group-hover:opacity-100 transition-opacity">0{tidx + 1}</span>
                            <span className="text-sm md:text-base text-[#1A1A1A]/70 leading-relaxed">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Footer Status */}
            <div className="flex flex-col md:flex-row items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[#1A1A1A]/40 border-t border-[#1A1A1A]/10 pt-12">
              <div className="flex space-x-6 mb-4 md:mb-0">
                <span>Updated: 2026.05</span>
                <span>Role: Portfolio</span>
                <span>Status: Professional</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span>Available for consulting</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
