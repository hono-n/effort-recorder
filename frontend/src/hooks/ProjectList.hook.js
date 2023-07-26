import { useState, useEffect } from 'react';
import axios from 'axios'


import { useAuth } from "../contexts/AuthContext";
import { useUpdateFormValue } from "./FormHandler.hook";
import { useFlashMessageContext } from "../contexts/FlashMessageContext";
import { useProjectContext } from '../contexts/ProjectContext';

// formData を所有するコンポーネントは ProjectList.js
export function useProjectList() {

  const { user } = useAuth();
  const { setShowFlashMessage, setFlashMessage } = useFlashMessageContext();
  const { projects, setProjects } = useProjectContext();

  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = async () => {
    const requestUrl = `http://localhost:3001/api/users/${user.id}/projects`;
    await axios.get(requestUrl, { withCredentials: true })
      .then(response => {
        if (response.data.status === 'ok') {
          setShowFlashMessage(false);
          setProjects(response.data.projects);
        } else {
          setShowFlashMessage(true);
          setFlashMessage({ type: 'error', message: 'データの取得に失敗しました' });
        }
      }).catch(error => {
        console.log('【React】Railsで何か問題があるようです', error);
      })
    setIsLoading(false);
  };


  const projectList = {
    // formData: formData,
    // updateFormValue: useUpdateFormValue({
    //   formData: formData,
    //   setFormData: setFormData,
    // }),
    isLoading,
    projects,
    // showModal,
    // setShowModal,
    handleLoad: handleLoad,
    // handleFormAction: handleCreateProject,
  };

  return projectList;
}

