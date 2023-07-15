import React from "react";
import cn from "classnames";

import './LinkButton.scss';

export default function LinkButton({
  label,
  state,
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
      className={cn(linkButtonClass)}
      onClick={handleClick}
      style={style}
    >
      {label}
    </button>
  )
}