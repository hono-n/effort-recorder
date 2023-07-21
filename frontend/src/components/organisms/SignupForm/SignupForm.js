import React from "react";

import useSignupForm from "../../../hooks/SignupForm.hook";

import Button from "../../molecules/Button/Button";
import InputBoxWithCount from "../../molecules/InputBox/InputBoxWithCount";

import './SignupForm.scss';

export default function SignupForm() {

  const {
    formData,
    setFormData,
    updateFormValue,
    errors,
    validators,
    handleCreateAccount
  } = useSignupForm();

  const { userNameErrors, passwordErrors, passwordConfirmationErrors } = errors;
  const { userNameValidator, passwordValidator, passwordConfirmationValidator } = validators;

  return (
    <div className="signup-form">
      <form onSubmit={handleCreateAccount}>
        <InputBoxWithCount
          className='signup-form__user-name-input'
          label='ユーザー名'
          placeholder='ユーザー名を入力'
          max_char='16'
          state={userNameErrors.filter(error => error.isError).length === 0 ? 'active' : 'error'}
          handleInputValue={{ callback: updateFormValue, fieldName: 'userName' }}
          handleError={userNameValidator}
          errors={userNameErrors}
        />
        <InputBoxWithCount
          className='signup-form__user-name-password'
          input_type='password'
          label='パスワード'
          placeholder='パスワードを入力'
          max_char='16'
          state={passwordErrors.filter(error => error.isError).length === 0 ? 'active' : 'error'}
          handleInputValue={{ callback: updateFormValue, fieldName: 'password' }}
          handleError={passwordValidator}
          errors={passwordErrors}
        />
        <InputBoxWithCount
          className='signup-form__user-name-password'
          input_type='password'
          label='パスワード（確認）'
          placeholder='パスワードを入力'
          max_char='16'
          state={passwordConfirmationErrors.filter(error => error.isError).length === 0 ? 'active' : 'error'}
          handleInputValue={{ callback: updateFormValue, fieldName: 'passwordConfirmation' }}
          handleError={passwordConfirmationValidator}
          errors={passwordConfirmationErrors}
        />
        <Button
          type='submit'
          className='signup-form__signup-button'
          label='アカウント作成'
        />
      </form>
    </div>
  )
}