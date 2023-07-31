import React, { useState } from "react";
import { useAuth } from '../../../contexts/AuthContext';
import useUserProfileSubMenu from "../../../hooks/UserProfileSubMenu.hooks";

import SubMenuItem from "../../atoms/SubMenuItem/SubMenuItem";

import avatar from '../../../assets/icons/user-avatar.svg';
import './Header.scss';


export default function Header() {

  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = (e) => {
    e.stopPropagation();
    setShowMenu(true);
  }
  const handleHideMenu = (e) => {
    e.stopPropagation();
    setShowMenu(false);
  }

  return (
    <div className="header" onMouseLeave={handleHideMenu}>
      <div className="header__wrapper">
        <div className="header__logo">
          <p>EFFORT RECORDER</p>
        </div>
        <div className="header__user-avatar">
          <img
            id="icon-btn"
            src={avatar} alt="user-avatar"
            width='36px' height='36px'
            onMouseOver={handleShowMenu} />
        </div>
      </div>
      {showMenu && <UserProfileSubMenu />}
    </div>
  )
}


function UserProfileSubMenu() {
  const menu_items = useUserProfileSubMenu();
  const auth = useAuth();

  const list_menus = menu_items.map(item =>
    <li key={item.id}>
      <SubMenuItem
        item_icon={item.item_icon}
        item_name={item.item_name}
        handleClick={item.handleClick} />
    </li>
  );

  return (
    <div className="sub-menu">
      <div className="sub-menu__container">
        <div className="sub-menu__user_name">{auth.user.user_name}</div>
        <div className="sub-menu__separator"></div>
        <ul className="sub-menu__menu-items-container">
          {list_menus}
        </ul>
      </div>
    </div>
  );
}




