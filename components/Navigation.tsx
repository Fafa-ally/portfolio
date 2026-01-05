import React, { useEffect, useState } from 'react';
import { NAV_ITEMS } from '../constants';
import { ArrowRight, BookOpen, Briefcase } from 'lucide-react';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-40 flex justify-center py-6 px-4 pointer-events-none">
      <nav className={`pointer-events-auto transition-all duration-500 ease-out flex items-center gap-2 sm:gap-4 p-2 rounded-full border ${
        scrolled 
          ? 'bg-neutral-950/80 backdrop-blur-xl border-white/10 shadow-2xl shadow-blue-900/20' 
          : 'bg-transparent border-transparent'
      }`}>
        {NAV_ITEMS.map((item, index) => {
          
          return (
            <a
              key={item.label}
              href={item.href}
              className={`
                relative group flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                ${item.primary 
                  ? 'bg-transparent text-white border border-primary/50 hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]' 
                  : 'bg-surfaceHighlight/50 text-neutral-300 hover:text-white hover:bg-surfaceHighlight border border-white/5'
                }
              `}
            >
              {item.primary && (
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
              {item.primary && <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />}
              {!item.primary && index === 0 && <span className="w-6 h-6 rounded-full bg-blue-900/30 flex items-center justify-center text-primary"><Briefcase size={12}/></span>}
              {!item.primary && index === 1 && <span className="w-6 h-6 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400"><BookOpen size={12}/></span>}
              
              <span className="relative z-10">{item.label}</span>
            </a>
          );
        })}
      </nav>
    </div>
  );
};

export default Navigation;