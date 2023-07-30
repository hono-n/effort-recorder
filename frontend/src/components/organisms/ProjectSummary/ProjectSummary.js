import React, { useEffect, useState } from "react";
import './ProjectSummary.scss';

import RecordModal from "../RecordModal/RecordModal";
import Button from "../../molecules/Button/Button";

import { useProjectContext } from "../../../contexts/ProjectContext";
import { useProjectSummary } from "../../../hooks/ProjectSummary.hook";

export default function ProjectSummary() {

  const { projects, setProjects, selectedProjectId, setSelectedProjectId, total } = useProjectContext();
  const selectedProjectObj = projects?.filter(project => project.id === selectedProjectId)[0];

  const {
    showModal,
    setShowModal,
    recordTime,
    setRecordTime,
  }
    = useProjectSummary({ setProjects: setProjects });

    const totalMins = Math.round(total / (60 * 1000));
    const totalHours = Math.floor(totalMins / 60);
    const totalStr = `${totalHours}時間 ${(totalMins % 60).toString().padStart(2, '0')}分`

  return (
    <div className="project-summary">
      {showModal &&
        <RecordModal
          selectedProjectObj={selectedProjectObj}
          setShowModal={setShowModal}
          recordTime={recordTime}
          setRecordTime={setRecordTime}
        />
      }
      <h2 className="project-summary__title">{selectedProjectObj?.name}</h2>
      <h3 className="project-summary__header">トータル学習時間</h3>
      <p className="project-summary__total">{totalStr}</p>
      <Button
        className="project-summary__button"
        style={{ height: '64px', width: '240px', borderRadius: '12px' }}
        label='学習記録スタート'
        handleClick={() => setShowModal(true)}
      />
    </div>
  )
}