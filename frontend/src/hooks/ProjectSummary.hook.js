import { useState } from 'react';

import { useUpdateFormValue } from "./FormHandler.hook";
import { useFlashMessageContext } from "../contexts/FlashMessageContext";

// formData を所有するコンポーネントは ProjectList.js
export function useProjectSummary({ setProjects }) {

  const { setShowFlashMessage, setFlashMessage } = useFlashMessageContext();

  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalContentId, setModalContentId] = useState(1);
  const [recordTime, setRecordTime] = useState({ startTime: '', endTIme: '' });
  const [formData, setFormData] = useState({ projectName: '' });

  const updateFormData = useUpdateFormValue({
    formData: formData,
    setFormData: setFormData,
  });
  function handleInputValue(fieldName, inputValue) {
    updateFormData(fieldName, inputValue);
  }



  const projectSummary = {
    formData: formData,
    isLoading: isLoading,
    showModal: showModal,
    setShowModal: setShowModal,
    modalContentId: modalContentId,
    setModalContentId: setModalContentId,
    recordTime: recordTime,
    setRecordTime: setRecordTime,
    // handleFormAction: handleCreateProject,
    handleInputValue: handleInputValue,
  };
  return projectSummary;
}

