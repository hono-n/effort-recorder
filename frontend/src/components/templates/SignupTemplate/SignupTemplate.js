import React from "react";

import './SignupTemplate.scss';

import InputBoxWithLabel from "../../molecules/InputBox/InputBoxWithLabel";
import Button from "../../molecules/Button/Button";

export default function SignupTemplate() {

  return (
    <div className="signup">
      <div className="signup__back-ground"></div>
      <div className="signup__content">
        <h1 className="signup__header">アカウント新規作成</h1>
        <InputBoxWithLabel className='signup__user-name-input' label='ユーザー名' placeholder='ユーザー名を入力' />
        <InputBoxWithLabel className='signup__user-name-password' input_type='password' label='パスワード' placeholder='パスワードを入力' />
        <InputBoxWithLabel className='signup__user-name-password' input_type='password' label='パスワード（確認）' placeholder='パスワードを入力' />
        <Button className='signup__signup-button' label='アカウント作成' />
      </div>
    </div>
  )
}