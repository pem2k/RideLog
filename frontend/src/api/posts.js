async function request(url, options) {
  const res = await fetch(url, options);
  const data = await res.json();
  if (!res.ok) {
    throw data;
  }
  return data;
}

export async function createRide(data) {
  return request("/api/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

export async function updateRide(postId, data) {
  return request(`/api/posts/${postId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

export async function getRide(postId) {
  return request(`/api/posts/${postId}`, { method: "GET" });
}

export async function deleteRide(postId) {
  const res = await fetch(`/api/posts/${postId}`, { method: "DELETE" });
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw data;
  }
}
