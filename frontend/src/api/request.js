export default async function request(url, options) {
  const res = await fetch(url, options);

  if (res.status === 204) {
    return null;
  }

  let data;
  try {
    data = await res.json();
  } catch {
    if (!res.ok) {
      throw { error: `Request failed with status ${res.status}` };
    }
    return null;
  }

  if (!res.ok) {
    throw data;
  }

  return data;
}
