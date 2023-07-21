import React from "react";

import useAccountManagement from "../../../hooks/AccountManagement.hooks";

import Button from "../../molecules/Button/Button";
import InputBoxWithCount from "../../molecules/InputBox/InputBoxWithCount";

import './SignupForm.scss';

export default function SignupForm() {

  const { formData, setFormData, updateFormValue, handleCreateAccount } = useAccountManagement();

  return (
    <div className="signup-form">
      <form onSubmit={handleCreateAccount}>
        <InputBoxWithCount
          className='signup-form__user-name-input'
          label='ユーザー名'
          placeholder='ユーザー名を入力'
          max_char='16'
          handleInputValue={{ callback: updateFormValue, fieldName: 'userName' }}
        />
        <InputBoxWithCount
          className='signup-form__user-name-password'
          input_type='password'
          label='パスワード'
          placeholder='パスワードを入力'
          max_char='16'
          handleInputValue={{ callback: updateFormValue, fieldName: 'password' }}
        />
        <InputBoxWithCount
          className='signup-form__user-name-password'
          input_type='password'
          label='パスワード（確認）'
          placeholder='パスワードを入力'
          max_char='16'
          handleInputValue={{ callback: updateFormValue, fieldName: 'passwordConfirmation' }}
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