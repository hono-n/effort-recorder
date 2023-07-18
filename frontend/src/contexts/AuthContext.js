import { useState, createContext, useContext } from 'react';
import { Navigate } from 'react-router-dom';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {

  const [loginStatus, setLoginStatus] = useState(false);
  const [user, setUser] = useState('');

  const login = (data, callback) => {
    setLoginStatus(true);
    setUser(data);
    callback();
  }

  const logout = (data, callback) => {
    setLoginStatus(false);
    setUser(null);
    callback();
  }

  const authProps = { loginStatus, user, login, logout };

  return (
    <AuthContext.Provider value={authProps}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export function RequireAuth({ children }) {
  const auth = useAuth();

  if (!auth.loginStatus) {
    return <Navigate to='/login' />
  }
  return children;
}