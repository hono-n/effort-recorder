import { useFlashMessageContext } from "../../../contexts/FlashMessageContext";
import { useProjectContext } from "../../../contexts/ProjectContext";

import Header from '../../organisms/Header/Header';
import ProjectList from "../../organisms/ProjectList/ProjectList";
import ProjectSummary from "../../organisms/ProjectSummary/ProjectSummary";
import ProjectHistory from "../../organisms/ProjectHistory/ProjectHistory";
import FlashMessage from "../../molecules/FlashMessage/FlashMessage";

import './DashboardTemplate.scss';

export default function DashboardTemplate() {

  const { showFlashMessage, setShowFlashMessage, flashMessage } = useFlashMessageContext();
  const { projects, selectedProjectId } = useProjectContext();

  return (
    <div className='dashboard'>
      <Header />
      <div className='dashboard__content'>
        {showFlashMessage &&
          <FlashMessage type={flashMessage.type} message={flashMessage.message} handleClick={() => setShowFlashMessage(false)} />
        }
        <div className='dashboard__content-wrapper'>
          <ProjectList />
          {selectedProjectId ?
            <div className="dashboard__selected-project">
              <ProjectSummary />
              <ProjectHistory />
            </div>
            :
            <div className="dashboard__no-project-container">
              <p>プロジェクトを作成して記録を開始しましょう</p>
            </div>
          }
        </div>
      </div>
    </div>
  );
}