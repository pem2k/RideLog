import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getSuggestedUsers, followUser } from "../api/users";
import "../styles/SuggestedUsers.css";

export default function SuggestedUsers({ currentUserId }) {
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getSuggestedUsers().then(setSuggestions);
  }, []);

  async function handleFollow(e, userId) {
    e.stopPropagation();
    await followUser(userId);
    setSuggestions((prev) => prev.filter((u) => u._id !== userId));
  }

  if (suggestions.length === 0) {
    return null;
  }

  return (
    <aside className="suggested-users">
      <Card>
        <Card.Body>
          <Card.Title>Who to Follow</Card.Title>
          {suggestions.map((user) => (
            <div
              key={user._id}
              className="suggested-user-item d-flex justify-content-between align-items-center"
              onClick={() => navigate(`/users/${user._id}`)}
              style={{ cursor: "pointer" }}
            >
              <div>
                <div className="fw-bold">{user.username}</div>
                {user.displayName && (
                  <div className="text-secondary" style={{ fontSize: "0.85rem" }}>
                    {user.displayName}
                  </div>
                )}
                <div className="text-secondary" style={{ fontSize: "0.85rem" }}>
                  {user.followers.length} followers
                </div>
              </div>
              <Button
                variant="primary"
                size="sm"
                onClick={(e) => handleFollow(e, user._id)}
              >
                Follow
              </Button>
            </div>
          ))}
        </Card.Body>
      </Card>
    </aside>
  );
}

SuggestedUsers.propTypes = {
  currentUserId: PropTypes.string.isRequired,
};
