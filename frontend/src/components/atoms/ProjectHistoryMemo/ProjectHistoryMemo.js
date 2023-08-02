import React from "react";
import './ProjectHistoryMemo.scss';

export default function ProjectHistoryMemo({ total, memo }) {

  return (
    <div className="project-history-memo">
      <div className="project-history-memo__total">
        <p>{total}</p>
      </div>
      <div className="project-history-memo__memo-container">
        <p className="project-history-memo__memo">{memo}</p>
      </div>
    </div>
  )
}