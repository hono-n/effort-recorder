import { useFlashMessageContext } from "../../../contexts/FlashMessageContext";

import Header from '../../organisms/Header/Header';
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
        <div style={{width: '100px', height: '100px', backgroundColor: '#ffffff'}}></div>
      </div>
    </div>
  );
}