import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS_DATA } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects">
      {/* Section Header styled as a widget header */}
      <div className="mb-6 px-4 flex justify-between items-end">
        <div>
           <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">Selected Works</h2>
           <p className="text-neutral-500 dark:text-neutral-400">Innovations in Multimodal AI & Geospatial.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS_DATA.map((project, index) => {
          // Logic for Bento Grid Layout for 4 items
          // Pattern: Wide, Small, Small, Wide
          // Desktop (LG - 3 cols): Row 1 [Wide(2), Small(1)], Row 2 [Small(1), Wide(2)]
          // Tablet (MD - 2 cols): Row 1 [Wide(2)], Row 2 [Small(1), Small(1)], Row 3 [Wide(2)]
          
          let colSpanClass = "aspect-square"; // Default
          
          if (index === 0 || index === 3) {
             // Wide cards
             colSpanClass = "md:col-span-2 lg:col-span-2 aspect-video"; 
          } else {
             // Standard small cards
             colSpanClass = "md:col-span-1 lg:col-span-1 aspect-square";
          }

          return (
            <div 
              key={project.id} 
              className={`
                group relative overflow-hidden rounded-[2rem] bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 hover:scale-[1.02]
                ${colSpanClass}
              `}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                 <img 
                   src={project.image} 
                   alt={project.title} 
                   className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 transition-opacity duration-300"></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end h-full">
                 <div className="transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
                    <div className="flex flex-wrap gap-2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="px-2.5 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider rounded-md border border-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className={`font-bold text-white mb-2 leading-tight ${(index === 0 || index === 3) ? 'text-3xl md:text-3xl' : 'text-2xl'}`}>
                      {project.title}
                    </h3>
                    
                    <p className={`text-gray-300 text-sm leading-relaxed line-clamp-2 mb-4 max-w-lg ${(index === 0 || index === 3) ? 'block' : 'hidden md:block'}`}>
                      {project.description}
                    </p>

                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white font-bold text-sm hover:text-orange-400 transition-colors">
                          View Project <ArrowUpRight size={16} />
                      </a>
                    )}
                 </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;