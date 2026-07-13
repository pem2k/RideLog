import { Routes, Route, Navigate } from "react-router-dom";
import useAuth from "./context/useAuth";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import NavBar from "./components/NavBar";

function GuestOnly({ children }) {
  const { user } = useAuth();
  if (user) {
    return <Navigate to="/" />;
  }
  return children;
}

function RequireAuth({ children }) {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
}

function App() {
  const { loading } = useAuth();

  if (loading) {
    return null;
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/login" element={<GuestOnly><LoginForm /></GuestOnly>} />
        <Route path="/register" element={<GuestOnly><RegisterForm /></GuestOnly>} />
        <Route path="/" element={<RequireAuth><div>Welcome!</div></RequireAuth>} />
      </Routes>
    </>
  );
}

export default App;
