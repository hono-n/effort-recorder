import React from "react";
import cn from "classnames";

import './LinkButton.scss';

export default function LinkButton({
  label = 'ラベル',
  state = 'active',
  type = 'button',
  className,
  handleClick,
  style
}) {
  const linkButtonClass = {
    'link-button': true,
    'link-button--active': state === 'active',
    'link-button--disabled': state === 'disabled'
  }

  return (
    <button
      className={cn(linkButtonClass, className)}
      onClick={handleClick}
      style={style}
      type={type}
    >
      {label}
    </button>
  )
}