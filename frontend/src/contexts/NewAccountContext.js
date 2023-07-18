import { createContext, useContext, useState} from 'react';

export const NewAccountContext = createContext(null);
export const NewAccountSetContext = createContext(null);

export function NewAccountProvider({ children }) {

  const [newAccountData, setNewAccountData] = useState({
    userName: '',
    password: '',
    passwordConfirmation: ''
  });

  return (
    <NewAccountContext.Provider value={newAccountData}>
      <NewAccountSetContext.Provider value={setNewAccountData}>
        {children}
      </NewAccountSetContext.Provider>
    </NewAccountContext.Provider>
  )
}

export function useNewAccount() {
  return useContext(NewAccountContext);
}

export function useNewAccountSet() {
  return useContext(NewAccountSetContext);
}