import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';

import LoginTemplate from "../components/templates/LoginTemplate/LoginTemplate";

export default function Login() {

  const auth = useAuth();
  const navigate = useNavigate();

  const [accountData, setAccountData] = useState({
    userName: '',
    password: '',
  });
  const handleFormValue = { accountData, setAccountData }

  const handleSubmit = (event) => {
    axios.post('http://localhost:3001/api/session',
      {
        user: {
          user_name: accountData.userName,
          password: accountData.password,
        }
      },
      { withCredentials: true }
    ).then(response => {
      if (response.data.logged_in) {
        auth.login(response.data.user.user_name, () => { navigate("/dashboard") });
      }
    }).catch(error => {
      console.log('error', error)
    });
    event.preventDefault();
  }

  return (
    <LoginTemplate
      handleFormValue={handleFormValue}
      handleSubmit={handleSubmit}
    />
  );
}