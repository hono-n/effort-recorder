import { useState } from "react";

export function useSignupErrorHandler(formData) {

  const [errors, setErrors] = useState(initialValue);

  function updateError({ newErrorState, errorObj, fieldName, id }) {
    if (newErrorState !== errorObj[id].isError) {
      errorObj[id].isError = newErrorState;
    }
    setErrors({ ...errors, [fieldName]: errorObj });
  }


  function userNameValidator(inputValue) {
    const userNameErrors = errors.userName;
    const newErrorState = [...userNameErrors];

    const targetErrorId = [0, 1];

    let index = 0;
    targetErrorId.map(errorId => {
      const error = errorDetails[errorId].validator(inputValue);
      updateError({
        newErrorState: error,
        errorObj: newErrorState,
        fieldName: 'userName',
        id: index
      });
      index++;
    })
  }

  function passwordValidator(inputValue) {
    const passwordErrors = errors.password;
    const newErrorState = [...passwordErrors];

    const targetErrorId = [0, 1];

    let index = 0;
    targetErrorId.map(errorId => {
      const error = errorDetails[errorId].validator(inputValue);
      updateError({
        newErrorState: error,
        errorObj: newErrorState,
        fieldName: 'password',
        id: index
      });
      index++;
    })
  }

  function passwordConfirmationValidator(inputValue) {
    const passwordConfirmationErrors = errors.passwordConfirmation;
    const newErrorState = [...passwordConfirmationErrors];

    // targetErrorId = 2;

    const error = errorDetails[2].validator({
      password: formData.password,
      confirmation: inputValue
    });
    updateError({
      newErrorState: error,
      errorObj: newErrorState,
      fieldName: 'passwordConfirmation',
      id: 0
    });

  }

  return { errors, userNameValidator, passwordValidator, passwordConfirmationValidator };
}

const errorDetails = {
  0: {
    message: '5文字以上で入力してください',
    validator: (inputValue) => {
      return inputValue.length > 0 && inputValue.length < 5;
    }
  },
  1: {
    message: '半角英数字で入力してください',
    validator: (inputValue) => {
      return !inputValue.match(/^[0-9a-zA-Z]*$/);
    }
  },
  2: {
    message: 'パスワード欄の入力値と一致させてください',
    validator: ({ password, confirmation }) => {
      return confirmation !== password;;
    }
  },
}

const initialValue = {
  userName: [
    { id: 0, isError: false, message: errorDetails[0].message },
    { id: 1, isError: false, message: errorDetails[1].message }
  ],
  password: [
    { id: 0, isError: false, message: errorDetails[0].message },
    { id: 1, isError: false, message: errorDetails[1].message }
  ],
  passwordConfirmation: [
    { id: 2, isError: false, message: errorDetails[2].message }
  ]
}





