import { useState } from 'react';
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
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ projectName: '' });
  const updateFormData = useUpdateFormValue({
    formData: formData,
    setFormData: setFormData,
  });
  function handleInputValue(fieldName, inputValue) {
    updateFormData(fieldName, inputValue);
  }

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

  const handleCreateProject = (event) => {
    const requestUrl = `http://localhost:3001/api/users/${user.id}/projects`;
    axios.post(requestUrl,
      {
        project: {
          user_id: user.id,
          name: formData.projectName,
        }
      },
      { withCredentials: true }
    ).then(response => {
      if (response.data.status === 'created') {
        setShowModal(false);
        setShowFlashMessage(true);
        setFlashMessage({ type: 'success', message: 'プロジェクトを作成しました' });
      }
      else {
        setShowFlashMessage(true);
        // Rails側で Userモデルのレコード追加に失敗した場合
        setFlashMessage({ type: 'error', message: 'プロジェクトの作成に失敗しました' });
      }
    }).catch(error => {
      // Rails側が応答できなかった場合（サーバーが落ちているなど）
      console.log('【React】Railsで何か問題があるようです', error);
      setShowFlashMessage(true);
      setFlashMessage({ type: 'error', message: '予期せぬエラーが発生しました。再度お試しください' });
    });
    event.preventDefault();
  }


  const projectList = {
    formData: formData,
    isLoading,
    projects,
    showModal,
    setShowModal,
    handleLoad: handleLoad,
    handleFormAction: handleCreateProject,
    handleInputValue: handleInputValue,
  };
  return projectList;
}

