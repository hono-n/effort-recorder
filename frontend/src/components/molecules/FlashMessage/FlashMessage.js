import React from "react";
import cn from "classnames";

import './FlashMessage.scss';

export default function FlashMessage({
  message,
  type = 'success',
  className,
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

  return (
    <div
      className={cn(flashMessageClass, className)}
      style={style}
    >
      <div className={cn(decoratorClass)}></div>
      <p className='flash-message__message'>{message}</p>
    </div>
  )
}