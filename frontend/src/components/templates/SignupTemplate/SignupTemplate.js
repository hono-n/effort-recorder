import React from "react";

import './SignupTemplate.scss';
import SignupSection from "../../organisms/SignupSection/SignupSection";


export default function SignupTemplate(props) {

  return (
    <div className="signup">
      <div className="signup__back-ground"></div>
      <SignupSection className="signup__content" {...props}/>
    </div>
  )
}