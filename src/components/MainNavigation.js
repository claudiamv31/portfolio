import { useState, useEffect } from 'react';

const MainNavigation = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'resume', 'projects', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const getLinkClassName = (sectionId) => {
    const base =
      'font-body-md text-body-md pb-1 transition-all duration-200 ease-in-out border-b-2';
    if (activeSection === sectionId) {
      return `${base} text-primary font-bold border-primary`;
    }
    return `${base} text-secondary hover:text-primary border-transparent`;
  };

  return (
    <header className="bg-background dark:bg-background full-width top-0 sticky z-50">
      <nav className="flex justify-between items-center max-w-container-max mx-auto px-margin-desktop h-20">
        <div className="font-headline-sm text-headline-sm font-bold text-on-surface dark:text-on-surface tracking-tighter">
          Claudia Vega
        </div>
        <div className="hidden md:flex items-center gap-gutter">
          <a className={getLinkClassName('home')} href="#home">
            Home
          </a>
          <a className={getLinkClassName('resume')} href="#resume">
            CV
          </a>
          <a className={getLinkClassName('projects')} href="#projects">
            Projects
          </a>
          <a className={getLinkClassName('contact')} href="#contact">
            Contact
          </a>
        </div>
        <button
          className="bg-primary text-on-primary px-6 py-3 font-label-md text-label-md uppercase tracking-widest hover:opacity-80 transition-opacity"
          onClick={() => (window.location.href = '#contact')}
        >
          Contact Me
        </button>
      </nav>
    </header>
  );
};

export default MainNavigation;
