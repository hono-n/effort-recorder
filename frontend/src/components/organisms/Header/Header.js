import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import { useAuth } from '../../../contexts/AuthContext';
import axios from 'axios'

import SubMenuItem from "../../atoms/SubMenuItem/SubMenuItem";

import avatar from '../../../assets/icons/user-avatar.svg';
import setting from '../../../assets/icons/settings.svg';
import logout from '../../../assets/icons/logout.svg';

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
        <div className="header__logo">LOGO</div>
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

  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    axios.delete('http://localhost:3001/api/session',{ withCredentials: true }
      ).then(response => {
        auth.logout(() => { navigate("/login") });
        console.log(response);
      }).catch(error => {
        console.log('logout error', error)
      });
  }

  const menu_items = [
    {
      id: 1,
      item_icon: setting,
      item_name: 'プロフィール設定',
      handleClick: () => console.log('first item clicked')
    },
    {
      id: 2,
      item_icon: logout,
      item_name: 'ログアウト',
      handleClick: handleLogout
    },
  ];

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
        <div className="sub-menu__user_name">{auth.user}</div>
        <div className="sub-menu__separator"></div>
        <ul className="sub-menu__menu-items-container">
          {list_menus}
        </ul>
      </div>
    </div>
  );
}




