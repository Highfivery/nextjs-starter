/**
 * Convert a WP variable response string to a CSS variable
 */
export default function convertVarToCss(
  variable: string | null | undefined
): string | null {
  if (!variable) {
    return null;
  }

  if (variable.includes("var:")) {
    return `${variable.replaceAll("var:", "var(--wp--")})`.replaceAll(
      "|",
      "--"
    );
  }

  return variable;
}
