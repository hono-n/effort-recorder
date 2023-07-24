import { useFlashMessageContext } from "../../../contexts/FlashMessageContext";

import Header from '../../organisms/Header/Header';
import ProjectList from "../../organisms/ProjectList/ProjectList";
import ProjectSummary from "../../organisms/ProjectSummary/ProjectSummary";
import ProjectHistory from "../../organisms/ProjectHistory/ProjectHistory";
import FlashMessage from "../../molecules/FlashMessage/FlashMessage";

import './DashboardTemplate.scss';


export default function DashboardTemplate() {

  const { showFlashMessage, flashMessage } = useFlashMessageContext();

  return (
    <div className='dashboard'>
      <Header />
      <div className='dashboard__content'>
        {showFlashMessage &&
          <FlashMessage type={flashMessage.type} message={flashMessage.message} />
        }
        <div className='dashboard__content-wrapper'>
          <ProjectList />
          <div className="dashboard__selected-project">
            <ProjectSummary projectName='英語' total='4時間24分' />
            <ProjectHistory />
          </div>
        </div>
      </div>
    </div>
  );
}