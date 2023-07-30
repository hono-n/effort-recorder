import React from "react";
import { useNavigate } from 'react-router-dom';

import useLoginForm from "../../../hooks/LoginForm.hooks";
import { useFlashMessageContext } from "../../../contexts/FlashMessageContext";

import InputBoxWithLabel from "../../molecules/InputBox/InputBoxWithLabel";
import Button from "../../molecules/Button/Button";
import LinkButton from "../../molecules/LinkButton/LinkButton";
import './LoginForm.scss';


export default function LoginForm() {

  const { updateFormData, handleFormAction } = useLoginForm();
  const { setShowFlashMessage } = useFlashMessageContext();

  const navigate = useNavigate();

  function linkButtonAction() {
    navigate("/signup");
    setShowFlashMessage(false);
  }

  return (
    <div className="login-form">
      <form onSubmit={handleFormAction}>
        <InputBoxWithLabel
          className='login-form__user-name-input'
          label='ユーザー名'
          placeholder='ユーザー名を入力'
          handleInputValue={{ callback: updateFormData, fieldName: 'userName' }}
        />
        <InputBoxWithLabel
          className='login-form__user-name-password'
          input_type='password'
          label='パスワード'
          placeholder='パスワードを入力'
          handleInputValue={{ callback: updateFormData, fieldName: 'password' }}
        />
        <Button
          type='submit'
          className='login-form__login-button'
          label='ログイン'
        />
      </form>
      <LinkButton
        className='login-form__create-new-button'
        label='アカウント新規作成'
        handleClick={linkButtonAction}
      />
    </div>
  )
}