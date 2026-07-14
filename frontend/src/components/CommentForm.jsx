import { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button, Alert } from "react-bootstrap";
import { addComment } from "../api/comments";

const TEXT_MAX = 500;

export default function CommentForm({ postId, onAdded }) {
  const [text, setText] = useState("");
  const [fieldError, setFieldError] = useState(null);
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);

    const trimmed = text.trim();
    if (!trimmed) {
      setFieldError("Comment text is required.");
      return;
    }
    if (trimmed.length > TEXT_MAX) {
      setFieldError(`Comment must be ${TEXT_MAX} characters or fewer.`);
      return;
    }
    setFieldError(null);

    setSubmitting(true);
    try {
      const comment = await addComment(postId, trimmed);
      onAdded(comment);
      setText("");
    } catch (err) {
      setError(err.error || "Failed to add comment");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Form onSubmit={handleSubmit} className="mb-3">
      {error && <Alert variant="danger">{error}</Alert>}
      <Form.Group controlId="commentText" className="mb-2">
        <Form.Control
          as="textarea"
          rows={2}
          placeholder="Add a comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          isInvalid={!!fieldError}
        />
        <Form.Control.Feedback type="invalid">{fieldError}</Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" size="sm" type="submit" disabled={submitting}>
        {submitting ? "Posting..." : "Post Comment"}
      </Button>
    </Form>
  );
}

CommentForm.propTypes = {
  postId: PropTypes.string.isRequired,
  onAdded: PropTypes.func.isRequired,
};
