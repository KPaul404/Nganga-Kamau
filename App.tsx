import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Awards from './components/Awards';
import ChatWidget from './components/ChatWidget';
import { ThemeProvider } from './context/ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="bg-gray-50 dark:bg-[#000000] min-h-screen text-neutral-900 dark:text-slate-200 selection:bg-orange-500/30 overflow-x-hidden transition-colors duration-300 font-sans antialiased">
        <Navbar />
        
        <main className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 pt-24 pb-20 space-y-6">
          <Hero />
          
          {/* Bento Grid Layout Wrapper */}
          <div className="grid grid-cols-1 gap-6">
            <About />
            <Projects />
            <Awards />
          </div>
        </main>

        <footer className="py-12 text-center text-neutral-400 text-sm transition-colors duration-300">
          <div className="container mx-auto px-6">
            <p className="mb-2 font-medium">&copy; {new Date().getFullYear()} Paul Ng'ang'a Kamau.</p>
            <p className="opacity-60"></p>
          </div>
        </footer>

        <ChatWidget />
      </div>
    </ThemeProvider>
  );
};

export default App;