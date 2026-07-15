async function request(url, options) {
  const res = await fetch(url, options);
  const data = await res.json();
  if (!res.ok) {
    throw data;
  }
  return data;
}

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
  const res = await fetch(`/api/comments/${commentId}`, { method: "DELETE" });
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw data;
  }
}
