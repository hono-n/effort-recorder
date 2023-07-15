import React from "react";
import cn from "classnames";

import './InputBoxBase.scss';

export default function InputBox({
  input_type,
  state,
  placeholder,
  style,
  handleCount,
  maxLength
}) {
  const InputBoxClass = {
    'input-box': true,
    'input-box--active': state === 'active',
    'input-box--error': state === 'error'
  }

  const handleInputChange = (event) => {
    const newCount = event.target.value.length;
    handleCount(newCount)
  }

  const onChangeProp = handleCount ? handleInputChange : null;

  return (
    <div>
      <input
        type={input_type}
        style={style}
        className={cn(InputBoxClass)}
        placeholder={placeholder}
        onChange={onChangeProp}
        maxLength={maxLength}
      />
    </div>
  )
}