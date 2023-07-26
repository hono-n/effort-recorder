import { ProjectProvider, useProjectContext } from "../contexts/ProjectContext";
import DashboardTemplate from "../components/templates/DashboardTemplate/DashboardTemplate";


export default function Dashboard() {
  return (
    <ProjectProvider>
      <DashboardTemplate />
    </ProjectProvider>
  );
}