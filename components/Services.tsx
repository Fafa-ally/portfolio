import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-surfaceHighlight/30 relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">Technical Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
              A comprehensive toolkit for <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">modern problem solving.</span>
            </h3>
          </div>
          <div className="h-px flex-1 bg-white/10 hidden md:block mb-8 ml-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, idx) => (
            <div 
              key={idx} 
              className="group relative p-8 rounded-3xl bg-neutral-900/50 backdrop-blur-sm border border-white/5 hover:border-primary/40 transition-all duration-500 flex flex-col justify-between h-full overflow-hidden"
            >
              {/* Card Gradient Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-surfaceHighlight border border-white/5 flex items-center justify-center text-white group-hover:bg-primary group-hover:text-black group-hover:scale-110 transition-all duration-500 shadow-xl">
                    <service.icon size={32} strokeWidth={1.5} />
                  </div>
                  <span className="text-xs font-mono text-neutral-600 border border-white/5 px-3 py-1.5 rounded-full group-hover:text-primary group-hover:border-primary/20 transition-colors">0{idx + 1}</span>
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h4>
                <p className="text-neutral-400 mb-8 leading-relaxed text-sm group-hover:text-neutral-300 transition-colors">
                  {service.description}
                </p>
              </div>
              
              <div className="relative z-10 space-y-4">
                <div className="h-px w-full bg-white/5 group-hover:bg-gradient-to-r from-primary/50 to-transparent transition-all duration-500" />
                <div className="flex flex-wrap gap-2">
                  {service.skills.map(skill => (
                    <span key={skill} className="px-3 py-1.5 text-xs font-medium rounded-lg bg-black/40 text-neutral-400 border border-white/5 group-hover:border-primary/30 group-hover:text-white transition-all duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;