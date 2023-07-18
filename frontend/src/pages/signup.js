import axios from 'axios';
import { useState } from 'react';

import SignupTemplate from '../components/templates/SignupTemplate/SignupTemplate';

export default function Signup() {

  const [newAccountData, setNewAccountData] = useState({
    userName: '',
    password: '',
    passwordConfirmation: ''
  });
  const handleFormValue = { newAccountData, setNewAccountData }

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
      console.log('success', response);
    }).catch(error => {
      console.log('error', error)
    });
    event.preventDefault();
  }

  return (
    <div>
      <SignupTemplate
        handleFormValue={handleFormValue}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}