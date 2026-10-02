/**
 * Base path helper utilities for routing and assets
 */

// Normalized base path without trailing slash: e.g. "/profile" or ""
export const BASE_PATH = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');

/**
 * Prepends the base path to a relative route.
 * Example: route('/professional') => '/profile/professional'
 * Example: route('/') => '/profile/'
 * Example: route('/#about') => '/profile/#about'
 */
export function route(path = '') {
  if (!path || path === '/') {
    return BASE_PATH ? `${BASE_PATH}/` : '/';
  }
  if (path.startsWith('/#')) {
    return BASE_PATH ? `${BASE_PATH}/${path.slice(1)}` : path;
  }
  if (path.startsWith('#')) {
    return BASE_PATH ? `${BASE_PATH}/${path}` : `/${path}`;
  }
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
 * Strips the base path prefix and query string from current window pathname
 * Example on GitHub Pages: '/profile/projects/loto-vr' => '/projects/loto-vr'
 * Example on GitHub Pages root: '/profile/' => '/'
 * Example on local dev root: '/' => '/'
 */
export function normalizePath(pathname = window.location.pathname) {
  let clean = pathname.split('?')[0].split('#')[0] || '/';

  if (BASE_PATH && clean.startsWith(BASE_PATH)) {
    clean = clean.slice(BASE_PATH.length);
  }

  // Remove trailing slashes (except root '/')
  if (clean.length > 1 && clean.endsWith('/')) {
    clean = clean.slice(0, -1);
  }

  if (!clean || clean === '') {
    return '/';
  }

  return clean.startsWith('/') ? clean : `/${clean}`;
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
