import React from "react";

import { useFlashMessageContext } from "../../../contexts/FlashMessageContext";

import './AuthorizationTemplate.scss';
import FlashMessage from "../../molecules/FlashMessage/FlashMessage";
import logo from '../../../assets/logo/logo_img.png';

export default function AuthorizationTemplate({ children, title }) {

  const { showFlashMessage, setShowFlashMessage, flashMessage } = useFlashMessageContext();

  return (
    <div className="authorization">
      {showFlashMessage &&
        <FlashMessage type={flashMessage.type} message={flashMessage.message} handleClick={() => setShowFlashMessage(false)} />
      }
      <div className="authorization__back-ground">
        <div className="authorization__logo-container">
          <img className="authorization__logo-img" src={logo} alt='logo'></img>
          <p className="authorization__logo-text">EFFORT RECORDER</p>
        </div>
      </div>
      <div className="authorization__content">
        <h1 className="authorization__header">{title}</h1>
        {children}
      </div>
    </div>
  )
}