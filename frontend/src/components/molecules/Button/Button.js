import React from "react";
import cn from "classnames";

import './Button.scss';

export default function Button({
  label = 'ラベル',
  state = 'active',
  type = 'button',
  className,
  handleClick,
  style
}) {
  const buttonClass = {
    'button': true,
    'button--active': state === 'active',
    'button--disabled': state === 'disabled'
  }

  return (
    <button
      className={cn(buttonClass, className)}
      onClick={handleClick}
      style={style}
      type={type}
    >
      {label}
    </button>
  )
}