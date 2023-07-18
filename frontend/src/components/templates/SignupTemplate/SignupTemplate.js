import React from "react";

import './SignupTemplate.scss';

import Button from "../../molecules/Button/Button";
import InputBoxWithCount from "../../molecules/InputBox/InputBoxWithCount";

export default function SignupTemplate({ handleFormValue, handleSubmit }) {

  const { newAccountData, setNewAccountData } = handleFormValue;

  function handleInputValue(dataName, inputValue) {
    const newValue = {
      ...newAccountData,
      [dataName]: inputValue
    }
    return setNewAccountData(newValue);
  }

  return (
    <div className="signup">
      <div className="signup__back-ground"></div>
      <div className="signup__content">
        <h1 className="signup__header">アカウント新規作成</h1>
        <form onSubmit={handleSubmit}>
          <InputBoxWithCount
            className='signup__user-name-input'
            label='ユーザー名'
            placeholder='ユーザー名を入力'
            max_char='16'
            handleInputValue={{ callback: handleInputValue, dataName: 'userName' }}
          />
          <InputBoxWithCount
            className='signup__user-name-password'
            input_type='password'
            label='パスワード'
            placeholder='パスワードを入力'
            max_char='16'
            handleInputValue={{ callback: handleInputValue, dataName: 'password' }}
          />
          <InputBoxWithCount
            className='signup__user-name-password'
            input_type='password'
            label='パスワード（確認）'
            placeholder='パスワードを入力'
            max_char='16'
            handleInputValue={{ callback: handleInputValue, dataName: 'passwordConfirmation' }}
          />
          <Button
            type='submit'
            className='signup__signup-button'
            label='アカウント作成'
          />
        </form>
      </div>
    </div>
  )
}