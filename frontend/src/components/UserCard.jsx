import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/UserCard.css";

export default function UserCard({ user }) {
  return (
    <Card className="mb-3 user-card">
      <Card.Body>
        <Card.Title className="text-center">
          <Link
            to={`/users/${user._id}`}
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            {user.username}
          </Link>
        </Card.Title>
        {user.displayName && (
          <Card.Subtitle className="mb-2 text-secondary text-center">
            {user.displayName}
          </Card.Subtitle>
        )}
        <div className="d-flex justify-content-center">
          <span className="me-3">{user.followers.length} followers</span>
          <span>{user.following.length} following</span>
        </div>
      </Card.Body>
    </Card>
  );
}

UserCard.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    displayName: PropTypes.string,
    followers: PropTypes.array.isRequired,
    following: PropTypes.array.isRequired,
  }).isRequired,
};
