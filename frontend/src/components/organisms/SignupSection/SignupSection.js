import React from "react";

import './SignupSection.scss';

import Button from "../../molecules/Button/Button";
import InputBoxWithCount from "../../molecules/InputBox/InputBoxWithCount";

export default function SignupSection({ handleFormValue, handleSubmit }) {

  const { newAccountData, setNewAccountData } = handleFormValue;

  function handleInputValue(dataName, inputValue) {
    const newValue = {
      ...newAccountData,
      [dataName]: inputValue
    }
    return setNewAccountData(newValue);
  }

  return (
    <div className="signup-section">
      <h1 className="signup-section__header">アカウント新規作成</h1>
      <form onSubmit={handleSubmit}>
        <InputBoxWithCount
          className='signup-section__user-name-input'
          label='ユーザー名'
          placeholder='ユーザー名を入力'
          max_char='16'
          handleInputValue={{ callback: handleInputValue, dataName: 'userName' }}
        />
        <InputBoxWithCount
          className='signup-section__user-name-password'
          input_type='password'
          label='パスワード'
          placeholder='パスワードを入力'
          max_char='16'
          handleInputValue={{ callback: handleInputValue, dataName: 'password' }}
        />
        <InputBoxWithCount
          className='signup-section__user-name-password'
          input_type='password'
          label='パスワード（確認）'
          placeholder='パスワードを入力'
          max_char='16'
          handleInputValue={{ callback: handleInputValue, dataName: 'passwordConfirmation' }}
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