import React, { useState, useEffect } from 'react';
import { Sun, Moon, Home, User, Sparkles, Trophy } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'awards'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'Me', href: '#about', icon: User },
    { name: 'Projects', href: '#projects', icon: Sparkles },
    { name: 'Awards', href: '#awards', icon: Trophy },
  ];

  return (
    <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto bg-white/80 dark:bg-neutral-900/80 backdrop-blur-2xl border border-white/20 dark:border-white/10 rounded-full shadow-2xl shadow-black/5 dark:shadow-black/20 px-2 py-2 flex items-center gap-1 transition-all duration-300">
        
        {navItems.map((item) => {
          const isActive = activeSection === item.href.replace('#', '');
          const Icon = item.icon;
          
          return (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`relative px-4 py-2.5 rounded-full flex items-center gap-2 transition-all duration-300 ${
                isActive 
                  ? 'bg-neutral-900 dark:bg-white text-white dark:text-black' 
                  : 'text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
              }`}
            >
              <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
              <span className={`text-sm font-semibold ${isActive ? 'block' : 'hidden md:block'}`}>
                {item.name}
              </span>
            </a>
          );
        })}

        <div className="w-[1px] h-6 bg-neutral-200 dark:bg-white/10 mx-1"></div>

        <button
          onClick={toggleTheme}
          className="p-3 rounded-full text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
