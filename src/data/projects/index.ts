import { Project } from './types';
import { meetMateProject } from './meetmate';
import { resumeProcessorProject } from './resumeprocessor';
import { prodProject } from './prod';
import { safetyAppProject } from './safetyapp';

export const projects: Project[] = [
  meetMateProject,
  resumeProcessorProject,
  prodProject,
  safetyAppProject,
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((p) => p.id === id);
};

export * from './types';
export { meetMateProject, resumeProcessorProject, prodProject, safetyAppProject };
