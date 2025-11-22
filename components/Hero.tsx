import React from 'react';
import { ExternalLink, Mail, MapPin } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative">
      <div className="grid lg:grid-cols-12 gap-6">
        
        {/* Main Profile Card - Large Widget */}
        <div className="lg:col-span-8 bg-white dark:bg-[#111] rounded-[2.5rem] p-8 md:p-12 border border-neutral-200 dark:border-neutral-800 shadow-sm relative overflow-hidden group">
          {/* Subtle animated background */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-orange-500/15 transition-all duration-700"></div>
          
          <div className="relative z-10 flex flex-col justify-between h-full space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-wider mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                Available for Collaboration
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white font-display mb-6">
                Paul Kamau
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-neutral-500 dark:text-neutral-400 max-w-2xl">
                Petroleum Engineer & Data Scientist. <br />
                <span className="text-neutral-900 dark:text-white">...</span>
              </h2>
            </div>

            <div className="flex flex-col items-center w-fit gap-4">
               <div className="flex gap-3">
                 <a href={SOCIAL_LINKS.kaggle} target="_blank" rel="noreferrer" className="px-8 py-4 bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-white rounded-full font-bold hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors flex items-center gap-2">
                   Kaggle <ExternalLink size={16} />
                 </a>
                 <a href={SOCIAL_LINKS.zindi} target="_blank" rel="noreferrer" className="px-8 py-4 bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-white rounded-full font-bold hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors flex items-center gap-2">
                   Zindi <ExternalLink size={16} />
                 </a>
               </div>
               <a href={`mailto:${SOCIAL_LINKS.email}`} className="px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2">
                 <Mail size={18} /> Contact
               </a>
            </div>
            
            <div className="flex items-center gap-2 text-neutral-400 text-sm font-mono">
                <MapPin size={14} className="text-orange-500" /> Nairobi, Kenya
            </div>
          </div>
        </div>

        {/* Photo Widget */}
        <div className="lg:col-span-4 h-[500px] lg:h-auto relative group">
           <div className="absolute inset-0 bg-white dark:bg-[#111] rounded-[2.5rem] border border-neutral-200 dark:border-neutral-800 overflow-hidden">
              <img 
                src="https://raw.githubusercontent.com/KPaul404/new/refs/heads/main/PAUL_N_KAMAU.jpg" 
                alt="Paul Ng'ang'a Kamau"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white/80 text-xs font-mono mb-1">Current Focus</p>
                  <p className="text-white font-bold text-lg">LLM Fine-Tuning & Geospatial AI</p>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;