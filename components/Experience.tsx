
import React from 'react';
import { Calendar } from 'lucide-react';
import { EXPERIENCE_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-8 md:py-16 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display text-neutral-900 dark:text-white">Experience</h2>
            <div className="w-full h-[1px] bg-neutral-200 dark:bg-neutral-800"></div>
        </div>

        <div className="space-y-12 max-w-4xl">
          {EXPERIENCE_DATA.map((job) => (
            <div key={job.id} className="group relative pl-8 md:pl-0 border-l border-neutral-200 dark:border-neutral-800 md:border-none">
              <div className="md:grid md:grid-cols-12 gap-8">
                {/* Timeline / Date (Desktop) */}
                <div className="hidden md:block md:col-span-3 text-right pt-2">
                    <span className="text-sm font-mono text-neutral-500 dark:text-neutral-500 block">{job.period}</span>
                    <span className="text-xs text-neutral-600 dark:text-neutral-600 block mt-1">{job.location}</span>
                </div>

                {/* Dot */}
                <div className="absolute -left-[5px] top-2 md:left-auto md:right-auto md:relative md:col-span-1 flex justify-center">
                     <div className="w-2.5 h-2.5 rounded-full bg-neutral-400 dark:bg-neutral-700 border border-white dark:border-neutral-950 group-hover:bg-orange-500 group-hover:scale-125 transition-all"></div>
                     <div className="hidden md:block absolute top-2.5 bottom-[-48px] w-[1px] bg-neutral-200 dark:bg-neutral-800 -z-10"></div>
                </div>

                {/* Content */}
                <div className="md:col-span-8 pb-8">
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white group-hover:text-orange-500 transition-colors">
                        {job.role}
                    </h3>
                    <h4 className="text-lg text-neutral-600 dark:text-neutral-300 mb-2">{job.company}</h4>
                    
                    {/* Mobile Date */}
                    <div className="md:hidden flex items-center gap-2 text-xs text-neutral-500 mb-4 font-mono">
                        <Calendar size={12}/> {job.period}
                    </div>

                    <ul className="space-y-2">
                        {job.description.map((desc, i) => (
                            <li key={i} className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm relative pl-4">
                                <span className="absolute left-0 top-2 w-1 h-1 bg-neutral-400 dark:bg-neutral-600 rounded-full"></span>
                                {desc}
                            </li>
                        ))}
                    </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
