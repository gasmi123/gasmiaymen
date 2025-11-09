
import React, { forwardRef } from 'react';
import { Project } from '../types';
import { GithubIcon, ExternalLinkIcon } from './icons/SocialIcons';


interface ProjectsProps {
  projects: Project[];
}

const AnimatedSection = forwardRef<HTMLElement, { children: React.ReactNode, id: string }>(({ children, id }, ref) => {
    return (
        <section id={id} ref={ref} className="py-20 bg-slate-950/50">
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

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-dark-card rounded-lg overflow-hidden shadow-lg group transform hover:-translate-y-2 transition-transform duration-300">
      <div className="relative">
        <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover group-hover:opacity-75 transition-opacity duration-300" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-4">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-white p-3 bg-brand-primary/80 rounded-full hover:bg-brand-primary transition-colors">
                <ExternalLinkIcon className="w-6 h-6" />
              </a>
            )}
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-white p-3 bg-brand-primary/80 rounded-full hover:bg-brand-primary transition-colors">
              <GithubIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-dark-text mb-2">{project.title}</h3>
        <p className="text-dark-subtext text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span key={index} className="text-xs font-semibold bg-brand-primary/20 text-brand-secondary px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = forwardRef<HTMLElement, ProjectsProps>(({ projects }, ref) => {
  return (
    <AnimatedSection id="projects" ref={ref}>
      <SectionTitle>Featured Projects</SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </AnimatedSection>
  );
});

Projects.displayName = 'Projects';

export default Projects;
