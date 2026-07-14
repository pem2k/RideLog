import { useState } from "react";
import PropTypes from "prop-types";
import { Card, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../context/useAuth";
import { deleteRide } from "../api/posts";
import "./PostCard.css";

export default function PostCard({ post, onDeleted }) {
  const { user } = useAuth();
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState(null);

  const isOwner = String(post.author._id) === String(user._id);

  async function handleDelete() {
    if (!window.confirm("Delete this ride? This cannot be undone.")) return;

    setError(null);
    setDeleting(true);
    try {
      await deleteRide(post._id);
      onDeleted(post._id);
    } catch (err) {
      setError(err.error || "Failed to delete ride");
      setDeleting(false);
    }
  }

  return (
    <Card className="mb-4">
      {post.imageData && (
        <Card.Img variant="top" src={post.imageData} alt={post.title} className="post-card-image" />
      )}
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-secondary">
          <Link to={`/users/${post.author._id}`}>{post.author.username}</Link>
          {" · "}
          {new Date(post.rideDate).toLocaleDateString()}
        </Card.Subtitle>
        <Card.Text>{post.description}</Card.Text>
        <div className="d-flex gap-3 mb-3">
          <span>{post.distance} km</span>
          <span>{post.elevation} m</span>
          <span>{post.maxSpeed} km/h</span>
        </div>
        {error && <Alert variant="danger">{error}</Alert>}
        {isOwner && (
          <div className="d-flex gap-2">
            <Button as={Link} to={`/rides/${post._id}/edit`} variant="secondary" size="sm">
              Edit
            </Button>
            <Button variant="danger" size="sm" onClick={handleDelete} disabled={deleting}>
              {deleting ? "Deleting..." : "Delete"}
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

PostCard.propTypes = {
  post: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageData: PropTypes.string,
    rideDate: PropTypes.string.isRequired,
    distance: PropTypes.number.isRequired,
    elevation: PropTypes.number.isRequired,
    maxSpeed: PropTypes.number.isRequired,
    author: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  onDeleted: PropTypes.func.isRequired,
};
