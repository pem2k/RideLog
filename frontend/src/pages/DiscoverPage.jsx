import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { getSuggestedUsers } from "../api/users";
import UserCard from "../components/UserCard";

export default function DiscoverPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSuggestedUsers(50).then((data) => {
      setUsers(data);
      setLoading(false);
    });
  }, []);

  return (
    <Container className="content-narrow py-4">
      <h2 className="text-center mb-4">People You May Know</h2>

      {loading && (
        <div className="d-flex justify-content-center py-5">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading suggestions...</span>
          </Spinner>
        </div>
      )}

      {!loading && users.length === 0 && (
        <p className="text-secondary text-center">No suggestions right now.</p>
      )}

      {!loading && users.map((user) => (
        <UserCard key={user._id} user={user} />
      ))}
    </Container>
  );
}
