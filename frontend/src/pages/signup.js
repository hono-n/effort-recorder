import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import SignupTemplate from '../components/templates/SignupTemplate/SignupTemplate';

export default function Signup({ authProps }) {

  const { loginStatus, handleLogin } = authProps;

  const [newAccountData, setNewAccountData] = useState({
    userName: '',
    password: '',
    passwordConfirmation: ''
  });
  const handleFormValue = { newAccountData, setNewAccountData }

  const navigate = useNavigate();

  const handleSubmit = (event) => {
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
      console.log(response.data);
      if (response.data.status === 'created') {
        handleLogin(response.data.user.user_name);
        navigate("/dashboard");
      }
    }).catch(error => {
      console.log('error', error)
    });
    event.preventDefault();
  }

  return (
      <SignupTemplate
        handleFormValue={handleFormValue}
        handleSubmit={handleSubmit}
      />
  );
}