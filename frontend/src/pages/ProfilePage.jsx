import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Button, Form, Alert } from "react-bootstrap";
import useAuth from "../context/useAuth";
import {
  getUser,
  getUserPosts,
  followUser,
  unfollowUser,
  updateProfile,
} from "../api/users";
import PostCard from "../components/PostCard";

export default function ProfilePage() {
  const { userId } = useParams();
  const { user: currentUser } = useAuth();
  const [profile, setProfile] = useState(null);
  const [posts, setPosts] = useState([]);
  const [editing, setEditing] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [bio, setBio] = useState("");
  const [error, setError] = useState(null);

  const isOwnProfile = String(currentUser._id) === String(userId);
  const isFollowing =
    profile &&
    profile.followers.some((id) => String(id) === String(currentUser._id));

  useEffect(() => {
    async function loadProfile() {
      setProfile(null);
      setError(null);

      try {
        const userData = await getUser(userId);
        const userPosts = await getUserPosts(userId);
        setProfile(userData);
        setPosts(userPosts);
        setDisplayName(userData.displayName || "");
        setBio(userData.bio || "");
      } catch (err) {
        setError(err.error || "Failed to load profile");
      }
    }

    loadProfile();
  }, [userId]);

  async function handleFollow() {
    await followUser(profile._id);
    const updated = await getUser(profile._id);
    setProfile(updated);
  }
  // Since the follow, unfollow, and save-profile actions don't handle failed requests on the frontend, 
  // even though the backend returns errors properly, a failed or dropped request just fails silently and the user gets no feedback. 
  // Using a try-catch like that used for the initial page load would be a good fix here!
  async function handleUnfollow() {
    await unfollowUser(profile._id);
    const updated = await getUser(profile._id);
    setProfile(updated);
  }

  async function handleSaveProfile(e) {
    e.preventDefault();
    const updated = await updateProfile({ displayName, bio });
    setProfile(updated);
    setEditing(false);
  }

  function handlePostDeleted(postId) {
    setPosts(posts.filter((p) => String(p._id) !== String(postId)));
  }

  if (error) {
    return (
      <Container className="content-narrow py-4">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  if (!profile) {
    return (
      <Container className="content-narrow py-4">Loading profile...</Container>
    );
  }

  return (
    <Container className="content-narrow py-4">
      <div className="mb-4">
        <h2>{profile.displayName || profile.username}</h2>
        {profile.displayName && (
          <p className="text-secondary">@{profile.username}</p>
        )}
        {profile.bio && <p>{profile.bio}</p>}
        <div className="d-flex mb-3">
          <span className="me-3">{profile.followers.length} followers</span>
          <span>{profile.following.length} following</span>
        </div>

        {isOwnProfile && !editing && (
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setEditing(true)}
          >
            Edit Profile
          </Button>
        )}

        {isOwnProfile && editing && (
          <Form onSubmit={handleSaveProfile} className="mb-3">
            <Form.Group className="mb-2" controlId="displayName">
              <Form.Label>Display Name</Form.Label>
              <Form.Control
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                maxLength={50}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="bio">
              <Form.Label>Bio</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                maxLength={300}
              />
            </Form.Group>
            <Button type="submit" variant="primary" size="sm" className="me-2">
              Save
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setEditing(false)}
            >
              Cancel
            </Button>
          </Form>
        )}

        {!isOwnProfile && isFollowing && (
          <Button
            variant="outline-secondary"
            size="sm"
            onClick={handleUnfollow}
          >
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
          post={{
            ...post,
            author: { _id: profile._id, username: profile.username },
          }}
          onDeleted={handlePostDeleted}
        />
      ))}
    </Container>
  );
}
