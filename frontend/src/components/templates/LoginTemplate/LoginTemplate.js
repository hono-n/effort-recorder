import React from "react";
import { Link } from 'react-router-dom';

import './LoginTemplate.scss';

import InputBoxWithLabel from "../../molecules/InputBox/InputBoxWithLabel";
import Button from "../../molecules/Button/Button";
import LinkButton from "../../molecules/LinkButton/LinkButton";

export default function LoginTemplate({ handleFormValue, handleSubmit }) {

  const { accountData, setAccountData } = handleFormValue;

  function handleInputValue(dataName, inputValue) {
    const newValue = {
      ...accountData,
      [dataName]: inputValue
    }
    return setAccountData(newValue);
  }

  return (
    <div className="login">
      <div className="login__back-ground"></div>
      <div className="login__content">
        <h1 className="login__header">ログイン</h1>
        <form onSubmit={handleSubmit}>
          <InputBoxWithLabel
            className='login__user-name-input'
            label='ユーザー名'
            placeholder='ユーザー名を入力'
            handleInputValue={{ callback: handleInputValue, dataName: 'userName' }}
          />
          <InputBoxWithLabel
            className='login__user-name-password'
            input_type='password'
            label='パスワード'
            placeholder='パスワードを入力'
            handleInputValue={{ callback: handleInputValue, dataName: 'password' }}
          />
          <Button
            type='submit'
            className='login__login-button'
            label='ログイン'
          />
        </form>
        <Link to='/signup'>
          <LinkButton className='login__create-new-button' label='アカウント新規作成' />
        </Link>
      </div>
    </div>
  )
}