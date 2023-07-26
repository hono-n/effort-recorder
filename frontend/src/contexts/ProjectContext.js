import { useState, createContext, useContext } from 'react';

const ProjectContext = createContext(null);

export function ProjectProvider({ children }) {

  const [projects, setProjects] = useState(null);

  const projectProps = {
    projects: projects,
    setProjects: setProjects,
  }

  return (
    <ProjectContext.Provider value={projectProps}>
      {children}
    </ProjectContext.Provider>
  );
}

export function useProjectContext() {
  return useContext(ProjectContext);
}
