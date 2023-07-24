import axios from 'axios'
import { useNavigate } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";
import { useFlashMessageContext } from "../contexts/FlashMessageContext";

// import setting from '../assets/icons/settings.svg';
import logout from '../assets/icons/logout.svg';


export default function useUserProfileSubMenu() {

  const auth = useAuth();
  const navigate = useNavigate();
  const { setShowFlashMessage, setFlashMessage } = useFlashMessageContext();


  const handleLogout = () => {
    axios.delete('http://localhost:3001/api/session', { withCredentials: true }
    ).then(response => {
      setShowFlashMessage(false);
      auth.logout(() => { navigate("/login") });
    }).catch(error => {
      console.log('【React】Railsで何か問題があるようです', error);
      setShowFlashMessage(true);
      setFlashMessage({ type: 'error', message: '予期せぬエラーが発生しました。再度お試しください' });
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

