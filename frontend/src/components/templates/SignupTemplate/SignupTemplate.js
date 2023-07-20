import React from "react";

import SignupSection from "../../organisms/SignupSection/SignupSection";
import './SignupTemplate.scss';

export default function SignupTemplate() {
  return (
    <div className="signup">
      <div className="signup__back-ground"></div>
      <SignupSection className="signup__content" />
    </div>
  )
}