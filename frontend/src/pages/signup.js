import React, { useState } from 'react';
import SignupTemplate from '../components/templates/SignupTemplate/SignupTemplate';

export default function Signup() {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const data = {
    "user": {
      "user_name": "usertestapi2",
      "password": "abc12345",
      "password_confirmation": "abc12345"
    }
  }

  const addUser = async () => {
    try {
      const response = await window.fetch('http://localhost:3001/api/users', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const savedUser = await response.json();
      console.log(savedUser);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
    <SignupTemplate />
    </div>
  );
}