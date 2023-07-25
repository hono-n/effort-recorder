import React from "react";
import cn from "classnames";

import './ProjectHistoryItem.scss';
import ProjectHistoryRecord from "../../atoms/ProjectHistoryRecord/ProjectHistoryRecord";
import ProjectHistoryMemo from "../../atoms/ProjectHistoryMemo/ProjectHistoryMemo";

export default function ProjectHistoryItem({ date, start_timestamp, end_timestamp, total, memo }) {


  return (
    <div className="project-history-item">
      <div className="project-history-item__date-container">
        <p className="project-history-item__date">{date}</p>
      </div>
      <ProjectHistoryRecord start_timestamp={start_timestamp} end_timestamp={end_timestamp} />
      {memo && <ProjectHistoryMemo total={total} memo={memo} />}
    </div>
  )
}