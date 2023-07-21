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

  const [userNameErrors, setUserNameErrors] = useState([
    { id: 0, isError: false, message: '5文字以上で入力してください' },
    { id: 1, isError: false, message: '半角英数字で入力してください' }
  ]
  );

  const [passwordErrors, setPasswordErrors] = useState([
    { id: 0, isError: false, message: '5文字以上で入力してください' },
    { id: 1, isError: false, message: '半角英数字で入力してください' }
  ]
  );

  const [passwordConfirmationErrors, setPasswordConfirmationErrors] = useState([
    { id: 0, isError: false, message: 'パスワード欄の入力値と一致させてください' }
  ]
  );

  function userNameValidator(inputValue) {
    const errors = [...userNameErrors];

    const error_0 = inputValue.length > 0 && inputValue.length < 5;
    if (error_0 !== errors[0].isError) {
      errors[0].isError = error_0;
    }

    const error_1 = !inputValue.match(/^[0-9a-zA-Z]*$/);
    if (error_1 !== errors[1].isError) {
      errors[1].isError = error_1;
    }

    setUserNameErrors(errors);
  }

  function passwordValidator(inputValue) {
    const errors = [...passwordErrors];

    const error_0 = inputValue.length > 0 && inputValue.length < 5;
    if (error_0 !== errors[0].isError) {
      errors[0].isError = error_0;
    }

    const error_1 = !inputValue.match(/^[0-9a-zA-Z]*$/);
    if (error_1 !== errors[1].isError) {
      errors[1].isError = error_1;
    }

    setPasswordErrors(errors);
  }

  function passwordConfirmationValidator(inputValue) {
    const errors = [...passwordConfirmationErrors];

    const error_0 = inputValue !== formData.password;
    if (error_0 !== errors[0].isError) {
      errors[0].isError = error_0;
    }
    setPasswordConfirmationErrors(errors);
  }

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
    errors: { userNameErrors: userNameErrors, passwordErrors: passwordErrors, passwordConfirmationErrors: passwordConfirmationErrors },
    validators: { userNameValidator: userNameValidator, passwordValidator: passwordValidator, passwordConfirmationValidator: passwordConfirmationValidator },
    handleCreateAccount: handleCreateAccount,
  };

  return SignupForm;
}

