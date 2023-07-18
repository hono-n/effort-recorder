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
    event.preventDefault();
    console.log(newAccountData)
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


  // const addUser = async () => {
  //   try {
  //     const response = await window.fetch('http://localhost:3001/api/users', {
  //       method: 'POST',
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(data),
  //     });
  //     const savedUser = await response.json();
  //     console.log(savedUser);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };