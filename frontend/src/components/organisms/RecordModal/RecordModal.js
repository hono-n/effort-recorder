import React, { useEffect, useState } from "react";


import Modal from "../../molecules/Modal/Modal";
import Button from "../../molecules/Button/Button";

import './RecordModal.scss'

export default function RecordModal({modalContentId, selectedProjectObj, setShowModal, setModalContentId}) {

  if (modalContentId === 1) {
    return (
      <Modal
        title='作業時間を記録する'
        children={
          <ModalContentInitial
            projectName={selectedProjectObj?.name}
            closeModal={() => setShowModal(false)}
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
            closeModal={() => setShowModal(false)}
          />}
        handleClick={() => setShowModal(false)}
      />

    )
  }
}

function ModalContentInitial({ projectName, handleClick }) {

  const [currentTime, setCurrentTime] = useState(null);

  useEffect(() => {
    setInterval(() => {
      let time = new Date().toLocaleTimeString();
      setCurrentTime(time);
    }, 1000);
  }, []);

  return (
    <div className="modal-content">
      {currentTime ?
        <p className="modal-content__current-time">{currentTime}</p>
        :
        <p className="modal-content__current-time-loading">現在時刻を取得中...</p>
      }
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


function ModalContentRecording({ projectName, handleFormAction, handleInputValue }) {

  console.log('ModalContentRecordingがよばれました');

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
          label='記録を終了' />
      </div>
    </form>
  )
}
