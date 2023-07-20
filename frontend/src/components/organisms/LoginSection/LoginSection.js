import React from "react";
import { Link } from 'react-router-dom';

import useSessionManagement from "../../../hooks/SessionManagement.hooks";

import './LoginSection.scss';

import InputBoxWithLabel from "../../molecules/InputBox/InputBoxWithLabel";
import Button from "../../molecules/Button/Button";
import LinkButton from "../../molecules/LinkButton/LinkButton";


export default function LoginSection() {

  const { handleFormValue, handleLogin } = useSessionManagement();

  const { accountData, setAccountData } = handleFormValue;

  function handleInputValue(dataName, inputValue) {
    const newValue = {
      ...accountData,
      [dataName]: inputValue
    }
    return setAccountData(newValue);
  }

  return (
    <div className="login-section">
      <h1 className="login-section__header">ログイン</h1>
      <form onSubmit={handleLogin}>
        <InputBoxWithLabel
          className='login-section__user-name-input'
          label='ユーザー名'
          placeholder='ユーザー名を入力'
          handleInputValue={{ callback: handleInputValue, dataName: 'userName' }}
        />
        <InputBoxWithLabel
          className='login-section__user-name-password'
          input_type='password'
          label='パスワード'
          placeholder='パスワードを入力'
          handleInputValue={{ callback: handleInputValue, dataName: 'password' }}
        />
        <Button
          type='submit'
          className='login-section__login-button'
          label='ログイン'
        />
      </form>
      <Link to='/signup'>
        <LinkButton className='login-section__create-new-button' label='アカウント新規作成' />
      </Link>
    </div>
  )
}