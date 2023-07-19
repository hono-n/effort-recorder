import React from "react";

import './LoginTemplate.scss';

import LoginSection from "../../organisms/LoginSection/LoginSection";

export default function LoginTemplate(props) {
  return (
    <div className="login">
      <div className="login__back-ground"></div>
      <LoginSection className="login__section" {...props} />
    </div>
  )
}