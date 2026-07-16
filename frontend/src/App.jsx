import { Routes, Route, Navigate } from "react-router-dom";
import useAuth from "./context/useAuth";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import RideForm from "./components/RideForm";
import RideFeedPage from "./pages/RideFeedPage";
import NavBar from "./components/NavBar";
import SearchPage from "./pages/SearchPage";
import ProfilePage from "./pages/ProfilePage";

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
        <Route path="/" element={<RequireAuth><RideFeedPage /></RequireAuth>} />
        <Route path="/search" element={<RequireAuth><SearchPage /></RequireAuth>} />
        <Route path="/users/:userId" element={<RequireAuth><ProfilePage /></RequireAuth>} />
        <Route path="/rides/new" element={<RequireAuth><RideForm mode="create" /></RequireAuth>} />
        <Route path="/rides/:postId/edit" element={<RequireAuth><RideForm mode="edit" /></RequireAuth>} />
      </Routes>
    </>
  );
}

export default App;
