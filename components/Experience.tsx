
import React, { forwardRef } from 'react';
import { ExperienceItem } from '../types';
import { BriefcaseIcon, AcademicCapIcon } from './icons/MenuIcons';


interface ExperienceProps {
  experiences: ExperienceItem[];
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
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-dark-text relative pb-4">
        {children}
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-brand-primary rounded"></span>
    </h2>
);

const TimelineItem: React.FC<{ item: ExperienceItem }> = ({ item }) => {
  const Icon = item.isEducation ? AcademicCapIcon : BriefcaseIcon;

  return (
    <div className="relative pl-12 pb-12">
      <div className="absolute left-0 top-0 h-full w-px bg-slate-700"></div>
      <div className="absolute left-[-11px] top-1.5 w-6 h-6 bg-dark-card border-2 border-brand-primary rounded-full flex items-center justify-center">
        <Icon className="w-3 h-3 text-brand-primary" />
      </div>
      <div className="bg-dark-card p-6 rounded-lg shadow-lg hover:shadow-brand-primary/20 transition-shadow duration-300">
        <p className="text-sm font-semibold text-brand-secondary mb-1">{item.period}</p>
        <h3 className="text-lg font-bold text-dark-text">{item.role}</h3>
        <p className="text-md text-dark-subtext mb-3">{item.company}</p>
        <p className="text-sm text-dark-subtext leading-relaxed">{item.description}</p>
      </div>
    </div>
  );
};


const Experience = forwardRef<HTMLElement, ExperienceProps>(({ experiences }, ref) => {
  return (
    <AnimatedSection id="experience" ref={ref}>
      <SectionTitle>Career & Education</SectionTitle>
      <div className="max-w-3xl mx-auto">
        {experiences.map((item, index) => (
          <TimelineItem key={index} item={item} />
        ))}
      </div>
    </AnimatedSection>
  );
});
Experience.displayName = 'Experience';

export default Experience;
