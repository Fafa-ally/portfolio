import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Experience from './components/Experience';
import BentoGrid from './components/BentoGrid';
import Footer from './components/Footer';
import AIChatBot from './components/AIChatBot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-neutral-200 selection:bg-primary selection:text-black font-sans w-full overflow-x-hidden">
      <Navigation />
      
      <main className="w-full overflow-x-hidden">
        <Hero />
        <Marquee />
        <Experience />
        <Services />
        <BentoGrid />
      </main>

      <Footer />
      <AIChatBot />
      
      {/* Global Grain/Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] mix-blend-overlay"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>
    </div>
  );
};

export default App;