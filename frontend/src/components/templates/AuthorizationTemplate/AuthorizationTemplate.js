import React from "react";
import './AuthorizationTemplate.scss';

export default function AuthorizationTemplate({ children, title }) {
  return (
    <div className="authorization">
      <div className="authorization__back-ground"></div>
      <div className="authorization__content">
        <h1 className="authorization__header">{title}</h1>
        {children}
      </div>
    </div>
  )
}