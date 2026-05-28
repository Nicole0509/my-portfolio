import React, { createContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  hidden: boolean;
}

interface ProjectContextType {
  projects: Project[];
  addProject: (p: Omit<Project, 'id'>) => void;
  updateProject: (id: string, p: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  toggleHideProject: (id: string) => void;
}

export const ProjectContext = createContext<ProjectContextType>({} as ProjectContextType);

export const ProjectProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem('portfolio_projects');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('portfolio_projects', JSON.stringify(projects));
  }, [projects]);

  const addProject = (p: Omit<Project, 'id'>) => {
    const newProject = { ...p, id: Date.now().toString() };
    setProjects(prev => [...prev, newProject]);
  };

  const updateProject = (id: string, updated: Partial<Project>) => {
    setProjects(prev => prev.map(p => p.id === id ? { ...p, ...updated } : p));
  };

  const deleteProject = (id: string) => {
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  const toggleHideProject = (id: string) => {
    setProjects(prev => prev.map(p => p.id === id ? { ...p, hidden: !p.hidden } : p));
  };

  return (
    <ProjectContext.Provider value={{ projects, addProject, updateProject, deleteProject, toggleHideProject }}>
      {children}
    </ProjectContext.Provider>
  );
};
