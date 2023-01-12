/**
 * Check if link is the active page.
 *
 * @see https://nextjs.org/docs/api-reference/next/router#router-object
 */
export default function isLinkActive(asPath: string, path: string) {
  if (!asPath || !path) {
    return false;
  }

  if (path.length > 1) {
    const checkSubStr = new RegExp(path);
    return checkSubStr.test(asPath);
  }

  return path === asPath;
}
