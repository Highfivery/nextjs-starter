// Import types
import { CoreBlockProps } from "@/types/wordpress/blocks";

export default function getBlockStyles(
  attributes: Omit<CoreBlockProps, "innerBlocks" | "name">
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
