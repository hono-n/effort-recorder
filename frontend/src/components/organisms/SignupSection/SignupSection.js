import React from "react";
import { useSignupFormHandler } from "../../../hooks/FormHandler.hook";

import './SignupSection.scss';

import Button from "../../molecules/Button/Button";
import InputBoxWithCount from "../../molecules/InputBox/InputBoxWithCount";

export default function SignupSection() {

  const { onSubmit, handleInputValue } = useSignupFormHandler();

  return (
    <div className="signup-section">
      <h1 className="signup-section__header">アカウント新規作成</h1>
      <form onSubmit={onSubmit}>
        <InputBoxWithCount
          className='signup-section__user-name-input'
          label='ユーザー名'
          placeholder='ユーザー名を入力'
          max_char='16'
          handleInputValue={{ callback: handleInputValue, fieldName: 'userName' }}
        />
        <InputBoxWithCount
          className='signup-section__user-name-password'
          input_type='password'
          label='パスワード'
          placeholder='パスワードを入力'
          max_char='16'
          handleInputValue={{ callback: handleInputValue, fieldName: 'password' }}
        />
        <InputBoxWithCount
          className='signup-section__user-name-password'
          input_type='password'
          label='パスワード（確認）'
          placeholder='パスワードを入力'
          max_char='16'
          handleInputValue={{ callback: handleInputValue, fieldName: 'passwordConfirmation' }}
        />
        <Button
          type='submit'
          className='signup-section__signup-button'
          label='アカウント作成'
        />
      </form>
    </div>
  )
}