import React from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

const BentoCard: React.FC<{ project: Project }> = ({ project }) => {
  const getSpanClass = (span: string) => {
    switch (span) {
      case 'large': return 'md:col-span-2 md:row-span-2';
      case 'tall': return 'md:col-span-1 md:row-span-2';
      case 'medium': return 'md:col-span-2 md:row-span-1';
      default: return 'md:col-span-1 md:row-span-1';
    }
  };

  return (
    <div className={`group relative rounded-3xl overflow-hidden bg-surfaceHighlight border border-white/5 ${getSpanClass(project.span)}`}>
      {/* Hover Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none" />
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 z-30 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <div className="flex justify-between items-end">
          <div>
             <span className="inline-block px-2 py-1 mb-2 text-[10px] uppercase tracking-wider font-bold text-black bg-primary rounded-md opacity-0 group-hover:opacity-100 transition-opacity delay-75">
               {project.category}
             </span>
             <h3 className="text-xl font-bold text-white drop-shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform delay-75">
               {project.title}
             </h3>
          </div>
          <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300 delay-100">
             <ArrowUpRight size={20} />
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="h-full w-full overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
      </div>
      
      <a href={project.link} className="absolute inset-0 z-40" aria-label={`View ${project.title}`}></a>
    </div>
  );
};

const BentoGrid: React.FC = () => {
  return (
    <section id="work" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Selected Works
          </h2>
          <p className="text-neutral-400 max-w-md">
            A curation of projects exploring the intersection of design, technology, and human interaction.
          </p>
        </div>
        <a href="#" className="flex items-center gap-2 text-primary hover:text-emerald-300 transition-colors">
          View all projects <ExternalLink size={16} />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
        {PROJECTS.map((project) => (
          <BentoCard key={project.id} project={project} />
        ))}
        
        {/* Fillers for visual complexity */}
        <div className="md:col-span-1 md:row-span-1 rounded-3xl bg-neutral-900 border border-white/5 flex items-center justify-center p-6 text-center group hover:border-primary/30 transition-colors">
           <div>
             <h3 className="text-3xl font-bold text-primary mb-1">50+</h3>
             <p className="text-xs text-neutral-500 uppercase tracking-widest">Happy Clients</p>
           </div>
        </div>
        <div className="md:col-span-1 md:row-span-1 rounded-3xl bg-gradient-to-br from-neutral-900 to-black border border-white/5 flex items-center justify-center group hover:border-primary/30 relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
           <p className="text-neutral-400 text-sm font-mono relative z-10 px-4 text-center group-hover:text-primary transition-colors">
             "Design is intelligence made visible."
           </p>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;