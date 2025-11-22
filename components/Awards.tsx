import React from 'react';
import { Trophy, ArrowUpRight } from 'lucide-react';
import { AWARDS_DATA } from '../constants';

const Awards: React.FC = () => {
  return (
    <section id="awards">
       <div className="bg-neutral-100 dark:bg-[#111] rounded-[2.5rem] p-8 md:p-10 border border-neutral-200 dark:border-neutral-800">
          <div className="mb-8 flex items-center gap-3">
             <div className="p-2 bg-orange-500 rounded-lg text-white">
                <Trophy size={24} />
             </div>
             <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Achievements & Recognition</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {AWARDS_DATA.map((award) => (
              <a 
                key={award.id}
                href={award.link || '#'}
                target="_blank"
                rel="noreferrer"
                className="bg-white dark:bg-neutral-900/50 p-6 rounded-3xl border border-neutral-200 dark:border-white/5 hover:bg-orange-50 dark:hover:bg-white/5 transition-all duration-300 group flex flex-col justify-between h-full"
              >
                 <div>
                    <div className="flex justify-between items-start mb-4">
                       <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 bg-neutral-100 dark:bg-white/5 px-2 py-1 rounded-md">
                          {award.date}
                       </span>
                       <ArrowUpRight size={16} className="text-neutral-300 group-hover:text-orange-500 transition-colors" />
                    </div>
                    
                    <h3 className="font-bold text-neutral-900 dark:text-white leading-tight mb-1 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                      {award.title}
                    </h3>
                    <p className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wide mb-3">
                       {award.rank}
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 line-clamp-3">
                       {award.description}
                    </p>
                 </div>
              </a>
            ))}
          </div>
       </div>
    </section>
  );
};

export default Awards;