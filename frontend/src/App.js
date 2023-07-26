import { Routes, Route, Navigate } from 'react-router-dom';

import { FlashMessageProvider } from './contexts/FlashMessageContext';
import { RequireAuth, useAuth } from './contexts/AuthContext';

import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import Login from './pages/Login';



function App() {
  const auth = useAuth();

  return (
    <div className="App">
      <FlashMessageProvider>
        <Routes>
          <Route
            path="/"
            element={
              auth.loginStatus ? <Navigate to='/dashboard' /> : <Navigate to='/login' />
            }
          />
          <Route
            path="/signup"
            element={<Signup />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/dashboard"
            element={<RequireAuth><Dashboard /></RequireAuth>}
          />
          <Route
            path='*'
            element={<h1>このページは存在しません</h1>} />
        </Routes>
      </FlashMessageProvider>
    </div>
  );
}

export default App;
