import cn from "classnames";

import './Modal.scss';

export default function Modal({ title, children, handleClick }) {

  return (
    <div className="modal">
      <div className="modal__overlay">
        <div className="modal__window">
          <div className="modal__header-container">
            <h3 className="modal__title">{title}</h3>
            <button className="modal__close-button" onClick={handleClick}>×</button>
          </div>
          <div className="modal__content-wrapper">
            <div className="modal__content">{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}