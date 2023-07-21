import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios'

import { useAuth } from "../contexts/AuthContext";
import { useUpdateFormValue } from "./FormHandler.hook";

// 情報を所有するコンポーネントは LoginForm.js
export default function useLoginForm() {

  const auth = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: '',
    password: '',
  });

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
        auth.login(response.data.user.user_name, () => { navigate("/dashboard") });
      }
    }).catch(error => {
      console.log('login error', error)
    });
    event.preventDefault();
  }



  const loginForm = {
    formData: formData,
    setFormData: setFormData,
    updateFormValue: useUpdateFormValue({
      formData: formData,
      setFormData: setFormData,
    }),
    handleLogin: handleLogin,
  };

  return loginForm;
}

