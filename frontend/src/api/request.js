// PEER REVIEW (minor): this module throws plain objects (`throw data`,
// `throw { error }`) rather than Error instances. It works with the app's
// `err.error` convention, but non-Error throws lose stack traces and won't be
// recognized by tooling expecting Errors. Consider wrapping in a custom Error.
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
