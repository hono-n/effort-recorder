import React from "react";
import cn from "classnames";

import './Button.scss';

export default function Button({
  label,
  state,
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
      className={cn(buttonClass)}
      onClick={handleClick}
      style={style}
    >
      {label}
    </button>
  )
}