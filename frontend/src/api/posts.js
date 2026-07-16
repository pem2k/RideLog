import request from "./request.js";

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

export async function getFeed({ page, limit } = {}) {
  const params = new URLSearchParams();
  if (page) params.set("page", page);
  if (limit) params.set("limit", limit);
  return request(`/api/posts/feed?${params.toString()}`, { method: "GET" });
}

export async function deleteRide(postId) {
  return request(`/api/posts/${postId}`, { method: "DELETE" });
}
