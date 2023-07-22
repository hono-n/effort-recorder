import axios from 'axios'
import { useNavigate } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

// import setting from '../assets/icons/settings.svg';
import logout from '../assets/icons/logout.svg';


export default function useUserProfileSubMenu() {

  const auth = useAuth();
  const navigate = useNavigate();


  const handleLogout = () => {
    axios.delete('http://localhost:3001/api/session', { withCredentials: true }
    ).then(response => {
      auth.logout(() => { navigate("/login") });
      console.log(response);
    }).catch(error => {
      console.log('logout error', error)
    });
  }


  const menu_items = [
    // {
    //   id: 1,
    //   item_icon: setting,
    //   item_name: 'プロフィール設定',
    //   handleClick: () => console.log('first item clicked')
    // },
    {
      id: 2,
      item_icon: logout,
      item_name: 'ログアウト',
      handleClick: handleLogout
    },
  ];

  return menu_items;
}

