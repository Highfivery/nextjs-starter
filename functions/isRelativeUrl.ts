export function isRelativeUrl(url: string) {
  return !new RegExp("^(?:[a-z]+:)?//", "i").test(url);
}
