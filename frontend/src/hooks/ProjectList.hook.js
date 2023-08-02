import { useState } from 'react';
import axios from 'axios'


import { useAuth } from "../contexts/AuthContext";
import { useUpdateFormData } from "./FormHandler.hook";
import { useFlashMessageContext } from "../contexts/FlashMessageContext";
import { useProjectContext } from '../contexts/ProjectContext';

// formData を所有するコンポーネントは ProjectList.js
export function useProjectList({ setProjects }) {

  const { user } = useAuth();
  const { setShowFlashMessage, setFlashMessage } = useFlashMessageContext();

  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const { selectedProjectId, setSelectedProjectId } = useProjectContext();
  const [projectListFormData, setProjectListFormData] = useState({ projectName: '' });

  const handleLoad = async () => {
    const requestUrl = `http://localhost:3001/api/users/${user.id}/projects`;
    await axios.get(requestUrl, { withCredentials: true })
      .then(response => {
        if (response.data.status === 'ok') {
          if (response.data.projects === 'none') {
            setProjects([]);
          }
          else {
            setProjects(response.data.projects);
            selectedProjectId === null && setSelectedProjectId(response.data.projects[0].id)
          }
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
          name: projectListFormData.projectName,
        }
      },
      { withCredentials: true }
    ).then(response => {
      if (response.data.status === 'created') {
        setShowModal(false);
        setShowFlashMessage(true);
        setFlashMessage({ type: 'success', message: 'プロジェクトを作成しました' });
        handleLoad();
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
    formData: projectListFormData,
    isLoading: isLoading,
    showModal: showModal,
    setShowModal: setShowModal,
    handleLoad: handleLoad,
    projectListFormData: projectListFormData,
    handleFormAction: handleCreateProject,
    updateFormData: useUpdateFormData({
      formData: projectListFormData,
      setFormData: setProjectListFormData,
    }),
  };
  return projectList;
}

