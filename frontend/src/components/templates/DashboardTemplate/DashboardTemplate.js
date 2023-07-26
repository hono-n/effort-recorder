import { useFlashMessageContext } from "../../../contexts/FlashMessageContext";

import Header from '../../organisms/Header/Header';
import ProjectList from "../../organisms/ProjectList/ProjectList";
import ProjectSummary from "../../organisms/ProjectSummary/ProjectSummary";
import ProjectHistory from "../../organisms/ProjectHistory/ProjectHistory";
import FlashMessage from "../../molecules/FlashMessage/FlashMessage";

import './DashboardTemplate.scss';
import Modal from "../../molecules/Modal/Modal";


export default function DashboardTemplate() {

  const { showFlashMessage, setShowFlashMessage, flashMessage } = useFlashMessageContext();

  return (
    <div className='dashboard'>
      <Header />
      <div className='dashboard__content'>
        {showFlashMessage &&
          <FlashMessage type={flashMessage.type} message={flashMessage.message} handleClick={() => setShowFlashMessage(false)} />
        }
        <div className='dashboard__content-wrapper'>
          <ProjectList />
          <div className="dashboard__selected-project">
            <ProjectSummary projectName='英語' total='4時間24分' />
            <ProjectHistory />
            {/* <Modal /> */}
          </div>
        </div>
      </div>
    </div>
  );
}