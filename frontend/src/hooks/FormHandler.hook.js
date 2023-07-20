import useAccountManagement from "./AccountManagement.hooks";
import useSessionManagement from "./SessionManagement.hooks";

function generateFormHandler(data, setter, submitAction) {

  const formHandler = {
    onSubmit: submitAction,
    handleInputValue: (fieldName, inputValue) => {
      const newValue = {
        ...data,
        [fieldName]: inputValue
      }
      return setter(newValue);
    }
  }
  return formHandler;
}

export function useSignupFormHandler() {

  const { handleFormValue, handleCreateAccount } = useAccountManagement();
  const { newAccountData, setNewAccountData } = handleFormValue;

  return generateFormHandler(newAccountData, setNewAccountData, handleCreateAccount);
}

export function useLoginFormHandler() {
  const { handleFormValue, handleLogin } = useSessionManagement();
  const { accountData, setAccountData } = handleFormValue;

  return generateFormHandler(accountData, setAccountData, handleLogin);
}