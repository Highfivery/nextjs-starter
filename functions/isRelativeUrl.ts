/**
 * Determines if a URL is relative.
 */
export function isRelativeUrl(url: string) {
  return !new RegExp("^(?:[a-z]+:)?//", "i").test(url);
}
