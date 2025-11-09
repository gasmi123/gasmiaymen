
import React from 'react';

export interface Skill {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  isEducation?: boolean;
}

export type SectionRefs = {
    [key: string]: React.RefObject<HTMLElement>;
};
