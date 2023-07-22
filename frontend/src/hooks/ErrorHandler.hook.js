export function useSignupErrorHandler() {

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
        return confirmation.length > 0 && confirmation !== password;;
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


  function validate(errors, setErrors, formData) {

    function updateError({ newErrorState, errorObj, fieldName, itrIdx }) {
      if (newErrorState !== errorObj[itrIdx]?.isError) {
        errorObj[itrIdx].isError = newErrorState;
      }
      setErrors({ ...errors, [fieldName]: errorObj });
    }

    const userNameErrorObjs = [...errors.userName];
    const passwordErrorObjs = [...errors.password];
    const confirmationErrorObjs = [...errors.passwordConfirmation];

    // userNameインプットのエラー判定
    const userNameErrorIds = [0, 1];
    userNameErrorIds.map((errorId, index) => {
      const error = errorDetails[errorId].validator(formData.userName);
      updateError({
        newErrorState: error,
        errorObj: userNameErrorObjs,
        fieldName: 'userName',
        itrIdx: index
      });
    })

    // passwordインプットエラーの判定
    const passwordErrorIds = [0, 1];
    passwordErrorIds.map((errorId, index) => {
      const error = errorDetails[errorId].validator(formData.password);
      updateError({
        newErrorState: error,
        errorObj: passwordErrorObjs,
        fieldName: 'password',
        itrIdx: index
      });
    })

    // passwordConfirmationエラーの判定
    // confirmationErrorIds = [2];
    const error = errorDetails[2].validator({
      password: formData.password,
      confirmation: formData.passwordConfirmation
    });
    updateError({
      newErrorState: error,
      errorObj: confirmationErrorObjs,
      fieldName: 'passwordConfirmation',
      itrIdx: 0
    });
  }

  return { initialValue, validate };
}




