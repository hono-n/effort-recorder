import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios'

import { useAuth } from "../contexts/AuthContext";

export default function useSessionManagement() {

  const auth = useAuth();
  const navigate = useNavigate();

  const [accountData, setAccountData] = useState({
    userName: '',
    password: '',
  });
  const handleFormValue = { accountData: accountData, setAccountData: setAccountData }

  const handleLogin = (event) => {
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
      console.log('login error', error)
    });
    event.preventDefault();
  }

  const handleLogout = () => {
    axios.delete('http://localhost:3001/api/session', { withCredentials: true }
    ).then(response => {
      auth.logout(() => { navigate("/login") });
      console.log(response);
    }).catch(error => {
      console.log('logout error', error)
    });
  }

  const sessionManagement = { handleFormValue: handleFormValue, handleLogin: handleLogin, handleLogout: handleLogout };

  return sessionManagement;
}

