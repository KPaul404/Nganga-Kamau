
import React from 'react';
import { SKILLS } from '../constants';
import SunburstChart from './SunburstChart';
import { Brain, Globe, Database, Terminal } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          
          {/* Bio Widget - Wide */}
          <div className="lg:col-span-7 bg-white dark:bg-[#111] rounded-[2.5rem] p-8 md:p-12 border border-neutral-200 dark:border-neutral-800 shadow-sm flex flex-col justify-center">
             <h3 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6 font-display">
               Engineering & Data Science
             </h3>
             <div className="space-y-6 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
                <p>
                  I combine a background in <span className="text-neutral-900 dark:text-white decoration-orange-500 underline decoration-2 underline-offset-4">Petroleum Engineering</span> and <span className="text-neutral-900 dark:text-white decoration-orange-500 underline decoration-2 underline-offset-4">Data Science</span> . My problem-solving approaches are grounded in data and system analyses, ensuring solutions are both practical and reliable.
                </p>
                <p>
                  Currently, my focus is on building impactful tools that benefit users through various technologies.
                </p>
             </div>
          </div>

          {/* Interactive Chart Widget - Square-ish */}
          <div className="lg:col-span-5 bg-white dark:bg-[#111] rounded-[2.5rem] p-6 border border-neutral-200 dark:border-neutral-800 shadow-sm flex flex-col items-center justify-between min-h-[420px]">
             <div className="w-full">
                <h4 className="text-sm font-bold text-neutral-400 uppercase tracking-wider">Technical Arsenal</h4>
             </div>
             {/* Chart Container */}
             <div className="flex flex-col items-center justify-between h-full w-full flex-1">
                <div className="w-[330px] h-[330px] relative z-0 my-2">
                    <SunburstChart />
                </div>
                <p className="text-center text-xs text-neutral-400 w-full mt-auto">
                Interactive • Click segments to explore
                </p>
             </div>
          </div>

          {/* Skill Pills - Horizontal Strip */}
          <div className="lg:col-span-12 bg-neutral-100 dark:bg-neutral-900/50 rounded-[2rem] p-6 border border-neutral-200 dark:border-neutral-800 flex flex-wrap gap-4 items-center justify-center">
              {SKILLS.map((group, idx) => {
                 const Icon = idx === 0 ? Brain : idx === 1 ? Globe : idx === 2 ? Database : Terminal;
                 return (
                  <div key={idx} className="flex items-center gap-3 px-5 py-3 bg-white dark:bg-[#1a1a1a] rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm hover:scale-105 transition-transform cursor-default">
                     <Icon size={18} className={`
                        ${idx === 0 ? 'text-orange-500' : ''}
                        ${idx === 1 ? 'text-green-500' : ''}
                        ${idx === 2 ? 'text-blue-500' : ''}
                        ${idx === 3 ? 'text-purple-500' : ''}
                     `} />
                     <span className="font-bold text-neutral-800 dark:text-neutral-200 text-sm">{group.category}</span>
                  </div>
                 )
              })}
          </div>

       </div>
    </section>
  );
};

export default About;
