import React, { useState } from "react";

import './ProjectHistory.scss';


export default function ProjectHistory() {

  return (
    <div className="project-history">
      <div className="project-history__selected-month">2023/07</div>
      <div className="project-history__items-wrapper">
        <div className="project-history__items-container">

            <div className="project-history__item"></div>
            <div className="project-history__item"></div>
            <div className="project-history__item"></div>
            <div className="project-history__item"></div>
            <div className="project-history__item"></div>
            <div className="project-history__item"></div>

        </div>
      </div>
    </div>
  )
}
