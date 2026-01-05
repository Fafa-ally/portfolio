import React from 'react';
import { TIMELINE } from '../constants';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 bg-[#020408] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Journey</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-white">
            Education & <span className="text-neutral-500">Experience</span>
          </h3>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-8 space-y-12">
          {TIMELINE.map((item, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12 group">
              {/* Timeline Dot */}
              <div className={`absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full border-2 ${item.type === 'work' ? 'bg-primary border-primary' : 'bg-[#020408] border-neutral-500 group-hover:border-primary'} transition-colors duration-300`} />
              
              {/* Card */}
              <div className="relative p-6 rounded-2xl bg-surfaceHighlight border border-white/5 hover:border-primary/20 transition-all duration-300 hover:translate-x-2">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                   <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${item.type === 'work' ? 'bg-primary/20 text-primary' : 'bg-white/5 text-neutral-400'}`}>
                        {item.type === 'work' ? <Briefcase size={18} /> : <GraduationCap size={18} />}
                      </div>
                      <h4 className="text-xl font-bold text-white">{item.title}</h4>
                   </div>
                   <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 bg-black/30 px-3 py-1 rounded-full w-fit">
                      <Calendar size={12} />
                      {item.year}
                   </div>
                </div>
                
                <h5 className="text-primary font-medium mb-2">{item.organization}</h5>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;