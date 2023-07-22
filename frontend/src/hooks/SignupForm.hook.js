import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios'

import { useUpdateFormValue } from "./FormHandler.hook";
import { useAuth } from "../contexts/AuthContext";
import { useSignupErrorHandler } from "./ErrorHandler.hook";


// 情報を所有するコンポーネントは SignupForm.js
export default function useSignupForm() {

  const auth = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: '',
    password: '',
    passwordConfirmation: ''
  });


  const signupErrorHandler = useSignupErrorHandler();
  const initialValue = signupErrorHandler.initialValue;

  const [errors, setErrors] = useState(initialValue);
  const {validate} = useSignupErrorHandler();
  const updateFormData = useUpdateFormValue({
    formData: formData,
    setFormData: setFormData,
  });


  const handleCreateAccount = (event) => {
    axios.post('http://localhost:3001/api/users',
      {
        user: {
          user_name: formData.userName,
          password: formData.password,
          password_confirmation: formData.passwordConfirmation
        }
      },
      { withCredentials: true }
    ).then(response => {
      if (response.data.status === 'created') {
        auth.login(response.data.user.user_name, () => { navigate("/dashboard") });
      }
    }).catch(error => {
      console.log('error', error)
    });
    event.preventDefault();
  }

  function handleInputValue (fieldName, inputValue) {

    // (1) ユーザーの入力値を反映してformDataを更新（setFormDataが実行される）
    const newFormData = updateFormData(fieldName, inputValue);

    // (2) 更新されたformDataをもとにerrorsを更新（setErrorsが実行される）
    validate(errors, setErrors, newFormData);
  }

  const SignupForm = {
    formData: formData,
    errors: errors,
    handleInputValue: handleInputValue,
    handleFormAction: handleCreateAccount,
  };

  return SignupForm;
}
