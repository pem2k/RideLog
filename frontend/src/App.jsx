import { Routes, Route, Navigate } from "react-router-dom";
import useAuth from "./context/useAuth";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

function App() {
  const { user, loading } = useAuth();

  //prevents flashing login component on refresh
  if (loading) {
    return null;
  }

  function loginRoute() {
    if (user) {
      return <Navigate to="/" />;
    }
    return <LoginForm />;
  }

  function registerRoute() {
    if (user) {
      return <Navigate to="/" />;
    }
    return <RegisterForm />;
  }

  function homeRoute() {
    if (user) {
      return <div>Welcome, {user.username}!</div>;
    }
    return <Navigate to="/login" />;
  }

  return (
    <Routes>
      <Route path="/login" element={loginRoute()} />
      <Route path="/register" element={registerRoute()} />
      <Route path="/" element={homeRoute()} />
    </Routes>
  );
}

export default App;
