import { useState, createContext, useContext } from 'react';

const ProjectContext = createContext(null);

export function ProjectProvider({ children }) {

  const [projects, setProjects] = useState(null);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [total, setTotal] = useState();
  const [lastUpdated, setLastUpdated] = useState(null);

  const projectProps = {
    projects: projects,
    setProjects: setProjects,
    selectedProjectId: selectedProjectId,
    setSelectedProjectId: setSelectedProjectId,
    total: total,
    setTotal: setTotal,
    lastUpdated: lastUpdated,
    setLastUpdated: setLastUpdated
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
