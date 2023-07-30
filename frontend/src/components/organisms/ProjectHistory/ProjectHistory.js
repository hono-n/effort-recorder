import React, { useEffect } from "react";
import { useProjectContext } from "../../../contexts/ProjectContext";
import { useProjectHistory } from "../../../hooks/ProjectHistory.hook";

import './ProjectHistory.scss';
import ProjectHistoryItem from "../../molecules/ProjectHistoryItem/ProjectHistoryItem";

export default function ProjectHistory() {

  const { selectedProjectId, setTotal } = useProjectContext();

  const {
    formData,
    isLoading,
    handleLoad,
    histories,
    handleFormAction,
    handleInputValue,
  } = useProjectHistory({ selectedProjectId, setTotal });

  useEffect(() => {
    handleLoad();
  }, [selectedProjectId]);

  const sectionContent = histories?.map((obj, idx) => {
    const targetMonth = Object.keys(obj)[0];
    const dataArray = obj[targetMonth];
    return (
      <dd key={idx}>
        <ProjectHistorySection targetMonth={targetMonth} dataArray={dataArray} />
      </dd>
    );
  })

  return (
    <div className="project-history">
      <div className="project-history__sections-wrapper">
        <dl>{sectionContent}</dl>
      </div>
    </div>
  )
}

function ProjectHistorySection({ targetMonth, dataArray }) {

  const dayMap = ['日', '月', '火', '水', '木', '金', '土'];
  let previous_date = '';

  const getItemContent = dataArray.map((value, idx) => {

    const startDate = new Date(value.start_timestamp);
    const totalMins = Math.round(value.total / (60 * 1000));
    const totalHours = Math.floor(totalMins / 60);
    const total = `${totalHours}時間 ${(totalMins % 60).toString().padStart(2, '0')}分`
    const date = value.target_date;
    const display_date = (date !== previous_date) ?
      `${date}（${dayMap[startDate.getDay()]}）` : undefined;
    previous_date = date;

    return (
      <li key={idx}>
        <ProjectHistoryItem
          date={display_date}
          start_timestamp={value.start_timestamp}
          end_timestamp={value.end_timestamp}
          total={total}
          memo={value.memo} />
      </li>
    );
  });


  return (
    <div className="project-history__section-per-month">
      <div className="project-history__month">
        <div className="project-history__month-decorator"></div>
        <p className="project-history__month-text">{targetMonth}</p>
        <div className="project-history__month-decorator"></div>
      </div>
      <div className="project-history__items-wrapper">
        <div className="project-history__items-container">
          {getItemContent}
        </div>
      </div>
    </div>
  )
}
