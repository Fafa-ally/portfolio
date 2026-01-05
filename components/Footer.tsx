import React from 'react';
import { SOCIALS } from '../constants';
import { Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative pt-24 pb-12 px-4 bg-neutral-950 border-t border-white/5 overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 blur-[2px]" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">
          Ready to collaborate? <br/>
          <span className="text-neutral-500">Let's solve complex problems.</span>
        </h2>

        <div className="flex flex-col items-center gap-8 mb-16">
          <a 
            href="mailto:allyfatma167@gmail.com" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-105 hover:bg-blue-300 transition-all duration-300"
          >
            <Mail size={20} />
            Send me an Email
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {SOCIALS.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-neutral-900 border border-white/5 flex items-center justify-center text-neutral-400 hover:text-white hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
              aria-label={social.platform}
            >
              <social.icon size={20} className="group-hover:scale-110 transition-transform" />
            </a>
          ))}
        </div>

        <div className="flex justify-between items-center pt-8 border-t border-white/5 text-xs text-neutral-600 uppercase tracking-widest">
          <p>© 2025 Fatma Ali Ahmed. All rights reserved.</p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;