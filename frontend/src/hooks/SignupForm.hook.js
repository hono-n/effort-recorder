import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios'

import { useUpdateFormValue } from "./FormHandler.hook";
import { useAuth } from "../contexts/AuthContext";


// 情報を所有するコンポーネントは SignupForm.js
export default function useSignupForm() {

  const auth = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: '',
    password: '',
    passwordConfirmation: ''
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

  const SignupForm = {
    formData: formData,
    setFormData: setFormData,
    updateFormValue: useUpdateFormValue({
      formData: formData,
      setFormData: setFormData,
    }),
    handleCreateAccount: handleCreateAccount,
  };

  return SignupForm;
}

