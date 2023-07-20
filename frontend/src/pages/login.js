import AuthorizationTemplate from "../components/templates/AuthorizationTemplate/AuthorizationTemplate";
import LoginForm from "../components/organisms/LoginForm/LoginForm";

export default function Login() {
  return (
    <AuthorizationTemplate
      children={<LoginForm />}
      title='ログイン'
    />
  );
}