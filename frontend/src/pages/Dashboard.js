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
      <InputBoxWithLabel
        input_type='text'
        state='error'
        placeholder='プレースホルダー'
        errors={errors}
      />
      <InputBoxWithCount
        input_type='text'
        max_char='16'
        state='error'
        placeholder='プレースホルダー'
        errors={errors}
      />
    </div>
  );
}

const errors = [
  { id: '1', message: '入力必須です' },
  { id: '2', message: '半角英数字5字以上で入力してください' }
];