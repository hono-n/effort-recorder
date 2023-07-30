import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios'

import { useUpdateFormData } from "./FormHandler.hook";
import { useAuth } from "../contexts/AuthContext";
import { useSignupErrorHandler } from "./ErrorHandler.hook";
import { useFlashMessageContext } from "../contexts/FlashMessageContext";


// formData を所有するコンポーネントは SignupForm.js
export default function useSignupForm() {

  const auth = useAuth();
  const navigate = useNavigate();

  const [signupFormData, setSignupFormData] = useState({
    userName: '',
    password: '',
    passwordConfirmation: ''
  });


  const signupErrorHandler = useSignupErrorHandler();
  const initialValue = signupErrorHandler.initialValue;

  const [errors, setErrors] = useState(initialValue);
  const { validate } = useSignupErrorHandler();
  const updateFormData = useUpdateFormData({
    formData: signupFormData,
    setFormData: setSignupFormData,
  });

  const { setShowFlashMessage, setFlashMessage } = useFlashMessageContext();

  const handleCreateAccount = (event) => {
    axios.post('http://localhost:3001/api/users',
      {
        user: {
          user_name: signupFormData.userName,
          password: signupFormData.password,
          password_confirmation: signupFormData.passwordConfirmation
        }
      },
      { withCredentials: true }
    ).then(response => {
      if (response.data.status === 'created') {
        setShowFlashMessage(true);
        setFlashMessage({ type: 'success', message: 'アカウントを作成しました' });
        auth.login(response.data.user, () => { navigate("/dashboard") });
      }
      else {
        setShowFlashMessage(true);
        // Rails側で Userモデルのレコード追加に失敗した場合
        if (response.data.errors.user_name.map(err => err === 'has already been taken')) {
        setFlashMessage({ type: 'error', message: '同一のユーザー名が既に存在します。別の値を設定してください' });
        }
        else{
          setFlashMessage({ type: 'error', message: 'ユーザーの作成に失敗しました' });
        }
      }
    }).catch(error => {
      // Rails側が応答できなかった場合（サーバーが落ちているなど）
      console.log('【React】Railsで何か問題があるようです', error);
      setShowFlashMessage(true);
      setFlashMessage({ type: 'error', message: '予期せぬエラーが発生しました。再度お試しください' });
    });
    event.preventDefault();
  }

  function handleInputValue(fieldName, inputValue) {

    // (1) ユーザーの入力値を反映してformDataを更新（setFormDataが実行される）
    const newFormData = updateFormData(fieldName, inputValue);

    // (2) 更新されたformDataをもとにerrorsを更新（setErrorsが実行される）
    validate(errors, setErrors, newFormData);
  }

  const SignupForm = {
    formData: signupFormData,
    errors: errors,
    handleInputValue: handleInputValue,
    handleFormAction: handleCreateAccount,
  };

  return SignupForm;
}
