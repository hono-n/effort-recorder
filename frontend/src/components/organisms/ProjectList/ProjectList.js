import React, { useState } from "react";
import './ProjectList.scss';
import ProjectListItem from "../../atoms/ProjectListItem/ProjectListItem";

import LinkButton from "../../molecules/LinkButton/LinkButton";


export default function ProjectList() {

  const projectObj = [];
  for (let i = 1; i <= 10; i++) {
    projectObj.push({ id: i, projectName: `プロジェクト${i}`, state: 'normal' });
  }
  projectObj[2].state = 'selected';
  console.log(projectObj);

  return (
    <div className="project-list">
      <div className="project-list__overview">
        <h2 className="project-list__title">プロジェクトを選択</h2>
        <LinkButton className="project-list__link-button" label="プロジェクトを追加" />
      </div>
      <div className="project-list__items-container">
        <div className="project-list__items">
          {projectObj.map(obj =>
            <li key={obj.id}>
              <ProjectListItem state={obj.state} label={obj.projectName} />
            </li>
          )}
        </div>
      </div>
    </div>
  )
}
