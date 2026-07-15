import { useState } from "react";
import { Navbar, Container, Nav, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../context/useAuth";

export default function NavBar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  function handleSearch(e) {
    e.preventDefault();
    if (searchQuery.trim().length > 0) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  }

  async function handleLogout() {
    await logout();
    navigate("/login");
  }

  function renderLinks() {
    if (user) {
      return (
        <>
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
      <Container style={{ maxWidth: "700px" }}>
        <Navbar.Brand as={Link} to="/">
          RideLog
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          {user && (
            <Form className="d-flex me-auto" onSubmit={handleSearch}>
              <Form.Control
                type="text"
                placeholder="Search users..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                size="sm"
              />
            </Form>
          )}
          <Nav className="ms-auto">{renderLinks()}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
