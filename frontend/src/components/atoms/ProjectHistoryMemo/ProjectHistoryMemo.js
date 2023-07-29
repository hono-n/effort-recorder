import React, { useState } from "react";
import './ProjectHistoryMemo.scss';

export default function ProjectHistoryMemo({ total, memo }) {

  const [showTooltip, setShowTooltip] = useState(false);
  const handleShowTooltip = (e) => {
    e.stopPropagation();
    setShowTooltip(true);
  }
  const handleHideTooltip = (e) => {
    e.stopPropagation();
    setShowTooltip(false);
  }

  return (
    <div className="project-history-memo" onMouseOver={handleShowTooltip} onMouseLeave={handleHideTooltip}>
      <div className="project-history-memo__total">
        <p>{total}</p>
      </div>
      <div className="project-history-memo__memo-container">
        <p className="project-history-memo__memo">{memo}</p>
      </div>
      {showTooltip && <MemoTooltip memo={memo} />}
    </div>
  )
}


export function MemoTooltip({ memo }) {
  return (
    <div className="memo-tooltip">
      <div className="memo-tooltip__decoration"></div>
      <div className="memo-tooltip__container">
        <div className="memo-tooltip__header">MEMO</div>
        <div className="memo-tooltip__content">
          {memo}
        </div>
      </div>

    </div>
  )
}