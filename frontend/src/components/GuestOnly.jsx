import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import useAuth from "../context/useAuth";

export default function GuestOnly({ children }) {
  const { user } = useAuth();
  if (user) {
    return <Navigate to="/" />;
  }
  return children;
}

GuestOnly.propTypes = {
  children: PropTypes.node.isRequired,
};
