import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "./useAuth";
import * as authApi from "../api/auth";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkSession() {
      const currentUser = await authApi.getCurrentUser();
      setUser(currentUser);
      setLoading(false);
    }
    checkSession();
  }, []);

  async function login(username, password) {
    const data = await authApi.login(username, password);
    setUser(data);
    return data;
  }

  async function register(username, email, password) {
    const data = await authApi.register(username, email, password);
    setUser(data);
    return data;
  }

  async function logout() {
    await authApi.logout();
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
