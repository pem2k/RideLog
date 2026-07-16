import request from "./request.js";

export async function getComments(postId) {
  return request(`/api/posts/${postId}/comments`, { method: "GET" });
}

export async function addComment(postId, text) {
  return request(`/api/posts/${postId}/comments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
}

export async function deleteComment(commentId) {
  return request(`/api/comments/${commentId}`, { method: "DELETE" });
}
