
import React, { forwardRef } from 'react';
import { Skill } from '../types';

interface SkillsProps {
  skills: { category: string; skills: Skill[] }[];
}

const AnimatedSection = forwardRef<HTMLElement, { children: React.ReactNode, id: string }>(({ children, id }, ref) => {
    return (
        <section id={id} ref={ref} className="py-20 bg-dark-bg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {children}
            </div>
        </section>
    );
});
AnimatedSection.displayName = 'AnimatedSection';


const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-dark-text relative pb-4">
        {children}
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-brand-primary rounded"></span>
    </h2>
);


const Skills = forwardRef<HTMLElement, SkillsProps>(({ skills }, ref) => {
  return (
    <AnimatedSection id="skills" ref={ref}>
      <SectionTitle>My Technical Skills</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skillGroup, index) => (
          <div key={index} className="bg-dark-card rounded-lg p-6 shadow-lg hover:shadow-brand-primary/20 transition-shadow duration-300">
            <h3 className="text-xl font-bold text-brand-secondary mb-4">{skillGroup.category}</h3>
            <div className="grid grid-cols-2 gap-4">
              {skillGroup.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="flex items-center space-x-3 bg-slate-700/50 p-2 rounded-md">
                  <skill.icon className="w-5 h-5 text-brand-secondary" />
                  <span className="text-dark-subtext font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
});

Skills.displayName = 'Skills';

export default Skills;
