import React, { useState } from "react";

import Modal from "../../molecules/Modal/Modal";
import { ModalContentInitial, ModalContentRecording, ModalContentSubmit } from "./ModalContents";

import './RecordModal.scss'

export default function RecordModal(
  { selectedProjectObj, setShowModal, recordTime, setRecordTime }) {

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
            setRecordTime={setRecordTime}
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
            setShowModal={setShowModal}
          />}
        handleClick={() => setShowModal(false)}
      />
    )
  }
}
