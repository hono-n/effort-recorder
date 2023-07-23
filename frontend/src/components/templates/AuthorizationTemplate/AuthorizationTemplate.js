import React from "react";

import { useFlashMessageContext } from "../../../contexts/FlashMessageContext";

import './AuthorizationTemplate.scss';
import FlashMessage from "../../molecules/FlashMessage/FlashMessage";

export default function AuthorizationTemplate({ children, title }) {

  const { showFlashMessage, flashMessage } = useFlashMessageContext();
  
  return (
    <div className="authorization">
      {showFlashMessage &&
        <FlashMessage type={flashMessage.type} message={flashMessage.message} />
      }
      <div className="authorization__back-ground"></div>
      <div className="authorization__content">
        <h1 className="authorization__header">{title}</h1>
        {children}
      </div>
    </div>
  )
}