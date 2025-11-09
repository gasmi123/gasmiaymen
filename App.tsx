
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { SKILLS, PROJECTS, EXPERIENCE } from './constants';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const sectionRefs = {
    home: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    experience: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-dark-bg">
      <Header activeSection={activeSection} />
      <main className="flex-grow">
        <Hero ref={sectionRefs.home} />
        <Skills ref={sectionRefs.skills} skills={SKILLS} />
        <Projects ref={sectionRefs.projects} projects={PROJECTS} />
        <Experience ref={sectionRefs.experience} experiences={EXPERIENCE} />
        <Contact ref={sectionRefs.contact} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
