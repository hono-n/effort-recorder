import { useState, useEffect, createContext, useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios'

const AuthContext = createContext(null);

export function AuthProvider({ children }) {

  const [loginStatus, setLoginStatus] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const login = (data, callback) => {
    setLoginStatus(true);
    setUser(data);
    callback();
  }

  const logout = (callback) => {
    setLoginStatus(false);
    setUser(null);
    callback();
  }

  useEffect(() => {
    const checkLoginStatus = async () => {
      await axios.get('http://localhost:3001/api/session', { withCredentials: true })
        .then(response => {
          if (response.data.logged_in && !loginStatus) {
            login(response.data.user, () => { navigate("/dashboard") });
          }
          else if (!response.data.logged_in && loginStatus) {
            logout();
          }
        }).catch(error => {
          console.log('【React】Railsで何か問題があるようです', error);
        })
      setIsLoading(false);
    };
    checkLoginStatus();
  }, [])

  const authProps = { loginStatus, user, login, logout, isLoading };

  if(isLoading){
    return <h1>ロード中</h1>
  }

  else return (
    <AuthContext.Provider value={authProps}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export function RequireAuth({ children }) {
  const auth = useAuth();
  return auth.loginStatus ? children : <Navigate to='/login' />
}

