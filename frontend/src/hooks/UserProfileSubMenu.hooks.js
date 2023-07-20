import useSessionManagement from "./SessionManagement.hooks";

import setting from '../assets/icons/settings.svg';
import logout from '../assets/icons/logout.svg';


export default function useUserProfileSubMenu() {

  const { handleLogout } = useSessionManagement();

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

  return menu_items;
}

