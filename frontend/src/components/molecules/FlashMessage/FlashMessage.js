import React from "react";
import cn from "classnames";

import './FlashMessage.scss';

export default function FlashMessage({
  message,
  type = 'success',
  className,
  handleClick,
  style
}) {
  const flashMessageClass = {
    'flash-message': true,
    'flash-message--success': type === 'success',
    'flash-message--error': type === 'error'
  }
  const decoratorClass = {
    'flash-message__decorator': true,
    'flash-message__decorator--success': type === 'success',
    'flash-message__decorator--error': type === 'error'
  }
  const closeButtonClass = {
    'flash-message__close-button': true,
    'flash-message__close-button--success': type === 'success',
    'flash-message__close-button--error': type === 'error'
  }

  return (
    <div
      className={cn(flashMessageClass, className)}
      style={style}
    >
      <div className={cn(decoratorClass)}></div>
      <p className='flash-message__message'>{message}</p>
      <button className={cn(closeButtonClass)} onClick={handleClick}>×</button>
    </div>
  )
}