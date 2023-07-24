import React from "react";
import { useNavigate } from 'react-router-dom';

import useSignupForm from "../../../hooks/SignupForm.hook";
import { useFlashMessageContext } from "../../../contexts/FlashMessageContext";

import Button from "../../molecules/Button/Button";
import InputBoxWithCount from "../../molecules/InputBox/InputBoxWithCount";
import LinkButton from "../../molecules/LinkButton/LinkButton";

import './SignupForm.scss';

export default function SignupForm() {

  const { formData, errors, handleInputValue, handleFormAction } = useSignupForm();
  const { setShowFlashMessage } = useFlashMessageContext();

  const navigate = useNavigate();

  function linkButtonAction() {
    navigate("/login");
    setShowFlashMessage(false);
  }

  const hasEmptyField =
    formData.userName.length === 0
    || formData.password.length === 0
    || formData.passwordConfirmation.length === 0;

  const hasError =
    errors.userName.find(error => error.isError)
    || errors.password.find(error => error.isError)
    || errors.passwordConfirmation.find(error => error.isError)

  function getInputState(filedName) {
    const state = errors[filedName].filter(error => error.isError).length === 0 ? 'active' : 'error';
    return state;
  }

  return (
    <div className="signup-form">
      <form onSubmit={handleFormAction}>
        <InputBoxWithCount
          className='signup-form__user-name-input'
          label='ユーザー名'
          placeholder='ユーザー名を入力'
          max_char='16'
          state={getInputState('userName')}
          handleInputValue={{ callback: handleInputValue, fieldName: 'userName' }}
          errors={errors.userName}
        />
        <InputBoxWithCount
          className='signup-form__user-name-password'
          input_type='password'
          label='パスワード'
          placeholder='パスワードを入力'
          max_char='16'
          state={getInputState('password')}
          handleInputValue={{ callback: handleInputValue, fieldName: 'password' }}
          errors={errors.password}
        />
        <InputBoxWithCount
          className='signup-form__user-name-password'
          input_type='password'
          label='パスワード（確認）'
          placeholder='パスワードを入力'
          max_char='16'
          state={getInputState('passwordConfirmation')}
          handleInputValue={{ callback: handleInputValue, fieldName: 'passwordConfirmation' }}
          errors={errors.passwordConfirmation}
        />
        <Button
          type='submit'
          className='signup-form__signup-button'
          label='アカウント作成'
          state={hasEmptyField || hasError ? 'disabled' : 'active'}
        />
      </form>
      <LinkButton
          className='signup-form__signup-to-login-button'
          label='ログイン画面へ戻る'
          handleClick={linkButtonAction}
        />
    </div>
  )
}