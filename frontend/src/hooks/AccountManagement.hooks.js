import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios'

import { useAuth } from "../contexts/AuthContext";

export default function useAccountManagement() {

  const auth = useAuth();
  const navigate = useNavigate();

  const [newAccountData, setNewAccountData] = useState({
    userName: '',
    password: '',
    passwordConfirmation: ''
  });
  const handleFormValue = { newAccountData, setNewAccountData }

  const handleCreateAccount = (event) => {
    axios.post('http://localhost:3001/api/users',
      {
        user: {
          user_name: newAccountData.userName,
          password: newAccountData.password,
          password_confirmation: newAccountData.passwordConfirmation
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

  const accountManagement = {
    handleFormValue: handleFormValue,
    handleCreateAccount: handleCreateAccount
  };

  return accountManagement;
}

