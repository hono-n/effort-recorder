import { useState } from 'react';

import { useUpdateFormData } from "./FormHandler.hook";

// formData を所有するコンポーネントは ProjectList.js
export function useProjectSummary({ setProjects }) {

  const [showModal, setShowModal] = useState(false);
  const [recordTime, setRecordTime] = useState(null);


  const projectSummary = {
    showModal: showModal,
    setShowModal: setShowModal,
    recordTime: recordTime,
    setRecordTime: setRecordTime,
  };
  return projectSummary;
}

