import { useState } from "react";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../context/useAuth";

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { register } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    try {
      await register(username, email, password);
      navigate("/");
    } catch (err) {
      const validationMessage = err.errors
        ? Object.values(err.errors).join(" ")
        : null;
      setError(validationMessage || err.error || "Registration failed");
    }
  }

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <Card style={{ width: "400px" }}>
        <Card.Body>
          <Card.Title className="text-center mb-4">Register</Card.Title>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
            <Form.Control
              type="text"
              placeholder="Username"
              className="text-center"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <Form.Control
              type="email"
              placeholder="Email"
              className="text-center"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              Register
            </Button>
            <Button as={Link} to="/login" variant="outline-primary" className="w-100">
              Already have an account? Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
