import React, { useState } from "react";
import './ProjectList.scss';
import ProjectListItem from "../../atoms/ProjectListItem/ProjectListItem";


export default function ProjectList() {


  return (
    <div className="project-list">
      <ProjectListItem />
      <ProjectListItem />
    </div>
  )
}
