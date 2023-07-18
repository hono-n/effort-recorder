import React from "react";
import cn from "classnames";

import './InputBoxBase.scss';

export default function InputBox({
  input_type = 'text',
  state = 'active',
  placeholder = 'プレースホルダー',
  style,
  handleCount,
  handleInputValue,
  maxLength
}) {
  const InputBoxClass = {
    'input-box': true,
    'input-box--active': state === 'active',
    'input-box--error': state === 'error'
  }

  const handleInputChange = (event) => {
    if (handleCount) {
      const newCount = event.target.value.length;
      handleCount(newCount);
    }
    if (handleInputValue) {
      const { callback, dataName } = handleInputValue;
      const newValue = event.target.value;
      callback(dataName, newValue);
    }
  }

  return (
    <div>
      <input
        type={input_type}
        style={style}
        className={cn(InputBoxClass)}
        placeholder={placeholder}
        onChange={handleInputChange}
        maxLength={maxLength}
      />
    </div>
  )
}