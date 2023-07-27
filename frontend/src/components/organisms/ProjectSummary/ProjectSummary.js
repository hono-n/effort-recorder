import React, { useState } from "react";
import './ProjectSummary.scss';

import Modal from "../../molecules/Modal/Modal";
import Button from "../../molecules/Button/Button";

import { useProjectContext } from "../../../contexts/ProjectContext";
import { useProjectSummary } from "../../../hooks/ProjectSummary.hook";



export default function ProjectSummary({
  total
}) {

  const { projects, setProjects, selectedProjectId, setSelectedProjectId } = useProjectContext();
  const selectedProjectObj = projects?.filter(project => project.id === selectedProjectId)[0];

  const {
    isLoading,
    showModal,
    setShowModal,
    handleLoad,
    handleFormAction,
    handleInputValue,
  }
    = useProjectSummary({ setProjects: setProjects });

  return (
    <div className="project-summary">
      {showModal &&
        <Modal
          title='作業時間を記録する'
          children={
            <ModalContentInitial
              projectName={selectedProjectObj?.name}
              closeModal={() => setShowModal(false)}
            />
          }
          handleClick={() => setShowModal(false)} />
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

function ModalContentInitial({ projectName, handleClick }) {

  const [currentTime, setCurrentTime] = useState(null);

  setInterval(() => {
    let time = new Date();
    setCurrentTime(time);
  }, 10);


  return (
    <div className="modal-content">
      <p className="modal-content__current-time">{new Date(currentTime).toLocaleTimeString()}</p>
      <div className="modal-content__project-name-container">
        <label className="modal-content__project-name-label">プロジェクト名</label>
        <p className="modal-content__project-name">{projectName}</p>
      </div>
      <Button
        className='modal-content__button'
        type='submit'
        label='記録を開始'
        handleClick={() => console.log('クリックされました')}
      />
    </div>
  )
}


function ModalContentRecording({ projectName, handleFormAction, handleInputValue }) {

  return (
    <form onSubmit={handleFormAction}>
      <div className="modal-content">
        <div className="modal-content__project-name-container">
          <label className="modal-content__project-name-label">プロジェクト名</label>
          <p className="modal-content__project-name">{projectName}</p>
        </div>
        <Button
          className='modal-content__button'
          type='submit'
          label='記録を開始' />
      </div>
    </form>
  )
}
