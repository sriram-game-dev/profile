/**
 * Base path helper utilities for routing and assets
 */

// Normalized base path without trailing slash: e.g. "/profile" or ""
export const BASE_PATH = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');

/**
 * Prepends the base path to a relative route.
 * Example: route('/professional') => '/profile/professional'
 */
export function route(path = '') {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_PATH}${clean}`;
}

/**
 * Returns public asset path with base prepended.
 */
export function asset(path = '') {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_PATH}${clean}`;
}

/**
 * Strips the base path prefix from current window pathname
 * Example on GitHub Pages: '/profile/professional' => '/professional'
 * Example on root: '/professional' => '/professional'
 */
export function normalizePath(pathname = window.location.pathname) {
  if (BASE_PATH && pathname.startsWith(BASE_PATH)) {
    const stripped = pathname.slice(BASE_PATH.length);
    return stripped === '' ? '/' : (stripped.startsWith('/') ? stripped : `/${stripped}`);
  }
  return pathname === '' ? '/' : pathname;
}

/**
 * Navigates safely within the app using HTML5 history, respecting base path.
 */
export function navigateTo(targetPath) {
  const fullPath = route(targetPath);
  window.history.pushState(null, '', fullPath);
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
