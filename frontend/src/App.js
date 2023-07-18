import { Routes, Route } from 'react-router-dom';
import { RequireAuth, AuthProvider } from './contexts/AuthContext';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import Login from './pages/Login';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={<RequireAuth><Home /></RequireAuth>}
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
      </AuthProvider>
    </div>
  );
}

export default App;
