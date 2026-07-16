import { useState } from "react";
import PropTypes from "prop-types";
import { Stack, Button, Alert } from "react-bootstrap";
import useAuth from "../context/useAuth";
import { deleteComment } from "../api/comments";

export default function CommentList({ comments, onDeleted }) {
  const { user } = useAuth();
  const [deletingId, setDeletingId] = useState(null);
  const [error, setError] = useState(null);

  async function handleDelete(commentId) {
    setError(null);
    setDeletingId(commentId);
    try {
      await deleteComment(commentId);
      onDeleted(commentId);
    } catch (err) {
      setError(err.error || "Failed to delete comment");
      setDeletingId(null);
    }
  }

  if (comments.length === 0) {
    return <p className="text-secondary mb-0">No comments yet.</p>;
  }

  return (
    <Stack gap={2}>
      {error && <Alert variant="danger">{error}</Alert>}
      {comments.map((comment) => {
        const isOwner = String(comment.author._id) === String(user._id);
        return (
          <div
            key={comment._id}
            className="d-flex justify-content-between align-items-start"
          >
            <div>
              <div className="fw-bold">
                {comment.author.username}{" "}
                <span className="fw-normal text-secondary">
                  {new Date(comment.createdAt).toLocaleString()}
                </span>
              </div>
              <div>{comment.text}</div>
            </div>
            {isOwner && (
              <Button
                variant="link"
                className="text-danger p-0"
                onClick={() => handleDelete(comment._id)}
                disabled={deletingId === comment._id}
              >
                {deletingId === comment._id ? "Deleting..." : "Delete"}
              </Button>
            )}
          </div>
        );
      })}
    </Stack>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      author: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
      }).isRequired,
    }),
  ).isRequired,
  onDeleted: PropTypes.func.isRequired,
};
