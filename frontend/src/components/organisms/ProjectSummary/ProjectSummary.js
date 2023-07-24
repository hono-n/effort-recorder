import React, { useState } from "react";
import './ProjectSummary.scss';


import Button from "../../molecules/Button/Button";


export default function ProjectSummary({
  projectName,
  total
}) {

  return (
    <div className="project-summary">
      <h2 className="project-summary__title">{projectName}</h2>
      <h3 className="project-summary__header">トータル学習時間</h3>
      <p className="project-summary__total">{total}</p>
      <Button
        className="project-summary__button"
        style={{ height: '64px', width: '240px', borderRadius: '12px' }}
        label='学習記録スタート' />
    </div>
  )
}
