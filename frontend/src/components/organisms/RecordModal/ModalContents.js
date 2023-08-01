import React, { useEffect, useState } from "react";
import Button from "../../molecules/Button/Button";

import './RecordModal.scss'
import InputBoxWithCount from "../../molecules/InputBox/InputBoxWithCount";
import { useRecordModal } from "../../../hooks/RecordModal.hook";
import { useUpdateFormData } from "../../../hooks/FormHandler.hook";


export function ModalContentInitial({ projectName, handleClick, setRecordTime }) {

  function buttonAction() {
    const startTimeStamp = new Date().getTime();
    setRecordTime({ startTimeStamp: startTimeStamp, endTimeStamp: '' });
    handleClick();
  }

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
        handleClick={buttonAction}
      />
    </div>
  )
}


export function ModalContentRecording({ projectName, handleClick, recordTime, setRecordTime }) {

  const [currentTime, setCurrentTime] = useState(null);
  const [passedMin, setPassedMin] = useState(null);

  const startTime = new Date(recordTime.startTimeStamp);

  function buttonAction() {
    const endTimeStamp = new Date().getTime();
    setRecordTime({ ...recordTime, endTimeStamp: endTimeStamp });
    handleClick();
  }

  useEffect(() => {
    setInterval(() => {
      const current = new Date();
      const time = current.toLocaleTimeString();
      setCurrentTime(time);

      const passed = Math.floor((current - startTime) / (1000 * 60));
      setPassedMin(passed);
    }, 1000);
  }, []);

  return (
    <div className="modal-content">
      <div className="modal-content__project-name-container">
        <label className="modal-content__project-name-label">プロジェクト名</label>
        <p className="modal-content__project-name">{projectName}</p>
      </div>
      <div className="modal-content__start-time-container">
        <label className="modal-content__start-time-label">記録開始時刻</label>
        <p className="modal-content__start-time">{startTime.toLocaleTimeString()}</p>
      </div>
      <div className="modal-content__time-wrapper">
        <p className="modal-content__current-time">
          {currentTime ?
            currentTime : startTime.toLocaleTimeString()
          }
        </p>
        <p className="modal-content__passed-time">{passedMin}分経過</p>
      </div>
      <Button
        className='modal-content__button'
        type='submit'
        label='記録を終了'
        handleClick={buttonAction}
      />
    </div>
  )
}


export function ModalContentSubmit({ projectName, recordTime, setShowModal }) {

  const [recordFormData, setRecordFormData] = useState({ memo: '' });

  function getDateStr(timeStamp) {
    return new Date(timeStamp).toLocaleTimeString()
  }
  const startTime = getDateStr(recordTime.startTimeStamp);
  const endTime = getDateStr(recordTime.endTimeStamp);
  const passedTime = Math.floor((recordTime.endTimeStamp - recordTime.startTimeStamp) / (60 * 1000));

  const { handleCreateHistory } = useRecordModal({
    setShowModal: setShowModal,
    recordFormData: recordFormData,
    recordTime: recordTime,
  });


  const updateFormData = useUpdateFormData({
    formData: recordFormData,
    setFormData: setRecordFormData,
  });

  return (
    <form onSubmit={handleCreateHistory}>
      <div className="modal-content">
        <div className="modal-content__project-name-container">
          <label className="modal-content__project-name-label">プロジェクト名</label>
          <p className="modal-content__project-name">{projectName}</p>
        </div>
        <div className="modal-content__summary-container">
          <p className="modal-content__summary-text">{startTime} 〜 {endTime}</p>
          <p className="modal-content__summary-text">トータル：<span className="modal-content__strong">{passedTime}分</span></p>
        </div>
        <InputBoxWithCount
          className='modal-content__input'
          label='メモ（任意入力）'
          placeholder='メモを保存'
          max_char={50}
          handleInputValue={{ callback: updateFormData, fieldName: 'memo' }}
        />
        <Button
          className='modal-content__button'
          type='submit'
          label='記録を保存'
        />
      </div>
    </form>
  )
}
