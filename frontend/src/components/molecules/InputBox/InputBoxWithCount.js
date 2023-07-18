import React, { useState } from "react";
import cn from "classnames";

import './InputBox.scss';
import InputBoxBase from '../../atoms/InputBoxBase/InputBoxBase'

export default function InputBoxWithCount({
  label='ラベル',
  className,
  max_char,
  ...rest
}) {

  const [count, setCount] = useState(0);
  const handleCount = (newCount) => {
    setCount(newCount);
  }

  return (
    <div className={cn('input-box-with-count', className)}>
      <div className="input-box-with-count__container">
        <div className="input-box-with-count__decorator">
          <label className="input-box-with-count__label">{label}</label>
          <div className="input-box-with-count__char-container">
            <p>{count}</p>
            <p>/{max_char}</p>
          </div>
        </div>
        <InputBoxBase handleCount={handleCount} maxLength={max_char} {...rest} />
      </div>
    </div>
  )
}