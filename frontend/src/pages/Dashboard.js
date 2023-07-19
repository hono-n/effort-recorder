import { useAuth } from '../contexts/AuthContext';

import Button from '../components/molecules/Button/Button';
import LinkButton from '../components/molecules/LinkButton/LinkButton';
import InputBoxBase from '../components/atoms/InputBoxBase/InputBoxBase';
import InputBoxWithLabel from '../components/molecules/InputBox/InputBoxWithLabel';
import InputBoxWithCount from '../components/molecules/InputBox/InputBoxWithCount';

import Header from '../components/organisms/Header/Header';

export default function Dashboard() {

  const auth = useAuth();

  return (
    <div className='dashboard'>
      <Header />
    </div>
  );
}