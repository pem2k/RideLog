async function request(url, options) {
  const res = await fetch(url, options);
  const data = await res.json();
  if (!res.ok) {
    throw data;
  }
  return data;
}

export async function searchUsers(query) {
  return request(`/api/users/search?q=${encodeURIComponent(query)}`);
}

export async function getUser(userId) {
  return request(`/api/users/${userId}`);
}

export async function getUserPosts(userId) {
  return request(`/api/posts?author=${userId}`);
}

export async function followUser(userId) {
  return request(`/api/users/${userId}/follow`, { method: "POST" });
}

export async function unfollowUser(userId) {
  return request(`/api/users/${userId}/follow`, { method: "DELETE" });
}

export async function updateProfile(updates) {
  return request("/api/users/me", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  });
}
