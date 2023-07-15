import React from "react";

import './InputBox.scss';
import InputBoxBase from '../../atoms/InputBoxBase/InputBoxBase'

export default function InputBoxWithLabel({
  label,
  ...rest
}) {
  return (
    <div className="input-box-with-label">
      <div className="input-box-with-label__container">
        <label className="input-box-with-label__label">{label}</label>
        <InputBoxBase {...rest} />
      </div>
    </div>
  )
}