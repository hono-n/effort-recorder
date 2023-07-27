import React, { useEffect, useState } from "react";


import Modal from "../../molecules/Modal/Modal";
import Button from "../../molecules/Button/Button";

import './RecordModal.scss'

export default function RecordModal({
  selectedProjectObj,
  setShowModal,
  recordTime,
  setRecordTime,
}) {

  const [modalContentId, setModalContentId] = useState(1);

  if (modalContentId === 1) {
    return (
      <Modal
        title='作業時間を記録する'
        children={
          <ModalContentInitial
            projectName={selectedProjectObj?.name}
            handleClick={() => setModalContentId(2)}
          />
        }
        handleClick={() => setShowModal(false)} />
    )
  }
  if (modalContentId === 2) {
    return (
      <Modal
        title='作業時間を記録中...'
        children={
          <ModalContentRecording
            projectName={selectedProjectObj?.name}
            handleClick={() => setModalContentId(3)}
          />}
        handleClick={() => setShowModal(false)}
      />
    )
  }
  if (modalContentId === 3) {
    return (
      <Modal
        title='作業記録の保存'
        children={
          <ModalContentSubmit
            projectName={selectedProjectObj?.name}
            recordTime={recordTime}
            setRecordTime={setRecordTime}
            handleClick={() => setModalContentId(3)}
          />}
        handleClick={() => setShowModal(false)}
      />
    )
  }
}

function ModalContentInitial({ projectName, handleClick }) {

  return (
    <div className="modal-content">
      <div className="modal-content__project-name-container">
        <label className="modal-content__project-name-label">プロジェクト名</label>
        <p className="modal-content__project-name">{projectName}</p>
      </div>
      <Button
        className='modal-content__button'
        type='submit'
        label='記録を開始'
        handleClick={handleClick}
      />
    </div>
  )
}


function ModalContentRecording({ projectName, handleClick }) {

  const [currentTime, setCurrentTime] = useState(null);
  const [passedMin, setPassedMin] = useState(null);
  const [startTimeStamp, setStartTimeStamp] = useState(null);

  useEffect(() => {
    const startTime = new Date();
    setStartTimeStamp(startTime.getTime());
    setInterval(() => {
      const current = new Date();
      const time = current.toLocaleTimeString();
      setCurrentTime(time);

      const passed = Math.round((current - startTime) / (1000 * 60));
      setPassedMin(passed);
    }, 1000);
  }, []);

  return (
    <div className="modal-content">
      <div className="modal-content__time-wrapper">
        <p className="modal-content__current-time">
          {currentTime ?
            currentTime
            :
            new Date(startTimeStamp).toLocaleTimeString()
          }
        </p>
        <p className="modal-content__passed-time">{passedMin}分経過</p>
      </div>
      <div className="modal-content__project-name-container">
        <label className="modal-content__project-name-label">プロジェクト名</label>
        <p className="modal-content__project-name">{projectName}</p>
      </div>
      <div className="modal-content__start-time-container">
        <label className="modal-content__start-time-label">記録開始時刻</label>
        {startTimeStamp && <p className="modal-content__start-time">{new Date(startTimeStamp).toLocaleTimeString()}</p>}
      </div>
      <Button
        className='modal-content__button'
        type='submit'
        label='記録を終了'
        handleClick={handleClick} ï
      />
    </div>
  )
}


function ModalContentSubmit({ projectName, handleFormAction, setRecordTime, recordTime }) {

  return (
    <form onSubmit={handleFormAction}>
      <div className="modal-content">

        <Button
          className='modal-content__button'
          type='submit'
          label='記録を保存' />
      </div>
    </form>
  )
}
