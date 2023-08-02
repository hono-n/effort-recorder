import React, { useState } from "react";
import cn from "classnames";

import './InputBox.scss';
import InputBoxBase from '../../atoms/InputBoxBase/InputBoxBase'

export default function InputBoxWithCount({
  label = 'ラベル',
  className,
  max_char,
  errors,
  ...rest
}) {

  const [count, setCount] = useState(0);
  const handleCount = (newCount) => {
    setCount(newCount);
  }

  const element = errors?.map(error =>
    error.isError &&
    <li key={error.id}>
      <p>{error.message}</p>
    </li>
  );

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
        {errors?.filter(error => error.isError).length > 0 &&
          <ul className="input-box-with-label__error-message">
            {element}
          </ul>
        }
      </div>
    </div>
  )
}