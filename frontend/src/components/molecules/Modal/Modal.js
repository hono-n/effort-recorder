import cn from "classnames";

import './Modal.scss';

export default function Modal({ children, setModalVisibility }) {

  function handleClick(){
    setModalVisibility(false);
  }

  return (
    <div className="modal">
      <div className="modal__overlay">
        <div className="modal__window">
        <div className="modal__close-button-wrapper">
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