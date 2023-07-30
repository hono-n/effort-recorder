import axios from 'axios'

import { useAuth } from "../contexts/AuthContext";
import { useProjectContext } from '../contexts/ProjectContext';
import { useFlashMessageContext } from "../contexts/FlashMessageContext";

// formData を所有するコンポーネントは ProjectList.js
export function useRecordModal({ recordFormData, setShowModal, recordTime }) {

  const { user } = useAuth();
  const { setFlashMessage, setShowFlashMessage } = useFlashMessageContext();
  const { selectedProjectId, total, setLastUpdated } = useProjectContext();

  const startTimeStamp = recordTime.startTimeStamp;
  const endTimeStamp = recordTime.endTimeStamp;
  const totalMilSec = total + (recordTime.endTimeStamp - recordTime.startTimeStamp);

  function formalize(original){
      return original.toString().padStart(2, '0');
  }
  const startTime = new Date(startTimeStamp);
  const startYear = startTime.getFullYear();
  const startMonth = formalize((startTime.getMonth() + 1));
  const startDate = formalize(startTime.getDate());

  const handleCreateHistory = (event) => {
    const requestUrl = `http://localhost:3001/api/users/${user.id}/projects/${selectedProjectId}/histories`;
    axios.post(requestUrl,
      {
        history: {
          user_id: user.id,
          project_id: selectedProjectId,
          target_month: `${startYear}/${startMonth}`,
          target_date: `${startMonth}/${startDate}`,
          start_timestamp: startTimeStamp,
          end_timestamp: endTimeStamp,
          total: totalMilSec,
          memo: recordFormData.memo,
        }
      },
      { withCredentials: true }
    ).then(response => {
      if (response.data.status === 'created') {
        setShowModal(false);
        setLastUpdated(Date.now());
      }
      else {
        setShowFlashMessage(true);
        // Rails側で Userモデルのレコード追加に失敗した場合
        setFlashMessage({ type: 'error', message: '作業記録の保存に失敗しました' });
        console.log(response.data);
      }
    }).catch(error => {
      // Rails側が応答できなかった場合（サーバーが落ちているなど）
      console.log('【React】Railsで何か問題があるようです', error);
      setShowFlashMessage(true);
      setFlashMessage({ type: 'error', message: '予期せぬエラーが発生しました。再度お試しください' });
    });
    event.preventDefault();
  }


  const recordModal = {
    handleCreateHistory: handleCreateHistory
  };
  return recordModal;
}

