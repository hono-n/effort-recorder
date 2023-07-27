import { useState } from 'react';

import { useUpdateFormValue } from "./FormHandler.hook";

// formData を所有するコンポーネントは ProjectList.js
export function useProjectSummary({ setProjects }) {

  const [showModal, setShowModal] = useState(false);
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
    showModal: showModal,
    setShowModal: setShowModal,
    recordTime: recordTime,
    setRecordTime: setRecordTime,
    handleInputValue: handleInputValue,
  };
  return projectSummary;
}

