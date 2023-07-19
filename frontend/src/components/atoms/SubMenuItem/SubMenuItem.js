import React from "react";
import cn from "classnames";

import './SubMenuItem.scss';

export default function SubMenuItem({item_icon, item_name, handleClick}) {

  return (
    <div className="sub-menu-item" onClick={handleClick}>
      <img className="sub-menu-item__item-icon" src={item_icon} alt="menu-icon" />
      <div className="sub-menu-item__item-name">{item_name}</div>
    </div>
  )
}