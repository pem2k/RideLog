import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Alert, Button } from "react-bootstrap";
import useAuth from "../context/useAuth";
import { getUser, getUserPosts, followUser, unfollowUser } from "../api/users";
import PostCard from "../components/PostCard";

export default function ProfilePage() {
  const { userId } = useParams();
  const { user: currentUser } = useAuth();
  const [profile, setProfile] = useState(null);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  const isOwnProfile = String(currentUser._id) === String(userId);
  const isFollowing = profile && profile.followers.some(
    (id) => String(id) === String(currentUser._id)
  );

  useEffect(() => {
    async function loadProfile() {
      const userData = await getUser(userId);
      const userPosts = await getUserPosts(userId);
      setProfile(userData);
      setPosts(userPosts);
    }

    loadProfile();
  }, [userId]);

  async function handleFollow() {
    await followUser(profile._id);
    const updated = await getUser(profile._id);
    setProfile(updated);
  }

  async function handleUnfollow() {
    await unfollowUser(profile._id);
    const updated = await getUser(profile._id);
    setProfile(updated);
  }

  function handlePostDeleted(postId) {
    setPosts(posts.filter((p) => String(p._id) !== String(postId)));
  }

  if (!profile) {
    return null;
  }

  return (
    <Container className="mt-4">
      {error && <Alert variant="danger">{error}</Alert>}

      <div className="mb-4">
        <h1>{profile.displayName || profile.username}</h1>
        {profile.displayName && (
          <p className="text-secondary">@{profile.username}</p>
        )}
        {profile.bio && <p>{profile.bio}</p>}
        <div className="d-flex justify-content-center mb-3">
          <span className="me-3">{profile.followers.length} followers</span>
          <span>{profile.following.length} following</span>
        </div>

        {isOwnProfile && (
          <Button variant="secondary" size="sm">
            Edit Profile
          </Button>
        )}

        {!isOwnProfile && isFollowing && (
          <Button variant="outline-secondary" size="sm" onClick={handleUnfollow}>
            Unfollow
          </Button>
        )}

        {!isOwnProfile && !isFollowing && (
          <Button variant="primary" size="sm" onClick={handleFollow}>
            Follow
          </Button>
        )}
      </div>

      <h2>Rides</h2>
      {posts.length === 0 && <p className="text-secondary">No rides yet</p>}
      {posts.map((post) => (
        <PostCard
          key={post._id}
          post={{ ...post, author: { _id: profile._id, username: profile.username } }}
          onDeleted={handlePostDeleted}
        />
      ))}
    </Container>
  );
}
