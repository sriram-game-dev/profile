/**
 * Returns the correct public asset URL, respecting Vite's base path.
 * Use this instead of hardcoded "/images/..." or "/projects/..." paths.
 *
 * @param {string} path - Path starting with "/" e.g. "/projects/loto-vr.jpg"
 * @returns {string} Full URL with base prepended
 */
export function asset(path) {
  // import.meta.env.BASE_URL is "/" in dev and "/profile/" in production build
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return base + path;
}
