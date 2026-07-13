import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../context/useAuth";

export default function NavBar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    await logout();
    navigate("/login");
  }

  function renderLinks() {
    if (user) {
      return (
        <>
          <Navbar.Text className="me-3">
            Signed in as: {user.username}
          </Navbar.Text>
          <Button variant="outline-light" onClick={handleLogout}>
            Logout
          </Button>
        </>
      );
    }
    return (
      <>
        <Nav.Link as={Link} to="/login">
          Login
        </Nav.Link>
        <Nav.Link as={Link} to="/register">
          Register
        </Nav.Link>
      </>
    );
  }

  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          RideLog
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">{renderLinks()}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
