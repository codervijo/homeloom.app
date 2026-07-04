// Single source of truth for host + brand. Apex is canonical (www -> apex).
// Machine-readable entity name is exactly "Homeloom".
export const SITE_URL = "https://homeloom.app";
export const SITE_NAME = "Homeloom";
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

// Absolute apex URL for a route path. "/" keeps its trailing slash; every
// other path is emitted without one, matching our canonical convention.
export function absUrl(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return p === "/" ? `${SITE_URL}/` : `${SITE_URL}${p}`;
}

// Content dates. Update dateModified when a page's real content changes.
export const PUBLISHED = "2026-07-01";
export const MODIFIED = "2026-07-01";
