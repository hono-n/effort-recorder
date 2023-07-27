import React, { useEffect, useState } from "react";
import './ProjectSummary.scss';

import RecordModal from "../RecordModal/RecordModal";
import Button from "../../molecules/Button/Button";

import { useProjectContext } from "../../../contexts/ProjectContext";
import { useProjectSummary } from "../../../hooks/ProjectSummary.hook";

export default function ProjectSummary({
  total
}) {

  const { projects, setProjects, selectedProjectId, setSelectedProjectId } = useProjectContext();
  const selectedProjectObj = projects?.filter(project => project.id === selectedProjectId)[0];

  const {
    showModal,
    setShowModal,
    recordTime,
    setRecordTime,
    handleLoad,
    handleFormAction,
    handleInputValue,
  }
    = useProjectSummary({ setProjects: setProjects });

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
      <p className="project-summary__total">{total}</p>
      <Button
        className="project-summary__button"
        style={{ height: '64px', width: '240px', borderRadius: '12px' }}
        label='学習記録スタート'
        handleClick={() => setShowModal(true)}
      />
    </div>
  )
}