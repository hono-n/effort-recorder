import React from "react";
import cn from "classnames";

import './ProjectListItem.scss';

export default function ProjectListItem({
  state,
  label,
  handleClick
}) {

  const projectListItemClass = {
    'project-list-item': true,
    'project-list-item--normal': state === 'normal',
    'project-list-item--selected': state === 'selected'
  }
  return (
    <button className={cn(projectListItemClass)} onClick={handleClick}>{label}</button>
  )
}