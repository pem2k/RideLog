import { useState } from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useAuth from "../context/useAuth";
import { followUser, unfollowUser } from "../api/users";
import "../styles/UserCard.css";

export default function UserCard({ user }) {
  const { user: currentUser } = useAuth();
  const navigate = useNavigate();
  const isOwnProfile = String(currentUser._id) === String(user._id);
  const [followers, setFollowers] = useState(user.followers);
  const isFollowing = followers.some((id) => String(id) === String(currentUser._id));

  function handleCardClick() {
    navigate(`/users/${user._id}`);
  }

  async function handleFollowClick(e) {
    e.stopPropagation();
    if (isFollowing) {
      await unfollowUser(user._id);
      setFollowers(followers.filter((id) => String(id) !== String(currentUser._id)));
    } else {
      await followUser(user._id);
      setFollowers([...followers, currentUser._id]);
    }
  }

  return (
    <Card className="mb-3 user-card" onClick={handleCardClick} style={{ cursor: "pointer" }}>
      <Card.Body className="d-flex justify-content-between align-items-center">
        <div>
          <Card.Title className="mb-0">{user.username}</Card.Title>
          {user.displayName && (
            <Card.Subtitle className="mt-1 text-secondary">
              {user.displayName}
            </Card.Subtitle>
          )}
          <div className="mt-1">
            <span className="me-3">{followers.length} followers</span>
            <span>{user.following.length} following</span>
          </div>
        </div>
        {!isOwnProfile && (
          <Button
            variant={isFollowing ? "outline-secondary" : "primary"}
            size="sm"
            onClick={handleFollowClick}
          >
            {isFollowing ? "Unfollow" : "Follow"}
          </Button>
        )}
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
