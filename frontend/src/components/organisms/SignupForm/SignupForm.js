import React from "react";

import useSignupForm from "../../../hooks/SignupForm.hook";

import Button from "../../molecules/Button/Button";
import InputBoxWithCount from "../../molecules/InputBox/InputBoxWithCount";

import './SignupForm.scss';

export default function SignupForm() {

  const {errors, handleInputValue, handleFormAction} = useSignupForm();

  return (
    <div className="signup-form">
      <form onSubmit={handleFormAction}>
        <InputBoxWithCount
          className='signup-form__user-name-input'
          label='ユーザー名'
          placeholder='ユーザー名を入力'
          max_char='16'
          state={errors.userName.filter(error => error.isError).length === 0 ? 'active' : 'error'}
          handleInputValue={{ callback: handleInputValue, fieldName: 'userName' }}
          errors={errors.userName}
        />
        <InputBoxWithCount
          className='signup-form__user-name-password'
          input_type='password'
          label='パスワード'
          placeholder='パスワードを入力'
          max_char='16'
          state={errors.password.filter(error => error.isError).length === 0 ? 'active' : 'error'}
          handleInputValue={{ callback: handleInputValue, fieldName: 'password' }}
          errors={errors.password}
        />
        <InputBoxWithCount
          className='signup-form__user-name-password'
          input_type='password'
          label='パスワード（確認）'
          placeholder='パスワードを入力'
          max_char='16'
          state={errors.passwordConfirmation.filter(error => error.isError).length === 0 ? 'active' : 'error'}
          handleInputValue={{ callback: handleInputValue, fieldName: 'passwordConfirmation' }}
          errors={errors.passwordConfirmation}
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