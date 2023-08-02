import { useState } from 'react';
import axios from 'axios'

import { useAuth } from "../contexts/AuthContext";
import { useFlashMessageContext } from "../contexts/FlashMessageContext";

export function useProjectHistory({ selectedProjectId, setTotal }) {

  const { user } = useAuth();
  const { setFlashMessage, setShowFlashMessage } = useFlashMessageContext();
  const [isLoading, setIsLoading] = useState(true);
  const [histories, setHistories] = useState([]);

  const handleLoad = async () => {
    const requestUrl = `http://localhost:3001/api/users/${user.id}/projects/${selectedProjectId}/histories`;
    await axios.get(requestUrl, { withCredentials: true })
      .then(response => {
        if (response.data.status === 'ok') {
          setShowFlashMessage(false);
          setHistories(response.data.histories);
          setTotal(response.data.total);
        } else {
          setShowFlashMessage(true);
          setFlashMessage({ type: 'error', message: 'データの取得に失敗しました' });
          console.log(response);
        }
      }).catch(error => {
        console.log('【React】Railsで何か問題があるようです', error);
      })
    setIsLoading(false);
  };


  const ProjectHistory = {
    isLoading: isLoading,
    handleLoad: handleLoad,
    histories: histories,
  };
  return ProjectHistory;
}

