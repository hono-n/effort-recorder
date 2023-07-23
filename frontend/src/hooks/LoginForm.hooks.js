import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios'

import { useAuth } from "../contexts/AuthContext";
import { useUpdateFormValue } from "./FormHandler.hook";
import { useFlashMessageContext } from "../contexts/FlashMessageContext";

// 情報を所有するコンポーネントは LoginForm.js
export default function useLoginForm() {

  const auth = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: '',
    password: '',
  });

  const { setShowFlashMessage, setFlashMessage } = useFlashMessageContext();

  const handleLogin = (event) => {
    axios.post('http://localhost:3001/api/session',
      {
        user: {
          user_name: formData.userName,
          password: formData.password,
        }
      },
      { withCredentials: true }
    ).then(response => {
      if (response.data.logged_in) {
        setShowFlashMessage(false);
        auth.login(response.data.user.user_name, () => { navigate("/dashboard") });
      }
      else {
        // Rails側で @user&.authenticate の実行に失敗した場合
        setShowFlashMessage(true);
        setFlashMessage({ type: 'error', message: 'ユーザー名またはパスワードが間違っています' });
      }
    }).catch(error => {
      // Rails側が応答できなかった場合（サーバーが落ちているなど）
      console.log('【React】Railsで何か問題があるようです', error);
      setShowFlashMessage(true);
      setFlashMessage({ type: 'error', message: '予期せぬエラーが発生しました。再度お試しください' });
    });
    event.preventDefault();
  }



  const loginForm = {
    formData: formData,
    updateFormValue: useUpdateFormValue({
      formData: formData,
      setFormData: setFormData,
    }),
    handleFormAction: handleLogin,
  };

  return loginForm;
}

