import React from "react";
import cn from "classnames";

import './InputBox.scss';
import InputBoxBase from '../../atoms/InputBoxBase/InputBoxBase'

export default function InputBoxWithLabel({
  label = 'ラベル',
  className,
  errors,
  ...rest
}) {

  const element = errors?.map(error => {
    error.isError &&
      <li key={error.id}>
        <p>{error.message}</p>
      </li>
  }
  );


  return (
    <div className={cn('input-box-with-label', className)}>
      <div className="input-box-with-label__container">
        <label className="input-box-with-label__label">{label}</label>
        <InputBoxBase {...rest} />
        {errors?.filter(error => error.isError).length > 0 &&
          <ul className="input-box-with-label__error-message">
            {element}
          </ul>
        }
      </div>
    </div>
  )
}