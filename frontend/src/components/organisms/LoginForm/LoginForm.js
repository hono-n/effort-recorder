import React from "react";
import { Link } from 'react-router-dom';

import useLoginForm from "../../../hooks/LoginForm.hooks";

import InputBoxWithLabel from "../../molecules/InputBox/InputBoxWithLabel";
import Button from "../../molecules/Button/Button";
import LinkButton from "../../molecules/LinkButton/LinkButton";
import './LoginForm.scss';


export default function LoginForm() {

  const { formData, updateFormValue, handleFormAction } = useLoginForm();

  return (
    <div className="login-form">
      <form onSubmit={handleFormAction}>
        <InputBoxWithLabel
          className='login-form__user-name-input'
          label='ユーザー名'
          placeholder='ユーザー名を入力'
          handleInputValue={{ callback: updateFormValue, fieldName: 'userName' }}
        />
        <InputBoxWithLabel
          className='login-form__user-name-password'
          input_type='password'
          label='パスワード'
          placeholder='パスワードを入力'
          handleInputValue={{ callback: updateFormValue, fieldName: 'password' }}
        />
        <Button
          type='submit'
          className='login-form__login-button'
          label='ログイン'
        />
      </form>
      <Link to='/signup'>
        <LinkButton
          className='login-form__create-new-button'
          label='アカウント新規作成'
        />
      </Link>
    </div>
  )
}