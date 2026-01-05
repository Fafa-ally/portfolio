import React from 'react';
import { TECH_STACK } from '../constants';

const Marquee: React.FC = () => {
  return (
    <div className="relative w-full py-10 overflow-hidden bg-neutral-950 border-y border-white/5">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-neutral-950 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-neutral-950 to-transparent z-10" />
      
      <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
        {[...TECH_STACK, ...TECH_STACK, ...TECH_STACK].map((tech, index) => (
          <div 
            key={`${tech}-${index}`} 
            className="mx-8 flex items-center gap-2 text-3xl font-display font-bold text-neutral-800 hover:text-primary transition-colors duration-300 select-none uppercase"
          >
             {tech}
             <span className="w-2 h-2 rounded-full bg-blue-900" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;