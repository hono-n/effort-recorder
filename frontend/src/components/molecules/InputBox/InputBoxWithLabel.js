import React from "react";
import cn from "classnames";

import './InputBox.scss';
import InputBoxBase from '../../atoms/InputBoxBase/InputBoxBase'

export default function InputBoxWithLabel({
  label='ラベル',
  className,
  ...rest
}) {

  return (
    <div className={cn('input-box-with-label', className)}>
      <div className="input-box-with-label__container">
        <label className="input-box-with-label__label">{label}</label>
        <InputBoxBase {...rest} />
      </div>
    </div>
  )
}