import { useState } from "react";
import PropTypes from "prop-types";
import { Card, Button, Alert, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../context/useAuth";
import { deleteRide } from "../api/posts";
import { getComments } from "../api/comments";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import "./PostCard.css";

export default function PostCard({ post, onDeleted }) {
  const { user } = useAuth();
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState(null);

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState(null);
  const [commentsLoading, setCommentsLoading] = useState(false);
  const [commentsError, setCommentsError] = useState(null);

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

  async function handleToggleComments() {
    const next = !showComments;
    setShowComments(next);

    if (next && comments === null) {
      setCommentsLoading(true);
      setCommentsError(null);
      try {
        const data = await getComments(post._id);
        setComments(data);
      } catch (err) {
        setCommentsError(err.error || "Failed to load comments");
      } finally {
        setCommentsLoading(false);
      }
    }
  }

  function handleCommentAdded(comment) {
    setComments((prev) => [...(prev || []), comment]);
  }

  function handleCommentDeleted(commentId) {
    setComments((prev) => (prev || []).filter((c) => c._id !== commentId));
  }

  return (
    <Card className="mb-4 post-card">
      {post.imageData && (
        <Card.Img variant="top" src={post.imageData} alt={post.title} className="post-card-image" />
      )}
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-secondary">
          <Link to={`/users/${post.author._id}`} className="text-secondary text-decoration-none">{post.author.username}</Link>
          {" · "}
          {new Date(post.rideDate).toLocaleDateString()}
        </Card.Subtitle>
        <Card.Text>{post.description}</Card.Text>
        <div className="d-flex gap-3 mb-3">
          <span>{post.distance} miles</span>
          <span>{post.elevation} feet</span>
          <span>{post.maxSpeed} mph</span>
        </div>
        {error && <Alert variant="danger">{error}</Alert>}
        <div className="d-flex gap-2 mb-3">
          {isOwner && (
            <>
              <Button as={Link} to={`/rides/${post._id}/edit`} variant="secondary" size="sm">
                Edit
              </Button>
              <Button variant="danger" size="sm" onClick={handleDelete} disabled={deleting}>
                {deleting ? "Deleting..." : "Delete"}
              </Button>
            </>
          )}
          <Button variant="outline-secondary" size="sm" onClick={handleToggleComments}>
            {showComments ? "Hide Comments" : "Comments"}
          </Button>
        </div>

        {showComments && (
          <div>
            <CommentForm postId={post._id} onAdded={handleCommentAdded} />
            {commentsLoading && <Spinner animation="border" size="sm" />}
            {commentsError && <Alert variant="danger">{commentsError}</Alert>}
            {!commentsLoading && !commentsError && comments !== null && (
              <CommentList comments={comments} onDeleted={handleCommentDeleted} />
            )}
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
