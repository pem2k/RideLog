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
