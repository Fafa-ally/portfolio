import React from 'react';
import { ArrowDown, GraduationCap, MapPin, MousePointerClick } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#020408] pt-24 pb-12 sm:pt-0">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[128px] opacity-40 animate-pulse-slow" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[128px] opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full h-full flex flex-col md:justify-center">
        
        {/* Main Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 items-center">

          {/* Intro Text (Left on Desktop, Top on Mobile) */}
          <div className="md:col-span-4 order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6 animate-fade-in-up">
             
             {/* Role Tag */}
             <div className="w-16 h-1 bg-primary mb-2 rounded-full hidden md:block"></div>
             
             <h2 className="text-xl md:text-2xl font-medium text-blue-200 tracking-wide">
                Software Engineer
             </h2>

             <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[0.9] tracking-tight">
               Fatma <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-200">Ali Ahmed</span>
             </h1>

             <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-sm">
               Hi, My name is Fatma. I transform complex requirements into robust C# solutions and actionable data insights.
             </p>

             {/* Education Highlight Card */}
             <div className="flex items-center gap-3 p-3 rounded-2xl bg-surfaceHighlight/50 border border-white/5 w-full max-w-xs hover:border-primary/30 transition-colors mt-4">
                <div className="w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center text-primary shrink-0">
                  <GraduationCap size={20} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-neutral-400 uppercase tracking-wider">Education</p>
                  <p className="text-sm font-bold text-white">BSc Software Development</p>
                  <p className="text-[10px] text-blue-300">KCA University (2nd Class Upper)</p>
                </div>
             </div>
          </div>

          {/* Central Visual (Center) */}
          <div className="md:col-span-4 order-1 md:order-2 flex justify-center relative my-8 md:my-0">
             {/* 3D Avatar */}
             <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 group">
                <div className="absolute inset-4 bg-gradient-to-tr from-primary to-transparent rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="relative w-full h-full rounded-[3rem] overflow-hidden border border-white/5 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm shadow-2xl">
                  <img 
                    src="/images/fatma-image.jpg" 
                    alt="Fatma Avatar" 
                    className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-transparent to-transparent opacity-60"></div>
                  
                  {/* Floating Tags inside Avatar Frame */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-primary font-mono mb-1">LOCATION</span>
                      <span className="text-sm font-bold text-white flex items-center gap-1"><MapPin size={12}/> Nairobi, Kenya</span>
                    </div>
                  </div>
                </div>
             </div>

             {/* Name typography in front (Faded & Integrated) */}
             <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] md:text-[11rem] font-display font-bold text-white/10 tracking-tighter select-none pointer-events-none whitespace-nowrap z-20 mix-blend-overlay">
               FATMA
             </h1>
          </div>

          {/* Stats/Quick Info (Right on Desktop, Bottom on Mobile) */}
          <div className="md:col-span-4 order-3 flex flex-col items-center md:items-end space-y-8 animate-fade-in-right">
             <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                <div className="p-4 rounded-2xl bg-surfaceHighlight border border-white/5 hover:border-primary/50 transition-all group">
                   <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">C#</h3>
                   <p className="text-xs text-neutral-500">Core Stack</p>
                </div>
                <div className="p-4 rounded-2xl bg-surfaceHighlight border border-white/5 hover:border-primary/50 transition-all group">
                   <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">SQL</h3>
                   <p className="text-xs text-neutral-500">Data Logic</p>
                </div>
                <div className="p-4 rounded-2xl bg-surfaceHighlight border border-white/5 hover:border-primary/50 transition-all group">
                   <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">Dart</h3>
                   <p className="text-xs text-neutral-500">Mobile Dev</p>
                </div>
                <div className="p-4 rounded-2xl bg-surfaceHighlight border border-white/5 hover:border-primary/50 transition-all group">
                   <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">4+</h3>
                   <p className="text-xs text-neutral-500">Years Education</p>
                </div>
             </div>

             <a href="#contact" className="hidden md:flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors group">
               Start a project <MousePointerClick size={16} className="group-hover:translate-x-1 transition-transform"/>
             </a>
          </div>

        </div>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest text-neutral-500">Scroll</span>
        <ArrowDown size={16} className="text-primary" />
      </div>
    </section>
  );
};

export default Hero;