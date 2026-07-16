import request from "./request.js";

export async function getCurrentUser() {
  try {
    return await request("/api/auth/me");
  } catch {
    return null;
  }
}

export async function login(username, password) {
  return request("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
}

export async function register(username, email, password) {
  return request("/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  });
}

export async function logout() {
  return request("/api/auth/logout", { method: "POST" });
}
