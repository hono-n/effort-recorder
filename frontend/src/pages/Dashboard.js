import { useAuth } from '../contexts/AuthContext';

import Button from '../components/molecules/Button/Button';
import LinkButton from '../components/molecules/LinkButton/LinkButton';
import InputBoxBase from '../components/atoms/InputBoxBase/InputBoxBase';
import InputBoxWithLabel from '../components/molecules/InputBox/InputBoxWithLabel';
import InputBoxWithCount from '../components/molecules/InputBox/InputBoxWithCount';

export default function Dashboard() {

  const auth = useAuth();

  return (
    <>
      <p>{auth.user}</p>
      <Button label='ボタン' state='active' handleClick={() => console.log('clicked1')} />
      <Button label='ボタン' state='disabled' />
      <LinkButton label='リンクボタン' state='active' handleClick={() => console.log('clicked2')} />
      <LinkButton label='リンクボタン' state='disabled' />
      <InputBoxBase label='ラベル' input_type='text' state='active' placeholder='プレースホルダー' />
      <InputBoxBase label='ラベル' input_type='text' state='error' placeholder='プレースホルダー' />
      <InputBoxWithLabel label='ラベル' input_type='password' state='active' placeholder='ラベル付き' />
      <InputBoxWithCount label='ラベル' input_type='text' state='active' placeholder='プレースホルダー' max_char='16' />
    </>
  );
}