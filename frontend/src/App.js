import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import Login from './pages/Login';


function App() {

  const [loginStatus, setLoginStatus] = useState(false);
  const [user, setUser] = useState('');

  const handleLogin = (data) => {
    setLoginStatus(true);
    setUser(data);
  }
  const authProps = {
    loginStatus,
    user,
    handleLogin,
  }

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Home authProps={authProps} />}
        />
        <Route
          path="/dashboard"
          element={<Dashboard authProps={authProps} />}
        />
        <Route
          path="/signup"
          element={<Signup authProps={authProps} />}
        />
        <Route
          path="/login"
          element={<Login authProps={authProps} />}
        />
        <Route
          path='*'
          element={<h1>このページは存在しません</h1>} />
      </Routes>
    </div>
  );
}

export default App;
