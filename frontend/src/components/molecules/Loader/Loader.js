import React from "react";
import './Loader.scss';

export default function Loader({ size }) {
  return (
    <div className="loader">
      <div className="loader__container">
        {size === 'large' && <div className="loader--large"></div>}
        {size === 'small' && <div className="loader--small"></div>}
      </div>
    </div>
  )
}