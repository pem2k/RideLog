import { useCallback, useEffect, useState } from "react";
import { Container, Spinner, Alert, Button, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getFeed } from "../api/posts";
import PostCard from "./PostCard";

export default function RideFeedPage() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadFeed = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getFeed({ page });
      setPosts(data.posts);
      setTotalPages(data.totalPages);
    } catch (err) {
      setError(err.error || "Failed to load the feed");
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    loadFeed();
  }, [loadFeed]);

  function handleDeleted(postId) {
    setPosts((prev) => prev.filter((post) => post._id !== postId));
  }

  return (
    <Container style={{ maxWidth: "700px" }} className="py-4">
      <Stack direction="horizontal" className="mb-4">
        <h2 className="mb-0">Ride Feed</h2>
        <Button as={Link} to="/rides/new" variant="primary" className="ms-auto">
          Log a Ride
        </Button>
      </Stack>

      {loading && (
        <div className="d-flex justify-content-center py-5">
          <Spinner animation="border" role="status" />
        </div>
      )}

      {!loading && error && (
        <Alert variant="danger">
          {error}{" "}
          <Button variant="link" className="p-0 align-baseline" onClick={loadFeed}>
            Retry
          </Button>
        </Alert>
      )}

      {!loading && !error && posts.length === 0 && (
        <div className="text-center py-5">
          <p>Follow some riders to see their posts here!</p>
          <Button as={Link} to="/rides/new" variant="primary">
            Log a Ride
          </Button>
        </div>
      )}

      {!loading &&
        !error &&
        posts.map((post) => <PostCard key={post._id} post={post} onDeleted={handleDeleted} />)}

      {!loading && !error && posts.length > 0 && (
        <Stack direction="horizontal" className="justify-content-center gap-3 mb-4">
          <Button
            variant="secondary"
            disabled={page <= 1}
            onClick={() => setPage((p) => p - 1)}
          >
            Previous
          </Button>
          <span>
            Page {page} of {totalPages}
          </span>
          <Button
            variant="secondary"
            disabled={page >= totalPages}
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </Button>
        </Stack>
      )}
    </Container>
  );
}
