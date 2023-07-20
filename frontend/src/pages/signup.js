import AuthorizationTemplate from "../components/templates/AuthorizationTemplate/AuthorizationTemplate";
import SignupForm from "../components/organisms/SignupForm/SignupForm";

export default function Signup() {
  return (
    <AuthorizationTemplate
      children={<SignupForm />}
      title='新規アカウント作成'
    />
  );
}