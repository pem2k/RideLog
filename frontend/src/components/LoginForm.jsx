import { useState } from "react";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../context/useAuth";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    try {
      await login(username, password);
      navigate("/");
    } catch (err) {
      setError(err.error || "Login failed");
    }
  }

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <Card style={{ width: "400px" }}>
        <Card.Body>
          <Card.Title className="text-center mb-4">Login</Card.Title>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
            <Form.Control
              type="text"
              placeholder="Username or Email"
              className="text-center"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <Form.Control
              type="password"
              placeholder="Password"
              className="text-center"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>
            <Button as={Link} to="/register" variant="outline-primary" className="w-100">
              Don&apos;t have an account? Register
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
