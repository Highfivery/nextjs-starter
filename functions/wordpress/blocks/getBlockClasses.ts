// Import types
import { CoreBlockProps } from "@/types/wordpress/blocks";

/**
 * Converts WP GraphQL Gutenberg blocks attributes response to WP classes.
 */
export default function getBlockStyles(
  attributes: CoreBlockProps["attributes"]
) {
  const { backgroundColor, textColor, fontSize, gradient } = attributes;

  const classes = [];

  if (backgroundColor || gradient) {
    classes.push(`has-background`);
  }

  if (backgroundColor) {
    classes.push(`has-${backgroundColor}-background-color`);
  }

  if (textColor) {
    classes.push(`has-${textColor}-color`);
    classes.push(`has-text-color`);
  }

  if (fontSize) {
    classes.push(`has-${fontSize}-font-size`);
  }

  if (gradient) {
    classes.push(`has-${gradient}-gradient-background`);
  }

  return classes;
}
