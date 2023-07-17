import React from "react";

import './LoginTemplate.scss';

import InputBoxWithLabel from "../../molecules/InputBox/InputBoxWithLabel";
import Button from "../../molecules/Button/Button";
import LinkButton from "../../molecules/LinkButton/LinkButton";

import { Routes, Route, Link } from 'react-router-dom';

export default function LoginTemplate() {

  return (
    <div className="login">
      <div className="login__back-ground"></div>
      <div className="login__content">
        <h1 className="login__header">ログイン</h1>
        <InputBoxWithLabel className='login__user-name-input' label='ユーザー名' placeholder='ユーザー名を入力' />
        <InputBoxWithLabel className='login__user-name-password' input_type='password' label='パスワード' placeholder='パスワードを入力' />
        <Button className='login__login-button' label='ログイン' />
        <Link to='/signup'>
          <LinkButton className='login__create-new-button' label='アカウント新規作成' />
        </Link>
      </div>
    </div>
  )
}